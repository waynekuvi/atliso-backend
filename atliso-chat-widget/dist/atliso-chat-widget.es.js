function o0(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Oo = { exports: {} }, qn = {};
var Wd;
function s0() {
  if (Wd) return qn;
  Wd = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function f(s, p, b) {
    var S = null;
    if (b !== void 0 && (S = "" + b), p.key !== void 0 && (S = "" + p.key), "key" in p) {
      b = {};
      for (var _ in p)
        _ !== "key" && (b[_] = p[_]);
    } else b = p;
    return p = b.ref, {
      $$typeof: c,
      type: s,
      key: S,
      ref: p !== void 0 ? p : null,
      props: b
    };
  }
  return qn.Fragment = d, qn.jsx = f, qn.jsxs = f, qn;
}
var $d;
function r0() {
  return $d || ($d = 1, Oo.exports = s0()), Oo.exports;
}
var o = r0(), Do = { exports: {} }, at = {};
var Id;
function f0() {
  if (Id) return at;
  Id = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), _ = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function G(m) {
    return m === null || typeof m != "object" ? null : (m = k && m[k] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var et = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Y = Object.assign, K = {};
  function X(m, C, U) {
    this.props = m, this.context = C, this.refs = K, this.updater = U || et;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(m, C) {
    if (typeof m != "object" && typeof m != "function" && m != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, m, C, "setState");
  }, X.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function dt() {
  }
  dt.prototype = X.prototype;
  function ct(m, C, U) {
    this.props = m, this.context = C, this.refs = K, this.updater = U || et;
  }
  var it = ct.prototype = new dt();
  it.constructor = ct, Y(it, X.prototype), it.isPureReactComponent = !0;
  var gt = Array.isArray;
  function st() {
  }
  var tt = { H: null, A: null, T: null, S: null }, Q = Object.prototype.hasOwnProperty;
  function Mt(m, C, U) {
    var H = U.ref;
    return {
      $$typeof: c,
      type: m,
      key: C,
      ref: H !== void 0 ? H : null,
      props: U
    };
  }
  function he(m, C) {
    return Mt(m.type, C, m.props);
  }
  function Ft(m) {
    return typeof m == "object" && m !== null && m.$$typeof === c;
  }
  function Ut(m) {
    var C = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(U) {
      return C[U];
    });
  }
  var vt = /\/+/g;
  function bt(m, C) {
    return typeof m == "object" && m !== null && m.key != null ? Ut("" + m.key) : C.toString(36);
  }
  function kt(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(st, st) : (m.status = "pending", m.then(
          function(C) {
            m.status === "pending" && (m.status = "fulfilled", m.value = C);
          },
          function(C) {
            m.status === "pending" && (m.status = "rejected", m.reason = C);
          }
        )), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function T(m, C, U, H, J) {
    var lt = typeof m;
    (lt === "undefined" || lt === "boolean") && (m = null);
    var W = !1;
    if (m === null) W = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case c:
            case d:
              W = !0;
              break;
            case R:
              return W = m._init, T(
                W(m._payload),
                C,
                U,
                H,
                J
              );
          }
      }
    if (W)
      return J = J(m), W = H === "" ? "." + bt(m, 0) : H, gt(J) ? (U = "", W != null && (U = W.replace(vt, "$&/") + "/"), T(J, C, U, "", function(ie) {
        return ie;
      })) : J != null && (Ft(J) && (J = he(
        J,
        U + (J.key == null || m && m.key === J.key ? "" : ("" + J.key).replace(
          vt,
          "$&/"
        ) + "/") + W
      )), C.push(J)), 1;
    W = 0;
    var Rt = H === "" ? "." : H + ":";
    if (gt(m))
      for (var pt = 0; pt < m.length; pt++)
        H = m[pt], lt = Rt + bt(H, pt), W += T(
          H,
          C,
          U,
          lt,
          J
        );
    else if (pt = G(m), typeof pt == "function")
      for (m = pt.call(m), pt = 0; !(H = m.next()).done; )
        H = H.value, lt = Rt + bt(H, pt++), W += T(
          H,
          C,
          U,
          lt,
          J
        );
    else if (lt === "object") {
      if (typeof m.then == "function")
        return T(
          kt(m),
          C,
          U,
          H,
          J
        );
      throw C = String(m), Error(
        "Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return W;
  }
  function B(m, C, U) {
    if (m == null) return m;
    var H = [], J = 0;
    return T(m, H, "", "", function(lt) {
      return C.call(U, lt, J++);
    }), H;
  }
  function N(m) {
    if (m._status === -1) {
      var C = m._result;
      C = C(), C.then(
        function(U) {
          (m._status === 0 || m._status === -1) && (m._status = 1, m._result = U);
        },
        function(U) {
          (m._status === 0 || m._status === -1) && (m._status = 2, m._result = U);
        }
      ), m._status === -1 && (m._status = 0, m._result = C);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var P = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var C = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(C)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, $ = {
    map: B,
    forEach: function(m, C, U) {
      B(
        m,
        function() {
          C.apply(this, arguments);
        },
        U
      );
    },
    count: function(m) {
      var C = 0;
      return B(m, function() {
        C++;
      }), C;
    },
    toArray: function(m) {
      return B(m, function(C) {
        return C;
      }) || [];
    },
    only: function(m) {
      if (!Ft(m))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return m;
    }
  };
  return at.Activity = E, at.Children = $, at.Component = X, at.Fragment = f, at.Profiler = p, at.PureComponent = ct, at.StrictMode = s, at.Suspense = A, at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tt, at.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return tt.H.useMemoCache(m);
    }
  }, at.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, at.cacheSignal = function() {
    return null;
  }, at.cloneElement = function(m, C, U) {
    if (m == null)
      throw Error(
        "The argument must be a React element, but you passed " + m + "."
      );
    var H = Y({}, m.props), J = m.key;
    if (C != null)
      for (lt in C.key !== void 0 && (J = "" + C.key), C)
        !Q.call(C, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && C.ref === void 0 || (H[lt] = C[lt]);
    var lt = arguments.length - 2;
    if (lt === 1) H.children = U;
    else if (1 < lt) {
      for (var W = Array(lt), Rt = 0; Rt < lt; Rt++)
        W[Rt] = arguments[Rt + 2];
      H.children = W;
    }
    return Mt(m.type, J, H);
  }, at.createContext = function(m) {
    return m = {
      $$typeof: S,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: b,
      _context: m
    }, m;
  }, at.createElement = function(m, C, U) {
    var H, J = {}, lt = null;
    if (C != null)
      for (H in C.key !== void 0 && (lt = "" + C.key), C)
        Q.call(C, H) && H !== "key" && H !== "__self" && H !== "__source" && (J[H] = C[H]);
    var W = arguments.length - 2;
    if (W === 1) J.children = U;
    else if (1 < W) {
      for (var Rt = Array(W), pt = 0; pt < W; pt++)
        Rt[pt] = arguments[pt + 2];
      J.children = Rt;
    }
    if (m && m.defaultProps)
      for (H in W = m.defaultProps, W)
        J[H] === void 0 && (J[H] = W[H]);
    return Mt(m, lt, J);
  }, at.createRef = function() {
    return { current: null };
  }, at.forwardRef = function(m) {
    return { $$typeof: _, render: m };
  }, at.isValidElement = Ft, at.lazy = function(m) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: m },
      _init: N
    };
  }, at.memo = function(m, C) {
    return {
      $$typeof: v,
      type: m,
      compare: C === void 0 ? null : C
    };
  }, at.startTransition = function(m) {
    var C = tt.T, U = {};
    tt.T = U;
    try {
      var H = m(), J = tt.S;
      J !== null && J(U, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(st, P);
    } catch (lt) {
      P(lt);
    } finally {
      C !== null && U.types !== null && (C.types = U.types), tt.T = C;
    }
  }, at.unstable_useCacheRefresh = function() {
    return tt.H.useCacheRefresh();
  }, at.use = function(m) {
    return tt.H.use(m);
  }, at.useActionState = function(m, C, U) {
    return tt.H.useActionState(m, C, U);
  }, at.useCallback = function(m, C) {
    return tt.H.useCallback(m, C);
  }, at.useContext = function(m) {
    return tt.H.useContext(m);
  }, at.useDebugValue = function() {
  }, at.useDeferredValue = function(m, C) {
    return tt.H.useDeferredValue(m, C);
  }, at.useEffect = function(m, C) {
    return tt.H.useEffect(m, C);
  }, at.useEffectEvent = function(m) {
    return tt.H.useEffectEvent(m);
  }, at.useId = function() {
    return tt.H.useId();
  }, at.useImperativeHandle = function(m, C, U) {
    return tt.H.useImperativeHandle(m, C, U);
  }, at.useInsertionEffect = function(m, C) {
    return tt.H.useInsertionEffect(m, C);
  }, at.useLayoutEffect = function(m, C) {
    return tt.H.useLayoutEffect(m, C);
  }, at.useMemo = function(m, C) {
    return tt.H.useMemo(m, C);
  }, at.useOptimistic = function(m, C) {
    return tt.H.useOptimistic(m, C);
  }, at.useReducer = function(m, C, U) {
    return tt.H.useReducer(m, C, U);
  }, at.useRef = function(m) {
    return tt.H.useRef(m);
  }, at.useState = function(m) {
    return tt.H.useState(m);
  }, at.useSyncExternalStore = function(m, C, U) {
    return tt.H.useSyncExternalStore(
      m,
      C,
      U
    );
  }, at.useTransition = function() {
    return tt.H.useTransition();
  }, at.version = "19.2.3", at;
}
var Pd;
function Xo() {
  return Pd || (Pd = 1, Do.exports = f0()), Do.exports;
}
var xt = Xo();
const Ln = /* @__PURE__ */ o0(xt);
var Uo = { exports: {} }, Gn = {}, Ro = { exports: {} }, Ho = {};
var th;
function d0() {
  return th || (th = 1, (function(c) {
    function d(T, B) {
      var N = T.length;
      T.push(B);
      t: for (; 0 < N; ) {
        var P = N - 1 >>> 1, $ = T[P];
        if (0 < p($, B))
          T[P] = B, T[N] = $, N = P;
        else break t;
      }
    }
    function f(T) {
      return T.length === 0 ? null : T[0];
    }
    function s(T) {
      if (T.length === 0) return null;
      var B = T[0], N = T.pop();
      if (N !== B) {
        T[0] = N;
        t: for (var P = 0, $ = T.length, m = $ >>> 1; P < m; ) {
          var C = 2 * (P + 1) - 1, U = T[C], H = C + 1, J = T[H];
          if (0 > p(U, N))
            H < $ && 0 > p(J, U) ? (T[P] = J, T[H] = N, P = H) : (T[P] = U, T[C] = N, P = C);
          else if (H < $ && 0 > p(J, N))
            T[P] = J, T[H] = N, P = H;
          else break t;
        }
      }
      return B;
    }
    function p(T, B) {
      var N = T.sortIndex - B.sortIndex;
      return N !== 0 ? N : T.id - B.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      c.unstable_now = function() {
        return b.now();
      };
    } else {
      var S = Date, _ = S.now();
      c.unstable_now = function() {
        return S.now() - _;
      };
    }
    var A = [], v = [], R = 1, E = null, k = 3, G = !1, et = !1, Y = !1, K = !1, X = typeof setTimeout == "function" ? setTimeout : null, dt = typeof clearTimeout == "function" ? clearTimeout : null, ct = typeof setImmediate < "u" ? setImmediate : null;
    function it(T) {
      for (var B = f(v); B !== null; ) {
        if (B.callback === null) s(v);
        else if (B.startTime <= T)
          s(v), B.sortIndex = B.expirationTime, d(A, B);
        else break;
        B = f(v);
      }
    }
    function gt(T) {
      if (Y = !1, it(T), !et)
        if (f(A) !== null)
          et = !0, st || (st = !0, Ut());
        else {
          var B = f(v);
          B !== null && kt(gt, B.startTime - T);
        }
    }
    var st = !1, tt = -1, Q = 5, Mt = -1;
    function he() {
      return K ? !0 : !(c.unstable_now() - Mt < Q);
    }
    function Ft() {
      if (K = !1, st) {
        var T = c.unstable_now();
        Mt = T;
        var B = !0;
        try {
          t: {
            et = !1, Y && (Y = !1, dt(tt), tt = -1), G = !0;
            var N = k;
            try {
              e: {
                for (it(T), E = f(A); E !== null && !(E.expirationTime > T && he()); ) {
                  var P = E.callback;
                  if (typeof P == "function") {
                    E.callback = null, k = E.priorityLevel;
                    var $ = P(
                      E.expirationTime <= T
                    );
                    if (T = c.unstable_now(), typeof $ == "function") {
                      E.callback = $, it(T), B = !0;
                      break e;
                    }
                    E === f(A) && s(A), it(T);
                  } else s(A);
                  E = f(A);
                }
                if (E !== null) B = !0;
                else {
                  var m = f(v);
                  m !== null && kt(
                    gt,
                    m.startTime - T
                  ), B = !1;
                }
              }
              break t;
            } finally {
              E = null, k = N, G = !1;
            }
            B = void 0;
          }
        } finally {
          B ? Ut() : st = !1;
        }
      }
    }
    var Ut;
    if (typeof ct == "function")
      Ut = function() {
        ct(Ft);
      };
    else if (typeof MessageChannel < "u") {
      var vt = new MessageChannel(), bt = vt.port2;
      vt.port1.onmessage = Ft, Ut = function() {
        bt.postMessage(null);
      };
    } else
      Ut = function() {
        X(Ft, 0);
      };
    function kt(T, B) {
      tt = X(function() {
        T(c.unstable_now());
      }, B);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, c.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Q = 0 < T ? Math.floor(1e3 / T) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, c.unstable_next = function(T) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = k;
      }
      var N = k;
      k = B;
      try {
        return T();
      } finally {
        k = N;
      }
    }, c.unstable_requestPaint = function() {
      K = !0;
    }, c.unstable_runWithPriority = function(T, B) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var N = k;
      k = T;
      try {
        return B();
      } finally {
        k = N;
      }
    }, c.unstable_scheduleCallback = function(T, B, N) {
      var P = c.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? P + N : P) : N = P, T) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = N + $, T = {
        id: R++,
        callback: B,
        priorityLevel: T,
        startTime: N,
        expirationTime: $,
        sortIndex: -1
      }, N > P ? (T.sortIndex = N, d(v, T), f(A) === null && T === f(v) && (Y ? (dt(tt), tt = -1) : Y = !0, kt(gt, N - P))) : (T.sortIndex = $, d(A, T), et || G || (et = !0, st || (st = !0, Ut()))), T;
    }, c.unstable_shouldYield = he, c.unstable_wrapCallback = function(T) {
      var B = k;
      return function() {
        var N = k;
        k = B;
        try {
          return T.apply(this, arguments);
        } finally {
          k = N;
        }
      };
    };
  })(Ho)), Ho;
}
var eh;
function h0() {
  return eh || (eh = 1, Ro.exports = d0()), Ro.exports;
}
var ko = { exports: {} }, ae = {};
var lh;
function m0() {
  if (lh) return ae;
  lh = 1;
  var c = Xo();
  function d(A) {
    var v = "https://react.dev/errors/" + A;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        v += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + A + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var s = {
    d: {
      f,
      r: function() {
        throw Error(d(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, p = /* @__PURE__ */ Symbol.for("react.portal");
  function b(A, v, R) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: p,
      key: E == null ? null : "" + E,
      children: A,
      containerInfo: v,
      implementation: R
    };
  }
  var S = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(A, v) {
    if (A === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, ae.createPortal = function(A, v) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(d(299));
    return b(A, v, null, R);
  }, ae.flushSync = function(A) {
    var v = S.T, R = s.p;
    try {
      if (S.T = null, s.p = 2, A) return A();
    } finally {
      S.T = v, s.p = R, s.d.f();
    }
  }, ae.preconnect = function(A, v) {
    typeof A == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, s.d.C(A, v));
  }, ae.prefetchDNS = function(A) {
    typeof A == "string" && s.d.D(A);
  }, ae.preinit = function(A, v) {
    if (typeof A == "string" && v && typeof v.as == "string") {
      var R = v.as, E = _(R, v.crossOrigin), k = typeof v.integrity == "string" ? v.integrity : void 0, G = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      R === "style" ? s.d.S(
        A,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: E,
          integrity: k,
          fetchPriority: G
        }
      ) : R === "script" && s.d.X(A, {
        crossOrigin: E,
        integrity: k,
        fetchPriority: G,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, ae.preinitModule = function(A, v) {
    if (typeof A == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var R = _(
            v.as,
            v.crossOrigin
          );
          s.d.M(A, {
            crossOrigin: R,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && s.d.M(A);
  }, ae.preload = function(A, v) {
    if (typeof A == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var R = v.as, E = _(R, v.crossOrigin);
      s.d.L(A, R, {
        crossOrigin: E,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, ae.preloadModule = function(A, v) {
    if (typeof A == "string")
      if (v) {
        var R = _(v.as, v.crossOrigin);
        s.d.m(A, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: R,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else s.d.m(A);
  }, ae.requestFormReset = function(A) {
    s.d.r(A);
  }, ae.unstable_batchedUpdates = function(A, v) {
    return A(v);
  }, ae.useFormState = function(A, v, R) {
    return S.H.useFormState(A, v, R);
  }, ae.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, ae.version = "19.2.3", ae;
}
var ah;
function g0() {
  if (ah) return ko.exports;
  ah = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
  }
  return c(), ko.exports = m0(), ko.exports;
}
var nh;
function p0() {
  if (nh) return Gn;
  nh = 1;
  var c = h0(), d = Xo(), f = g0();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function b(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function S(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function _(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function A(t) {
    if (b(t) !== t)
      throw Error(s(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = b(t), e === null) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return A(n), t;
          if (i === a) return A(n), e;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var u = !1, r = n.child; r; ) {
          if (r === l) {
            u = !0, l = n, a = i;
            break;
          }
          if (r === a) {
            u = !0, a = n, l = i;
            break;
          }
          r = r.sibling;
        }
        if (!u) {
          for (r = i.child; r; ) {
            if (r === l) {
              u = !0, l = i, a = n;
              break;
            }
            if (r === a) {
              u = !0, a = i, l = n;
              break;
            }
            r = r.sibling;
          }
          if (!u) throw Error(s(189));
        }
      }
      if (l.alternate !== a) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? t : e;
  }
  function R(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = R(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var E = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), G = /* @__PURE__ */ Symbol.for("react.transitional.element"), et = /* @__PURE__ */ Symbol.for("react.portal"), Y = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), X = /* @__PURE__ */ Symbol.for("react.profiler"), dt = /* @__PURE__ */ Symbol.for("react.consumer"), ct = /* @__PURE__ */ Symbol.for("react.context"), it = /* @__PURE__ */ Symbol.for("react.forward_ref"), gt = /* @__PURE__ */ Symbol.for("react.suspense"), st = /* @__PURE__ */ Symbol.for("react.suspense_list"), tt = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), Mt = /* @__PURE__ */ Symbol.for("react.activity"), he = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ft = Symbol.iterator;
  function Ut(t) {
    return t === null || typeof t != "object" ? null : (t = Ft && t[Ft] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var vt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function bt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === vt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Y:
        return "Fragment";
      case X:
        return "Profiler";
      case K:
        return "StrictMode";
      case gt:
        return "Suspense";
      case st:
        return "SuspenseList";
      case Mt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case et:
          return "Portal";
        case ct:
          return t.displayName || "Context";
        case dt:
          return (t._context.displayName || "Context") + ".Consumer";
        case it:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case tt:
          return e = t.displayName || null, e !== null ? e : bt(t.type) || "Memo";
        case Q:
          e = t._payload, t = t._init;
          try {
            return bt(t(e));
          } catch {
          }
      }
    return null;
  }
  var kt = Array.isArray, T = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, P = [], $ = -1;
  function m(t) {
    return { current: t };
  }
  function C(t) {
    0 > $ || (t.current = P[$], P[$] = null, $--);
  }
  function U(t, e) {
    $++, P[$] = t.current, t.current = e;
  }
  var H = m(null), J = m(null), lt = m(null), W = m(null);
  function Rt(t, e) {
    switch (U(lt, e), U(J, t), U(H, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? bd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = bd(e), t = xd(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    C(H), U(H, t);
  }
  function pt() {
    C(H), C(J), C(lt);
  }
  function ie(t) {
    t.memoizedState !== null && U(W, t);
    var e = H.current, l = xd(e, t.type);
    e !== l && (U(J, t), U(H, l));
  }
  function sl(t) {
    J.current === t && (C(H), C(J)), W.current === t && (C(W), Rn._currentValue = N);
  }
  var rl, Jo;
  function kl(t) {
    if (rl === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        rl = e && e[1] || "", Jo = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + rl + t + Jo;
  }
  var mu = !1;
  function gu(t, e) {
    if (!t || mu) return "";
    mu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var D = function() {
                throw Error();
              };
              if (Object.defineProperty(D.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(D, []);
                } catch (j) {
                  var z = j;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (j) {
                  z = j;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                z = j;
              }
              (D = t()) && typeof D.catch == "function" && D.catch(function() {
              });
            }
          } catch (j) {
            if (j && z && typeof j.stack == "string")
              return [j.stack, z.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), u = i[0], r = i[1];
      if (u && r) {
        var h = u.split(`
`), w = r.split(`
`);
        for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < w.length && !w[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === h.length || n === w.length)
          for (a = h.length - 1, n = w.length - 1; 1 <= a && 0 <= n && h[a] !== w[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== w[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || h[a] !== w[n]) {
                  var M = `
` + h[a].replace(" at new ", " at ");
                  return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), M;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      mu = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? kl(l) : "";
  }
  function qh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return kl(t.type);
      case 16:
        return kl("Lazy");
      case 13:
        return t.child !== e && e !== null ? kl("Suspense Fallback") : kl("Suspense");
      case 19:
        return kl("SuspenseList");
      case 0:
      case 15:
        return gu(t.type, !1);
      case 11:
        return gu(t.type.render, !1);
      case 1:
        return gu(t.type, !0);
      case 31:
        return kl("Activity");
      default:
        return "";
    }
  }
  function Fo(t) {
    try {
      var e = "", l = null;
      do
        e += qh(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var pu = Object.prototype.hasOwnProperty, yu = c.unstable_scheduleCallback, vu = c.unstable_cancelCallback, Gh = c.unstable_shouldYield, Yh = c.unstable_requestPaint, me = c.unstable_now, Lh = c.unstable_getCurrentPriorityLevel, Wo = c.unstable_ImmediatePriority, $o = c.unstable_UserBlockingPriority, Xn = c.unstable_NormalPriority, Vh = c.unstable_LowPriority, Io = c.unstable_IdlePriority, Xh = c.log, Qh = c.unstable_setDisableYieldValue, Za = null, ge = null;
  function fl(t) {
    if (typeof Xh == "function" && Qh(t), ge && typeof ge.setStrictMode == "function")
      try {
        ge.setStrictMode(Za, t);
      } catch {
      }
  }
  var pe = Math.clz32 ? Math.clz32 : Jh, Zh = Math.log, Kh = Math.LN2;
  function Jh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Zh(t) / Kh | 0) | 0;
  }
  var Qn = 256, Zn = 262144, Kn = 4194304;
  function Bl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Jn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = t.suspendedLanes, u = t.pingedLanes;
    t = t.warmLanes;
    var r = a & 134217727;
    return r !== 0 ? (a = r & ~i, a !== 0 ? n = Bl(a) : (u &= r, u !== 0 ? n = Bl(u) : l || (l = r & ~t, l !== 0 && (n = Bl(l))))) : (r = a & ~i, r !== 0 ? n = Bl(r) : u !== 0 ? n = Bl(u) : l || (l = a & ~t, l !== 0 && (n = Bl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function Ka(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Fh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Po() {
    var t = Kn;
    return Kn <<= 1, (Kn & 62914560) === 0 && (Kn = 4194304), t;
  }
  function bu(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ja(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Wh(t, e, l, a, n, i) {
    var u = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var r = t.entanglements, h = t.expirationTimes, w = t.hiddenUpdates;
    for (l = u & ~l; 0 < l; ) {
      var M = 31 - pe(l), D = 1 << M;
      r[M] = 0, h[M] = -1;
      var z = w[M];
      if (z !== null)
        for (w[M] = null, M = 0; M < z.length; M++) {
          var j = z[M];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~D;
    }
    a !== 0 && ts(t, a, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~e));
  }
  function ts(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - pe(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function es(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - pe(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function ls(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : xu(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function xu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Su(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function as() {
    var t = B.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Vd(t.type));
  }
  function ns(t, e) {
    var l = B.p;
    try {
      return B.p = t, e();
    } finally {
      B.p = l;
    }
  }
  var dl = Math.random().toString(36).slice(2), It = "__reactFiber$" + dl, ue = "__reactProps$" + dl, na = "__reactContainer$" + dl, wu = "__reactEvents$" + dl, $h = "__reactListeners$" + dl, Ih = "__reactHandles$" + dl, is = "__reactResources$" + dl, Fa = "__reactMarker$" + dl;
  function Au(t) {
    delete t[It], delete t[ue], delete t[wu], delete t[$h], delete t[Ih];
  }
  function ia(t) {
    var e = t[It];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[na] || l[It]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = Ed(t); t !== null; ) {
            if (l = t[It]) return l;
            t = Ed(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function ua(t) {
    if (t = t[It] || t[na]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Wa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function ca(t) {
    var e = t[is];
    return e || (e = t[is] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Wt(t) {
    t[Fa] = !0;
  }
  var us = /* @__PURE__ */ new Set(), cs = {};
  function ql(t, e) {
    oa(t, e), oa(t + "Capture", e);
  }
  function oa(t, e) {
    for (cs[t] = e, t = 0; t < e.length; t++)
      us.add(e[t]);
  }
  var Ph = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), os = {}, ss = {};
  function tm(t) {
    return pu.call(ss, t) ? !0 : pu.call(os, t) ? !1 : Ph.test(t) ? ss[t] = !0 : (os[t] = !0, !1);
  }
  function Fn(t, e, l) {
    if (tm(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Wn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ve(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function je(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function rs(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function em(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(u) {
          l = "" + u, i.call(this, u);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(u) {
          l = "" + u;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function zu(t) {
    if (!t._valueTracker) {
      var e = rs(t) ? "checked" : "value";
      t._valueTracker = em(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function fs(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = rs(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function $n(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var lm = /[\n"\\]/g;
  function Te(t) {
    return t.replace(
      lm,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ju(t, e, l, a, n, i, u, r) {
    t.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.type = u : t.removeAttribute("type"), e != null ? u === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + je(e)) : t.value !== "" + je(e) && (t.value = "" + je(e)) : u !== "submit" && u !== "reset" || t.removeAttribute("value"), e != null ? Tu(t, u, je(e)) : l != null ? Tu(t, u, je(l)) : a != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + je(r) : t.removeAttribute("name");
  }
  function ds(t, e, l, a, n, i, u, r) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        zu(t);
        return;
      }
      l = l != null ? "" + je(l) : "", e = e != null ? "" + je(e) : l, r || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = r ? t.checked : !!a, t.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.name = u), zu(t);
  }
  function Tu(t, e, l) {
    e === "number" && $n(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function sa(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + je(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function hs(t, e, l) {
    if (e != null && (e = "" + je(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + je(l) : "";
  }
  function ms(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(s(92));
        if (kt(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = je(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), zu(t);
  }
  function ra(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var am = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gs(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || am.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function ps(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(s(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && gs(t, n, a);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && gs(t, i, e[i]);
  }
  function Eu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), im = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function In(t) {
    return im.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Xe() {
  }
  var Nu = null;
  function Cu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var fa = null, da = null;
  function ys(t) {
    var e = ua(t);
    if (e && (t = e.stateNode)) {
      var l = t[ue] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (ju(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Te(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ue] || null;
                if (!n) throw Error(s(90));
                ju(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && fs(a);
          }
          break t;
        case "textarea":
          hs(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && sa(t, !!l.multiple, e, !1);
      }
    }
  }
  var Mu = !1;
  function vs(t, e, l) {
    if (Mu) return t(e, l);
    Mu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Mu = !1, (fa !== null || da !== null) && (qi(), fa && (e = fa, t = da, da = fa = null, ys(e), t)))
        for (e = 0; e < t.length; e++) ys(t[e]);
    }
  }
  function $a(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[ue] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        s(231, e, typeof l)
      );
    return l;
  }
  var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _u = !1;
  if (Qe)
    try {
      var Ia = {};
      Object.defineProperty(Ia, "passive", {
        get: function() {
          _u = !0;
        }
      }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
    } catch {
      _u = !1;
    }
  var hl = null, Ou = null, Pn = null;
  function bs() {
    if (Pn) return Pn;
    var t, e = Ou, l = e.length, a, n = "value" in hl ? hl.value : hl.textContent, i = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var u = l - t;
    for (a = 1; a <= u && e[l - a] === n[i - a]; a++) ;
    return Pn = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function ti(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ei() {
    return !0;
  }
  function xs() {
    return !1;
  }
  function ce(t) {
    function e(l, a, n, i, u) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var r in t)
        t.hasOwnProperty(r) && (l = t[r], this[r] = l ? l(i) : i[r]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ei : xs, this.isPropagationStopped = xs, this;
    }
    return E(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ei);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ei);
      },
      persist: function() {
      },
      isPersistent: ei
    }), e;
  }
  var Gl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, li = ce(Gl), Pa = E({}, Gl, { view: 0, detail: 0 }), um = ce(Pa), Du, Uu, tn, ai = E({}, Pa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== tn && (tn && t.type === "mousemove" ? (Du = t.screenX - tn.screenX, Uu = t.screenY - tn.screenY) : Uu = Du = 0, tn = t), Du);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Uu;
    }
  }), Ss = ce(ai), cm = E({}, ai, { dataTransfer: 0 }), om = ce(cm), sm = E({}, Pa, { relatedTarget: 0 }), Ru = ce(sm), rm = E({}, Gl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fm = ce(rm), dm = E({}, Gl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), hm = ce(dm), mm = E({}, Gl, { data: 0 }), ws = ce(mm), gm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, pm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ym = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function vm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = ym[t]) ? !!e[t] : !1;
  }
  function Hu() {
    return vm;
  }
  var bm = E({}, Pa, {
    key: function(t) {
      if (t.key) {
        var e = gm[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = ti(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? pm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hu,
    charCode: function(t) {
      return t.type === "keypress" ? ti(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? ti(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), xm = ce(bm), Sm = E({}, ai, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), As = ce(Sm), wm = E({}, Pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hu
  }), Am = ce(wm), zm = E({}, Gl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jm = ce(zm), Tm = E({}, ai, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Em = ce(Tm), Nm = E({}, Gl, {
    newState: 0,
    oldState: 0
  }), Cm = ce(Nm), Mm = [9, 13, 27, 32], ku = Qe && "CompositionEvent" in window, en = null;
  Qe && "documentMode" in document && (en = document.documentMode);
  var _m = Qe && "TextEvent" in window && !en, zs = Qe && (!ku || en && 8 < en && 11 >= en), js = " ", Ts = !1;
  function Es(t, e) {
    switch (t) {
      case "keyup":
        return Mm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ns(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ha = !1;
  function Om(t, e) {
    switch (t) {
      case "compositionend":
        return Ns(e);
      case "keypress":
        return e.which !== 32 ? null : (Ts = !0, js);
      case "textInput":
        return t = e.data, t === js && Ts ? null : t;
      default:
        return null;
    }
  }
  function Dm(t, e) {
    if (ha)
      return t === "compositionend" || !ku && Es(t, e) ? (t = bs(), Pn = Ou = hl = null, ha = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return zs && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Um = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Cs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Um[t.type] : e === "textarea";
  }
  function Ms(t, e, l, a) {
    fa ? da ? da.push(a) : da = [a] : fa = a, e = Zi(e, "onChange"), 0 < e.length && (l = new li(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var ln = null, an = null;
  function Rm(t) {
    hd(t, 0);
  }
  function ni(t) {
    var e = Wa(t);
    if (fs(e)) return t;
  }
  function _s(t, e) {
    if (t === "change") return e;
  }
  var Os = !1;
  if (Qe) {
    var Bu;
    if (Qe) {
      var qu = "oninput" in document;
      if (!qu) {
        var Ds = document.createElement("div");
        Ds.setAttribute("oninput", "return;"), qu = typeof Ds.oninput == "function";
      }
      Bu = qu;
    } else Bu = !1;
    Os = Bu && (!document.documentMode || 9 < document.documentMode);
  }
  function Us() {
    ln && (ln.detachEvent("onpropertychange", Rs), an = ln = null);
  }
  function Rs(t) {
    if (t.propertyName === "value" && ni(an)) {
      var e = [];
      Ms(
        e,
        an,
        t,
        Cu(t)
      ), vs(Rm, e);
    }
  }
  function Hm(t, e, l) {
    t === "focusin" ? (Us(), ln = e, an = l, ln.attachEvent("onpropertychange", Rs)) : t === "focusout" && Us();
  }
  function km(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ni(an);
  }
  function Bm(t, e) {
    if (t === "click") return ni(e);
  }
  function qm(t, e) {
    if (t === "input" || t === "change")
      return ni(e);
  }
  function Gm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ye = typeof Object.is == "function" ? Object.is : Gm;
  function nn(t, e) {
    if (ye(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!pu.call(e, n) || !ye(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Hs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ks(t, e) {
    var l = Hs(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Hs(l);
    }
  }
  function Bs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Bs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function qs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = $n(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = $n(t.document);
    }
    return e;
  }
  function Gu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Ym = Qe && "documentMode" in document && 11 >= document.documentMode, ma = null, Yu = null, un = null, Lu = !1;
  function Gs(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Lu || ma == null || ma !== $n(a) || (a = ma, "selectionStart" in a && Gu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), un && nn(un, a) || (un = a, a = Zi(Yu, "onSelect"), 0 < a.length && (e = new li(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = ma)));
  }
  function Yl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var ga = {
    animationend: Yl("Animation", "AnimationEnd"),
    animationiteration: Yl("Animation", "AnimationIteration"),
    animationstart: Yl("Animation", "AnimationStart"),
    transitionrun: Yl("Transition", "TransitionRun"),
    transitionstart: Yl("Transition", "TransitionStart"),
    transitioncancel: Yl("Transition", "TransitionCancel"),
    transitionend: Yl("Transition", "TransitionEnd")
  }, Vu = {}, Ys = {};
  Qe && (Ys = document.createElement("div").style, "AnimationEvent" in window || (delete ga.animationend.animation, delete ga.animationiteration.animation, delete ga.animationstart.animation), "TransitionEvent" in window || delete ga.transitionend.transition);
  function Ll(t) {
    if (Vu[t]) return Vu[t];
    if (!ga[t]) return t;
    var e = ga[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Ys)
        return Vu[t] = e[l];
    return t;
  }
  var Ls = Ll("animationend"), Vs = Ll("animationiteration"), Xs = Ll("animationstart"), Lm = Ll("transitionrun"), Vm = Ll("transitionstart"), Xm = Ll("transitioncancel"), Qs = Ll("transitionend"), Zs = /* @__PURE__ */ new Map(), Xu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Xu.push("scrollEnd");
  function Re(t, e) {
    Zs.set(t, e), ql(e, [t]);
  }
  var ii = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ee = [], pa = 0, Qu = 0;
  function ui() {
    for (var t = pa, e = Qu = pa = 0; e < t; ) {
      var l = Ee[e];
      Ee[e++] = null;
      var a = Ee[e];
      Ee[e++] = null;
      var n = Ee[e];
      Ee[e++] = null;
      var i = Ee[e];
      if (Ee[e++] = null, a !== null && n !== null) {
        var u = a.pending;
        u === null ? n.next = n : (n.next = u.next, u.next = n), a.pending = n;
      }
      i !== 0 && Ks(l, n, i);
    }
  }
  function ci(t, e, l, a) {
    Ee[pa++] = t, Ee[pa++] = e, Ee[pa++] = l, Ee[pa++] = a, Qu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Zu(t, e, l, a) {
    return ci(t, e, l, a), oi(t);
  }
  function Vl(t, e) {
    return ci(t, null, null, e), oi(t);
  }
  function Ks(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && e !== null && (n = 31 - pe(l), t = i.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), i) : null;
  }
  function oi(t) {
    if (50 < Nn)
      throw Nn = 0, eo = null, Error(s(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ya = {};
  function Qm(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ve(t, e, l, a) {
    return new Qm(t, e, l, a);
  }
  function Ku(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ze(t, e) {
    var l = t.alternate;
    return l === null ? (l = ve(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Js(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function si(t, e, l, a, n, i) {
    var u = 0;
    if (a = t, typeof t == "function") Ku(t) && (u = 1);
    else if (typeof t == "string")
      u = Wg(
        t,
        l,
        H.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Mt:
          return t = ve(31, l, e, n), t.elementType = Mt, t.lanes = i, t;
        case Y:
          return Xl(l.children, n, i, e);
        case K:
          u = 8, n |= 24;
          break;
        case X:
          return t = ve(12, l, e, n | 2), t.elementType = X, t.lanes = i, t;
        case gt:
          return t = ve(13, l, e, n), t.elementType = gt, t.lanes = i, t;
        case st:
          return t = ve(19, l, e, n), t.elementType = st, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ct:
                u = 10;
                break t;
              case dt:
                u = 9;
                break t;
              case it:
                u = 11;
                break t;
              case tt:
                u = 14;
                break t;
              case Q:
                u = 16, a = null;
                break t;
            }
          u = 29, l = Error(
            s(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = ve(u, l, e, n), e.elementType = t, e.type = a, e.lanes = i, e;
  }
  function Xl(t, e, l, a) {
    return t = ve(7, t, a, e), t.lanes = l, t;
  }
  function Ju(t, e, l) {
    return t = ve(6, t, null, e), t.lanes = l, t;
  }
  function Fs(t) {
    var e = ve(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Fu(t, e, l) {
    return e = ve(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Ws = /* @__PURE__ */ new WeakMap();
  function Ne(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Ws.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Fo(e)
      }, Ws.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Fo(e)
    };
  }
  var va = [], ba = 0, ri = null, cn = 0, Ce = [], Me = 0, ml = null, Be = 1, qe = "";
  function Ke(t, e) {
    va[ba++] = cn, va[ba++] = ri, ri = t, cn = e;
  }
  function $s(t, e, l) {
    Ce[Me++] = Be, Ce[Me++] = qe, Ce[Me++] = ml, ml = t;
    var a = Be;
    t = qe;
    var n = 32 - pe(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - pe(e) + n;
    if (30 < i) {
      var u = n - n % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, n -= u, Be = 1 << 32 - pe(e) + n | l << n | a, qe = i + t;
    } else
      Be = 1 << i | l << n | a, qe = t;
  }
  function Wu(t) {
    t.return !== null && (Ke(t, 1), $s(t, 1, 0));
  }
  function $u(t) {
    for (; t === ri; )
      ri = va[--ba], va[ba] = null, cn = va[--ba], va[ba] = null;
    for (; t === ml; )
      ml = Ce[--Me], Ce[Me] = null, qe = Ce[--Me], Ce[Me] = null, Be = Ce[--Me], Ce[Me] = null;
  }
  function Is(t, e) {
    Ce[Me++] = Be, Ce[Me++] = qe, Ce[Me++] = ml, Be = e.id, qe = e.overflow, ml = t;
  }
  var Pt = null, _t = null, yt = !1, gl = null, _e = !1, Iu = Error(s(519));
  function pl(t) {
    var e = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw on(Ne(e, t)), Iu;
  }
  function Ps(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[It] = t, e[ue] = a, l) {
      case "dialog":
        ft("cancel", e), ft("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Mn.length; l++)
          ft(Mn[l], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", e), ft("load", e);
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        ft("invalid", e), ds(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        ft("invalid", e);
        break;
      case "textarea":
        ft("invalid", e), ms(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || yd(e.textContent, l) ? (a.popover != null && (ft("beforetoggle", e), ft("toggle", e)), a.onScroll != null && ft("scroll", e), a.onScrollEnd != null && ft("scrollend", e), a.onClick != null && (e.onclick = Xe), e = !0) : e = !1, e || pl(t, !0);
  }
  function tr(t) {
    for (Pt = t.return; Pt; )
      switch (Pt.tag) {
        case 5:
        case 31:
        case 13:
          _e = !1;
          return;
        case 27:
        case 3:
          _e = !0;
          return;
        default:
          Pt = Pt.return;
      }
  }
  function xa(t) {
    if (t !== Pt) return !1;
    if (!yt) return tr(t), yt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || yo(t.type, t.memoizedProps)), l = !l), l && _t && pl(t), tr(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      _t = Td(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      _t = Td(t);
    } else
      e === 27 ? (e = _t, Ml(t.type) ? (t = wo, wo = null, _t = t) : _t = e) : _t = Pt ? De(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ql() {
    _t = Pt = null, yt = !1;
  }
  function Pu() {
    var t = gl;
    return t !== null && (fe === null ? fe = t : fe.push.apply(
      fe,
      t
    ), gl = null), t;
  }
  function on(t) {
    gl === null ? gl = [t] : gl.push(t);
  }
  var tc = m(null), Zl = null, Je = null;
  function yl(t, e, l) {
    U(tc, e._currentValue), e._currentValue = l;
  }
  function Fe(t) {
    t._currentValue = tc.current, C(tc);
  }
  function ec(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function lc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var r = i;
          i = n;
          for (var h = 0; h < e.length; h++)
            if (r.context === e[h]) {
              i.lanes |= l, r = i.alternate, r !== null && (r.lanes |= l), ec(
                i.return,
                l,
                t
              ), a || (u = null);
              break t;
            }
          i = r.next;
        }
      } else if (n.tag === 18) {
        if (u = n.return, u === null) throw Error(s(341));
        u.lanes |= l, i = u.alternate, i !== null && (i.lanes |= l), ec(u, l, t), u = null;
      } else u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === t) {
            u = null;
            break;
          }
          if (n = u.sibling, n !== null) {
            n.return = u.return, u = n;
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function Sa(t, e, l, a) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(s(387));
        if (u = u.memoizedProps, u !== null) {
          var r = n.type;
          ye(n.pendingProps.value, u.value) || (t !== null ? t.push(r) : t = [r]);
        }
      } else if (n === W.current) {
        if (u = n.alternate, u === null) throw Error(s(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Rn) : t = [Rn]);
      }
      n = n.return;
    }
    t !== null && lc(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function fi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ye(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Kl(t) {
    Zl = t, Je = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function te(t) {
    return er(Zl, t);
  }
  function di(t, e) {
    return Zl === null && Kl(t), er(t, e);
  }
  function er(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Je === null) {
      if (t === null) throw Error(s(308));
      Je = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Je = Je.next = e;
    return l;
  }
  var Zm = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, Km = c.unstable_scheduleCallback, Jm = c.unstable_NormalPriority, Vt = {
    $$typeof: ct,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ac() {
    return {
      controller: new Zm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function sn(t) {
    t.refCount--, t.refCount === 0 && Km(Jm, function() {
      t.controller.abort();
    });
  }
  var rn = null, nc = 0, wa = 0, Aa = null;
  function Fm(t, e) {
    if (rn === null) {
      var l = rn = [];
      nc = 0, wa = co(), Aa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return nc++, e.then(lr, lr), e;
  }
  function lr() {
    if (--nc === 0 && rn !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var t = rn;
      rn = null, wa = 0, Aa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Wm(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var ar = T.S;
  T.S = function(t, e) {
    Yf = me(), typeof e == "object" && e !== null && typeof e.then == "function" && Fm(t, e), ar !== null && ar(t, e);
  };
  var Jl = m(null);
  function ic() {
    var t = Jl.current;
    return t !== null ? t : Ct.pooledCache;
  }
  function hi(t, e) {
    e === null ? U(Jl, Jl.current) : U(Jl, e.pool);
  }
  function nr() {
    var t = ic();
    return t === null ? null : { parent: Vt._currentValue, pool: t };
  }
  var za = Error(s(460)), uc = Error(s(474)), mi = Error(s(542)), gi = { then: function() {
  } };
  function ir(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ur(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Xe, Xe), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, or(t), t;
      default:
        if (typeof e.status == "string") e.then(Xe, Xe);
        else {
          if (t = Ct, t !== null && 100 < t.shellSuspendCounter)
            throw Error(s(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, or(t), t;
        }
        throw Wl = e, za;
    }
  }
  function Fl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Wl = l, za) : l;
    }
  }
  var Wl = null;
  function cr() {
    if (Wl === null) throw Error(s(459));
    var t = Wl;
    return Wl = null, t;
  }
  function or(t) {
    if (t === za || t === mi)
      throw Error(s(483));
  }
  var ja = null, fn = 0;
  function pi(t) {
    var e = fn;
    return fn += 1, ja === null && (ja = []), ur(ja, t, e);
  }
  function dn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function yi(t, e) {
    throw e.$$typeof === k ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(
      s(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function sr(t) {
    function e(y, g) {
      if (t) {
        var x = y.deletions;
        x === null ? (y.deletions = [g], y.flags |= 16) : x.push(g);
      }
    }
    function l(y, g) {
      if (!t) return null;
      for (; g !== null; )
        e(y, g), g = g.sibling;
      return null;
    }
    function a(y) {
      for (var g = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? g.set(y.key, y) : g.set(y.index, y), y = y.sibling;
      return g;
    }
    function n(y, g) {
      return y = Ze(y, g), y.index = 0, y.sibling = null, y;
    }
    function i(y, g, x) {
      return y.index = x, t ? (x = y.alternate, x !== null ? (x = x.index, x < g ? (y.flags |= 67108866, g) : x) : (y.flags |= 67108866, g)) : (y.flags |= 1048576, g);
    }
    function u(y) {
      return t && y.alternate === null && (y.flags |= 67108866), y;
    }
    function r(y, g, x, O) {
      return g === null || g.tag !== 6 ? (g = Ju(x, y.mode, O), g.return = y, g) : (g = n(g, x), g.return = y, g);
    }
    function h(y, g, x, O) {
      var F = x.type;
      return F === Y ? M(
        y,
        g,
        x.props.children,
        O,
        x.key
      ) : g !== null && (g.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Q && Fl(F) === g.type) ? (g = n(g, x.props), dn(g, x), g.return = y, g) : (g = si(
        x.type,
        x.key,
        x.props,
        null,
        y.mode,
        O
      ), dn(g, x), g.return = y, g);
    }
    function w(y, g, x, O) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== x.containerInfo || g.stateNode.implementation !== x.implementation ? (g = Fu(x, y.mode, O), g.return = y, g) : (g = n(g, x.children || []), g.return = y, g);
    }
    function M(y, g, x, O, F) {
      return g === null || g.tag !== 7 ? (g = Xl(
        x,
        y.mode,
        O,
        F
      ), g.return = y, g) : (g = n(g, x), g.return = y, g);
    }
    function D(y, g, x) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Ju(
          "" + g,
          y.mode,
          x
        ), g.return = y, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case G:
            return x = si(
              g.type,
              g.key,
              g.props,
              null,
              y.mode,
              x
            ), dn(x, g), x.return = y, x;
          case et:
            return g = Fu(
              g,
              y.mode,
              x
            ), g.return = y, g;
          case Q:
            return g = Fl(g), D(y, g, x);
        }
        if (kt(g) || Ut(g))
          return g = Xl(
            g,
            y.mode,
            x,
            null
          ), g.return = y, g;
        if (typeof g.then == "function")
          return D(y, pi(g), x);
        if (g.$$typeof === ct)
          return D(
            y,
            di(y, g),
            x
          );
        yi(y, g);
      }
      return null;
    }
    function z(y, g, x, O) {
      var F = g !== null ? g.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return F !== null ? null : r(y, g, "" + x, O);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case G:
            return x.key === F ? h(y, g, x, O) : null;
          case et:
            return x.key === F ? w(y, g, x, O) : null;
          case Q:
            return x = Fl(x), z(y, g, x, O);
        }
        if (kt(x) || Ut(x))
          return F !== null ? null : M(y, g, x, O, null);
        if (typeof x.then == "function")
          return z(
            y,
            g,
            pi(x),
            O
          );
        if (x.$$typeof === ct)
          return z(
            y,
            g,
            di(y, x),
            O
          );
        yi(y, x);
      }
      return null;
    }
    function j(y, g, x, O, F) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return y = y.get(x) || null, r(g, y, "" + O, F);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case G:
            return y = y.get(
              O.key === null ? x : O.key
            ) || null, h(g, y, O, F);
          case et:
            return y = y.get(
              O.key === null ? x : O.key
            ) || null, w(g, y, O, F);
          case Q:
            return O = Fl(O), j(
              y,
              g,
              x,
              O,
              F
            );
        }
        if (kt(O) || Ut(O))
          return y = y.get(x) || null, M(g, y, O, F, null);
        if (typeof O.then == "function")
          return j(
            y,
            g,
            x,
            pi(O),
            F
          );
        if (O.$$typeof === ct)
          return j(
            y,
            g,
            x,
            di(g, O),
            F
          );
        yi(g, O);
      }
      return null;
    }
    function q(y, g, x, O) {
      for (var F = null, St = null, Z = g, ut = g = 0, mt = null; Z !== null && ut < x.length; ut++) {
        Z.index > ut ? (mt = Z, Z = null) : mt = Z.sibling;
        var wt = z(
          y,
          Z,
          x[ut],
          O
        );
        if (wt === null) {
          Z === null && (Z = mt);
          break;
        }
        t && Z && wt.alternate === null && e(y, Z), g = i(wt, g, ut), St === null ? F = wt : St.sibling = wt, St = wt, Z = mt;
      }
      if (ut === x.length)
        return l(y, Z), yt && Ke(y, ut), F;
      if (Z === null) {
        for (; ut < x.length; ut++)
          Z = D(y, x[ut], O), Z !== null && (g = i(
            Z,
            g,
            ut
          ), St === null ? F = Z : St.sibling = Z, St = Z);
        return yt && Ke(y, ut), F;
      }
      for (Z = a(Z); ut < x.length; ut++)
        mt = j(
          Z,
          y,
          ut,
          x[ut],
          O
        ), mt !== null && (t && mt.alternate !== null && Z.delete(
          mt.key === null ? ut : mt.key
        ), g = i(
          mt,
          g,
          ut
        ), St === null ? F = mt : St.sibling = mt, St = mt);
      return t && Z.forEach(function(Rl) {
        return e(y, Rl);
      }), yt && Ke(y, ut), F;
    }
    function I(y, g, x, O) {
      if (x == null) throw Error(s(151));
      for (var F = null, St = null, Z = g, ut = g = 0, mt = null, wt = x.next(); Z !== null && !wt.done; ut++, wt = x.next()) {
        Z.index > ut ? (mt = Z, Z = null) : mt = Z.sibling;
        var Rl = z(y, Z, wt.value, O);
        if (Rl === null) {
          Z === null && (Z = mt);
          break;
        }
        t && Z && Rl.alternate === null && e(y, Z), g = i(Rl, g, ut), St === null ? F = Rl : St.sibling = Rl, St = Rl, Z = mt;
      }
      if (wt.done)
        return l(y, Z), yt && Ke(y, ut), F;
      if (Z === null) {
        for (; !wt.done; ut++, wt = x.next())
          wt = D(y, wt.value, O), wt !== null && (g = i(wt, g, ut), St === null ? F = wt : St.sibling = wt, St = wt);
        return yt && Ke(y, ut), F;
      }
      for (Z = a(Z); !wt.done; ut++, wt = x.next())
        wt = j(Z, y, ut, wt.value, O), wt !== null && (t && wt.alternate !== null && Z.delete(wt.key === null ? ut : wt.key), g = i(wt, g, ut), St === null ? F = wt : St.sibling = wt, St = wt);
      return t && Z.forEach(function(c0) {
        return e(y, c0);
      }), yt && Ke(y, ut), F;
    }
    function Nt(y, g, x, O) {
      if (typeof x == "object" && x !== null && x.type === Y && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case G:
            t: {
              for (var F = x.key; g !== null; ) {
                if (g.key === F) {
                  if (F = x.type, F === Y) {
                    if (g.tag === 7) {
                      l(
                        y,
                        g.sibling
                      ), O = n(
                        g,
                        x.props.children
                      ), O.return = y, y = O;
                      break t;
                    }
                  } else if (g.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Q && Fl(F) === g.type) {
                    l(
                      y,
                      g.sibling
                    ), O = n(g, x.props), dn(O, x), O.return = y, y = O;
                    break t;
                  }
                  l(y, g);
                  break;
                } else e(y, g);
                g = g.sibling;
              }
              x.type === Y ? (O = Xl(
                x.props.children,
                y.mode,
                O,
                x.key
              ), O.return = y, y = O) : (O = si(
                x.type,
                x.key,
                x.props,
                null,
                y.mode,
                O
              ), dn(O, x), O.return = y, y = O);
            }
            return u(y);
          case et:
            t: {
              for (F = x.key; g !== null; ) {
                if (g.key === F)
                  if (g.tag === 4 && g.stateNode.containerInfo === x.containerInfo && g.stateNode.implementation === x.implementation) {
                    l(
                      y,
                      g.sibling
                    ), O = n(g, x.children || []), O.return = y, y = O;
                    break t;
                  } else {
                    l(y, g);
                    break;
                  }
                else e(y, g);
                g = g.sibling;
              }
              O = Fu(x, y.mode, O), O.return = y, y = O;
            }
            return u(y);
          case Q:
            return x = Fl(x), Nt(
              y,
              g,
              x,
              O
            );
        }
        if (kt(x))
          return q(
            y,
            g,
            x,
            O
          );
        if (Ut(x)) {
          if (F = Ut(x), typeof F != "function") throw Error(s(150));
          return x = F.call(x), I(
            y,
            g,
            x,
            O
          );
        }
        if (typeof x.then == "function")
          return Nt(
            y,
            g,
            pi(x),
            O
          );
        if (x.$$typeof === ct)
          return Nt(
            y,
            g,
            di(y, x),
            O
          );
        yi(y, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, g !== null && g.tag === 6 ? (l(y, g.sibling), O = n(g, x), O.return = y, y = O) : (l(y, g), O = Ju(x, y.mode, O), O.return = y, y = O), u(y)) : l(y, g);
    }
    return function(y, g, x, O) {
      try {
        fn = 0;
        var F = Nt(
          y,
          g,
          x,
          O
        );
        return ja = null, F;
      } catch (Z) {
        if (Z === za || Z === mi) throw Z;
        var St = ve(29, Z, null, y.mode);
        return St.lanes = O, St.return = y, St;
      }
    };
  }
  var $l = sr(!0), rr = sr(!1), vl = !1;
  function cc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function oc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function bl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function xl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (At & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = oi(t), Ks(t, null, l), e;
    }
    return ci(t, a, e, l), oi(t);
  }
  function hn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, es(t, l);
    }
  }
  function sc(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var u = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = u : i = i.next = u, l = l.next;
        } while (l !== null);
        i === null ? n = i = e : i = i.next = e;
      } else n = i = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var rc = !1;
  function mn() {
    if (rc) {
      var t = Aa;
      if (t !== null) throw t;
    }
  }
  function gn(t, e, l, a) {
    rc = !1;
    var n = t.updateQueue;
    vl = !1;
    var i = n.firstBaseUpdate, u = n.lastBaseUpdate, r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var h = r, w = h.next;
      h.next = null, u === null ? i = w : u.next = w, u = h;
      var M = t.alternate;
      M !== null && (M = M.updateQueue, r = M.lastBaseUpdate, r !== u && (r === null ? M.firstBaseUpdate = w : r.next = w, M.lastBaseUpdate = h));
    }
    if (i !== null) {
      var D = n.baseState;
      u = 0, M = w = h = null, r = i;
      do {
        var z = r.lane & -536870913, j = z !== r.lane;
        if (j ? (ht & z) === z : (a & z) === z) {
          z !== 0 && z === wa && (rc = !0), M !== null && (M = M.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          t: {
            var q = t, I = r;
            z = e;
            var Nt = l;
            switch (I.tag) {
              case 1:
                if (q = I.payload, typeof q == "function") {
                  D = q.call(Nt, D, z);
                  break t;
                }
                D = q;
                break t;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = I.payload, z = typeof q == "function" ? q.call(Nt, D, z) : q, z == null) break t;
                D = E({}, D, z);
                break t;
              case 2:
                vl = !0;
            }
          }
          z = r.callback, z !== null && (t.flags |= 64, j && (t.flags |= 8192), j = n.callbacks, j === null ? n.callbacks = [z] : j.push(z));
        } else
          j = {
            lane: z,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, M === null ? (w = M = j, h = D) : M = M.next = j, u |= z;
        if (r = r.next, r === null) {
          if (r = n.shared.pending, r === null)
            break;
          j = r, r = j.next, j.next = null, n.lastBaseUpdate = j, n.shared.pending = null;
        }
      } while (!0);
      M === null && (h = D), n.baseState = h, n.firstBaseUpdate = w, n.lastBaseUpdate = M, i === null && (n.shared.lanes = 0), jl |= u, t.lanes = u, t.memoizedState = D;
    }
  }
  function fr(t, e) {
    if (typeof t != "function")
      throw Error(s(191, t));
    t.call(e);
  }
  function dr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        fr(l[t], e);
  }
  var Ta = m(null), vi = m(0);
  function hr(t, e) {
    t = nl, U(vi, t), U(Ta, e), nl = t | e.baseLanes;
  }
  function fc() {
    U(vi, nl), U(Ta, Ta.current);
  }
  function dc() {
    nl = vi.current, C(Ta), C(vi);
  }
  var be = m(null), Oe = null;
  function Sl(t) {
    var e = t.alternate;
    U(Gt, Gt.current & 1), U(be, t), Oe === null && (e === null || Ta.current !== null || e.memoizedState !== null) && (Oe = t);
  }
  function hc(t) {
    U(Gt, Gt.current), U(be, t), Oe === null && (Oe = t);
  }
  function mr(t) {
    t.tag === 22 ? (U(Gt, Gt.current), U(be, t), Oe === null && (Oe = t)) : wl();
  }
  function wl() {
    U(Gt, Gt.current), U(be, be.current);
  }
  function xe(t) {
    C(be), Oe === t && (Oe = null), C(Gt);
  }
  var Gt = m(0);
  function bi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || xo(l) || So(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var We = 0, nt = null, Tt = null, Xt = null, xi = !1, Ea = !1, Il = !1, Si = 0, pn = 0, Na = null, $m = 0;
  function Bt() {
    throw Error(s(321));
  }
  function mc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ye(t[l], e[l])) return !1;
    return !0;
  }
  function gc(t, e, l, a, n, i) {
    return We = i, nt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, T.H = t === null || t.memoizedState === null ? $r : Mc, Il = !1, i = l(a, n), Il = !1, Ea && (i = pr(
      e,
      l,
      a,
      n
    )), gr(t), i;
  }
  function gr(t) {
    T.H = bn;
    var e = Tt !== null && Tt.next !== null;
    if (We = 0, Xt = Tt = nt = null, xi = !1, pn = 0, Na = null, e) throw Error(s(300));
    t === null || Qt || (t = t.dependencies, t !== null && fi(t) && (Qt = !0));
  }
  function pr(t, e, l, a) {
    nt = t;
    var n = 0;
    do {
      if (Ea && (Na = null), pn = 0, Ea = !1, 25 <= n) throw Error(s(301));
      if (n += 1, Xt = Tt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      T.H = Ir, i = e(l, a);
    } while (Ea);
    return i;
  }
  function Im() {
    var t = T.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? yn(e) : e, t = t.useState()[0], (Tt !== null ? Tt.memoizedState : null) !== t && (nt.flags |= 1024), e;
  }
  function pc() {
    var t = Si !== 0;
    return Si = 0, t;
  }
  function yc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function vc(t) {
    if (xi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      xi = !1;
    }
    We = 0, Xt = Tt = nt = null, Ea = !1, pn = Si = 0, Na = null;
  }
  function ne() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xt === null ? nt.memoizedState = Xt = t : Xt = Xt.next = t, Xt;
  }
  function Yt() {
    if (Tt === null) {
      var t = nt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Tt.next;
    var e = Xt === null ? nt.memoizedState : Xt.next;
    if (e !== null)
      Xt = e, Tt = t;
    else {
      if (t === null)
        throw nt.alternate === null ? Error(s(467)) : Error(s(310));
      Tt = t, t = {
        memoizedState: Tt.memoizedState,
        baseState: Tt.baseState,
        baseQueue: Tt.baseQueue,
        queue: Tt.queue,
        next: null
      }, Xt === null ? nt.memoizedState = Xt = t : Xt = Xt.next = t;
    }
    return Xt;
  }
  function wi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function yn(t) {
    var e = pn;
    return pn += 1, Na === null && (Na = []), t = ur(Na, t, e), e = nt, (Xt === null ? e.memoizedState : Xt.next) === null && (e = e.alternate, T.H = e === null || e.memoizedState === null ? $r : Mc), t;
  }
  function Ai(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return yn(t);
      if (t.$$typeof === ct) return te(t);
    }
    throw Error(s(438, String(t)));
  }
  function bc(t) {
    var e = null, l = nt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = nt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = wi(), nt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = he;
    return e.index++, l;
  }
  function $e(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function zi(t) {
    var e = Yt();
    return xc(e, Tt, t);
  }
  function xc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        n.next = i.next, i.next = u;
      }
      e.baseQueue = n = i, a.pending = null;
    }
    if (i = t.baseState, n === null) t.memoizedState = i;
    else {
      e = n.next;
      var r = u = null, h = null, w = e, M = !1;
      do {
        var D = w.lane & -536870913;
        if (D !== w.lane ? (ht & D) === D : (We & D) === D) {
          var z = w.revertLane;
          if (z === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), D === wa && (M = !0);
          else if ((We & z) === z) {
            w = w.next, z === wa && (M = !0);
            continue;
          } else
            D = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, h === null ? (r = h = D, u = i) : h = h.next = D, nt.lanes |= z, jl |= z;
          D = w.action, Il && l(i, D), i = w.hasEagerState ? w.eagerState : l(i, D);
        } else
          z = {
            lane: D,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, h === null ? (r = h = z, u = i) : h = h.next = z, nt.lanes |= D, jl |= D;
        w = w.next;
      } while (w !== null && w !== e);
      if (h === null ? u = i : h.next = r, !ye(i, t.memoizedState) && (Qt = !0, M && (l = Aa, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = u, t.baseQueue = h, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Sc(t) {
    var e = Yt(), l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, i = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var u = n = n.next;
      do
        i = t(i, u.action), u = u.next;
      while (u !== n);
      ye(i, e.memoizedState) || (Qt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function yr(t, e, l) {
    var a = nt, n = Yt(), i = yt;
    if (i) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = e();
    var u = !ye(
      (Tt || n).memoizedState,
      l
    );
    if (u && (n.memoizedState = l, Qt = !0), n = n.queue, zc(xr.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || u || Xt !== null && Xt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ca(
        9,
        { destroy: void 0 },
        br.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), Ct === null) throw Error(s(349));
      i || (We & 127) !== 0 || vr(a, e, l);
    }
    return l;
  }
  function vr(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = nt.updateQueue, e === null ? (e = wi(), nt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function br(t, e, l, a) {
    e.value = l, e.getSnapshot = a, Sr(e) && wr(t);
  }
  function xr(t, e, l) {
    return l(function() {
      Sr(e) && wr(t);
    });
  }
  function Sr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ye(t, l);
    } catch {
      return !0;
    }
  }
  function wr(t) {
    var e = Vl(t, 2);
    e !== null && de(e, t, 2);
  }
  function wc(t) {
    var e = ne();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Il) {
        fl(!0);
        try {
          l();
        } finally {
          fl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $e,
      lastRenderedState: t
    }, e;
  }
  function Ar(t, e, l, a) {
    return t.baseState = l, xc(
      t,
      Tt,
      typeof a == "function" ? a : $e
    );
  }
  function Pm(t, e, l, a, n) {
    if (Ei(t)) throw Error(s(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(u) {
          i.listeners.push(u);
        }
      };
      T.T !== null ? l(!0) : i.isTransition = !1, a(i), l = e.pending, l === null ? (i.next = e.pending = i, zr(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function zr(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var i = T.T, u = {};
      T.T = u;
      try {
        var r = l(n, a), h = T.S;
        h !== null && h(u, r), jr(t, e, r);
      } catch (w) {
        Ac(t, e, w);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), T.T = i;
      }
    } else
      try {
        i = l(n, a), jr(t, e, i);
      } catch (w) {
        Ac(t, e, w);
      }
  }
  function jr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Tr(t, e, a);
      },
      function(a) {
        return Ac(t, e, a);
      }
    ) : Tr(t, e, l);
  }
  function Tr(t, e, l) {
    e.status = "fulfilled", e.value = l, Er(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, zr(t, l)));
  }
  function Ac(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, Er(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Er(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Nr(t, e) {
    return e;
  }
  function Cr(t, e) {
    if (yt) {
      var l = Ct.formState;
      if (l !== null) {
        t: {
          var a = nt;
          if (yt) {
            if (_t) {
              e: {
                for (var n = _t, i = _e; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (n = De(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                _t = De(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            pl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = ne(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: e
    }, l.queue = a, l = Jr.bind(
      null,
      nt,
      a
    ), a.dispatch = l, a = wc(!1), i = Cc.bind(
      null,
      nt,
      !1,
      a.queue
    ), a = ne(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = Pm.bind(
      null,
      nt,
      n,
      i,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function Mr(t) {
    var e = Yt();
    return _r(e, Tt, t);
  }
  function _r(t, e, l) {
    if (e = xc(
      t,
      e,
      Nr
    )[0], t = zi($e)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = yn(e);
      } catch (u) {
        throw u === za ? mi : u;
      }
    else a = e;
    e = Yt();
    var n = e.queue, i = n.dispatch;
    return l !== e.memoizedState && (nt.flags |= 2048, Ca(
      9,
      { destroy: void 0 },
      tg.bind(null, n, l),
      null
    )), [a, i, t];
  }
  function tg(t, e) {
    t.action = e;
  }
  function Or(t) {
    var e = Yt(), l = Tt;
    if (l !== null)
      return _r(e, l, t);
    Yt(), e = e.memoizedState, l = Yt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function Ca(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = nt.updateQueue, e === null && (e = wi(), nt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Dr() {
    return Yt().memoizedState;
  }
  function ji(t, e, l, a) {
    var n = ne();
    nt.flags |= t, n.memoizedState = Ca(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Ti(t, e, l, a) {
    var n = Yt();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Tt !== null && a !== null && mc(a, Tt.memoizedState.deps) ? n.memoizedState = Ca(e, i, l, a) : (nt.flags |= t, n.memoizedState = Ca(
      1 | e,
      i,
      l,
      a
    ));
  }
  function Ur(t, e) {
    ji(8390656, 8, t, e);
  }
  function zc(t, e) {
    Ti(2048, 8, t, e);
  }
  function eg(t) {
    nt.flags |= 4;
    var e = nt.updateQueue;
    if (e === null)
      e = wi(), nt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Rr(t) {
    var e = Yt().memoizedState;
    return eg({ ref: e, nextImpl: t }), function() {
      if ((At & 2) !== 0) throw Error(s(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Hr(t, e) {
    return Ti(4, 2, t, e);
  }
  function kr(t, e) {
    return Ti(4, 4, t, e);
  }
  function Br(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function qr(t, e, l) {
    l = l != null ? l.concat([t]) : null, Ti(4, 4, Br.bind(null, e, t), l);
  }
  function jc() {
  }
  function Gr(t, e) {
    var l = Yt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && mc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function Yr(t, e) {
    var l = Yt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && mc(e, a[1]))
      return a[0];
    if (a = t(), Il) {
      fl(!0);
      try {
        t();
      } finally {
        fl(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function Tc(t, e, l) {
    return l === void 0 || (We & 1073741824) !== 0 && (ht & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Vf(), nt.lanes |= t, jl |= t, l);
  }
  function Lr(t, e, l, a) {
    return ye(l, e) ? l : Ta.current !== null ? (t = Tc(t, l, a), ye(t, e) || (Qt = !0), t) : (We & 42) === 0 || (We & 1073741824) !== 0 && (ht & 261930) === 0 ? (Qt = !0, t.memoizedState = l) : (t = Vf(), nt.lanes |= t, jl |= t, e);
  }
  function Vr(t, e, l, a, n) {
    var i = B.p;
    B.p = i !== 0 && 8 > i ? i : 8;
    var u = T.T, r = {};
    T.T = r, Cc(t, !1, e, l);
    try {
      var h = n(), w = T.S;
      if (w !== null && w(r, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var M = Wm(
          h,
          a
        );
        vn(
          t,
          e,
          M,
          Ae(t)
        );
      } else
        vn(
          t,
          e,
          a,
          Ae(t)
        );
    } catch (D) {
      vn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: D },
        Ae()
      );
    } finally {
      B.p = i, u !== null && r.types !== null && (u.types = r.types), T.T = u;
    }
  }
  function lg() {
  }
  function Ec(t, e, l, a) {
    if (t.tag !== 5) throw Error(s(476));
    var n = Xr(t).queue;
    Vr(
      t,
      n,
      e,
      N,
      l === null ? lg : function() {
        return Qr(t), l(a);
      }
    );
  }
  function Xr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: N,
      baseState: N,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $e,
        lastRenderedState: N
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $e,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Qr(t) {
    var e = Xr(t);
    e.next === null && (e = t.alternate.memoizedState), vn(
      t,
      e.next.queue,
      {},
      Ae()
    );
  }
  function Nc() {
    return te(Rn);
  }
  function Zr() {
    return Yt().memoizedState;
  }
  function Kr() {
    return Yt().memoizedState;
  }
  function ag(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ae();
          t = bl(l);
          var a = xl(e, t, l);
          a !== null && (de(a, e, l), hn(a, e, l)), e = { cache: ac() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function ng(t, e, l) {
    var a = Ae();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ei(t) ? Fr(e, l) : (l = Zu(t, e, l, a), l !== null && (de(l, t, a), Wr(l, e, a)));
  }
  function Jr(t, e, l) {
    var a = Ae();
    vn(t, e, l, a);
  }
  function vn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ei(t)) Fr(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var u = e.lastRenderedState, r = i(u, l);
          if (n.hasEagerState = !0, n.eagerState = r, ye(r, u))
            return ci(t, e, n, 0), Ct === null && ui(), !1;
        } catch {
        }
      if (l = Zu(t, e, n, a), l !== null)
        return de(l, t, a), Wr(l, e, a), !0;
    }
    return !1;
  }
  function Cc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: co(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ei(t)) {
      if (e) throw Error(s(479));
    } else
      e = Zu(
        t,
        l,
        a,
        2
      ), e !== null && de(e, t, 2);
  }
  function Ei(t) {
    var e = t.alternate;
    return t === nt || e !== null && e === nt;
  }
  function Fr(t, e) {
    Ea = xi = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Wr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, es(t, l);
    }
  }
  var bn = {
    readContext: te,
    use: Ai,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useLayoutEffect: Bt,
    useInsertionEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
    useHostTransitionStatus: Bt,
    useFormState: Bt,
    useActionState: Bt,
    useOptimistic: Bt,
    useMemoCache: Bt,
    useCacheRefresh: Bt
  };
  bn.useEffectEvent = Bt;
  var $r = {
    readContext: te,
    use: Ai,
    useCallback: function(t, e) {
      return ne().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: te,
    useEffect: Ur,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, ji(
        4194308,
        4,
        Br.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return ji(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      ji(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = ne();
      e = e === void 0 ? null : e;
      var a = t();
      if (Il) {
        fl(!0);
        try {
          t();
        } finally {
          fl(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = ne();
      if (l !== void 0) {
        var n = l(e);
        if (Il) {
          fl(!0);
          try {
            l(e);
          } finally {
            fl(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = ng.bind(
        null,
        nt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = ne();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = wc(t);
      var e = t.queue, l = Jr.bind(null, nt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: jc,
    useDeferredValue: function(t, e) {
      var l = ne();
      return Tc(l, t, e);
    },
    useTransition: function() {
      var t = wc(!1);
      return t = Vr.bind(
        null,
        nt,
        t.queue,
        !0,
        !1
      ), ne().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = nt, n = ne();
      if (yt) {
        if (l === void 0)
          throw Error(s(407));
        l = l();
      } else {
        if (l = e(), Ct === null)
          throw Error(s(349));
        (ht & 127) !== 0 || vr(a, e, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return n.queue = i, Ur(xr.bind(null, a, i, t), [
        t
      ]), a.flags |= 2048, Ca(
        9,
        { destroy: void 0 },
        br.bind(
          null,
          a,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = ne(), e = Ct.identifierPrefix;
      if (yt) {
        var l = qe, a = Be;
        l = (a & ~(1 << 32 - pe(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Si++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = $m++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Nc,
    useFormState: Cr,
    useActionState: Cr,
    useOptimistic: function(t) {
      var e = ne();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Cc.bind(
        null,
        nt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: bc,
    useCacheRefresh: function() {
      return ne().memoizedState = ag.bind(
        null,
        nt
      );
    },
    useEffectEvent: function(t) {
      var e = ne(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((At & 2) !== 0)
          throw Error(s(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Mc = {
    readContext: te,
    use: Ai,
    useCallback: Gr,
    useContext: te,
    useEffect: zc,
    useImperativeHandle: qr,
    useInsertionEffect: Hr,
    useLayoutEffect: kr,
    useMemo: Yr,
    useReducer: zi,
    useRef: Dr,
    useState: function() {
      return zi($e);
    },
    useDebugValue: jc,
    useDeferredValue: function(t, e) {
      var l = Yt();
      return Lr(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = zi($e)[0], e = Yt().memoizedState;
      return [
        typeof t == "boolean" ? t : yn(t),
        e
      ];
    },
    useSyncExternalStore: yr,
    useId: Zr,
    useHostTransitionStatus: Nc,
    useFormState: Mr,
    useActionState: Mr,
    useOptimistic: function(t, e) {
      var l = Yt();
      return Ar(l, Tt, t, e);
    },
    useMemoCache: bc,
    useCacheRefresh: Kr
  };
  Mc.useEffectEvent = Rr;
  var Ir = {
    readContext: te,
    use: Ai,
    useCallback: Gr,
    useContext: te,
    useEffect: zc,
    useImperativeHandle: qr,
    useInsertionEffect: Hr,
    useLayoutEffect: kr,
    useMemo: Yr,
    useReducer: Sc,
    useRef: Dr,
    useState: function() {
      return Sc($e);
    },
    useDebugValue: jc,
    useDeferredValue: function(t, e) {
      var l = Yt();
      return Tt === null ? Tc(l, t, e) : Lr(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Sc($e)[0], e = Yt().memoizedState;
      return [
        typeof t == "boolean" ? t : yn(t),
        e
      ];
    },
    useSyncExternalStore: yr,
    useId: Zr,
    useHostTransitionStatus: Nc,
    useFormState: Or,
    useActionState: Or,
    useOptimistic: function(t, e) {
      var l = Yt();
      return Tt !== null ? Ar(l, Tt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: bc,
    useCacheRefresh: Kr
  };
  Ir.useEffectEvent = Rr;
  function _c(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : E({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Oc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = Ae(), n = bl(a);
      n.payload = e, l != null && (n.callback = l), e = xl(t, n, a), e !== null && (de(e, t, a), hn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = Ae(), n = bl(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = xl(t, n, a), e !== null && (de(e, t, a), hn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Ae(), a = bl(l);
      a.tag = 2, e != null && (a.callback = e), e = xl(t, a, l), e !== null && (de(e, t, l), hn(e, t, l));
    }
  };
  function Pr(t, e, l, a, n, i, u) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, u) : e.prototype && e.prototype.isPureReactComponent ? !nn(l, a) || !nn(n, i) : !0;
  }
  function tf(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Oc.enqueueReplaceState(e, e.state, null);
  }
  function Pl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = E({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function ef(t) {
    ii(t);
  }
  function lf(t) {
    console.error(t);
  }
  function af(t) {
    ii(t);
  }
  function Ni(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function nf(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Dc(t, e, l) {
    return l = bl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ni(t, e);
    }, l;
  }
  function uf(t) {
    return t = bl(t), t.tag = 3, t;
  }
  function cf(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        nf(e, l, a);
      };
    }
    var u = l.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      nf(e, l, a), typeof n != "function" && (Tl === null ? Tl = /* @__PURE__ */ new Set([this]) : Tl.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function ig(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && Sa(
        e,
        l,
        n,
        !0
      ), l = be.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Oe === null ? Gi() : l.alternate === null && qt === 0 && (qt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === gi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), no(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === gi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), no(t, a, n)), !1;
        }
        throw Error(s(435, l.tag));
      }
      return no(t, a, n), Gi(), !1;
    }
    if (yt)
      return e = be.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Iu && (t = Error(s(422), { cause: a }), on(Ne(t, l)))) : (a !== Iu && (e = Error(s(423), {
        cause: a
      }), on(
        Ne(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Ne(a, l), n = Dc(
        t.stateNode,
        a,
        n
      ), sc(t, n), qt !== 4 && (qt = 2)), !1;
    var i = Error(s(520), { cause: a });
    if (i = Ne(i, l), En === null ? En = [i] : En.push(i), qt !== 4 && (qt = 2), e === null) return !0;
    a = Ne(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Dc(l.stateNode, a, t), sc(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Tl === null || !Tl.has(i))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = uf(n), cf(
              n,
              t,
              l,
              a
            ), sc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Uc = Error(s(461)), Qt = !1;
  function ee(t, e, l, a) {
    e.child = t === null ? rr(e, null, l, a) : $l(
      e,
      t.child,
      l,
      a
    );
  }
  function of(t, e, l, a, n) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var u = {};
      for (var r in a)
        r !== "ref" && (u[r] = a[r]);
    } else u = a;
    return Kl(e), a = gc(
      t,
      e,
      l,
      u,
      i,
      n
    ), r = pc(), t !== null && !Qt ? (yc(t, e, n), Ie(t, e, n)) : (yt && r && Wu(e), e.flags |= 1, ee(t, e, a, n), e.child);
  }
  function sf(t, e, l, a, n) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !Ku(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, rf(
        t,
        e,
        i,
        a,
        n
      )) : (t = si(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !Lc(t, n)) {
      var u = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : nn, l(u, a) && t.ref === e.ref)
        return Ie(t, e, n);
    }
    return e.flags |= 1, t = Ze(i, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function rf(t, e, l, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (nn(i, a) && t.ref === e.ref)
        if (Qt = !1, e.pendingProps = a = i, Lc(t, n))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else
          return e.lanes = t.lanes, Ie(t, e, n);
    }
    return Rc(
      t,
      e,
      l,
      a,
      n
    );
  }
  function ff(t, e, l, a) {
    var n = a.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, e.child = null;
        return df(
          t,
          e,
          i,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && hi(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? hr(e, i) : fc(), mr(e);
      else
        return a = e.lanes = 536870912, df(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          a
        );
    } else
      i !== null ? (hi(e, i.cachePool), hr(e, i), wl(), e.memoizedState = null) : (t !== null && hi(e, null), fc(), wl());
    return ee(t, e, n, l), e.child;
  }
  function xn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function df(t, e, l, a, n) {
    var i = ic();
    return i = i === null ? null : { parent: Vt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && hi(e, null), fc(), mr(e), t !== null && Sa(t, e, a, !0), e.childLanes = n, null;
  }
  function Ci(t, e) {
    return e = _i(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function hf(t, e, l) {
    return $l(e, t.child, null, l), t = Ci(e, e.pendingProps), t.flags |= 2, xe(e), e.memoizedState = null, t;
  }
  function ug(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (yt) {
        if (a.mode === "hidden")
          return t = Ci(e, a), e.lanes = 536870912, xn(null, t);
        if (hc(e), (t = _t) ? (t = jd(
          t,
          _e
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ml !== null ? { id: Be, overflow: qe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Fs(t), l.return = e, e.child = l, Pt = e, _t = null)) : t = null, t === null) throw pl(e);
        return e.lanes = 536870912, null;
      }
      return Ci(e, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (hc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = hf(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(s(558));
      else if (Qt || Sa(t, e, l, !1), n = (l & t.childLanes) !== 0, Qt || n) {
        if (a = Ct, a !== null && (u = ls(a, l), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, Vl(t, u), de(a, t, u), Uc;
        Gi(), e = hf(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, _t = De(u.nextSibling), Pt = e, yt = !0, gl = null, _e = !1, t !== null && Is(e, t), e = Ci(e, a), e.flags |= 4096;
      return e;
    }
    return t = Ze(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Mi(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(s(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Rc(t, e, l, a, n) {
    return Kl(e), l = gc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = pc(), t !== null && !Qt ? (yc(t, e, n), Ie(t, e, n)) : (yt && a && Wu(e), e.flags |= 1, ee(t, e, l, n), e.child);
  }
  function mf(t, e, l, a, n, i) {
    return Kl(e), e.updateQueue = null, l = pr(
      e,
      a,
      l,
      n
    ), gr(t), a = pc(), t !== null && !Qt ? (yc(t, e, i), Ie(t, e, i)) : (yt && a && Wu(e), e.flags |= 1, ee(t, e, l, i), e.child);
  }
  function gf(t, e, l, a, n) {
    if (Kl(e), e.stateNode === null) {
      var i = ya, u = l.contextType;
      typeof u == "object" && u !== null && (i = te(u)), i = new l(a, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Oc, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = a, i.state = e.memoizedState, i.refs = {}, cc(e), u = l.contextType, i.context = typeof u == "object" && u !== null ? te(u) : ya, i.state = e.memoizedState, u = l.getDerivedStateFromProps, typeof u == "function" && (_c(
        e,
        l,
        u,
        a
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Oc.enqueueReplaceState(i, i.state, null), gn(e, a, i, n), mn(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = e.stateNode;
      var r = e.memoizedProps, h = Pl(l, r);
      i.props = h;
      var w = i.context, M = l.contextType;
      u = ya, typeof M == "object" && M !== null && (u = te(M));
      var D = l.getDerivedStateFromProps;
      M = typeof D == "function" || typeof i.getSnapshotBeforeUpdate == "function", r = e.pendingProps !== r, M || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (r || w !== u) && tf(
        e,
        i,
        a,
        u
      ), vl = !1;
      var z = e.memoizedState;
      i.state = z, gn(e, a, i, n), mn(), w = e.memoizedState, r || z !== w || vl ? (typeof D == "function" && (_c(
        e,
        l,
        D,
        a
      ), w = e.memoizedState), (h = vl || Pr(
        e,
        l,
        h,
        a,
        z,
        w,
        u
      )) ? (M || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = w), i.props = a, i.state = w, i.context = u, a = h) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      i = e.stateNode, oc(t, e), u = e.memoizedProps, M = Pl(l, u), i.props = M, D = e.pendingProps, z = i.context, w = l.contextType, h = ya, typeof w == "object" && w !== null && (h = te(w)), r = l.getDerivedStateFromProps, (w = typeof r == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== D || z !== h) && tf(
        e,
        i,
        a,
        h
      ), vl = !1, z = e.memoizedState, i.state = z, gn(e, a, i, n), mn();
      var j = e.memoizedState;
      u !== D || z !== j || vl || t !== null && t.dependencies !== null && fi(t.dependencies) ? (typeof r == "function" && (_c(
        e,
        l,
        r,
        a
      ), j = e.memoizedState), (M = vl || Pr(
        e,
        l,
        M,
        a,
        z,
        j,
        h
      ) || t !== null && t.dependencies !== null && fi(t.dependencies)) ? (w || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, j, h), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        j,
        h
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = j), i.props = a, i.state = j, i.context = h, a = M) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return i = a, Mi(t, e), a = (e.flags & 128) !== 0, i || a ? (i = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && a ? (e.child = $l(
      e,
      t.child,
      null,
      n
    ), e.child = $l(
      e,
      null,
      l,
      n
    )) : ee(t, e, l, n), e.memoizedState = i.state, t = e.child) : t = Ie(
      t,
      e,
      n
    ), t;
  }
  function pf(t, e, l, a) {
    return Ql(), e.flags |= 256, ee(t, e, l, a), e.child;
  }
  var Hc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function kc(t) {
    return { baseLanes: t, cachePool: nr() };
  }
  function Bc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= we), t;
  }
  function yf(t, e, l) {
    var a = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, u;
    if ((u = i) || (u = t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0), u && (n = !0, e.flags &= -129), u = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (yt) {
        if (n ? Sl(e) : wl(), (t = _t) ? (t = jd(
          t,
          _e
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ml !== null ? { id: Be, overflow: qe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Fs(t), l.return = e, e.child = l, Pt = e, _t = null)) : t = null, t === null) throw pl(e);
        return So(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var r = a.children;
      return a = a.fallback, n ? (wl(), n = e.mode, r = _i(
        { mode: "hidden", children: r },
        n
      ), a = Xl(
        a,
        n,
        l,
        null
      ), r.return = e, a.return = e, r.sibling = a, e.child = r, a = e.child, a.memoizedState = kc(l), a.childLanes = Bc(
        t,
        u,
        l
      ), e.memoizedState = Hc, xn(null, a)) : (Sl(e), qc(e, r));
    }
    var h = t.memoizedState;
    if (h !== null && (r = h.dehydrated, r !== null)) {
      if (i)
        e.flags & 256 ? (Sl(e), e.flags &= -257, e = Gc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (wl(), e.child = t.child, e.flags |= 128, e = null) : (wl(), r = a.fallback, n = e.mode, a = _i(
          { mode: "visible", children: a.children },
          n
        ), r = Xl(
          r,
          n,
          l,
          null
        ), r.flags |= 2, a.return = e, r.return = e, a.sibling = r, e.child = a, $l(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = kc(l), a.childLanes = Bc(
          t,
          u,
          l
        ), e.memoizedState = Hc, e = xn(null, a));
      else if (Sl(e), So(r)) {
        if (u = r.nextSibling && r.nextSibling.dataset, u) var w = u.dgst;
        u = w, a = Error(s(419)), a.stack = "", a.digest = u, on({ value: a, source: null, stack: null }), e = Gc(
          t,
          e,
          l
        );
      } else if (Qt || Sa(t, e, l, !1), u = (l & t.childLanes) !== 0, Qt || u) {
        if (u = Ct, u !== null && (a = ls(u, l), a !== 0 && a !== h.retryLane))
          throw h.retryLane = a, Vl(t, a), de(u, t, a), Uc;
        xo(r) || Gi(), e = Gc(
          t,
          e,
          l
        );
      } else
        xo(r) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, _t = De(
          r.nextSibling
        ), Pt = e, yt = !0, gl = null, _e = !1, t !== null && Is(e, t), e = qc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (wl(), r = a.fallback, n = e.mode, h = t.child, w = h.sibling, a = Ze(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 65011712, w !== null ? r = Ze(
      w,
      r
    ) : (r = Xl(
      r,
      n,
      l,
      null
    ), r.flags |= 2), r.return = e, a.return = e, a.sibling = r, e.child = a, xn(null, a), a = e.child, r = t.child.memoizedState, r === null ? r = kc(l) : (n = r.cachePool, n !== null ? (h = Vt._currentValue, n = n.parent !== h ? { parent: h, pool: h } : n) : n = nr(), r = {
      baseLanes: r.baseLanes | l,
      cachePool: n
    }), a.memoizedState = r, a.childLanes = Bc(
      t,
      u,
      l
    ), e.memoizedState = Hc, xn(t.child, a)) : (Sl(e), l = t.child, t = l.sibling, l = Ze(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (u = e.deletions, u === null ? (e.deletions = [t], e.flags |= 16) : u.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function qc(t, e) {
    return e = _i(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function _i(t, e) {
    return t = ve(22, t, null, e), t.lanes = 0, t;
  }
  function Gc(t, e, l) {
    return $l(e, t.child, null, l), t = qc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function vf(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), ec(t.return, e, l);
  }
  function Yc(t, e, l, a, n, i) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: i
    } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = l, u.tailMode = n, u.treeForkCount = i);
  }
  function bf(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var u = Gt.current, r = (u & 2) !== 0;
    if (r ? (u = u & 1 | 2, e.flags |= 128) : u &= 1, U(Gt, u), ee(t, e, a, l), a = yt ? cn : 0, !r && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && vf(t, l, e);
        else if (t.tag === 19)
          vf(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && bi(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Yc(
          e,
          !1,
          n,
          l,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && bi(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        Yc(
          e,
          !0,
          l,
          null,
          i,
          a
        );
        break;
      case "together":
        Yc(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ie(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), jl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (Sa(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, l = Ze(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Ze(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Lc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && fi(t)));
  }
  function cg(t, e, l) {
    switch (e.tag) {
      case 3:
        Rt(e, e.stateNode.containerInfo), yl(e, Vt, t.memoizedState.cache), Ql();
        break;
      case 27:
      case 5:
        ie(e);
        break;
      case 4:
        Rt(e, e.stateNode.containerInfo);
        break;
      case 10:
        yl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, hc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Sl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? yf(t, e, l) : (Sl(e), t = Ie(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Sl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (Sa(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return bf(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), U(Gt, Gt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, ff(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        yl(e, Vt, t.memoizedState.cache);
    }
    return Ie(t, e, l);
  }
  function xf(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Qt = !0;
      else {
        if (!Lc(t, l) && (e.flags & 128) === 0)
          return Qt = !1, cg(
            t,
            e,
            l
          );
        Qt = (t.flags & 131072) !== 0;
      }
    else
      Qt = !1, yt && (e.flags & 1048576) !== 0 && $s(e, cn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Fl(e.elementType), e.type = t, typeof t == "function")
            Ku(t) ? (a = Pl(t, a), e.tag = 1, e = gf(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = Rc(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === it) {
                e.tag = 11, e = of(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === tt) {
                e.tag = 14, e = sf(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = bt(t) || t, Error(s(306, e, ""));
          }
        }
        return e;
      case 0:
        return Rc(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = Pl(
          a,
          e.pendingProps
        ), gf(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (Rt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(s(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, oc(t, e), gn(e, a, null, l);
          var u = e.memoizedState;
          if (a = u.cache, yl(e, Vt, a), a !== i.cache && lc(
            e,
            [Vt],
            l,
            !0
          ), mn(), a = u.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: u.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = pf(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = Ne(
                Error(s(424)),
                e
              ), on(n), e = pf(
                t,
                e,
                a,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, _t = De(t.firstChild), Pt = e, yt = !0, gl = null, _e = !0, l = rr(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ql(), a === n) {
              e = Ie(
                t,
                e,
                l
              );
              break t;
            }
            ee(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Mi(t, e), t === null ? (l = _d(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : yt || (l = e.type, t = e.pendingProps, a = Ki(
          lt.current
        ).createElement(l), a[It] = e, a[ue] = t, le(a, l, t), Wt(a), e.stateNode = a) : e.memoizedState = _d(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return ie(e), t === null && yt && (a = e.stateNode = Nd(
          e.type,
          e.pendingProps,
          lt.current
        ), Pt = e, _e = !0, n = _t, Ml(e.type) ? (wo = n, _t = De(a.firstChild)) : _t = n), ee(
          t,
          e,
          e.pendingProps.children,
          l
        ), Mi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && yt && ((n = a = _t) && (a = kg(
          a,
          e.type,
          e.pendingProps,
          _e
        ), a !== null ? (e.stateNode = a, Pt = e, _t = De(a.firstChild), _e = !1, n = !0) : n = !1), n || pl(e)), ie(e), n = e.type, i = e.pendingProps, u = t !== null ? t.memoizedProps : null, a = i.children, yo(n, i) ? a = null : u !== null && yo(n, u) && (e.flags |= 32), e.memoizedState !== null && (n = gc(
          t,
          e,
          Im,
          null,
          null,
          l
        ), Rn._currentValue = n), Mi(t, e), ee(t, e, a, l), e.child;
      case 6:
        return t === null && yt && ((t = l = _t) && (l = Bg(
          l,
          e.pendingProps,
          _e
        ), l !== null ? (e.stateNode = l, Pt = e, _t = null, t = !0) : t = !1), t || pl(e)), null;
      case 13:
        return yf(t, e, l);
      case 4:
        return Rt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = $l(
          e,
          null,
          a,
          l
        ) : ee(t, e, a, l), e.child;
      case 11:
        return of(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return ee(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return ee(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return ee(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, yl(e, e.type, a.value), ee(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Kl(e), n = te(n), a = a(n), e.flags |= 1, ee(t, e, a, l), e.child;
      case 14:
        return sf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return rf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return bf(t, e, l);
      case 31:
        return ug(t, e, l);
      case 22:
        return ff(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Kl(e), a = te(Vt), t === null ? (n = ic(), n === null && (n = Ct, i = ac(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), e.memoizedState = { parent: a, cache: n }, cc(e), yl(e, Vt, n)) : ((t.lanes & l) !== 0 && (oc(t, e), gn(e, null, null, l), mn()), n = t.memoizedState, i = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), yl(e, Vt, a)) : (a = i.cache, yl(e, Vt, a), a !== n.cache && lc(
          e,
          [Vt],
          l,
          !0
        ))), ee(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function Pe(t) {
    t.flags |= 4;
  }
  function Vc(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Kf()) t.flags |= 8192;
        else
          throw Wl = gi, uc;
    } else t.flags &= -16777217;
  }
  function Sf(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Hd(e))
      if (Kf()) t.flags |= 8192;
      else
        throw Wl = gi, uc;
  }
  function Oi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Po() : 536870912, t.lanes |= e, Da |= e);
  }
  function Sn(t, e) {
    if (!yt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Ot(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function og(t, e, l) {
    var a = e.pendingProps;
    switch ($u(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(e), null;
      case 1:
        return Ot(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Fe(Vt), pt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (xa(e) ? Pe(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Pu())), Ot(e), null;
      case 26:
        var n = e.type, i = e.memoizedState;
        return t === null ? (Pe(e), i !== null ? (Ot(e), Sf(e, i)) : (Ot(e), Vc(
          e,
          n,
          null,
          a,
          l
        ))) : i ? i !== t.memoizedState ? (Pe(e), Ot(e), Sf(e, i)) : (Ot(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Pe(e), Ot(e), Vc(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (sl(e), l = lt.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Pe(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(s(166));
            return Ot(e), null;
          }
          t = H.current, xa(e) ? Ps(e) : (t = Nd(n, a, l), e.stateNode = t, Pe(e));
        }
        return Ot(e), null;
      case 5:
        if (sl(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Pe(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(s(166));
            return Ot(e), null;
          }
          if (i = H.current, xa(e))
            Ps(e);
          else {
            var u = Ki(
              lt.current
            );
            switch (i) {
              case 1:
                i = u.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = u.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = u.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = u.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? u.createElement("select", {
                      is: a.is
                    }) : u.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? u.createElement(n, { is: a.is }) : u.createElement(n);
                }
            }
            i[It] = e, i[ue] = a;
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6)
                i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u, u = u.child;
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e)
                  break t;
                u = u.return;
              }
              u.sibling.return = u.return, u = u.sibling;
            }
            e.stateNode = i;
            t: switch (le(i, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Pe(e);
          }
        }
        return Ot(e), Vc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Pe(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(s(166));
          if (t = lt.current, xa(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Pt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[It] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || yd(t.nodeValue, l)), t || pl(e, !0);
          } else
            t = Ki(t).createTextNode(
              a
            ), t[It] = e, e.stateNode = t;
        }
        return Ot(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = xa(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(s(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(557));
              t[It] = e;
            } else
              Ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ot(e), t = !1;
          } else
            l = Pu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (xe(e), e) : (xe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Ot(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = xa(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(s(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
              n[It] = e;
            } else
              Ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ot(e), n = !1;
          } else
            n = Pu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (xe(e), e) : (xe(e), null);
        }
        return xe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Oi(e, e.updateQueue), Ot(e), null);
      case 4:
        return pt(), t === null && fo(e.stateNode.containerInfo), Ot(e), null;
      case 10:
        return Fe(e.type), Ot(e), null;
      case 19:
        if (C(Gt), a = e.memoizedState, a === null) return Ot(e), null;
        if (n = (e.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) Sn(a, !1);
          else {
            if (qt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = bi(t), i !== null) {
                  for (e.flags |= 128, Sn(a, !1), t = i.updateQueue, e.updateQueue = t, Oi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Js(l, t), l = l.sibling;
                  return U(
                    Gt,
                    Gt.current & 1 | 2
                  ), yt && Ke(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && me() > ki && (e.flags |= 128, n = !0, Sn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = bi(i), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Oi(e, t), Sn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !yt)
                return Ot(e), null;
            } else
              2 * me() - a.renderingStartTime > ki && l !== 536870912 && (e.flags |= 128, n = !0, Sn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (i.sibling = e.child, e.child = i) : (t = a.last, t !== null ? t.sibling = i : e.child = i, a.last = i);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = me(), t.sibling = null, l = Gt.current, U(
          Gt,
          n ? l & 1 | 2 : l & 1
        ), yt && Ke(e, a.treeForkCount), t) : (Ot(e), null);
      case 22:
      case 23:
        return xe(e), dc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ot(e), l = e.updateQueue, l !== null && Oi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && C(Jl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Fe(Vt), Ot(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function sg(t, e) {
    switch ($u(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Fe(Vt), pt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return sl(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (xe(e), e.alternate === null)
            throw Error(s(340));
          Ql();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (xe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(s(340));
          Ql();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return C(Gt), null;
      case 4:
        return pt(), null;
      case 10:
        return Fe(e.type), null;
      case 22:
      case 23:
        return xe(e), dc(), t !== null && C(Jl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Fe(Vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wf(t, e) {
    switch ($u(e), e.tag) {
      case 3:
        Fe(Vt), pt();
        break;
      case 26:
      case 27:
      case 5:
        sl(e);
        break;
      case 4:
        pt();
        break;
      case 31:
        e.memoizedState !== null && xe(e);
        break;
      case 13:
        xe(e);
        break;
      case 19:
        C(Gt);
        break;
      case 10:
        Fe(e.type);
        break;
      case 22:
      case 23:
        xe(e), dc(), t !== null && C(Jl);
        break;
      case 24:
        Fe(Vt);
    }
  }
  function wn(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create, u = l.inst;
            a = i(), u.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (r) {
      jt(e, e.return, r);
    }
  }
  function Al(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var u = a.inst, r = u.destroy;
            if (r !== void 0) {
              u.destroy = void 0, n = e;
              var h = l, w = r;
              try {
                w();
              } catch (M) {
                jt(
                  n,
                  h,
                  M
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (M) {
      jt(e, e.return, M);
    }
  }
  function Af(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        dr(e, l);
      } catch (a) {
        jt(t, t.return, a);
      }
    }
  }
  function zf(t, e, l) {
    l.props = Pl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      jt(t, e, a);
    }
  }
  function An(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      jt(t, e, n);
    }
  }
  function Ge(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          jt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          jt(t, e, n);
        }
      else l.current = null;
  }
  function jf(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      jt(t, t.return, n);
    }
  }
  function Xc(t, e, l) {
    try {
      var a = t.stateNode;
      _g(a, t.type, l, e), a[ue] = e;
    } catch (n) {
      jt(t, t.return, n);
    }
  }
  function Tf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ml(t.type) || t.tag === 4;
  }
  function Qc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Tf(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ml(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Zc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Xe));
    else if (a !== 4 && (a === 27 && Ml(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Zc(t, e, l), t = t.sibling; t !== null; )
        Zc(t, e, l), t = t.sibling;
  }
  function Di(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Ml(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Di(t, e, l), t = t.sibling; t !== null; )
        Di(t, e, l), t = t.sibling;
  }
  function Ef(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      le(e, a, l), e[It] = t, e[ue] = l;
    } catch (i) {
      jt(t, t.return, i);
    }
  }
  var tl = !1, Zt = !1, Kc = !1, Nf = typeof WeakSet == "function" ? WeakSet : Set, $t = null;
  function rg(t, e) {
    if (t = t.containerInfo, go = tu, t = qs(t), Gu(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var u = 0, r = -1, h = -1, w = 0, M = 0, D = t, z = null;
            e: for (; ; ) {
              for (var j; D !== l || n !== 0 && D.nodeType !== 3 || (r = u + n), D !== i || a !== 0 && D.nodeType !== 3 || (h = u + a), D.nodeType === 3 && (u += D.nodeValue.length), (j = D.firstChild) !== null; )
                z = D, D = j;
              for (; ; ) {
                if (D === t) break e;
                if (z === l && ++w === n && (r = u), z === i && ++M === a && (h = u), (j = D.nextSibling) !== null) break;
                D = z, z = D.parentNode;
              }
              D = j;
            }
            l = r === -1 || h === -1 ? null : { start: r, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (po = { focusedElem: t, selectionRange: l }, tu = !1, $t = e; $t !== null; )
      if (e = $t, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, $t = t;
      else
        for (; $t !== null; ) {
          switch (e = $t, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  n = t[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, l = e, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var q = Pl(
                    l.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    q,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (I) {
                  jt(
                    l,
                    l.return,
                    I
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  bo(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bo(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, $t = t;
            break;
          }
          $t = e.return;
        }
  }
  function Cf(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ll(t, l), a & 4 && wn(5, l);
        break;
      case 1:
        if (ll(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (u) {
              jt(l, l.return, u);
            }
          else {
            var n = Pl(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (u) {
              jt(
                l,
                l.return,
                u
              );
            }
          }
        a & 64 && Af(l), a & 512 && An(l, l.return);
        break;
      case 3:
        if (ll(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            dr(t, e);
          } catch (u) {
            jt(l, l.return, u);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Ef(l);
      case 26:
      case 5:
        ll(t, l), e === null && a & 4 && jf(l), a & 512 && An(l, l.return);
        break;
      case 12:
        ll(t, l);
        break;
      case 31:
        ll(t, l), a & 4 && Of(t, l);
        break;
      case 13:
        ll(t, l), a & 4 && Df(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = bg.bind(
          null,
          l
        ), qg(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || tl, !a) {
          e = e !== null && e.memoizedState !== null || Zt, n = tl;
          var i = Zt;
          tl = a, (Zt = e) && !i ? al(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ll(t, l), tl = n, Zt = i;
        }
        break;
      case 30:
        break;
      default:
        ll(t, l);
    }
  }
  function Mf(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Mf(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Au(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Dt = null, oe = !1;
  function el(t, e, l) {
    for (l = l.child; l !== null; )
      _f(t, e, l), l = l.sibling;
  }
  function _f(t, e, l) {
    if (ge && typeof ge.onCommitFiberUnmount == "function")
      try {
        ge.onCommitFiberUnmount(Za, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Zt || Ge(l, e), el(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Zt || Ge(l, e);
        var a = Dt, n = oe;
        Ml(l.type) && (Dt = l.stateNode, oe = !1), el(
          t,
          e,
          l
        ), On(l.stateNode), Dt = a, oe = n;
        break;
      case 5:
        Zt || Ge(l, e);
      case 6:
        if (a = Dt, n = oe, Dt = null, el(
          t,
          e,
          l
        ), Dt = a, oe = n, Dt !== null)
          if (oe)
            try {
              (Dt.nodeType === 9 ? Dt.body : Dt.nodeName === "HTML" ? Dt.ownerDocument.body : Dt).removeChild(l.stateNode);
            } catch (i) {
              jt(
                l,
                e,
                i
              );
            }
          else
            try {
              Dt.removeChild(l.stateNode);
            } catch (i) {
              jt(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        Dt !== null && (oe ? (t = Dt, Ad(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Ya(t)) : Ad(Dt, l.stateNode));
        break;
      case 4:
        a = Dt, n = oe, Dt = l.stateNode.containerInfo, oe = !0, el(
          t,
          e,
          l
        ), Dt = a, oe = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Al(2, l, e), Zt || Al(4, l, e), el(
          t,
          e,
          l
        );
        break;
      case 1:
        Zt || (Ge(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && zf(
          l,
          e,
          a
        )), el(
          t,
          e,
          l
        );
        break;
      case 21:
        el(
          t,
          e,
          l
        );
        break;
      case 22:
        Zt = (a = Zt) || l.memoizedState !== null, el(
          t,
          e,
          l
        ), Zt = a;
        break;
      default:
        el(
          t,
          e,
          l
        );
    }
  }
  function Of(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ya(t);
      } catch (l) {
        jt(e, e.return, l);
      }
    }
  }
  function Df(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ya(t);
      } catch (l) {
        jt(e, e.return, l);
      }
  }
  function fg(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Nf()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Nf()), e;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Ui(t, e) {
    var l = fg(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = xg.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function se(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], i = t, u = e, r = u;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Ml(r.type)) {
                Dt = r.stateNode, oe = !1;
                break t;
              }
              break;
            case 5:
              Dt = r.stateNode, oe = !1;
              break t;
            case 3:
            case 4:
              Dt = r.stateNode.containerInfo, oe = !0;
              break t;
          }
          r = r.return;
        }
        if (Dt === null) throw Error(s(160));
        _f(i, u, n), Dt = null, oe = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Uf(e, t), e = e.sibling;
  }
  var He = null;
  function Uf(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        se(e, t), re(t), a & 4 && (Al(3, t, t.return), wn(3, t), Al(5, t, t.return));
        break;
      case 1:
        se(e, t), re(t), a & 512 && (Zt || l === null || Ge(l, l.return)), a & 64 && tl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = He;
        if (se(e, t), re(t), a & 512 && (Zt || l === null || Ge(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[Fa] || i[It] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), le(i, a, l), i[It] = t, Wt(i), a = i;
                      break t;
                    case "link":
                      var u = Ud(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (u) {
                        for (var r = 0; r < u.length; r++)
                          if (i = u[r], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            u.splice(r, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), le(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = Ud(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (r = 0; r < u.length; r++)
                          if (i = u[r], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            u.splice(r, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), le(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  i[It] = t, Wt(i), a = i;
                }
                t.stateNode = a;
              } else
                Rd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Dd(
                n,
                a,
                t.memoizedProps
              );
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? Rd(
              n,
              t.type,
              t.stateNode
            ) : Dd(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Xc(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        se(e, t), re(t), a & 512 && (Zt || l === null || Ge(l, l.return)), l !== null && a & 4 && Xc(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (se(e, t), re(t), a & 512 && (Zt || l === null || Ge(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            ra(n, "");
          } catch (q) {
            jt(t, t.return, q);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Xc(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Kc = !0);
        break;
      case 6:
        if (se(e, t), re(t), a & 4) {
          if (t.stateNode === null)
            throw Error(s(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (q) {
            jt(t, t.return, q);
          }
        }
        break;
      case 3:
        if (Wi = null, n = He, He = Ji(e.containerInfo), se(e, t), He = n, re(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ya(e.containerInfo);
          } catch (q) {
            jt(t, t.return, q);
          }
        Kc && (Kc = !1, Rf(t));
        break;
      case 4:
        a = He, He = Ji(
          t.stateNode.containerInfo
        ), se(e, t), re(t), He = a;
        break;
      case 12:
        se(e, t), re(t);
        break;
      case 31:
        se(e, t), re(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ui(t, a)));
        break;
      case 13:
        se(e, t), re(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Hi = me()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ui(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, w = tl, M = Zt;
        if (tl = w || n, Zt = M || h, se(e, t), Zt = M, tl = w, re(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || h || tl || Zt || ta(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (i = h.stateNode, n)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    r = h.stateNode;
                    var D = h.memoizedProps.style, z = D != null && D.hasOwnProperty("display") ? D.display : null;
                    r.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (q) {
                  jt(h, h.return, q);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (q) {
                  jt(h, h.return, q);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var j = h.stateNode;
                  n ? zd(j, !0) : zd(h.stateNode, !1);
                } catch (q) {
                  jt(h, h.return, q);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Ui(t, l))));
        break;
      case 19:
        se(e, t), re(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ui(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        se(e, t), re(t);
    }
  }
  function re(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Tf(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, i = Qc(t);
            Di(t, i, n);
            break;
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (ra(u, ""), l.flags &= -33);
            var r = Qc(t);
            Di(t, r, u);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, w = Qc(t);
            Zc(
              t,
              w,
              h
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (M) {
        jt(t, t.return, M);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Rf(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Rf(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ll(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Cf(t, e.alternate, e), e = e.sibling;
  }
  function ta(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Al(4, e, e.return), ta(e);
          break;
        case 1:
          Ge(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && zf(
            e,
            e.return,
            l
          ), ta(e);
          break;
        case 27:
          On(e.stateNode);
        case 26:
        case 5:
          Ge(e, e.return), ta(e);
          break;
        case 22:
          e.memoizedState === null && ta(e);
          break;
        case 30:
          ta(e);
          break;
        default:
          ta(e);
      }
      t = t.sibling;
    }
  }
  function al(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, i = e, u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          al(
            n,
            i,
            l
          ), wn(4, i);
          break;
        case 1:
          if (al(
            n,
            i,
            l
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (w) {
              jt(a, a.return, w);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var r = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  fr(h[n], r);
            } catch (w) {
              jt(a, a.return, w);
            }
          }
          l && u & 64 && Af(i), An(i, i.return);
          break;
        case 27:
          Ef(i);
        case 26:
        case 5:
          al(
            n,
            i,
            l
          ), l && a === null && u & 4 && jf(i), An(i, i.return);
          break;
        case 12:
          al(
            n,
            i,
            l
          );
          break;
        case 31:
          al(
            n,
            i,
            l
          ), l && u & 4 && Of(n, i);
          break;
        case 13:
          al(
            n,
            i,
            l
          ), l && u & 4 && Df(n, i);
          break;
        case 22:
          i.memoizedState === null && al(
            n,
            i,
            l
          ), An(i, i.return);
          break;
        case 30:
          break;
        default:
          al(
            n,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Jc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && sn(l));
  }
  function Fc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && sn(t));
  }
  function ke(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Hf(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function Hf(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ke(
          t,
          e,
          l,
          a
        ), n & 2048 && wn(9, e);
        break;
      case 1:
        ke(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        ke(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && sn(t)));
        break;
      case 12:
        if (n & 2048) {
          ke(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, u = i.id, r = i.onPostCommit;
            typeof r == "function" && r(
              u,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (h) {
            jt(e, e.return, h);
          }
        } else
          ke(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        ke(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        ke(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, u = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? ke(
          t,
          e,
          l,
          a
        ) : zn(t, e) : i._visibility & 2 ? ke(
          t,
          e,
          l,
          a
        ) : (i._visibility |= 2, Ma(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Jc(u, e);
        break;
      case 24:
        ke(
          t,
          e,
          l,
          a
        ), n & 2048 && Fc(e.alternate, e);
        break;
      default:
        ke(
          t,
          e,
          l,
          a
        );
    }
  }
  function Ma(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, u = e, r = l, h = a, w = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ma(
            i,
            u,
            r,
            h,
            n
          ), wn(8, u);
          break;
        case 23:
          break;
        case 22:
          var M = u.stateNode;
          u.memoizedState !== null ? M._visibility & 2 ? Ma(
            i,
            u,
            r,
            h,
            n
          ) : zn(
            i,
            u
          ) : (M._visibility |= 2, Ma(
            i,
            u,
            r,
            h,
            n
          )), n && w & 2048 && Jc(
            u.alternate,
            u
          );
          break;
        case 24:
          Ma(
            i,
            u,
            r,
            h,
            n
          ), n && w & 2048 && Fc(u.alternate, u);
          break;
        default:
          Ma(
            i,
            u,
            r,
            h,
            n
          );
      }
      e = e.sibling;
    }
  }
  function zn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            zn(l, a), n & 2048 && Jc(
              a.alternate,
              a
            );
            break;
          case 24:
            zn(l, a), n & 2048 && Fc(a.alternate, a);
            break;
          default:
            zn(l, a);
        }
        e = e.sibling;
      }
  }
  var jn = 8192;
  function _a(t, e, l) {
    if (t.subtreeFlags & jn)
      for (t = t.child; t !== null; )
        kf(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function kf(t, e, l) {
    switch (t.tag) {
      case 26:
        _a(
          t,
          e,
          l
        ), t.flags & jn && t.memoizedState !== null && $g(
          l,
          He,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        _a(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = He;
        He = Ji(t.stateNode.containerInfo), _a(
          t,
          e,
          l
        ), He = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = jn, jn = 16777216, _a(
          t,
          e,
          l
        ), jn = a) : _a(
          t,
          e,
          l
        ));
        break;
      default:
        _a(
          t,
          e,
          l
        );
    }
  }
  function Bf(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Tn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          $t = a, Gf(
            a,
            t
          );
        }
      Bf(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        qf(t), t = t.sibling;
  }
  function qf(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tn(t), t.flags & 2048 && Al(9, t, t.return);
        break;
      case 3:
        Tn(t);
        break;
      case 12:
        Tn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ri(t)) : Tn(t);
        break;
      default:
        Tn(t);
    }
  }
  function Ri(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          $t = a, Gf(
            a,
            t
          );
        }
      Bf(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, e, e.return), Ri(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Ri(e));
          break;
        default:
          Ri(e);
      }
      t = t.sibling;
    }
  }
  function Gf(t, e) {
    for (; $t !== null; ) {
      var l = $t;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          sn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, $t = a;
      else
        t: for (l = t; $t !== null; ) {
          a = $t;
          var n = a.sibling, i = a.return;
          if (Mf(a), a === l) {
            $t = null;
            break t;
          }
          if (n !== null) {
            n.return = i, $t = n;
            break t;
          }
          $t = i;
        }
    }
  }
  var dg = {
    getCacheForType: function(t) {
      var e = te(Vt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return te(Vt).controller.signal;
    }
  }, hg = typeof WeakMap == "function" ? WeakMap : Map, At = 0, Ct = null, rt = null, ht = 0, zt = 0, Se = null, zl = !1, Oa = !1, Wc = !1, nl = 0, qt = 0, jl = 0, ea = 0, $c = 0, we = 0, Da = 0, En = null, fe = null, Ic = !1, Hi = 0, Yf = 0, ki = 1 / 0, Bi = null, Tl = null, Kt = 0, El = null, Ua = null, il = 0, Pc = 0, to = null, Lf = null, Nn = 0, eo = null;
  function Ae() {
    return (At & 2) !== 0 && ht !== 0 ? ht & -ht : T.T !== null ? co() : as();
  }
  function Vf() {
    if (we === 0)
      if ((ht & 536870912) === 0 || yt) {
        var t = Zn;
        Zn <<= 1, (Zn & 3932160) === 0 && (Zn = 262144), we = t;
      } else we = 536870912;
    return t = be.current, t !== null && (t.flags |= 32), we;
  }
  function de(t, e, l) {
    (t === Ct && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) && (Ra(t, 0), Nl(
      t,
      ht,
      we,
      !1
    )), Ja(t, l), ((At & 2) === 0 || t !== Ct) && (t === Ct && ((At & 2) === 0 && (ea |= l), qt === 4 && Nl(
      t,
      ht,
      we,
      !1
    )), Ye(t));
  }
  function Xf(t, e, l) {
    if ((At & 6) !== 0) throw Error(s(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ka(t, e), n = a ? pg(t, e) : ao(t, e, !0), i = a;
    do {
      if (n === 0) {
        Oa && !a && Nl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !mg(l)) {
          n = ao(t, e, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var u = 0;
          else
            u = t.pendingLanes & -536870913, u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
          if (u !== 0) {
            e = u;
            t: {
              var r = t;
              n = En;
              var h = r.current.memoizedState.isDehydrated;
              if (h && (Ra(r, u).flags |= 256), u = ao(
                r,
                u,
                !1
              ), u !== 2) {
                if (Wc && !h) {
                  r.errorRecoveryDisabledLanes |= i, ea |= i, n = 4;
                  break t;
                }
                i = fe, fe = n, i !== null && (fe === null ? fe = i : fe.push.apply(
                  fe,
                  i
                ));
              }
              n = u;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ra(t, 0), Nl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, i = n, i) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Nl(
                a,
                e,
                we,
                !zl
              );
              break t;
            case 2:
              fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && (n = Hi + 300 - me(), 10 < n)) {
            if (Nl(
              a,
              e,
              we,
              !zl
            ), Jn(a, 0, !0) !== 0) break t;
            il = e, a.timeoutHandle = Sd(
              Qf.bind(
                null,
                a,
                l,
                fe,
                Bi,
                Ic,
                e,
                we,
                ea,
                Da,
                zl,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          Qf(
            a,
            l,
            fe,
            Bi,
            Ic,
            e,
            we,
            ea,
            Da,
            zl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ye(t);
  }
  function Qf(t, e, l, a, n, i, u, r, h, w, M, D, z, j) {
    if (t.timeoutHandle = -1, D = e.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
      D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xe
      }, kf(
        e,
        i,
        D
      );
      var q = (i & 62914560) === i ? Hi - me() : (i & 4194048) === i ? Yf - me() : 0;
      if (q = Ig(
        D,
        q
      ), q !== null) {
        il = i, t.cancelPendingCommit = q(
          Pf.bind(
            null,
            t,
            e,
            i,
            l,
            a,
            n,
            u,
            r,
            h,
            M,
            D,
            null,
            z,
            j
          )
        ), Nl(t, i, u, !w);
        return;
      }
    }
    Pf(
      t,
      e,
      i,
      l,
      a,
      n,
      u,
      r,
      h
    );
  }
  function mg(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!ye(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Nl(t, e, l, a) {
    e &= ~$c, e &= ~ea, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - pe(n), u = 1 << i;
      a[i] = -1, n &= ~u;
    }
    l !== 0 && ts(t, l, e);
  }
  function qi() {
    return (At & 6) === 0 ? (Cn(0), !1) : !0;
  }
  function lo() {
    if (rt !== null) {
      if (zt === 0)
        var t = rt.return;
      else
        t = rt, Je = Zl = null, vc(t), ja = null, fn = 0, t = rt;
      for (; t !== null; )
        wf(t.alternate, t), t = t.return;
      rt = null;
    }
  }
  function Ra(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Ug(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), il = 0, lo(), Ct = t, rt = l = Ze(t.current, null), ht = e, zt = 0, Se = null, zl = !1, Oa = Ka(t, e), Wc = !1, Da = we = $c = ea = jl = qt = 0, fe = En = null, Ic = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - pe(a), i = 1 << n;
        e |= t[n], a &= ~i;
      }
    return nl = e, ui(), l;
  }
  function Zf(t, e) {
    nt = null, T.H = bn, e === za || e === mi ? (e = cr(), zt = 3) : e === uc ? (e = cr(), zt = 4) : zt = e === Uc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Se = e, rt === null && (qt = 1, Ni(
      t,
      Ne(e, t.current)
    ));
  }
  function Kf() {
    var t = be.current;
    return t === null ? !0 : (ht & 4194048) === ht ? Oe === null : (ht & 62914560) === ht || (ht & 536870912) !== 0 ? t === Oe : !1;
  }
  function Jf() {
    var t = T.H;
    return T.H = bn, t === null ? bn : t;
  }
  function Ff() {
    var t = T.A;
    return T.A = dg, t;
  }
  function Gi() {
    qt = 4, zl || (ht & 4194048) !== ht && be.current !== null || (Oa = !0), (jl & 134217727) === 0 && (ea & 134217727) === 0 || Ct === null || Nl(
      Ct,
      ht,
      we,
      !1
    );
  }
  function ao(t, e, l) {
    var a = At;
    At |= 2;
    var n = Jf(), i = Ff();
    (Ct !== t || ht !== e) && (Bi = null, Ra(t, e)), e = !1;
    var u = qt;
    t: do
      try {
        if (zt !== 0 && rt !== null) {
          var r = rt, h = Se;
          switch (zt) {
            case 8:
              lo(), u = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              be.current === null && (e = !0);
              var w = zt;
              if (zt = 0, Se = null, Ha(t, r, h, w), l && Oa) {
                u = 0;
                break t;
              }
              break;
            default:
              w = zt, zt = 0, Se = null, Ha(t, r, h, w);
          }
        }
        gg(), u = qt;
        break;
      } catch (M) {
        Zf(t, M);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Je = Zl = null, At = a, T.H = n, T.A = i, rt === null && (Ct = null, ht = 0, ui()), u;
  }
  function gg() {
    for (; rt !== null; ) Wf(rt);
  }
  function pg(t, e) {
    var l = At;
    At |= 2;
    var a = Jf(), n = Ff();
    Ct !== t || ht !== e ? (Bi = null, ki = me() + 500, Ra(t, e)) : Oa = Ka(
      t,
      e
    );
    t: do
      try {
        if (zt !== 0 && rt !== null) {
          e = rt;
          var i = Se;
          e: switch (zt) {
            case 1:
              zt = 0, Se = null, Ha(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (ir(i)) {
                zt = 0, Se = null, $f(e);
                break;
              }
              e = function() {
                zt !== 2 && zt !== 9 || Ct !== t || (zt = 7), Ye(t);
              }, i.then(e, e);
              break t;
            case 3:
              zt = 7;
              break t;
            case 4:
              zt = 5;
              break t;
            case 7:
              ir(i) ? (zt = 0, Se = null, $f(e)) : (zt = 0, Se = null, Ha(t, e, i, 7));
              break;
            case 5:
              var u = null;
              switch (rt.tag) {
                case 26:
                  u = rt.memoizedState;
                case 5:
                case 27:
                  var r = rt;
                  if (u ? Hd(u) : r.stateNode.complete) {
                    zt = 0, Se = null;
                    var h = r.sibling;
                    if (h !== null) rt = h;
                    else {
                      var w = r.return;
                      w !== null ? (rt = w, Yi(w)) : rt = null;
                    }
                    break e;
                  }
              }
              zt = 0, Se = null, Ha(t, e, i, 5);
              break;
            case 6:
              zt = 0, Se = null, Ha(t, e, i, 6);
              break;
            case 8:
              lo(), qt = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        yg();
        break;
      } catch (M) {
        Zf(t, M);
      }
    while (!0);
    return Je = Zl = null, T.H = a, T.A = n, At = l, rt !== null ? 0 : (Ct = null, ht = 0, ui(), qt);
  }
  function yg() {
    for (; rt !== null && !Gh(); )
      Wf(rt);
  }
  function Wf(t) {
    var e = xf(t.alternate, t, nl);
    t.memoizedProps = t.pendingProps, e === null ? Yi(t) : rt = e;
  }
  function $f(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = mf(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ht
        );
        break;
      case 11:
        e = mf(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ht
        );
        break;
      case 5:
        vc(e);
      default:
        wf(l, e), e = rt = Js(e, nl), e = xf(l, e, nl);
    }
    t.memoizedProps = t.pendingProps, e === null ? Yi(t) : rt = e;
  }
  function Ha(t, e, l, a) {
    Je = Zl = null, vc(e), ja = null, fn = 0;
    var n = e.return;
    try {
      if (ig(
        t,
        n,
        e,
        l,
        ht
      )) {
        qt = 1, Ni(
          t,
          Ne(l, t.current)
        ), rt = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw rt = n, i;
      qt = 1, Ni(
        t,
        Ne(l, t.current)
      ), rt = null;
      return;
    }
    e.flags & 32768 ? (yt || a === 1 ? t = !0 : Oa || (ht & 536870912) !== 0 ? t = !1 : (zl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = be.current, a !== null && a.tag === 13 && (a.flags |= 16384))), If(e, t)) : Yi(e);
  }
  function Yi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        If(
          e,
          zl
        );
        return;
      }
      t = e.return;
      var l = og(
        e.alternate,
        e,
        nl
      );
      if (l !== null) {
        rt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        rt = e;
        return;
      }
      rt = e = t;
    } while (e !== null);
    qt === 0 && (qt = 5);
  }
  function If(t, e) {
    do {
      var l = sg(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, rt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        rt = t;
        return;
      }
      rt = t = l;
    } while (t !== null);
    qt = 6, rt = null;
  }
  function Pf(t, e, l, a, n, i, u, r, h) {
    t.cancelPendingCommit = null;
    do
      Li();
    while (Kt !== 0);
    if ((At & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (i = e.lanes | e.childLanes, i |= Qu, Wh(
        t,
        l,
        i,
        u,
        r,
        h
      ), t === Ct && (rt = Ct = null, ht = 0), Ua = e, El = t, il = l, Pc = i, to = n, Lf = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Sg(Xn, function() {
        return nd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = T.T, T.T = null, n = B.p, B.p = 2, u = At, At |= 4;
        try {
          rg(t, e, l);
        } finally {
          At = u, B.p = n, T.T = a;
        }
      }
      Kt = 1, td(), ed(), ld();
    }
  }
  function td() {
    if (Kt === 1) {
      Kt = 0;
      var t = El, e = Ua, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = T.T, T.T = null;
        var a = B.p;
        B.p = 2;
        var n = At;
        At |= 4;
        try {
          Uf(e, t);
          var i = po, u = qs(t.containerInfo), r = i.focusedElem, h = i.selectionRange;
          if (u !== r && r && r.ownerDocument && Bs(
            r.ownerDocument.documentElement,
            r
          )) {
            if (h !== null && Gu(r)) {
              var w = h.start, M = h.end;
              if (M === void 0 && (M = w), "selectionStart" in r)
                r.selectionStart = w, r.selectionEnd = Math.min(
                  M,
                  r.value.length
                );
              else {
                var D = r.ownerDocument || document, z = D && D.defaultView || window;
                if (z.getSelection) {
                  var j = z.getSelection(), q = r.textContent.length, I = Math.min(h.start, q), Nt = h.end === void 0 ? I : Math.min(h.end, q);
                  !j.extend && I > Nt && (u = Nt, Nt = I, I = u);
                  var y = ks(
                    r,
                    I
                  ), g = ks(
                    r,
                    Nt
                  );
                  if (y && g && (j.rangeCount !== 1 || j.anchorNode !== y.node || j.anchorOffset !== y.offset || j.focusNode !== g.node || j.focusOffset !== g.offset)) {
                    var x = D.createRange();
                    x.setStart(y.node, y.offset), j.removeAllRanges(), I > Nt ? (j.addRange(x), j.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), j.addRange(x));
                  }
                }
              }
            }
            for (D = [], j = r; j = j.parentNode; )
              j.nodeType === 1 && D.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < D.length; r++) {
              var O = D[r];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          tu = !!go, po = go = null;
        } finally {
          At = n, B.p = a, T.T = l;
        }
      }
      t.current = e, Kt = 2;
    }
  }
  function ed() {
    if (Kt === 2) {
      Kt = 0;
      var t = El, e = Ua, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = T.T, T.T = null;
        var a = B.p;
        B.p = 2;
        var n = At;
        At |= 4;
        try {
          Cf(t, e.alternate, e);
        } finally {
          At = n, B.p = a, T.T = l;
        }
      }
      Kt = 3;
    }
  }
  function ld() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0, Yh();
      var t = El, e = Ua, l = il, a = Lf;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Kt = 5 : (Kt = 0, Ua = El = null, ad(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Tl = null), Su(l), e = e.stateNode, ge && typeof ge.onCommitFiberRoot == "function")
        try {
          ge.onCommitFiberRoot(
            Za,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = T.T, n = B.p, B.p = 2, T.T = null;
        try {
          for (var i = t.onRecoverableError, u = 0; u < a.length; u++) {
            var r = a[u];
            i(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          T.T = e, B.p = n;
        }
      }
      (il & 3) !== 0 && Li(), Ye(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === eo ? Nn++ : (Nn = 0, eo = t) : Nn = 0, Cn(0);
    }
  }
  function ad(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, sn(e)));
  }
  function Li() {
    return td(), ed(), ld(), nd();
  }
  function nd() {
    if (Kt !== 5) return !1;
    var t = El, e = Pc;
    Pc = 0;
    var l = Su(il), a = T.T, n = B.p;
    try {
      B.p = 32 > l ? 32 : l, T.T = null, l = to, to = null;
      var i = El, u = il;
      if (Kt = 0, Ua = El = null, il = 0, (At & 6) !== 0) throw Error(s(331));
      var r = At;
      if (At |= 4, qf(i.current), Hf(
        i,
        i.current,
        u,
        l
      ), At = r, Cn(0, !1), ge && typeof ge.onPostCommitFiberRoot == "function")
        try {
          ge.onPostCommitFiberRoot(Za, i);
        } catch {
        }
      return !0;
    } finally {
      B.p = n, T.T = a, ad(t, e);
    }
  }
  function id(t, e, l) {
    e = Ne(l, e), e = Dc(t.stateNode, e, 2), t = xl(t, e, 2), t !== null && (Ja(t, 2), Ye(t));
  }
  function jt(t, e, l) {
    if (t.tag === 3)
      id(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          id(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Tl === null || !Tl.has(a))) {
            t = Ne(l, t), l = uf(2), a = xl(e, l, 2), a !== null && (cf(
              l,
              a,
              e,
              t
            ), Ja(a, 2), Ye(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function no(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new hg();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Wc = !0, n.add(l), t = vg.bind(null, t, e, l), e.then(t, t));
  }
  function vg(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Ct === t && (ht & l) === l && (qt === 4 || qt === 3 && (ht & 62914560) === ht && 300 > me() - Hi ? (At & 2) === 0 && Ra(t, 0) : $c |= l, Da === ht && (Da = 0)), Ye(t);
  }
  function ud(t, e) {
    e === 0 && (e = Po()), t = Vl(t, e), t !== null && (Ja(t, e), Ye(t));
  }
  function bg(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), ud(t, l);
  }
  function xg(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(e), ud(t, l);
  }
  function Sg(t, e) {
    return yu(t, e);
  }
  var Vi = null, ka = null, io = !1, Xi = !1, uo = !1, Cl = 0;
  function Ye(t) {
    t !== ka && t.next === null && (ka === null ? Vi = ka = t : ka = ka.next = t), Xi = !0, io || (io = !0, Ag());
  }
  function Cn(t, e) {
    if (!uo && Xi) {
      uo = !0;
      do
        for (var l = !1, a = Vi; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = a.suspendedLanes, r = a.pingedLanes;
              i = (1 << 31 - pe(42 | t) + 1) - 1, i &= n & ~(u & ~r), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, rd(a, i));
          } else
            i = ht, i = Jn(
              a,
              a === Ct ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Ka(a, i) || (l = !0, rd(a, i));
          a = a.next;
        }
      while (l);
      uo = !1;
    }
  }
  function wg() {
    cd();
  }
  function cd() {
    Xi = io = !1;
    var t = 0;
    Cl !== 0 && Dg() && (t = Cl);
    for (var e = me(), l = null, a = Vi; a !== null; ) {
      var n = a.next, i = od(a, e);
      i === 0 ? (a.next = null, l === null ? Vi = n : l.next = n, n === null && (ka = l)) : (l = a, (t !== 0 || (i & 3) !== 0) && (Xi = !0)), a = n;
    }
    Kt !== 0 && Kt !== 5 || Cn(t), Cl !== 0 && (Cl = 0);
  }
  function od(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - pe(i), r = 1 << u, h = n[u];
      h === -1 ? ((r & l) === 0 || (r & a) !== 0) && (n[u] = Fh(r, e)) : h <= e && (t.expiredLanes |= r), i &= ~r;
    }
    if (e = Ct, l = ht, l = Jn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && vu(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Ka(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && vu(a), Su(l)) {
        case 2:
        case 8:
          l = $o;
          break;
        case 32:
          l = Xn;
          break;
        case 268435456:
          l = Io;
          break;
        default:
          l = Xn;
      }
      return a = sd.bind(null, t), l = yu(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && vu(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function sd(t, e) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Li() && t.callbackNode !== l)
      return null;
    var a = ht;
    return a = Jn(
      t,
      t === Ct ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Xf(t, a, e), od(t, me()), t.callbackNode != null && t.callbackNode === l ? sd.bind(null, t) : null);
  }
  function rd(t, e) {
    if (Li()) return null;
    Xf(t, e, !0);
  }
  function Ag() {
    Rg(function() {
      (At & 6) !== 0 ? yu(
        Wo,
        wg
      ) : cd();
    });
  }
  function co() {
    if (Cl === 0) {
      var t = wa;
      t === 0 && (t = Qn, Qn <<= 1, (Qn & 261888) === 0 && (Qn = 256)), Cl = t;
    }
    return Cl;
  }
  function fd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : In("" + t);
  }
  function dd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function zg(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var i = fd(
        (n[ue] || null).action
      ), u = a.submitter;
      u && (e = (e = u[ue] || null) ? fd(e.formAction) : u.getAttribute("formAction"), e !== null && (i = e, u = null));
      var r = new li(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Cl !== 0) {
                  var h = u ? dd(n, u) : new FormData(n);
                  Ec(
                    l,
                    {
                      pending: !0,
                      data: h,
                      method: n.method,
                      action: i
                    },
                    null,
                    h
                  );
                }
              } else
                typeof i == "function" && (r.preventDefault(), h = u ? dd(n, u) : new FormData(n), Ec(
                  l,
                  {
                    pending: !0,
                    data: h,
                    method: n.method,
                    action: i
                  },
                  i,
                  h
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var oo = 0; oo < Xu.length; oo++) {
    var so = Xu[oo], jg = so.toLowerCase(), Tg = so[0].toUpperCase() + so.slice(1);
    Re(
      jg,
      "on" + Tg
    );
  }
  Re(Ls, "onAnimationEnd"), Re(Vs, "onAnimationIteration"), Re(Xs, "onAnimationStart"), Re("dblclick", "onDoubleClick"), Re("focusin", "onFocus"), Re("focusout", "onBlur"), Re(Lm, "onTransitionRun"), Re(Vm, "onTransitionStart"), Re(Xm, "onTransitionCancel"), Re(Qs, "onTransitionEnd"), oa("onMouseEnter", ["mouseout", "mouseover"]), oa("onMouseLeave", ["mouseout", "mouseover"]), oa("onPointerEnter", ["pointerout", "pointerover"]), oa("onPointerLeave", ["pointerout", "pointerover"]), ql(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ql(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ql("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ql(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ql(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ql(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Eg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn)
  );
  function hd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var u = a.length - 1; 0 <= u; u--) {
            var r = a[u], h = r.instance, w = r.currentTarget;
            if (r = r.listener, h !== i && n.isPropagationStopped())
              break t;
            i = r, n.currentTarget = w;
            try {
              i(n);
            } catch (M) {
              ii(M);
            }
            n.currentTarget = null, i = h;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (r = a[u], h = r.instance, w = r.currentTarget, r = r.listener, h !== i && n.isPropagationStopped())
              break t;
            i = r, n.currentTarget = w;
            try {
              i(n);
            } catch (M) {
              ii(M);
            }
            n.currentTarget = null, i = h;
          }
      }
    }
  }
  function ft(t, e) {
    var l = e[wu];
    l === void 0 && (l = e[wu] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (md(e, t, 2, !1), l.add(a));
  }
  function ro(t, e, l) {
    var a = 0;
    e && (a |= 4), md(
      l,
      t,
      a,
      e
    );
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function fo(t) {
    if (!t[Qi]) {
      t[Qi] = !0, us.forEach(function(l) {
        l !== "selectionchange" && (Eg.has(l) || ro(l, !1, t), ro(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Qi] || (e[Qi] = !0, ro("selectionchange", !1, e));
    }
  }
  function md(t, e, l, a) {
    switch (Vd(e)) {
      case 2:
        var n = e0;
        break;
      case 8:
        n = l0;
        break;
      default:
        n = Eo;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !_u || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function ho(t, e, l, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var r = a.stateNode.containerInfo;
          if (r === n) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var h = u.tag;
              if ((h === 3 || h === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; r !== null; ) {
            if (u = ia(r), u === null) return;
            if (h = u.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              a = i = u;
              continue t;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    vs(function() {
      var w = i, M = Cu(l), D = [];
      t: {
        var z = Zs.get(t);
        if (z !== void 0) {
          var j = li, q = t;
          switch (t) {
            case "keypress":
              if (ti(l) === 0) break t;
            case "keydown":
            case "keyup":
              j = xm;
              break;
            case "focusin":
              q = "focus", j = Ru;
              break;
            case "focusout":
              q = "blur", j = Ru;
              break;
            case "beforeblur":
            case "afterblur":
              j = Ru;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = Ss;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = om;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Am;
              break;
            case Ls:
            case Vs:
            case Xs:
              j = fm;
              break;
            case Qs:
              j = jm;
              break;
            case "scroll":
            case "scrollend":
              j = um;
              break;
            case "wheel":
              j = Em;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = As;
              break;
            case "toggle":
            case "beforetoggle":
              j = Cm;
          }
          var I = (e & 4) !== 0, Nt = !I && (t === "scroll" || t === "scrollend"), y = I ? z !== null ? z + "Capture" : null : z;
          I = [];
          for (var g = w, x; g !== null; ) {
            var O = g;
            if (x = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || x === null || y === null || (O = $a(g, y), O != null && I.push(
              _n(g, O, x)
            )), Nt) break;
            g = g.return;
          }
          0 < I.length && (z = new j(
            z,
            q,
            null,
            l,
            M
          ), D.push({ event: z, listeners: I }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", j = t === "mouseout" || t === "pointerout", z && l !== Nu && (q = l.relatedTarget || l.fromElement) && (ia(q) || q[na]))
            break t;
          if ((j || z) && (z = M.window === M ? M : (z = M.ownerDocument) ? z.defaultView || z.parentWindow : window, j ? (q = l.relatedTarget || l.toElement, j = w, q = q ? ia(q) : null, q !== null && (Nt = b(q), I = q.tag, q !== Nt || I !== 5 && I !== 27 && I !== 6) && (q = null)) : (j = null, q = w), j !== q)) {
            if (I = Ss, O = "onMouseLeave", y = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (I = As, O = "onPointerLeave", y = "onPointerEnter", g = "pointer"), Nt = j == null ? z : Wa(j), x = q == null ? z : Wa(q), z = new I(
              O,
              g + "leave",
              j,
              l,
              M
            ), z.target = Nt, z.relatedTarget = x, O = null, ia(M) === w && (I = new I(
              y,
              g + "enter",
              q,
              l,
              M
            ), I.target = x, I.relatedTarget = Nt, O = I), Nt = O, j && q)
              e: {
                for (I = Ng, y = j, g = q, x = 0, O = y; O; O = I(O))
                  x++;
                O = 0;
                for (var F = g; F; F = I(F))
                  O++;
                for (; 0 < x - O; )
                  y = I(y), x--;
                for (; 0 < O - x; )
                  g = I(g), O--;
                for (; x--; ) {
                  if (y === g || g !== null && y === g.alternate) {
                    I = y;
                    break e;
                  }
                  y = I(y), g = I(g);
                }
                I = null;
              }
            else I = null;
            j !== null && gd(
              D,
              z,
              j,
              I,
              !1
            ), q !== null && Nt !== null && gd(
              D,
              Nt,
              q,
              I,
              !0
            );
          }
        }
        t: {
          if (z = w ? Wa(w) : window, j = z.nodeName && z.nodeName.toLowerCase(), j === "select" || j === "input" && z.type === "file")
            var St = _s;
          else if (Cs(z))
            if (Os)
              St = qm;
            else {
              St = km;
              var Z = Hm;
            }
          else
            j = z.nodeName, !j || j.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? w && Eu(w.elementType) && (St = _s) : St = Bm;
          if (St && (St = St(t, w))) {
            Ms(
              D,
              St,
              l,
              M
            );
            break t;
          }
          Z && Z(t, z, w), t === "focusout" && w && z.type === "number" && w.memoizedProps.value != null && Tu(z, "number", z.value);
        }
        switch (Z = w ? Wa(w) : window, t) {
          case "focusin":
            (Cs(Z) || Z.contentEditable === "true") && (ma = Z, Yu = w, un = null);
            break;
          case "focusout":
            un = Yu = ma = null;
            break;
          case "mousedown":
            Lu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Lu = !1, Gs(D, l, M);
            break;
          case "selectionchange":
            if (Ym) break;
          case "keydown":
          case "keyup":
            Gs(D, l, M);
        }
        var ut;
        if (ku)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          ha ? Es(t, l) && (mt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (mt = "onCompositionStart");
        mt && (zs && l.locale !== "ko" && (ha || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && ha && (ut = bs()) : (hl = M, Ou = "value" in hl ? hl.value : hl.textContent, ha = !0)), Z = Zi(w, mt), 0 < Z.length && (mt = new ws(
          mt,
          t,
          null,
          l,
          M
        ), D.push({ event: mt, listeners: Z }), ut ? mt.data = ut : (ut = Ns(l), ut !== null && (mt.data = ut)))), (ut = _m ? Om(t, l) : Dm(t, l)) && (mt = Zi(w, "onBeforeInput"), 0 < mt.length && (Z = new ws(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          M
        ), D.push({
          event: Z,
          listeners: mt
        }), Z.data = ut)), zg(
          D,
          t,
          w,
          l,
          M
        );
      }
      hd(D, e);
    });
  }
  function _n(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Zi(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = $a(t, l), n != null && a.unshift(
        _n(t, n, i)
      ), n = $a(t, e), n != null && a.push(
        _n(t, n, i)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Ng(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function gd(t, e, l, a, n) {
    for (var i = e._reactName, u = []; l !== null && l !== a; ) {
      var r = l, h = r.alternate, w = r.stateNode;
      if (r = r.tag, h !== null && h === a) break;
      r !== 5 && r !== 26 && r !== 27 || w === null || (h = w, n ? (w = $a(l, i), w != null && u.unshift(
        _n(l, w, h)
      )) : n || (w = $a(l, i), w != null && u.push(
        _n(l, w, h)
      ))), l = l.return;
    }
    u.length !== 0 && t.push({ event: e, listeners: u });
  }
  var Cg = /\r\n?/g, Mg = /\u0000|\uFFFD/g;
  function pd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Cg, `
`).replace(Mg, "");
  }
  function yd(t, e) {
    return e = pd(e), pd(t) === e;
  }
  function Et(t, e, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ra(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ra(t, "" + a);
        break;
      case "className":
        Wn(t, "class", a);
        break;
      case "tabIndex":
        Wn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wn(t, l, a);
        break;
      case "style":
        ps(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          Wn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = In("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && Et(t, e, "name", n.name, n, null), Et(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Et(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Et(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Et(t, e, "encType", n.encType, n, null), Et(t, e, "method", n.method, n, null), Et(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = In("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Xe);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = In("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        ft("beforetoggle", t), ft("toggle", t), Fn(t, "popover", a);
        break;
      case "xlinkActuate":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ve(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ve(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ve(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ve(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Fn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = nm.get(l) || l, Fn(t, l, a));
    }
  }
  function mo(t, e, l, a, n, i) {
    switch (l) {
      case "style":
        ps(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ra(t, a) : (typeof a == "number" || typeof a == "bigint") && ra(t, "" + a);
        break;
      case "onScroll":
        a != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ft("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Xe);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!cs.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), i = t[ue] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Fn(t, l, a);
          }
    }
  }
  function le(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ft("error", t), ft("load", t);
        var a = !1, n = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var u = l[i];
            if (u != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  Et(t, e, i, u, l, null);
              }
          }
        n && Et(t, e, "srcSet", l.srcSet, l, null), a && Et(t, e, "src", l.src, l, null);
        return;
      case "input":
        ft("invalid", t);
        var r = i = u = n = null, h = null, w = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var M = l[a];
            if (M != null)
              switch (a) {
                case "name":
                  n = M;
                  break;
                case "type":
                  u = M;
                  break;
                case "checked":
                  h = M;
                  break;
                case "defaultChecked":
                  w = M;
                  break;
                case "value":
                  i = M;
                  break;
                case "defaultValue":
                  r = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(s(137, e));
                  break;
                default:
                  Et(t, e, a, M, l, null);
              }
          }
        ds(
          t,
          i,
          r,
          h,
          w,
          u,
          n,
          !1
        );
        return;
      case "select":
        ft("invalid", t), a = u = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (r = l[n], r != null))
            switch (n) {
              case "value":
                i = r;
                break;
              case "defaultValue":
                u = r;
                break;
              case "multiple":
                a = r;
              default:
                Et(t, e, n, r, l, null);
            }
        e = i, l = u, t.multiple = !!a, e != null ? sa(t, !!a, e, !1) : l != null && sa(t, !!a, l, !0);
        return;
      case "textarea":
        ft("invalid", t), i = n = a = null;
        for (u in l)
          if (l.hasOwnProperty(u) && (r = l[u], r != null))
            switch (u) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                i = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(s(91));
                break;
              default:
                Et(t, e, u, r, l, null);
            }
        ms(t, a, n, i);
        return;
      case "option":
        for (h in l)
          l.hasOwnProperty(h) && (a = l[h], a != null) && (h === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Et(t, e, h, a, l, null));
        return;
      case "dialog":
        ft("beforetoggle", t), ft("toggle", t), ft("cancel", t), ft("close", t);
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Mn.length; a++)
          ft(Mn[a], t);
        break;
      case "image":
        ft("error", t), ft("load", t);
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", t), ft("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (w in l)
          if (l.hasOwnProperty(w) && (a = l[w], a != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                Et(t, e, w, a, l, null);
            }
        return;
      default:
        if (Eu(e)) {
          for (M in l)
            l.hasOwnProperty(M) && (a = l[M], a !== void 0 && mo(
              t,
              e,
              M,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && (a = l[r], a != null && Et(t, e, r, a, l, null));
  }
  function _g(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, i = null, u = null, r = null, h = null, w = null, M = null;
        for (j in l) {
          var D = l[j];
          if (l.hasOwnProperty(j) && D != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = D;
              default:
                a.hasOwnProperty(j) || Et(t, e, j, null, a, D);
            }
        }
        for (var z in a) {
          var j = a[z];
          if (D = l[z], a.hasOwnProperty(z) && (j != null || D != null))
            switch (z) {
              case "type":
                i = j;
                break;
              case "name":
                n = j;
                break;
              case "checked":
                w = j;
                break;
              case "defaultChecked":
                M = j;
                break;
              case "value":
                u = j;
                break;
              case "defaultValue":
                r = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(s(137, e));
                break;
              default:
                j !== D && Et(
                  t,
                  e,
                  z,
                  j,
                  a,
                  D
                );
            }
        }
        ju(
          t,
          u,
          r,
          h,
          w,
          M,
          i,
          n
        );
        return;
      case "select":
        j = u = r = z = null;
        for (i in l)
          if (h = l[i], l.hasOwnProperty(i) && h != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                j = h;
              default:
                a.hasOwnProperty(i) || Et(
                  t,
                  e,
                  i,
                  null,
                  a,
                  h
                );
            }
        for (n in a)
          if (i = a[n], h = l[n], a.hasOwnProperty(n) && (i != null || h != null))
            switch (n) {
              case "value":
                z = i;
                break;
              case "defaultValue":
                r = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== h && Et(
                  t,
                  e,
                  n,
                  i,
                  a,
                  h
                );
            }
        e = r, l = u, a = j, z != null ? sa(t, !!l, z, !1) : !!a != !!l && (e != null ? sa(t, !!l, e, !0) : sa(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        j = z = null;
        for (r in l)
          if (n = l[r], l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                Et(t, e, r, null, a, n);
            }
        for (u in a)
          if (n = a[u], i = l[u], a.hasOwnProperty(u) && (n != null || i != null))
            switch (u) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                j = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== i && Et(t, e, u, n, a, i);
            }
        hs(t, z, j);
        return;
      case "option":
        for (var q in l)
          z = l[q], l.hasOwnProperty(q) && z != null && !a.hasOwnProperty(q) && (q === "selected" ? t.selected = !1 : Et(
            t,
            e,
            q,
            null,
            a,
            z
          ));
        for (h in a)
          z = a[h], j = l[h], a.hasOwnProperty(h) && z !== j && (z != null || j != null) && (h === "selected" ? t.selected = z && typeof z != "function" && typeof z != "symbol" : Et(
            t,
            e,
            h,
            z,
            a,
            j
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var I in l)
          z = l[I], l.hasOwnProperty(I) && z != null && !a.hasOwnProperty(I) && Et(t, e, I, null, a, z);
        for (w in a)
          if (z = a[w], j = l[w], a.hasOwnProperty(w) && z !== j && (z != null || j != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(s(137, e));
                break;
              default:
                Et(
                  t,
                  e,
                  w,
                  z,
                  a,
                  j
                );
            }
        return;
      default:
        if (Eu(e)) {
          for (var Nt in l)
            z = l[Nt], l.hasOwnProperty(Nt) && z !== void 0 && !a.hasOwnProperty(Nt) && mo(
              t,
              e,
              Nt,
              void 0,
              a,
              z
            );
          for (M in a)
            z = a[M], j = l[M], !a.hasOwnProperty(M) || z === j || z === void 0 && j === void 0 || mo(
              t,
              e,
              M,
              z,
              a,
              j
            );
          return;
        }
    }
    for (var y in l)
      z = l[y], l.hasOwnProperty(y) && z != null && !a.hasOwnProperty(y) && Et(t, e, y, null, a, z);
    for (D in a)
      z = a[D], j = l[D], !a.hasOwnProperty(D) || z === j || z == null && j == null || Et(t, e, D, z, a, j);
  }
  function vd(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Og() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], i = n.transferSize, u = n.initiatorType, r = n.duration;
        if (i && r && vd(u)) {
          for (u = 0, r = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a], w = h.startTime;
            if (w > r) break;
            var M = h.transferSize, D = h.initiatorType;
            M && vd(D) && (h = h.responseEnd, u += M * (h < r ? 1 : (r - w) / (h - w)));
          }
          if (--a, e += 8 * (i + u) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var go = null, po = null;
  function Ki(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function bd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function yo(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var vo = null;
  function Dg() {
    var t = window.event;
    return t && t.type === "popstate" ? t === vo ? !1 : (vo = t, !0) : (vo = null, !1);
  }
  var Sd = typeof setTimeout == "function" ? setTimeout : void 0, Ug = typeof clearTimeout == "function" ? clearTimeout : void 0, wd = typeof Promise == "function" ? Promise : void 0, Rg = typeof queueMicrotask == "function" ? queueMicrotask : typeof wd < "u" ? function(t) {
    return wd.resolve(null).then(t).catch(Hg);
  } : Sd;
  function Hg(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ml(t) {
    return t === "head";
  }
  function Ad(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Ya(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          On(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, On(l);
          for (var i = l.firstChild; i; ) {
            var u = i.nextSibling, r = i.nodeName;
            i[Fa] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = u;
          }
        } else
          l === "body" && On(t.ownerDocument.body);
      l = n;
    } while (l);
    Ya(e);
  }
  function zd(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function bo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bo(l), Au(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function kg(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Fa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = De(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Bg(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = De(t.nextSibling), t === null)) return null;
    return t;
  }
  function jd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = De(t.nextSibling), t === null)) return null;
    return t;
  }
  function xo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function So(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function qg(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function De(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var wo = null;
  function Td(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return De(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ed(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Nd(t, e, l) {
    switch (e = Ki(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function On(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Au(t);
  }
  var Ue = /* @__PURE__ */ new Map(), Cd = /* @__PURE__ */ new Set();
  function Ji(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ul = B.d;
  B.d = {
    f: Gg,
    r: Yg,
    D: Lg,
    C: Vg,
    L: Xg,
    m: Qg,
    X: Kg,
    S: Zg,
    M: Jg
  };
  function Gg() {
    var t = ul.f(), e = qi();
    return t || e;
  }
  function Yg(t) {
    var e = ua(t);
    e !== null && e.tag === 5 && e.type === "form" ? Qr(e) : ul.r(t);
  }
  var Ba = typeof document > "u" ? null : document;
  function Md(t, e, l) {
    var a = Ba;
    if (a && typeof e == "string" && e) {
      var n = Te(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Cd.has(n) || (Cd.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), le(e, "link", t), Wt(e), a.head.appendChild(e)));
    }
  }
  function Lg(t) {
    ul.D(t), Md("dns-prefetch", t, null);
  }
  function Vg(t, e) {
    ul.C(t, e), Md("preconnect", t, e);
  }
  function Xg(t, e, l) {
    ul.L(t, e, l);
    var a = Ba;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + Te(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Te(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Te(
        l.imageSizes
      ) + '"]')) : n += '[href="' + Te(t) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = qa(t);
          break;
        case "script":
          i = Ga(t);
      }
      Ue.has(i) || (t = E(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ue.set(i, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Dn(i)) || e === "script" && a.querySelector(Un(i)) || (e = a.createElement("link"), le(e, "link", t), Wt(e), a.head.appendChild(e)));
    }
  }
  function Qg(t, e) {
    ul.m(t, e);
    var l = Ba;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Te(a) + '"][href="' + Te(t) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Ga(t);
      }
      if (!Ue.has(i) && (t = E({ rel: "modulepreload", href: t }, e), Ue.set(i, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Un(i)))
              return;
        }
        a = l.createElement("link"), le(a, "link", t), Wt(a), l.head.appendChild(a);
      }
    }
  }
  function Zg(t, e, l) {
    ul.S(t, e, l);
    var a = Ba;
    if (a && t) {
      var n = ca(a).hoistableStyles, i = qa(t);
      e = e || "default";
      var u = n.get(i);
      if (!u) {
        var r = { loading: 0, preload: null };
        if (u = a.querySelector(
          Dn(i)
        ))
          r.loading = 5;
        else {
          t = E(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ue.get(i)) && Ao(t, l);
          var h = u = a.createElement("link");
          Wt(h), le(h, "link", t), h._p = new Promise(function(w, M) {
            h.onload = w, h.onerror = M;
          }), h.addEventListener("load", function() {
            r.loading |= 1;
          }), h.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, Fi(u, e, a);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: r
        }, n.set(i, u);
      }
    }
  }
  function Kg(t, e) {
    ul.X(t, e);
    var l = Ba;
    if (l && t) {
      var a = ca(l).hoistableScripts, n = Ga(t), i = a.get(n);
      i || (i = l.querySelector(Un(n)), i || (t = E({ src: t, async: !0 }, e), (e = Ue.get(n)) && zo(t, e), i = l.createElement("script"), Wt(i), le(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Jg(t, e) {
    ul.M(t, e);
    var l = Ba;
    if (l && t) {
      var a = ca(l).hoistableScripts, n = Ga(t), i = a.get(n);
      i || (i = l.querySelector(Un(n)), i || (t = E({ src: t, async: !0, type: "module" }, e), (e = Ue.get(n)) && zo(t, e), i = l.createElement("script"), Wt(i), le(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function _d(t, e, l, a) {
    var n = (n = lt.current) ? Ji(n) : null;
    if (!n) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = qa(l.href), l = ca(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = qa(l.href);
          var i = ca(
            n
          ).hoistableStyles, u = i.get(t);
          if (u || (n = n.ownerDocument || n, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, u), (i = n.querySelector(
            Dn(t)
          )) && !i._p && (u.instance = i, u.state.loading = 5), Ue.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ue.set(t, l), i || Fg(
            n,
            t,
            l,
            u.state
          ))), e && a === null)
            throw Error(s(528, ""));
          return u;
        }
        if (e && a !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ga(l), l = ca(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function qa(t) {
    return 'href="' + Te(t) + '"';
  }
  function Dn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Od(t) {
    return E({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Fg(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), le(e, "link", l), Wt(e), t.head.appendChild(e));
  }
  function Ga(t) {
    return '[src="' + Te(t) + '"]';
  }
  function Un(t) {
    return "script[async]" + t;
  }
  function Dd(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Te(l.href) + '"]'
          );
          if (a)
            return e.instance = a, Wt(a), a;
          var n = E({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Wt(a), le(a, "style", n), Fi(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = qa(l.href);
          var i = t.querySelector(
            Dn(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Wt(i), i;
          a = Od(l), (n = Ue.get(n)) && Ao(a, n), i = (t.ownerDocument || t).createElement("link"), Wt(i);
          var u = i;
          return u._p = new Promise(function(r, h) {
            u.onload = r, u.onerror = h;
          }), le(i, "link", a), e.state.loading |= 4, Fi(i, l.precedence, t), e.instance = i;
        case "script":
          return i = Ga(l.src), (n = t.querySelector(
            Un(i)
          )) ? (e.instance = n, Wt(n), n) : (a = l, (n = Ue.get(i)) && (a = E({}, l), zo(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Wt(n), le(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Fi(a, l.precedence, t));
    return e.instance;
  }
  function Fi(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, u = 0; u < a.length; u++) {
      var r = a[u];
      if (r.dataset.precedence === e) i = r;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Ao(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function zo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Wi = null;
  function Ud(t, e, l) {
    if (Wi === null) {
      var a = /* @__PURE__ */ new Map(), n = Wi = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Wi, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[Fa] || i[It] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(e) || "";
        u = t + u;
        var r = a.get(u);
        r ? r.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function Rd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Wg(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Hd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function $g(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = qa(a.href), i = e.querySelector(
          Dn(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = $i.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Wt(i);
          return;
        }
        i = e.ownerDocument || e, a = Od(a), (n = Ue.get(n)) && Ao(a, n), i = i.createElement("link"), Wt(i);
        var u = i;
        u._p = new Promise(function(r, h) {
          u.onload = r, u.onerror = h;
        }), le(i, "link", a), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = $i.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var jo = 0;
  function Ig(t, e) {
    return t.stylesheets && t.count === 0 && Pi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Pi(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && jo === 0 && (jo = 62500 * Og());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Pi(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > jo ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function $i() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Pi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ii = null;
  function Pi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ii = /* @__PURE__ */ new Map(), e.forEach(Pg, t), Ii = null, $i.call(t));
  }
  function Pg(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Ii.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ii.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (l.set(u.dataset.precedence, u), a = u);
        }
        a && l.set(null, a);
      }
      n = e.instance, u = n.getAttribute("data-precedence"), i = l.get(u) || a, i === a && l.set(null, n), l.set(u, n), this.count++, a = $i.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Rn = {
    $$typeof: ct,
    Provider: null,
    Consumer: null,
    _currentValue: N,
    _currentValue2: N,
    _threadCount: 0
  };
  function t0(t, e, l, a, n, i, u, r, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = bu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bu(0), this.hiddenUpdates = bu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function kd(t, e, l, a, n, i, u, r, h, w, M, D) {
    return t = new t0(
      t,
      e,
      l,
      u,
      h,
      w,
      M,
      D,
      r
    ), e = 1, i === !0 && (e |= 24), i = ve(3, null, null, e), t.current = i, i.stateNode = t, e = ac(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, cc(i), t;
  }
  function Bd(t) {
    return t ? (t = ya, t) : ya;
  }
  function qd(t, e, l, a, n, i) {
    n = Bd(n), a.context === null ? a.context = n : a.pendingContext = n, a = bl(e), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = xl(t, a, e), l !== null && (de(l, t, e), hn(l, t, e));
  }
  function Gd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function To(t, e) {
    Gd(t, e), (t = t.alternate) && Gd(t, e);
  }
  function Yd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Vl(t, 67108864);
      e !== null && de(e, t, 67108864), To(t, 67108864);
    }
  }
  function Ld(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ae();
      e = xu(e);
      var l = Vl(t, e);
      l !== null && de(l, t, e), To(t, e);
    }
  }
  var tu = !0;
  function e0(t, e, l, a) {
    var n = T.T;
    T.T = null;
    var i = B.p;
    try {
      B.p = 2, Eo(t, e, l, a);
    } finally {
      B.p = i, T.T = n;
    }
  }
  function l0(t, e, l, a) {
    var n = T.T;
    T.T = null;
    var i = B.p;
    try {
      B.p = 8, Eo(t, e, l, a);
    } finally {
      B.p = i, T.T = n;
    }
  }
  function Eo(t, e, l, a) {
    if (tu) {
      var n = No(a);
      if (n === null)
        ho(
          t,
          e,
          a,
          eu,
          l
        ), Xd(t, a);
      else if (n0(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Xd(t, a), e & 4 && -1 < a0.indexOf(t)) {
        for (; n !== null; ) {
          var i = ua(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = Bl(i.pendingLanes);
                  if (u !== 0) {
                    var r = i;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; u; ) {
                      var h = 1 << 31 - pe(u);
                      r.entanglements[1] |= h, u &= ~h;
                    }
                    Ye(i), (At & 6) === 0 && (ki = me() + 500, Cn(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = Vl(i, 2), r !== null && de(r, i, 2), qi(), To(i, 2);
            }
          if (i = No(a), i === null && ho(
            t,
            e,
            a,
            eu,
            l
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        ho(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function No(t) {
    return t = Cu(t), Co(t);
  }
  var eu = null;
  function Co(t) {
    if (eu = null, t = ia(t), t !== null) {
      var e = b(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = S(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = _(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return eu = t, null;
  }
  function Vd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Lh()) {
          case Wo:
            return 2;
          case $o:
            return 8;
          case Xn:
          case Vh:
            return 32;
          case Io:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mo = !1, _l = null, Ol = null, Dl = null, Hn = /* @__PURE__ */ new Map(), kn = /* @__PURE__ */ new Map(), Ul = [], a0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Xd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        _l = null;
        break;
      case "dragenter":
      case "dragleave":
        Ol = null;
        break;
      case "mouseover":
      case "mouseout":
        Dl = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kn.delete(e.pointerId);
    }
  }
  function Bn(t, e, l, a, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = ua(e), e !== null && Yd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function n0(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return _l = Bn(
          _l,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Ol = Bn(
          Ol,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Dl = Bn(
          Dl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Hn.set(
          i,
          Bn(
            Hn.get(i) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, kn.set(
          i,
          Bn(
            kn.get(i) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Qd(t) {
    var e = ia(t.target);
    if (e !== null) {
      var l = b(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = S(l), e !== null) {
            t.blockedOn = e, ns(t.priority, function() {
              Ld(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = _(l), e !== null) {
            t.blockedOn = e, ns(t.priority, function() {
              Ld(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function lu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = No(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Nu = a, l.target.dispatchEvent(a), Nu = null;
      } else
        return e = ua(l), e !== null && Yd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Zd(t, e, l) {
    lu(t) && l.delete(e);
  }
  function i0() {
    Mo = !1, _l !== null && lu(_l) && (_l = null), Ol !== null && lu(Ol) && (Ol = null), Dl !== null && lu(Dl) && (Dl = null), Hn.forEach(Zd), kn.forEach(Zd);
  }
  function au(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Mo || (Mo = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      i0
    )));
  }
  var nu = null;
  function Kd(t) {
    nu !== t && (nu = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        nu === t && (nu = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (Co(a || l) === null)
              continue;
            break;
          }
          var i = ua(l);
          i !== null && (t.splice(e, 3), e -= 3, Ec(
            i,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Ya(t) {
    function e(h) {
      return au(h, t);
    }
    _l !== null && au(_l, t), Ol !== null && au(Ol, t), Dl !== null && au(Dl, t), Hn.forEach(e), kn.forEach(e);
    for (var l = 0; l < Ul.length; l++) {
      var a = Ul[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ul.length && (l = Ul[0], l.blockedOn === null); )
      Qd(l), l.blockedOn === null && Ul.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], i = l[a + 1], u = n[ue] || null;
        if (typeof i == "function")
          u || Kd(l);
        else if (u) {
          var r = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, u = i[ue] || null)
              r = u.formAction;
            else if (Co(n) !== null) continue;
          } else r = u.action;
          typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3), a -= 3), Kd(l);
        }
      }
  }
  function Jd() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(u) {
            return n = u;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function _o(t) {
    this._internalRoot = t;
  }
  iu.prototype.render = _o.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(s(409));
    var l = e.current, a = Ae();
    qd(l, a, t, e, null, null);
  }, iu.prototype.unmount = _o.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      qd(t.current, 2, null, t, null, null), qi(), e[na] = null;
    }
  };
  function iu(t) {
    this._internalRoot = t;
  }
  iu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = as();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ul.length && e !== 0 && e < Ul[l].priority; l++) ;
      Ul.splice(l, 0, t), l === 0 && Qd(t);
    }
  };
  var Fd = d.version;
  if (Fd !== "19.2.3")
    throw Error(
      s(
        527,
        Fd,
        "19.2.3"
      )
    );
  B.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = v(e), t = t !== null ? R(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var u0 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uu.isDisabled && uu.supportsFiber)
      try {
        Za = uu.inject(
          u0
        ), ge = uu;
      } catch {
      }
  }
  return Gn.createRoot = function(t, e) {
    if (!p(t)) throw Error(s(299));
    var l = !1, a = "", n = ef, i = lf, u = af;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (u = e.onRecoverableError)), e = kd(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      i,
      u,
      Jd
    ), t[na] = e.current, fo(t), new _o(e);
  }, Gn.hydrateRoot = function(t, e, l) {
    if (!p(t)) throw Error(s(299));
    var a = !1, n = "", i = ef, u = lf, r = af, h = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), e = kd(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      h,
      i,
      u,
      r,
      Jd
    ), e.context = Bd(null), l = e.current, a = Ae(), a = xu(a), n = bl(a), n.callback = null, xl(l, n, a), l = a, e.current.lanes = l, Ja(e, l), Ye(e), t[na] = e.current, fo(t), new iu(e);
  }, Gn.version = "19.2.3", Gn;
}
var ih;
function y0() {
  if (ih) return Uo.exports;
  ih = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
  }
  return c(), Uo.exports = p0(), Uo.exports;
}
var v0 = y0();
const uh = (c) => {
  let d;
  const f = /* @__PURE__ */ new Set(), s = (v, R) => {
    const E = typeof v == "function" ? v(d) : v;
    if (!Object.is(E, d)) {
      const k = d;
      d = R ?? (typeof E != "object" || E === null) ? E : Object.assign({}, d, E), f.forEach((G) => G(d, k));
    }
  }, p = () => d, _ = { setState: s, getState: p, getInitialState: () => A, subscribe: (v) => (f.add(v), () => f.delete(v)) }, A = d = c(s, p, _);
  return _;
}, b0 = ((c) => c ? uh(c) : uh), x0 = (c) => c;
function S0(c, d = x0) {
  const f = Ln.useSyncExternalStore(
    c.subscribe,
    Ln.useCallback(() => d(c.getState()), [c, d]),
    Ln.useCallback(() => d(c.getInitialState()), [c, d])
  );
  return Ln.useDebugValue(f), f;
}
const ch = (c) => {
  const d = b0(c), f = (s) => S0(d, s);
  return Object.assign(f, d), f;
}, w0 = ((c) => c ? ch(c) : ch), xh = "atlisoChatThreads", Lo = "atlisoChatActiveThread", oh = "atlisoChatSessionId";
function Vn(c = "id") {
  try {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
      return `${c}-${crypto.randomUUID()}`;
  } catch {
  }
  return `${c}-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function sh(c = !1) {
  try {
    if (!c) {
      const f = localStorage.getItem(oh);
      if (f) return f;
    }
    const d = Vn("session");
    return localStorage.setItem(oh, d), d;
  } catch {
    return Vn("session");
  }
}
function A0() {
  try {
    const c = localStorage.getItem(xh);
    if (!c) return [];
    const d = JSON.parse(c);
    return Array.isArray(d) ? d.map((f) => ({
      id: f.id || Vn("thread"),
      createdAt: f.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: f.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
      unread: f.unread || !1,
      unreadCount: f.unreadCount || 0,
      ended: f.ended || !1,
      feedbackRating: f.feedbackRating,
      handoff_status: f.handoff_status || "none",
      messages: Array.isArray(f.messages) ? f.messages : []
    })) : [];
  } catch (c) {
    return console.warn("[AtlisoChatWidget] Failed to load threads:", c), [];
  }
}
function Le(c) {
  try {
    localStorage.setItem(xh, JSON.stringify(c));
  } catch (d) {
    console.warn("[AtlisoChatWidget] Failed to save threads:", d);
  }
}
function z0() {
  try {
    return localStorage.getItem(Lo);
  } catch {
    return null;
  }
}
function Bo(c) {
  try {
    c ? localStorage.setItem(Lo, c) : localStorage.removeItem(Lo);
  } catch (d) {
    console.warn("[AtlisoChatWidget] Failed to save active thread ID:", d);
  }
}
function rh() {
  const c = (/* @__PURE__ */ new Date()).toISOString();
  return {
    id: Vn("thread"),
    createdAt: c,
    updatedAt: c,
    unread: !1,
    unreadCount: 0,
    ended: !1,
    handoff_status: "none",
    messages: []
  };
}
function qo(c, d, f = "text", s) {
  return {
    id: Vn("msg"),
    role: c,
    content: d,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    type: f,
    ...s
  };
}
const aa = {
  gradient: {
    color1: "#0ea5e9",
    color2: "#14b8a6",
    color3: "#0d9488",
    color4: "#a7f3d0"
  },
  avatars: [],
  logo: null,
  supportLogo: null,
  webhookUrl: "https://atliso-backend.onrender.com/webhook/chatbot"
};
async function j0(c, d) {
  try {
    const s = `${d.replace(/\/$/, "")}/api/widget/config/${c}`;
    console.log("[AtlisoChatWidget] Fetching widget config from:", s);
    const p = {
      Accept: "application/json"
    };
    s.includes("ngrok") && (p["ngrok-skip-browser-warning"] = "true");
    const b = await fetch(s, {
      method: "GET",
      headers: p,
      mode: "cors"
    });
    if (!b.ok)
      return b.status === 404 ? console.warn(`[AtlisoChatWidget] Organization not found: ${c}`) : console.warn(`[AtlisoChatWidget] API returned ${b.status}`), null;
    const S = await b.json();
    console.log("[AtlisoChatWidget] Received widget config:", S);
    const { mapConfigToCustomization: _ } = await import("./configMapper-CWcWTKVU.js");
    return _(S, aa.webhookUrl);
  } catch (f) {
    return console.warn("[AtlisoChatWidget] Failed to fetch widget config:", f), null;
  }
}
async function Sh(c, d, f, s, p) {
  const b = {
    message: d,
    messageType: p?.messageType,
    sessionId: f,
    sessionKey: f,
    conversationHistory: s,
    attachment: p?.attachment,
    gif: p?.gif,
    audio: p?.audio,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
  try {
    const S = {
      "Content-Type": "application/json"
    };
    c.includes("ngrok") && (S["ngrok-skip-browser-warning"] = "true");
    const _ = await fetch(c, {
      method: "POST",
      headers: S,
      body: JSON.stringify(b)
    }), A = _.headers.get("content-type") || "", v = await _.text();
    let R = v;
    if (A.includes("application/json") && v.trim().length)
      try {
        R = JSON.parse(v);
      } catch {
        console.warn("[AtlisoChatWidget] Failed to parse JSON response");
      }
    if (!_.ok)
      throw new Error(`Unexpected status ${_.status}`);
    const E = R?.handoffStatus || "none", k = R?.endConversation || !1;
    if (R && typeof R == "object" && "output" in R && R.output === "")
      return { reply: "", handoffStatus: E, endConversation: k };
    const G = ru(R);
    return { reply: G !== null ? G : "I received your message and will get back to you shortly!", handoffStatus: E, endConversation: k };
  } catch (S) {
    throw console.error("[AtlisoChatWidget] Error sending message:", S), S;
  }
}
function ru(c, d = /* @__PURE__ */ new Set()) {
  if (c == null) return null;
  if (typeof c == "string") {
    const p = c.trim();
    return p.length ? p : null;
  }
  if (typeof c == "number") return c.toString();
  if (typeof c != "object" || d.has(c)) return null;
  d.add(c);
  const f = c, s = [
    "reply",
    "response",
    "result",
    "output",
    "text",
    "answer",
    "agentOutput",
    "agent_output",
    "aiReply",
    "ai_reply",
    "message",
    "content",
    "body"
  ];
  for (const p of s)
    if (p in f) {
      const b = ru(f[p], d);
      if (b) return b;
    }
  if (Array.isArray(c))
    for (const p of c) {
      const b = ru(p, d);
      if (b) return b;
    }
  else
    for (const p of Object.values(f)) {
      const b = ru(p, d);
      if (b) return b;
    }
  return null;
}
const T0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_CUSTOMIZATION: aa,
  fetchWidgetConfig: j0,
  sendMessageToWebhook: Sh
}, Symbol.toStringTag, { value: "Module" }));
async function E0() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)(), d = c.createOscillator(), f = c.createGain();
    d.connect(f), f.connect(c.destination), d.frequency.value = 800, d.type = "sine", f.gain.setValueAtTime(0.3, c.currentTime), f.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.3), d.start(c.currentTime), d.stop(c.currentTime + 0.3), setTimeout(() => {
      d.disconnect(), f.disconnect();
    }, 500);
  } catch (c) {
    console.warn("[AtlisoChatWidget] Could not play notification sound:", c);
  }
}
function N0(c) {
  if (!c) return "0 B";
  const d = ["B", "KB", "MB", "GB"], f = Math.min(d.length - 1, Math.floor(Math.log(c) / Math.log(1024))), s = c / Math.pow(1024, f);
  return `${s.toFixed(s >= 10 || f === 0 ? 0 : 1)} ${d[f]}`;
}
const ze = w0((c, d) => ({
  // Initial state
  isOpen: !1,
  isExpanded: !1,
  currentView: "home",
  threads: [],
  activeThreadId: null,
  sessionId: "",
  isTyping: !1,
  unreadCount: 0,
  hasInteracted: !1,
  showToast: !1,
  toastMessage: "",
  customization: {
    logo: "https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419595/Group_48_tm326o.png",
    supportLogo: "https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg",
    avatars: [],
    gradient: {
      color1: "#0B5FFF",
      color2: "#2F4BFF",
      color3: "#6D28D9",
      color4: "#7C3AED"
    }
  },
  webhookUrl: "",
  pollingInterval: null,
  // Widget actions
  setIsOpen: (f) => {
    if (c({ isOpen: f }), f) {
      c({ hasInteracted: !0, showToast: !1 }), localStorage.setItem("atliso_has_interacted", "true");
      const { threads: s, activeThreadId: p } = d();
      if (p) {
        const b = s.map(
          (S) => S.id === p ? { ...S, unread: !1, unreadCount: 0 } : S
        );
        c({ threads: b }), Le(b);
      }
    }
  },
  toggleOpen: () => {
    const { isOpen: f, setIsOpen: s } = d();
    s(!f);
  },
  setIsExpanded: (f) => c({ isExpanded: f }),
  toggleExpanded: () => c((f) => ({ isExpanded: !f.isExpanded })),
  setCurrentView: (f) => {
    c(f !== "chat" ? { currentView: f, isExpanded: !1 } : { currentView: f });
  },
  setShowToast: (f) => c({ showToast: f }),
  setToastMessage: (f) => c({ toastMessage: f }),
  markAsInteracted: () => {
    c({ hasInteracted: !0 }), localStorage.setItem("atliso_has_interacted", "true");
  },
  // Thread actions
  setActiveThread: (f) => {
    const { threads: s } = d();
    if (s.find((b) => b.id === f)) {
      const b = s.map(
        (S) => S.id === f ? { ...S, unread: !1, unreadCount: 0 } : S
      );
      c({ activeThreadId: f, threads: b, currentView: "chat" }), Bo(f), Le(b);
    }
  },
  startNewConversation: () => {
    const { threads: f, customization: s } = d(), p = sh(!0), b = rh(), S = [b, ...f];
    c({
      sessionId: p,
      // Update session ID in store
      threads: S,
      activeThreadId: b.id,
      currentView: "chat"
    }), Le(S), Bo(b.id), d().stopPolling();
    const _ = s?.welcomeMessage || "Hello! How can I help you today?";
    d().addMessage("bot", _);
  },
  submitFeedback: (f) => {
    const { threads: s, activeThreadId: p, addMessage: b } = d();
    if (!p) return;
    const S = s.map(
      (_) => _.id === p ? { ..._, feedbackRating: f } : _
    );
    c({ threads: S }), Le(S), b("bot", `Thank you for your feedback! You rated this conversation ${f} star${f !== 1 ? "s" : ""}.`), setTimeout(() => {
      c({ currentView: "home" });
    }, 3e3);
  },
  // Message actions
  addMessage: (f, s, p = {}) => {
    const { threads: b, activeThreadId: S, isOpen: _, currentView: A } = d();
    if (!S) return;
    const v = qo(f, s, p.type || "text", p), R = (/* @__PURE__ */ new Date()).toISOString();
    if (c((E) => {
      const { threads: k, activeThreadId: G, isOpen: et, currentView: Y } = E;
      if (!G) return E;
      const K = k.map((X) => {
        if (X.id !== G) return X;
        const ct = f === "bot" && !(et && Y === "chat") ? X.unreadCount + 1 : X.unreadCount;
        return {
          ...X,
          messages: [...X.messages, v],
          updatedAt: R,
          unread: ct > 0,
          unreadCount: ct
        };
      });
      return K.sort(
        (X, dt) => new Date(dt.updatedAt).getTime() - new Date(X.updatedAt).getTime()
      ), Le(K), { threads: K };
    }), f === "bot" && (E0(), !_)) {
      const E = s.length > 60 ? s.substring(0, 60) + "..." : s;
      c({ showToast: !0, toastMessage: E });
    }
  },
  setHandoffStatus: (f) => {
    const { threads: s, activeThreadId: p } = d();
    if (!p) return;
    const b = s.map((S) => S.id !== p ? S : {
      ...S,
      handoff_status: f,
      ended: f === "ended" || f === "none_archived" ? !0 : S.ended
    });
    c({ threads: b }), Le(b), f === "waiting" || f === "connected" ? d().startPolling() : b.some(
      (_) => _.handoff_status === "waiting" || _.handoff_status === "connected"
    ) || d().stopPolling();
  },
  sendMessage: async (f, s = {}) => {
    const { webhookUrl: p, sessionId: b, addMessage: S, getActiveThread: _ } = d();
    S("user", f, {
      type: s.type || "text",
      attachment: s.attachment,
      gif: s.gif,
      audio: s.audio,
      quickReplies: s.quickReplies
    }), _()?.is_human_mode || c({ isTyping: !0 });
    try {
      const R = _(), E = R?.messages || [], { reply: k, handoffStatus: G, endConversation: et } = await Sh(
        p,
        f,
        b,
        E,
        {
          messageType: s.type || "text",
          attachment: s.attachment,
          gif: s.gif,
          audio: s.audio
        }
      );
      G && R && R.handoff_status !== G && (console.log(`[ChatStore] Instant sync handoff_status: ${G}`), d().setHandoffStatus(G)), k && k.trim() && S("bot", k), et && (console.log("[ChatStore] Conversation marked as ended by backend"), d().setHandoffStatus("none"));
    } catch (R) {
      console.error("[ChatStore] Send message error:", R), S("bot", "I'm sorry, I'm having trouble connecting to the server. Please try again later.");
    } finally {
      c({ isTyping: !1 });
    }
  },
  syncHistory: async () => {
    const { webhookUrl: f, sessionId: s, activeThreadId: p, threads: b } = d();
    if (!p) {
      console.log("[ChatStore] syncHistory: No active thread, skipping");
      return;
    }
    if (!f) {
      console.log("[ChatStore] syncHistory: No webhook URL, skipping");
      return;
    }
    console.log(`[ChatStore] syncHistory running for session ${s}`);
    try {
      const S = f.split("/webhook/")[0];
      console.log(`[ChatStore] syncHistory: Fetching status from ${S}/api/v1/sessions/${s}/status`);
      const _ = await fetch(`${S}/api/v1/sessions/${s}/status`);
      if (_.ok) {
        const E = (await _.json()).handoff_status || "none", k = b.find((G) => G.id === p);
        console.log(`[ChatStore] syncHistory: Backend status = ${E}, Local = ${k?.handoff_status}`), k && (E === "none_archived" && k.handoff_status !== "none_archived" && !k.ended ? (console.log("[ChatStore] Conversation ended remotely. Triggering feedback."), d().setHandoffStatus("none_archived")) : E !== "none_archived" && k.handoff_status !== E && (console.log(`[ChatStore] Polling: status changed ${k.handoff_status} -> ${E}`), d().setHandoffStatus(E)));
      } else
        console.warn(`[ChatStore] syncHistory: Status fetch failed with ${_.status}`);
      const A = `${S}/api/v1/sessions/${s}/history`, v = await fetch(A);
      if (v.ok) {
        const R = await v.json(), { threads: E } = d(), k = E.find((Y) => Y.id === p);
        if (!k) return;
        const G = new Set(k.messages.map((Y) => `${Y.role}:${Y.content.trim()}`)), et = R.filter((Y) => {
          let K = Y.role === "assistant" ? "bot" : Y.role === "human" ? "human" : "user";
          return Y.content?.includes("[CONVERSATION_ENDED]") ? !1 : !G.has(`${K}:${Y.content.trim()}`);
        });
        if (et.length > 0) {
          console.log(`[ChatStore] Syncing ${et.length} new messages.`);
          const Y = et.map((X) => {
            const dt = X.role === "assistant" ? "bot" : X.role === "human" ? "human" : "user";
            return qo(dt, X.content);
          }), K = E.map(
            (X) => X.id === p ? {
              ...X,
              messages: [...X.messages, ...Y],
              updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
              unread: !d().isOpen,
              unreadCount: d().isOpen ? 0 : X.unreadCount + Y.length
            } : X
          );
          if (c({ threads: K }), Le(K), !d().isOpen) {
            const X = Y[Y.length - 1];
            c({ showToast: !0, toastMessage: X.content });
          }
        }
      }
    } catch (S) {
      console.warn("[ChatStore] Failed to sync history:", S);
    }
  },
  startPolling: () => {
    const { pollingInterval: f } = d();
    if (f) return;
    console.log("[ChatStore] Starting human mode polling...");
    const s = window.setInterval(() => {
      d().syncHistory();
    }, 5e3);
    c({ pollingInterval: s });
  },
  stopPolling: () => {
    const { pollingInterval: f } = d();
    f && (clearInterval(f), c({ pollingInterval: null }));
  },
  // Customization
  setCustomization: (f) => c({ customization: f }),
  setWebhookUrl: (f) => c({ webhookUrl: f }),
  // Computed
  getActiveThread: () => {
    const { threads: f, activeThreadId: s } = d();
    return f.find((p) => p.id === s) || null;
  },
  getTotalUnreadCount: () => {
    const { threads: f } = d();
    return f.reduce((s, p) => s + p.unreadCount, 0);
  },
  // Initialize
  initialize: (f) => {
    const {
      organizationId: s = "default"
      // Allow overriding webhookUrl here if needed
    } = f || {}, p = sh();
    let b = A0();
    (async () => {
      try {
        const { webhookUrl: E, threads: k, activeThreadId: G } = d();
        if (!E) return;
        const et = E.split("/webhook/")[0], Y = await fetch(`${et}/api/v1/config/${s}`);
        if (Y.ok) {
          const K = await Y.json(), X = {
            botName: K.botName,
            welcomeMessage: K.welcomeMessage,
            primaryColor: K.primaryColor,
            logo: K.logoUrl,
            supportLogo: K.supportLogoUrl,
            avatars: K.avatarUrl ? [K.avatarUrl] : [],
            tagline: K.tagline,
            webhookUrl: d().webhookUrl
          };
          if (c((dt) => ({
            customization: { ...dt.customization, ...X }
          })), G && k.length > 0) {
            const dt = k.find((ct) => ct.id === G);
            if (dt && dt.messages.length === 1 && dt.messages[0].role === "bot") {
              const ct = k.map((it) => {
                if (it.id === G) {
                  const gt = [...it.messages];
                  return gt[0] = {
                    ...gt[0],
                    content: X.welcomeMessage || gt[0].content
                  }, { ...it, messages: gt };
                }
                return it;
              });
              c({ threads: ct }), Le(ct);
            }
          }
        }
      } catch (E) {
        console.error("Failed to fetch config:", E);
      }
    })();
    const _ = localStorage.getItem("atliso_has_interacted") === "true";
    b.length === 0 && (b = [rh()], Le(b));
    const A = b[0];
    if (A && A.messages.length === 0) {
      const { customization: E } = d(), k = E?.welcomeMessage || "Hello! How can I help you today?", G = qo("bot", k);
      G.quickReplies = [
        { label: "Book a Meeting", value: "I want to book a meeting" },
        { label: "Talk to Sales", value: "I want to talk to sales" },
        { label: "Pricing", value: "Tell me about pricing" }
      ], A.messages = [G], A.updatedAt = G.timestamp, Le(b);
    }
    let v = z0();
    (!v || !b.some((E) => E.id === v)) && (v = b[0].id, Bo(v)), c({
      sessionId: p,
      threads: b,
      activeThreadId: v,
      hasInteracted: _
    }), (async () => {
      const { webhookUrl: E, sessionId: k } = d();
      if (!(!E || !k))
        try {
          const G = E.split("/webhook/")[0], et = await fetch(`${G}/api/v1/sessions/${k}/status`);
          if (et.ok && (await et.json()).is_human_mode) {
            console.log(`[ChatStore] Session ${k} is in Human Mode. Resuming polling.`);
            const { threads: K, activeThreadId: X } = d();
            if (X) {
              const dt = K.map(
                (ct) => ct.id === X ? { ...ct, is_human_mode: !0 } : ct
              );
              c({ threads: dt }), d().startPolling();
            }
          }
        } catch (G) {
          console.warn("[ChatStore] Failed to check session status:", G);
        }
    })(), _ || setTimeout(() => {
      c({
        showToast: !0,
        toastMessage: "👋 Hey there! Need help? We're here for you."
      });
    }, 2e3);
  }
})), C0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useChatStore: ze
}, Symbol.toStringTag, { value: "Module" }));
function wh(c) {
  var d, f, s = "";
  if (typeof c == "string" || typeof c == "number") s += c;
  else if (typeof c == "object") if (Array.isArray(c)) {
    var p = c.length;
    for (d = 0; d < p; d++) c[d] && (f = wh(c[d])) && (s && (s += " "), s += f);
  } else for (f in c) c[f] && (s && (s += " "), s += f);
  return s;
}
function M0() {
  for (var c, d, f = 0, s = "", p = arguments.length; f < p; f++) (c = arguments[f]) && (d = wh(c)) && (s && (s += " "), s += d);
  return s;
}
const _0 = (c, d) => {
  const f = new Array(c.length + d.length);
  for (let s = 0; s < c.length; s++)
    f[s] = c[s];
  for (let s = 0; s < d.length; s++)
    f[c.length + s] = d[s];
  return f;
}, O0 = (c, d) => ({
  classGroupId: c,
  validator: d
}), Ah = (c = /* @__PURE__ */ new Map(), d = null, f) => ({
  nextPart: c,
  validators: d,
  classGroupId: f
}), fu = "-", fh = [], D0 = "arbitrary..", U0 = (c) => {
  const d = H0(c), {
    conflictingClassGroups: f,
    conflictingClassGroupModifiers: s
  } = c;
  return {
    getClassGroupId: (S) => {
      if (S.startsWith("[") && S.endsWith("]"))
        return R0(S);
      const _ = S.split(fu), A = _[0] === "" && _.length > 1 ? 1 : 0;
      return zh(_, A, d);
    },
    getConflictingClassGroupIds: (S, _) => {
      if (_) {
        const A = s[S], v = f[S];
        return A ? v ? _0(v, A) : A : v || fh;
      }
      return f[S] || fh;
    }
  };
}, zh = (c, d, f) => {
  if (c.length - d === 0)
    return f.classGroupId;
  const p = c[d], b = f.nextPart.get(p);
  if (b) {
    const v = zh(c, d + 1, b);
    if (v) return v;
  }
  const S = f.validators;
  if (S === null)
    return;
  const _ = d === 0 ? c.join(fu) : c.slice(d).join(fu), A = S.length;
  for (let v = 0; v < A; v++) {
    const R = S[v];
    if (R.validator(_))
      return R.classGroupId;
  }
}, R0 = (c) => c.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const d = c.slice(1, -1), f = d.indexOf(":"), s = d.slice(0, f);
  return s ? D0 + s : void 0;
})(), H0 = (c) => {
  const {
    theme: d,
    classGroups: f
  } = c;
  return k0(f, d);
}, k0 = (c, d) => {
  const f = Ah();
  for (const s in c) {
    const p = c[s];
    Qo(p, f, s, d);
  }
  return f;
}, Qo = (c, d, f, s) => {
  const p = c.length;
  for (let b = 0; b < p; b++) {
    const S = c[b];
    B0(S, d, f, s);
  }
}, B0 = (c, d, f, s) => {
  if (typeof c == "string") {
    q0(c, d, f);
    return;
  }
  if (typeof c == "function") {
    G0(c, d, f, s);
    return;
  }
  Y0(c, d, f, s);
}, q0 = (c, d, f) => {
  const s = c === "" ? d : jh(d, c);
  s.classGroupId = f;
}, G0 = (c, d, f, s) => {
  if (L0(c)) {
    Qo(c(s), d, f, s);
    return;
  }
  d.validators === null && (d.validators = []), d.validators.push(O0(f, c));
}, Y0 = (c, d, f, s) => {
  const p = Object.entries(c), b = p.length;
  for (let S = 0; S < b; S++) {
    const [_, A] = p[S];
    Qo(A, jh(d, _), f, s);
  }
}, jh = (c, d) => {
  let f = c;
  const s = d.split(fu), p = s.length;
  for (let b = 0; b < p; b++) {
    const S = s[b];
    let _ = f.nextPart.get(S);
    _ || (_ = Ah(), f.nextPart.set(S, _)), f = _;
  }
  return f;
}, L0 = (c) => "isThemeGetter" in c && c.isThemeGetter === !0, V0 = (c) => {
  if (c < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let d = 0, f = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  const p = (b, S) => {
    f[b] = S, d++, d > c && (d = 0, s = f, f = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(b) {
      let S = f[b];
      if (S !== void 0)
        return S;
      if ((S = s[b]) !== void 0)
        return p(b, S), S;
    },
    set(b, S) {
      b in f ? f[b] = S : p(b, S);
    }
  };
}, Vo = "!", dh = ":", X0 = [], hh = (c, d, f, s, p) => ({
  modifiers: c,
  hasImportantModifier: d,
  baseClassName: f,
  maybePostfixModifierPosition: s,
  isExternal: p
}), Q0 = (c) => {
  const {
    prefix: d,
    experimentalParseClassName: f
  } = c;
  let s = (p) => {
    const b = [];
    let S = 0, _ = 0, A = 0, v;
    const R = p.length;
    for (let Y = 0; Y < R; Y++) {
      const K = p[Y];
      if (S === 0 && _ === 0) {
        if (K === dh) {
          b.push(p.slice(A, Y)), A = Y + 1;
          continue;
        }
        if (K === "/") {
          v = Y;
          continue;
        }
      }
      K === "[" ? S++ : K === "]" ? S-- : K === "(" ? _++ : K === ")" && _--;
    }
    const E = b.length === 0 ? p : p.slice(A);
    let k = E, G = !1;
    E.endsWith(Vo) ? (k = E.slice(0, -1), G = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      E.startsWith(Vo) && (k = E.slice(1), G = !0)
    );
    const et = v && v > A ? v - A : void 0;
    return hh(b, G, k, et);
  };
  if (d) {
    const p = d + dh, b = s;
    s = (S) => S.startsWith(p) ? b(S.slice(p.length)) : hh(X0, !1, S, void 0, !0);
  }
  if (f) {
    const p = s;
    s = (b) => f({
      className: b,
      parseClassName: p
    });
  }
  return s;
}, Z0 = (c) => {
  const d = /* @__PURE__ */ new Map();
  return c.orderSensitiveModifiers.forEach((f, s) => {
    d.set(f, 1e6 + s);
  }), (f) => {
    const s = [];
    let p = [];
    for (let b = 0; b < f.length; b++) {
      const S = f[b], _ = S[0] === "[", A = d.has(S);
      _ || A ? (p.length > 0 && (p.sort(), s.push(...p), p = []), s.push(S)) : p.push(S);
    }
    return p.length > 0 && (p.sort(), s.push(...p)), s;
  };
}, K0 = (c) => ({
  cache: V0(c.cacheSize),
  parseClassName: Q0(c),
  sortModifiers: Z0(c),
  ...U0(c)
}), J0 = /\s+/, F0 = (c, d) => {
  const {
    parseClassName: f,
    getClassGroupId: s,
    getConflictingClassGroupIds: p,
    sortModifiers: b
  } = d, S = [], _ = c.trim().split(J0);
  let A = "";
  for (let v = _.length - 1; v >= 0; v -= 1) {
    const R = _[v], {
      isExternal: E,
      modifiers: k,
      hasImportantModifier: G,
      baseClassName: et,
      maybePostfixModifierPosition: Y
    } = f(R);
    if (E) {
      A = R + (A.length > 0 ? " " + A : A);
      continue;
    }
    let K = !!Y, X = s(K ? et.substring(0, Y) : et);
    if (!X) {
      if (!K) {
        A = R + (A.length > 0 ? " " + A : A);
        continue;
      }
      if (X = s(et), !X) {
        A = R + (A.length > 0 ? " " + A : A);
        continue;
      }
      K = !1;
    }
    const dt = k.length === 0 ? "" : k.length === 1 ? k[0] : b(k).join(":"), ct = G ? dt + Vo : dt, it = ct + X;
    if (S.indexOf(it) > -1)
      continue;
    S.push(it);
    const gt = p(X, K);
    for (let st = 0; st < gt.length; ++st) {
      const tt = gt[st];
      S.push(ct + tt);
    }
    A = R + (A.length > 0 ? " " + A : A);
  }
  return A;
}, W0 = (...c) => {
  let d = 0, f, s, p = "";
  for (; d < c.length; )
    (f = c[d++]) && (s = Th(f)) && (p && (p += " "), p += s);
  return p;
}, Th = (c) => {
  if (typeof c == "string")
    return c;
  let d, f = "";
  for (let s = 0; s < c.length; s++)
    c[s] && (d = Th(c[s])) && (f && (f += " "), f += d);
  return f;
}, $0 = (c, ...d) => {
  let f, s, p, b;
  const S = (A) => {
    const v = d.reduce((R, E) => E(R), c());
    return f = K0(v), s = f.cache.get, p = f.cache.set, b = _, _(A);
  }, _ = (A) => {
    const v = s(A);
    if (v)
      return v;
    const R = F0(A, f);
    return p(A, R), R;
  };
  return b = S, (...A) => b(W0(...A));
}, I0 = [], Jt = (c) => {
  const d = (f) => f[c] || I0;
  return d.isThemeGetter = !0, d;
}, Eh = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Nh = /^\((?:(\w[\w-]*):)?(.+)\)$/i, P0 = /^\d+\/\d+$/, tp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ep = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ap = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, np = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, La = (c) => P0.test(c), ot = (c) => !!c && !Number.isNaN(Number(c)), Hl = (c) => !!c && Number.isInteger(Number(c)), Go = (c) => c.endsWith("%") && ot(c.slice(0, -1)), cl = (c) => tp.test(c), ip = () => !0, up = (c) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ep.test(c) && !lp.test(c)
), Ch = () => !1, cp = (c) => ap.test(c), op = (c) => np.test(c), sp = (c) => !L(c) && !V(c), rp = (c) => Xa(c, Oh, Ch), L = (c) => Eh.test(c), la = (c) => Xa(c, Dh, up), Yo = (c) => Xa(c, gp, ot), mh = (c) => Xa(c, Mh, Ch), fp = (c) => Xa(c, _h, op), cu = (c) => Xa(c, Uh, cp), V = (c) => Nh.test(c), Yn = (c) => Qa(c, Dh), dp = (c) => Qa(c, pp), gh = (c) => Qa(c, Mh), hp = (c) => Qa(c, Oh), mp = (c) => Qa(c, _h), ou = (c) => Qa(c, Uh, !0), Xa = (c, d, f) => {
  const s = Eh.exec(c);
  return s ? s[1] ? d(s[1]) : f(s[2]) : !1;
}, Qa = (c, d, f = !1) => {
  const s = Nh.exec(c);
  return s ? s[1] ? d(s[1]) : f : !1;
}, Mh = (c) => c === "position" || c === "percentage", _h = (c) => c === "image" || c === "url", Oh = (c) => c === "length" || c === "size" || c === "bg-size", Dh = (c) => c === "length", gp = (c) => c === "number", pp = (c) => c === "family-name", Uh = (c) => c === "shadow", yp = () => {
  const c = Jt("color"), d = Jt("font"), f = Jt("text"), s = Jt("font-weight"), p = Jt("tracking"), b = Jt("leading"), S = Jt("breakpoint"), _ = Jt("container"), A = Jt("spacing"), v = Jt("radius"), R = Jt("shadow"), E = Jt("inset-shadow"), k = Jt("text-shadow"), G = Jt("drop-shadow"), et = Jt("blur"), Y = Jt("perspective"), K = Jt("aspect"), X = Jt("ease"), dt = Jt("animate"), ct = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], it = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], gt = () => [...it(), V, L], st = () => ["auto", "hidden", "clip", "visible", "scroll"], tt = () => ["auto", "contain", "none"], Q = () => [V, L, A], Mt = () => [La, "full", "auto", ...Q()], he = () => [Hl, "none", "subgrid", V, L], Ft = () => ["auto", {
    span: ["full", Hl, V, L]
  }, Hl, V, L], Ut = () => [Hl, "auto", V, L], vt = () => ["auto", "min", "max", "fr", V, L], bt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], kt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], T = () => ["auto", ...Q()], B = () => [La, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Q()], N = () => [c, V, L], P = () => [...it(), gh, mh, {
    position: [V, L]
  }], $ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], m = () => ["auto", "cover", "contain", hp, rp, {
    size: [V, L]
  }], C = () => [Go, Yn, la], U = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    v,
    V,
    L
  ], H = () => ["", ot, Yn, la], J = () => ["solid", "dashed", "dotted", "double"], lt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [ot, Go, gh, mh], Rt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    et,
    V,
    L
  ], pt = () => ["none", ot, V, L], ie = () => ["none", ot, V, L], sl = () => [ot, V, L], rl = () => [La, "full", ...Q()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [cl],
      breakpoint: [cl],
      color: [ip],
      container: [cl],
      "drop-shadow": [cl],
      ease: ["in", "out", "in-out"],
      font: [sp],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [cl],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [cl],
      shadow: [cl],
      spacing: ["px", ot],
      text: [cl],
      "text-shadow": [cl],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", La, L, V, K]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ot, L, V, _]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ct()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ct()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: gt()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: st()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": st()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": st()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: tt()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": tt()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": tt()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: Mt()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Mt()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Mt()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Mt()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Mt()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Mt()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Mt()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Mt()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Mt()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Hl, "auto", V, L]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [La, "full", "auto", _, ...Q()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ot, La, "auto", "initial", "none", L]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ot, V, L]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ot, V, L]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Hl, "first", "last", "none", V, L]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": he()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Ft()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Ut()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Ut()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": he()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Ft()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Ut()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Ut()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": vt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": vt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: Q()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Q()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Q()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...bt(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...kt(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...kt()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...bt()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...kt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...kt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": bt()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...kt(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...kt()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Q()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Q()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Q()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Q()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Q()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Q()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Q()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Q()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Q()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: T()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: T()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: T()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: T()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: T()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: T()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: T()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: T()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: T()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": Q()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": Q()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: B()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [_, "screen", ...B()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          _,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...B()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          _,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [S]
          },
          ...B()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...B()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...B()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...B()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", f, Yn, la]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [s, V, Yo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Go, L]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [dp, L, d]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [p, V, L]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ot, "none", V, Yo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          b,
          ...Q()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V, L]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", V, L]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...J(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ot, "from-font", "auto", V, la]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ot, "auto", V, L]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: Q()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V, L]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", V, L]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: P()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: $()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: m()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Hl, V, L],
          radial: ["", V, L],
          conic: [Hl, V, L]
        }, mp, fp]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: C()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: U()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": U()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": U()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": U()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": U()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": U()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": U()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": U()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": U()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": U()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": U()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": U()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": U()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": U()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": U()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: H()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": H()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": H()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": H()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": H()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": H()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": H()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": H()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": H()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": H()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": H()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...J(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...J(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: N()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...J(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ot, V, L]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ot, Yn, la]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: N()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          R,
          ou,
          cu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", E, ou, cu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: H()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: N()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ot, la]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": N()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": H()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": N()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", k, ou, cu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": N()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ot, V, L]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...lt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": lt()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ot]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": W()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": N()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": W()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": N()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": W()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": N()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": W()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": N()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": W()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": N()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": W()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": N()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": W()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": N()
      }],
      "mask-image-radial": [{
        "mask-radial": [V, L]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": W()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": N()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": it()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ot]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": W()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": N()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: P()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: $()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: m()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", V, L]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          V,
          L
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Rt()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ot, V, L]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ot, V, L]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          G,
          ou,
          cu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": N()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ot, V, L]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ot, V, L]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ot, V, L]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ot, V, L]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ot, V, L]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          V,
          L
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Rt()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ot, V, L]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ot, V, L]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ot, V, L]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ot, V, L]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ot, V, L]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ot, V, L]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ot, V, L]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ot, V, L]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": Q()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Q()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Q()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", V, L]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ot, "initial", V, L]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", X, V, L]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ot, V, L]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", dt, V, L]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [Y, V, L]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": gt()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: pt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": pt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": pt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": pt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: sl()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": sl()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": sl()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [V, L, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: gt()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: rl()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": rl()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": rl()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": rl()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: N()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: N()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V, L]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": Q()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Q()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Q()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Q()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Q()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Q()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Q()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Q()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Q()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Q()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Q()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Q()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Q()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Q()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Q()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Q()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Q()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Q()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", V, L]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ot, Yn, la, Yo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, vp = /* @__PURE__ */ $0(yp);
function Lt(...c) {
  return vp(M0(c));
}
function bp() {
  const { isOpen: c, toggleOpen: d, getTotalUnreadCount: f, customization: s } = ze(), p = f(), b = s?.position || "bottom-right", S = () => {
    switch (b) {
      case "bottom-left":
        return "bottom-5 left-5";
      case "top-right":
        return "top-5 right-5";
      case "top-left":
        return "top-5 left-5";
      default:
        return "bottom-5 right-5";
    }
  }, _ = s?.primaryColor || "#000000";
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      onClick: d,
      className: Lt(
        "w-14 h-14 rounded-full border-none cursor-pointer",
        "flex items-center justify-center",
        "transition-all duration-300 ease-out",
        "hover:scale-105 hover:shadow-xl active:scale-95",
        "focus:outline-none focus:ring-4 focus:ring-black/20",
        // keep button anchored within host based on position
        "shadow-lg absolute z-50",
        S()
      ),
      style: { backgroundColor: _ },
      "aria-label": c ? "Close chat" : "Open chat",
      children: [
        c ? /* @__PURE__ */ o.jsx(
          "span",
          {
            className: "material-symbols-outlined text-white",
            style: { fontSize: "28px", lineHeight: 1 },
            children: "expand_more"
          }
        ) : /* @__PURE__ */ o.jsx(
          "img",
          {
            src: "https://res.cloudinary.com/dwjvtgiid/image/upload/v1766321945/image_42_s2rakp.png",
            alt: "Chat",
            style: { width: "42px", height: "42px" }
          }
        ),
        !c && p > 0 && /* @__PURE__ */ o.jsx("span", { className: "absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 border-2 border-white shadow-md", children: p > 99 ? "99+" : p })
      ]
    }
  );
}
function xp() {
  const c = (/* @__PURE__ */ new Date()).getHours();
  return c >= 0 && c < 5 ? "lateNight" : c >= 5 && c < 12 ? "morning" : c >= 12 && c < 17 ? "midday" : c >= 17 && c < 21 ? "evening" : "night";
}
function Sp() {
  switch (xp()) {
    case "morning":
      return { text: "Good Morning", emoji: "👋" };
    case "midday":
      return { text: "Good Afternoon", emoji: "☀️" };
    case "evening":
      return { text: "Good Evening", emoji: "🌅" };
    case "night":
      return { text: "Good Night", emoji: "🌙" };
    case "lateNight":
      return { text: "Hi Night Owl", emoji: "🦉" };
    default:
      return { text: "Hello", emoji: "👋" };
  }
}
function Zo(c) {
  const d = new Date(c), s = (/* @__PURE__ */ new Date()).getTime() - d.getTime(), p = Math.floor(s / 1e3), b = Math.floor(p / 60), S = Math.floor(b / 60), _ = Math.floor(S / 24), A = Math.floor(_ / 30), v = Math.floor(_ / 365);
  return p < 60 ? "Just now" : b < 60 ? `${b} minute${b === 1 ? "" : "s"} ago` : S < 24 ? `${S} hour${S === 1 ? "" : "s"} ago` : _ < 30 ? _ === 1 ? "Yesterday" : `${_} days ago` : A < 12 ? `${A}mo` : `${v}y`;
}
const wp = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ap = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (d, f, s) => s ? s.toUpperCase() : f.toLowerCase()
), ph = (c) => {
  const d = Ap(c);
  return d.charAt(0).toUpperCase() + d.slice(1);
}, Rh = (...c) => c.filter((d, f, s) => !!d && d.trim() !== "" && s.indexOf(d) === f).join(" ").trim(), zp = (c) => {
  for (const d in c)
    if (d.startsWith("aria-") || d === "role" || d === "title")
      return !0;
};
var jp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Tp = xt.forwardRef(
  ({
    color: c = "currentColor",
    size: d = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: s,
    className: p = "",
    children: b,
    iconNode: S,
    ..._
  }, A) => xt.createElement(
    "svg",
    {
      ref: A,
      ...jp,
      width: d,
      height: d,
      stroke: c,
      strokeWidth: s ? Number(f) * 24 / Number(d) : f,
      className: Rh("lucide", p),
      ...!b && !zp(_) && { "aria-hidden": "true" },
      ..._
    },
    [
      ...S.map(([v, R]) => xt.createElement(v, R)),
      ...Array.isArray(b) ? b : [b]
    ]
  )
);
const Ht = (c, d) => {
  const f = xt.forwardRef(
    ({ className: s, ...p }, b) => xt.createElement(Tp, {
      ref: b,
      iconNode: d,
      className: Rh(
        `lucide-${wp(ph(c))}`,
        `lucide-${c}`,
        s
      ),
      ...p
    })
  );
  return f.displayName = ph(c), f;
};
const Ep = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], Np = Ht("arrow-up", Ep);
const Cp = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], Mp = Ht("bot", Cp);
const _p = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Op = Ht("calendar", _p);
const Dp = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], du = Ht("chevron-left", Dp);
const Up = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Va = Ht("chevron-right", Up);
const Rp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Hp = Ht("circle-check", Rp);
const kp = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Hh = Ht("download", kp);
const Bp = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], qp = Ht("ellipsis", Bp);
const Gp = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], su = Ht("external-link", Gp);
const Yp = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Lp = Ht("file-text", Yp);
const Vp = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Xp = Ht("house", Vp);
const Qp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
  ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
  ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
  ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
], Zp = Ht("life-buoy", Qp);
const Kp = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
], Jp = Ht("maximize-2", Kp);
const Fp = [
  [
    "path",
    {
      d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
      key: "1n2ejm"
    }
  ],
  [
    "path",
    {
      d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",
      key: "1qfcsi"
    }
  ]
], Wp = Ht("messages-square", Fp);
const $p = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], kh = Ht("mic", $p);
const Ip = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], Pp = Ht("minimize-2", Ip);
const ty = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], ey = Ht("paperclip", ty);
const ly = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Ko = Ht("search", ly);
const ay = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ny = Ht("settings", ay);
const iy = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], uy = Ht("sparkles", iy);
const cy = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], oy = Ht("star", cy);
const sy = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], ry = Ht("user", sy);
const fy = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ol = Ht("x", fy), yh = [
  { label: "Getting started with Atliso platform", url: "#" },
  { label: "Subscription plan changes and proration", url: "#" },
  { label: "Setting up your Atliso account", url: "#" },
  { label: "Understanding platform limits and usage", url: "#" }
];
function dy() {
  const { customization: c, setCustomization: d, setCurrentView: f, setIsOpen: s, getActiveThread: p, startNewConversation: b } = ze(), [S, _] = xt.useState(!1), [A, v] = xt.useState({
    logo: "",
    supportLogo: "",
    avatars: "",
    color1: "#0B5FFF",
    color2: "#2F4BFF",
    color3: "#6D28D9",
    color4: "#7C3AED"
  }), { text: R, emoji: E } = Sp(), k = c?.avatars || [], G = c?.logo, et = c?.supportLogo, Y = p(), K = Y?.messages[Y.messages.length - 1];
  console.log("HomeView - Logo URL:", G), console.log("HomeView - Customization:", c);
  const X = c?.gradient || {
    color1: "#0B5FFF",
    color2: "#2F4BFF",
    color3: "#6D28D9",
    color4: "#7C3AED"
  }, ct = `linear-gradient(180deg, rgba(243,244,246,0) 0px, rgba(243,244,246,0.92) 360px, #F3F4F6 520px, #ffffff 100%), ${`linear-gradient(135deg, ${X.color1} 0%, ${X.color2} 30%, ${X.color3} 70%, ${X.color4} 100%)`}`, it = 16, gt = "1px solid rgba(15, 23, 42, 0.07)", st = "0 12px 28px rgba(15, 23, 42, 0.09)", tt = (vt) => {
  }, Q = () => {
    v({
      logo: c?.logo || "",
      supportLogo: c?.supportLogo || "",
      avatars: (c?.avatars || []).join(`
`),
      color1: X.color1,
      color2: X.color2,
      color3: X.color3,
      color4: X.color4
    }), _(!0);
  }, Mt = () => {
    window.prompt("Developer access") === "ATLISODEV" && Q();
  }, he = () => {
    const vt = A.avatars.split(/\n|,/g).map((bt) => bt.trim()).filter(Boolean);
    d({
      ...c || {},
      logo: A.logo.trim() ? A.logo.trim() : null,
      supportLogo: A.supportLogo.trim() ? A.supportLogo.trim() : null,
      avatars: vt,
      gradient: {
        color1: A.color1,
        color2: A.color2,
        color3: A.color3,
        color4: A.color4
      }
    }), _(!1);
  }, Ft = () => {
    f("help");
  }, Ut = () => {
    f("messages");
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "flex flex-col min-h-full",
      style: { backgroundImage: ct, backgroundColor: "#F3F4F6", position: "relative" },
      children: [
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "relative text-white shrink-0",
            style: {
              paddingTop: "16px",
              paddingBottom: "54px",
              paddingLeft: "20px",
              paddingRight: "20px"
            },
            children: [
              /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }, children: [
                /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
                  G ? /* @__PURE__ */ o.jsx(
                    "img",
                    {
                      src: G,
                      alt: "Atliso Logo",
                      style: { height: "28px", width: "auto" },
                      onError: (vt) => {
                        console.error("Logo failed to load:", G);
                        const bt = vt.target;
                        bt.style.display = "none";
                      },
                      onLoad: () => {
                        console.log("Logo loaded successfully:", G);
                      }
                    }
                  ) : /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", style: { width: "28px", height: "28px", fill: "white" }, children: /* @__PURE__ */ o.jsx("path", { d: "M12 2L2 22H22L12 2Z" }) }),
                  /* @__PURE__ */ o.jsx("span", { style: { fontWeight: 300, fontSize: "20px", letterSpacing: "-0.02em" }, children: c?.botName || "Atliso" })
                ] }),
                /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [
                  k.length > 0 && /* @__PURE__ */ o.jsx("div", { style: { display: "flex" }, children: k.slice(0, 3).map((vt, bt) => /* @__PURE__ */ o.jsx(
                    "img",
                    {
                      src: vt,
                      alt: `Agent ${bt + 1}`,
                      style: {
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.28)",
                        objectFit: "cover",
                        marginLeft: bt > 0 ? "-10px" : "0"
                      }
                    },
                    bt
                  )) }),
                  /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      onClick: () => s(!1),
                      style: {
                        padding: "6px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "50%"
                      },
                      children: /* @__PURE__ */ o.jsx(ol, { style: { width: "22px", height: "22px", color: "rgba(255,255,255,0.9)" } })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsxs("h2", { style: { fontSize: "22px", fontWeight: 500, opacity: 0.6 }, children: [
                  R,
                  " ",
                  E
                ] }),
                /* @__PURE__ */ o.jsx("h1", { style: { marginTop: "-8px", fontSize: "28px", fontWeight: 500, lineHeight: 1.2 }, children: c?.welcomeMessage || "How can we help?" }),
                c?.tagline && /* @__PURE__ */ o.jsx("p", { style: { marginTop: "8px", fontSize: "15px", fontWeight: 400, opacity: 0.8 }, children: c.tagline })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            style: {
              position: "relative",
              marginTop: "-28px",
              padding: "0 16px 16px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            },
            children: [
              K && /* @__PURE__ */ o.jsxs(
                "button",
                {
                  onClick: Ut,
                  style: {
                    width: "100%",
                    background: "white",
                    borderRadius: it,
                    border: gt,
                    boxShadow: st,
                    padding: "14px 16px",
                    textAlign: "left",
                    outline: "none",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ o.jsx("h3", { style: { fontWeight: 700, fontSize: "15px", color: "#0F172A", marginBottom: "12px" }, children: "Recent message" }),
                    /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
                      /* @__PURE__ */ o.jsx("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        overflow: "hidden"
                      }, children: et ? /* @__PURE__ */ o.jsx("img", { src: et, alt: "Support", style: { width: "36px", height: "36px", objectFit: "contain" } }) : /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", style: { width: "28px", height: "28px", fill: "white" }, children: /* @__PURE__ */ o.jsx("path", { d: "M12 2L2 22H22L12 2Z" }) }) }),
                      /* @__PURE__ */ o.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                        /* @__PURE__ */ o.jsx("p", { style: {
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#0F172A",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        }, children: K.content }),
                        /* @__PURE__ */ o.jsxs("p", { style: { fontSize: "12px", color: "#64748B", marginTop: "3px" }, children: [
                          "Support AI Assistant • ",
                          Zo(K.timestamp)
                        ] })
                      ] }),
                      /* @__PURE__ */ o.jsx(Va, { style: { width: "18px", height: "18px", color: "#2563EB", flexShrink: 0 } })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  onClick: () => f("news"),
                  style: {
                    width: "100%",
                    background: "white",
                    borderRadius: it,
                    border: gt,
                    boxShadow: st,
                    padding: "14px 16px",
                    textAlign: "left",
                    outline: "none",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ o.jsxs("div", { style: {
                      width: "100%",
                      height: "160px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: "12px",
                      position: "relative"
                    }, children: [
                      /* @__PURE__ */ o.jsx(
                        "img",
                        {
                          src: "https://res.cloudinary.com/dwjvtgiid/image/upload/v1766316650/alexandre-pellaes-6vAjp0pscX0-unsplash_iaw9fr.jpg",
                          alt: "Recent news",
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }
                        }
                      ),
                      /* @__PURE__ */ o.jsx("div", { style: {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                        padding: "8px 12px"
                      }, children: /* @__PURE__ */ o.jsx("p", { style: {
                        color: "white",
                        fontSize: "12px",
                        fontWeight: 600,
                        margin: 0
                      }, children: "Latest Updates" }) })
                    ] }),
                    /* @__PURE__ */ o.jsxs("div", { style: { textAlign: "left" }, children: [
                      /* @__PURE__ */ o.jsx("h4", { style: {
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#0F172A",
                        marginBottom: "6px"
                      }, children: "A new era of Insights has arrived" }),
                      /* @__PURE__ */ o.jsx("p", { style: {
                        fontSize: "12px",
                        color: "#64748B",
                        lineHeight: 1.4,
                        margin: "0 0 6px 0"
                      }, children: '"We announced Fin Insights, a groundbreaking, AI-powered product that gives you complete visibility into every customer conversation, with AI-powered tools and suggestions that help you monitor, analyze, and instantly optimize your customer service quality."' }),
                      /* @__PURE__ */ o.jsx("p", { style: {
                        fontSize: "12px",
                        color: "#2563EB",
                        fontWeight: 500,
                        margin: 0
                      }, children: "Watch the event on-demand." })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsxs("div", { style: {
                background: "white",
                borderRadius: it,
                border: gt,
                boxShadow: st,
                overflow: "hidden"
              }, children: [
                /* @__PURE__ */ o.jsx("div", { style: { padding: "14px 16px 10px 16px" }, children: /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: Ft,
                    style: {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#F1F5F9",
                      borderRadius: "12px",
                      padding: "10px 14px",
                      border: "none",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ o.jsx("span", { style: { color: "#64748B", fontWeight: 600, fontSize: "13px" }, children: "Search for help" }),
                      /* @__PURE__ */ o.jsx(Ko, { style: { width: "18px", height: "18px", color: "#2563EB" } })
                    ]
                  }
                ) }),
                /* @__PURE__ */ o.jsx("div", { style: { borderTop: "1px solid #EEF2F6" }, children: yh.map((vt, bt) => /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: Ft,
                    style: {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      background: "transparent",
                      border: "none",
                      borderBottom: bt < yh.length - 1 ? "1px solid #EEF2F6" : "none",
                      cursor: "pointer",
                      textAlign: "left"
                    },
                    children: [
                      /* @__PURE__ */ o.jsx("span", { style: { color: "#334155", fontWeight: 500, fontSize: "13px", paddingRight: "14px", lineHeight: 1.25 }, children: vt.label }),
                      /* @__PURE__ */ o.jsx(Va, { style: { width: "18px", height: "18px", color: "#2563EB", flexShrink: 0, opacity: 0.55 } })
                    ]
                  },
                  bt
                )) })
              ] }),
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  style: {
                    width: "100%",
                    background: "white",
                    borderRadius: it,
                    border: gt,
                    boxShadow: st,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    outline: "none",
                    cursor: "pointer",
                    textAlign: "left"
                  },
                  children: [
                    /* @__PURE__ */ o.jsx("span", { style: { fontWeight: 600, color: "#334155", fontSize: "13px" }, children: "Have an idea for a new feature or integration?" }),
                    /* @__PURE__ */ o.jsx(su, { style: { width: "18px", height: "18px", color: "#2563EB", flexShrink: 0 } })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  type: "button",
                  onClick: Mt,
                  style: {
                    width: "100%",
                    background: "white",
                    borderRadius: it,
                    border: gt,
                    boxShadow: st,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    textAlign: "left",
                    cursor: "pointer",
                    outline: "none"
                  },
                  children: [
                    /* @__PURE__ */ o.jsx("div", { style: {
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "#D1FAE5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px"
                    }, children: /* @__PURE__ */ o.jsx(Hp, { style: { width: "14px", height: "14px", color: "#059669" } }) }),
                    /* @__PURE__ */ o.jsxs("div", { children: [
                      /* @__PURE__ */ o.jsx("h3", { style: { fontWeight: 700, color: "#0F172A", fontSize: "13px" }, children: "Status: All Systems Operational" }),
                      /* @__PURE__ */ o.jsxs("p", { style: { fontSize: "12px", color: "#64748B", marginTop: "3px" }, children: [
                        "Updated ",
                        (/* @__PURE__ */ new Date()).toLocaleDateString()
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  onClick: () => tt(),
                  style: {
                    width: "100%",
                    background: "white",
                    borderRadius: it,
                    border: gt,
                    boxShadow: st,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    outline: "none",
                    cursor: "pointer",
                    textAlign: "left"
                  },
                  children: [
                    /* @__PURE__ */ o.jsx("span", { style: { fontWeight: 600, color: "#334155", fontSize: "13px" }, children: "Contact sales" }),
                    /* @__PURE__ */ o.jsx(su, { style: { width: "18px", height: "18px", color: "#2563EB", flexShrink: 0 } })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsxs("div", { style: {
                background: "white",
                borderRadius: it,
                border: gt,
                boxShadow: st,
                overflow: "hidden"
              }, children: [
                /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: () => tt(),
                    style: {
                      width: "100%",
                      padding: "12px 16px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    },
                    children: [
                      /* @__PURE__ */ o.jsx("span", { style: { fontWeight: 600, color: "#334155", fontSize: "13px" }, children: "Join our dev community on Discord" }),
                      /* @__PURE__ */ o.jsx(su, { style: { width: "18px", height: "18px", color: "#2563EB", flexShrink: 0 } })
                    ]
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { style: { height: 1, background: "#EEF2F6" } }),
                /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    onClick: () => tt(),
                    style: {
                      width: "100%",
                      padding: "12px 16px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    },
                    children: [
                      /* @__PURE__ */ o.jsx("span", { style: { fontWeight: 600, color: "#334155", fontSize: "13px" }, children: "Ask on Reddit" }),
                      /* @__PURE__ */ o.jsx(su, { style: { width: "18px", height: "18px", color: "#2563EB", flexShrink: 0 } })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  onClick: () => b(),
                  style: {
                    width: "100%",
                    background: "white",
                    borderRadius: it,
                    border: gt,
                    boxShadow: st,
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    outline: "none",
                    cursor: "pointer",
                    textAlign: "left"
                  },
                  children: [
                    /* @__PURE__ */ o.jsx("span", { style: { fontWeight: 500, color: "#0F172A", fontSize: "13px" }, children: "Send us a message" }),
                    /* @__PURE__ */ o.jsx(Va, { style: { width: "22px", height: "22px", color: "#2563EB", flexShrink: 0 } })
                  ]
                }
              )
            ]
          }
        ),
        S && /* @__PURE__ */ o.jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              background: "rgba(15, 23, 42, 0.45)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "18px",
              zIndex: 50
            },
            onClick: () => _(!1),
            children: /* @__PURE__ */ o.jsxs(
              "div",
              {
                style: {
                  width: "100%",
                  maxWidth: "420px",
                  background: "white",
                  borderRadius: it,
                  border: gt,
                  boxShadow: st,
                  overflow: "hidden"
                },
                onClick: (vt) => vt.stopPropagation(),
                children: [
                  /* @__PURE__ */ o.jsxs(
                    "div",
                    {
                      style: {
                        padding: "14px 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #EEF2F6"
                      },
                      children: [
                        /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                          /* @__PURE__ */ o.jsx(
                            "div",
                            {
                              style: {
                                width: "32px",
                                height: "32px",
                                borderRadius: "10px",
                                background: "#F1F5F9",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              },
                              children: /* @__PURE__ */ o.jsx(ny, { style: { width: "18px", height: "18px", color: "#2563EB" } })
                            }
                          ),
                          /* @__PURE__ */ o.jsxs("div", { children: [
                            /* @__PURE__ */ o.jsx("div", { style: { fontWeight: 800, fontSize: "14px", color: "#0F172A" }, children: "Developer" }),
                            /* @__PURE__ */ o.jsx("div", { style: { fontSize: "12px", color: "#64748B", marginTop: "2px" }, children: "Edit widget branding" })
                          ] })
                        ] }),
                        /* @__PURE__ */ o.jsx(
                          "button",
                          {
                            onClick: () => _(!1),
                            style: {
                              padding: "6px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              borderRadius: "10px"
                            },
                            "aria-label": "Close",
                            children: /* @__PURE__ */ o.jsx(ol, { style: { width: "18px", height: "18px", color: "#64748B" } })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ o.jsxs("div", { style: { padding: "14px 16px", display: "flex", flexDirection: "column", gap: "12px" }, children: [
                    /* @__PURE__ */ o.jsxs("div", { children: [
                      /* @__PURE__ */ o.jsx("div", { style: { fontSize: "12px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }, children: "Brand logo URL" }),
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          value: A.logo,
                          onChange: (vt) => v((bt) => ({ ...bt, logo: vt.target.value })),
                          placeholder: "https://...",
                          style: {
                            width: "100%",
                            background: "#F1F5F9",
                            border: "1px solid #E2E8F0",
                            borderRadius: "12px",
                            padding: "10px 12px",
                            fontSize: "13px",
                            outline: "none"
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ o.jsxs("div", { children: [
                      /* @__PURE__ */ o.jsx("div", { style: { fontSize: "12px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }, children: "Support logo URL" }),
                      /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          value: A.supportLogo,
                          onChange: (vt) => v((bt) => ({ ...bt, supportLogo: vt.target.value })),
                          placeholder: "https://...",
                          style: {
                            width: "100%",
                            background: "#F1F5F9",
                            border: "1px solid #E2E8F0",
                            borderRadius: "12px",
                            padding: "10px 12px",
                            fontSize: "13px",
                            outline: "none"
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ o.jsxs("div", { children: [
                      /* @__PURE__ */ o.jsx("div", { style: { fontSize: "12px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }, children: "Avatar URLs (one per line)" }),
                      /* @__PURE__ */ o.jsx(
                        "textarea",
                        {
                          value: A.avatars,
                          onChange: (vt) => v((bt) => ({ ...bt, avatars: vt.target.value })),
                          placeholder: "https://...",
                          rows: 3,
                          style: {
                            width: "100%",
                            background: "#F1F5F9",
                            border: "1px solid #E2E8F0",
                            borderRadius: "12px",
                            padding: "10px 12px",
                            fontSize: "13px",
                            outline: "none",
                            resize: "vertical"
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ o.jsxs("div", { children: [
                      /* @__PURE__ */ o.jsx("div", { style: { fontSize: "12px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }, children: "Gradient" }),
                      /* @__PURE__ */ o.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }, children: ["color1", "color2", "color3", "color4"].map((vt) => /* @__PURE__ */ o.jsx(
                        "input",
                        {
                          type: "color",
                          value: A[vt],
                          onChange: (bt) => v((kt) => ({ ...kt, [vt]: bt.target.value })),
                          style: {
                            width: "100%",
                            height: "36px",
                            padding: 0,
                            border: "1px solid #E2E8F0",
                            borderRadius: "10px",
                            background: "#F8FAFC"
                          }
                        },
                        vt
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ o.jsxs(
                    "div",
                    {
                      style: {
                        padding: "14px 16px",
                        borderTop: "1px solid #EEF2F6",
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "10px"
                      },
                      children: [
                        /* @__PURE__ */ o.jsx(
                          "button",
                          {
                            onClick: () => _(!1),
                            style: {
                              padding: "10px 12px",
                              borderRadius: "12px",
                              border: "1px solid #E2E8F0",
                              background: "#FFFFFF",
                              cursor: "pointer",
                              fontWeight: 700,
                              fontSize: "13px",
                              color: "#0F172A"
                            },
                            children: "Cancel"
                          }
                        ),
                        /* @__PURE__ */ o.jsx(
                          "button",
                          {
                            onClick: he,
                            style: {
                              padding: "10px 12px",
                              borderRadius: "12px",
                              border: "1px solid rgba(37, 99, 235, 0.4)",
                              background: "#2563EB",
                              cursor: "pointer",
                              fontWeight: 800,
                              fontSize: "13px",
                              color: "#FFFFFF"
                            },
                            children: "Apply"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
const vh = [
  {
    id: "1",
    title: "Getting started",
    description: "New to Atliso? Get up to speed with our intro articles and tutorials.",
    content: "Welcome to our platform! Here you can learn how to set up your account, understand the basic features, and get started with your first project. Our comprehensive tutorials will guide you through every step of the process.",
    category: "basics"
  },
  {
    id: "2",
    title: "Dictionary",
    description: "Confused by terminology? Find explanation of key terms in our dictionary.",
    content: "Access your account settings and learn about all the terminology we use. From basic concepts to advanced features, our dictionary covers everything you need to know to use Atliso effectively.",
    category: "account"
  },
  {
    id: "3",
    title: "Pricing & billing",
    description: "Learn how we charge for the usage of the Atliso platform.",
    content: "Understand our transparent pricing structure, billing cycles, and payment options. We offer flexible plans to suit different needs, from individual users to enterprise teams.",
    category: "billing"
  },
  {
    id: "4",
    title: "Integrations",
    description: "Learn how to connect Atliso with third party services.",
    content: "Discover how to integrate Atliso with your favorite tools and services. We support integrations with Slack, Google Workspace, Microsoft Teams, and many more popular platforms.",
    category: "integrations"
  },
  {
    id: "5",
    title: "Advanced Features",
    description: "Explore powerful features for power users and teams.",
    content: "Take your productivity to the next level with advanced features like automation workflows, custom templates, advanced analytics, and team collaboration tools.",
    category: "advanced"
  },
  {
    id: "6",
    title: "Security & Privacy",
    description: "Learn how we protect your data and ensure your privacy.",
    content: "Your security is our top priority. Learn about our encryption standards, data protection policies, compliance certifications, and how we keep your information safe.",
    category: "security"
  },
  {
    id: "7",
    title: "Mobile App Guide",
    description: "Get the most out of Atliso on your mobile device.",
    content: "Access Atliso anywhere with our mobile apps for iOS and Android. Learn about mobile-specific features, offline capabilities, and how to sync across devices.",
    category: "mobile"
  },
  {
    id: "8",
    title: "API Documentation",
    description: "Build custom integrations with our comprehensive API.",
    content: "Access our complete API documentation, code examples, SDKs, and developer resources. Build custom workflows and integrate Atliso into your existing systems.",
    category: "development"
  }
];
function hy() {
  const { setCurrentView: c, setIsOpen: d, customization: f } = ze(), [s, p] = xt.useState(""), [b, S] = xt.useState(null), _ = f?.supportLogo, A = xt.useMemo(() => {
    if (!s.trim()) return vh;
    const E = s.toLowerCase();
    return vh.filter(
      (k) => k.title.toLowerCase().includes(E) || k.description.toLowerCase().includes(E)
    );
  }, [s]), v = (E) => {
    S(E);
  }, R = () => {
    b ? S(null) : c("home");
  };
  return b ? /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col h-full bg-white", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "min-h-[62px] px-5 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10", children: [
      /* @__PURE__ */ o.jsx("button", { style: { marginLeft: "14px" }, onClick: R, className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ o.jsx(du, { className: "w-5 h-5 text-gray-500" }) }),
      /* @__PURE__ */ o.jsx("span", { className: "font-semibold text-[17px] text-gray-900 text-sm truncate max-w-[200px]", children: b.title }),
      /* @__PURE__ */ o.jsx("button", { style: { marginRight: "14px" }, onClick: () => d(!1), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ o.jsx(ol, { className: "w-5 h-5 text-black-500" }) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { style: { padding: "16px" }, className: "p-6 overflow-y-auto", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
        /* @__PURE__ */ o.jsx("div", { className: "flex -space-x-1", children: _ ? /* @__PURE__ */ o.jsx(
          "img",
          {
            src: _,
            alt: "Atliso Logo",
            className: "w-6 h-6 rounded-full border border-white"
          }
        ) : /* @__PURE__ */ o.jsx("div", { className: "w-6 h-6 rounded-full bg-gray-200 border border-white" }) }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500", children: "Written by Atliso Team" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "prose prose-sm max-w-none text-gray-700 leading-relaxed", children: [
        /* @__PURE__ */ o.jsx("p", { children: b.content }),
        /* @__PURE__ */ o.jsx("p", { className: "mt-4", children: b.description })
      ] })
    ] })
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col h-full bg-gray-50/50", children: [
    /* @__PURE__ */ o.jsxs("div", { style: { paddingLeft: "14px", paddingRight: "14px" }, className: "min-h-[62px]  px-5 py-4 bg-white border-b border-gray-100 flex items-center justify-between sticky top-0 z-10", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ o.jsx("button", { onClick: () => c("home"), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ o.jsx(du, { className: "w-5 h-5 text-gray-500" }) }),
        /* @__PURE__ */ o.jsx("h2", { style: { marginLeft: "130px" }, className: "text-[17px] font-semibold text-gray-900", children: "Help" })
      ] }),
      /* @__PURE__ */ o.jsx("button", { onClick: () => d(!1), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ o.jsx(ol, { className: "w-5 h-5 text-black-500" }) })
    ] }),
    /* @__PURE__ */ o.jsx("div", { style: { paddingLeft: "14px", paddingRight: "14px", marginBottom: "20px" }, className: "bg-white px-5 py-4 border-b border-gray-100", children: /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ o.jsx(Ko, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          style: { paddingLeft: "32px", height: "40px" },
          type: "text",
          placeholder: "Search for help",
          value: s,
          onChange: (E) => p(E.target.value),
          className: "w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-black-500/20 focus:bg-white border border-transparent focus:border-black-500 transition-all placeholder:text-gray-500"
        }
      )
    ] }) }),
    /* @__PURE__ */ o.jsx("div", { style: { paddingLeft: "14px", paddingRight: "14px" }, className: "px-5 py-4 bg-gray-50/50", children: /* @__PURE__ */ o.jsxs("h3", { className: "font-semibold text-gray-900 text-[15px]", children: [
      A.length,
      " collections"
    ] }) }),
    /* @__PURE__ */ o.jsx("div", { style: { cursor: "pointer", paddingLeft: "14px", paddingRight: "14px", paddingTop: "6px" }, className: "flex-1 bg-white overflow-y-auto", children: /* @__PURE__ */ o.jsx("div", { className: "divide-y divide-gray-100", children: A.map((E) => /* @__PURE__ */ o.jsxs(
      "button",
      {
        onClick: () => v(E),
        className: "w-full px-5 py-5 text-left hover:bg-gray-50 transition-colors group flex items-start justify-between gap-4",
        children: [
          /* @__PURE__ */ o.jsxs("div", { style: { marginTop: "18px" }, className: "space-y-3.5", children: [
            /* @__PURE__ */ o.jsx("h3", { className: "text-[15px] font-semibold text-gray-900 group-hover:text-black-600 transition-colors", children: E.title }),
            /* @__PURE__ */ o.jsx("p", { className: "text-[14px] text-gray-500 leading-normal", children: E.description }),
            /* @__PURE__ */ o.jsx("p", { className: "text-[13px] text-gray-400 pt-1", children: "12 articles" })
          ] }),
          /* @__PURE__ */ o.jsx(Va, { className: "w-5 h-5 text-black-500/60 shrink-0 mt-1" })
        ]
      },
      E.id
    )) }) })
  ] });
}
function my({ isOpen: c, onClose: d, onDownloadTranscript: f, onExpandView: s, isExpanded: p }) {
  const b = xt.useRef(null);
  return xt.useEffect(() => {
    const S = (A) => {
      b.current && !b.current.contains(A.target) && d();
    }, _ = (A) => {
      A.key === "Escape" && d();
    };
    return c && (document.addEventListener("mousedown", S), document.addEventListener("keydown", _)), () => {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", _);
    };
  }, [c, d]), c ? /* @__PURE__ */ o.jsxs(
    "div",
    {
      style: { padding: "8px" },
      ref: b,
      className: "absolute right-2 top-14 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[180px]",
      children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: f,
            className: "w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ o.jsx(Hh, { className: "w-4 h-4" }),
              "Download transcript"
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: s,
            className: "w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer",
            children: p ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              /* @__PURE__ */ o.jsx(Pp, { className: "w-4 h-4" }),
              "Minimize view"
            ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              /* @__PURE__ */ o.jsx(Jp, { className: "w-4 h-4" }),
              "Expand view"
            ] })
          }
        )
      ]
    }
  ) : null;
}
function gy({ onDownloadTranscript: c, onExpandView: d, isExpanded: f }) {
  const [s, p] = xt.useState(!1), b = () => {
    p(!s);
  }, S = () => {
    p(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: b,
        style: { marginTop: "5px" },
        className: Lt(
          "p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600 cursor-pointer",
          s && "bg-gray-100 text-gray-600"
        ),
        "aria-label": "More options",
        "aria-expanded": s,
        "aria-haspopup": "true",
        children: /* @__PURE__ */ o.jsx(qp, { className: "w-5 h-5" })
      }
    ),
    /* @__PURE__ */ o.jsx(
      my,
      {
        isOpen: s,
        onClose: S,
        onDownloadTranscript: () => {
          c(), S();
        },
        onExpandView: () => {
          d(), S();
        },
        isExpanded: f
      }
    )
  ] });
}
function py() {
  const { customization: c, setCurrentView: d, setIsOpen: f, toggleExpanded: s, getActiveThread: p, isExpanded: b } = ze(), S = c?.supportLogo, _ = () => {
    d("messages");
  }, A = () => {
    const R = p();
    if (!R || R.messages.length === 0) return;
    const E = R.messages.map((Y) => `[${new Date(Y.timestamp).toLocaleString()}] ${Y.role.toUpperCase()}: ${Y.content}`).join(`

`), k = new Blob([E], { type: "text/plain" }), G = URL.createObjectURL(k), et = document.createElement("a");
    et.href = G, et.download = `chat-transcript-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.txt`, document.body.appendChild(et), et.click(), document.body.removeChild(et), URL.revokeObjectURL(G);
  }, v = () => {
    s();
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "min-h-[50px] px-5 py-4 bg-white border-b border-gray-100 shrink-0 flex items-center justify-between z-10", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          style: { marginLeft: "8px", marginRight: "8px" },
          onClick: _,
          className: "flex ml-2 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-all duration-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300",
          "aria-label": "Go back",
          children: /* @__PURE__ */ o.jsx(du, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-center shrink-0 overflow-hidden", children: S ? /* @__PURE__ */ o.jsx("img", { src: S, alt: "Support", className: "w-6 h-6 object-contain" }) : /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-white fill-current", fill: "none", children: /* @__PURE__ */ o.jsx("path", { d: "M12 2L2 22H22L12 2Z" }) }) }),
      /* @__PURE__ */ o.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ o.jsx("h3", { className: "text-[15px] font-semibold text-gray-900 truncate leading-tight", children: c?.botName || "Support AI Assistant" }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-500 truncate", children: c?.tagline || "The team can also help" })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-1 shrink-0", style: { marginRight: "8px" }, children: [
      /* @__PURE__ */ o.jsx(
        gy,
        {
          onDownloadTranscript: A,
          onExpandView: v,
          isExpanded: b
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          style: { marginRight: "8px" },
          onClick: () => f(!1),
          className: "p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-all duration-200 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300",
          children: /* @__PURE__ */ o.jsx(ol, { className: "w-5 h-5" })
        }
      )
    ] })
  ] });
}
function yy({ message: c }) {
  const d = c.role === "user";
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: Lt(
        "flex gap-3 animate-fade-in mb-5",
        d ? "flex-row-reverse" : "flex-row"
      ),
      children: /* @__PURE__ */ o.jsxs("div", { className: Lt("max-w-[85%] flex flex-col", d ? "items-end" : "items-start"), children: [
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            style: {
              fontSize: "14px",
              padding: "0.5rem 1rem",
              margin: d ? "0 0.5rem 0 auto" : "0 auto 0 0.5rem",
              width: "fit-content"
            },
            className: Lt(
              "px-4 py-3 text-[15px] leading-relaxed transition-all duration-200 overflow-hidden overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar",
              d ? "bg-black text-white rounded-[20px] shadow-md hover:shadow-lg" : "bg-gray-50 text-gray-800 border border-gray-200 rounded-[20px] shadow-sm hover:shadow-md hover:border-gray-300"
            ),
            children: [
              c.type === "attachment" && c.attachment && /* @__PURE__ */ o.jsx("div", { className: "mb-2", children: c.attachment.type === "image" ? /* @__PURE__ */ o.jsx(
                "img",
                {
                  src: c.attachment.dataUrl,
                  alt: c.attachment.name,
                  className: "rounded-xl max-w-full mb-2 cursor-pointer hover:opacity-90 transition-opacity",
                  onClick: () => {
                    const f = document.createElement("a");
                    f.href = c.attachment.dataUrl, f.target = "_blank", f.click();
                  }
                }
              ) : /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3 bg-white/10 rounded-lg p-2", children: [
                /* @__PURE__ */ o.jsx("div", { className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ o.jsx(Lp, { className: "w-5 h-5 text-current" }) }),
                /* @__PURE__ */ o.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ o.jsx("p", { className: "font-medium truncate", children: c.attachment.name }),
                  /* @__PURE__ */ o.jsx("p", { className: "text-xs opacity-70", children: N0(c.attachment.size) })
                ] })
              ] }) }),
              c.type === "gif" && c.gif && /* @__PURE__ */ o.jsx(
                "img",
                {
                  src: c.gif.url,
                  alt: c.gif.title || "GIF",
                  className: "rounded-xl max-w-full mb-2"
                }
              ),
              c.type === "voice" && c.audio && /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ o.jsx("div", { className: "w-8 h-8 bg-current rounded-full flex items-center justify-center opacity-20", children: /* @__PURE__ */ o.jsx(kh, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ o.jsx("audio", { controls: !0, className: "max-w-[200px] h-8", src: c.audio.dataUrl })
              ] }),
              c.content && /* @__PURE__ */ o.jsx("p", { className: "whitespace-pre-wrap break-words overflow-wrap-anywhere", children: c.content }),
              c.type === "attachment" && c.attachment?.dataUrl && /* @__PURE__ */ o.jsxs(
                "a",
                {
                  href: c.attachment.dataUrl,
                  download: c.attachment.name,
                  className: Lt(
                    "mt-2 inline-flex items-center gap-2 text-xs font-medium opacity-90 hover:opacity-100 cursor-pointer"
                  ),
                  children: [
                    /* @__PURE__ */ o.jsx(Hh, { className: "w-3 h-3" }),
                    "Download"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "p",
          {
            style: {
              marginLeft: "12px",
              marginRight: "12px",
              marginBottom: "8px",
              maxWidth: "calc(100% - 24px)"
            },
            className: Lt(
              "text-[11px] text-gray-400 mt-1 px-1",
              d ? "text-right" : "text-left"
            ),
            children: [
              !d && (c.role === "human" ? "Human Assistant • " : "Support AI Assistant • "),
              " ",
              Zo(c.timestamp)
            ]
          }
        ),
        !d && c.quickReplies && c.quickReplies.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "flex gap-2 mb-2 ml-1 flex-wrap", children: c.quickReplies.map((f, s) => /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => {
              Promise.resolve().then(() => C0).then(({ useChatStore: p }) => {
                p.getState().sendMessage(f.value);
              });
            },
            className: "px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-[11px] font-normal rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow active:scale-95",
            children: f.label.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "").trim()
          },
          s
        )) })
      ] })
    }
  );
}
function vy({ messages: c }) {
  return c.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "flex flex-col items-center justify-center h-full text-center px-8 pb-12" }) : /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col pb-2", children: [
    /* @__PURE__ */ o.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ o.jsx("span", { style: { marginBottom: "8px" }, className: "text-[11px] font-regular text-gray-500 text-center px-4", children: "Ask us anything, or share your feedback." }) }),
    /* @__PURE__ */ o.jsx("div", { className: "flex justify-center py-6", children: /* @__PURE__ */ o.jsx("span", { className: "text-[11px] font-semibold text-gray-400 uppercase tracking-wide bg-gray-50 px-2 rounded", children: "Today" }) }),
    c.map((d) => /* @__PURE__ */ o.jsx(yy, { message: d }, d.id))
  ] });
}
function by({ isOpen: c, onClose: d, onSelect: f }) {
  if (!c) return null;
  const s = [
    {
      id: "book_meeting",
      label: "Book a meeting",
      icon: Op,
      description: "Schedule a call with our team",
      action: "I would like to book a meeting"
    },
    {
      id: "human_handoff",
      label: "Talk to a human",
      icon: ry,
      description: "Connect with a live support agent",
      action: "I want to talk to a human"
    },
    {
      id: "help",
      label: "Search help",
      icon: Ko,
      description: "Find answers in our knowledge base",
      action: "Help"
    }
  ];
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "fixed inset-0 z-30 bg-transparent",
        onClick: d
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "absolute bottom-full left-0 mb-2 w-full px-5 z-40 animate-slide-up", children: /* @__PURE__ */ o.jsxs("div", { className: "bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "px-4 py-3 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50", children: [
        /* @__PURE__ */ o.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "4.5", r: "2.5" }),
          /* @__PURE__ */ o.jsx("path", { d: "m10.2 6.3-3.9 3.9" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "4.5", cy: "12", r: "2.5" }),
          /* @__PURE__ */ o.jsx("path", { d: "M7 12h10" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "19.5", cy: "12", r: "2.5" }),
          /* @__PURE__ */ o.jsx("path", { d: "m13.8 17.7 3.9-3.9" }),
          /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "19.5", r: "2.5" })
        ] }),
        /* @__PURE__ */ o.jsx("span", { className: "text-xs font-semibold text-gray-900 uppercase tracking-wider", children: "Quick Actions" })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "p-1", children: s.map((p) => /* @__PURE__ */ o.jsxs(
        "button",
        {
          onClick: () => {
            f(p.action), d();
          },
          className: "w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group text-left",
          children: [
            /* @__PURE__ */ o.jsx("div", { className: "w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-white border border-gray-100 group-hover:border-gray-200 flex items-center justify-center transition-colors", children: /* @__PURE__ */ o.jsx(p.icon, { className: "w-4 h-4 text-gray-500 group-hover:text-black transition-colors" }) }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("div", { className: "text-sm font-medium text-gray-900", children: p.label }),
              /* @__PURE__ */ o.jsx("div", { className: "text-xs text-gray-500", children: p.description })
            ] })
          ]
        },
        p.id
      )) })
    ] }) })
  ] });
}
function xy() {
  const { sendMessage: c, isTyping: d, getActiveThread: f } = ze(), b = (f()?.handoff_status || "none") === "waiting", S = d, _ = "Message...", [A, v] = xt.useState(""), [R, E] = xt.useState(!1), [k, G] = xt.useState(""), [et, Y] = xt.useState(0), [K, X] = xt.useState([]), [dt, ct] = xt.useState(!1), it = xt.useRef(null), gt = xt.useRef(null), st = xt.useRef(null), tt = xt.useRef(null);
  xt.useEffect(() => {
    it.current && (it.current.style.height = "auto", it.current.style.height = Math.min(it.current.scrollHeight, 200) + "px");
  }, [A]);
  const Q = () => {
    const N = tt.current;
    N?.stop && N.stop(), tt.current = null, st.current && st.current.state !== "inactive" && (st.current.stop(), st.current = null), E(!1), Y(0);
  };
  if (xt.useEffect(() => () => {
    R && Q();
  }, [R]), b)
    return /* @__PURE__ */ o.jsx("div", { style: { paddingLeft: "14px", paddingRight: "14px", paddingBottom: "20px" }, className: "p-5 bg-transparent shrink-0", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200", children: [
      /* @__PURE__ */ o.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-indigo-500 border-t-transparent" }),
      /* @__PURE__ */ o.jsx("p", { className: "text-sm font-medium text-gray-500", children: "Waiting for Human Agent..." })
    ] }) });
  const Mt = () => {
    const N = A.trim();
    if (!(!N || S)) {
      if (K.length > 0) {
        const P = K[0], $ = {
          name: P.name,
          size: 0,
          type: "image",
          dataUrl: P.url
        };
        let m = N;
        if (K.length > 1) {
          const C = K.slice(1).map((U) => U.name).join(", ");
          m = `${N} [Also attached: ${C}]`;
        }
        c(m, { type: "attachment", attachment: $ });
      } else
        c(N);
      v(""), X([]), it.current?.focus();
    }
  }, he = () => {
    gt.current?.click();
  }, Ft = (N) => {
    c(N);
  }, Ut = (N) => {
    const P = N.target.files?.[0];
    if (P && P.type.startsWith("image/")) {
      const $ = new FileReader();
      $.onload = (m) => {
        const C = m.target?.result, U = {
          id: Date.now().toString(),
          url: C,
          name: P.name
        };
        X((H) => [...H, U]);
      }, $.readAsDataURL(P);
    } else P && v(($) => $ + " [Please select only image files]");
  }, vt = (N) => {
    X((P) => P.filter(($) => $.id !== N));
  }, bt = async () => {
    try {
      const N = window, P = N.AudioContext || N.webkitAudioContext;
      if (!P) return;
      const $ = new P(), m = 0.12, C = $.createOscillator(), U = $.createGain();
      C.type = "sine", C.frequency.value = 880, U.gain.setValueAtTime(1e-3, $.currentTime), U.gain.exponentialRampToValueAtTime(0.15, $.currentTime + 0.02), U.gain.exponentialRampToValueAtTime(1e-4, $.currentTime + m), C.connect(U), U.connect($.destination), C.start(), C.stop($.currentTime + m), setTimeout(() => $.close(), 250);
    } catch {
    }
  }, kt = async () => {
    try {
      G("");
      const N = await navigator.mediaDevices.getUserMedia({ audio: !0 }), P = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (P) {
        const H = new P();
        H.continuous = !0, H.interimResults = !0, H.lang = "en-US", console.log("Speech recognition initialized"), H.onstart = () => {
          console.log("Speech recognition started"), bt();
        }, H.onresult = (J) => {
          console.log("Speech recognition result:", J);
          let lt = "", W = "";
          for (let pt = J.resultIndex; pt < J.results.length; pt++) {
            const ie = J.results[pt][0].transcript;
            console.log(`Transcript part ${pt}:`, ie, "isFinal:", J.results[pt].isFinal), J.results[pt].isFinal ? lt += ie + " " : W += ie;
          }
          G((pt) => pt + lt);
          const Rt = (k + lt + W).trim();
          console.log("Setting message to:", Rt), v(Rt);
        }, H.onerror = (J) => {
          console.error("Speech recognition error:", J.error), console.error("Error details:", J), Q();
        }, H.onend = () => {
          console.log("Speech recognition ended");
        }, tt.current = H, H.start();
      } else
        console.error("Speech recognition not supported in this browser"), v((H) => H + " [Voice recording not supported in this browser]");
      const $ = new AudioContext(), m = $.createAnalyser();
      $.createMediaStreamSource(N).connect(m);
      const U = () => {
        const H = new Uint8Array(m.frequencyBinCount);
        m.getByteFrequencyData(H);
        const lt = H.reduce((W, Rt) => W + Rt) / H.length / 255;
        Y(lt), lt > 0.1 && console.log("Audio level:", lt), R && requestAnimationFrame(U);
      };
      U(), st.current = new MediaRecorder(N), E(!0);
    } catch (N) {
      console.error("Error accessing microphone:", N), v((P) => P + " [Voice recording not available in this browser]");
    }
  }, T = () => {
    R ? Q() : kt();
  }, B = (N) => {
    N.key === "Enter" && !N.shiftKey && (N.preventDefault(), Mt());
  };
  return /* @__PURE__ */ o.jsxs("div", { style: { paddingLeft: "14px", paddingRight: "14px", paddingBottom: "20px" }, className: "p-5 bg-transparent shrink-0 relative", children: [
    /* @__PURE__ */ o.jsx(
      by,
      {
        isOpen: dt,
        onClose: () => ct(!1),
        onSelect: Ft
      }
    ),
    /* @__PURE__ */ o.jsx("style", { children: `
        @keyframes rainbow-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(96, 165, 250, 0.4),
                        0 0 40px rgba(168, 85, 247, 0.2);
          }
          33% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4),
                        0 0 40px rgba(236, 72, 153, 0.2);
          }
          66% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.4),
                        0 0 40px rgba(96, 165, 250, 0.2);
          }
        }
        
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .recording-border {
          position: relative;
          animation: rainbow-glow 3s ease-in-out infinite;
        }
        
        .recording-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(
            90deg,
            rgba(96, 165, 250, 0.5),
            rgba(168, 85, 247, 0.5),
            rgba(236, 72, 153, 0.5),
            rgba(96, 165, 250, 0.5)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: pulse-scale 2s ease-in-out infinite;
          pointer-events: none;
        }
        
        /* Hide scrollbar completely */
        textarea::-webkit-scrollbar {
          display: none;
        }
        textarea {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      ` }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        ref: gt,
        type: "file",
        onChange: Ut,
        style: { display: "none" },
        accept: "image/*"
      }
    ),
    K.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "flex flex-wrap gap-2 mb-3 animate-fade-in", children: K.map((N) => /* @__PURE__ */ o.jsxs("div", { className: "relative group animate-slide-in-left", children: [
      /* @__PURE__ */ o.jsx(
        "img",
        {
          src: N.url,
          alt: N.name,
          className: "w-20 h-20 object-cover rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => vt(N.id),
          className: "absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-90",
          "aria-label": "Remove image",
          children: /* @__PURE__ */ o.jsx(ol, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none" })
    ] }, N.id)) }),
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        style: { paddingBottom: "44px" },
        className: Lt(
          "relative rounded-2xl bg-transparent border border-black transition-all duration-300",
          R ? "recording-border" : ""
        ),
        children: [
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              style: { paddingLeft: "16px", paddingRight: "16px", paddingTop: "10px" },
              ref: it,
              value: A,
              onChange: (N) => v(N.target.value),
              onKeyDown: B,
              placeholder: _,
              disabled: S,
              className: "w-full pb-10 bg-transparent border-none text-[15px] leading-relaxed max-h-[200px] focus:outline-none resize-none placeholder:text-gray-400 min-h-[50px] transition-all duration-200",
              rows: 1,
              "aria-label": "Message input"
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "absolute bottom-2.5 left-3 right-3 flex items-center justify-between", children: [
            /* @__PURE__ */ o.jsxs("div", { style: { marginBottom: "-20px" }, className: "flex items-center gap-5", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "relative group/tooltip", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    onClick: () => ct(!dt),
                    className: Lt(
                      "p-2 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none",
                      dt ? "text-black" : "text-gray-400 hover:text-gray-600"
                    ),
                    children: /* @__PURE__ */ o.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "4.5", r: "2.5" }),
                      /* @__PURE__ */ o.jsx("path", { d: "m10.2 6.3-3.9 3.9" }),
                      /* @__PURE__ */ o.jsx("circle", { cx: "4.5", cy: "12", r: "2.5" }),
                      /* @__PURE__ */ o.jsx("path", { d: "M7 12h10" }),
                      /* @__PURE__ */ o.jsx("circle", { cx: "19.5", cy: "12", r: "2.5" }),
                      /* @__PURE__ */ o.jsx("path", { d: "m13.8 17.7 3.9-3.9" }),
                      /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "19.5", r: "2.5" })
                    ] })
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none", children: "Quick Actions" })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "relative group/tooltip", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    onClick: he,
                    className: "p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none",
                    children: /* @__PURE__ */ o.jsx(ey, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none", children: "Upload File" })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "relative group/tooltip", children: [
                /* @__PURE__ */ o.jsx(
                  "button",
                  {
                    onClick: T,
                    className: Lt(
                      "p-2 rounded-lg transition-all duration-300 cursor-pointer focus:outline-none",
                      R ? "text-red-500 scale-110" : "text-gray-400 hover:text-gray-600"
                    ),
                    children: /* @__PURE__ */ o.jsx(kh, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none", children: "Voice Message" })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                style: { padding: "8px 8px", justifyItems: "center", borderRadius: "50px" },
                onClick: Mt,
                disabled: !A.trim() || S,
                className: Lt(
                  "p-1.5 rounded-lg transition-all cursor-pointer focus:outline-none",
                  A.trim() && !S ? "bg-black text-white shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                ),
                children: /* @__PURE__ */ o.jsx(Np, { className: "w-5 h-5" })
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function Sy() {
  return /* @__PURE__ */ o.jsx("div", { className: "flex gap-3 animate-fade-in mb-4", children: /* @__PURE__ */ o.jsx("div", { style: { padding: "8px" }, className: "bg-gray-50 px-5 py-4 rounded-[20px] border border-gray-200 shadow-sm", children: /* @__PURE__ */ o.jsxs("div", { className: "flex gap-1.5 items-center h-5", children: [
    /* @__PURE__ */ o.jsx("span", { className: "w-2 h-2 bg-gray-400 rounded-full animate-typing" }),
    /* @__PURE__ */ o.jsx("span", { className: "w-2 h-2 bg-gray-400 rounded-full animate-typing-delay-1" }),
    /* @__PURE__ */ o.jsx("span", { className: "w-2 h-2 bg-gray-400 rounded-full animate-typing-delay-2" })
  ] }) }) });
}
function wy({ rating: c, onRatingChange: d, disabled: f = !1 }) {
  const s = [1, 2, 3, 4, 5];
  return /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center space-y-3", children: [
    /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-600 font-medium", children: "Rate this conversation:" }),
    /* @__PURE__ */ o.jsx("div", { className: "flex space-x-1", children: s.map((p) => /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => !f && d(p),
        disabled: f,
        className: Lt(
          "p-1 rounded transition-all",
          !f && "hover:scale-110 cursor-pointer",
          f && "cursor-not-allowed opacity-60"
        ),
        "aria-label": `Rate ${p} star${p !== 1 ? "s" : ""}`,
        children: /* @__PURE__ */ o.jsx(
          oy,
          {
            className: Lt(
              "w-6 h-6 transition-colors",
              c && p <= c ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-300"
            )
          }
        )
      },
      p
    )) }),
    c && /* @__PURE__ */ o.jsxs("p", { className: "text-xs text-gray-500", children: [
      "You rated this ",
      c,
      " star",
      c !== 1 ? "s" : ""
    ] })
  ] });
}
function Ay() {
  const { getActiveThread: c, isTyping: d, submitFeedback: f } = ze(), s = xt.useRef(null), p = c(), b = xt.useMemo(() => p?.messages || [], [p?.messages]), S = p?.handoff_status || "none", _ = p?.ended || S === "ended", A = p?.feedbackRating;
  xt.useEffect(() => {
    s.current?.scrollIntoView({ behavior: "smooth" });
  }, [b, d]);
  const v = (k) => {
    f(k);
  }, E = (() => {
    switch (S) {
      case "waiting":
        return { color: "yellow", text: "Human Agent is joining..." };
      case "connected":
        return { color: "green", text: "Live Agent Connected" };
      default:
        return null;
    }
  })();
  return /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col h-full bg-white", children: [
    /* @__PURE__ */ o.jsx("div", { className: "shrink-0 flex-none", children: /* @__PURE__ */ o.jsx(py, {}) }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex-1 overflow-y-auto px-5 py-5 atliso-scrollbar min-h-0", children: [
      /* @__PURE__ */ o.jsx(vy, { messages: b }),
      d && S === "none" && /* @__PURE__ */ o.jsx(Sy, {}),
      /* @__PURE__ */ o.jsx("div", { ref: s })
    ] }),
    _ && /* @__PURE__ */ o.jsx("div", { className: "px-5 py-3 bg-gray-100 border-t border-gray-200 shrink-0 flex-none", children: /* @__PURE__ */ o.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-600 font-medium", children: "Conversation ended" }),
      /* @__PURE__ */ o.jsx("div", { className: "mt-4", children: /* @__PURE__ */ o.jsx(
        wy,
        {
          rating: A,
          onRatingChange: v,
          disabled: !!A
        }
      ) }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => ze.getState().startNewConversation(),
          className: "mt-6 w-full py-3 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors",
          children: "Start new conversation"
        }
      ),
      /* @__PURE__ */ o.jsx("p", { className: "text-[11px] text-gray-400 mt-3", children: "Your feedback helps us improve" })
    ] }) }),
    !_ && /* @__PURE__ */ o.jsxs("div", { className: "shrink-0 flex-none", children: [
      E && /* @__PURE__ */ o.jsxs("div", { className: "px-5 py-2 flex items-center gap-2 animate-in fade-in slide-in-from-bottom duration-500", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ o.jsx("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full bg-${E.color}-400 opacity-75` }),
          /* @__PURE__ */ o.jsx("span", { className: `relative inline-flex rounded-full h-2 w-2 bg-${E.color}-500` })
        ] }),
        /* @__PURE__ */ o.jsx("p", { className: `text-[11px] text-${E.color}-700 font-semibold tracking-tight uppercase`, children: E.text })
      ] }),
      /* @__PURE__ */ o.jsx(xy, {})
    ] })
  ] });
}
function zy() {
  const { customization: c, threads: d, setActiveThread: f, startNewConversation: s, setIsOpen: p } = ze(), b = c?.supportLogo, S = c?.logo, _ = b || S, A = d.find((R) => !R.ended), v = () => {
    A ? f(A.id) : s();
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col h-full bg-white", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "min-h-[60px] px-4 py-4 bg-white border-b border-gray-100 flex items-center justify-center relative shrink-0", children: [
      /* @__PURE__ */ o.jsx("h2", { className: "text-[17px] font-semibold text-gray-900 ", children: "Messages" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => p(!1),
          className: "absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-black-100 text-black-400 hover:text-gray-600 transition-colors",
          "aria-label": "Close",
          children: /* @__PURE__ */ o.jsx(ol, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "flex-1 overflow-y-auto bg-white px-4 pb-4", style: { minHeight: 0 }, children: d.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "flex flex-col items-center justify-center p-8 text-center text-gray-500", children: /* @__PURE__ */ o.jsx("p", { children: "No messages yet." }) }) : /* @__PURE__ */ o.jsx("div", { className: "px-5 pt-4", children: /* @__PURE__ */ o.jsx("div", { className: "divide-y divide-gray-100", children: d.map((R) => {
      const E = R.messages[R.messages.length - 1];
      return /* @__PURE__ */ o.jsxs(
        "button",
        {
          onClick: () => f(R.id),
          className: "w-full py-6 flex items-center gap-5 text-left hover:bg-gray-50 transition-colors",
          children: [
            _ ? /* @__PURE__ */ o.jsx("img", { src: _, alt: "Support", className: "w-20 h-12 object-contain shrink-0" }) : /* @__PURE__ */ o.jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-orange-500", children: /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 24 24", className: "w-5 h-5 text-white fill-current", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o.jsx("path", { d: "M12 2L2 22H22L12 2Z" }) }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ o.jsx("p", { className: "text-[15px] font-medium text-gray-900 truncate leading-snug", children: E ? E.content : "New conversation" }),
                R.unread && R.unreadCount > 0 && /* @__PURE__ */ o.jsx("div", { className: "w-2 h-2 bg-black-600 rounded-full flex-shrink-0" })
              ] }),
              /* @__PURE__ */ o.jsxs("p", { className: "text-[13px] text-gray-500 mt-2 truncate", children: [
                "Support AI Assistant",
                E ? ` • ${Zo(E.timestamp)}` : ""
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(Va, { className: "w-5 h-5 text-black-600 shrink-0" })
          ]
        },
        R.id
      );
    }) }) }) }),
    /* @__PURE__ */ o.jsx("div", { className: "px-6 py-6 bg-white border-t border-gray-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ o.jsxs(
      "button",
      {
        onClick: v,
        className: "w-full max-w-[250px] h-12 text-sm px-8 py-3.5 bg-black text-white font-medium rounded-[10px] flex items-center justify-center gap-2 transition-all hover:bg-gray-800 active:scale-95 shadow-md hover:shadow-lg",
        children: [
          /* @__PURE__ */ o.jsx("p", { children: "Send us a message" }),
          /* @__PURE__ */ o.jsx(Va, { className: "w-5 h-5 ml-0.5", strokeWidth: 3 })
        ]
      }
    ) })
  ] });
}
const jy = [
  {
    id: "1",
    title: "Atliso launches new AI-powered customer support features",
    summary: "Revolutionary AI capabilities now available for enhanced customer service automation.",
    content: "Atliso is excited to announce the launch of our new AI-powered customer support features. These revolutionary capabilities include intelligent ticket routing, automated response suggestions, and real-time sentiment analysis to help your support team work more efficiently.",
    timestamp: "2024-12-19T10:00:00Z",
    // December 19, 2024
    category: "Product Update",
    read: !1,
    externalUrl: "#",
    imageUrl: "https://res.cloudinary.com/dwjvtgiid/image/upload/v1766316650/alexandre-pellaes-6vAjp0pscX0-unsplash_iaw9fr.jpg"
  },
  {
    id: "2",
    title: "System maintenance scheduled for this weekend",
    summary: "Planned maintenance window for system upgrades and performance improvements.",
    content: "We will be performing scheduled maintenance this weekend from Saturday 10 PM to Sunday 2 AM EST. During this time, some services may be temporarily unavailable. We apologize for any inconvenience and appreciate your patience.",
    timestamp: "2024-12-18T14:30:00Z",
    // December 18, 2024
    category: "System Update",
    read: !1,
    externalUrl: "#",
    imageUrl: "https://res.cloudinary.com/dwjvtgiid/image/upload/v1764419666/logo-white_x64htk.svg"
  },
  {
    id: "3",
    title: "Introducing the new Client Portal",
    summary: "Access your account, manage subscriptions, and track your support tickets all in one place.",
    content: "Our new Client Portal provides a centralized hub for managing your Atliso experience. View your account details, upgrade your subscription, track support ticket status, and access detailed analytics - all from a single, intuitive dashboard.",
    timestamp: "2024-12-17T11:00:00Z",
    // December 17, 2024
    category: "Product Update",
    read: !1,
    externalUrl: "#",
    imageUrl: "https://res.cloudinary.com/dwjvtgiid/image/upload/v1764790803/Screenshot_2025-12-03_at_19.39.14_hcm6gd.png"
  },
  {
    id: "4",
    title: "Security update: Two-factor authentication now available",
    summary: "Enhanced security features to protect your account and data.",
    content: "Two-factor authentication (2FA) is now available for all accounts. This additional security layer helps protect your account from unauthorized access. Enable 2FA in your account settings to start using this feature today.",
    timestamp: "2024-12-16T16:45:00Z",
    // December 16, 2024
    category: "Security",
    read: !0,
    externalUrl: "#",
    imageUrl: "https://res.cloudinary.com/dwjvtgiid/image/upload/v1762618487/freepik__the-style-is-candid-image-photography-with-natural__92271_i3wbbw.png"
  }
];
function Ty() {
  const { setIsOpen: c } = ze(), d = (b) => new Date(b).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }), f = "12px", s = "1px solid #e5e7eb", p = "0 1px 3px rgba(0, 0, 0, 0.1)";
  return /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col h-full bg-white", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "min-h-[62px] px-5 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10 shrink-0", children: [
      /* @__PURE__ */ o.jsx("button", { style: { marginLeft: "14px" }, onClick: () => c(!1), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ o.jsx(du, { className: "w-5 h-5 text-gray-500" }) }),
      /* @__PURE__ */ o.jsx("span", { className: "font-semibold text-[17px] text-gray-900 text-sm truncate max-w-[200px]", children: "News & Updates" }),
      /* @__PURE__ */ o.jsx("button", { style: { marginRight: "14px" }, onClick: () => c(!1), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ o.jsx(ol, { className: "w-5 h-5 text-black-500" }) })
    ] }),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        style: {
          padding: "0 16px 16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        },
        className: "flex-1 overflow-y-auto bg-gray-50",
        children: jy.map((b) => /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: () => {
              b.externalUrl && window.open(b.externalUrl, "_blank");
            },
            style: {
              width: "100%",
              background: "white",
              borderRadius: f,
              border: s,
              boxShadow: p,
              padding: "14px 16px",
              textAlign: "left",
              outline: "none",
              cursor: "pointer",
              position: "relative"
            },
            className: Lt(
              "hover:shadow-md hover:border-gray-300 transition-all",
              !b.read && "border-l-4 border-l-black-500"
            ),
            children: [
              b.imageUrl && /* @__PURE__ */ o.jsxs("div", { style: {
                width: "100%",
                height: "120px",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "12px",
                position: "relative"
              }, children: [
                /* @__PURE__ */ o.jsx(
                  "img",
                  {
                    src: b.imageUrl,
                    alt: b.title,
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { style: {
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  padding: "8px 12px"
                }, children: /* @__PURE__ */ o.jsx("p", { style: {
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 600,
                  margin: 0
                }, children: "Latest Updates" }) })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("h2", { style: {
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#0F172A",
                  marginBottom: "8px",
                  lineHeight: "1.3"
                }, children: b.title }),
                /* @__PURE__ */ o.jsx("p", { style: {
                  fontSize: "13px",
                  color: "#64748B",
                  lineHeight: 1.5,
                  marginBottom: "8px"
                }, children: b.summary }),
                /* @__PURE__ */ o.jsx("p", { style: {
                  fontSize: "11px",
                  color: "#64748B",
                  margin: 0
                }, children: d(b.timestamp) })
              ] })
            ]
          },
          b.id
        ))
      }
    )
  ] });
}
const Ey = [
  { view: "home", icon: Xp, label: "Home" },
  { view: "messages", icon: Wp, label: "Messages" },
  { view: "news", icon: uy, label: "News" },
  { view: "help", icon: Zp, label: "Help" }
];
function Ny() {
  const { currentView: c, setCurrentView: d, getTotalUnreadCount: f } = ze(), s = f();
  return /* @__PURE__ */ o.jsx("nav", { className: "min-h-[90px] flex items-center justify-around bg-white border-t border-gray-100 pt-4 pb-5 px-6 shrink-0 rounded-b-3xl", children: Ey.map(({ view: p, icon: b, label: S }) => {
    const _ = c === p;
    return /* @__PURE__ */ o.jsxs(
      "button",
      {
        onClick: () => d(p),
        className: Lt(
          "flex flex-col items-center gap-1.5 px-6 py-1 bg-transparent border-none cursor-pointer transition-all duration-200",
          "focus:outline-none active:scale-95",
          _ ? "text-black-600" : "text-gray-400 hover:text-gray-600"
        ),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ o.jsx(
              b,
              {
                size: 24,
                strokeWidth: 1.5,
                className: Lt(_ ? "text-black-600" : "text-gray-400")
              }
            ),
            p === "messages" && s > 0 && /* @__PURE__ */ o.jsx("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5 border-2 border-white shadow-sm", children: s > 99 ? "99+" : s })
          ] }),
          /* @__PURE__ */ o.jsx("span", { style: { marginTop: "-8px" }, className: Lt("text-[11px] font-regular", _ ? "text-black-600" : "text-gray-500"), children: S })
        ]
      },
      p
    );
  }) });
}
function Cy({ isInline: c = !1 }) {
  const { currentView: d, isExpanded: f } = ze(), s = d === "home";
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: Lt(
        "bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up",
        c ? "relative w-full h-full rounded-none" : f ? "fixed inset-4 w-auto h-auto max-w-none max-h-none" : "absolute bottom-20 right-0 w-[400px] h-[700px] max-h-[calc(100vh-100px)]"
      ),
      children: [
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: Lt(
              "flex-1 flex flex-col relative z-0 transition-colors duration-300",
              s ? "overflow-y-auto no-scrollbar" : "overflow-hidden"
            ),
            style: { background: "#fff" },
            children: [
              d === "home" && /* @__PURE__ */ o.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ o.jsx(dy, {}) }),
              d === "help" && /* @__PURE__ */ o.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ o.jsx(hy, {}) }),
              d === "chat" && /* @__PURE__ */ o.jsx("div", { className: "animate-fade-in h-full", children: /* @__PURE__ */ o.jsx(Ay, {}) }),
              d === "messages" && /* @__PURE__ */ o.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ o.jsx(zy, {}) }),
              d === "news" && /* @__PURE__ */ o.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ o.jsx(Ty, {}) })
            ]
          }
        ),
        d !== "chat" && /* @__PURE__ */ o.jsx(Ny, {})
      ]
    }
  );
}
function My({ message: c, isVisible: d, onDismiss: f, onOpen: s }) {
  const [p, b] = xt.useState(!1);
  if (xt.useEffect(() => {
    if (!d) {
      b(!0);
      const _ = setTimeout(() => b(!1), 300);
      return () => clearTimeout(_);
    }
  }, [d]), !d && !p) return null;
  const S = c.length > 80 ? c.substring(0, 80) + "..." : c;
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: Lt(
        "absolute bottom-20 right-0 transition-all duration-300 ease-out",
        d ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      ),
      style: { right: "80px" },
      children: /* @__PURE__ */ o.jsxs("div", { className: "bg-white rounded-[20px] shadow-2xl border border-gray-100 p-5 pr-10 w-[320px] relative animate-slide-up", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: (_) => {
              _.stopPropagation(), f();
            },
            className: "absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-90 focus:outline-none",
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ o.jsx(ol, { className: "w-4 h-4 text-gray-400" })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: s,
            className: "text-left w-full group pr-2",
            children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ o.jsx("div", { className: "w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200", children: /* @__PURE__ */ o.jsx(Mp, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ o.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ o.jsx("p", { className: "text-[14px] text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors font-medium mb-1.5", children: S }),
                /* @__PURE__ */ o.jsxs("p", { className: "text-xs text-gray-500 group-hover:text-gray-700 transition-colors font-medium flex items-center gap-1", children: [
                  "Click to reply",
                  /* @__PURE__ */ o.jsx("svg", { className: "w-3 h-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 5l7 7-7 7" }) })
                ] })
              ] })
            ] })
          }
        )
      ] })
    }
  );
}
function _y({ options: c }) {
  const {
    isOpen: d,
    isExpanded: f,
    initialize: s,
    customization: p,
    setCustomization: b,
    setWebhookUrl: S,
    showToast: _,
    toastMessage: A,
    setShowToast: v,
    setIsOpen: R
  } = ze(), E = xt.useCallback(async () => {
    console.log("[AtlisoChatWidget] loadCustomization called with options:", c);
    const Y = c.customization || null;
    if (Y)
      console.log("[AtlisoChatWidget] Using direct customization:", Y), b({
        ...aa,
        ...Y,
        gradient: {
          ...aa.gradient,
          ...Y.gradient || {}
        }
      });
    else if (c.organizationId && c.apiBaseUrl) {
      console.log("[AtlisoChatWidget] Fetching widget config from API", {
        organizationId: c.organizationId,
        apiBaseUrl: c.apiBaseUrl
      });
      const { fetchWidgetConfig: X } = await Promise.resolve().then(() => T0), dt = await X(
        c.organizationId,
        c.apiBaseUrl
      );
      dt ? (b(dt), dt.webhookUrl && S(dt.webhookUrl)) : (console.log("[AtlisoChatWidget] Using default customization (fetch failed)"), b(aa));
    } else
      console.log("[AtlisoChatWidget] Using default customization"), b(aa);
    const K = c.customization?.webhookUrl || c.webhookUrl || aa.webhookUrl;
    K && S(K);
  }, [c, b, S]);
  xt.useEffect(() => {
    s(), E();
  }, [s, E]);
  const k = c.inline === !0, G = c.hideButton === !0, et = () => {
    if (k) return "relative w-full h-full";
    if (f) return "inset-0 bottom-0 right-0";
    switch (p?.position || "bottom-right") {
      case "bottom-left":
        return "fixed bottom-5 left-5 z-[9999]";
      case "top-right":
        return "fixed top-5 right-5 z-[9999]";
      case "top-left":
        return "fixed top-5 left-5 z-[9999]";
      default:
        return "fixed bottom-5 right-5 z-[9999]";
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: Lt(
        "atliso-chat-widget-host",
        et()
      ),
      children: [
        !k && !G && !f && /* @__PURE__ */ o.jsx(bp, {}),
        !k && !d && _ && /* @__PURE__ */ o.jsx(
          My,
          {
            message: A,
            isVisible: _,
            onDismiss: () => v(!1),
            onOpen: () => R(!0)
          }
        ),
        (d || k) && /* @__PURE__ */ o.jsx(Cy, { isInline: k })
      ]
    }
  );
}
const hu = /* @__PURE__ */ new Map();
function Oy() {
  const c = document.querySelectorAll('script[src*="atliso-chat-widget"]');
  for (const f of c) {
    const s = f.getAttribute("data-org-id");
    if (s)
      return console.log("[AtlisoChatWidget] Found data-org-id in script tag:", s), s;
  }
  const d = document.querySelectorAll("script[data-org-id]");
  for (const f of d) {
    const s = f.getAttribute("src");
    if (s && (s.includes("chat") || s.includes("widget"))) {
      const p = f.getAttribute("data-org-id");
      if (p)
        return console.log("[AtlisoChatWidget] Found data-org-id in generic script tag:", p), p;
    }
  }
  return null;
}
function Dy() {
  const c = document.querySelectorAll("script[data-api-url]");
  for (const d of c) {
    const f = d.getAttribute("data-api-url");
    if (f)
      return console.log("[AtlisoChatWidget] Found data-api-url in script tag:", f), f;
  }
  return "http://localhost:3000";
}
async function Bh(c, d = {}) {
  const f = typeof c == "string" ? document.querySelector(c) : c;
  if (!f) {
    console.error("[AtlisoChatWidget] Mount target not found:", c);
    return;
  }
  if (hu.has(f)) {
    console.warn("[AtlisoChatWidget] Widget already mounted on target:", c);
    return;
  }
  !d.webhookUrl && !d.customization?.webhookUrl && !d.organizationId && console.warn("[AtlisoChatWidget] No webhookUrl or organizationId provided");
  const s = v0.createRoot(f);
  s.render(
    /* @__PURE__ */ o.jsx(Ln.StrictMode, { children: /* @__PURE__ */ o.jsx(_y, { options: d }) })
  ), hu.set(f, s), console.log("[AtlisoChatWidget] Widget mounted successfully");
}
function Uy(c) {
  const d = typeof c == "string" ? document.querySelector(c) : c;
  if (!d) return;
  const f = hu.get(d);
  f && (f.unmount(), hu.delete(d), console.log("[AtlisoChatWidget] Widget unmounted"));
}
const Ry = {
  mount: Bh,
  unmount: Uy
};
function bh() {
  const c = Oy();
  if (!c) {
    console.log("[AtlisoChatWidget] No data-org-id found, waiting for manual mount call");
    return;
  }
  console.log("[AtlisoChatWidget] Auto-initializing for organization:", c);
  let d = document.getElementById("atliso-chat-root");
  d || (d = document.createElement("div"), d.id = "atliso-chat-root", document.body.appendChild(d));
  const f = Dy();
  Bh(d, {
    organizationId: c,
    apiBaseUrl: f
  }).catch((s) => {
    console.error("[AtlisoChatWidget] Auto-initialization failed:", s);
  });
}
typeof window < "u" && (window.AtlisoChatWidget = Ry, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", bh) : bh());
export {
  Ry as AtlisoChatWidget,
  Bh as mount,
  Uy as unmount
};
