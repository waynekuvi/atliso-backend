function c(t) {
  const a = t.replace("#", ""), o = parseInt(a.substring(0, 2), 16), e = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16), r = (m) => Math.max(0, Math.min(255, Math.round(m))).toString(16).padStart(2, "0"), s = `#${r(o * 0.8)}${r(e * 0.8)}${r(n * 0.8)}`, l = t, p = `#${r(o + (255 - o) * 0.3)}${r(e + (255 - e) * 0.3)}${r(n + (255 - n) * 0.3)}`, u = `#${r(o + (255 - o) * 0.5)}${r(e + (255 - e) * 0.5)}${r(n + (255 - n) * 0.5)}`;
  return {
    color1: s,
    color2: l,
    color3: p,
    color4: u
  };
}
function h(t, a) {
  return {
    gradient: c(t.primaryColor),
    logo: t.logoUrl || null,
    supportLogo: t.supportLogoUrl || null,
    avatars: t.avatarUrl ? [t.avatarUrl] : [],
    webhookUrl: t.webhookUrl || a,
    botName: t.botName,
    welcomeMessage: t.welcomeMessage,
    position: t.position,
    primaryColor: t.primaryColor,
    launcherText: t.launcherText,
    tagline: t.tagline,
    showBranding: t.showBranding
  };
}
export {
  h as mapConfigToCustomization
};
