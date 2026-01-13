function u0(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var _o = { exports: {} }, kn = {};
var Fd;
function c0() {
  if (Fd) return kn;
  Fd = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function f(o, p, b) {
    var S = null;
    if (b !== void 0 && (S = "" + b), p.key !== void 0 && (S = "" + p.key), "key" in p) {
      b = {};
      for (var _ in p)
        _ !== "key" && (b[_] = p[_]);
    } else b = p;
    return p = b.ref, {
      $$typeof: c,
      type: o,
      key: S,
      ref: p !== void 0 ? p : null,
      props: b
    };
  }
  return kn.Fragment = d, kn.jsx = f, kn.jsxs = f, kn;
}
var Wd;
function o0() {
  return Wd || (Wd = 1, _o.exports = c0()), _o.exports;
}
var r = o0(), Oo = { exports: {} }, at = {};
var $d;
function s0() {
  if ($d) return at;
  $d = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), _ = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), B = Symbol.iterator;
  function X(h) {
    return h === null || typeof h != "object" ? null : (h = B && h[B] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var tt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, G = Object.assign, K = {};
  function Z(h, M, D) {
    this.props = h, this.context = M, this.refs = K, this.updater = D || tt;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(h, M) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, M, "setState");
  }, Z.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function ft() {
  }
  ft.prototype = Z.prototype;
  function ut(h, M, D) {
    this.props = h, this.context = M, this.refs = K, this.updater = D || tt;
  }
  var ot = ut.prototype = new ft();
  ot.constructor = ut, G(ot, Z.prototype), ot.isPureReactComponent = !0;
  var wt = Array.isArray;
  function pt() {
  }
  var lt = { H: null, A: null, T: null, S: null }, Y = Object.prototype.hasOwnProperty;
  function Ct(h, M, D) {
    var H = D.ref;
    return {
      $$typeof: c,
      type: h,
      key: M,
      ref: H !== void 0 ? H : null,
      props: D
    };
  }
  function At(h, M) {
    return Ct(h.type, M, h.props);
  }
  function xt(h) {
    return typeof h == "object" && h !== null && h.$$typeof === c;
  }
  function Dt(h) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(D) {
      return M[D];
    });
  }
  var ze = /\/+/g;
  function ae(h, M) {
    return typeof h == "object" && h !== null && h.key != null ? Dt("" + h.key) : M.toString(36);
  }
  function Lt(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(pt, pt) : (h.status = "pending", h.then(
          function(M) {
            h.status === "pending" && (h.status = "fulfilled", h.value = M);
          },
          function(M) {
            h.status === "pending" && (h.status = "rejected", h.reason = M);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function j(h, M, D, H, J) {
    var et = typeof h;
    (et === "undefined" || et === "boolean") && (h = null);
    var W = !1;
    if (h === null) W = !0;
    else
      switch (et) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case c:
            case d:
              W = !0;
              break;
            case R:
              return W = h._init, j(
                W(h._payload),
                M,
                D,
                H,
                J
              );
          }
      }
    if (W)
      return J = J(h), W = H === "" ? "." + ae(h, 0) : H, wt(J) ? (D = "", W != null && (D = W.replace(ze, "$&/") + "/"), j(J, M, D, "", function(ie) {
        return ie;
      })) : J != null && (xt(J) && (J = At(
        J,
        D + (J.key == null || h && h.key === J.key ? "" : ("" + J.key).replace(
          ze,
          "$&/"
        ) + "/") + W
      )), M.push(J)), 1;
    W = 0;
    var Rt = H === "" ? "." : H + ":";
    if (wt(h))
      for (var ht = 0; ht < h.length; ht++)
        H = h[ht], et = Rt + ae(H, ht), W += j(
          H,
          M,
          D,
          et,
          J
        );
    else if (ht = X(h), typeof ht == "function")
      for (h = ht.call(h), ht = 0; !(H = h.next()).done; )
        H = H.value, et = Rt + ae(H, ht++), W += j(
          H,
          M,
          D,
          et,
          J
        );
    else if (et === "object") {
      if (typeof h.then == "function")
        return j(
          Lt(h),
          M,
          D,
          H,
          J
        );
      throw M = String(h), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return W;
  }
  function k(h, M, D) {
    if (h == null) return h;
    var H = [], J = 0;
    return j(h, H, "", "", function(et) {
      return M.call(D, et, J++);
    }), H;
  }
  function N(h) {
    if (h._status === -1) {
      var M = h._result;
      M = M(), M.then(
        function(D) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = D);
        },
        function(D) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = D);
        }
      ), h._status === -1 && (h._status = 0, h._result = M);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var P = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  }, $ = {
    map: k,
    forEach: function(h, M, D) {
      k(
        h,
        function() {
          M.apply(this, arguments);
        },
        D
      );
    },
    count: function(h) {
      var M = 0;
      return k(h, function() {
        M++;
      }), M;
    },
    toArray: function(h) {
      return k(h, function(M) {
        return M;
      }) || [];
    },
    only: function(h) {
      if (!xt(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  };
  return at.Activity = E, at.Children = $, at.Component = Z, at.Fragment = f, at.Profiler = p, at.PureComponent = ut, at.StrictMode = o, at.Suspense = A, at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = lt, at.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return lt.H.useMemoCache(h);
    }
  }, at.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, at.cacheSignal = function() {
    return null;
  }, at.cloneElement = function(h, M, D) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var H = G({}, h.props), J = h.key;
    if (M != null)
      for (et in M.key !== void 0 && (J = "" + M.key), M)
        !Y.call(M, et) || et === "key" || et === "__self" || et === "__source" || et === "ref" && M.ref === void 0 || (H[et] = M[et]);
    var et = arguments.length - 2;
    if (et === 1) H.children = D;
    else if (1 < et) {
      for (var W = Array(et), Rt = 0; Rt < et; Rt++)
        W[Rt] = arguments[Rt + 2];
      H.children = W;
    }
    return Ct(h.type, J, H);
  }, at.createContext = function(h) {
    return h = {
      $$typeof: S,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: b,
      _context: h
    }, h;
  }, at.createElement = function(h, M, D) {
    var H, J = {}, et = null;
    if (M != null)
      for (H in M.key !== void 0 && (et = "" + M.key), M)
        Y.call(M, H) && H !== "key" && H !== "__self" && H !== "__source" && (J[H] = M[H]);
    var W = arguments.length - 2;
    if (W === 1) J.children = D;
    else if (1 < W) {
      for (var Rt = Array(W), ht = 0; ht < W; ht++)
        Rt[ht] = arguments[ht + 2];
      J.children = Rt;
    }
    if (h && h.defaultProps)
      for (H in W = h.defaultProps, W)
        J[H] === void 0 && (J[H] = W[H]);
    return Ct(h, et, J);
  }, at.createRef = function() {
    return { current: null };
  }, at.forwardRef = function(h) {
    return { $$typeof: _, render: h };
  }, at.isValidElement = xt, at.lazy = function(h) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: h },
      _init: N
    };
  }, at.memo = function(h, M) {
    return {
      $$typeof: v,
      type: h,
      compare: M === void 0 ? null : M
    };
  }, at.startTransition = function(h) {
    var M = lt.T, D = {};
    lt.T = D;
    try {
      var H = h(), J = lt.S;
      J !== null && J(D, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(pt, P);
    } catch (et) {
      P(et);
    } finally {
      M !== null && D.types !== null && (M.types = D.types), lt.T = M;
    }
  }, at.unstable_useCacheRefresh = function() {
    return lt.H.useCacheRefresh();
  }, at.use = function(h) {
    return lt.H.use(h);
  }, at.useActionState = function(h, M, D) {
    return lt.H.useActionState(h, M, D);
  }, at.useCallback = function(h, M) {
    return lt.H.useCallback(h, M);
  }, at.useContext = function(h) {
    return lt.H.useContext(h);
  }, at.useDebugValue = function() {
  }, at.useDeferredValue = function(h, M) {
    return lt.H.useDeferredValue(h, M);
  }, at.useEffect = function(h, M) {
    return lt.H.useEffect(h, M);
  }, at.useEffectEvent = function(h) {
    return lt.H.useEffectEvent(h);
  }, at.useId = function() {
    return lt.H.useId();
  }, at.useImperativeHandle = function(h, M, D) {
    return lt.H.useImperativeHandle(h, M, D);
  }, at.useInsertionEffect = function(h, M) {
    return lt.H.useInsertionEffect(h, M);
  }, at.useLayoutEffect = function(h, M) {
    return lt.H.useLayoutEffect(h, M);
  }, at.useMemo = function(h, M) {
    return lt.H.useMemo(h, M);
  }, at.useOptimistic = function(h, M) {
    return lt.H.useOptimistic(h, M);
  }, at.useReducer = function(h, M, D) {
    return lt.H.useReducer(h, M, D);
  }, at.useRef = function(h) {
    return lt.H.useRef(h);
  }, at.useState = function(h) {
    return lt.H.useState(h);
  }, at.useSyncExternalStore = function(h, M, D) {
    return lt.H.useSyncExternalStore(
      h,
      M,
      D
    );
  }, at.useTransition = function() {
    return lt.H.useTransition();
  }, at.version = "19.2.3", at;
}
var Id;
function Vo() {
  return Id || (Id = 1, Oo.exports = s0()), Oo.exports;
}
var yt = Vo();
const Yn = /* @__PURE__ */ u0(yt);
var Uo = { exports: {} }, qn = {}, Do = { exports: {} }, Ro = {};
var Pd;
function r0() {
  return Pd || (Pd = 1, (function(c) {
    function d(j, k) {
      var N = j.length;
      j.push(k);
      t: for (; 0 < N; ) {
        var P = N - 1 >>> 1, $ = j[P];
        if (0 < p($, k))
          j[P] = k, j[N] = $, N = P;
        else break t;
      }
    }
    function f(j) {
      return j.length === 0 ? null : j[0];
    }
    function o(j) {
      if (j.length === 0) return null;
      var k = j[0], N = j.pop();
      if (N !== k) {
        j[0] = N;
        t: for (var P = 0, $ = j.length, h = $ >>> 1; P < h; ) {
          var M = 2 * (P + 1) - 1, D = j[M], H = M + 1, J = j[H];
          if (0 > p(D, N))
            H < $ && 0 > p(J, D) ? (j[P] = J, j[H] = N, P = H) : (j[P] = D, j[M] = N, P = M);
          else if (H < $ && 0 > p(J, N))
            j[P] = J, j[H] = N, P = H;
          else break t;
        }
      }
      return k;
    }
    function p(j, k) {
      var N = j.sortIndex - k.sortIndex;
      return N !== 0 ? N : j.id - k.id;
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
    var A = [], v = [], R = 1, E = null, B = 3, X = !1, tt = !1, G = !1, K = !1, Z = typeof setTimeout == "function" ? setTimeout : null, ft = typeof clearTimeout == "function" ? clearTimeout : null, ut = typeof setImmediate < "u" ? setImmediate : null;
    function ot(j) {
      for (var k = f(v); k !== null; ) {
        if (k.callback === null) o(v);
        else if (k.startTime <= j)
          o(v), k.sortIndex = k.expirationTime, d(A, k);
        else break;
        k = f(v);
      }
    }
    function wt(j) {
      if (G = !1, ot(j), !tt)
        if (f(A) !== null)
          tt = !0, pt || (pt = !0, Dt());
        else {
          var k = f(v);
          k !== null && Lt(wt, k.startTime - j);
        }
    }
    var pt = !1, lt = -1, Y = 5, Ct = -1;
    function At() {
      return K ? !0 : !(c.unstable_now() - Ct < Y);
    }
    function xt() {
      if (K = !1, pt) {
        var j = c.unstable_now();
        Ct = j;
        var k = !0;
        try {
          t: {
            tt = !1, G && (G = !1, ft(lt), lt = -1), X = !0;
            var N = B;
            try {
              e: {
                for (ot(j), E = f(A); E !== null && !(E.expirationTime > j && At()); ) {
                  var P = E.callback;
                  if (typeof P == "function") {
                    E.callback = null, B = E.priorityLevel;
                    var $ = P(
                      E.expirationTime <= j
                    );
                    if (j = c.unstable_now(), typeof $ == "function") {
                      E.callback = $, ot(j), k = !0;
                      break e;
                    }
                    E === f(A) && o(A), ot(j);
                  } else o(A);
                  E = f(A);
                }
                if (E !== null) k = !0;
                else {
                  var h = f(v);
                  h !== null && Lt(
                    wt,
                    h.startTime - j
                  ), k = !1;
                }
              }
              break t;
            } finally {
              E = null, B = N, X = !1;
            }
            k = void 0;
          }
        } finally {
          k ? Dt() : pt = !1;
        }
      }
    }
    var Dt;
    if (typeof ut == "function")
      Dt = function() {
        ut(xt);
      };
    else if (typeof MessageChannel < "u") {
      var ze = new MessageChannel(), ae = ze.port2;
      ze.port1.onmessage = xt, Dt = function() {
        ae.postMessage(null);
      };
    } else
      Dt = function() {
        Z(xt, 0);
      };
    function Lt(j, k) {
      lt = Z(function() {
        j(c.unstable_now());
      }, k);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, c.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < j ? Math.floor(1e3 / j) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, c.unstable_next = function(j) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = B;
      }
      var N = B;
      B = k;
      try {
        return j();
      } finally {
        B = N;
      }
    }, c.unstable_requestPaint = function() {
      K = !0;
    }, c.unstable_runWithPriority = function(j, k) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var N = B;
      B = j;
      try {
        return k();
      } finally {
        B = N;
      }
    }, c.unstable_scheduleCallback = function(j, k, N) {
      var P = c.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? P + N : P) : N = P, j) {
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
      return $ = N + $, j = {
        id: R++,
        callback: k,
        priorityLevel: j,
        startTime: N,
        expirationTime: $,
        sortIndex: -1
      }, N > P ? (j.sortIndex = N, d(v, j), f(A) === null && j === f(v) && (G ? (ft(lt), lt = -1) : G = !0, Lt(wt, N - P))) : (j.sortIndex = $, d(A, j), tt || X || (tt = !0, pt || (pt = !0, Dt()))), j;
    }, c.unstable_shouldYield = At, c.unstable_wrapCallback = function(j) {
      var k = B;
      return function() {
        var N = B;
        B = k;
        try {
          return j.apply(this, arguments);
        } finally {
          B = N;
        }
      };
    };
  })(Ro)), Ro;
}
var tm;
function f0() {
  return tm || (tm = 1, Do.exports = r0()), Do.exports;
}
var Ho = { exports: {} }, le = {};
var em;
function d0() {
  if (em) return le;
  em = 1;
  var c = Vo();
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
  var o = {
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
  return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, le.createPortal = function(A, v) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(d(299));
    return b(A, v, null, R);
  }, le.flushSync = function(A) {
    var v = S.T, R = o.p;
    try {
      if (S.T = null, o.p = 2, A) return A();
    } finally {
      S.T = v, o.p = R, o.d.f();
    }
  }, le.preconnect = function(A, v) {
    typeof A == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, o.d.C(A, v));
  }, le.prefetchDNS = function(A) {
    typeof A == "string" && o.d.D(A);
  }, le.preinit = function(A, v) {
    if (typeof A == "string" && v && typeof v.as == "string") {
      var R = v.as, E = _(R, v.crossOrigin), B = typeof v.integrity == "string" ? v.integrity : void 0, X = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      R === "style" ? o.d.S(
        A,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: E,
          integrity: B,
          fetchPriority: X
        }
      ) : R === "script" && o.d.X(A, {
        crossOrigin: E,
        integrity: B,
        fetchPriority: X,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, le.preinitModule = function(A, v) {
    if (typeof A == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var R = _(
            v.as,
            v.crossOrigin
          );
          o.d.M(A, {
            crossOrigin: R,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && o.d.M(A);
  }, le.preload = function(A, v) {
    if (typeof A == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var R = v.as, E = _(R, v.crossOrigin);
      o.d.L(A, R, {
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
  }, le.preloadModule = function(A, v) {
    if (typeof A == "string")
      if (v) {
        var R = _(v.as, v.crossOrigin);
        o.d.m(A, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: R,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else o.d.m(A);
  }, le.requestFormReset = function(A) {
    o.d.r(A);
  }, le.unstable_batchedUpdates = function(A, v) {
    return A(v);
  }, le.useFormState = function(A, v, R) {
    return S.H.useFormState(A, v, R);
  }, le.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, le.version = "19.2.3", le;
}
var lm;
function m0() {
  if (lm) return Ho.exports;
  lm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
  }
  return c(), Ho.exports = d0(), Ho.exports;
}
var am;
function h0() {
  if (am) return qn;
  am = 1;
  var c = f0(), d = Vo(), f = m0();
  function o(t) {
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
      throw Error(o(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = b(t), e === null) throw Error(o(188));
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
        throw Error(o(188));
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var u = !1, s = n.child; s; ) {
          if (s === l) {
            u = !0, l = n, a = i;
            break;
          }
          if (s === a) {
            u = !0, a = n, l = i;
            break;
          }
          s = s.sibling;
        }
        if (!u) {
          for (s = i.child; s; ) {
            if (s === l) {
              u = !0, l = i, a = n;
              break;
            }
            if (s === a) {
              u = !0, a = i, l = n;
              break;
            }
            s = s.sibling;
          }
          if (!u) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
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
  var E = Object.assign, B = /* @__PURE__ */ Symbol.for("react.element"), X = /* @__PURE__ */ Symbol.for("react.transitional.element"), tt = /* @__PURE__ */ Symbol.for("react.portal"), G = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), Z = /* @__PURE__ */ Symbol.for("react.profiler"), ft = /* @__PURE__ */ Symbol.for("react.consumer"), ut = /* @__PURE__ */ Symbol.for("react.context"), ot = /* @__PURE__ */ Symbol.for("react.forward_ref"), wt = /* @__PURE__ */ Symbol.for("react.suspense"), pt = /* @__PURE__ */ Symbol.for("react.suspense_list"), lt = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), Ct = /* @__PURE__ */ Symbol.for("react.activity"), At = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), xt = Symbol.iterator;
  function Dt(t) {
    return t === null || typeof t != "object" ? null : (t = xt && t[xt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ze = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ae(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ze ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case G:
        return "Fragment";
      case Z:
        return "Profiler";
      case K:
        return "StrictMode";
      case wt:
        return "Suspense";
      case pt:
        return "SuspenseList";
      case Ct:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case tt:
          return "Portal";
        case ut:
          return t.displayName || "Context";
        case ft:
          return (t._context.displayName || "Context") + ".Consumer";
        case ot:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case lt:
          return e = t.displayName || null, e !== null ? e : ae(t.type) || "Memo";
        case Y:
          e = t._payload, t = t._init;
          try {
            return ae(t(e));
          } catch {
          }
      }
    return null;
  }
  var Lt = Array.isArray, j = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, P = [], $ = -1;
  function h(t) {
    return { current: t };
  }
  function M(t) {
    0 > $ || (t.current = P[$], P[$] = null, $--);
  }
  function D(t, e) {
    $++, P[$] = t.current, t.current = e;
  }
  var H = h(null), J = h(null), et = h(null), W = h(null);
  function Rt(t, e) {
    switch (D(et, e), D(J, t), D(H, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? vd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = vd(e), t = bd(e, t);
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
    M(H), D(H, t);
  }
  function ht() {
    M(H), M(J), M(et);
  }
  function ie(t) {
    t.memoizedState !== null && D(W, t);
    var e = H.current, l = bd(e, t.type);
    e !== l && (D(J, t), D(H, l));
  }
  function sl(t) {
    J.current === t && (M(H), M(J)), W.current === t && (M(W), Dn._currentValue = N);
  }
  var rl, Ko;
  function Bl(t) {
    if (rl === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        rl = e && e[1] || "", Ko = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + rl + t + Ko;
  }
  var mu = !1;
  function hu(t, e) {
    if (!t || mu) return "";
    mu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (T) {
                  var z = T;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (T) {
                  z = T;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                z = T;
              }
              (U = t()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (T) {
            if (T && z && typeof T.stack == "string")
              return [T.stack, z.stack];
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
      var i = a.DetermineComponentFrameRoot(), u = i[0], s = i[1];
      if (u && s) {
        var m = u.split(`
`), w = s.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < w.length && !w[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === w.length)
          for (a = m.length - 1, n = w.length - 1; 1 <= a && 0 <= n && m[a] !== w[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== w[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== w[n]) {
                  var C = `
` + m[a].replace(" at new ", " at ");
                  return t.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", t.displayName)), C;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      mu = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Bl(l) : "";
  }
  function Bm(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Bl(t.type);
      case 16:
        return Bl("Lazy");
      case 13:
        return t.child !== e && e !== null ? Bl("Suspense Fallback") : Bl("Suspense");
      case 19:
        return Bl("SuspenseList");
      case 0:
      case 15:
        return hu(t.type, !1);
      case 11:
        return hu(t.type.render, !1);
      case 1:
        return hu(t.type, !0);
      case 31:
        return Bl("Activity");
      default:
        return "";
    }
  }
  function Jo(t) {
    try {
      var e = "", l = null;
      do
        e += Bm(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var gu = Object.prototype.hasOwnProperty, pu = c.unstable_scheduleCallback, yu = c.unstable_cancelCallback, km = c.unstable_shouldYield, qm = c.unstable_requestPaint, me = c.unstable_now, Gm = c.unstable_getCurrentPriorityLevel, Fo = c.unstable_ImmediatePriority, Wo = c.unstable_UserBlockingPriority, Xn = c.unstable_NormalPriority, Ym = c.unstable_LowPriority, $o = c.unstable_IdlePriority, Lm = c.log, Vm = c.unstable_setDisableYieldValue, Qa = null, he = null;
  function fl(t) {
    if (typeof Lm == "function" && Vm(t), he && typeof he.setStrictMode == "function")
      try {
        he.setStrictMode(Qa, t);
      } catch {
      }
  }
  var ge = Math.clz32 ? Math.clz32 : Zm, Xm = Math.log, Qm = Math.LN2;
  function Zm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Xm(t) / Qm | 0) | 0;
  }
  var Qn = 256, Zn = 262144, Kn = 4194304;
  function kl(t) {
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
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~i, a !== 0 ? n = kl(a) : (u &= s, u !== 0 ? n = kl(u) : l || (l = s & ~t, l !== 0 && (n = kl(l))))) : (s = a & ~i, s !== 0 ? n = kl(s) : u !== 0 ? n = kl(u) : l || (l = a & ~t, l !== 0 && (n = kl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & i) === 0 && (i = n & -n, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function Za(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Km(t, e) {
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
  function Io() {
    var t = Kn;
    return Kn <<= 1, (Kn & 62914560) === 0 && (Kn = 4194304), t;
  }
  function vu(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ka(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Jm(t, e, l, a, n, i) {
    var u = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var s = t.entanglements, m = t.expirationTimes, w = t.hiddenUpdates;
    for (l = u & ~l; 0 < l; ) {
      var C = 31 - ge(l), U = 1 << C;
      s[C] = 0, m[C] = -1;
      var z = w[C];
      if (z !== null)
        for (w[C] = null, C = 0; C < z.length; C++) {
          var T = z[C];
          T !== null && (T.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && Po(t, a, 0), i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~e));
  }
  function Po(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ge(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function ts(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - ge(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function es(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : bu(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function bu(t) {
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
  function xu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ls() {
    var t = k.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ld(t.type));
  }
  function as(t, e) {
    var l = k.p;
    try {
      return k.p = t, e();
    } finally {
      k.p = l;
    }
  }
  var dl = Math.random().toString(36).slice(2), $t = "__reactFiber$" + dl, ue = "__reactProps$" + dl, na = "__reactContainer$" + dl, Su = "__reactEvents$" + dl, Fm = "__reactListeners$" + dl, Wm = "__reactHandles$" + dl, ns = "__reactResources$" + dl, Ja = "__reactMarker$" + dl;
  function wu(t) {
    delete t[$t], delete t[ue], delete t[Su], delete t[Fm], delete t[Wm];
  }
  function ia(t) {
    var e = t[$t];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[na] || l[$t]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = jd(t); t !== null; ) {
            if (l = t[$t]) return l;
            t = jd(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function ua(t) {
    if (t = t[$t] || t[na]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Fa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function ca(t) {
    var e = t[ns];
    return e || (e = t[ns] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Ft(t) {
    t[Ja] = !0;
  }
  var is = /* @__PURE__ */ new Set(), us = {};
  function ql(t, e) {
    oa(t, e), oa(t + "Capture", e);
  }
  function oa(t, e) {
    for (us[t] = e, t = 0; t < e.length; t++)
      is.add(e[t]);
  }
  var $m = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), cs = {}, os = {};
  function Im(t) {
    return gu.call(os, t) ? !0 : gu.call(cs, t) ? !1 : $m.test(t) ? os[t] = !0 : (cs[t] = !0, !1);
  }
  function Fn(t, e, l) {
    if (Im(e))
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
  function Te(t) {
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
  function ss(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Pm(t, e, l) {
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
  function Au(t) {
    if (!t._valueTracker) {
      var e = ss(t) ? "checked" : "value";
      t._valueTracker = Pm(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function rs(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = ss(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function $n(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var th = /[\n"\\]/g;
  function je(t) {
    return t.replace(
      th,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function zu(t, e, l, a, n, i, u, s) {
    t.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.type = u : t.removeAttribute("type"), e != null ? u === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Te(e)) : t.value !== "" + Te(e) && (t.value = "" + Te(e)) : u !== "submit" && u !== "reset" || t.removeAttribute("value"), e != null ? Tu(t, u, Te(e)) : l != null ? Tu(t, u, Te(l)) : a != null && t.removeAttribute("value"), n == null && i != null && (t.defaultChecked = !!i), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + Te(s) : t.removeAttribute("name");
  }
  function fs(t, e, l, a, n, i, u, s) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        Au(t);
        return;
      }
      l = l != null ? "" + Te(l) : "", e = e != null ? "" + Te(e) : l, s || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = s ? t.checked : !!a, t.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.name = u), Au(t);
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
      for (l = "" + Te(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ds(t, e, l) {
    if (e != null && (e = "" + Te(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Te(l) : "";
  }
  function ms(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (Lt(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = Te(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Au(t);
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
  var eh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hs(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || eh.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function gs(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(o(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && hs(t, n, a);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && hs(t, i, e[i]);
  }
  function ju(t) {
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
  var lh = /* @__PURE__ */ new Map([
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
  ]), ah = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function In(t) {
    return ah.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Xe() {
  }
  var Eu = null;
  function Nu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var fa = null, da = null;
  function ps(t) {
    var e = ua(t);
    if (e && (t = e.stateNode)) {
      var l = t[ue] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (zu(
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
              'input[name="' + je(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ue] || null;
                if (!n) throw Error(o(90));
                zu(
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
              a = l[e], a.form === t.form && rs(a);
          }
          break t;
        case "textarea":
          ds(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && sa(t, !!l.multiple, e, !1);
      }
    }
  }
  var Mu = !1;
  function ys(t, e, l) {
    if (Mu) return t(e, l);
    Mu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Mu = !1, (fa !== null || da !== null) && (qi(), fa && (e = fa, t = da, da = fa = null, ps(e), t)))
        for (e = 0; e < t.length; e++) ps(t[e]);
    }
  }
  function Wa(t, e) {
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
        o(231, e, typeof l)
      );
    return l;
  }
  var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cu = !1;
  if (Qe)
    try {
      var $a = {};
      Object.defineProperty($a, "passive", {
        get: function() {
          Cu = !0;
        }
      }), window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
    } catch {
      Cu = !1;
    }
  var ml = null, _u = null, Pn = null;
  function vs() {
    if (Pn) return Pn;
    var t, e = _u, l = e.length, a, n = "value" in ml ? ml.value : ml.textContent, i = n.length;
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
  function bs() {
    return !1;
  }
  function ce(t) {
    function e(l, a, n, i, u) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var s in t)
        t.hasOwnProperty(s) && (l = t[s], this[s] = l ? l(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ei : bs, this.isPropagationStopped = bs, this;
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
  }, li = ce(Gl), Ia = E({}, Gl, { view: 0, detail: 0 }), nh = ce(Ia), Ou, Uu, Pa, ai = E({}, Ia, {
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
    getModifierState: Ru,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Pa && (Pa && t.type === "mousemove" ? (Ou = t.screenX - Pa.screenX, Uu = t.screenY - Pa.screenY) : Uu = Ou = 0, Pa = t), Ou);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Uu;
    }
  }), xs = ce(ai), ih = E({}, ai, { dataTransfer: 0 }), uh = ce(ih), ch = E({}, Ia, { relatedTarget: 0 }), Du = ce(ch), oh = E({}, Gl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sh = ce(oh), rh = E({}, Gl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), fh = ce(rh), dh = E({}, Gl, { data: 0 }), Ss = ce(dh), mh = {
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
  }, hh = {
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
  }, gh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ph(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = gh[t]) ? !!e[t] : !1;
  }
  function Ru() {
    return ph;
  }
  var yh = E({}, Ia, {
    key: function(t) {
      if (t.key) {
        var e = mh[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = ti(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? hh[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ru,
    charCode: function(t) {
      return t.type === "keypress" ? ti(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? ti(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), vh = ce(yh), bh = E({}, ai, {
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
  }), ws = ce(bh), xh = E({}, Ia, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ru
  }), Sh = ce(xh), wh = E({}, Gl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ah = ce(wh), zh = E({}, ai, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Th = ce(zh), jh = E({}, Gl, {
    newState: 0,
    oldState: 0
  }), Eh = ce(jh), Nh = [9, 13, 27, 32], Hu = Qe && "CompositionEvent" in window, tn = null;
  Qe && "documentMode" in document && (tn = document.documentMode);
  var Mh = Qe && "TextEvent" in window && !tn, As = Qe && (!Hu || tn && 8 < tn && 11 >= tn), zs = " ", Ts = !1;
  function js(t, e) {
    switch (t) {
      case "keyup":
        return Nh.indexOf(e.keyCode) !== -1;
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
  function Es(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ma = !1;
  function Ch(t, e) {
    switch (t) {
      case "compositionend":
        return Es(e);
      case "keypress":
        return e.which !== 32 ? null : (Ts = !0, zs);
      case "textInput":
        return t = e.data, t === zs && Ts ? null : t;
      default:
        return null;
    }
  }
  function _h(t, e) {
    if (ma)
      return t === "compositionend" || !Hu && js(t, e) ? (t = vs(), Pn = _u = ml = null, ma = !1, t) : null;
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
        return As && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Oh = {
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
  function Ns(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Oh[t.type] : e === "textarea";
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
  var en = null, ln = null;
  function Uh(t) {
    dd(t, 0);
  }
  function ni(t) {
    var e = Fa(t);
    if (rs(e)) return t;
  }
  function Cs(t, e) {
    if (t === "change") return e;
  }
  var _s = !1;
  if (Qe) {
    var Bu;
    if (Qe) {
      var ku = "oninput" in document;
      if (!ku) {
        var Os = document.createElement("div");
        Os.setAttribute("oninput", "return;"), ku = typeof Os.oninput == "function";
      }
      Bu = ku;
    } else Bu = !1;
    _s = Bu && (!document.documentMode || 9 < document.documentMode);
  }
  function Us() {
    en && (en.detachEvent("onpropertychange", Ds), ln = en = null);
  }
  function Ds(t) {
    if (t.propertyName === "value" && ni(ln)) {
      var e = [];
      Ms(
        e,
        ln,
        t,
        Nu(t)
      ), ys(Uh, e);
    }
  }
  function Dh(t, e, l) {
    t === "focusin" ? (Us(), en = e, ln = l, en.attachEvent("onpropertychange", Ds)) : t === "focusout" && Us();
  }
  function Rh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ni(ln);
  }
  function Hh(t, e) {
    if (t === "click") return ni(e);
  }
  function Bh(t, e) {
    if (t === "input" || t === "change")
      return ni(e);
  }
  function kh(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var pe = typeof Object.is == "function" ? Object.is : kh;
  function an(t, e) {
    if (pe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!gu.call(e, n) || !pe(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Rs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Hs(t, e) {
    var l = Rs(t);
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
      l = Rs(l);
    }
  }
  function Bs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Bs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function ks(t) {
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
  function qu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var qh = Qe && "documentMode" in document && 11 >= document.documentMode, ha = null, Gu = null, nn = null, Yu = !1;
  function qs(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Yu || ha == null || ha !== $n(a) || (a = ha, "selectionStart" in a && qu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), nn && an(nn, a) || (nn = a, a = Zi(Gu, "onSelect"), 0 < a.length && (e = new li(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = ha)));
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
  }, Lu = {}, Gs = {};
  Qe && (Gs = document.createElement("div").style, "AnimationEvent" in window || (delete ga.animationend.animation, delete ga.animationiteration.animation, delete ga.animationstart.animation), "TransitionEvent" in window || delete ga.transitionend.transition);
  function Ll(t) {
    if (Lu[t]) return Lu[t];
    if (!ga[t]) return t;
    var e = ga[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Gs)
        return Lu[t] = e[l];
    return t;
  }
  var Ys = Ll("animationend"), Ls = Ll("animationiteration"), Vs = Ll("animationstart"), Gh = Ll("transitionrun"), Yh = Ll("transitionstart"), Lh = Ll("transitioncancel"), Xs = Ll("transitionend"), Qs = /* @__PURE__ */ new Map(), Vu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Vu.push("scrollEnd");
  function Re(t, e) {
    Qs.set(t, e), ql(e, [t]);
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
  }, Ee = [], pa = 0, Xu = 0;
  function ui() {
    for (var t = pa, e = Xu = pa = 0; e < t; ) {
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
      i !== 0 && Zs(l, n, i);
    }
  }
  function ci(t, e, l, a) {
    Ee[pa++] = t, Ee[pa++] = e, Ee[pa++] = l, Ee[pa++] = a, Xu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Qu(t, e, l, a) {
    return ci(t, e, l, a), oi(t);
  }
  function Vl(t, e) {
    return ci(t, null, null, e), oi(t);
  }
  function Zs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = t.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (n = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, n && e !== null && (n = 31 - ge(l), t = i.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), i) : null;
  }
  function oi(t) {
    if (50 < En)
      throw En = 0, to = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ya = {};
  function Vh(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ye(t, e, l, a) {
    return new Vh(t, e, l, a);
  }
  function Zu(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ze(t, e) {
    var l = t.alternate;
    return l === null ? (l = ye(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Ks(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function si(t, e, l, a, n, i) {
    var u = 0;
    if (a = t, typeof t == "function") Zu(t) && (u = 1);
    else if (typeof t == "string")
      u = Jg(
        t,
        l,
        H.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Ct:
          return t = ye(31, l, e, n), t.elementType = Ct, t.lanes = i, t;
        case G:
          return Xl(l.children, n, i, e);
        case K:
          u = 8, n |= 24;
          break;
        case Z:
          return t = ye(12, l, e, n | 2), t.elementType = Z, t.lanes = i, t;
        case wt:
          return t = ye(13, l, e, n), t.elementType = wt, t.lanes = i, t;
        case pt:
          return t = ye(19, l, e, n), t.elementType = pt, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ut:
                u = 10;
                break t;
              case ft:
                u = 9;
                break t;
              case ot:
                u = 11;
                break t;
              case lt:
                u = 14;
                break t;
              case Y:
                u = 16, a = null;
                break t;
            }
          u = 29, l = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = ye(u, l, e, n), e.elementType = t, e.type = a, e.lanes = i, e;
  }
  function Xl(t, e, l, a) {
    return t = ye(7, t, a, e), t.lanes = l, t;
  }
  function Ku(t, e, l) {
    return t = ye(6, t, null, e), t.lanes = l, t;
  }
  function Js(t) {
    var e = ye(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Ju(t, e, l) {
    return e = ye(
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
  var Fs = /* @__PURE__ */ new WeakMap();
  function Ne(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Fs.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Jo(e)
      }, Fs.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Jo(e)
    };
  }
  var va = [], ba = 0, ri = null, un = 0, Me = [], Ce = 0, hl = null, ke = 1, qe = "";
  function Ke(t, e) {
    va[ba++] = un, va[ba++] = ri, ri = t, un = e;
  }
  function Ws(t, e, l) {
    Me[Ce++] = ke, Me[Ce++] = qe, Me[Ce++] = hl, hl = t;
    var a = ke;
    t = qe;
    var n = 32 - ge(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - ge(e) + n;
    if (30 < i) {
      var u = n - n % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, n -= u, ke = 1 << 32 - ge(e) + n | l << n | a, qe = i + t;
    } else
      ke = 1 << i | l << n | a, qe = t;
  }
  function Fu(t) {
    t.return !== null && (Ke(t, 1), Ws(t, 1, 0));
  }
  function Wu(t) {
    for (; t === ri; )
      ri = va[--ba], va[ba] = null, un = va[--ba], va[ba] = null;
    for (; t === hl; )
      hl = Me[--Ce], Me[Ce] = null, qe = Me[--Ce], Me[Ce] = null, ke = Me[--Ce], Me[Ce] = null;
  }
  function $s(t, e) {
    Me[Ce++] = ke, Me[Ce++] = qe, Me[Ce++] = hl, ke = e.id, qe = e.overflow, hl = t;
  }
  var It = null, _t = null, gt = !1, gl = null, _e = !1, $u = Error(o(519));
  function pl(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw cn(Ne(e, t)), $u;
  }
  function Is(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[$t] = t, e[ue] = a, l) {
      case "dialog":
        rt("cancel", e), rt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        rt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Mn.length; l++)
          rt(Mn[l], e);
        break;
      case "source":
        rt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        rt("error", e), rt("load", e);
        break;
      case "details":
        rt("toggle", e);
        break;
      case "input":
        rt("invalid", e), fs(
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
        rt("invalid", e);
        break;
      case "textarea":
        rt("invalid", e), ms(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || pd(e.textContent, l) ? (a.popover != null && (rt("beforetoggle", e), rt("toggle", e)), a.onScroll != null && rt("scroll", e), a.onScrollEnd != null && rt("scrollend", e), a.onClick != null && (e.onclick = Xe), e = !0) : e = !1, e || pl(t, !0);
  }
  function Ps(t) {
    for (It = t.return; It; )
      switch (It.tag) {
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
          It = It.return;
      }
  }
  function xa(t) {
    if (t !== It) return !1;
    if (!gt) return Ps(t), gt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || po(t.type, t.memoizedProps)), l = !l), l && _t && pl(t), Ps(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      _t = Td(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      _t = Td(t);
    } else
      e === 27 ? (e = _t, Cl(t.type) ? (t = So, So = null, _t = t) : _t = e) : _t = It ? Ue(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ql() {
    _t = It = null, gt = !1;
  }
  function Iu() {
    var t = gl;
    return t !== null && (fe === null ? fe = t : fe.push.apply(
      fe,
      t
    ), gl = null), t;
  }
  function cn(t) {
    gl === null ? gl = [t] : gl.push(t);
  }
  var Pu = h(null), Zl = null, Je = null;
  function yl(t, e, l) {
    D(Pu, e._currentValue), e._currentValue = l;
  }
  function Fe(t) {
    t._currentValue = Pu.current, M(Pu);
  }
  function tc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function ec(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var s = i;
          i = n;
          for (var m = 0; m < e.length; m++)
            if (s.context === e[m]) {
              i.lanes |= l, s = i.alternate, s !== null && (s.lanes |= l), tc(
                i.return,
                l,
                t
              ), a || (u = null);
              break t;
            }
          i = s.next;
        }
      } else if (n.tag === 18) {
        if (u = n.return, u === null) throw Error(o(341));
        u.lanes |= l, i = u.alternate, i !== null && (i.lanes |= l), tc(u, l, t), u = null;
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
        if (u === null) throw Error(o(387));
        if (u = u.memoizedProps, u !== null) {
          var s = n.type;
          pe(n.pendingProps.value, u.value) || (t !== null ? t.push(s) : t = [s]);
        }
      } else if (n === W.current) {
        if (u = n.alternate, u === null) throw Error(o(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Dn) : t = [Dn]);
      }
      n = n.return;
    }
    t !== null && ec(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function fi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!pe(
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
  function Pt(t) {
    return tr(Zl, t);
  }
  function di(t, e) {
    return Zl === null && Kl(t), tr(t, e);
  }
  function tr(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Je === null) {
      if (t === null) throw Error(o(308));
      Je = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Je = Je.next = e;
    return l;
  }
  var Xh = typeof AbortController < "u" ? AbortController : function() {
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
  }, Qh = c.unstable_scheduleCallback, Zh = c.unstable_NormalPriority, Vt = {
    $$typeof: ut,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function lc() {
    return {
      controller: new Xh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function on(t) {
    t.refCount--, t.refCount === 0 && Qh(Zh, function() {
      t.controller.abort();
    });
  }
  var sn = null, ac = 0, wa = 0, Aa = null;
  function Kh(t, e) {
    if (sn === null) {
      var l = sn = [];
      ac = 0, wa = uo(), Aa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return ac++, e.then(er, er), e;
  }
  function er() {
    if (--ac === 0 && sn !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var t = sn;
      sn = null, wa = 0, Aa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Jh(t, e) {
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
  var lr = j.S;
  j.S = function(t, e) {
    Gf = me(), typeof e == "object" && e !== null && typeof e.then == "function" && Kh(t, e), lr !== null && lr(t, e);
  };
  var Jl = h(null);
  function nc() {
    var t = Jl.current;
    return t !== null ? t : Mt.pooledCache;
  }
  function mi(t, e) {
    e === null ? D(Jl, Jl.current) : D(Jl, e.pool);
  }
  function ar() {
    var t = nc();
    return t === null ? null : { parent: Vt._currentValue, pool: t };
  }
  var za = Error(o(460)), ic = Error(o(474)), hi = Error(o(542)), gi = { then: function() {
  } };
  function nr(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ir(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Xe, Xe), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, cr(t), t;
      default:
        if (typeof e.status == "string") e.then(Xe, Xe);
        else {
          if (t = Mt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
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
            throw t = e.reason, cr(t), t;
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
  function ur() {
    if (Wl === null) throw Error(o(459));
    var t = Wl;
    return Wl = null, t;
  }
  function cr(t) {
    if (t === za || t === hi)
      throw Error(o(483));
  }
  var Ta = null, rn = 0;
  function pi(t) {
    var e = rn;
    return rn += 1, Ta === null && (Ta = []), ir(Ta, t, e);
  }
  function fn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function yi(t, e) {
    throw e.$$typeof === B ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function or(t) {
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
    function s(y, g, x, O) {
      return g === null || g.tag !== 6 ? (g = Ku(x, y.mode, O), g.return = y, g) : (g = n(g, x), g.return = y, g);
    }
    function m(y, g, x, O) {
      var F = x.type;
      return F === G ? C(
        y,
        g,
        x.props.children,
        O,
        x.key
      ) : g !== null && (g.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Y && Fl(F) === g.type) ? (g = n(g, x.props), fn(g, x), g.return = y, g) : (g = si(
        x.type,
        x.key,
        x.props,
        null,
        y.mode,
        O
      ), fn(g, x), g.return = y, g);
    }
    function w(y, g, x, O) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== x.containerInfo || g.stateNode.implementation !== x.implementation ? (g = Ju(x, y.mode, O), g.return = y, g) : (g = n(g, x.children || []), g.return = y, g);
    }
    function C(y, g, x, O, F) {
      return g === null || g.tag !== 7 ? (g = Xl(
        x,
        y.mode,
        O,
        F
      ), g.return = y, g) : (g = n(g, x), g.return = y, g);
    }
    function U(y, g, x) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = Ku(
          "" + g,
          y.mode,
          x
        ), g.return = y, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case X:
            return x = si(
              g.type,
              g.key,
              g.props,
              null,
              y.mode,
              x
            ), fn(x, g), x.return = y, x;
          case tt:
            return g = Ju(
              g,
              y.mode,
              x
            ), g.return = y, g;
          case Y:
            return g = Fl(g), U(y, g, x);
        }
        if (Lt(g) || Dt(g))
          return g = Xl(
            g,
            y.mode,
            x,
            null
          ), g.return = y, g;
        if (typeof g.then == "function")
          return U(y, pi(g), x);
        if (g.$$typeof === ut)
          return U(
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
        return F !== null ? null : s(y, g, "" + x, O);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case X:
            return x.key === F ? m(y, g, x, O) : null;
          case tt:
            return x.key === F ? w(y, g, x, O) : null;
          case Y:
            return x = Fl(x), z(y, g, x, O);
        }
        if (Lt(x) || Dt(x))
          return F !== null ? null : C(y, g, x, O, null);
        if (typeof x.then == "function")
          return z(
            y,
            g,
            pi(x),
            O
          );
        if (x.$$typeof === ut)
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
    function T(y, g, x, O, F) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return y = y.get(x) || null, s(g, y, "" + O, F);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case X:
            return y = y.get(
              O.key === null ? x : O.key
            ) || null, m(g, y, O, F);
          case tt:
            return y = y.get(
              O.key === null ? x : O.key
            ) || null, w(g, y, O, F);
          case Y:
            return O = Fl(O), T(
              y,
              g,
              x,
              O,
              F
            );
        }
        if (Lt(O) || Dt(O))
          return y = y.get(x) || null, C(g, y, O, F, null);
        if (typeof O.then == "function")
          return T(
            y,
            g,
            x,
            pi(O),
            F
          );
        if (O.$$typeof === ut)
          return T(
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
      for (var F = null, vt = null, Q = g, it = g = 0, mt = null; Q !== null && it < x.length; it++) {
        Q.index > it ? (mt = Q, Q = null) : mt = Q.sibling;
        var bt = z(
          y,
          Q,
          x[it],
          O
        );
        if (bt === null) {
          Q === null && (Q = mt);
          break;
        }
        t && Q && bt.alternate === null && e(y, Q), g = i(bt, g, it), vt === null ? F = bt : vt.sibling = bt, vt = bt, Q = mt;
      }
      if (it === x.length)
        return l(y, Q), gt && Ke(y, it), F;
      if (Q === null) {
        for (; it < x.length; it++)
          Q = U(y, x[it], O), Q !== null && (g = i(
            Q,
            g,
            it
          ), vt === null ? F = Q : vt.sibling = Q, vt = Q);
        return gt && Ke(y, it), F;
      }
      for (Q = a(Q); it < x.length; it++)
        mt = T(
          Q,
          y,
          it,
          x[it],
          O
        ), mt !== null && (t && mt.alternate !== null && Q.delete(
          mt.key === null ? it : mt.key
        ), g = i(
          mt,
          g,
          it
        ), vt === null ? F = mt : vt.sibling = mt, vt = mt);
      return t && Q.forEach(function(Rl) {
        return e(y, Rl);
      }), gt && Ke(y, it), F;
    }
    function I(y, g, x, O) {
      if (x == null) throw Error(o(151));
      for (var F = null, vt = null, Q = g, it = g = 0, mt = null, bt = x.next(); Q !== null && !bt.done; it++, bt = x.next()) {
        Q.index > it ? (mt = Q, Q = null) : mt = Q.sibling;
        var Rl = z(y, Q, bt.value, O);
        if (Rl === null) {
          Q === null && (Q = mt);
          break;
        }
        t && Q && Rl.alternate === null && e(y, Q), g = i(Rl, g, it), vt === null ? F = Rl : vt.sibling = Rl, vt = Rl, Q = mt;
      }
      if (bt.done)
        return l(y, Q), gt && Ke(y, it), F;
      if (Q === null) {
        for (; !bt.done; it++, bt = x.next())
          bt = U(y, bt.value, O), bt !== null && (g = i(bt, g, it), vt === null ? F = bt : vt.sibling = bt, vt = bt);
        return gt && Ke(y, it), F;
      }
      for (Q = a(Q); !bt.done; it++, bt = x.next())
        bt = T(Q, y, it, bt.value, O), bt !== null && (t && bt.alternate !== null && Q.delete(bt.key === null ? it : bt.key), g = i(bt, g, it), vt === null ? F = bt : vt.sibling = bt, vt = bt);
      return t && Q.forEach(function(i0) {
        return e(y, i0);
      }), gt && Ke(y, it), F;
    }
    function Nt(y, g, x, O) {
      if (typeof x == "object" && x !== null && x.type === G && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case X:
            t: {
              for (var F = x.key; g !== null; ) {
                if (g.key === F) {
                  if (F = x.type, F === G) {
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
                  } else if (g.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Y && Fl(F) === g.type) {
                    l(
                      y,
                      g.sibling
                    ), O = n(g, x.props), fn(O, x), O.return = y, y = O;
                    break t;
                  }
                  l(y, g);
                  break;
                } else e(y, g);
                g = g.sibling;
              }
              x.type === G ? (O = Xl(
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
              ), fn(O, x), O.return = y, y = O);
            }
            return u(y);
          case tt:
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
              O = Ju(x, y.mode, O), O.return = y, y = O;
            }
            return u(y);
          case Y:
            return x = Fl(x), Nt(
              y,
              g,
              x,
              O
            );
        }
        if (Lt(x))
          return q(
            y,
            g,
            x,
            O
          );
        if (Dt(x)) {
          if (F = Dt(x), typeof F != "function") throw Error(o(150));
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
        if (x.$$typeof === ut)
          return Nt(
            y,
            g,
            di(y, x),
            O
          );
        yi(y, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, g !== null && g.tag === 6 ? (l(y, g.sibling), O = n(g, x), O.return = y, y = O) : (l(y, g), O = Ku(x, y.mode, O), O.return = y, y = O), u(y)) : l(y, g);
    }
    return function(y, g, x, O) {
      try {
        rn = 0;
        var F = Nt(
          y,
          g,
          x,
          O
        );
        return Ta = null, F;
      } catch (Q) {
        if (Q === za || Q === hi) throw Q;
        var vt = ye(29, Q, null, y.mode);
        return vt.lanes = O, vt.return = y, vt;
      }
    };
  }
  var $l = or(!0), sr = or(!1), vl = !1;
  function uc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function cc(t, e) {
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
    if (a = a.shared, (St & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = oi(t), Zs(t, null, l), e;
    }
    return ci(t, a, e, l), oi(t);
  }
  function dn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, ts(t, l);
    }
  }
  function oc(t, e) {
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
  var sc = !1;
  function mn() {
    if (sc) {
      var t = Aa;
      if (t !== null) throw t;
    }
  }
  function hn(t, e, l, a) {
    sc = !1;
    var n = t.updateQueue;
    vl = !1;
    var i = n.firstBaseUpdate, u = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var m = s, w = m.next;
      m.next = null, u === null ? i = w : u.next = w, u = m;
      var C = t.alternate;
      C !== null && (C = C.updateQueue, s = C.lastBaseUpdate, s !== u && (s === null ? C.firstBaseUpdate = w : s.next = w, C.lastBaseUpdate = m));
    }
    if (i !== null) {
      var U = n.baseState;
      u = 0, C = w = m = null, s = i;
      do {
        var z = s.lane & -536870913, T = z !== s.lane;
        if (T ? (dt & z) === z : (a & z) === z) {
          z !== 0 && z === wa && (sc = !0), C !== null && (C = C.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          t: {
            var q = t, I = s;
            z = e;
            var Nt = l;
            switch (I.tag) {
              case 1:
                if (q = I.payload, typeof q == "function") {
                  U = q.call(Nt, U, z);
                  break t;
                }
                U = q;
                break t;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = I.payload, z = typeof q == "function" ? q.call(Nt, U, z) : q, z == null) break t;
                U = E({}, U, z);
                break t;
              case 2:
                vl = !0;
            }
          }
          z = s.callback, z !== null && (t.flags |= 64, T && (t.flags |= 8192), T = n.callbacks, T === null ? n.callbacks = [z] : T.push(z));
        } else
          T = {
            lane: z,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, C === null ? (w = C = T, m = U) : C = C.next = T, u |= z;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          T = s, s = T.next, T.next = null, n.lastBaseUpdate = T, n.shared.pending = null;
        }
      } while (!0);
      C === null && (m = U), n.baseState = m, n.firstBaseUpdate = w, n.lastBaseUpdate = C, i === null && (n.shared.lanes = 0), Tl |= u, t.lanes = u, t.memoizedState = U;
    }
  }
  function rr(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function fr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        rr(l[t], e);
  }
  var ja = h(null), vi = h(0);
  function dr(t, e) {
    t = nl, D(vi, t), D(ja, e), nl = t | e.baseLanes;
  }
  function rc() {
    D(vi, nl), D(ja, ja.current);
  }
  function fc() {
    nl = vi.current, M(ja), M(vi);
  }
  var ve = h(null), Oe = null;
  function Sl(t) {
    var e = t.alternate;
    D(kt, kt.current & 1), D(ve, t), Oe === null && (e === null || ja.current !== null || e.memoizedState !== null) && (Oe = t);
  }
  function dc(t) {
    D(kt, kt.current), D(ve, t), Oe === null && (Oe = t);
  }
  function mr(t) {
    t.tag === 22 ? (D(kt, kt.current), D(ve, t), Oe === null && (Oe = t)) : wl();
  }
  function wl() {
    D(kt, kt.current), D(ve, ve.current);
  }
  function be(t) {
    M(ve), Oe === t && (Oe = null), M(kt);
  }
  var kt = h(0);
  function bi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || bo(l) || xo(l)))
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
  var We = 0, nt = null, jt = null, Xt = null, xi = !1, Ea = !1, Il = !1, Si = 0, gn = 0, Na = null, Fh = 0;
  function Ht() {
    throw Error(o(321));
  }
  function mc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!pe(t[l], e[l])) return !1;
    return !0;
  }
  function hc(t, e, l, a, n, i) {
    return We = i, nt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, j.H = t === null || t.memoizedState === null ? Wr : Mc, Il = !1, i = l(a, n), Il = !1, Ea && (i = gr(
      e,
      l,
      a,
      n
    )), hr(t), i;
  }
  function hr(t) {
    j.H = vn;
    var e = jt !== null && jt.next !== null;
    if (We = 0, Xt = jt = nt = null, xi = !1, gn = 0, Na = null, e) throw Error(o(300));
    t === null || Qt || (t = t.dependencies, t !== null && fi(t) && (Qt = !0));
  }
  function gr(t, e, l, a) {
    nt = t;
    var n = 0;
    do {
      if (Ea && (Na = null), gn = 0, Ea = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Xt = jt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      j.H = $r, i = e(l, a);
    } while (Ea);
    return i;
  }
  function Wh() {
    var t = j.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? pn(e) : e, t = t.useState()[0], (jt !== null ? jt.memoizedState : null) !== t && (nt.flags |= 1024), e;
  }
  function gc() {
    var t = Si !== 0;
    return Si = 0, t;
  }
  function pc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function yc(t) {
    if (xi) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      xi = !1;
    }
    We = 0, Xt = jt = nt = null, Ea = !1, gn = Si = 0, Na = null;
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
  function qt() {
    if (jt === null) {
      var t = nt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = jt.next;
    var e = Xt === null ? nt.memoizedState : Xt.next;
    if (e !== null)
      Xt = e, jt = t;
    else {
      if (t === null)
        throw nt.alternate === null ? Error(o(467)) : Error(o(310));
      jt = t, t = {
        memoizedState: jt.memoizedState,
        baseState: jt.baseState,
        baseQueue: jt.baseQueue,
        queue: jt.queue,
        next: null
      }, Xt === null ? nt.memoizedState = Xt = t : Xt = Xt.next = t;
    }
    return Xt;
  }
  function wi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function pn(t) {
    var e = gn;
    return gn += 1, Na === null && (Na = []), t = ir(Na, t, e), e = nt, (Xt === null ? e.memoizedState : Xt.next) === null && (e = e.alternate, j.H = e === null || e.memoizedState === null ? Wr : Mc), t;
  }
  function Ai(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return pn(t);
      if (t.$$typeof === ut) return Pt(t);
    }
    throw Error(o(438, String(t)));
  }
  function vc(t) {
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
        l[a] = At;
    return e.index++, l;
  }
  function $e(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function zi(t) {
    var e = qt();
    return bc(e, jt, t);
  }
  function bc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
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
      var s = u = null, m = null, w = e, C = !1;
      do {
        var U = w.lane & -536870913;
        if (U !== w.lane ? (dt & U) === U : (We & U) === U) {
          var z = w.revertLane;
          if (z === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), U === wa && (C = !0);
          else if ((We & z) === z) {
            w = w.next, z === wa && (C = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, m === null ? (s = m = U, u = i) : m = m.next = U, nt.lanes |= z, Tl |= z;
          U = w.action, Il && l(i, U), i = w.hasEagerState ? w.eagerState : l(i, U);
        } else
          z = {
            lane: U,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, m === null ? (s = m = z, u = i) : m = m.next = z, nt.lanes |= U, Tl |= U;
        w = w.next;
      } while (w !== null && w !== e);
      if (m === null ? u = i : m.next = s, !pe(i, t.memoizedState) && (Qt = !0, C && (l = Aa, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = u, t.baseQueue = m, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function xc(t) {
    var e = qt(), l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, i = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var u = n = n.next;
      do
        i = t(i, u.action), u = u.next;
      while (u !== n);
      pe(i, e.memoizedState) || (Qt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function pr(t, e, l) {
    var a = nt, n = qt(), i = gt;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = e();
    var u = !pe(
      (jt || n).memoizedState,
      l
    );
    if (u && (n.memoizedState = l, Qt = !0), n = n.queue, Ac(br.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || u || Xt !== null && Xt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ma(
        9,
        { destroy: void 0 },
        vr.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), Mt === null) throw Error(o(349));
      i || (We & 127) !== 0 || yr(a, e, l);
    }
    return l;
  }
  function yr(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = nt.updateQueue, e === null ? (e = wi(), nt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function vr(t, e, l, a) {
    e.value = l, e.getSnapshot = a, xr(e) && Sr(t);
  }
  function br(t, e, l) {
    return l(function() {
      xr(e) && Sr(t);
    });
  }
  function xr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !pe(t, l);
    } catch {
      return !0;
    }
  }
  function Sr(t) {
    var e = Vl(t, 2);
    e !== null && de(e, t, 2);
  }
  function Sc(t) {
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
  function wr(t, e, l, a) {
    return t.baseState = l, bc(
      t,
      jt,
      typeof a == "function" ? a : $e
    );
  }
  function $h(t, e, l, a, n) {
    if (Ei(t)) throw Error(o(485));
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
      j.T !== null ? l(!0) : i.isTransition = !1, a(i), l = e.pending, l === null ? (i.next = e.pending = i, Ar(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function Ar(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var i = j.T, u = {};
      j.T = u;
      try {
        var s = l(n, a), m = j.S;
        m !== null && m(u, s), zr(t, e, s);
      } catch (w) {
        wc(t, e, w);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), j.T = i;
      }
    } else
      try {
        i = l(n, a), zr(t, e, i);
      } catch (w) {
        wc(t, e, w);
      }
  }
  function zr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Tr(t, e, a);
      },
      function(a) {
        return wc(t, e, a);
      }
    ) : Tr(t, e, l);
  }
  function Tr(t, e, l) {
    e.status = "fulfilled", e.value = l, jr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Ar(t, l)));
  }
  function wc(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, jr(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function jr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Er(t, e) {
    return e;
  }
  function Nr(t, e) {
    if (gt) {
      var l = Mt.formState;
      if (l !== null) {
        t: {
          var a = nt;
          if (gt) {
            if (_t) {
              e: {
                for (var n = _t, i = _e; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (n = Ue(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                _t = Ue(
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
      lastRenderedReducer: Er,
      lastRenderedState: e
    }, l.queue = a, l = Kr.bind(
      null,
      nt,
      a
    ), a.dispatch = l, a = Sc(!1), i = Nc.bind(
      null,
      nt,
      !1,
      a.queue
    ), a = ne(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = $h.bind(
      null,
      nt,
      n,
      i,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function Mr(t) {
    var e = qt();
    return Cr(e, jt, t);
  }
  function Cr(t, e, l) {
    if (e = bc(
      t,
      e,
      Er
    )[0], t = zi($e)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = pn(e);
      } catch (u) {
        throw u === za ? hi : u;
      }
    else a = e;
    e = qt();
    var n = e.queue, i = n.dispatch;
    return l !== e.memoizedState && (nt.flags |= 2048, Ma(
      9,
      { destroy: void 0 },
      Ih.bind(null, n, l),
      null
    )), [a, i, t];
  }
  function Ih(t, e) {
    t.action = e;
  }
  function _r(t) {
    var e = qt(), l = jt;
    if (l !== null)
      return Cr(e, l, t);
    qt(), e = e.memoizedState, l = qt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function Ma(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = nt.updateQueue, e === null && (e = wi(), nt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Or() {
    return qt().memoizedState;
  }
  function Ti(t, e, l, a) {
    var n = ne();
    nt.flags |= t, n.memoizedState = Ma(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function ji(t, e, l, a) {
    var n = qt();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    jt !== null && a !== null && mc(a, jt.memoizedState.deps) ? n.memoizedState = Ma(e, i, l, a) : (nt.flags |= t, n.memoizedState = Ma(
      1 | e,
      i,
      l,
      a
    ));
  }
  function Ur(t, e) {
    Ti(8390656, 8, t, e);
  }
  function Ac(t, e) {
    ji(2048, 8, t, e);
  }
  function Ph(t) {
    nt.flags |= 4;
    var e = nt.updateQueue;
    if (e === null)
      e = wi(), nt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Dr(t) {
    var e = qt().memoizedState;
    return Ph({ ref: e, nextImpl: t }), function() {
      if ((St & 2) !== 0) throw Error(o(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Rr(t, e) {
    return ji(4, 2, t, e);
  }
  function Hr(t, e) {
    return ji(4, 4, t, e);
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
  function kr(t, e, l) {
    l = l != null ? l.concat([t]) : null, ji(4, 4, Br.bind(null, e, t), l);
  }
  function zc() {
  }
  function qr(t, e) {
    var l = qt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && mc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function Gr(t, e) {
    var l = qt();
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
    return l === void 0 || (We & 1073741824) !== 0 && (dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Lf(), nt.lanes |= t, Tl |= t, l);
  }
  function Yr(t, e, l, a) {
    return pe(l, e) ? l : ja.current !== null ? (t = Tc(t, l, a), pe(t, e) || (Qt = !0), t) : (We & 42) === 0 || (We & 1073741824) !== 0 && (dt & 261930) === 0 ? (Qt = !0, t.memoizedState = l) : (t = Lf(), nt.lanes |= t, Tl |= t, e);
  }
  function Lr(t, e, l, a, n) {
    var i = k.p;
    k.p = i !== 0 && 8 > i ? i : 8;
    var u = j.T, s = {};
    j.T = s, Nc(t, !1, e, l);
    try {
      var m = n(), w = j.S;
      if (w !== null && w(s, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var C = Jh(
          m,
          a
        );
        yn(
          t,
          e,
          C,
          we(t)
        );
      } else
        yn(
          t,
          e,
          a,
          we(t)
        );
    } catch (U) {
      yn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: U },
        we()
      );
    } finally {
      k.p = i, u !== null && s.types !== null && (u.types = s.types), j.T = u;
    }
  }
  function tg() {
  }
  function jc(t, e, l, a) {
    if (t.tag !== 5) throw Error(o(476));
    var n = Vr(t).queue;
    Lr(
      t,
      n,
      e,
      N,
      l === null ? tg : function() {
        return Xr(t), l(a);
      }
    );
  }
  function Vr(t) {
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
  function Xr(t) {
    var e = Vr(t);
    e.next === null && (e = t.alternate.memoizedState), yn(
      t,
      e.next.queue,
      {},
      we()
    );
  }
  function Ec() {
    return Pt(Dn);
  }
  function Qr() {
    return qt().memoizedState;
  }
  function Zr() {
    return qt().memoizedState;
  }
  function eg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = we();
          t = bl(l);
          var a = xl(e, t, l);
          a !== null && (de(a, e, l), dn(a, e, l)), e = { cache: lc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function lg(t, e, l) {
    var a = we();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ei(t) ? Jr(e, l) : (l = Qu(t, e, l, a), l !== null && (de(l, t, a), Fr(l, e, a)));
  }
  function Kr(t, e, l) {
    var a = we();
    yn(t, e, l, a);
  }
  function yn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ei(t)) Jr(e, n);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var u = e.lastRenderedState, s = i(u, l);
          if (n.hasEagerState = !0, n.eagerState = s, pe(s, u))
            return ci(t, e, n, 0), Mt === null && ui(), !1;
        } catch {
        }
      if (l = Qu(t, e, n, a), l !== null)
        return de(l, t, a), Fr(l, e, a), !0;
    }
    return !1;
  }
  function Nc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: uo(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ei(t)) {
      if (e) throw Error(o(479));
    } else
      e = Qu(
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
  function Jr(t, e) {
    Ea = xi = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Fr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, ts(t, l);
    }
  }
  var vn = {
    readContext: Pt,
    use: Ai,
    useCallback: Ht,
    useContext: Ht,
    useEffect: Ht,
    useImperativeHandle: Ht,
    useLayoutEffect: Ht,
    useInsertionEffect: Ht,
    useMemo: Ht,
    useReducer: Ht,
    useRef: Ht,
    useState: Ht,
    useDebugValue: Ht,
    useDeferredValue: Ht,
    useTransition: Ht,
    useSyncExternalStore: Ht,
    useId: Ht,
    useHostTransitionStatus: Ht,
    useFormState: Ht,
    useActionState: Ht,
    useOptimistic: Ht,
    useMemoCache: Ht,
    useCacheRefresh: Ht
  };
  vn.useEffectEvent = Ht;
  var Wr = {
    readContext: Pt,
    use: Ai,
    useCallback: function(t, e) {
      return ne().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Pt,
    useEffect: Ur,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Ti(
        4194308,
        4,
        Br.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Ti(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Ti(4, 2, t, e);
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
      }, a.queue = t, t = t.dispatch = lg.bind(
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
      t = Sc(t);
      var e = t.queue, l = Kr.bind(null, nt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: zc,
    useDeferredValue: function(t, e) {
      var l = ne();
      return Tc(l, t, e);
    },
    useTransition: function() {
      var t = Sc(!1);
      return t = Lr.bind(
        null,
        nt,
        t.queue,
        !0,
        !1
      ), ne().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = nt, n = ne();
      if (gt) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = e(), Mt === null)
          throw Error(o(349));
        (dt & 127) !== 0 || yr(a, e, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return n.queue = i, Ur(br.bind(null, a, i, t), [
        t
      ]), a.flags |= 2048, Ma(
        9,
        { destroy: void 0 },
        vr.bind(
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
      var t = ne(), e = Mt.identifierPrefix;
      if (gt) {
        var l = qe, a = ke;
        l = (a & ~(1 << 32 - ge(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Si++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Fh++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ec,
    useFormState: Nr,
    useActionState: Nr,
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
      return e.queue = l, e = Nc.bind(
        null,
        nt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: vc,
    useCacheRefresh: function() {
      return ne().memoizedState = eg.bind(
        null,
        nt
      );
    },
    useEffectEvent: function(t) {
      var e = ne(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((St & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Mc = {
    readContext: Pt,
    use: Ai,
    useCallback: qr,
    useContext: Pt,
    useEffect: Ac,
    useImperativeHandle: kr,
    useInsertionEffect: Rr,
    useLayoutEffect: Hr,
    useMemo: Gr,
    useReducer: zi,
    useRef: Or,
    useState: function() {
      return zi($e);
    },
    useDebugValue: zc,
    useDeferredValue: function(t, e) {
      var l = qt();
      return Yr(
        l,
        jt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = zi($e)[0], e = qt().memoizedState;
      return [
        typeof t == "boolean" ? t : pn(t),
        e
      ];
    },
    useSyncExternalStore: pr,
    useId: Qr,
    useHostTransitionStatus: Ec,
    useFormState: Mr,
    useActionState: Mr,
    useOptimistic: function(t, e) {
      var l = qt();
      return wr(l, jt, t, e);
    },
    useMemoCache: vc,
    useCacheRefresh: Zr
  };
  Mc.useEffectEvent = Dr;
  var $r = {
    readContext: Pt,
    use: Ai,
    useCallback: qr,
    useContext: Pt,
    useEffect: Ac,
    useImperativeHandle: kr,
    useInsertionEffect: Rr,
    useLayoutEffect: Hr,
    useMemo: Gr,
    useReducer: xc,
    useRef: Or,
    useState: function() {
      return xc($e);
    },
    useDebugValue: zc,
    useDeferredValue: function(t, e) {
      var l = qt();
      return jt === null ? Tc(l, t, e) : Yr(
        l,
        jt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = xc($e)[0], e = qt().memoizedState;
      return [
        typeof t == "boolean" ? t : pn(t),
        e
      ];
    },
    useSyncExternalStore: pr,
    useId: Qr,
    useHostTransitionStatus: Ec,
    useFormState: _r,
    useActionState: _r,
    useOptimistic: function(t, e) {
      var l = qt();
      return jt !== null ? wr(l, jt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: vc,
    useCacheRefresh: Zr
  };
  $r.useEffectEvent = Dr;
  function Cc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : E({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var _c = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = we(), n = bl(a);
      n.payload = e, l != null && (n.callback = l), e = xl(t, n, a), e !== null && (de(e, t, a), dn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = we(), n = bl(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = xl(t, n, a), e !== null && (de(e, t, a), dn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = we(), a = bl(l);
      a.tag = 2, e != null && (a.callback = e), e = xl(t, a, l), e !== null && (de(e, t, l), dn(e, t, l));
    }
  };
  function Ir(t, e, l, a, n, i, u) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, u) : e.prototype && e.prototype.isPureReactComponent ? !an(l, a) || !an(n, i) : !0;
  }
  function Pr(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && _c.enqueueReplaceState(e, e.state, null);
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
  function tf(t) {
    ii(t);
  }
  function ef(t) {
    console.error(t);
  }
  function lf(t) {
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
  function af(t, e, l) {
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
  function Oc(t, e, l) {
    return l = bl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ni(t, e);
    }, l;
  }
  function nf(t) {
    return t = bl(t), t.tag = 3, t;
  }
  function uf(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      t.payload = function() {
        return n(i);
      }, t.callback = function() {
        af(e, l, a);
      };
    }
    var u = l.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      af(e, l, a), typeof n != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function ag(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && Sa(
        e,
        l,
        n,
        !0
      ), l = ve.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Oe === null ? Gi() : l.alternate === null && Bt === 0 && (Bt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === gi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), ao(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === gi ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), ao(t, a, n)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return ao(t, a, n), Gi(), !1;
    }
    if (gt)
      return e = ve.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== $u && (t = Error(o(422), { cause: a }), cn(Ne(t, l)))) : (a !== $u && (e = Error(o(423), {
        cause: a
      }), cn(
        Ne(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Ne(a, l), n = Oc(
        t.stateNode,
        a,
        n
      ), oc(t, n), Bt !== 4 && (Bt = 2)), !1;
    var i = Error(o(520), { cause: a });
    if (i = Ne(i, l), jn === null ? jn = [i] : jn.push(i), Bt !== 4 && (Bt = 2), e === null) return !0;
    a = Ne(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Oc(l.stateNode, a, t), oc(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (jl === null || !jl.has(i))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = nf(n), uf(
              n,
              t,
              l,
              a
            ), oc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Uc = Error(o(461)), Qt = !1;
  function te(t, e, l, a) {
    e.child = t === null ? sr(e, null, l, a) : $l(
      e,
      t.child,
      l,
      a
    );
  }
  function cf(t, e, l, a, n) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var u = {};
      for (var s in a)
        s !== "ref" && (u[s] = a[s]);
    } else u = a;
    return Kl(e), a = hc(
      t,
      e,
      l,
      u,
      i,
      n
    ), s = gc(), t !== null && !Qt ? (pc(t, e, n), Ie(t, e, n)) : (gt && s && Fu(e), e.flags |= 1, te(t, e, a, n), e.child);
  }
  function of(t, e, l, a, n) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !Zu(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, sf(
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
    if (i = t.child, !Yc(t, n)) {
      var u = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : an, l(u, a) && t.ref === e.ref)
        return Ie(t, e, n);
    }
    return e.flags |= 1, t = Ze(i, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function sf(t, e, l, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (an(i, a) && t.ref === e.ref)
        if (Qt = !1, e.pendingProps = a = i, Yc(t, n))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else
          return e.lanes = t.lanes, Ie(t, e, n);
    }
    return Dc(
      t,
      e,
      l,
      a,
      n
    );
  }
  function rf(t, e, l, a) {
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
        return ff(
          t,
          e,
          i,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && mi(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? dr(e, i) : rc(), mr(e);
      else
        return a = e.lanes = 536870912, ff(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          a
        );
    } else
      i !== null ? (mi(e, i.cachePool), dr(e, i), wl(), e.memoizedState = null) : (t !== null && mi(e, null), rc(), wl());
    return te(t, e, n, l), e.child;
  }
  function bn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function ff(t, e, l, a, n) {
    var i = nc();
    return i = i === null ? null : { parent: Vt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && mi(e, null), rc(), mr(e), t !== null && Sa(t, e, a, !0), e.childLanes = n, null;
  }
  function Mi(t, e) {
    return e = _i(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function df(t, e, l) {
    return $l(e, t.child, null, l), t = Mi(e, e.pendingProps), t.flags |= 2, be(e), e.memoizedState = null, t;
  }
  function ng(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (gt) {
        if (a.mode === "hidden")
          return t = Mi(e, a), e.lanes = 536870912, bn(null, t);
        if (dc(e), (t = _t) ? (t = zd(
          t,
          _e
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: hl !== null ? { id: ke, overflow: qe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Js(t), l.return = e, e.child = l, It = e, _t = null)) : t = null, t === null) throw pl(e);
        return e.lanes = 536870912, null;
      }
      return Mi(e, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (dc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = df(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(o(558));
      else if (Qt || Sa(t, e, l, !1), n = (l & t.childLanes) !== 0, Qt || n) {
        if (a = Mt, a !== null && (u = es(a, l), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, Vl(t, u), de(a, t, u), Uc;
        Gi(), e = df(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, _t = Ue(u.nextSibling), It = e, gt = !0, gl = null, _e = !1, t !== null && $s(e, t), e = Mi(e, a), e.flags |= 4096;
      return e;
    }
    return t = Ze(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ci(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Dc(t, e, l, a, n) {
    return Kl(e), l = hc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = gc(), t !== null && !Qt ? (pc(t, e, n), Ie(t, e, n)) : (gt && a && Fu(e), e.flags |= 1, te(t, e, l, n), e.child);
  }
  function mf(t, e, l, a, n, i) {
    return Kl(e), e.updateQueue = null, l = gr(
      e,
      a,
      l,
      n
    ), hr(t), a = gc(), t !== null && !Qt ? (pc(t, e, i), Ie(t, e, i)) : (gt && a && Fu(e), e.flags |= 1, te(t, e, l, i), e.child);
  }
  function hf(t, e, l, a, n) {
    if (Kl(e), e.stateNode === null) {
      var i = ya, u = l.contextType;
      typeof u == "object" && u !== null && (i = Pt(u)), i = new l(a, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = _c, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = a, i.state = e.memoizedState, i.refs = {}, uc(e), u = l.contextType, i.context = typeof u == "object" && u !== null ? Pt(u) : ya, i.state = e.memoizedState, u = l.getDerivedStateFromProps, typeof u == "function" && (Cc(
        e,
        l,
        u,
        a
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && _c.enqueueReplaceState(i, i.state, null), hn(e, a, i, n), mn(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = e.stateNode;
      var s = e.memoizedProps, m = Pl(l, s);
      i.props = m;
      var w = i.context, C = l.contextType;
      u = ya, typeof C == "object" && C !== null && (u = Pt(C));
      var U = l.getDerivedStateFromProps;
      C = typeof U == "function" || typeof i.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, C || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s || w !== u) && Pr(
        e,
        i,
        a,
        u
      ), vl = !1;
      var z = e.memoizedState;
      i.state = z, hn(e, a, i, n), mn(), w = e.memoizedState, s || z !== w || vl ? (typeof U == "function" && (Cc(
        e,
        l,
        U,
        a
      ), w = e.memoizedState), (m = vl || Ir(
        e,
        l,
        m,
        a,
        z,
        w,
        u
      )) ? (C || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = w), i.props = a, i.state = w, i.context = u, a = m) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      i = e.stateNode, cc(t, e), u = e.memoizedProps, C = Pl(l, u), i.props = C, U = e.pendingProps, z = i.context, w = l.contextType, m = ya, typeof w == "object" && w !== null && (m = Pt(w)), s = l.getDerivedStateFromProps, (w = typeof s == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== U || z !== m) && Pr(
        e,
        i,
        a,
        m
      ), vl = !1, z = e.memoizedState, i.state = z, hn(e, a, i, n), mn();
      var T = e.memoizedState;
      u !== U || z !== T || vl || t !== null && t.dependencies !== null && fi(t.dependencies) ? (typeof s == "function" && (Cc(
        e,
        l,
        s,
        a
      ), T = e.memoizedState), (C = vl || Ir(
        e,
        l,
        C,
        a,
        z,
        T,
        m
      ) || t !== null && t.dependencies !== null && fi(t.dependencies)) ? (w || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, T, m), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        T,
        m
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = T), i.props = a, i.state = T, i.context = m, a = C) : (typeof i.componentDidUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return i = a, Ci(t, e), a = (e.flags & 128) !== 0, i || a ? (i = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && a ? (e.child = $l(
      e,
      t.child,
      null,
      n
    ), e.child = $l(
      e,
      null,
      l,
      n
    )) : te(t, e, l, n), e.memoizedState = i.state, t = e.child) : t = Ie(
      t,
      e,
      n
    ), t;
  }
  function gf(t, e, l, a) {
    return Ql(), e.flags |= 256, te(t, e, l, a), e.child;
  }
  var Rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hc(t) {
    return { baseLanes: t, cachePool: ar() };
  }
  function Bc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Se), t;
  }
  function pf(t, e, l) {
    var a = e.pendingProps, n = !1, i = (e.flags & 128) !== 0, u;
    if ((u = i) || (u = t !== null && t.memoizedState === null ? !1 : (kt.current & 2) !== 0), u && (n = !0, e.flags &= -129), u = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (gt) {
        if (n ? Sl(e) : wl(), (t = _t) ? (t = zd(
          t,
          _e
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: hl !== null ? { id: ke, overflow: qe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Js(t), l.return = e, e.child = l, It = e, _t = null)) : t = null, t === null) throw pl(e);
        return xo(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (wl(), n = e.mode, s = _i(
        { mode: "hidden", children: s },
        n
      ), a = Xl(
        a,
        n,
        l,
        null
      ), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = Hc(l), a.childLanes = Bc(
        t,
        u,
        l
      ), e.memoizedState = Rc, bn(null, a)) : (Sl(e), kc(e, s));
    }
    var m = t.memoizedState;
    if (m !== null && (s = m.dehydrated, s !== null)) {
      if (i)
        e.flags & 256 ? (Sl(e), e.flags &= -257, e = qc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (wl(), e.child = t.child, e.flags |= 128, e = null) : (wl(), s = a.fallback, n = e.mode, a = _i(
          { mode: "visible", children: a.children },
          n
        ), s = Xl(
          s,
          n,
          l,
          null
        ), s.flags |= 2, a.return = e, s.return = e, a.sibling = s, e.child = a, $l(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = Hc(l), a.childLanes = Bc(
          t,
          u,
          l
        ), e.memoizedState = Rc, e = bn(null, a));
      else if (Sl(e), xo(s)) {
        if (u = s.nextSibling && s.nextSibling.dataset, u) var w = u.dgst;
        u = w, a = Error(o(419)), a.stack = "", a.digest = u, cn({ value: a, source: null, stack: null }), e = qc(
          t,
          e,
          l
        );
      } else if (Qt || Sa(t, e, l, !1), u = (l & t.childLanes) !== 0, Qt || u) {
        if (u = Mt, u !== null && (a = es(u, l), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, Vl(t, a), de(u, t, a), Uc;
        bo(s) || Gi(), e = qc(
          t,
          e,
          l
        );
      } else
        bo(s) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, _t = Ue(
          s.nextSibling
        ), It = e, gt = !0, gl = null, _e = !1, t !== null && $s(e, t), e = kc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (wl(), s = a.fallback, n = e.mode, m = t.child, w = m.sibling, a = Ze(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, w !== null ? s = Ze(
      w,
      s
    ) : (s = Xl(
      s,
      n,
      l,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, bn(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = Hc(l) : (n = s.cachePool, n !== null ? (m = Vt._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = ar(), s = {
      baseLanes: s.baseLanes | l,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = Bc(
      t,
      u,
      l
    ), e.memoizedState = Rc, bn(t.child, a)) : (Sl(e), l = t.child, t = l.sibling, l = Ze(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (u = e.deletions, u === null ? (e.deletions = [t], e.flags |= 16) : u.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function kc(t, e) {
    return e = _i(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function _i(t, e) {
    return t = ye(22, t, null, e), t.lanes = 0, t;
  }
  function qc(t, e, l) {
    return $l(e, t.child, null, l), t = kc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function yf(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), tc(t.return, e, l);
  }
  function Gc(t, e, l, a, n, i) {
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
  function vf(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var u = kt.current, s = (u & 2) !== 0;
    if (s ? (u = u & 1 | 2, e.flags |= 128) : u &= 1, D(kt, u), te(t, e, a, l), a = gt ? un : 0, !s && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && yf(t, l, e);
        else if (t.tag === 19)
          yf(t, l, e);
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
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Gc(
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
        Gc(
          e,
          !0,
          l,
          null,
          i,
          a
        );
        break;
      case "together":
        Gc(
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
    if (t !== null && (e.dependencies = t.dependencies), Tl |= e.lanes, (l & e.childLanes) === 0)
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
      throw Error(o(153));
    if (e.child !== null) {
      for (t = e.child, l = Ze(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Ze(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Yc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && fi(t)));
  }
  function ig(t, e, l) {
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
          return e.flags |= 128, dc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Sl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? pf(t, e, l) : (Sl(e), t = Ie(
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
            return vf(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), D(kt, kt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, rf(
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
  function bf(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Qt = !0;
      else {
        if (!Yc(t, l) && (e.flags & 128) === 0)
          return Qt = !1, ig(
            t,
            e,
            l
          );
        Qt = (t.flags & 131072) !== 0;
      }
    else
      Qt = !1, gt && (e.flags & 1048576) !== 0 && Ws(e, un, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Fl(e.elementType), e.type = t, typeof t == "function")
            Zu(t) ? (a = Pl(t, a), e.tag = 1, e = hf(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = Dc(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === ot) {
                e.tag = 11, e = cf(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === lt) {
                e.tag = 14, e = of(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = ae(t) || t, Error(o(306, e, ""));
          }
        }
        return e;
      case 0:
        return Dc(
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
        ), hf(
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
          ), t === null) throw Error(o(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          n = i.element, cc(t, e), hn(e, a, null, l);
          var u = e.memoizedState;
          if (a = u.cache, yl(e, Vt, a), a !== i.cache && ec(
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
              e = gf(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = Ne(
                Error(o(424)),
                e
              ), cn(n), e = gf(
                t,
                e,
                a,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, _t = Ue(t.firstChild), It = e, gt = !0, gl = null, _e = !0, l = sr(
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
            te(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ci(t, e), t === null ? (l = Cd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : gt || (l = e.type, t = e.pendingProps, a = Ki(
          et.current
        ).createElement(l), a[$t] = e, a[ue] = t, ee(a, l, t), Ft(a), e.stateNode = a) : e.memoizedState = Cd(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return ie(e), t === null && gt && (a = e.stateNode = Ed(
          e.type,
          e.pendingProps,
          et.current
        ), It = e, _e = !0, n = _t, Cl(e.type) ? (So = n, _t = Ue(a.firstChild)) : _t = n), te(
          t,
          e,
          e.pendingProps.children,
          l
        ), Ci(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && gt && ((n = a = _t) && (a = Rg(
          a,
          e.type,
          e.pendingProps,
          _e
        ), a !== null ? (e.stateNode = a, It = e, _t = Ue(a.firstChild), _e = !1, n = !0) : n = !1), n || pl(e)), ie(e), n = e.type, i = e.pendingProps, u = t !== null ? t.memoizedProps : null, a = i.children, po(n, i) ? a = null : u !== null && po(n, u) && (e.flags |= 32), e.memoizedState !== null && (n = hc(
          t,
          e,
          Wh,
          null,
          null,
          l
        ), Dn._currentValue = n), Ci(t, e), te(t, e, a, l), e.child;
      case 6:
        return t === null && gt && ((t = l = _t) && (l = Hg(
          l,
          e.pendingProps,
          _e
        ), l !== null ? (e.stateNode = l, It = e, _t = null, t = !0) : t = !1), t || pl(e)), null;
      case 13:
        return pf(t, e, l);
      case 4:
        return Rt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = $l(
          e,
          null,
          a,
          l
        ) : te(t, e, a, l), e.child;
      case 11:
        return cf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return te(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return te(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return te(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, yl(e, e.type, a.value), te(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Kl(e), n = Pt(n), a = a(n), e.flags |= 1, te(t, e, a, l), e.child;
      case 14:
        return of(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return sf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return vf(t, e, l);
      case 31:
        return ng(t, e, l);
      case 22:
        return rf(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Kl(e), a = Pt(Vt), t === null ? (n = nc(), n === null && (n = Mt, i = lc(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), e.memoizedState = { parent: a, cache: n }, uc(e), yl(e, Vt, n)) : ((t.lanes & l) !== 0 && (cc(t, e), hn(e, null, null, l), mn()), n = t.memoizedState, i = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), yl(e, Vt, a)) : (a = i.cache, yl(e, Vt, a), a !== n.cache && ec(
          e,
          [Vt],
          l,
          !0
        ))), te(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function Pe(t) {
    t.flags |= 4;
  }
  function Lc(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Zf()) t.flags |= 8192;
        else
          throw Wl = gi, ic;
    } else t.flags &= -16777217;
  }
  function xf(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Rd(e))
      if (Zf()) t.flags |= 8192;
      else
        throw Wl = gi, ic;
  }
  function Oi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Io() : 536870912, t.lanes |= e, Ua |= e);
  }
  function xn(t, e) {
    if (!gt)
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
  function ug(t, e, l) {
    var a = e.pendingProps;
    switch (Wu(e), e.tag) {
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
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Fe(Vt), ht(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (xa(e) ? Pe(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Iu())), Ot(e), null;
      case 26:
        var n = e.type, i = e.memoizedState;
        return t === null ? (Pe(e), i !== null ? (Ot(e), xf(e, i)) : (Ot(e), Lc(
          e,
          n,
          null,
          a,
          l
        ))) : i ? i !== t.memoizedState ? (Pe(e), Ot(e), xf(e, i)) : (Ot(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Pe(e), Ot(e), Lc(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (sl(e), l = et.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Pe(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Ot(e), null;
          }
          t = H.current, xa(e) ? Is(e) : (t = Ed(n, a, l), e.stateNode = t, Pe(e));
        }
        return Ot(e), null;
      case 5:
        if (sl(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Pe(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Ot(e), null;
          }
          if (i = H.current, xa(e))
            Is(e);
          else {
            var u = Ki(
              et.current
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
            i[$t] = e, i[ue] = a;
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
            t: switch (ee(i, n, a), n) {
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
        return Ot(e), Lc(
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
            throw Error(o(166));
          if (t = et.current, xa(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = It, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[$t] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || pd(t.nodeValue, l)), t || pl(e, !0);
          } else
            t = Ki(t).createTextNode(
              a
            ), t[$t] = e, e.stateNode = t;
        }
        return Ot(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = xa(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[$t] = e;
            } else
              Ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ot(e), t = !1;
          } else
            l = Iu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (be(e), e) : (be(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Ot(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = xa(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(o(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[$t] = e;
            } else
              Ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ot(e), n = !1;
          } else
            n = Iu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (be(e), e) : (be(e), null);
        }
        return be(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Oi(e, e.updateQueue), Ot(e), null);
      case 4:
        return ht(), t === null && ro(e.stateNode.containerInfo), Ot(e), null;
      case 10:
        return Fe(e.type), Ot(e), null;
      case 19:
        if (M(kt), a = e.memoizedState, a === null) return Ot(e), null;
        if (n = (e.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) xn(a, !1);
          else {
            if (Bt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = bi(t), i !== null) {
                  for (e.flags |= 128, xn(a, !1), t = i.updateQueue, e.updateQueue = t, Oi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Ks(l, t), l = l.sibling;
                  return D(
                    kt,
                    kt.current & 1 | 2
                  ), gt && Ke(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && me() > Bi && (e.flags |= 128, n = !0, xn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = bi(i), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Oi(e, t), xn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !gt)
                return Ot(e), null;
            } else
              2 * me() - a.renderingStartTime > Bi && l !== 536870912 && (e.flags |= 128, n = !0, xn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (i.sibling = e.child, e.child = i) : (t = a.last, t !== null ? t.sibling = i : e.child = i, a.last = i);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = me(), t.sibling = null, l = kt.current, D(
          kt,
          n ? l & 1 | 2 : l & 1
        ), gt && Ke(e, a.treeForkCount), t) : (Ot(e), null);
      case 22:
      case 23:
        return be(e), fc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ot(e), l = e.updateQueue, l !== null && Oi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && M(Jl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Fe(Vt), Ot(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function cg(t, e) {
    switch (Wu(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Fe(Vt), ht(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return sl(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (be(e), e.alternate === null)
            throw Error(o(340));
          Ql();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (be(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(o(340));
          Ql();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return M(kt), null;
      case 4:
        return ht(), null;
      case 10:
        return Fe(e.type), null;
      case 22:
      case 23:
        return be(e), fc(), t !== null && M(Jl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Fe(Vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sf(t, e) {
    switch (Wu(e), e.tag) {
      case 3:
        Fe(Vt), ht();
        break;
      case 26:
      case 27:
      case 5:
        sl(e);
        break;
      case 4:
        ht();
        break;
      case 31:
        e.memoizedState !== null && be(e);
        break;
      case 13:
        be(e);
        break;
      case 19:
        M(kt);
        break;
      case 10:
        Fe(e.type);
        break;
      case 22:
      case 23:
        be(e), fc(), t !== null && M(Jl);
        break;
      case 24:
        Fe(Vt);
    }
  }
  function Sn(t, e) {
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
    } catch (s) {
      Tt(e, e.return, s);
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
            var u = a.inst, s = u.destroy;
            if (s !== void 0) {
              u.destroy = void 0, n = e;
              var m = l, w = s;
              try {
                w();
              } catch (C) {
                Tt(
                  n,
                  m,
                  C
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (C) {
      Tt(e, e.return, C);
    }
  }
  function wf(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        fr(e, l);
      } catch (a) {
        Tt(t, t.return, a);
      }
    }
  }
  function Af(t, e, l) {
    l.props = Pl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Tt(t, e, a);
    }
  }
  function wn(t, e) {
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
      Tt(t, e, n);
    }
  }
  function Ge(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Tt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Tt(t, e, n);
        }
      else l.current = null;
  }
  function zf(t) {
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
      Tt(t, t.return, n);
    }
  }
  function Vc(t, e, l) {
    try {
      var a = t.stateNode;
      Mg(a, t.type, l, e), a[ue] = e;
    } catch (n) {
      Tt(t, t.return, n);
    }
  }
  function Tf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Cl(t.type) || t.tag === 4;
  }
  function Xc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Tf(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Cl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Qc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Xe));
    else if (a !== 4 && (a === 27 && Cl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Qc(t, e, l), t = t.sibling; t !== null; )
        Qc(t, e, l), t = t.sibling;
  }
  function Ui(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Cl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Ui(t, e, l), t = t.sibling; t !== null; )
        Ui(t, e, l), t = t.sibling;
  }
  function jf(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      ee(e, a, l), e[$t] = t, e[ue] = l;
    } catch (i) {
      Tt(t, t.return, i);
    }
  }
  var tl = !1, Zt = !1, Zc = !1, Ef = typeof WeakSet == "function" ? WeakSet : Set, Wt = null;
  function og(t, e) {
    if (t = t.containerInfo, ho = tu, t = ks(t), qu(t)) {
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
            var u = 0, s = -1, m = -1, w = 0, C = 0, U = t, z = null;
            e: for (; ; ) {
              for (var T; U !== l || n !== 0 && U.nodeType !== 3 || (s = u + n), U !== i || a !== 0 && U.nodeType !== 3 || (m = u + a), U.nodeType === 3 && (u += U.nodeValue.length), (T = U.firstChild) !== null; )
                z = U, U = T;
              for (; ; ) {
                if (U === t) break e;
                if (z === l && ++w === n && (s = u), z === i && ++C === a && (m = u), (T = U.nextSibling) !== null) break;
                U = z, z = U.parentNode;
              }
              U = T;
            }
            l = s === -1 || m === -1 ? null : { start: s, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (go = { focusedElem: t, selectionRange: l }, tu = !1, Wt = e; Wt !== null; )
      if (e = Wt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Wt = t;
      else
        for (; Wt !== null; ) {
          switch (e = Wt, i = e.alternate, t = e.flags, e.tag) {
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
                  Tt(
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
                  vo(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      vo(t);
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
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Wt = t;
            break;
          }
          Wt = e.return;
        }
  }
  function Nf(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ll(t, l), a & 4 && Sn(5, l);
        break;
      case 1:
        if (ll(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (u) {
              Tt(l, l.return, u);
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
              Tt(
                l,
                l.return,
                u
              );
            }
          }
        a & 64 && wf(l), a & 512 && wn(l, l.return);
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
            fr(t, e);
          } catch (u) {
            Tt(l, l.return, u);
          }
        }
        break;
      case 27:
        e === null && a & 4 && jf(l);
      case 26:
      case 5:
        ll(t, l), e === null && a & 4 && zf(l), a & 512 && wn(l, l.return);
        break;
      case 12:
        ll(t, l);
        break;
      case 31:
        ll(t, l), a & 4 && _f(t, l);
        break;
      case 13:
        ll(t, l), a & 4 && Of(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = yg.bind(
          null,
          l
        ), Bg(t, l))));
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
    e !== null && (t.alternate = null, Mf(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && wu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ut = null, oe = !1;
  function el(t, e, l) {
    for (l = l.child; l !== null; )
      Cf(t, e, l), l = l.sibling;
  }
  function Cf(t, e, l) {
    if (he && typeof he.onCommitFiberUnmount == "function")
      try {
        he.onCommitFiberUnmount(Qa, l);
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
        var a = Ut, n = oe;
        Cl(l.type) && (Ut = l.stateNode, oe = !1), el(
          t,
          e,
          l
        ), _n(l.stateNode), Ut = a, oe = n;
        break;
      case 5:
        Zt || Ge(l, e);
      case 6:
        if (a = Ut, n = oe, Ut = null, el(
          t,
          e,
          l
        ), Ut = a, oe = n, Ut !== null)
          if (oe)
            try {
              (Ut.nodeType === 9 ? Ut.body : Ut.nodeName === "HTML" ? Ut.ownerDocument.body : Ut).removeChild(l.stateNode);
            } catch (i) {
              Tt(
                l,
                e,
                i
              );
            }
          else
            try {
              Ut.removeChild(l.stateNode);
            } catch (i) {
              Tt(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        Ut !== null && (oe ? (t = Ut, wd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Ya(t)) : wd(Ut, l.stateNode));
        break;
      case 4:
        a = Ut, n = oe, Ut = l.stateNode.containerInfo, oe = !0, el(
          t,
          e,
          l
        ), Ut = a, oe = n;
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
        Zt || (Ge(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Af(
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
  function _f(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ya(t);
      } catch (l) {
        Tt(e, e.return, l);
      }
    }
  }
  function Of(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ya(t);
      } catch (l) {
        Tt(e, e.return, l);
      }
  }
  function sg(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ef()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ef()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Di(t, e) {
    var l = sg(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = vg.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function se(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], i = t, u = e, s = u;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Cl(s.type)) {
                Ut = s.stateNode, oe = !1;
                break t;
              }
              break;
            case 5:
              Ut = s.stateNode, oe = !1;
              break t;
            case 3:
            case 4:
              Ut = s.stateNode.containerInfo, oe = !0;
              break t;
          }
          s = s.return;
        }
        if (Ut === null) throw Error(o(160));
        Cf(i, u, n), Ut = null, oe = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
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
        se(e, t), re(t), a & 4 && (Al(3, t, t.return), Sn(3, t), Al(5, t, t.return));
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
                      i = n.getElementsByTagName("title")[0], (!i || i[Ja] || i[$t] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), ee(i, a, l), i[$t] = t, Ft(i), a = i;
                      break t;
                    case "link":
                      var u = Ud(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (u) {
                        for (var s = 0; s < u.length; s++)
                          if (i = u[s], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            u.splice(s, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), ee(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = Ud(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (s = 0; s < u.length; s++)
                          if (i = u[s], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            u.splice(s, 1);
                            break e;
                          }
                      }
                      i = n.createElement(a), ee(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  i[$t] = t, Ft(i), a = i;
                }
                t.stateNode = a;
              } else
                Dd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Od(
                n,
                a,
                t.memoizedProps
              );
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? Dd(
              n,
              t.type,
              t.stateNode
            ) : Od(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Vc(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        se(e, t), re(t), a & 512 && (Zt || l === null || Ge(l, l.return)), l !== null && a & 4 && Vc(
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
            Tt(t, t.return, q);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Vc(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Zc = !0);
        break;
      case 6:
        if (se(e, t), re(t), a & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (q) {
            Tt(t, t.return, q);
          }
        }
        break;
      case 3:
        if (Wi = null, n = He, He = Ji(e.containerInfo), se(e, t), He = n, re(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ya(e.containerInfo);
          } catch (q) {
            Tt(t, t.return, q);
          }
        Zc && (Zc = !1, Df(t));
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
        se(e, t), re(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Di(t, a)));
        break;
      case 13:
        se(e, t), re(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Hi = me()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Di(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, w = tl, C = Zt;
        if (tl = w || n, Zt = C || m, se(e, t), Zt = C, tl = w, re(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || tl || Zt || ta(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (i = m.stateNode, n)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    s = m.stateNode;
                    var U = m.memoizedProps.style, z = U != null && U.hasOwnProperty("display") ? U.display : null;
                    s.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (q) {
                  Tt(m, m.return, q);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (q) {
                  Tt(m, m.return, q);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var T = m.stateNode;
                  n ? Ad(T, !0) : Ad(m.stateNode, !1);
                } catch (q) {
                  Tt(m, m.return, q);
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
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Di(t, l))));
        break;
      case 19:
        se(e, t), re(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Di(t, a)));
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
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, i = Xc(t);
            Ui(t, i, n);
            break;
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (ra(u, ""), l.flags &= -33);
            var s = Xc(t);
            Ui(t, s, u);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, w = Xc(t);
            Qc(
              t,
              w,
              m
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (C) {
        Tt(t, t.return, C);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Df(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Df(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ll(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Nf(t, e.alternate, e), e = e.sibling;
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
          typeof l.componentWillUnmount == "function" && Af(
            e,
            e.return,
            l
          ), ta(e);
          break;
        case 27:
          _n(e.stateNode);
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
          ), Sn(4, i);
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
              Tt(a, a.return, w);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  rr(m[n], s);
            } catch (w) {
              Tt(a, a.return, w);
            }
          }
          l && u & 64 && wf(i), wn(i, i.return);
          break;
        case 27:
          jf(i);
        case 26:
        case 5:
          al(
            n,
            i,
            l
          ), l && a === null && u & 4 && zf(i), wn(i, i.return);
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
          ), l && u & 4 && _f(n, i);
          break;
        case 13:
          al(
            n,
            i,
            l
          ), l && u & 4 && Of(n, i);
          break;
        case 22:
          i.memoizedState === null && al(
            n,
            i,
            l
          ), wn(i, i.return);
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
  function Kc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && on(l));
  }
  function Jc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && on(t));
  }
  function Be(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Rf(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function Rf(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Be(
          t,
          e,
          l,
          a
        ), n & 2048 && Sn(9, e);
        break;
      case 1:
        Be(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        Be(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && on(t)));
        break;
      case 12:
        if (n & 2048) {
          Be(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, u = i.id, s = i.onPostCommit;
            typeof s == "function" && s(
              u,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            Tt(e, e.return, m);
          }
        } else
          Be(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        Be(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        Be(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, u = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Be(
          t,
          e,
          l,
          a
        ) : An(t, e) : i._visibility & 2 ? Be(
          t,
          e,
          l,
          a
        ) : (i._visibility |= 2, Ca(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Kc(u, e);
        break;
      case 24:
        Be(
          t,
          e,
          l,
          a
        ), n & 2048 && Jc(e.alternate, e);
        break;
      default:
        Be(
          t,
          e,
          l,
          a
        );
    }
  }
  function Ca(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, u = e, s = l, m = a, w = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ca(
            i,
            u,
            s,
            m,
            n
          ), Sn(8, u);
          break;
        case 23:
          break;
        case 22:
          var C = u.stateNode;
          u.memoizedState !== null ? C._visibility & 2 ? Ca(
            i,
            u,
            s,
            m,
            n
          ) : An(
            i,
            u
          ) : (C._visibility |= 2, Ca(
            i,
            u,
            s,
            m,
            n
          )), n && w & 2048 && Kc(
            u.alternate,
            u
          );
          break;
        case 24:
          Ca(
            i,
            u,
            s,
            m,
            n
          ), n && w & 2048 && Jc(u.alternate, u);
          break;
        default:
          Ca(
            i,
            u,
            s,
            m,
            n
          );
      }
      e = e.sibling;
    }
  }
  function An(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            An(l, a), n & 2048 && Kc(
              a.alternate,
              a
            );
            break;
          case 24:
            An(l, a), n & 2048 && Jc(a.alternate, a);
            break;
          default:
            An(l, a);
        }
        e = e.sibling;
      }
  }
  var zn = 8192;
  function _a(t, e, l) {
    if (t.subtreeFlags & zn)
      for (t = t.child; t !== null; )
        Hf(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Hf(t, e, l) {
    switch (t.tag) {
      case 26:
        _a(
          t,
          e,
          l
        ), t.flags & zn && t.memoizedState !== null && Fg(
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
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = zn, zn = 16777216, _a(
          t,
          e,
          l
        ), zn = a) : _a(
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
          Wt = a, qf(
            a,
            t
          );
        }
      Bf(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        kf(t), t = t.sibling;
  }
  function kf(t) {
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
          Wt = a, qf(
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
  function qf(t, e) {
    for (; Wt !== null; ) {
      var l = Wt;
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
          on(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Wt = a;
      else
        t: for (l = t; Wt !== null; ) {
          a = Wt;
          var n = a.sibling, i = a.return;
          if (Mf(a), a === l) {
            Wt = null;
            break t;
          }
          if (n !== null) {
            n.return = i, Wt = n;
            break t;
          }
          Wt = i;
        }
    }
  }
  var rg = {
    getCacheForType: function(t) {
      var e = Pt(Vt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Pt(Vt).controller.signal;
    }
  }, fg = typeof WeakMap == "function" ? WeakMap : Map, St = 0, Mt = null, st = null, dt = 0, zt = 0, xe = null, zl = !1, Oa = !1, Fc = !1, nl = 0, Bt = 0, Tl = 0, ea = 0, Wc = 0, Se = 0, Ua = 0, jn = null, fe = null, $c = !1, Hi = 0, Gf = 0, Bi = 1 / 0, ki = null, jl = null, Kt = 0, El = null, Da = null, il = 0, Ic = 0, Pc = null, Yf = null, En = 0, to = null;
  function we() {
    return (St & 2) !== 0 && dt !== 0 ? dt & -dt : j.T !== null ? uo() : ls();
  }
  function Lf() {
    if (Se === 0)
      if ((dt & 536870912) === 0 || gt) {
        var t = Zn;
        Zn <<= 1, (Zn & 3932160) === 0 && (Zn = 262144), Se = t;
      } else Se = 536870912;
    return t = ve.current, t !== null && (t.flags |= 32), Se;
  }
  function de(t, e, l) {
    (t === Mt && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) && (Ra(t, 0), Nl(
      t,
      dt,
      Se,
      !1
    )), Ka(t, l), ((St & 2) === 0 || t !== Mt) && (t === Mt && ((St & 2) === 0 && (ea |= l), Bt === 4 && Nl(
      t,
      dt,
      Se,
      !1
    )), Ye(t));
  }
  function Vf(t, e, l) {
    if ((St & 6) !== 0) throw Error(o(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Za(t, e), n = a ? hg(t, e) : lo(t, e, !0), i = a;
    do {
      if (n === 0) {
        Oa && !a && Nl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !dg(l)) {
          n = lo(t, e, !1), i = !1;
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
              var s = t;
              n = jn;
              var m = s.current.memoizedState.isDehydrated;
              if (m && (Ra(s, u).flags |= 256), u = lo(
                s,
                u,
                !1
              ), u !== 2) {
                if (Fc && !m) {
                  s.errorRecoveryDisabledLanes |= i, ea |= i, n = 4;
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
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Nl(
                a,
                e,
                Se,
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
              throw Error(o(329));
          }
          if ((e & 62914560) === e && (n = Hi + 300 - me(), 10 < n)) {
            if (Nl(
              a,
              e,
              Se,
              !zl
            ), Jn(a, 0, !0) !== 0) break t;
            il = e, a.timeoutHandle = xd(
              Xf.bind(
                null,
                a,
                l,
                fe,
                ki,
                $c,
                e,
                Se,
                ea,
                Ua,
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
          Xf(
            a,
            l,
            fe,
            ki,
            $c,
            e,
            Se,
            ea,
            Ua,
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
  function Xf(t, e, l, a, n, i, u, s, m, w, C, U, z, T) {
    if (t.timeoutHandle = -1, U = e.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xe
      }, Hf(
        e,
        i,
        U
      );
      var q = (i & 62914560) === i ? Hi - me() : (i & 4194048) === i ? Gf - me() : 0;
      if (q = Wg(
        U,
        q
      ), q !== null) {
        il = i, t.cancelPendingCommit = q(
          If.bind(
            null,
            t,
            e,
            i,
            l,
            a,
            n,
            u,
            s,
            m,
            C,
            U,
            null,
            z,
            T
          )
        ), Nl(t, i, u, !w);
        return;
      }
    }
    If(
      t,
      e,
      i,
      l,
      a,
      n,
      u,
      s,
      m
    );
  }
  function dg(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!pe(i(), n)) return !1;
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
    e &= ~Wc, e &= ~ea, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var i = 31 - ge(n), u = 1 << i;
      a[i] = -1, n &= ~u;
    }
    l !== 0 && Po(t, l, e);
  }
  function qi() {
    return (St & 6) === 0 ? (Nn(0), !1) : !0;
  }
  function eo() {
    if (st !== null) {
      if (zt === 0)
        var t = st.return;
      else
        t = st, Je = Zl = null, yc(t), Ta = null, rn = 0, t = st;
      for (; t !== null; )
        Sf(t.alternate, t), t = t.return;
      st = null;
    }
  }
  function Ra(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Og(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), il = 0, eo(), Mt = t, st = l = Ze(t.current, null), dt = e, zt = 0, xe = null, zl = !1, Oa = Za(t, e), Fc = !1, Ua = Se = Wc = ea = Tl = Bt = 0, fe = jn = null, $c = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ge(a), i = 1 << n;
        e |= t[n], a &= ~i;
      }
    return nl = e, ui(), l;
  }
  function Qf(t, e) {
    nt = null, j.H = vn, e === za || e === hi ? (e = ur(), zt = 3) : e === ic ? (e = ur(), zt = 4) : zt = e === Uc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, xe = e, st === null && (Bt = 1, Ni(
      t,
      Ne(e, t.current)
    ));
  }
  function Zf() {
    var t = ve.current;
    return t === null ? !0 : (dt & 4194048) === dt ? Oe === null : (dt & 62914560) === dt || (dt & 536870912) !== 0 ? t === Oe : !1;
  }
  function Kf() {
    var t = j.H;
    return j.H = vn, t === null ? vn : t;
  }
  function Jf() {
    var t = j.A;
    return j.A = rg, t;
  }
  function Gi() {
    Bt = 4, zl || (dt & 4194048) !== dt && ve.current !== null || (Oa = !0), (Tl & 134217727) === 0 && (ea & 134217727) === 0 || Mt === null || Nl(
      Mt,
      dt,
      Se,
      !1
    );
  }
  function lo(t, e, l) {
    var a = St;
    St |= 2;
    var n = Kf(), i = Jf();
    (Mt !== t || dt !== e) && (ki = null, Ra(t, e)), e = !1;
    var u = Bt;
    t: do
      try {
        if (zt !== 0 && st !== null) {
          var s = st, m = xe;
          switch (zt) {
            case 8:
              eo(), u = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ve.current === null && (e = !0);
              var w = zt;
              if (zt = 0, xe = null, Ha(t, s, m, w), l && Oa) {
                u = 0;
                break t;
              }
              break;
            default:
              w = zt, zt = 0, xe = null, Ha(t, s, m, w);
          }
        }
        mg(), u = Bt;
        break;
      } catch (C) {
        Qf(t, C);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Je = Zl = null, St = a, j.H = n, j.A = i, st === null && (Mt = null, dt = 0, ui()), u;
  }
  function mg() {
    for (; st !== null; ) Ff(st);
  }
  function hg(t, e) {
    var l = St;
    St |= 2;
    var a = Kf(), n = Jf();
    Mt !== t || dt !== e ? (ki = null, Bi = me() + 500, Ra(t, e)) : Oa = Za(
      t,
      e
    );
    t: do
      try {
        if (zt !== 0 && st !== null) {
          e = st;
          var i = xe;
          e: switch (zt) {
            case 1:
              zt = 0, xe = null, Ha(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (nr(i)) {
                zt = 0, xe = null, Wf(e);
                break;
              }
              e = function() {
                zt !== 2 && zt !== 9 || Mt !== t || (zt = 7), Ye(t);
              }, i.then(e, e);
              break t;
            case 3:
              zt = 7;
              break t;
            case 4:
              zt = 5;
              break t;
            case 7:
              nr(i) ? (zt = 0, xe = null, Wf(e)) : (zt = 0, xe = null, Ha(t, e, i, 7));
              break;
            case 5:
              var u = null;
              switch (st.tag) {
                case 26:
                  u = st.memoizedState;
                case 5:
                case 27:
                  var s = st;
                  if (u ? Rd(u) : s.stateNode.complete) {
                    zt = 0, xe = null;
                    var m = s.sibling;
                    if (m !== null) st = m;
                    else {
                      var w = s.return;
                      w !== null ? (st = w, Yi(w)) : st = null;
                    }
                    break e;
                  }
              }
              zt = 0, xe = null, Ha(t, e, i, 5);
              break;
            case 6:
              zt = 0, xe = null, Ha(t, e, i, 6);
              break;
            case 8:
              eo(), Bt = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        gg();
        break;
      } catch (C) {
        Qf(t, C);
      }
    while (!0);
    return Je = Zl = null, j.H = a, j.A = n, St = l, st !== null ? 0 : (Mt = null, dt = 0, ui(), Bt);
  }
  function gg() {
    for (; st !== null && !km(); )
      Ff(st);
  }
  function Ff(t) {
    var e = bf(t.alternate, t, nl);
    t.memoizedProps = t.pendingProps, e === null ? Yi(t) : st = e;
  }
  function Wf(t) {
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
          dt
        );
        break;
      case 11:
        e = mf(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          dt
        );
        break;
      case 5:
        yc(e);
      default:
        Sf(l, e), e = st = Ks(e, nl), e = bf(l, e, nl);
    }
    t.memoizedProps = t.pendingProps, e === null ? Yi(t) : st = e;
  }
  function Ha(t, e, l, a) {
    Je = Zl = null, yc(e), Ta = null, rn = 0;
    var n = e.return;
    try {
      if (ag(
        t,
        n,
        e,
        l,
        dt
      )) {
        Bt = 1, Ni(
          t,
          Ne(l, t.current)
        ), st = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw st = n, i;
      Bt = 1, Ni(
        t,
        Ne(l, t.current)
      ), st = null;
      return;
    }
    e.flags & 32768 ? (gt || a === 1 ? t = !0 : Oa || (dt & 536870912) !== 0 ? t = !1 : (zl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ve.current, a !== null && a.tag === 13 && (a.flags |= 16384))), $f(e, t)) : Yi(e);
  }
  function Yi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        $f(
          e,
          zl
        );
        return;
      }
      t = e.return;
      var l = ug(
        e.alternate,
        e,
        nl
      );
      if (l !== null) {
        st = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        st = e;
        return;
      }
      st = e = t;
    } while (e !== null);
    Bt === 0 && (Bt = 5);
  }
  function $f(t, e) {
    do {
      var l = cg(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, st = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        st = t;
        return;
      }
      st = t = l;
    } while (t !== null);
    Bt = 6, st = null;
  }
  function If(t, e, l, a, n, i, u, s, m) {
    t.cancelPendingCommit = null;
    do
      Li();
    while (Kt !== 0);
    if ((St & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (i = e.lanes | e.childLanes, i |= Xu, Jm(
        t,
        l,
        i,
        u,
        s,
        m
      ), t === Mt && (st = Mt = null, dt = 0), Da = e, El = t, il = l, Ic = i, Pc = n, Yf = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, bg(Xn, function() {
        return ad(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = j.T, j.T = null, n = k.p, k.p = 2, u = St, St |= 4;
        try {
          og(t, e, l);
        } finally {
          St = u, k.p = n, j.T = a;
        }
      }
      Kt = 1, Pf(), td(), ed();
    }
  }
  function Pf() {
    if (Kt === 1) {
      Kt = 0;
      var t = El, e = Da, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = j.T, j.T = null;
        var a = k.p;
        k.p = 2;
        var n = St;
        St |= 4;
        try {
          Uf(e, t);
          var i = go, u = ks(t.containerInfo), s = i.focusedElem, m = i.selectionRange;
          if (u !== s && s && s.ownerDocument && Bs(
            s.ownerDocument.documentElement,
            s
          )) {
            if (m !== null && qu(s)) {
              var w = m.start, C = m.end;
              if (C === void 0 && (C = w), "selectionStart" in s)
                s.selectionStart = w, s.selectionEnd = Math.min(
                  C,
                  s.value.length
                );
              else {
                var U = s.ownerDocument || document, z = U && U.defaultView || window;
                if (z.getSelection) {
                  var T = z.getSelection(), q = s.textContent.length, I = Math.min(m.start, q), Nt = m.end === void 0 ? I : Math.min(m.end, q);
                  !T.extend && I > Nt && (u = Nt, Nt = I, I = u);
                  var y = Hs(
                    s,
                    I
                  ), g = Hs(
                    s,
                    Nt
                  );
                  if (y && g && (T.rangeCount !== 1 || T.anchorNode !== y.node || T.anchorOffset !== y.offset || T.focusNode !== g.node || T.focusOffset !== g.offset)) {
                    var x = U.createRange();
                    x.setStart(y.node, y.offset), T.removeAllRanges(), I > Nt ? (T.addRange(x), T.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), T.addRange(x));
                  }
                }
              }
            }
            for (U = [], T = s; T = T.parentNode; )
              T.nodeType === 1 && U.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < U.length; s++) {
              var O = U[s];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          tu = !!ho, go = ho = null;
        } finally {
          St = n, k.p = a, j.T = l;
        }
      }
      t.current = e, Kt = 2;
    }
  }
  function td() {
    if (Kt === 2) {
      Kt = 0;
      var t = El, e = Da, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = j.T, j.T = null;
        var a = k.p;
        k.p = 2;
        var n = St;
        St |= 4;
        try {
          Nf(t, e.alternate, e);
        } finally {
          St = n, k.p = a, j.T = l;
        }
      }
      Kt = 3;
    }
  }
  function ed() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0, qm();
      var t = El, e = Da, l = il, a = Yf;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Kt = 5 : (Kt = 0, Da = El = null, ld(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (jl = null), xu(l), e = e.stateNode, he && typeof he.onCommitFiberRoot == "function")
        try {
          he.onCommitFiberRoot(
            Qa,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = j.T, n = k.p, k.p = 2, j.T = null;
        try {
          for (var i = t.onRecoverableError, u = 0; u < a.length; u++) {
            var s = a[u];
            i(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          j.T = e, k.p = n;
        }
      }
      (il & 3) !== 0 && Li(), Ye(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === to ? En++ : (En = 0, to = t) : En = 0, Nn(0);
    }
  }
  function ld(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, on(e)));
  }
  function Li() {
    return Pf(), td(), ed(), ad();
  }
  function ad() {
    if (Kt !== 5) return !1;
    var t = El, e = Ic;
    Ic = 0;
    var l = xu(il), a = j.T, n = k.p;
    try {
      k.p = 32 > l ? 32 : l, j.T = null, l = Pc, Pc = null;
      var i = El, u = il;
      if (Kt = 0, Da = El = null, il = 0, (St & 6) !== 0) throw Error(o(331));
      var s = St;
      if (St |= 4, kf(i.current), Rf(
        i,
        i.current,
        u,
        l
      ), St = s, Nn(0, !1), he && typeof he.onPostCommitFiberRoot == "function")
        try {
          he.onPostCommitFiberRoot(Qa, i);
        } catch {
        }
      return !0;
    } finally {
      k.p = n, j.T = a, ld(t, e);
    }
  }
  function nd(t, e, l) {
    e = Ne(l, e), e = Oc(t.stateNode, e, 2), t = xl(t, e, 2), t !== null && (Ka(t, 2), Ye(t));
  }
  function Tt(t, e, l) {
    if (t.tag === 3)
      nd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          nd(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (jl === null || !jl.has(a))) {
            t = Ne(l, t), l = nf(2), a = xl(e, l, 2), a !== null && (uf(
              l,
              a,
              e,
              t
            ), Ka(a, 2), Ye(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function ao(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new fg();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Fc = !0, n.add(l), t = pg.bind(null, t, e, l), e.then(t, t));
  }
  function pg(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Mt === t && (dt & l) === l && (Bt === 4 || Bt === 3 && (dt & 62914560) === dt && 300 > me() - Hi ? (St & 2) === 0 && Ra(t, 0) : Wc |= l, Ua === dt && (Ua = 0)), Ye(t);
  }
  function id(t, e) {
    e === 0 && (e = Io()), t = Vl(t, e), t !== null && (Ka(t, e), Ye(t));
  }
  function yg(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), id(t, l);
  }
  function vg(t, e) {
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
        throw Error(o(314));
    }
    a !== null && a.delete(e), id(t, l);
  }
  function bg(t, e) {
    return pu(t, e);
  }
  var Vi = null, Ba = null, no = !1, Xi = !1, io = !1, Ml = 0;
  function Ye(t) {
    t !== Ba && t.next === null && (Ba === null ? Vi = Ba = t : Ba = Ba.next = t), Xi = !0, no || (no = !0, Sg());
  }
  function Nn(t, e) {
    if (!io && Xi) {
      io = !0;
      do
        for (var l = !1, a = Vi; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = a.suspendedLanes, s = a.pingedLanes;
              i = (1 << 31 - ge(42 | t) + 1) - 1, i &= n & ~(u & ~s), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, sd(a, i));
          } else
            i = dt, i = Jn(
              a,
              a === Mt ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Za(a, i) || (l = !0, sd(a, i));
          a = a.next;
        }
      while (l);
      io = !1;
    }
  }
  function xg() {
    ud();
  }
  function ud() {
    Xi = no = !1;
    var t = 0;
    Ml !== 0 && _g() && (t = Ml);
    for (var e = me(), l = null, a = Vi; a !== null; ) {
      var n = a.next, i = cd(a, e);
      i === 0 ? (a.next = null, l === null ? Vi = n : l.next = n, n === null && (Ba = l)) : (l = a, (t !== 0 || (i & 3) !== 0) && (Xi = !0)), a = n;
    }
    Kt !== 0 && Kt !== 5 || Nn(t), Ml !== 0 && (Ml = 0);
  }
  function cd(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - ge(i), s = 1 << u, m = n[u];
      m === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[u] = Km(s, e)) : m <= e && (t.expiredLanes |= s), i &= ~s;
    }
    if (e = Mt, l = dt, l = Jn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && yu(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Za(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && yu(a), xu(l)) {
        case 2:
        case 8:
          l = Wo;
          break;
        case 32:
          l = Xn;
          break;
        case 268435456:
          l = $o;
          break;
        default:
          l = Xn;
      }
      return a = od.bind(null, t), l = pu(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && yu(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function od(t, e) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Li() && t.callbackNode !== l)
      return null;
    var a = dt;
    return a = Jn(
      t,
      t === Mt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Vf(t, a, e), cd(t, me()), t.callbackNode != null && t.callbackNode === l ? od.bind(null, t) : null);
  }
  function sd(t, e) {
    if (Li()) return null;
    Vf(t, e, !0);
  }
  function Sg() {
    Ug(function() {
      (St & 6) !== 0 ? pu(
        Fo,
        xg
      ) : ud();
    });
  }
  function uo() {
    if (Ml === 0) {
      var t = wa;
      t === 0 && (t = Qn, Qn <<= 1, (Qn & 261888) === 0 && (Qn = 256)), Ml = t;
    }
    return Ml;
  }
  function rd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : In("" + t);
  }
  function fd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function wg(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var i = rd(
        (n[ue] || null).action
      ), u = a.submitter;
      u && (e = (e = u[ue] || null) ? rd(e.formAction) : u.getAttribute("formAction"), e !== null && (i = e, u = null));
      var s = new li(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ml !== 0) {
                  var m = u ? fd(n, u) : new FormData(n);
                  jc(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: i
                    },
                    null,
                    m
                  );
                }
              } else
                typeof i == "function" && (s.preventDefault(), m = u ? fd(n, u) : new FormData(n), jc(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: i
                  },
                  i,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var co = 0; co < Vu.length; co++) {
    var oo = Vu[co], Ag = oo.toLowerCase(), zg = oo[0].toUpperCase() + oo.slice(1);
    Re(
      Ag,
      "on" + zg
    );
  }
  Re(Ys, "onAnimationEnd"), Re(Ls, "onAnimationIteration"), Re(Vs, "onAnimationStart"), Re("dblclick", "onDoubleClick"), Re("focusin", "onFocus"), Re("focusout", "onBlur"), Re(Gh, "onTransitionRun"), Re(Yh, "onTransitionStart"), Re(Lh, "onTransitionCancel"), Re(Xs, "onTransitionEnd"), oa("onMouseEnter", ["mouseout", "mouseover"]), oa("onMouseLeave", ["mouseout", "mouseover"]), oa("onPointerEnter", ["pointerout", "pointerover"]), oa("onPointerLeave", ["pointerout", "pointerover"]), ql(
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
  ), Tg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn)
  );
  function dd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var u = a.length - 1; 0 <= u; u--) {
            var s = a[u], m = s.instance, w = s.currentTarget;
            if (s = s.listener, m !== i && n.isPropagationStopped())
              break t;
            i = s, n.currentTarget = w;
            try {
              i(n);
            } catch (C) {
              ii(C);
            }
            n.currentTarget = null, i = m;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (s = a[u], m = s.instance, w = s.currentTarget, s = s.listener, m !== i && n.isPropagationStopped())
              break t;
            i = s, n.currentTarget = w;
            try {
              i(n);
            } catch (C) {
              ii(C);
            }
            n.currentTarget = null, i = m;
          }
      }
    }
  }
  function rt(t, e) {
    var l = e[Su];
    l === void 0 && (l = e[Su] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (md(e, t, 2, !1), l.add(a));
  }
  function so(t, e, l) {
    var a = 0;
    e && (a |= 4), md(
      l,
      t,
      a,
      e
    );
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function ro(t) {
    if (!t[Qi]) {
      t[Qi] = !0, is.forEach(function(l) {
        l !== "selectionchange" && (Tg.has(l) || so(l, !1, t), so(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Qi] || (e[Qi] = !0, so("selectionchange", !1, e));
    }
  }
  function md(t, e, l, a) {
    switch (Ld(e)) {
      case 2:
        var n = Pg;
        break;
      case 8:
        n = t0;
        break;
      default:
        n = jo;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !Cu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function fo(t, e, l, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var m = u.tag;
              if ((m === 3 || m === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; s !== null; ) {
            if (u = ia(s), u === null) return;
            if (m = u.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = i = u;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    ys(function() {
      var w = i, C = Nu(l), U = [];
      t: {
        var z = Qs.get(t);
        if (z !== void 0) {
          var T = li, q = t;
          switch (t) {
            case "keypress":
              if (ti(l) === 0) break t;
            case "keydown":
            case "keyup":
              T = vh;
              break;
            case "focusin":
              q = "focus", T = Du;
              break;
            case "focusout":
              q = "blur", T = Du;
              break;
            case "beforeblur":
            case "afterblur":
              T = Du;
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
              T = xs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = Sh;
              break;
            case Ys:
            case Ls:
            case Vs:
              T = sh;
              break;
            case Xs:
              T = Ah;
              break;
            case "scroll":
            case "scrollend":
              T = nh;
              break;
            case "wheel":
              T = Th;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = fh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = ws;
              break;
            case "toggle":
            case "beforetoggle":
              T = Eh;
          }
          var I = (e & 4) !== 0, Nt = !I && (t === "scroll" || t === "scrollend"), y = I ? z !== null ? z + "Capture" : null : z;
          I = [];
          for (var g = w, x; g !== null; ) {
            var O = g;
            if (x = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || x === null || y === null || (O = Wa(g, y), O != null && I.push(
              Cn(g, O, x)
            )), Nt) break;
            g = g.return;
          }
          0 < I.length && (z = new T(
            z,
            q,
            null,
            l,
            C
          ), U.push({ event: z, listeners: I }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", T = t === "mouseout" || t === "pointerout", z && l !== Eu && (q = l.relatedTarget || l.fromElement) && (ia(q) || q[na]))
            break t;
          if ((T || z) && (z = C.window === C ? C : (z = C.ownerDocument) ? z.defaultView || z.parentWindow : window, T ? (q = l.relatedTarget || l.toElement, T = w, q = q ? ia(q) : null, q !== null && (Nt = b(q), I = q.tag, q !== Nt || I !== 5 && I !== 27 && I !== 6) && (q = null)) : (T = null, q = w), T !== q)) {
            if (I = xs, O = "onMouseLeave", y = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (I = ws, O = "onPointerLeave", y = "onPointerEnter", g = "pointer"), Nt = T == null ? z : Fa(T), x = q == null ? z : Fa(q), z = new I(
              O,
              g + "leave",
              T,
              l,
              C
            ), z.target = Nt, z.relatedTarget = x, O = null, ia(C) === w && (I = new I(
              y,
              g + "enter",
              q,
              l,
              C
            ), I.target = x, I.relatedTarget = Nt, O = I), Nt = O, T && q)
              e: {
                for (I = jg, y = T, g = q, x = 0, O = y; O; O = I(O))
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
            T !== null && hd(
              U,
              z,
              T,
              I,
              !1
            ), q !== null && Nt !== null && hd(
              U,
              Nt,
              q,
              I,
              !0
            );
          }
        }
        t: {
          if (z = w ? Fa(w) : window, T = z.nodeName && z.nodeName.toLowerCase(), T === "select" || T === "input" && z.type === "file")
            var vt = Cs;
          else if (Ns(z))
            if (_s)
              vt = Bh;
            else {
              vt = Rh;
              var Q = Dh;
            }
          else
            T = z.nodeName, !T || T.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? w && ju(w.elementType) && (vt = Cs) : vt = Hh;
          if (vt && (vt = vt(t, w))) {
            Ms(
              U,
              vt,
              l,
              C
            );
            break t;
          }
          Q && Q(t, z, w), t === "focusout" && w && z.type === "number" && w.memoizedProps.value != null && Tu(z, "number", z.value);
        }
        switch (Q = w ? Fa(w) : window, t) {
          case "focusin":
            (Ns(Q) || Q.contentEditable === "true") && (ha = Q, Gu = w, nn = null);
            break;
          case "focusout":
            nn = Gu = ha = null;
            break;
          case "mousedown":
            Yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yu = !1, qs(U, l, C);
            break;
          case "selectionchange":
            if (qh) break;
          case "keydown":
          case "keyup":
            qs(U, l, C);
        }
        var it;
        if (Hu)
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
          ma ? js(t, l) && (mt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (mt = "onCompositionStart");
        mt && (As && l.locale !== "ko" && (ma || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && ma && (it = vs()) : (ml = C, _u = "value" in ml ? ml.value : ml.textContent, ma = !0)), Q = Zi(w, mt), 0 < Q.length && (mt = new Ss(
          mt,
          t,
          null,
          l,
          C
        ), U.push({ event: mt, listeners: Q }), it ? mt.data = it : (it = Es(l), it !== null && (mt.data = it)))), (it = Mh ? Ch(t, l) : _h(t, l)) && (mt = Zi(w, "onBeforeInput"), 0 < mt.length && (Q = new Ss(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          C
        ), U.push({
          event: Q,
          listeners: mt
        }), Q.data = it)), wg(
          U,
          t,
          w,
          l,
          C
        );
      }
      dd(U, e);
    });
  }
  function Cn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Zi(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = Wa(t, l), n != null && a.unshift(
        Cn(t, n, i)
      ), n = Wa(t, e), n != null && a.push(
        Cn(t, n, i)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function jg(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function hd(t, e, l, a, n) {
    for (var i = e._reactName, u = []; l !== null && l !== a; ) {
      var s = l, m = s.alternate, w = s.stateNode;
      if (s = s.tag, m !== null && m === a) break;
      s !== 5 && s !== 26 && s !== 27 || w === null || (m = w, n ? (w = Wa(l, i), w != null && u.unshift(
        Cn(l, w, m)
      )) : n || (w = Wa(l, i), w != null && u.push(
        Cn(l, w, m)
      ))), l = l.return;
    }
    u.length !== 0 && t.push({ event: e, listeners: u });
  }
  var Eg = /\r\n?/g, Ng = /\u0000|\uFFFD/g;
  function gd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Eg, `
`).replace(Ng, "");
  }
  function pd(t, e) {
    return e = gd(e), gd(t) === e;
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
        gs(t, a, i);
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
        a != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && rt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(o(60));
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
        rt("beforetoggle", t), rt("toggle", t), Fn(t, "popover", a);
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = lh.get(l) || l, Fn(t, l, a));
    }
  }
  function mo(t, e, l, a, n, i) {
    switch (l) {
      case "style":
        gs(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(o(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ra(t, a) : (typeof a == "number" || typeof a == "bigint") && ra(t, "" + a);
        break;
      case "onScroll":
        a != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && rt("scrollend", t);
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
        if (!us.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), i = t[ue] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Fn(t, l, a);
          }
    }
  }
  function ee(t, e, l) {
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
        rt("error", t), rt("load", t);
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
                  throw Error(o(137, e));
                default:
                  Et(t, e, i, u, l, null);
              }
          }
        n && Et(t, e, "srcSet", l.srcSet, l, null), a && Et(t, e, "src", l.src, l, null);
        return;
      case "input":
        rt("invalid", t);
        var s = i = u = n = null, m = null, w = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var C = l[a];
            if (C != null)
              switch (a) {
                case "name":
                  n = C;
                  break;
                case "type":
                  u = C;
                  break;
                case "checked":
                  m = C;
                  break;
                case "defaultChecked":
                  w = C;
                  break;
                case "value":
                  i = C;
                  break;
                case "defaultValue":
                  s = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null)
                    throw Error(o(137, e));
                  break;
                default:
                  Et(t, e, a, C, l, null);
              }
          }
        fs(
          t,
          i,
          s,
          m,
          w,
          u,
          n,
          !1
        );
        return;
      case "select":
        rt("invalid", t), a = u = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (s = l[n], s != null))
            switch (n) {
              case "value":
                i = s;
                break;
              case "defaultValue":
                u = s;
                break;
              case "multiple":
                a = s;
              default:
                Et(t, e, n, s, l, null);
            }
        e = i, l = u, t.multiple = !!a, e != null ? sa(t, !!a, e, !1) : l != null && sa(t, !!a, l, !0);
        return;
      case "textarea":
        rt("invalid", t), i = n = a = null;
        for (u in l)
          if (l.hasOwnProperty(u) && (s = l[u], s != null))
            switch (u) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                i = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                Et(t, e, u, s, l, null);
            }
        ms(t, a, n, i);
        return;
      case "option":
        for (m in l)
          l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Et(t, e, m, a, l, null));
        return;
      case "dialog":
        rt("beforetoggle", t), rt("toggle", t), rt("cancel", t), rt("close", t);
        break;
      case "iframe":
      case "object":
        rt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Mn.length; a++)
          rt(Mn[a], t);
        break;
      case "image":
        rt("error", t), rt("load", t);
        break;
      case "details":
        rt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        rt("error", t), rt("load", t);
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
                throw Error(o(137, e));
              default:
                Et(t, e, w, a, l, null);
            }
        return;
      default:
        if (ju(e)) {
          for (C in l)
            l.hasOwnProperty(C) && (a = l[C], a !== void 0 && mo(
              t,
              e,
              C,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && (a = l[s], a != null && Et(t, e, s, a, l, null));
  }
  function Mg(t, e, l, a) {
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
        var n = null, i = null, u = null, s = null, m = null, w = null, C = null;
        for (T in l) {
          var U = l[T];
          if (l.hasOwnProperty(T) && U != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = U;
              default:
                a.hasOwnProperty(T) || Et(t, e, T, null, a, U);
            }
        }
        for (var z in a) {
          var T = a[z];
          if (U = l[z], a.hasOwnProperty(z) && (T != null || U != null))
            switch (z) {
              case "type":
                i = T;
                break;
              case "name":
                n = T;
                break;
              case "checked":
                w = T;
                break;
              case "defaultChecked":
                C = T;
                break;
              case "value":
                u = T;
                break;
              case "defaultValue":
                s = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(o(137, e));
                break;
              default:
                T !== U && Et(
                  t,
                  e,
                  z,
                  T,
                  a,
                  U
                );
            }
        }
        zu(
          t,
          u,
          s,
          m,
          w,
          C,
          i,
          n
        );
        return;
      case "select":
        T = u = s = z = null;
        for (i in l)
          if (m = l[i], l.hasOwnProperty(i) && m != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                T = m;
              default:
                a.hasOwnProperty(i) || Et(
                  t,
                  e,
                  i,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (i = a[n], m = l[n], a.hasOwnProperty(n) && (i != null || m != null))
            switch (n) {
              case "value":
                z = i;
                break;
              case "defaultValue":
                s = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== m && Et(
                  t,
                  e,
                  n,
                  i,
                  a,
                  m
                );
            }
        e = s, l = u, a = T, z != null ? sa(t, !!l, z, !1) : !!a != !!l && (e != null ? sa(t, !!l, e, !0) : sa(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        T = z = null;
        for (s in l)
          if (n = l[s], l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                Et(t, e, s, null, a, n);
            }
        for (u in a)
          if (n = a[u], i = l[u], a.hasOwnProperty(u) && (n != null || i != null))
            switch (u) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                T = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== i && Et(t, e, u, n, a, i);
            }
        ds(t, z, T);
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
        for (m in a)
          z = a[m], T = l[m], a.hasOwnProperty(m) && z !== T && (z != null || T != null) && (m === "selected" ? t.selected = z && typeof z != "function" && typeof z != "symbol" : Et(
            t,
            e,
            m,
            z,
            a,
            T
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
          if (z = a[w], T = l[w], a.hasOwnProperty(w) && z !== T && (z != null || T != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, e));
                break;
              default:
                Et(
                  t,
                  e,
                  w,
                  z,
                  a,
                  T
                );
            }
        return;
      default:
        if (ju(e)) {
          for (var Nt in l)
            z = l[Nt], l.hasOwnProperty(Nt) && z !== void 0 && !a.hasOwnProperty(Nt) && mo(
              t,
              e,
              Nt,
              void 0,
              a,
              z
            );
          for (C in a)
            z = a[C], T = l[C], !a.hasOwnProperty(C) || z === T || z === void 0 && T === void 0 || mo(
              t,
              e,
              C,
              z,
              a,
              T
            );
          return;
        }
    }
    for (var y in l)
      z = l[y], l.hasOwnProperty(y) && z != null && !a.hasOwnProperty(y) && Et(t, e, y, null, a, z);
    for (U in a)
      z = a[U], T = l[U], !a.hasOwnProperty(U) || z === T || z == null && T == null || Et(t, e, U, z, a, T);
  }
  function yd(t) {
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
  function Cg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], i = n.transferSize, u = n.initiatorType, s = n.duration;
        if (i && s && yd(u)) {
          for (u = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a], w = m.startTime;
            if (w > s) break;
            var C = m.transferSize, U = m.initiatorType;
            C && yd(U) && (m = m.responseEnd, u += C * (m < s ? 1 : (s - w) / (m - w)));
          }
          if (--a, e += 8 * (i + u) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var ho = null, go = null;
  function Ki(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function vd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function bd(t, e) {
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
  function po(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var yo = null;
  function _g() {
    var t = window.event;
    return t && t.type === "popstate" ? t === yo ? !1 : (yo = t, !0) : (yo = null, !1);
  }
  var xd = typeof setTimeout == "function" ? setTimeout : void 0, Og = typeof clearTimeout == "function" ? clearTimeout : void 0, Sd = typeof Promise == "function" ? Promise : void 0, Ug = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sd < "u" ? function(t) {
    return Sd.resolve(null).then(t).catch(Dg);
  } : xd;
  function Dg(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Cl(t) {
    return t === "head";
  }
  function wd(t, e) {
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
          _n(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, _n(l);
          for (var i = l.firstChild; i; ) {
            var u = i.nextSibling, s = i.nodeName;
            i[Ja] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = u;
          }
        } else
          l === "body" && _n(t.ownerDocument.body);
      l = n;
    } while (l);
    Ya(e);
  }
  function Ad(t, e) {
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
  function vo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vo(l), wu(l);
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
  function Rg(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Ja])
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
      if (t = Ue(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Hg(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ue(t.nextSibling), t === null)) return null;
    return t;
  }
  function zd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ue(t.nextSibling), t === null)) return null;
    return t;
  }
  function bo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function xo(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Bg(t, e) {
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
  function Ue(t) {
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
  var So = null;
  function Td(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Ue(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function jd(t) {
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
  function Ed(t, e, l) {
    switch (e = Ki(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function _n(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    wu(t);
  }
  var De = /* @__PURE__ */ new Map(), Nd = /* @__PURE__ */ new Set();
  function Ji(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ul = k.d;
  k.d = {
    f: kg,
    r: qg,
    D: Gg,
    C: Yg,
    L: Lg,
    m: Vg,
    X: Qg,
    S: Xg,
    M: Zg
  };
  function kg() {
    var t = ul.f(), e = qi();
    return t || e;
  }
  function qg(t) {
    var e = ua(t);
    e !== null && e.tag === 5 && e.type === "form" ? Xr(e) : ul.r(t);
  }
  var ka = typeof document > "u" ? null : document;
  function Md(t, e, l) {
    var a = ka;
    if (a && typeof e == "string" && e) {
      var n = je(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Nd.has(n) || (Nd.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), ee(e, "link", t), Ft(e), a.head.appendChild(e)));
    }
  }
  function Gg(t) {
    ul.D(t), Md("dns-prefetch", t, null);
  }
  function Yg(t, e) {
    ul.C(t, e), Md("preconnect", t, e);
  }
  function Lg(t, e, l) {
    ul.L(t, e, l);
    var a = ka;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + je(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + je(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + je(
        l.imageSizes
      ) + '"]')) : n += '[href="' + je(t) + '"]';
      var i = n;
      switch (e) {
        case "style":
          i = qa(t);
          break;
        case "script":
          i = Ga(t);
      }
      De.has(i) || (t = E(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), De.set(i, t), a.querySelector(n) !== null || e === "style" && a.querySelector(On(i)) || e === "script" && a.querySelector(Un(i)) || (e = a.createElement("link"), ee(e, "link", t), Ft(e), a.head.appendChild(e)));
    }
  }
  function Vg(t, e) {
    ul.m(t, e);
    var l = ka;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + je(a) + '"][href="' + je(t) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Ga(t);
      }
      if (!De.has(i) && (t = E({ rel: "modulepreload", href: t }, e), De.set(i, t), l.querySelector(n) === null)) {
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
        a = l.createElement("link"), ee(a, "link", t), Ft(a), l.head.appendChild(a);
      }
    }
  }
  function Xg(t, e, l) {
    ul.S(t, e, l);
    var a = ka;
    if (a && t) {
      var n = ca(a).hoistableStyles, i = qa(t);
      e = e || "default";
      var u = n.get(i);
      if (!u) {
        var s = { loading: 0, preload: null };
        if (u = a.querySelector(
          On(i)
        ))
          s.loading = 5;
        else {
          t = E(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = De.get(i)) && wo(t, l);
          var m = u = a.createElement("link");
          Ft(m), ee(m, "link", t), m._p = new Promise(function(w, C) {
            m.onload = w, m.onerror = C;
          }), m.addEventListener("load", function() {
            s.loading |= 1;
          }), m.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Fi(u, e, a);
        }
        u = {
          type: "stylesheet",
          instance: u,
          count: 1,
          state: s
        }, n.set(i, u);
      }
    }
  }
  function Qg(t, e) {
    ul.X(t, e);
    var l = ka;
    if (l && t) {
      var a = ca(l).hoistableScripts, n = Ga(t), i = a.get(n);
      i || (i = l.querySelector(Un(n)), i || (t = E({ src: t, async: !0 }, e), (e = De.get(n)) && Ao(t, e), i = l.createElement("script"), Ft(i), ee(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Zg(t, e) {
    ul.M(t, e);
    var l = ka;
    if (l && t) {
      var a = ca(l).hoistableScripts, n = Ga(t), i = a.get(n);
      i || (i = l.querySelector(Un(n)), i || (t = E({ src: t, async: !0, type: "module" }, e), (e = De.get(n)) && Ao(t, e), i = l.createElement("script"), Ft(i), ee(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function Cd(t, e, l, a) {
    var n = (n = et.current) ? Ji(n) : null;
    if (!n) throw Error(o(446));
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
            On(t)
          )) && !i._p && (u.instance = i, u.state.loading = 5), De.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, De.set(t, l), i || Kg(
            n,
            t,
            l,
            u.state
          ))), e && a === null)
            throw Error(o(528, ""));
          return u;
        }
        if (e && a !== null)
          throw Error(o(529, ""));
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
        throw Error(o(444, t));
    }
  }
  function qa(t) {
    return 'href="' + je(t) + '"';
  }
  function On(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function _d(t) {
    return E({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Kg(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), ee(e, "link", l), Ft(e), t.head.appendChild(e));
  }
  function Ga(t) {
    return '[src="' + je(t) + '"]';
  }
  function Un(t) {
    return "script[async]" + t;
  }
  function Od(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + je(l.href) + '"]'
          );
          if (a)
            return e.instance = a, Ft(a), a;
          var n = E({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Ft(a), ee(a, "style", n), Fi(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = qa(l.href);
          var i = t.querySelector(
            On(n)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Ft(i), i;
          a = _d(l), (n = De.get(n)) && wo(a, n), i = (t.ownerDocument || t).createElement("link"), Ft(i);
          var u = i;
          return u._p = new Promise(function(s, m) {
            u.onload = s, u.onerror = m;
          }), ee(i, "link", a), e.state.loading |= 4, Fi(i, l.precedence, t), e.instance = i;
        case "script":
          return i = Ga(l.src), (n = t.querySelector(
            Un(i)
          )) ? (e.instance = n, Ft(n), n) : (a = l, (n = De.get(i)) && (a = E({}, l), Ao(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Ft(n), ee(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Fi(a, l.precedence, t));
    return e.instance;
  }
  function Fi(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, u = 0; u < a.length; u++) {
      var s = a[u];
      if (s.dataset.precedence === e) i = s;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function wo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Ao(t, e) {
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
      if (!(i[Ja] || i[$t] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(e) || "";
        u = t + u;
        var s = a.get(u);
        s ? s.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function Dd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Jg(t, e, l) {
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
  function Rd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Fg(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = qa(a.href), i = e.querySelector(
          On(n)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = $i.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Ft(i);
          return;
        }
        i = e.ownerDocument || e, a = _d(a), (n = De.get(n)) && wo(a, n), i = i.createElement("link"), Ft(i);
        var u = i;
        u._p = new Promise(function(s, m) {
          u.onload = s, u.onerror = m;
        }), ee(i, "link", a), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = $i.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var zo = 0;
  function Wg(t, e) {
    return t.stylesheets && t.count === 0 && Pi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Pi(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && zo === 0 && (zo = 62500 * Cg());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Pi(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > zo ? 50 : 800) + e
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
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ii = /* @__PURE__ */ new Map(), e.forEach($g, t), Ii = null, $i.call(t));
  }
  function $g(t, e) {
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
  var Dn = {
    $$typeof: ut,
    Provider: null,
    Consumer: null,
    _currentValue: N,
    _currentValue2: N,
    _threadCount: 0
  };
  function Ig(t, e, l, a, n, i, u, s, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = vu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vu(0), this.hiddenUpdates = vu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Hd(t, e, l, a, n, i, u, s, m, w, C, U) {
    return t = new Ig(
      t,
      e,
      l,
      u,
      m,
      w,
      C,
      U,
      s
    ), e = 1, i === !0 && (e |= 24), i = ye(3, null, null, e), t.current = i, i.stateNode = t, e = lc(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, uc(i), t;
  }
  function Bd(t) {
    return t ? (t = ya, t) : ya;
  }
  function kd(t, e, l, a, n, i) {
    n = Bd(n), a.context === null ? a.context = n : a.pendingContext = n, a = bl(e), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = xl(t, a, e), l !== null && (de(l, t, e), dn(l, t, e));
  }
  function qd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function To(t, e) {
    qd(t, e), (t = t.alternate) && qd(t, e);
  }
  function Gd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Vl(t, 67108864);
      e !== null && de(e, t, 67108864), To(t, 67108864);
    }
  }
  function Yd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = we();
      e = bu(e);
      var l = Vl(t, e);
      l !== null && de(l, t, e), To(t, e);
    }
  }
  var tu = !0;
  function Pg(t, e, l, a) {
    var n = j.T;
    j.T = null;
    var i = k.p;
    try {
      k.p = 2, jo(t, e, l, a);
    } finally {
      k.p = i, j.T = n;
    }
  }
  function t0(t, e, l, a) {
    var n = j.T;
    j.T = null;
    var i = k.p;
    try {
      k.p = 8, jo(t, e, l, a);
    } finally {
      k.p = i, j.T = n;
    }
  }
  function jo(t, e, l, a) {
    if (tu) {
      var n = Eo(a);
      if (n === null)
        fo(
          t,
          e,
          a,
          eu,
          l
        ), Vd(t, a);
      else if (l0(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Vd(t, a), e & 4 && -1 < e0.indexOf(t)) {
        for (; n !== null; ) {
          var i = ua(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = kl(i.pendingLanes);
                  if (u !== 0) {
                    var s = i;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; u; ) {
                      var m = 1 << 31 - ge(u);
                      s.entanglements[1] |= m, u &= ~m;
                    }
                    Ye(i), (St & 6) === 0 && (Bi = me() + 500, Nn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Vl(i, 2), s !== null && de(s, i, 2), qi(), To(i, 2);
            }
          if (i = Eo(a), i === null && fo(
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
        fo(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function Eo(t) {
    return t = Nu(t), No(t);
  }
  var eu = null;
  function No(t) {
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
  function Ld(t) {
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
        switch (Gm()) {
          case Fo:
            return 2;
          case Wo:
            return 8;
          case Xn:
          case Ym:
            return 32;
          case $o:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mo = !1, _l = null, Ol = null, Ul = null, Rn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Dl = [], e0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Vd(t, e) {
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
        Ul = null;
        break;
      case "pointerover":
      case "pointerout":
        Rn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(e.pointerId);
    }
  }
  function Bn(t, e, l, a, n, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, e !== null && (e = ua(e), e !== null && Gd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function l0(t, e, l, a, n) {
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
        return Ul = Bn(
          Ul,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Rn.set(
          i,
          Bn(
            Rn.get(i) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Hn.set(
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
    }
    return !1;
  }
  function Xd(t) {
    var e = ia(t.target);
    if (e !== null) {
      var l = b(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = S(l), e !== null) {
            t.blockedOn = e, as(t.priority, function() {
              Yd(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = _(l), e !== null) {
            t.blockedOn = e, as(t.priority, function() {
              Yd(l);
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
      var l = Eo(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Eu = a, l.target.dispatchEvent(a), Eu = null;
      } else
        return e = ua(l), e !== null && Gd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Qd(t, e, l) {
    lu(t) && l.delete(e);
  }
  function a0() {
    Mo = !1, _l !== null && lu(_l) && (_l = null), Ol !== null && lu(Ol) && (Ol = null), Ul !== null && lu(Ul) && (Ul = null), Rn.forEach(Qd), Hn.forEach(Qd);
  }
  function au(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Mo || (Mo = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      a0
    )));
  }
  var nu = null;
  function Zd(t) {
    nu !== t && (nu = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        nu === t && (nu = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (No(a || l) === null)
              continue;
            break;
          }
          var i = ua(l);
          i !== null && (t.splice(e, 3), e -= 3, jc(
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
    function e(m) {
      return au(m, t);
    }
    _l !== null && au(_l, t), Ol !== null && au(Ol, t), Ul !== null && au(Ul, t), Rn.forEach(e), Hn.forEach(e);
    for (var l = 0; l < Dl.length; l++) {
      var a = Dl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Dl.length && (l = Dl[0], l.blockedOn === null); )
      Xd(l), l.blockedOn === null && Dl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], i = l[a + 1], u = n[ue] || null;
        if (typeof i == "function")
          u || Zd(l);
        else if (u) {
          var s = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, u = i[ue] || null)
              s = u.formAction;
            else if (No(n) !== null) continue;
          } else s = u.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3), a -= 3), Zd(l);
        }
      }
  }
  function Kd() {
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
  function Co(t) {
    this._internalRoot = t;
  }
  iu.prototype.render = Co.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var l = e.current, a = we();
    kd(l, a, t, e, null, null);
  }, iu.prototype.unmount = Co.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      kd(t.current, 2, null, t, null, null), qi(), e[na] = null;
    }
  };
  function iu(t) {
    this._internalRoot = t;
  }
  iu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = ls();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Dl.length && e !== 0 && e < Dl[l].priority; l++) ;
      Dl.splice(l, 0, t), l === 0 && Xd(t);
    }
  };
  var Jd = d.version;
  if (Jd !== "19.2.3")
    throw Error(
      o(
        527,
        Jd,
        "19.2.3"
      )
    );
  k.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = v(e), t = t !== null ? R(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var n0 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uu.isDisabled && uu.supportsFiber)
      try {
        Qa = uu.inject(
          n0
        ), he = uu;
      } catch {
      }
  }
  return qn.createRoot = function(t, e) {
    if (!p(t)) throw Error(o(299));
    var l = !1, a = "", n = tf, i = ef, u = lf;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (u = e.onRecoverableError)), e = Hd(
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
      Kd
    ), t[na] = e.current, ro(t), new Co(e);
  }, qn.hydrateRoot = function(t, e, l) {
    if (!p(t)) throw Error(o(299));
    var a = !1, n = "", i = tf, u = ef, s = lf, m = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = Hd(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      m,
      i,
      u,
      s,
      Kd
    ), e.context = Bd(null), l = e.current, a = we(), a = bu(a), n = bl(a), n.callback = null, xl(l, n, a), l = a, e.current.lanes = l, Ka(e, l), Ye(e), t[na] = e.current, ro(t), new iu(e);
  }, qn.version = "19.2.3", qn;
}
var nm;
function g0() {
  if (nm) return Uo.exports;
  nm = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
  }
  return c(), Uo.exports = h0(), Uo.exports;
}
var p0 = g0();
const im = (c) => {
  let d;
  const f = /* @__PURE__ */ new Set(), o = (v, R) => {
    const E = typeof v == "function" ? v(d) : v;
    if (!Object.is(E, d)) {
      const B = d;
      d = R ?? (typeof E != "object" || E === null) ? E : Object.assign({}, d, E), f.forEach((X) => X(d, B));
    }
  }, p = () => d, _ = { setState: o, getState: p, getInitialState: () => A, subscribe: (v) => (f.add(v), () => f.delete(v)) }, A = d = c(o, p, _);
  return _;
}, y0 = ((c) => c ? im(c) : im), v0 = (c) => c;
function b0(c, d = v0) {
  const f = Yn.useSyncExternalStore(
    c.subscribe,
    Yn.useCallback(() => d(c.getState()), [c, d]),
    Yn.useCallback(() => d(c.getInitialState()), [c, d])
  );
  return Yn.useDebugValue(f), f;
}
const um = (c) => {
  const d = y0(c), f = (o) => b0(d, o);
  return Object.assign(f, d), f;
}, x0 = ((c) => c ? um(c) : um), vm = "atlisoChatThreads", Yo = "atlisoChatActiveThread", cm = "atlisoChatSessionId";
function Vn(c = "id") {
  try {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
      return `${c}-${crypto.randomUUID()}`;
  } catch {
  }
  return `${c}-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function om(c = !1) {
  try {
    if (!c) {
      const f = localStorage.getItem(cm);
      if (f) return f;
    }
    const d = Vn("session");
    return localStorage.setItem(cm, d), d;
  } catch {
    return Vn("session");
  }
}
function S0() {
  try {
    const c = localStorage.getItem(vm);
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
    localStorage.setItem(vm, JSON.stringify(c));
  } catch (d) {
    console.warn("[AtlisoChatWidget] Failed to save threads:", d);
  }
}
function w0() {
  try {
    return localStorage.getItem(Yo);
  } catch {
    return null;
  }
}
function Bo(c) {
  try {
    c ? localStorage.setItem(Yo, c) : localStorage.removeItem(Yo);
  } catch (d) {
    console.warn("[AtlisoChatWidget] Failed to save active thread ID:", d);
  }
}
function sm() {
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
function ko(c, d, f = "text", o) {
  return {
    id: Vn("msg"),
    role: c,
    content: d,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    type: f,
    ...o
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
async function A0(c, d) {
  try {
    const o = `${d.replace(/\/$/, "")}/api/widget/config/${c}`;
    console.log("[AtlisoChatWidget] Fetching widget config from:", o);
    const p = {
      Accept: "application/json"
    };
    o.includes("ngrok") && (p["ngrok-skip-browser-warning"] = "true");
    const b = await fetch(o, {
      method: "GET",
      headers: p,
      mode: "cors"
    });
    if (!b.ok)
      return b.status === 404 ? console.warn(`[AtlisoChatWidget] Organization not found: ${c}`) : console.warn(`[AtlisoChatWidget] API returned ${b.status}`), null;
    const S = await b.json();
    console.log("[AtlisoChatWidget] Received widget config:", S);
    const { mapConfigToCustomization: _ } = await import("./configMapper-abgKZOKo.js");
    return _(S, aa.webhookUrl);
  } catch (f) {
    return console.warn("[AtlisoChatWidget] Failed to fetch widget config:", f), null;
  }
}
async function bm(c, d, f, o, p) {
  const b = {
    message: d,
    messageType: p?.messageType,
    sessionId: f,
    sessionKey: f,
    conversationHistory: o,
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
    const E = R?.handoffStatus || "none", B = R?.endConversation || !1;
    if (R && typeof R == "object" && "output" in R && R.output === "")
      return { reply: "", handoffStatus: E, endConversation: B };
    const X = su(R);
    return { reply: X !== null ? X : "I received your message and will get back to you shortly!", handoffStatus: E, endConversation: B };
  } catch (S) {
    throw console.error("[AtlisoChatWidget] Error sending message:", S), S;
  }
}
function su(c, d = /* @__PURE__ */ new Set()) {
  if (c == null) return null;
  if (typeof c == "string") {
    const p = c.trim();
    return p.length ? p : null;
  }
  if (typeof c == "number") return c.toString();
  if (typeof c != "object" || d.has(c)) return null;
  d.add(c);
  const f = c, o = [
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
  for (const p of o)
    if (p in f) {
      const b = su(f[p], d);
      if (b) return b;
    }
  if (Array.isArray(c))
    for (const p of c) {
      const b = su(p, d);
      if (b) return b;
    }
  else
    for (const p of Object.values(f)) {
      const b = su(p, d);
      if (b) return b;
    }
  return null;
}
const z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_CUSTOMIZATION: aa,
  fetchWidgetConfig: A0,
  sendMessageToWebhook: bm
}, Symbol.toStringTag, { value: "Module" }));
async function T0() {
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)(), d = c.createOscillator(), f = c.createGain();
    d.connect(f), f.connect(c.destination), d.frequency.value = 800, d.type = "sine", f.gain.setValueAtTime(0.3, c.currentTime), f.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.3), d.start(c.currentTime), d.stop(c.currentTime + 0.3), setTimeout(() => {
      d.disconnect(), f.disconnect();
    }, 500);
  } catch (c) {
    console.warn("[AtlisoChatWidget] Could not play notification sound:", c);
  }
}
function j0(c) {
  if (!c) return "0 B";
  const d = ["B", "KB", "MB", "GB"], f = Math.min(d.length - 1, Math.floor(Math.log(c) / Math.log(1024))), o = c / Math.pow(1024, f);
  return `${o.toFixed(o >= 10 || f === 0 ? 0 : 1)} ${d[f]}`;
}
const Ae = x0((c, d) => ({
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
      const { threads: o, activeThreadId: p } = d();
      if (p) {
        const b = o.map(
          (S) => S.id === p ? { ...S, unread: !1, unreadCount: 0 } : S
        );
        c({ threads: b }), Le(b);
      }
    }
  },
  toggleOpen: () => {
    const { isOpen: f, setIsOpen: o } = d();
    o(!f);
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
    const { threads: o } = d();
    if (o.find((b) => b.id === f)) {
      const b = o.map(
        (S) => S.id === f ? { ...S, unread: !1, unreadCount: 0 } : S
      );
      c({ activeThreadId: f, threads: b, currentView: "chat" }), Bo(f), Le(b);
    }
  },
  startNewConversation: () => {
    const { threads: f, customization: o } = d(), p = om(!0), b = sm(), S = [b, ...f];
    c({
      sessionId: p,
      // Update session ID in store
      threads: S,
      activeThreadId: b.id,
      currentView: "chat"
    }), Le(S), Bo(b.id), d().stopPolling();
    const _ = o?.welcomeMessage || "Hello! How can I help you today?";
    d().addMessage("bot", _);
  },
  submitFeedback: (f) => {
    const { threads: o, activeThreadId: p, addMessage: b } = d();
    if (!p) return;
    const S = o.map(
      (_) => _.id === p ? { ..._, feedbackRating: f } : _
    );
    c({ threads: S }), Le(S), b("bot", `Thank you for your feedback! You rated this conversation ${f} star${f !== 1 ? "s" : ""}.`), setTimeout(() => {
      c({ currentView: "home" });
    }, 3e3);
  },
  // Message actions
  addMessage: (f, o, p = {}) => {
    const { threads: b, activeThreadId: S, isOpen: _, currentView: A } = d();
    if (!S) return;
    const v = ko(f, o, p.type || "text", p), R = (/* @__PURE__ */ new Date()).toISOString();
    if (c((E) => {
      const { threads: B, activeThreadId: X, isOpen: tt, currentView: G } = E;
      if (!X) return E;
      const K = B.map((Z) => {
        if (Z.id !== X) return Z;
        const ut = f === "bot" && !(tt && G === "chat") ? Z.unreadCount + 1 : Z.unreadCount;
        return {
          ...Z,
          messages: [...Z.messages, v],
          updatedAt: R,
          unread: ut > 0,
          unreadCount: ut
        };
      });
      return K.sort(
        (Z, ft) => new Date(ft.updatedAt).getTime() - new Date(Z.updatedAt).getTime()
      ), Le(K), { threads: K };
    }), f === "bot" && (T0(), !_)) {
      const E = o.length > 60 ? o.substring(0, 60) + "..." : o;
      c({ showToast: !0, toastMessage: E });
    }
  },
  setHandoffStatus: (f) => {
    const { threads: o, activeThreadId: p } = d();
    if (!p) return;
    const b = o.map((S) => S.id !== p ? S : {
      ...S,
      handoff_status: f,
      ended: f === "ended" || f === "none_archived" ? !0 : S.ended
    });
    c({ threads: b }), Le(b), f === "waiting" || f === "connected" ? d().startPolling() : b.some(
      (_) => _.handoff_status === "waiting" || _.handoff_status === "connected"
    ) || d().stopPolling();
  },
  sendMessage: async (f, o = {}) => {
    const { webhookUrl: p, sessionId: b, addMessage: S, getActiveThread: _ } = d();
    S("user", f, {
      type: o.type || "text",
      attachment: o.attachment,
      gif: o.gif,
      audio: o.audio,
      quickReplies: o.quickReplies
    }), _()?.is_human_mode || c({ isTyping: !0 });
    try {
      const R = _(), E = R?.messages || [], { reply: B, handoffStatus: X, endConversation: tt } = await bm(
        p,
        f,
        b,
        E,
        {
          messageType: o.type || "text",
          attachment: o.attachment,
          gif: o.gif,
          audio: o.audio
        }
      );
      X && R && R.handoff_status !== X && (console.log(`[ChatStore] Instant sync handoff_status: ${X}`), d().setHandoffStatus(X)), B && B.trim() && S("bot", B), tt && (console.log("[ChatStore] Conversation marked as ended by backend"), d().setHandoffStatus("none"));
    } catch (R) {
      console.error("[ChatStore] Send message error:", R), S("bot", "I'm sorry, I'm having trouble connecting to the server. Please try again later.");
    } finally {
      c({ isTyping: !1 });
    }
  },
  syncHistory: async () => {
    const { webhookUrl: f, sessionId: o, activeThreadId: p, threads: b } = d();
    if (!p) {
      console.log("[ChatStore] syncHistory: No active thread, skipping");
      return;
    }
    if (!f) {
      console.log("[ChatStore] syncHistory: No webhook URL, skipping");
      return;
    }
    console.log(`[ChatStore] syncHistory running for session ${o}`);
    try {
      const S = f.split("/webhook/")[0];
      console.log(`[ChatStore] syncHistory: Fetching status from ${S}/api/v1/sessions/${o}/status`);
      const _ = await fetch(`${S}/api/v1/sessions/${o}/status`);
      if (_.ok) {
        const E = (await _.json()).handoff_status || "none", B = b.find((X) => X.id === p);
        console.log(`[ChatStore] syncHistory: Backend status = ${E}, Local = ${B?.handoff_status}`), B && (E === "none_archived" && B.handoff_status !== "none_archived" && !B.ended ? (console.log("[ChatStore] Conversation ended remotely. Triggering feedback."), d().setHandoffStatus("none_archived")) : E !== "none_archived" && B.handoff_status !== E && (console.log(`[ChatStore] Polling: status changed ${B.handoff_status} -> ${E}`), d().setHandoffStatus(E)));
      } else
        console.warn(`[ChatStore] syncHistory: Status fetch failed with ${_.status}`);
      const A = `${S}/api/v1/sessions/${o}/history`, v = await fetch(A);
      if (v.ok) {
        const R = await v.json(), { threads: E } = d(), B = E.find((G) => G.id === p);
        if (!B) return;
        const X = new Set(B.messages.map((G) => `${G.role}:${G.content.trim()}`)), tt = R.filter((G) => {
          let K = G.role === "assistant" ? "bot" : G.role === "human" ? "human" : "user";
          return G.content?.includes("[CONVERSATION_ENDED]") ? !1 : !X.has(`${K}:${G.content.trim()}`);
        });
        if (tt.length > 0) {
          console.log(`[ChatStore] Syncing ${tt.length} new messages.`);
          const G = tt.map((Z) => {
            const ft = Z.role === "assistant" ? "bot" : Z.role === "human" ? "human" : "user";
            return ko(ft, Z.content);
          }), K = E.map(
            (Z) => Z.id === p ? {
              ...Z,
              messages: [...Z.messages, ...G],
              updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
              unread: !d().isOpen,
              unreadCount: d().isOpen ? 0 : Z.unreadCount + G.length
            } : Z
          );
          if (c({ threads: K }), Le(K), !d().isOpen) {
            const Z = G[G.length - 1];
            c({ showToast: !0, toastMessage: Z.content });
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
    const o = window.setInterval(() => {
      d().syncHistory();
    }, 5e3);
    c({ pollingInterval: o });
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
    const { threads: f, activeThreadId: o } = d();
    return f.find((p) => p.id === o) || null;
  },
  getTotalUnreadCount: () => {
    const { threads: f } = d();
    return f.reduce((o, p) => o + p.unreadCount, 0);
  },
  // Initialize
  initialize: (f) => {
    const {
      organizationId: o = "default"
      // Allow overriding webhookUrl here if needed
    } = f || {}, p = om();
    let b = S0();
    (async () => {
      try {
        const { webhookUrl: E, threads: B, activeThreadId: X } = d();
        if (!E) return;
        const tt = E.split("/webhook/")[0], G = await fetch(`${tt}/api/v1/config/${o}`);
        if (G.ok) {
          const K = await G.json(), Z = {
            botName: K.botName,
            welcomeMessage: K.welcomeMessage,
            primaryColor: K.primaryColor,
            logo: K.logoUrl,
            supportLogo: K.supportLogoUrl,
            avatars: K.avatarUrl ? [K.avatarUrl] : [],
            tagline: K.tagline,
            webhookUrl: d().webhookUrl
          };
          if (c((ft) => ({
            customization: { ...ft.customization, ...Z }
          })), X && B.length > 0) {
            const ft = B.find((ut) => ut.id === X);
            if (ft && ft.messages.length === 1 && ft.messages[0].role === "bot") {
              const ut = B.map((ot) => {
                if (ot.id === X) {
                  const wt = [...ot.messages];
                  return wt[0] = {
                    ...wt[0],
                    content: Z.welcomeMessage || wt[0].content
                  }, { ...ot, messages: wt };
                }
                return ot;
              });
              c({ threads: ut }), Le(ut);
            }
          }
        }
      } catch (E) {
        console.error("Failed to fetch config:", E);
      }
    })();
    const _ = localStorage.getItem("atliso_has_interacted") === "true";
    b.length === 0 && (b = [sm()], Le(b));
    const A = b[0];
    if (A && A.messages.length === 0) {
      const { customization: E } = d(), B = E?.welcomeMessage || "Hello! How can I help you today?", X = ko("bot", B);
      X.quickReplies = [
        { label: "Book a Meeting", value: "I want to book a meeting" },
        { label: "Talk to Sales", value: "I want to talk to sales" },
        { label: "Pricing", value: "Tell me about pricing" }
      ], A.messages = [X], A.updatedAt = X.timestamp, Le(b);
    }
    let v = w0();
    (!v || !b.some((E) => E.id === v)) && (v = b[0].id, Bo(v)), c({
      sessionId: p,
      threads: b,
      activeThreadId: v,
      hasInteracted: _
    }), (async () => {
      const { webhookUrl: E, sessionId: B } = d();
      if (!(!E || !B))
        try {
          const X = E.split("/webhook/")[0], tt = await fetch(`${X}/api/v1/sessions/${B}/status`);
          if (tt.ok && (await tt.json()).is_human_mode) {
            console.log(`[ChatStore] Session ${B} is in Human Mode. Resuming polling.`);
            const { threads: K, activeThreadId: Z } = d();
            if (Z) {
              const ft = K.map(
                (ut) => ut.id === Z ? { ...ut, is_human_mode: !0 } : ut
              );
              c({ threads: ft }), d().startPolling();
            }
          }
        } catch (X) {
          console.warn("[ChatStore] Failed to check session status:", X);
        }
    })(), _ || setTimeout(() => {
      c({
        showToast: !0,
        toastMessage: "👋 Hey there! Need help? We're here for you."
      });
    }, 2e3);
  }
})), E0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useChatStore: Ae
}, Symbol.toStringTag, { value: "Module" }));
function xm(c) {
  var d, f, o = "";
  if (typeof c == "string" || typeof c == "number") o += c;
  else if (typeof c == "object") if (Array.isArray(c)) {
    var p = c.length;
    for (d = 0; d < p; d++) c[d] && (f = xm(c[d])) && (o && (o += " "), o += f);
  } else for (f in c) c[f] && (o && (o += " "), o += f);
  return o;
}
function N0() {
  for (var c, d, f = 0, o = "", p = arguments.length; f < p; f++) (c = arguments[f]) && (d = xm(c)) && (o && (o += " "), o += d);
  return o;
}
const M0 = (c, d) => {
  const f = new Array(c.length + d.length);
  for (let o = 0; o < c.length; o++)
    f[o] = c[o];
  for (let o = 0; o < d.length; o++)
    f[c.length + o] = d[o];
  return f;
}, C0 = (c, d) => ({
  classGroupId: c,
  validator: d
}), Sm = (c = /* @__PURE__ */ new Map(), d = null, f) => ({
  nextPart: c,
  validators: d,
  classGroupId: f
}), ru = "-", rm = [], _0 = "arbitrary..", O0 = (c) => {
  const d = D0(c), {
    conflictingClassGroups: f,
    conflictingClassGroupModifiers: o
  } = c;
  return {
    getClassGroupId: (S) => {
      if (S.startsWith("[") && S.endsWith("]"))
        return U0(S);
      const _ = S.split(ru), A = _[0] === "" && _.length > 1 ? 1 : 0;
      return wm(_, A, d);
    },
    getConflictingClassGroupIds: (S, _) => {
      if (_) {
        const A = o[S], v = f[S];
        return A ? v ? M0(v, A) : A : v || rm;
      }
      return f[S] || rm;
    }
  };
}, wm = (c, d, f) => {
  if (c.length - d === 0)
    return f.classGroupId;
  const p = c[d], b = f.nextPart.get(p);
  if (b) {
    const v = wm(c, d + 1, b);
    if (v) return v;
  }
  const S = f.validators;
  if (S === null)
    return;
  const _ = d === 0 ? c.join(ru) : c.slice(d).join(ru), A = S.length;
  for (let v = 0; v < A; v++) {
    const R = S[v];
    if (R.validator(_))
      return R.classGroupId;
  }
}, U0 = (c) => c.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const d = c.slice(1, -1), f = d.indexOf(":"), o = d.slice(0, f);
  return o ? _0 + o : void 0;
})(), D0 = (c) => {
  const {
    theme: d,
    classGroups: f
  } = c;
  return R0(f, d);
}, R0 = (c, d) => {
  const f = Sm();
  for (const o in c) {
    const p = c[o];
    Xo(p, f, o, d);
  }
  return f;
}, Xo = (c, d, f, o) => {
  const p = c.length;
  for (let b = 0; b < p; b++) {
    const S = c[b];
    H0(S, d, f, o);
  }
}, H0 = (c, d, f, o) => {
  if (typeof c == "string") {
    B0(c, d, f);
    return;
  }
  if (typeof c == "function") {
    k0(c, d, f, o);
    return;
  }
  q0(c, d, f, o);
}, B0 = (c, d, f) => {
  const o = c === "" ? d : Am(d, c);
  o.classGroupId = f;
}, k0 = (c, d, f, o) => {
  if (G0(c)) {
    Xo(c(o), d, f, o);
    return;
  }
  d.validators === null && (d.validators = []), d.validators.push(C0(f, c));
}, q0 = (c, d, f, o) => {
  const p = Object.entries(c), b = p.length;
  for (let S = 0; S < b; S++) {
    const [_, A] = p[S];
    Xo(A, Am(d, _), f, o);
  }
}, Am = (c, d) => {
  let f = c;
  const o = d.split(ru), p = o.length;
  for (let b = 0; b < p; b++) {
    const S = o[b];
    let _ = f.nextPart.get(S);
    _ || (_ = Sm(), f.nextPart.set(S, _)), f = _;
  }
  return f;
}, G0 = (c) => "isThemeGetter" in c && c.isThemeGetter === !0, Y0 = (c) => {
  if (c < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let d = 0, f = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const p = (b, S) => {
    f[b] = S, d++, d > c && (d = 0, o = f, f = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(b) {
      let S = f[b];
      if (S !== void 0)
        return S;
      if ((S = o[b]) !== void 0)
        return p(b, S), S;
    },
    set(b, S) {
      b in f ? f[b] = S : p(b, S);
    }
  };
}, Lo = "!", fm = ":", L0 = [], dm = (c, d, f, o, p) => ({
  modifiers: c,
  hasImportantModifier: d,
  baseClassName: f,
  maybePostfixModifierPosition: o,
  isExternal: p
}), V0 = (c) => {
  const {
    prefix: d,
    experimentalParseClassName: f
  } = c;
  let o = (p) => {
    const b = [];
    let S = 0, _ = 0, A = 0, v;
    const R = p.length;
    for (let G = 0; G < R; G++) {
      const K = p[G];
      if (S === 0 && _ === 0) {
        if (K === fm) {
          b.push(p.slice(A, G)), A = G + 1;
          continue;
        }
        if (K === "/") {
          v = G;
          continue;
        }
      }
      K === "[" ? S++ : K === "]" ? S-- : K === "(" ? _++ : K === ")" && _--;
    }
    const E = b.length === 0 ? p : p.slice(A);
    let B = E, X = !1;
    E.endsWith(Lo) ? (B = E.slice(0, -1), X = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      E.startsWith(Lo) && (B = E.slice(1), X = !0)
    );
    const tt = v && v > A ? v - A : void 0;
    return dm(b, X, B, tt);
  };
  if (d) {
    const p = d + fm, b = o;
    o = (S) => S.startsWith(p) ? b(S.slice(p.length)) : dm(L0, !1, S, void 0, !0);
  }
  if (f) {
    const p = o;
    o = (b) => f({
      className: b,
      parseClassName: p
    });
  }
  return o;
}, X0 = (c) => {
  const d = /* @__PURE__ */ new Map();
  return c.orderSensitiveModifiers.forEach((f, o) => {
    d.set(f, 1e6 + o);
  }), (f) => {
    const o = [];
    let p = [];
    for (let b = 0; b < f.length; b++) {
      const S = f[b], _ = S[0] === "[", A = d.has(S);
      _ || A ? (p.length > 0 && (p.sort(), o.push(...p), p = []), o.push(S)) : p.push(S);
    }
    return p.length > 0 && (p.sort(), o.push(...p)), o;
  };
}, Q0 = (c) => ({
  cache: Y0(c.cacheSize),
  parseClassName: V0(c),
  sortModifiers: X0(c),
  ...O0(c)
}), Z0 = /\s+/, K0 = (c, d) => {
  const {
    parseClassName: f,
    getClassGroupId: o,
    getConflictingClassGroupIds: p,
    sortModifiers: b
  } = d, S = [], _ = c.trim().split(Z0);
  let A = "";
  for (let v = _.length - 1; v >= 0; v -= 1) {
    const R = _[v], {
      isExternal: E,
      modifiers: B,
      hasImportantModifier: X,
      baseClassName: tt,
      maybePostfixModifierPosition: G
    } = f(R);
    if (E) {
      A = R + (A.length > 0 ? " " + A : A);
      continue;
    }
    let K = !!G, Z = o(K ? tt.substring(0, G) : tt);
    if (!Z) {
      if (!K) {
        A = R + (A.length > 0 ? " " + A : A);
        continue;
      }
      if (Z = o(tt), !Z) {
        A = R + (A.length > 0 ? " " + A : A);
        continue;
      }
      K = !1;
    }
    const ft = B.length === 0 ? "" : B.length === 1 ? B[0] : b(B).join(":"), ut = X ? ft + Lo : ft, ot = ut + Z;
    if (S.indexOf(ot) > -1)
      continue;
    S.push(ot);
    const wt = p(Z, K);
    for (let pt = 0; pt < wt.length; ++pt) {
      const lt = wt[pt];
      S.push(ut + lt);
    }
    A = R + (A.length > 0 ? " " + A : A);
  }
  return A;
}, J0 = (...c) => {
  let d = 0, f, o, p = "";
  for (; d < c.length; )
    (f = c[d++]) && (o = zm(f)) && (p && (p += " "), p += o);
  return p;
}, zm = (c) => {
  if (typeof c == "string")
    return c;
  let d, f = "";
  for (let o = 0; o < c.length; o++)
    c[o] && (d = zm(c[o])) && (f && (f += " "), f += d);
  return f;
}, F0 = (c, ...d) => {
  let f, o, p, b;
  const S = (A) => {
    const v = d.reduce((R, E) => E(R), c());
    return f = Q0(v), o = f.cache.get, p = f.cache.set, b = _, _(A);
  }, _ = (A) => {
    const v = o(A);
    if (v)
      return v;
    const R = K0(A, f);
    return p(A, R), R;
  };
  return b = S, (...A) => b(J0(...A));
}, W0 = [], Jt = (c) => {
  const d = (f) => f[c] || W0;
  return d.isThemeGetter = !0, d;
}, Tm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, jm = /^\((?:(\w[\w-]*):)?(.+)\)$/i, $0 = /^\d+\/\d+$/, I0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, P0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, tp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ep = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, lp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, La = (c) => $0.test(c), ct = (c) => !!c && !Number.isNaN(Number(c)), Hl = (c) => !!c && Number.isInteger(Number(c)), qo = (c) => c.endsWith("%") && ct(c.slice(0, -1)), cl = (c) => I0.test(c), ap = () => !0, np = (c) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  P0.test(c) && !tp.test(c)
), Em = () => !1, ip = (c) => ep.test(c), up = (c) => lp.test(c), cp = (c) => !L(c) && !V(c), op = (c) => Va(c, Cm, Em), L = (c) => Tm.test(c), la = (c) => Va(c, _m, np), Go = (c) => Va(c, mp, ct), mm = (c) => Va(c, Nm, Em), sp = (c) => Va(c, Mm, up), cu = (c) => Va(c, Om, ip), V = (c) => jm.test(c), Gn = (c) => Xa(c, _m), rp = (c) => Xa(c, hp), hm = (c) => Xa(c, Nm), fp = (c) => Xa(c, Cm), dp = (c) => Xa(c, Mm), ou = (c) => Xa(c, Om, !0), Va = (c, d, f) => {
  const o = Tm.exec(c);
  return o ? o[1] ? d(o[1]) : f(o[2]) : !1;
}, Xa = (c, d, f = !1) => {
  const o = jm.exec(c);
  return o ? o[1] ? d(o[1]) : f : !1;
}, Nm = (c) => c === "position" || c === "percentage", Mm = (c) => c === "image" || c === "url", Cm = (c) => c === "length" || c === "size" || c === "bg-size", _m = (c) => c === "length", mp = (c) => c === "number", hp = (c) => c === "family-name", Om = (c) => c === "shadow", gp = () => {
  const c = Jt("color"), d = Jt("font"), f = Jt("text"), o = Jt("font-weight"), p = Jt("tracking"), b = Jt("leading"), S = Jt("breakpoint"), _ = Jt("container"), A = Jt("spacing"), v = Jt("radius"), R = Jt("shadow"), E = Jt("inset-shadow"), B = Jt("text-shadow"), X = Jt("drop-shadow"), tt = Jt("blur"), G = Jt("perspective"), K = Jt("aspect"), Z = Jt("ease"), ft = Jt("animate"), ut = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ot = () => [
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
  ], wt = () => [...ot(), V, L], pt = () => ["auto", "hidden", "clip", "visible", "scroll"], lt = () => ["auto", "contain", "none"], Y = () => [V, L, A], Ct = () => [La, "full", "auto", ...Y()], At = () => [Hl, "none", "subgrid", V, L], xt = () => ["auto", {
    span: ["full", Hl, V, L]
  }, Hl, V, L], Dt = () => [Hl, "auto", V, L], ze = () => ["auto", "min", "max", "fr", V, L], ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Lt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], j = () => ["auto", ...Y()], k = () => [La, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()], N = () => [c, V, L], P = () => [...ot(), hm, mm, {
    position: [V, L]
  }], $ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], h = () => ["auto", "cover", "contain", fp, op, {
    size: [V, L]
  }], M = () => [qo, Gn, la], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    v,
    V,
    L
  ], H = () => ["", ct, Gn, la], J = () => ["solid", "dashed", "dotted", "double"], et = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [ct, qo, hm, mm], Rt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    tt,
    V,
    L
  ], ht = () => ["none", ct, V, L], ie = () => ["none", ct, V, L], sl = () => [ct, V, L], rl = () => [La, "full", ...Y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [cl],
      breakpoint: [cl],
      color: [ap],
      container: [cl],
      "drop-shadow": [cl],
      ease: ["in", "out", "in-out"],
      font: [cp],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [cl],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [cl],
      shadow: [cl],
      spacing: ["px", ct],
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
        columns: [ct, L, V, _]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ut()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ut()
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
        object: wt()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: pt()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": pt()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": pt()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: lt()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": lt()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": lt()
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
        inset: Ct()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Ct()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Ct()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: Ct()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: Ct()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Ct()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Ct()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Ct()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Ct()
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
        basis: [La, "full", "auto", _, ...Y()]
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
        flex: [ct, La, "auto", "initial", "none", L]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ct, V, L]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ct, V, L]
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
        "grid-cols": At()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: xt()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Dt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Dt()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": At()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: xt()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Dt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Dt()
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
        "auto-cols": ze()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ze()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: Y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ae(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Lt(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Lt()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ae()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Lt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Lt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ae()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Lt(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Lt()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Y()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Y()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Y()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Y()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Y()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: j()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: j()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: j()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: j()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: j()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: j()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: j()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: j()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: j()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": Y()
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
        "space-y": Y()
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
        size: k()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [_, "screen", ...k()]
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
          ...k()
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
          ...k()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...k()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...k()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...k()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", f, Gn, la]
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
        font: [o, V, Go]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", qo, L]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rp, L, d]
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
        "line-clamp": [ct, "none", V, Go]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          b,
          ...Y()
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
        decoration: [ct, "from-font", "auto", V, la]
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
        "underline-offset": [ct, "auto", V, L]
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
        indent: Y()
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
        bg: h()
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
        }, dp, sp]
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
        from: M()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: M()
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
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
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
        "outline-offset": [ct, V, L]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ct, Gn, la]
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
        "ring-offset": [ct, la]
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
        "text-shadow": ["none", B, ou, cu]
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
        opacity: [ct, V, L]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...et(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": et()
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
        "mask-linear": [ct]
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
        "mask-radial-at": ot()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ct]
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
        mask: h()
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
        brightness: [ct, V, L]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ct, V, L]
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
          X,
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
        grayscale: ["", ct, V, L]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ct, V, L]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ct, V, L]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ct, V, L]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ct, V, L]
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
        "backdrop-brightness": [ct, V, L]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ct, V, L]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ct, V, L]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ct, V, L]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ct, V, L]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ct, V, L]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ct, V, L]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ct, V, L]
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
        "border-spacing": Y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Y()
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
        duration: [ct, "initial", V, L]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", Z, V, L]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ct, V, L]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", ft, V, L]
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
        perspective: [G, V, L]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": wt()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ht()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ht()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ht()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ht()
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
        origin: wt()
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        stroke: [ct, Gn, la, Go]
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
}, pp = /* @__PURE__ */ F0(gp);
function Gt(...c) {
  return pp(N0(c));
}
function yp() {
  const { isOpen: c, toggleOpen: d, getTotalUnreadCount: f, customization: o } = Ae(), p = f(), b = o?.position || "bottom-right", S = () => {
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
  }, _ = o?.primaryColor || "#000000";
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      onClick: d,
      className: Gt(
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
        c ? /* @__PURE__ */ r.jsx(
          "svg",
          {
            viewBox: "0 0 24 24",
            width: "28",
            height: "28",
            fill: "none",
            stroke: "white",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /* @__PURE__ */ r.jsx("path", { d: "m6 9 6 6 6-6" })
          }
        ) : /* @__PURE__ */ r.jsx(
          "img",
          {
            src: "https://res.cloudinary.com/dwjvtgiid/image/upload/v1766321945/image_42_s2rakp.png",
            alt: "Chat",
            style: { width: "42px", height: "42px" }
          }
        ),
        !c && p > 0 && /* @__PURE__ */ r.jsx("span", { className: "absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 border-2 border-white shadow-md", children: p > 99 ? "99+" : p })
      ]
    }
  );
}
function vp() {
  const c = (/* @__PURE__ */ new Date()).getHours();
  return c >= 0 && c < 5 ? "lateNight" : c >= 5 && c < 12 ? "morning" : c >= 12 && c < 17 ? "midday" : c >= 17 && c < 21 ? "evening" : "night";
}
function bp() {
  switch (vp()) {
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
function Qo(c) {
  const d = new Date(c), o = (/* @__PURE__ */ new Date()).getTime() - d.getTime(), p = Math.floor(o / 1e3), b = Math.floor(p / 60), S = Math.floor(b / 60), _ = Math.floor(S / 24), A = Math.floor(_ / 30), v = Math.floor(_ / 365);
  return p < 60 ? "Just now" : b < 60 ? `${b} minute${b === 1 ? "" : "s"} ago` : S < 24 ? `${S} hour${S === 1 ? "" : "s"} ago` : _ < 30 ? _ === 1 ? "Yesterday" : `${_} days ago` : A < 12 ? `${A}mo` : `${v}y`;
}
const xp = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sp = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (d, f, o) => o ? o.toUpperCase() : f.toLowerCase()
), gm = (c) => {
  const d = Sp(c);
  return d.charAt(0).toUpperCase() + d.slice(1);
}, Um = (...c) => c.filter((d, f, o) => !!d && d.trim() !== "" && o.indexOf(d) === f).join(" ").trim(), wp = (c) => {
  for (const d in c)
    if (d.startsWith("aria-") || d === "role" || d === "title")
      return !0;
};
var Ap = {
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
const zp = yt.forwardRef(
  ({
    color: c = "currentColor",
    size: d = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: o,
    className: p = "",
    children: b,
    iconNode: S,
    ..._
  }, A) => yt.createElement(
    "svg",
    {
      ref: A,
      ...Ap,
      width: d,
      height: d,
      stroke: c,
      strokeWidth: o ? Number(f) * 24 / Number(d) : f,
      className: Um("lucide", p),
      ...!b && !wp(_) && { "aria-hidden": "true" },
      ..._
    },
    [
      ...S.map(([v, R]) => yt.createElement(v, R)),
      ...Array.isArray(b) ? b : [b]
    ]
  )
);
const Yt = (c, d) => {
  const f = yt.forwardRef(
    ({ className: o, ...p }, b) => yt.createElement(zp, {
      ref: b,
      iconNode: d,
      className: Um(
        `lucide-${xp(gm(c))}`,
        `lucide-${c}`,
        o
      ),
      ...p
    })
  );
  return f.displayName = gm(c), f;
};
const Tp = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], jp = Yt("arrow-up", Tp);
const Ep = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], Np = Yt("bot", Ep);
const Mp = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Cp = Yt("calendar", Mp);
const _p = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], fu = Yt("chevron-left", _p);
const Op = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ln = Yt("chevron-right", Op);
const Up = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Dm = Yt("download", Up);
const Dp = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Rp = Yt("ellipsis", Dp);
const Hp = [
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
], Bp = Yt("file-text", Hp);
const kp = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], qp = Yt("house", kp);
const Gp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
  ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
  ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
  ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
], Yp = Yt("life-buoy", Gp);
const Lp = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
], Vp = Yt("maximize-2", Lp);
const Xp = [
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
], Qp = Yt("messages-square", Xp);
const Zp = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], Rm = Yt("mic", Zp);
const Kp = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], Jp = Yt("minimize-2", Kp);
const Fp = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
], Wp = Yt("paperclip", Fp);
const $p = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Zo = Yt("search", $p);
const Ip = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Pp = Yt("settings", Ip);
const ty = [
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
], ey = Yt("sparkles", ty);
const ly = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], ay = Yt("star", ly);
const ny = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], iy = Yt("user", ny);
const uy = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ol = Yt("x", uy), cy = [
  { label: "Getting started with Atliso platform", url: "#" },
  { label: "Subscription plan changes and proration", url: "#" },
  { label: "Setting up your Atliso account", url: "#" },
  { label: "Understanding platform limits and usage", url: "#" }
];
function oy() {
  const { customization: c, setCustomization: d, setCurrentView: f, setIsOpen: o, getActiveThread: p, startNewConversation: b } = Ae(), [S, _] = yt.useState(!1), [A, v] = yt.useState({
    logo: "",
    supportLogo: "",
    avatars: "",
    color1: "#0B5FFF",
    color2: "#2F4BFF",
    color3: "#6D28D9",
    color4: "#7C3AED"
  }), { text: R, emoji: E } = bp(), B = c?.avatars || [], X = c?.logo, tt = c?.supportLogo, G = p(), K = G?.messages[G.messages.length - 1];
  console.log("HomeView - Logo URL:", X), console.log("HomeView - Customization:", c);
  const Z = c?.gradient || {
    color1: "#0B5FFF",
    color2: "#2F4BFF",
    color3: "#6D28D9",
    color4: "#7C3AED"
  }, ut = `linear-gradient(180deg, rgba(243,244,246,0) 0px, rgba(243,244,246,0.92) 360px, #F3F4F6 520px, #ffffff 100%), ${`linear-gradient(135deg, ${Z.color1} 0%, ${Z.color2} 30%, ${Z.color3} 70%, ${Z.color4} 100%)`}`, ot = 16, wt = "1px solid rgba(15, 23, 42, 0.07)", pt = "0 12px 28px rgba(15, 23, 42, 0.09)", lt = () => {
    const At = A.avatars.split(/\n|,/g).map((xt) => xt.trim()).filter(Boolean);
    d({
      ...c || {},
      logo: A.logo.trim() ? A.logo.trim() : null,
      supportLogo: A.supportLogo.trim() ? A.supportLogo.trim() : null,
      avatars: At,
      gradient: {
        color1: A.color1,
        color2: A.color2,
        color3: A.color3,
        color4: A.color4
      }
    }), _(!1);
  }, Y = () => {
    f("help");
  }, Ct = () => {
    f("messages");
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "flex flex-col min-h-full atliso-scrollbar",
      style: { backgroundImage: ut, backgroundColor: "#F3F4F6", position: "relative" },
      children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "relative text-white shrink-0",
            style: {
              paddingTop: "20px",
              paddingBottom: "48px",
              paddingLeft: "24px",
              paddingRight: "24px"
            },
            children: [
              /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }, children: [
                /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  X ? /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: X,
                      alt: "Logo",
                      style: { height: "24px", width: "auto" }
                    }
                  ) : /* @__PURE__ */ r.jsx("svg", { viewBox: "0 0 24 24", style: { width: "24px", height: "24px", fill: "white" }, children: /* @__PURE__ */ r.jsx("path", { d: "M12 2L2 22H22L12 2Z" }) }),
                  /* @__PURE__ */ r.jsx("span", { style: { fontWeight: 600, fontSize: "16px", letterSpacing: "-0.01em" }, children: c?.botName || "Atliso" })
                ] }),
                /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
                  B.length > 0 && /* @__PURE__ */ r.jsx("div", { style: { display: "flex" }, children: B.slice(0, 3).map((At, xt) => /* @__PURE__ */ r.jsx(
                    "img",
                    {
                      src: At,
                      alt: `Agent ${xt + 1}`,
                      style: {
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.2)",
                        objectFit: "cover",
                        marginLeft: xt > 0 ? "-8px" : "0"
                      }
                    },
                    xt
                  )) }),
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      onClick: () => o(!1),
                      style: {
                        padding: "4px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer"
                      },
                      children: /* @__PURE__ */ r.jsx(ol, { style: { width: "20px", height: "20px", color: "rgba(255,255,255,0.8)" } })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "4px" }, children: [
                /* @__PURE__ */ r.jsxs("h2", { style: { fontSize: "13px", fontWeight: 500, opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.05em" }, children: [
                  R,
                  " ",
                  E
                ] }),
                /* @__PURE__ */ r.jsx("h1", { style: { marginTop: "2px", fontSize: "18px", fontWeight: 600, lineHeight: 1.25 }, children: c?.homepageHeading || "How can we help?" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            style: {
              position: "relative",
              marginTop: "-24px",
              padding: "0 16px 16px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            },
            children: [
              K && /* @__PURE__ */ r.jsxs(
                "button",
                {
                  onClick: Ct,
                  style: {
                    width: "100%",
                    background: "white",
                    borderRadius: ot,
                    border: wt,
                    boxShadow: pt,
                    padding: "12px 14px",
                    textAlign: "left",
                    outline: "none",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ r.jsx("h3", { style: { fontWeight: 600, fontSize: "13px", color: "#0F172A", marginBottom: "8px", opacity: 0.6 }, children: "RECENT MESSAGE" }),
                    /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                      /* @__PURE__ */ r.jsx("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        overflow: "hidden"
                      }, children: tt ? /* @__PURE__ */ r.jsx("img", { src: tt, alt: "Support", style: { width: "32px", height: "32px", objectFit: "contain" } }) : /* @__PURE__ */ r.jsx("div", { style: { width: "32px", height: "32px", borderRadius: "8px", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ r.jsx("svg", { viewBox: "0 0 24 24", style: { width: "16px", height: "16px", fill: "white" }, children: /* @__PURE__ */ r.jsx("path", { d: "M12 2L2 22H22L12 2Z" }) }) }) }),
                      /* @__PURE__ */ r.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                        /* @__PURE__ */ r.jsx("p", { style: {
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#0F172A",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        }, children: K.content }),
                        /* @__PURE__ */ r.jsxs("p", { style: { fontSize: "11px", color: "#64748B", marginTop: "1px" }, children: [
                          "Support AI • ",
                          Qo(K.timestamp)
                        ] })
                      ] }),
                      /* @__PURE__ */ r.jsx(Ln, { style: { width: "16px", height: "16px", color: "#000", opacity: 0.3, flexShrink: 0 } })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  onClick: () => f("news"),
                  style: {
                    width: "100%",
                    background: "white",
                    borderRadius: ot,
                    border: wt,
                    boxShadow: pt,
                    padding: "12px 14px",
                    textAlign: "left",
                    outline: "none",
                    cursor: "pointer"
                  },
                  children: /* @__PURE__ */ r.jsxs("div", { style: { textAlign: "left" }, children: [
                    /* @__PURE__ */ r.jsx("h4", { style: {
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0F172A",
                      marginBottom: "4px"
                    }, children: "Latest Updates" }),
                    /* @__PURE__ */ r.jsx("p", { style: {
                      fontSize: "12px",
                      color: "#64748B",
                      lineHeight: 1.4,
                      margin: 0
                    }, children: "A new era of AI-powered Insights has arrived. Complete visibility into every conversation." })
                  ] })
                }
              ),
              /* @__PURE__ */ r.jsxs("div", { style: {
                background: "white",
                borderRadius: ot,
                border: wt,
                boxShadow: pt,
                overflow: "hidden",
                padding: "4px 0"
              }, children: [
                /* @__PURE__ */ r.jsx("div", { style: { padding: "8px 14px" }, children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    onClick: Y,
                    style: {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#F1F5F9",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      border: "none",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ r.jsx("span", { style: { color: "#64748B", fontWeight: 500, fontSize: "12px" }, children: "Search for help" }),
                      /* @__PURE__ */ r.jsx(Zo, { style: { width: "14px", height: "14px", color: "#64748B" } })
                    ]
                  }
                ) }),
                /* @__PURE__ */ r.jsx("div", { children: cy.slice(0, 3).map((At, xt) => /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    onClick: Y,
                    style: {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left"
                    },
                    children: [
                      /* @__PURE__ */ r.jsx("span", { style: { color: "#334155", fontWeight: 500, fontSize: "12px", paddingRight: "12px" }, children: At.label }),
                      /* @__PURE__ */ r.jsx(Ln, { style: { width: "14px", height: "14px", color: "#000", opacity: 0.2, flexShrink: 0 } })
                    ]
                  },
                  xt
                )) })
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  onClick: () => b(),
                  style: {
                    width: "100%",
                    background: "#000",
                    borderRadius: ot,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    cursor: "pointer",
                    border: "none",
                    color: "#FFF"
                  },
                  children: [
                    /* @__PURE__ */ r.jsx("span", { style: { fontWeight: 600, fontSize: "13px" }, children: "Send us a message" }),
                    /* @__PURE__ */ r.jsx(Ln, { style: { width: "16px", height: "16px" } })
                  ]
                }
              )
            ]
          }
        ),
        S && /* @__PURE__ */ r.jsx(
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
            children: /* @__PURE__ */ r.jsxs(
              "div",
              {
                style: {
                  width: "100%",
                  maxWidth: "420px",
                  background: "white",
                  borderRadius: ot,
                  border: wt,
                  boxShadow: pt,
                  overflow: "hidden"
                },
                onClick: (At) => At.stopPropagation(),
                children: [
                  /* @__PURE__ */ r.jsxs(
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
                        /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                          /* @__PURE__ */ r.jsx(
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
                              children: /* @__PURE__ */ r.jsx(Pp, { style: { width: "18px", height: "18px", color: "#2563EB" } })
                            }
                          ),
                          /* @__PURE__ */ r.jsxs("div", { children: [
                            /* @__PURE__ */ r.jsx("div", { style: { fontWeight: 800, fontSize: "14px", color: "#0F172A" }, children: "Developer" }),
                            /* @__PURE__ */ r.jsx("div", { style: { fontSize: "12px", color: "#64748B", marginTop: "2px" }, children: "Edit widget branding" })
                          ] })
                        ] }),
                        /* @__PURE__ */ r.jsx(
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
                            children: /* @__PURE__ */ r.jsx(ol, { style: { width: "18px", height: "18px", color: "#64748B" } })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ r.jsxs("div", { style: { padding: "14px 16px", display: "flex", flexDirection: "column", gap: "12px" }, children: [
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { style: { fontSize: "12px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }, children: "Brand logo URL" }),
                      /* @__PURE__ */ r.jsx(
                        "input",
                        {
                          value: A.logo,
                          onChange: (At) => v((xt) => ({ ...xt, logo: At.target.value })),
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
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { style: { fontSize: "12px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }, children: "Support logo URL" }),
                      /* @__PURE__ */ r.jsx(
                        "input",
                        {
                          value: A.supportLogo,
                          onChange: (At) => v((xt) => ({ ...xt, supportLogo: At.target.value })),
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
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { style: { fontSize: "12px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }, children: "Avatar URLs (one per line)" }),
                      /* @__PURE__ */ r.jsx(
                        "textarea",
                        {
                          value: A.avatars,
                          onChange: (At) => v((xt) => ({ ...xt, avatars: At.target.value })),
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
                    /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsx("div", { style: { fontSize: "12px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }, children: "Gradient" }),
                      /* @__PURE__ */ r.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }, children: ["color1", "color2", "color3", "color4"].map((At) => /* @__PURE__ */ r.jsx(
                        "input",
                        {
                          type: "color",
                          value: A[At],
                          onChange: (xt) => v((Dt) => ({ ...Dt, [At]: xt.target.value })),
                          style: {
                            width: "100%",
                            height: "36px",
                            padding: 0,
                            border: "1px solid #E2E8F0",
                            borderRadius: "10px",
                            background: "#F8FAFC"
                          }
                        },
                        At
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ r.jsxs(
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
                        /* @__PURE__ */ r.jsx(
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
                        /* @__PURE__ */ r.jsx(
                          "button",
                          {
                            onClick: lt,
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
const pm = [
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
function sy() {
  const { setCurrentView: c, setIsOpen: d, customization: f } = Ae(), [o, p] = yt.useState(""), [b, S] = yt.useState(null), _ = f?.supportLogo, A = yt.useMemo(() => {
    if (!o.trim()) return pm;
    const E = o.toLowerCase();
    return pm.filter(
      (B) => B.title.toLowerCase().includes(E) || B.description.toLowerCase().includes(E)
    );
  }, [o]), v = (E) => {
    S(E);
  }, R = () => {
    b ? S(null) : c("home");
  };
  return b ? /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full bg-white", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "min-h-[62px] px-5 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10", children: [
      /* @__PURE__ */ r.jsx("button", { style: { marginLeft: "14px" }, onClick: R, className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ r.jsx(fu, { className: "w-5 h-5 text-gray-500" }) }),
      /* @__PURE__ */ r.jsx("span", { className: "font-semibold text-[17px] text-gray-900 text-sm truncate max-w-[200px]", children: b.title }),
      /* @__PURE__ */ r.jsx("button", { style: { marginRight: "14px" }, onClick: () => d(!1), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ r.jsx(ol, { className: "w-5 h-5 text-black-500" }) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { style: { padding: "16px" }, className: "p-6 overflow-y-auto", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
        /* @__PURE__ */ r.jsx("div", { className: "flex -space-x-1", children: _ ? /* @__PURE__ */ r.jsx(
          "img",
          {
            src: _,
            alt: "Atliso Logo",
            className: "w-6 h-6 rounded-full border border-white"
          }
        ) : /* @__PURE__ */ r.jsx("div", { className: "w-6 h-6 rounded-full bg-gray-200 border border-white" }) }),
        /* @__PURE__ */ r.jsx("p", { className: "text-xs text-gray-500", children: "Written by Atliso Team" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "prose prose-sm max-w-none text-gray-700 leading-relaxed", children: [
        /* @__PURE__ */ r.jsx("p", { children: b.content }),
        /* @__PURE__ */ r.jsx("p", { className: "mt-4", children: b.description })
      ] })
    ] })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full bg-gray-50/50", children: [
    /* @__PURE__ */ r.jsxs("div", { style: { paddingLeft: "14px", paddingRight: "14px" }, className: "min-h-[50px] px-4 py-3 bg-white border-b border-gray-100 flex items-center justify-between sticky top-0 z-10", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx("button", { onClick: () => c("home"), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ r.jsx(fu, { className: "w-4 h-4 text-gray-400" }) }),
        /* @__PURE__ */ r.jsx("h2", { className: "text-[14px] font-semibold text-gray-900", children: "Help" })
      ] }),
      /* @__PURE__ */ r.jsx("button", { onClick: () => d(!1), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ r.jsx(ol, { className: "w-4 h-4 text-gray-400" }) })
    ] }),
    /* @__PURE__ */ r.jsx("div", { style: { paddingLeft: "14px", paddingRight: "14px", marginBottom: "10px" }, className: "bg-white px-5 py-3 border-b border-gray-100", children: /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ r.jsx(Zo, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          style: { paddingLeft: "32px", height: "36px" },
          type: "text",
          placeholder: "Search for help",
          value: o,
          onChange: (E) => p(E.target.value),
          className: "w-full pl-8 pr-3 py-2 bg-gray-50 rounded-lg text-[13px] border border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all placeholder:text-gray-400"
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { style: { paddingLeft: "14px", paddingRight: "14px" }, className: "px-5 py-2 bg-gray-50/50", children: /* @__PURE__ */ r.jsxs("h3", { className: "font-semibold text-gray-400 text-[11px] uppercase tracking-wider", children: [
      A.length,
      " collections"
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { style: { cursor: "pointer", paddingLeft: "14px", paddingRight: "14px" }, className: "flex-1 bg-white overflow-y-auto atliso-scrollbar", children: /* @__PURE__ */ r.jsx("div", { className: "divide-y divide-gray-50", children: A.map((E) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => v(E),
        className: "w-full px-5 py-5 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors group flex items-start justify-between gap-4",
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "text-[14px] font-semibold text-gray-900 group-hover:text-black transition-colors", children: E.title }),
            /* @__PURE__ */ r.jsx("p", { className: "text-[12px] text-gray-500 leading-normal line-clamp-2", children: E.description }),
            /* @__PURE__ */ r.jsx("p", { className: "text-[11px] text-gray-400 pt-1", children: "12 articles" })
          ] }),
          /* @__PURE__ */ r.jsx(Ln, { className: "w-4 h-4 text-gray-300 shrink-0 mt-1" })
        ]
      },
      E.id
    )) }) })
  ] });
}
function ry({ isOpen: c, onClose: d, onDownloadTranscript: f, onExpandView: o, isExpanded: p }) {
  const b = yt.useRef(null);
  return yt.useEffect(() => {
    const S = (A) => {
      b.current && !b.current.contains(A.target) && d();
    }, _ = (A) => {
      A.key === "Escape" && d();
    };
    return c && (document.addEventListener("mousedown", S), document.addEventListener("keydown", _)), () => {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", _);
    };
  }, [c, d]), c ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      style: { padding: "8px" },
      ref: b,
      className: "absolute right-2 top-14 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[180px]",
      children: [
        /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: f,
            className: "w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer",
            children: [
              /* @__PURE__ */ r.jsx(Dm, { className: "w-4 h-4" }),
              "Download transcript"
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: o,
            className: "w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer",
            children: p ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(Jp, { className: "w-4 h-4" }),
              "Minimize view"
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx(Vp, { className: "w-4 h-4" }),
              "Expand view"
            ] })
          }
        )
      ]
    }
  ) : null;
}
function fy({ onDownloadTranscript: c, onExpandView: d, isExpanded: f }) {
  const [o, p] = yt.useState(!1), b = () => {
    p(!o);
  }, S = () => {
    p(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: b,
        style: { marginTop: "5px" },
        className: Gt(
          "p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600 cursor-pointer",
          o && "bg-gray-100 text-gray-600"
        ),
        "aria-label": "More options",
        "aria-expanded": o,
        "aria-haspopup": "true",
        children: /* @__PURE__ */ r.jsx(Rp, { className: "w-5 h-5" })
      }
    ),
    /* @__PURE__ */ r.jsx(
      ry,
      {
        isOpen: o,
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
function dy() {
  const { customization: c, setCurrentView: d, setIsOpen: f, toggleExpanded: o, getActiveThread: p, isExpanded: b } = Ae(), S = c?.supportLogo, _ = () => {
    d("messages");
  }, A = () => {
    const R = p();
    if (!R || R.messages.length === 0) return;
    const E = R.messages.map((G) => `[${new Date(G.timestamp).toLocaleString()}] ${G.role.toUpperCase()}: ${G.content}`).join(`

`), B = new Blob([E], { type: "text/plain" }), X = URL.createObjectURL(B), tt = document.createElement("a");
    tt.href = X, tt.download = `chat-transcript-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.txt`, document.body.appendChild(tt), tt.click(), document.body.removeChild(tt), URL.revokeObjectURL(X);
  }, v = () => {
    o();
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "min-h-[50px] px-5 py-4 bg-white border-b border-gray-100 shrink-0 flex items-center justify-between z-10", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [
      /* @__PURE__ */ r.jsx(
        "button",
        {
          style: { marginLeft: "8px", marginRight: "8px" },
          onClick: _,
          className: "flex ml-2 p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-all duration-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300",
          "aria-label": "Go back",
          children: /* @__PURE__ */ r.jsx(fu, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center shrink-0 overflow-hidden", children: S ? /* @__PURE__ */ r.jsx("img", { src: S, alt: "Support", className: "w-6 h-6 object-contain" }) : /* @__PURE__ */ r.jsx("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 text-white fill-current", fill: "none", children: /* @__PURE__ */ r.jsx("path", { d: "M12 2L2 22H22L12 2Z" }) }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-[14px] font-semibold text-gray-900 truncate leading-tight", children: c?.botName || "Support AI Assistant" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-[11px] text-gray-400 truncate mt-0.5", children: c?.tagline || "The team can also help" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 shrink-0", style: { marginRight: "8px" }, children: [
      /* @__PURE__ */ r.jsx(
        fy,
        {
          onDownloadTranscript: A,
          onExpandView: v,
          isExpanded: b
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          style: { marginRight: "8px" },
          onClick: () => f(!1),
          className: "p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-all duration-200 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300",
          children: /* @__PURE__ */ r.jsx(ol, { className: "w-5 h-5" })
        }
      )
    ] })
  ] });
}
function my({ message: c }) {
  const d = c.role === "user";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Gt(
        "flex gap-3 animate-fade-in mb-5",
        d ? "flex-row-reverse" : "flex-row"
      ),
      children: /* @__PURE__ */ r.jsxs("div", { className: Gt("max-w-[85%] flex flex-col", d ? "items-end" : "items-start"), children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            style: {
              margin: d ? "0 0.5rem 0 auto" : "0 auto 0 0.5rem",
              width: "fit-content"
            },
            className: Gt(
              "px-3.5 py-2.5 text-[14px] leading-relaxed transition-all duration-200 overflow-hidden overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar",
              d ? "bg-black text-white rounded-[16px] shadow-sm hover:shadow-md" : "bg-gray-50 text-gray-800 border border-gray-100 rounded-[16px] shadow-sm hover:shadow-md hover:border-gray-200"
            ),
            children: [
              c.type === "attachment" && c.attachment && /* @__PURE__ */ r.jsx("div", { className: "mb-2", children: c.attachment.type === "image" ? /* @__PURE__ */ r.jsx(
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
              ) : /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 bg-white/10 rounded-lg p-2", children: [
                /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ r.jsx(Bp, { className: "w-5 h-5 text-current" }) }),
                /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ r.jsx("p", { className: "font-medium truncate", children: c.attachment.name }),
                  /* @__PURE__ */ r.jsx("p", { className: "text-xs opacity-70", children: j0(c.attachment.size) })
                ] })
              ] }) }),
              c.type === "gif" && c.gif && /* @__PURE__ */ r.jsx(
                "img",
                {
                  src: c.gif.url,
                  alt: c.gif.title || "GIF",
                  className: "rounded-xl max-w-full mb-2"
                }
              ),
              c.type === "voice" && c.audio && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 bg-current rounded-full flex items-center justify-center opacity-20", children: /* @__PURE__ */ r.jsx(Rm, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ r.jsx("audio", { controls: !0, className: "max-w-[200px] h-8", src: c.audio.dataUrl })
              ] }),
              c.content && /* @__PURE__ */ r.jsx("p", { className: "whitespace-pre-wrap break-words overflow-wrap-anywhere", children: c.content }),
              c.type === "attachment" && c.attachment?.dataUrl && /* @__PURE__ */ r.jsxs(
                "a",
                {
                  href: c.attachment.dataUrl,
                  download: c.attachment.name,
                  className: Gt(
                    "mt-2 inline-flex items-center gap-2 text-xs font-medium opacity-90 hover:opacity-100 cursor-pointer"
                  ),
                  children: [
                    /* @__PURE__ */ r.jsx(Dm, { className: "w-3 h-3" }),
                    "Download"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "p",
          {
            style: {
              marginLeft: "12px",
              marginRight: "12px",
              marginBottom: "8px",
              maxWidth: "calc(100% - 24px)"
            },
            className: Gt(
              "text-[11px] text-gray-400 mt-1 px-1",
              d ? "text-right" : "text-left"
            ),
            children: [
              !d && (c.role === "human" ? "Human Assistant • " : "Support AI Assistant • "),
              " ",
              Qo(c.timestamp)
            ]
          }
        ),
        !d && c.quickReplies && c.quickReplies.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "flex gap-2 mb-2 ml-1 flex-wrap", children: c.quickReplies.map((f, o) => /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => {
              Promise.resolve().then(() => E0).then(({ useChatStore: p }) => {
                p.getState().sendMessage(f.value);
              });
            },
            className: "px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-[11px] font-normal rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow active:scale-95",
            children: f.label.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "").trim()
          },
          o
        )) })
      ] })
    }
  );
}
function hy({ messages: c }) {
  return c.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "flex flex-col items-center justify-center h-full text-center px-8 pb-12" }) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col pb-2", children: [
    /* @__PURE__ */ r.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ r.jsx("span", { style: { marginBottom: "8px" }, className: "text-[11px] font-regular text-gray-500 text-center px-4", children: "Ask us anything, or share your feedback." }) }),
    /* @__PURE__ */ r.jsx("div", { className: "flex justify-center py-6", children: /* @__PURE__ */ r.jsx("span", { className: "text-[11px] font-semibold text-gray-400 uppercase tracking-wide bg-gray-50 px-2 rounded", children: "Today" }) }),
    c.map((d) => /* @__PURE__ */ r.jsx(my, { message: d }, d.id))
  ] });
}
function gy({ isOpen: c, onClose: d, onSelect: f }) {
  if (!c) return null;
  const o = [
    {
      id: "book_meeting",
      label: "Book a meeting",
      icon: Cp,
      description: "Schedule a call with our team",
      action: "I would like to book a meeting"
    },
    {
      id: "human_handoff",
      label: "Talk to a human",
      icon: iy,
      description: "Connect with a live support agent",
      action: "I want to talk to a human"
    },
    {
      id: "help",
      label: "Search help",
      icon: Zo,
      description: "Find answers in our knowledge base",
      action: "Help"
    }
  ];
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 z-30 bg-transparent",
        onClick: d
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-full left-0 mb-2 w-full px-5 z-40 animate-slide-up", children: /* @__PURE__ */ r.jsxs("div", { className: "bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "px-4 py-3 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50", children: [
        /* @__PURE__ */ r.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "4.5", r: "2.5" }),
          /* @__PURE__ */ r.jsx("path", { d: "m10.2 6.3-3.9 3.9" }),
          /* @__PURE__ */ r.jsx("circle", { cx: "4.5", cy: "12", r: "2.5" }),
          /* @__PURE__ */ r.jsx("path", { d: "M7 12h10" }),
          /* @__PURE__ */ r.jsx("circle", { cx: "19.5", cy: "12", r: "2.5" }),
          /* @__PURE__ */ r.jsx("path", { d: "m13.8 17.7 3.9-3.9" }),
          /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "19.5", r: "2.5" })
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "text-xs font-semibold text-gray-900 uppercase tracking-wider", children: "Quick Actions" })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "p-1", children: o.map((p) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          onClick: () => {
            f(p.action), d();
          },
          className: "w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group text-left",
          children: [
            /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-white border border-gray-100 group-hover:border-gray-200 flex items-center justify-center transition-colors", children: /* @__PURE__ */ r.jsx(p.icon, { className: "w-4 h-4 text-gray-500 group-hover:text-black transition-colors" }) }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium text-gray-900", children: p.label }),
              /* @__PURE__ */ r.jsx("div", { className: "text-xs text-gray-500", children: p.description })
            ] })
          ]
        },
        p.id
      )) })
    ] }) })
  ] });
}
function py() {
  const { sendMessage: c, isTyping: d, getActiveThread: f } = Ae(), b = (f()?.handoff_status || "none") === "waiting", S = d, _ = "Message...", [A, v] = yt.useState(""), [R, E] = yt.useState(!1), [B, X] = yt.useState(""), [tt, G] = yt.useState(0), [K, Z] = yt.useState([]), [ft, ut] = yt.useState(!1), ot = yt.useRef(null), wt = yt.useRef(null), pt = yt.useRef(null), lt = yt.useRef(null);
  yt.useEffect(() => {
    ot.current && (ot.current.style.height = "auto", ot.current.style.height = Math.min(ot.current.scrollHeight, 200) + "px");
  }, [A]);
  const Y = () => {
    const N = lt.current;
    N?.stop && N.stop(), lt.current = null, pt.current && pt.current.state !== "inactive" && (pt.current.stop(), pt.current = null), E(!1), G(0);
  };
  if (yt.useEffect(() => () => {
    R && Y();
  }, [R]), b)
    return /* @__PURE__ */ r.jsx("div", { style: { paddingLeft: "14px", paddingRight: "14px", paddingBottom: "20px" }, className: "p-5 bg-transparent shrink-0", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200", children: [
      /* @__PURE__ */ r.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-indigo-500 border-t-transparent" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium text-gray-500", children: "Waiting for Human Agent..." })
    ] }) });
  const Ct = () => {
    const N = A.trim();
    if (!(!N || S)) {
      if (K.length > 0) {
        const P = K[0], $ = {
          name: P.name,
          size: 0,
          type: "image",
          dataUrl: P.url
        };
        let h = N;
        if (K.length > 1) {
          const M = K.slice(1).map((D) => D.name).join(", ");
          h = `${N} [Also attached: ${M}]`;
        }
        c(h, { type: "attachment", attachment: $ });
      } else
        c(N);
      v(""), Z([]), ot.current?.focus();
    }
  }, At = () => {
    wt.current?.click();
  }, xt = (N) => {
    c(N);
  }, Dt = (N) => {
    const P = N.target.files?.[0];
    if (P && P.type.startsWith("image/")) {
      const $ = new FileReader();
      $.onload = (h) => {
        const M = h.target?.result, D = {
          id: Date.now().toString(),
          url: M,
          name: P.name
        };
        Z((H) => [...H, D]);
      }, $.readAsDataURL(P);
    } else P && v(($) => $ + " [Please select only image files]");
  }, ze = (N) => {
    Z((P) => P.filter(($) => $.id !== N));
  }, ae = async () => {
    try {
      const N = window, P = N.AudioContext || N.webkitAudioContext;
      if (!P) return;
      const $ = new P(), h = 0.12, M = $.createOscillator(), D = $.createGain();
      M.type = "sine", M.frequency.value = 880, D.gain.setValueAtTime(1e-3, $.currentTime), D.gain.exponentialRampToValueAtTime(0.15, $.currentTime + 0.02), D.gain.exponentialRampToValueAtTime(1e-4, $.currentTime + h), M.connect(D), D.connect($.destination), M.start(), M.stop($.currentTime + h), setTimeout(() => $.close(), 250);
    } catch {
    }
  }, Lt = async () => {
    try {
      X("");
      const N = await navigator.mediaDevices.getUserMedia({ audio: !0 }), P = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (P) {
        const H = new P();
        H.continuous = !0, H.interimResults = !0, H.lang = "en-US", console.log("Speech recognition initialized"), H.onstart = () => {
          console.log("Speech recognition started"), ae();
        }, H.onresult = (J) => {
          console.log("Speech recognition result:", J);
          let et = "", W = "";
          for (let ht = J.resultIndex; ht < J.results.length; ht++) {
            const ie = J.results[ht][0].transcript;
            console.log(`Transcript part ${ht}:`, ie, "isFinal:", J.results[ht].isFinal), J.results[ht].isFinal ? et += ie + " " : W += ie;
          }
          X((ht) => ht + et);
          const Rt = (B + et + W).trim();
          console.log("Setting message to:", Rt), v(Rt);
        }, H.onerror = (J) => {
          console.error("Speech recognition error:", J.error), console.error("Error details:", J), Y();
        }, H.onend = () => {
          console.log("Speech recognition ended");
        }, lt.current = H, H.start();
      } else
        console.error("Speech recognition not supported in this browser"), v((H) => H + " [Voice recording not supported in this browser]");
      const $ = new AudioContext(), h = $.createAnalyser();
      $.createMediaStreamSource(N).connect(h);
      const D = () => {
        const H = new Uint8Array(h.frequencyBinCount);
        h.getByteFrequencyData(H);
        const et = H.reduce((W, Rt) => W + Rt) / H.length / 255;
        G(et), et > 0.1 && console.log("Audio level:", et), R && requestAnimationFrame(D);
      };
      D(), pt.current = new MediaRecorder(N), E(!0);
    } catch (N) {
      console.error("Error accessing microphone:", N), v((P) => P + " [Voice recording not available in this browser]");
    }
  }, j = () => {
    R ? Y() : Lt();
  }, k = (N) => {
    N.key === "Enter" && !N.shiftKey && (N.preventDefault(), Ct());
  };
  return /* @__PURE__ */ r.jsxs("div", { style: { paddingLeft: "14px", paddingRight: "14px", paddingBottom: "20px" }, className: "p-5 bg-transparent shrink-0 relative", children: [
    /* @__PURE__ */ r.jsx(
      gy,
      {
        isOpen: ft,
        onClose: () => ut(!1),
        onSelect: xt
      }
    ),
    /* @__PURE__ */ r.jsx("style", { children: `
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
    /* @__PURE__ */ r.jsx(
      "input",
      {
        ref: wt,
        type: "file",
        onChange: Dt,
        style: { display: "none" },
        accept: "image/*"
      }
    ),
    K.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-2 mb-3 animate-fade-in", children: K.map((N) => /* @__PURE__ */ r.jsxs("div", { className: "relative group animate-slide-in-left", children: [
      /* @__PURE__ */ r.jsx(
        "img",
        {
          src: N.url,
          alt: N.name,
          className: "w-20 h-20 object-cover rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => ze(N.id),
          className: "absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg focus:outline-none focus:ring-2 focus:ring-red-300 active:scale-90",
          "aria-label": "Remove image",
          children: /* @__PURE__ */ r.jsx(ol, { className: "w-3.5 h-3.5" })
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none" })
    ] }, N.id)) }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: { paddingBottom: "44px" },
        className: Gt(
          "relative rounded-2xl bg-transparent border border-black transition-all duration-300",
          R ? "recording-border" : ""
        ),
        children: [
          /* @__PURE__ */ r.jsx(
            "textarea",
            {
              style: { paddingLeft: "16px", paddingRight: "16px", paddingTop: "10px" },
              ref: ot,
              value: A,
              onChange: (N) => v(N.target.value),
              onKeyDown: k,
              placeholder: _,
              disabled: S,
              className: "w-full pb-10 bg-transparent border-none text-[15px] leading-relaxed max-h-[200px] focus:outline-none resize-none placeholder:text-gray-400 min-h-[50px] transition-all duration-200",
              rows: 1,
              "aria-label": "Message input"
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "absolute bottom-2.5 left-3 right-3 flex items-center justify-between", children: [
            /* @__PURE__ */ r.jsxs("div", { style: { marginBottom: "-20px" }, className: "flex items-center gap-5", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "relative group/tooltip", children: [
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: () => ut(!ft),
                    className: Gt(
                      "p-2 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none",
                      ft ? "text-black" : "text-gray-400 hover:text-gray-600"
                    ),
                    children: /* @__PURE__ */ r.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "4.5", r: "2.5" }),
                      /* @__PURE__ */ r.jsx("path", { d: "m10.2 6.3-3.9 3.9" }),
                      /* @__PURE__ */ r.jsx("circle", { cx: "4.5", cy: "12", r: "2.5" }),
                      /* @__PURE__ */ r.jsx("path", { d: "M7 12h10" }),
                      /* @__PURE__ */ r.jsx("circle", { cx: "19.5", cy: "12", r: "2.5" }),
                      /* @__PURE__ */ r.jsx("path", { d: "m13.8 17.7 3.9-3.9" }),
                      /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "19.5", r: "2.5" })
                    ] })
                  }
                ),
                /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none", children: "Quick Actions" })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "relative group/tooltip", children: [
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: At,
                    className: "p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none",
                    children: /* @__PURE__ */ r.jsx(Wp, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none", children: "Upload File" })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "relative group/tooltip", children: [
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    onClick: j,
                    className: Gt(
                      "p-2 rounded-lg transition-all duration-300 cursor-pointer focus:outline-none",
                      R ? "text-red-500 scale-110" : "text-gray-400 hover:text-gray-600"
                    ),
                    children: /* @__PURE__ */ r.jsx(Rm, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none", children: "Voice Message" })
              ] })
            ] }),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                style: { padding: "8px 8px", justifyItems: "center", borderRadius: "50px" },
                onClick: Ct,
                disabled: !A.trim() || S,
                className: Gt(
                  "p-1.5 rounded-lg transition-all cursor-pointer focus:outline-none",
                  A.trim() && !S ? "bg-black text-white shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                ),
                children: /* @__PURE__ */ r.jsx(jp, { className: "w-5 h-5" })
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function yy() {
  return /* @__PURE__ */ r.jsx("div", { className: "flex gap-3 animate-fade-in mb-4", children: /* @__PURE__ */ r.jsx("div", { style: { padding: "8px" }, className: "bg-gray-50 px-5 py-4 rounded-[20px] border border-gray-200 shadow-sm", children: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1.5 items-center h-5", children: [
    /* @__PURE__ */ r.jsx("span", { className: "w-2 h-2 bg-gray-400 rounded-full animate-typing" }),
    /* @__PURE__ */ r.jsx("span", { className: "w-2 h-2 bg-gray-400 rounded-full animate-typing-delay-1" }),
    /* @__PURE__ */ r.jsx("span", { className: "w-2 h-2 bg-gray-400 rounded-full animate-typing-delay-2" })
  ] }) }) });
}
function vy({ rating: c, onRatingChange: d, disabled: f = !1 }) {
  const o = [1, 2, 3, 4, 5];
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center space-y-3", children: [
    /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 font-medium", children: "Rate this conversation:" }),
    /* @__PURE__ */ r.jsx("div", { className: "flex space-x-1", children: o.map((p) => /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: () => !f && d(p),
        disabled: f,
        className: Gt(
          "p-1 rounded transition-all",
          !f && "hover:scale-110 cursor-pointer",
          f && "cursor-not-allowed opacity-60"
        ),
        "aria-label": `Rate ${p} star${p !== 1 ? "s" : ""}`,
        children: /* @__PURE__ */ r.jsx(
          ay,
          {
            className: Gt(
              "w-6 h-6 transition-colors",
              c && p <= c ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-300"
            )
          }
        )
      },
      p
    )) }),
    c && /* @__PURE__ */ r.jsxs("p", { className: "text-xs text-gray-500", children: [
      "You rated this ",
      c,
      " star",
      c !== 1 ? "s" : ""
    ] })
  ] });
}
function by() {
  const { getActiveThread: c, isTyping: d, submitFeedback: f } = Ae(), o = yt.useRef(null), p = c(), b = yt.useMemo(() => p?.messages || [], [p?.messages]), S = p?.handoff_status || "none", _ = p?.ended || S === "ended", A = p?.feedbackRating;
  yt.useEffect(() => {
    o.current?.scrollIntoView({ behavior: "smooth" });
  }, [b, d]);
  const v = (B) => {
    f(B);
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
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full bg-white", children: [
    /* @__PURE__ */ r.jsx("div", { className: "shrink-0 flex-none", children: /* @__PURE__ */ r.jsx(dy, {}) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1 overflow-y-auto px-5 py-5 atliso-scrollbar min-h-0", children: [
      /* @__PURE__ */ r.jsx(hy, { messages: b }),
      d && S === "none" && /* @__PURE__ */ r.jsx(yy, {}),
      /* @__PURE__ */ r.jsx("div", { ref: o })
    ] }),
    _ && /* @__PURE__ */ r.jsx("div", { className: "px-5 py-3 bg-gray-100 border-t border-gray-200 shrink-0 flex-none", children: /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 font-medium", children: "Conversation ended" }),
      /* @__PURE__ */ r.jsx("div", { className: "mt-4", children: /* @__PURE__ */ r.jsx(
        vy,
        {
          rating: A,
          onRatingChange: v,
          disabled: !!A
        }
      ) }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => Ae.getState().startNewConversation(),
          className: "mt-6 w-full py-3 bg-black text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors",
          children: "Start new conversation"
        }
      ),
      /* @__PURE__ */ r.jsx("p", { className: "text-[11px] text-gray-400 mt-3", children: "Your feedback helps us improve" })
    ] }) }),
    !_ && /* @__PURE__ */ r.jsxs("div", { className: "shrink-0 flex-none", children: [
      E && /* @__PURE__ */ r.jsxs("div", { className: "px-5 py-2 flex items-center gap-2 animate-in fade-in slide-in-from-bottom duration-500", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ r.jsx("span", { className: `animate-ping absolute inline-flex h-full w-full rounded-full bg-${E.color}-400 opacity-75` }),
          /* @__PURE__ */ r.jsx("span", { className: `relative inline-flex rounded-full h-2 w-2 bg-${E.color}-500` })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: `text-[11px] text-${E.color}-700 font-semibold tracking-tight uppercase`, children: E.text })
      ] }),
      /* @__PURE__ */ r.jsx(py, {})
    ] })
  ] });
}
function xy() {
  const { customization: c, threads: d, setActiveThread: f, startNewConversation: o, setIsOpen: p } = Ae(), b = c?.supportLogo, S = c?.logo, _ = b || S, A = d.find((R) => !R.ended), v = () => {
    A ? f(A.id) : o();
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full bg-white", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "min-h-[50px] px-4 py-3 bg-white border-b border-gray-100 flex items-center justify-center relative shrink-0", children: [
      /* @__PURE__ */ r.jsx("h2", { className: "text-[15px] font-semibold text-gray-900", children: "Messages" }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => p(!1),
          className: "absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 transition-colors",
          "aria-label": "Close",
          children: /* @__PURE__ */ r.jsx(ol, { className: "w-4 h-4" })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto bg-white px-4 pb-4 atliso-scrollbar", style: { minHeight: 0 }, children: d.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "flex flex-col items-center justify-center p-8 text-center text-gray-400", children: /* @__PURE__ */ r.jsx("p", { className: "text-sm", children: "No messages yet." }) }) : /* @__PURE__ */ r.jsx("div", { className: "pt-2", children: /* @__PURE__ */ r.jsx("div", { className: "divide-y divide-gray-50", children: d.map((R) => {
      const E = R.messages[R.messages.length - 1];
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          onClick: () => f(R.id),
          className: "w-full py-4 flex items-center gap-4 text-left hover:bg-gray-50 active:bg-gray-100 transition-all rounded-xl px-2 -mx-2 mb-1",
          children: [
            /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gray-50 border border-gray-100 overflow-hidden", children: _ ? /* @__PURE__ */ r.jsx("img", { src: _, alt: "Support", className: "w-full h-full object-contain" }) : /* @__PURE__ */ r.jsx("div", { className: "w-full h-full flex items-center justify-center bg-black", children: /* @__PURE__ */ r.jsx("svg", { viewBox: "0 0 24 24", className: "w-4 h-4 text-white fill-current", children: /* @__PURE__ */ r.jsx("path", { d: "M12 2L2 22H22L12 2Z" }) }) }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ r.jsx("p", { className: `text-[13px] font-semibold text-gray-900 truncate ${R.unread ? "font-bold" : ""}`, children: E ? E.content : "New conversation" }),
                R.unread && /* @__PURE__ */ r.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" })
              ] }),
              /* @__PURE__ */ r.jsxs("p", { className: "text-[11px] text-gray-500 mt-0.5 truncate uppercase tracking-tight opacity-70", children: [
                "Agent • ",
                E ? Qo(E.timestamp) : "Just now"
              ] })
            ] })
          ]
        },
        R.id
      );
    }) }) }) }),
    /* @__PURE__ */ r.jsx("div", { className: "px-6 py-6 bg-white border-t border-gray-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: v,
        className: "w-full max-w-[250px] h-12 text-sm px-8 py-3.5 bg-black text-white font-medium rounded-[10px] flex items-center justify-center gap-2 transition-all hover:bg-gray-800 active:scale-95 shadow-md hover:shadow-lg",
        children: [
          /* @__PURE__ */ r.jsx("p", { children: "Send us a message" }),
          /* @__PURE__ */ r.jsx(Ln, { className: "w-5 h-5 ml-0.5", strokeWidth: 3 })
        ]
      }
    ) })
  ] });
}
const Sy = [
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
function wy() {
  const { setIsOpen: c } = Ae(), d = (b) => new Date(b).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }), f = "12px", o = "1px solid #e5e7eb", p = "0 1px 3px rgba(0, 0, 0, 0.1)";
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full bg-white", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "min-h-[62px] px-5 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10 shrink-0", children: [
      /* @__PURE__ */ r.jsx("button", { style: { marginLeft: "14px" }, onClick: () => c(!1), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ r.jsx(fu, { className: "w-5 h-5 text-gray-500" }) }),
      /* @__PURE__ */ r.jsx("span", { className: "font-semibold text-[17px] text-gray-900 text-sm truncate max-w-[200px]", children: "News & Updates" }),
      /* @__PURE__ */ r.jsx("button", { style: { marginRight: "14px" }, onClick: () => c(!1), className: "p-1 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ r.jsx(ol, { className: "w-5 h-5 text-black-500" }) })
    ] }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        style: {
          padding: "0 16px 16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        },
        className: "flex-1 overflow-y-auto bg-gray-50",
        children: Sy.map((b) => /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: () => {
              b.externalUrl && window.open(b.externalUrl, "_blank");
            },
            style: {
              width: "100%",
              background: "white",
              borderRadius: f,
              border: o,
              boxShadow: p,
              padding: "14px 16px",
              textAlign: "left",
              outline: "none",
              cursor: "pointer",
              position: "relative"
            },
            className: Gt(
              "hover:shadow-md hover:border-gray-300 transition-all",
              !b.read && "border-l-4 border-l-black-500"
            ),
            children: [
              b.imageUrl && /* @__PURE__ */ r.jsxs("div", { style: {
                width: "100%",
                height: "120px",
                borderRadius: "8px",
                overflow: "hidden",
                marginBottom: "12px",
                position: "relative"
              }, children: [
                /* @__PURE__ */ r.jsx(
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
                /* @__PURE__ */ r.jsx("div", { style: {
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  padding: "8px 12px"
                }, children: /* @__PURE__ */ r.jsx("p", { style: {
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 600,
                  margin: 0
                }, children: "Latest Updates" }) })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { style: { padding: "0 2px" }, children: [
                /* @__PURE__ */ r.jsx("h2", { style: {
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#0F172A",
                  marginBottom: "4px",
                  lineHeight: "1.4"
                }, children: b.title }),
                /* @__PURE__ */ r.jsx("p", { style: {
                  fontSize: "11px",
                  color: "#64748B",
                  lineHeight: 1.5,
                  marginBottom: "4px"
                }, children: b.summary }),
                /* @__PURE__ */ r.jsx("p", { style: {
                  fontSize: "10px",
                  color: "#64748B",
                  margin: 0,
                  opacity: 0.6
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
const Ay = [
  { view: "home", icon: qp, label: "Home" },
  { view: "messages", icon: Qp, label: "Messages" },
  { view: "news", icon: ey, label: "News" },
  { view: "help", icon: Yp, label: "Help" }
];
function zy() {
  const { currentView: c, setCurrentView: d, getTotalUnreadCount: f } = Ae(), o = f();
  return /* @__PURE__ */ r.jsx("nav", { className: "min-h-[90px] flex items-center justify-around bg-white border-t border-gray-100 pt-4 pb-5 px-6 shrink-0 rounded-b-3xl", children: Ay.map(({ view: p, icon: b, label: S }) => {
    const _ = c === p;
    return /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => d(p),
        className: Gt(
          "flex flex-col items-center gap-1.5 px-6 py-1 bg-transparent border-none cursor-pointer transition-all duration-200",
          "focus:outline-none active:scale-95",
          _ ? "text-black-600" : "text-gray-400 hover:text-gray-600"
        ),
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ r.jsx(
              b,
              {
                size: 24,
                strokeWidth: 1.5,
                className: Gt(_ ? "text-black-600" : "text-gray-400")
              }
            ),
            p === "messages" && o > 0 && /* @__PURE__ */ r.jsx("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5 border-2 border-white shadow-sm", children: o > 99 ? "99+" : o })
          ] }),
          /* @__PURE__ */ r.jsx("span", { style: { marginTop: "-8px" }, className: Gt("text-[11px] font-regular", _ ? "text-black-600" : "text-gray-500"), children: S })
        ]
      },
      p
    );
  }) });
}
function Ty({ isInline: c = !1 }) {
  const { currentView: d, isExpanded: f } = Ae(), o = d === "home";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: Gt(
        "bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up",
        c ? "relative w-full h-full rounded-none" : f ? "fixed inset-4 w-auto h-auto max-w-none max-h-none" : "absolute bottom-20 right-0 w-[400px] h-[700px] max-h-[calc(100vh-100px)]"
      ),
      children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: Gt(
              "flex-1 flex flex-col relative z-0 transition-colors duration-300",
              o ? "overflow-y-auto no-scrollbar" : "overflow-hidden"
            ),
            style: { background: "#fff" },
            children: [
              d === "home" && /* @__PURE__ */ r.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ r.jsx(oy, {}) }),
              d === "help" && /* @__PURE__ */ r.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ r.jsx(sy, {}) }),
              d === "chat" && /* @__PURE__ */ r.jsx("div", { className: "animate-fade-in h-full", children: /* @__PURE__ */ r.jsx(by, {}) }),
              d === "messages" && /* @__PURE__ */ r.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ r.jsx(xy, {}) }),
              d === "news" && /* @__PURE__ */ r.jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ r.jsx(wy, {}) })
            ]
          }
        ),
        d !== "chat" && /* @__PURE__ */ r.jsx(zy, {})
      ]
    }
  );
}
function jy({ message: c, isVisible: d, onDismiss: f, onOpen: o }) {
  const [p, b] = yt.useState(!1);
  if (yt.useEffect(() => {
    if (!d) {
      b(!0);
      const _ = setTimeout(() => b(!1), 300);
      return () => clearTimeout(_);
    }
  }, [d]), !d && !p) return null;
  const S = c.length > 80 ? c.substring(0, 80) + "..." : c;
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Gt(
        "absolute bottom-20 right-0 transition-all duration-300 ease-out",
        d ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      ),
      style: { right: "80px" },
      children: /* @__PURE__ */ r.jsxs("div", { className: "bg-white rounded-[20px] shadow-2xl border border-gray-100 p-5 pr-10 w-[320px] relative animate-slide-up", children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: (_) => {
              _.stopPropagation(), f();
            },
            className: "absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-90 focus:outline-none",
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ r.jsx(ol, { className: "w-4 h-4 text-gray-400" })
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: o,
            className: "text-left w-full group pr-2",
            children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200", children: /* @__PURE__ */ r.jsx(Np, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ r.jsx("p", { className: "text-[14px] text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors font-medium mb-1.5", children: S }),
                /* @__PURE__ */ r.jsxs("p", { className: "text-xs text-gray-500 group-hover:text-gray-700 transition-colors font-medium flex items-center gap-1", children: [
                  "Click to reply",
                  /* @__PURE__ */ r.jsx("svg", { className: "w-3 h-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M9 5l7 7-7 7" }) })
                ] })
              ] })
            ] })
          }
        )
      ] })
    }
  );
}
function Ey({ options: c }) {
  const {
    isOpen: d,
    isExpanded: f,
    initialize: o,
    customization: p,
    setCustomization: b,
    setWebhookUrl: S,
    showToast: _,
    toastMessage: A,
    setShowToast: v,
    setIsOpen: R
  } = Ae(), E = yt.useCallback(async () => {
    console.log("[AtlisoChatWidget] loadCustomization called with options:", c);
    const G = c.customization || null;
    if (G)
      console.log("[AtlisoChatWidget] Using direct customization:", G), b({
        ...aa,
        ...G,
        gradient: {
          ...aa.gradient,
          ...G.gradient || {}
        }
      });
    else if (c.organizationId && c.apiBaseUrl) {
      console.log("[AtlisoChatWidget] Fetching widget config from API", {
        organizationId: c.organizationId,
        apiBaseUrl: c.apiBaseUrl
      });
      const { fetchWidgetConfig: Z } = await Promise.resolve().then(() => z0), ft = await Z(
        c.organizationId,
        c.apiBaseUrl
      );
      ft ? (b(ft), ft.webhookUrl && S(ft.webhookUrl)) : (console.log("[AtlisoChatWidget] Using default customization (fetch failed)"), b(aa));
    } else
      console.log("[AtlisoChatWidget] Using default customization"), b(aa);
    const K = c.customization?.webhookUrl || c.webhookUrl || aa.webhookUrl;
    K && S(K);
  }, [c, b, S]);
  yt.useEffect(() => {
    o(), E();
  }, [o, E]);
  const B = c.inline === !0, X = c.hideButton === !0, tt = () => {
    if (B) return "relative w-full h-full";
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
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: Gt(
        "atliso-chat-widget-host",
        tt()
      ),
      children: [
        !B && !X && !f && /* @__PURE__ */ r.jsx(yp, {}),
        !B && !d && _ && /* @__PURE__ */ r.jsx(
          jy,
          {
            message: A,
            isVisible: _,
            onDismiss: () => v(!1),
            onOpen: () => R(!0)
          }
        ),
        (d || B) && /* @__PURE__ */ r.jsx(Ty, { isInline: B })
      ]
    }
  );
}
const du = /* @__PURE__ */ new Map();
function Ny() {
  const c = document.querySelectorAll('script[src*="atliso-chat-widget"]');
  for (const f of c) {
    const o = f.getAttribute("data-org-id");
    if (o)
      return console.log("[AtlisoChatWidget] Found data-org-id in script tag:", o), o;
  }
  const d = document.querySelectorAll("script[data-org-id]");
  for (const f of d) {
    const o = f.getAttribute("src");
    if (o && (o.includes("chat") || o.includes("widget"))) {
      const p = f.getAttribute("data-org-id");
      if (p)
        return console.log("[AtlisoChatWidget] Found data-org-id in generic script tag:", p), p;
    }
  }
  return null;
}
function My() {
  const c = document.querySelectorAll("script[data-api-url]");
  for (const d of c) {
    const f = d.getAttribute("data-api-url");
    if (f)
      return console.log("[AtlisoChatWidget] Found data-api-url in script tag:", f), f;
  }
  return "http://localhost:3000";
}
async function Hm(c, d = {}) {
  const f = typeof c == "string" ? document.querySelector(c) : c;
  if (!f) {
    console.error("[AtlisoChatWidget] Mount target not found:", c);
    return;
  }
  if (du.has(f)) {
    console.warn("[AtlisoChatWidget] Widget already mounted on target:", c);
    return;
  }
  !d.webhookUrl && !d.customization?.webhookUrl && !d.organizationId && console.warn("[AtlisoChatWidget] No webhookUrl or organizationId provided");
  const o = p0.createRoot(f);
  o.render(
    /* @__PURE__ */ r.jsx(Yn.StrictMode, { children: /* @__PURE__ */ r.jsx(Ey, { options: d }) })
  ), du.set(f, o), console.log("[AtlisoChatWidget] Widget mounted successfully");
}
function Cy(c) {
  const d = typeof c == "string" ? document.querySelector(c) : c;
  if (!d) return;
  const f = du.get(d);
  f && (f.unmount(), du.delete(d), console.log("[AtlisoChatWidget] Widget unmounted"));
}
const _y = {
  mount: Hm,
  unmount: Cy
};
function ym() {
  const c = Ny();
  if (!c) {
    console.log("[AtlisoChatWidget] No data-org-id found, waiting for manual mount call");
    return;
  }
  console.log("[AtlisoChatWidget] Auto-initializing for organization:", c);
  let d = document.getElementById("atliso-chat-root");
  d || (d = document.createElement("div"), d.id = "atliso-chat-root", document.body.appendChild(d));
  const f = My();
  Hm(d, {
    organizationId: c,
    apiBaseUrl: f
  }).catch((o) => {
    console.error("[AtlisoChatWidget] Auto-initialization failed:", o);
  });
}
typeof window < "u" && (window.AtlisoChatWidget = _y, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ym) : ym());
export {
  _y as AtlisoChatWidget,
  Hm as mount,
  Cy as unmount
};
