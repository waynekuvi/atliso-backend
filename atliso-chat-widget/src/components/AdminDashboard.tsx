import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    BarChart, Bar
} from 'recharts';
import {
    Users, Calendar, TrendingUp, Mail, ArrowLeft, RefreshCcw
} from 'lucide-react';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8000/api/v1';

interface AnalyticsSummary {
    total_leads: number;
    booked_leads: number;
    recovery_emails_sent: number;
    recovered_bookings: number;
}

interface DailyStat {
    date: string;
    leads: number;
    bookings: number;
}

interface Lead {
    name: string;
    email: string;
    score: number;
    status: string;
    is_booked: boolean;
    last_active_at: string;
}

export const AdminDashboard: React.FC = () => {
    const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
    const [dailyStats, setDailyStats] = useState<DailyStat[]>([]);
    const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [sumRes, dailyRes, leadsRes] = await Promise.all([
                axios.get(`${API_BASE_URL}/analytics/summary`),
                axios.get(`${API_BASE_URL}/analytics/daily`),
                axios.get(`${API_BASE_URL}/analytics/leads`)
            ]);
            setSummary(sumRes.data);
            setDailyStats(dailyRes.data);
            setRecentLeads(leadsRes.data);
        } catch (error) {
            console.error('Error fetching analytics:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const conversionRate = summary
        ? ((summary.booked_leads / summary.total_leads) * 100).toFixed(1)
        : '0';

    const recoveryRate = summary && summary.recovery_emails_sent > 0
        ? ((summary.recovered_bookings / summary.recovery_emails_sent) * 100).toFixed(1)
        : '0';

    if (loading && !summary) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin text-indigo-600">
                    <RefreshCcw size={48} />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Analytics Dashboard</h1>
                        <p className="text-gray-500 mt-1">Monitor your chatbot strategy and conversion performance.</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={fetchData}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all shadow-sm"
                        >
                            <RefreshCcw size={16} /> Refresh
                        </button>
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100"
                        >
                            <ArrowLeft size={16} /> Back to Demo
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard
                        title="Total Leads"
                        value={summary?.total_leads || 0}
                        icon={<Users className="text-blue-600" />}
                        color="bg-blue-50"
                    />
                    <StatCard
                        title="Booked Meetings"
                        value={summary?.booked_leads || 0}
                        icon={<Calendar className="text-green-600" />}
                        color="bg-green-50"
                        subValue={`${conversionRate}% Conv. Rate`}
                    />
                    <StatCard
                        title="Smart Recovery"
                        value={summary?.recovery_emails_sent || 0}
                        icon={<Mail className="text-purple-600" />}
                        color="bg-purple-50"
                        subValue="Emails Sent"
                    />
                    <StatCard
                        title="Recovered Revenue"
                        value={summary?.recovered_bookings || 0}
                        icon={<TrendingUp className="text-amber-600" />}
                        color="bg-amber-50"
                        subValue={`${recoveryRate}% Recovery Rate`}
                    />
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Booking Activity (Last 30 Days)</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={dailyStats}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="date"
                                        tickFormatter={(str) => new Date(str).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                        tick={{ fontSize: 12, fill: '#94a3b8' }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        tick={{ fontSize: 12, fill: '#94a3b8' }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend verticalAlign="top" align="right" height={36} iconType="circle" />
                                    <Line
                                        name="All Leads"
                                        type="monotone"
                                        dataKey="leads"
                                        stroke="#6366f1"
                                        strokeWidth={3}
                                        dot={false}
                                        activeDot={{ r: 6, strokeWidth: 0 }}
                                    />
                                    <Line
                                        name="Bookings"
                                        type="monotone"
                                        dataKey="bookings"
                                        stroke="#10b981"
                                        strokeWidth={3}
                                        dot={false}
                                        activeDot={{ r: 6, strokeWidth: 0 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Lead Breakdown</h3>
                        <div className="h-80 flex flex-col justify-center">
                            <div className="space-y-6">
                                <ProgressItem label="Booked Leads" value={summary?.booked_leads || 0} total={summary?.total_leads || 1} color="bg-green-500" />
                                <ProgressItem label="Abandoned Leads" value={(summary?.total_leads || 0) - (summary?.booked_leads || 0)} total={summary?.total_leads || 1} color="bg-gray-400" />
                                <ProgressItem label="Recovered via Email" value={summary?.recovered_bookings || 0} total={summary?.recovery_emails_sent || 1} color="bg-purple-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Leads Table */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-900">Recent Interactions</h3>
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">Live View</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50 text-gray-400 uppercase text-[10px] font-bold tracking-widest">
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Score</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Last Active</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentLeads.map((lead, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-gray-900">{lead.name || 'Anonymous'}</span>
                                                <span className="text-xs text-gray-500">{lead.email || 'No email provided'}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                                    <div className={`h-full ${lead.score >= 70 ? 'bg-green-500' : 'bg-amber-400'}`} style={{ width: `${lead.score}%` }}></div>
                                                </div>
                                                <span className="text-sm font-medium text-gray-700">{lead.score}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight ${lead.is_booked
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-amber-100 text-amber-700'
                                                }`}>
                                                {lead.is_booked ? 'Booked' : lead.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {new Date(lead.last_active_at).toLocaleDateString()} {new Date(lead.last_active_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface StatCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
    color: string;
    subValue?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, subValue }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${color}`}>
                {icon}
            </div>
            {subValue && (
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{subValue}</span>
            )}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            <h2 className="text-3xl font-black text-gray-900">{value.toLocaleString()}</h2>
        </div>
    </div>
);

const ProgressItem: React.FC<{ label: string, value: number, total: number, color: string }> = ({ label, value, total, color }) => (
    <div>
        <div className="flex justify-between text-sm mb-2">
            <span className="font-semibold text-gray-700">{label}</span>
            <span className="font-bold text-gray-900">{((value / total) * 100).toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${(value / total) * 100}%` }}></div>
        </div>
        <div className="mt-1 text-[10px] text-gray-400 uppercase font-bold tracking-widest">{value} of {total} total</div>
    </div>
);
