"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [456],
  {
    8369: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return s;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        i = {},
        l = 0,
        a = function (e) {
          return e && (e.host || a(e.parentNode));
        },
        u = function (e, t, n, u) {
          var s = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = a(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing",
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var c = i[n],
            d = [],
            f = new Set(),
            p = new Set(s),
            h = function (e) {
              !e || f.has(e) || (f.add(e), h(e.parentNode));
            };
          s.forEach(h);
          var m = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) m(e);
                else
                  try {
                    var t = e.getAttribute(u),
                      i = null !== t && "false" !== t,
                      l = (r.get(e) || 0) + 1,
                      a = (c.get(e) || 0) + 1;
                    r.set(e, l),
                      c.set(e, a),
                      d.push(e),
                      1 === l && i && o.set(e, !0),
                      1 === a && e.setAttribute(n, "true"),
                      i || e.setAttribute(u, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            m(t),
            f.clear(),
            l++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  i = c.get(e) - 1;
                r.set(e, t),
                  c.set(e, i),
                  t || (o.has(e) || e.removeAttribute(u), o.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --l ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        s = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              u(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    8030: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(2265);
      /**
       * @license lucide-react v0.399.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.filter((e, t, n) => !!e && n.indexOf(e) === t).join(" ");
        };
      /**
       * @license lucide-react v0.399.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var l = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      /**
       * @license lucide-react v0.399.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, r.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: o = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: u,
            className: s = "",
            children: c,
            iconNode: d,
            ...f
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...l,
              width: o,
              height: o,
              stroke: n,
              strokeWidth: u ? (24 * Number(a)) / Number(o) : a,
              className: i("lucide", s),
              ...f,
            },
            [
              ...d.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ],
          );
        }),
        u = (e, t) => {
          let n = (0, r.forwardRef)((n, l) => {
            let { className: u, ...s } = n;
            return (0, r.createElement)(a, {
              ref: l,
              iconNode: t,
              className: i("lucide-".concat(o(e)), u),
              ...s,
            });
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    2468: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.399.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(8030).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    7592: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.399.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(8030).Z)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    8165: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.399.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(8030).Z)("Circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    4697: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.399.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(8030).Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    844: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157);
      let r = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5944: function (e, t, n) {
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    231: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(9920),
        o = n(7437),
        i = r._(n(2265)),
        l = n(8016),
        a = n(8029),
        u = n(1142),
        s = n(3461),
        c = n(844),
        d = n(291),
        f = n(4467),
        p = n(3106),
        h = n(5944),
        m = n(4897),
        g = n(1507),
        v = new Set();
      function y(e, t, n, r, o, i) {
        if ("undefined" != typeof window && (i || (0, a.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                  ? e.locale
                  : void 0);
            if (v.has(o)) return;
            v.add(o);
          }
          (async () => (i ? e.prefetch(t, o) : e.prefetch(t, n, r)))().catch(
            (e) => {},
          );
        }
      }
      function b(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e);
      }
      let w = i.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: u,
          as: v,
          children: w,
          prefetch: x = null,
          passHref: E,
          replace: R,
          shallow: C,
          scroll: M,
          locale: j,
          onClick: k,
          onMouseEnter: P,
          onTouchStart: O,
          legacyBehavior: S = !1,
          ...T
        } = e;
        (n = w),
          S &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, o.jsx)("a", { children: n }));
        let N = i.default.useContext(d.RouterContext),
          _ = i.default.useContext(f.AppRouterContext),
          A = null != N ? N : _,
          D = !N,
          L = !1 !== x,
          I = null === x ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: W, as: F } = i.default.useMemo(() => {
            if (!N) {
              let e = b(u);
              return { href: e, as: v ? b(v) : e };
            }
            let [e, t] = (0, l.resolveHref)(N, u, !0);
            return { href: e, as: v ? (0, l.resolveHref)(N, v) : t || e };
          }, [N, u, v]),
          z = i.default.useRef(W),
          V = i.default.useRef(F);
        S && (r = i.default.Children.only(n));
        let U = S ? r && "object" == typeof r && r.ref : t,
          [B, K, H] = (0, p.useIntersection)({ rootMargin: "200px" }),
          $ = i.default.useCallback(
            (e) => {
              (V.current !== F || z.current !== W) &&
                (H(), (V.current = F), (z.current = W)),
                B(e),
                U &&
                  ("function" == typeof U
                    ? U(e)
                    : "object" == typeof U && (U.current = e));
            },
            [F, U, W, H, B],
          );
        i.default.useEffect(() => {
          A && K && L && y(A, W, F, { locale: j }, { kind: I }, D);
        }, [F, W, K, j, L, null == N ? void 0 : N.locale, A, D, I]);
        let Y = {
          ref: $,
          onClick(e) {
            S || "function" != typeof k || k(e),
              S &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              A &&
                !e.defaultPrevented &&
                (function (e, t, n, r, o, l, u, s, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == u || u;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](n, r, {
                          shallow: l,
                          locale: s,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](r || n, { scroll: e });
                  };
                  c ? i.default.startTransition(f) : f();
                })(e, A, W, F, R, C, M, j, D);
          },
          onMouseEnter(e) {
            S || "function" != typeof P || P(e),
              S &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              A &&
                (L || !D) &&
                y(
                  A,
                  W,
                  F,
                  { locale: j, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  D,
                );
          },
          onTouchStart: function (e) {
            S || "function" != typeof O || O(e),
              S &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              A &&
                (L || !D) &&
                y(
                  A,
                  W,
                  F,
                  { locale: j, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  D,
                );
          },
        };
        if ((0, s.isAbsoluteUrl)(F)) Y.href = F;
        else if (!S || E || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== j ? j : null == N ? void 0 : N.locale,
            t =
              (null == N ? void 0 : N.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                F,
                e,
                null == N ? void 0 : N.locales,
                null == N ? void 0 : N.domainLocales,
              );
          Y.href =
            t ||
            (0, m.addBasePath)(
              (0, c.addLocale)(F, e, null == N ? void 0 : N.defaultLocale),
            );
        }
        return S
          ? i.default.cloneElement(r, Y)
          : (0, o.jsx)("a", { ...T, ...Y, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9189: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8016: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(8323),
        o = n(1142),
        i = n(5519),
        l = n(3461),
        a = n(8157),
        u = n(8029),
        s = n(9195),
        c = n(20);
      function d(e, t, n) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          h = p ? f.slice(p[0].length) : f;
        if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let t = (0, l.normalizeRepeatedSlashes)(h);
          f = (p ? p[0] : "") + t;
        }
        if (!(0, u.isLocalURL)(f)) return n ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, s.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: l, params: a } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                n,
              );
            l &&
              (t = (0, o.formatWithValidation)({
                pathname: l,
                hash: e.hash,
                query: (0, i.omit)(n, a),
              }));
          }
          let l =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [l, t || l] : l;
        } catch (e) {
          return n ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3106: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(2265),
        o = n(9189),
        i = "function" == typeof IntersectionObserver,
        l = new Map(),
        a = [];
      function u(e) {
        let { rootRef: t, rootMargin: n, disabled: u } = e,
          s = u || !i,
          [c, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (i) {
              if (s || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = a.find(
                        (e) => e.root === n.root && e.margin === n.margin,
                      );
                    if (r && (t = l.get(r))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: o,
                      }),
                      a.push(n),
                      l.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), l.delete(r);
                        let e = a.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin,
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [s, n, t, c, f.current]),
          [
            p,
            c,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1943: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return n.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    291: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext(null);
    },
    1142: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return l;
          },
        });
      let r = n(1452)._(n(8323)),
        o = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: n } = e,
          i = e.protocol || "",
          l = e.pathname || "",
          a = e.hash || "",
          u = e.query || "",
          s = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (s = t + e.host)
            : n &&
              ((s = t + (~n.indexOf(":") ? "[" + n + "]" : n)),
              e.port && (s += ":" + e.port)),
          u &&
            "object" == typeof u &&
            (u = String(r.urlQueryToSearchParams(u)));
        let c = e.search || (u && "?" + u) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          e.slashes || ((!i || o.test(i)) && !1 !== s)
            ? ((s = "//" + (s || "")), l && "/" !== l[0] && (l = "/" + l))
            : s || (s = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            i +
            s +
            (l = l.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let l = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return i(e);
      }
    },
    9195: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let r = n(9089),
        o = n(8083);
    },
    20: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(1533),
        o = n(3169);
      function i(e, t, n) {
        let i = "",
          l = (0, o.getRouteRegex)(e),
          a = l.groups,
          u = (t !== e ? (0, r.getRouteMatcher)(l)(t) : "") || n;
        i = e;
        let s = Object.keys(a);
        return (
          s.every((e) => {
            let t = u[e] || "",
              { repeat: n, optional: r } = a[e],
              o = "[" + (n ? "..." : "") + e + "]";
            return (
              r && (o = (t ? "" : "/") + "[" + o + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in u) &&
                (i =
                  i.replace(
                    o,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t),
                  ) || "/")
            );
          }) || (i = ""),
          { params: s, result: i }
        );
      }
    },
    8083: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(2269),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function i(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e,
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    8029: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(3461),
        o = n(9404);
      function i(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, o.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    5519: function (e, t) {
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8323: function (e, t) {
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
                ? t[n].push(e)
                : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(n, r(e)))
              : t.set(n, r(o));
          }),
          t
        );
      }
      function i(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    1533: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(3461);
      function o(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let i = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            l = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = o[t.pos];
              void 0 !== r &&
                (l[e] = ~r.indexOf("/")
                  ? r.split("/").map((e) => i(e))
                  : t.repeat
                    ? [i(r)]
                    : i(r));
            }),
            l
          );
        };
      }
    },
    3169: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return u;
          },
        });
      let r = n(2269),
        o = n(1943),
        i = n(7741);
      function l(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function a(e) {
        let t = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && i) {
                let { key: e, optional: r, repeat: u } = l(i[1]);
                return (
                  (n[e] = { pos: a++, repeat: u, optional: r }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!i) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: r } = l(i[1]);
                return (
                  (n[e] = { pos: a++, repeat: t, optional: r }),
                  t ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function u(e) {
        let { parameterizedRoute: t, groups: n } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function s(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: i,
            keyPrefix: a,
          } = e,
          { key: u, optional: s, repeat: c } = l(r),
          d = u.replace(/\W/g, "");
        a && (d = "" + a + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = n()),
          a ? (i[d] = "" + a + u) : (i[d] = u);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? s
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let n;
        let l = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          u = {};
        return {
          namedParameterizedRoute: l
            .map((e) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && i) {
                let [n] = e.split(i[0]);
                return s({
                  getSafeRouteKey: a,
                  interceptionMarker: n,
                  segment: i[1],
                  routeKeys: u,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return i
                ? s({
                    getSafeRouteKey: a,
                    segment: i[1],
                    routeKeys: u,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: u,
        };
      }
      function d(e, t) {
        let n = c(e, t);
        return {
          ...u(e),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: n } = a(e),
          { catchAll: r = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9089: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/"),
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").',
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/"),
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/"),
              ),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let n = o.slice(1, -1),
              l = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (l = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "').",
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "').",
              );
            function i(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "').",
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path',
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (l) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).',
                  );
                i(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").',
                  );
                i(this.restSlugName, n), (this.restSlugName = n), (o = "[...]");
              }
            } else {
              if (l)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").',
                );
              i(this.slugName, n), (this.slugName = n), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new n()),
            this.children.get(o)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    3461: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return v;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return u;
          },
          getLocationOrigin: function () {
            return l;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return s;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return b;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return n || ((n = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => o.test(e);
      function l() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function a() {
        let { href: e } = window.location,
          t = l();
        return e.substring(t.length);
      }
      function u(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function s(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (n && s(n)) return r;
        if (!r)
          throw Error(
            '"' +
              u(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.',
          );
        return r;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e],
          );
      class h extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class v extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    9418: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return X;
        },
      });
      var r,
        o,
        i,
        l,
        a,
        u,
        s,
        c = function () {
          return (c =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function d(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var f = n(2265),
        p = "right-scroll-bar-position",
        h = "width-before-scroll-bar";
      function m(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var g = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect,
        v = new WeakMap(),
        y =
          (void 0 === o && (o = {}),
          ((void 0 === i &&
            (i = function (e) {
              return e;
            }),
          (l = []),
          (a = !1),
          (u = {
            read: function () {
              if (a)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
                );
              return l.length ? l[l.length - 1] : null;
            },
            useMedium: function (e) {
              var t = i(e, a);
              return (
                l.push(t),
                function () {
                  l = l.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (a = !0; l.length; ) {
                var t = l;
                (l = []), t.forEach(e);
              }
              l = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return l;
                },
              };
            },
            assignMedium: function (e) {
              a = !0;
              var t = [];
              if (l.length) {
                var n = l;
                (l = []), n.forEach(e), (t = l);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (l = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), l;
                  },
                });
            },
          })).options = c({ async: !0, ssr: !1 }, o)),
          u),
        b = function () {},
        w = f.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            l = f.useRef(null),
            a = f.useState({
              onScrollCapture: b,
              onWheelCapture: b,
              onTouchMoveCapture: b,
            }),
            u = a[0],
            s = a[1],
            p = e.forwardProps,
            h = e.children,
            w = e.className,
            x = e.removeScrollBar,
            E = e.enabled,
            R = e.shards,
            C = e.sideCar,
            M = e.noIsolation,
            j = e.inert,
            k = e.allowPinchZoom,
            P = e.as,
            O = e.gapMode,
            S = d(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            T =
              ((n = [l, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return m(t, e);
                });
              }),
              ((o = (0, f.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              g(
                function () {
                  var e = v.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || m(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || m(e, o);
                      });
                  }
                  v.set(i, n);
                },
                [n],
              ),
              i),
            N = c(c({}, S), u);
          return f.createElement(
            f.Fragment,
            null,
            E &&
              f.createElement(C, {
                sideCar: y,
                removeScrollBar: x,
                shards: R,
                noIsolation: M,
                inert: j,
                setCallbacks: s,
                allowPinchZoom: !!k,
                lockRef: l,
                gapMode: O,
              }),
            p
              ? f.cloneElement(f.Children.only(h), c(c({}, N), { ref: T }))
              : f.createElement(
                  void 0 === P ? "div" : P,
                  c({}, N, { className: w, ref: T }),
                  h,
                ),
          );
        });
      (w.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (w.classNames = { fullWidth: h, zeroRight: p });
      var x = function (e) {
        var t = e.sideCar,
          n = d(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car",
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return f.createElement(r, c({}, n));
      };
      x.isSideCarExport = !0;
      var E = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, l;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (l = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(l);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        R = function () {
          var e = E();
          return function (t, n) {
            f.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n],
            );
          };
        },
        C = function () {
          var e = R();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        M = { left: 0, top: 0, right: 0, gap: 0 },
        j = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        k = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [j(n), j(r), j(o)];
        },
        P = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return M;
          var t = k(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        O = C(),
        S = "data-scroll-locked",
        T = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            l = e.right,
            a = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(S, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        l,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                      )
                      .concat(a, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(a, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  .",
              )
              .concat(p, " {\n    right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(h, " {\n    margin-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(p, " .")
              .concat(p, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(h, " .")
              .concat(h, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(S, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(a, "px;\n  }\n")
          );
        },
        N = function () {
          var e = parseInt(document.body.getAttribute(S) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        _ = function () {
          f.useEffect(function () {
            return (
              document.body.setAttribute(S, (N() + 1).toString()),
              function () {
                var e = N() - 1;
                e <= 0
                  ? document.body.removeAttribute(S)
                  : document.body.setAttribute(S, e.toString());
              }
            );
          }, []);
        },
        A = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          _();
          var i = f.useMemo(
            function () {
              return P(o);
            },
            [o],
          );
          return f.createElement(O, {
            styles: T(i, !t, o, n ? "" : "!important"),
          });
        },
        D = !1;
      if ("undefined" != typeof window)
        try {
          var L = Object.defineProperty({}, "passive", {
            get: function () {
              return (D = !0), !0;
            },
          });
          window.addEventListener("test", L, L),
            window.removeEventListener("test", L, L);
        } catch (e) {
          D = !1;
        }
      var I = !!D && { passive: !1 },
        W = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        F = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              z(e, r))
            ) {
              var o = V(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        z = function (e, t) {
          return "v" === e ? W(t, "overflowY") : W(t, "overflowX");
        },
        V = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        U = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            a = l * r,
            u = n.target,
            s = t.contains(u),
            c = !1,
            d = a > 0,
            f = 0,
            p = 0;
          do {
            var h = V(e, u),
              m = h[0],
              g = h[1] - h[2] - l * m;
            (m || g) && z(e, u) && ((f += g), (p += m)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && a > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (c = !0),
            c
          );
        },
        B = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        K = function (e) {
          return [e.deltaX, e.deltaY];
        },
        H = function (e) {
          return e && "current" in e ? e.current : e;
        },
        $ = 0,
        Y = [],
        G =
          ((s = function (e) {
            var t = f.useRef([]),
              n = f.useRef([0, 0]),
              r = f.useRef(),
              o = f.useState($++)[0],
              i = f.useState(C)[0],
              l = f.useRef(e);
            f.useEffect(
              function () {
                l.current = e;
              },
              [e],
            ),
              f.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o),
                    );
                    var t = (function (e, t, n) {
                      if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)),
                            (r[o] = t[o]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })([e.lockRef.current], (e.shards || []).map(H), !0).filter(
                      Boolean,
                    );
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o),
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o),
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o),
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards],
              );
            var a = f.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !l.current.allowPinchZoom;
                var o,
                  i = B(e),
                  a = n.current,
                  u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                  s = "deltaY" in e ? e.deltaY : a[1] - i[1],
                  c = e.target,
                  d = Math.abs(u) > Math.abs(s) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === c.type)
                  return !1;
                var f = F(d, c);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = F(d, c))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (u || s) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return U(p, t, e, "h" === p ? u : s, !0);
              }, []),
              u = f.useCallback(function (e) {
                if (Y.length && Y[Y.length - 1] === i) {
                  var n = "deltaY" in e ? K(e) : B(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        (t.target === e.target ||
                          e.target === t.shadowParent) &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (l.current.shards || [])
                      .map(H)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? a(e, o[0]) : !l.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              s = f.useCallback(function (e, n, r, o) {
                var i = {
                  name: e,
                  delta: n,
                  target: r,
                  should: o,
                  shadowParent: (function (e) {
                    for (var t = null; null !== e; )
                      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                        (e = e.parentNode);
                    return t;
                  })(r),
                };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              c = f.useCallback(function (e) {
                (n.current = B(e)), (r.current = void 0);
              }, []),
              d = f.useCallback(function (t) {
                s(t.type, K(t), t.target, a(t, e.lockRef.current));
              }, []),
              p = f.useCallback(function (t) {
                s(t.type, B(t), t.target, a(t, e.lockRef.current));
              }, []);
            f.useEffect(function () {
              return (
                Y.push(i),
                e.setCallbacks({
                  onScrollCapture: d,
                  onWheelCapture: d,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener("wheel", u, I),
                document.addEventListener("touchmove", u, I),
                document.addEventListener("touchstart", c, I),
                function () {
                  (Y = Y.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener("wheel", u, I),
                    document.removeEventListener("touchmove", u, I),
                    document.removeEventListener("touchstart", c, I);
                }
              );
            }, []);
            var h = e.removeScrollBar,
              m = e.inert;
            return f.createElement(
              f.Fragment,
              null,
              m
                ? f.createElement(i, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-",
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              h ? f.createElement(A, { gapMode: e.gapMode }) : null,
            );
          }),
          y.useMedium(s),
          x),
        Z = f.forwardRef(function (e, t) {
          return f.createElement(w, c({}, e, { ref: t, sideCar: G }));
        });
      Z.classNames = w.classNames;
      var X = Z;
    },
    8149: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    976: function (e, t, n) {
      n.d(t, {
        B: function () {
          return u;
        },
      });
      var r = n(2265),
        o = n(8324),
        i = n(1584),
        l = n(1538),
        a = n(7437);
      function u(e) {
        let t = e + "CollectionProvider",
          [n, u] = (0, o.b)(t),
          [s, c] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          d = (e) => {
            let { scope: t, children: n } = e,
              o = r.useRef(null),
              i = r.useRef(new Map()).current;
            return (0, a.jsx)(s, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: n,
            });
          };
        d.displayName = t;
        let f = e + "CollectionSlot",
          p = r.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = c(f, n),
              u = (0, i.e)(t, o.collectionRef);
            return (0, a.jsx)(l.g7, { ref: u, children: r });
          });
        p.displayName = f;
        let h = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          g = r.forwardRef((e, t) => {
            let { scope: n, children: o, ...u } = e,
              s = r.useRef(null),
              d = (0, i.e)(t, s),
              f = c(h, n);
            return (
              r.useEffect(
                () => (
                  f.itemMap.set(s, { ref: s, ...u }),
                  () => void f.itemMap.delete(s)
                ),
              ),
              (0, a.jsx)(l.g7, { [m]: "", ref: d, children: o })
            );
          });
        return (
          (g.displayName = h),
          [
            { Provider: d, Slot: p, ItemSlot: g },
            function (t) {
              let n = c(e + "CollectionConsumer", t);
              return r.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
                );
              }, [n.collectionRef, n.itemMap]);
            },
            u,
          ]
        );
      }
    },
    1584: function (e, t, n) {
      n.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return i;
        },
      });
      var r = n(2265);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function i(...e) {
        return r.useCallback(o(...e), e);
      }
    },
    8324: function (e, t, n) {
      n.d(t, {
        b: function () {
          return l;
        },
        k: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(7437);
      function i(e, t) {
        let n = r.createContext(t);
        function i(e) {
          let { children: t, ...i } = e,
            l = r.useMemo(() => i, Object.values(i));
          return (0, o.jsx)(n.Provider, { value: l, children: t });
        }
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = r.useContext(n);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function l(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o],
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let l = r.createContext(i),
                a = n.length;
              function u(t) {
                let { scope: n, children: i, ...u } = t,
                  s = n?.[e][a] || l,
                  c = r.useMemo(() => u, Object.values(u));
                return (0, o.jsx)(s.Provider, { value: c, children: i });
              }
              return (
                (n = [...n, i]),
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e][a] || l,
                      s = r.useContext(u);
                    if (s) return s;
                    if (void 0 !== i) return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o],
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(i, ...t),
          ]
        );
      }
    },
    3304: function (e, t, n) {
      n.d(t, {
        Dx: function () {
          return en;
        },
        VY: function () {
          return et;
        },
        aV: function () {
          return ee;
        },
        dk: function () {
          return er;
        },
        fC: function () {
          return q;
        },
        h_: function () {
          return J;
        },
        x8: function () {
          return eo;
        },
        xz: function () {
          return Q;
        },
      });
      var r = n(2265),
        o = n(8149),
        i = n(1584),
        l = n(8324),
        a = n(3201),
        u = n(1715),
        s = n(3938),
        c = n(467),
        d = n(6935),
        f = n(1383),
        p = n(5171),
        h = n(589),
        m = n(9418),
        g = n(8369),
        v = n(1538),
        y = n(7437),
        b = "Dialog",
        [w, x] = (0, l.b)(b),
        [E, R] = w(b),
        C = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: o,
              defaultOpen: i,
              onOpenChange: l,
              modal: s = !0,
            } = e,
            c = r.useRef(null),
            d = r.useRef(null),
            [f = !1, p] = (0, u.T)({ prop: o, defaultProp: i, onChange: l });
          return (0, y.jsx)(E, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, a.M)(),
            titleId: (0, a.M)(),
            descriptionId: (0, a.M)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p((e) => !e), [p]),
            modal: s,
            children: n,
          });
        };
      C.displayName = b;
      var M = "DialogTrigger",
        j = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            l = R(M, n),
            a = (0, i.e)(t, l.triggerRef);
          return (0, y.jsx)(p.WV.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l.open,
            "aria-controls": l.contentId,
            "data-state": H(l.open),
            ...r,
            ref: a,
            onClick: (0, o.M)(e.onClick, l.onOpenToggle),
          });
        });
      j.displayName = M;
      var k = "DialogPortal",
        [P, O] = w(k, { forceMount: void 0 }),
        S = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: o,
              container: i,
            } = e,
            l = R(k, t);
          return (0, y.jsx)(P, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, (e) =>
              (0, y.jsx)(f.z, {
                present: n || l.open,
                children: (0, y.jsx)(d.h, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              }),
            ),
          });
        };
      S.displayName = k;
      var T = "DialogOverlay",
        N = r.forwardRef((e, t) => {
          let n = O(T, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = R(T, e.__scopeDialog);
          return i.modal
            ? (0, y.jsx)(f.z, {
                present: r || i.open,
                children: (0, y.jsx)(_, { ...o, ref: t }),
              })
            : null;
        });
      N.displayName = T;
      var _ = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(T, n);
          return (0, y.jsx)(m.Z, {
            as: v.g7,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, y.jsx)(p.WV.div, {
              "data-state": H(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        A = "DialogContent",
        D = r.forwardRef((e, t) => {
          let n = O(A, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = R(A, e.__scopeDialog);
          return (0, y.jsx)(f.z, {
            present: r || i.open,
            children: i.modal
              ? (0, y.jsx)(L, { ...o, ref: t })
              : (0, y.jsx)(I, { ...o, ref: t }),
          });
        });
      D.displayName = A;
      var L = r.forwardRef((e, t) => {
          let n = R(A, e.__scopeDialog),
            l = r.useRef(null),
            a = (0, i.e)(t, n.contentRef, l);
          return (
            r.useEffect(() => {
              let e = l.current;
              if (e) return (0, g.Ry)(e);
            }, []),
            (0, y.jsx)(W, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: (0, o.M)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, o.M)(e.onFocusOutside, (e) =>
                e.preventDefault(),
              ),
            })
          );
        }),
        I = r.forwardRef((e, t) => {
          let n = R(A, e.__scopeDialog),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, y.jsx)(W, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var r, l;
              null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t),
                t.defaultPrevented ||
                  (o.current ||
                    null === (l = n.triggerRef.current) ||
                    void 0 === l ||
                    l.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var r, l;
              null === (r = e.onInteractOutside) ||
                void 0 === r ||
                r.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let a = t.target;
              (null === (l = n.triggerRef.current) || void 0 === l
                ? void 0
                : l.contains(a)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        W = r.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: o,
              onOpenAutoFocus: l,
              onCloseAutoFocus: a,
              ...u
            } = e,
            d = R(A, n),
            f = r.useRef(null),
            p = (0, i.e)(t, f);
          return (
            (0, h.EW)(),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(c.M, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: l,
                  onUnmountAutoFocus: a,
                  children: (0, y.jsx)(s.XB, {
                    role: "dialog",
                    id: d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": H(d.open),
                    ...u,
                    ref: p,
                    onDismiss: () => d.onOpenChange(!1),
                  }),
                }),
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(Z, { titleId: d.titleId }),
                    (0, y.jsx)(X, {
                      contentRef: f,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        F = "DialogTitle",
        z = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(F, n);
          return (0, y.jsx)(p.WV.h2, { id: o.titleId, ...r, ref: t });
        });
      z.displayName = F;
      var V = "DialogDescription",
        U = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = R(V, n);
          return (0, y.jsx)(p.WV.p, { id: o.descriptionId, ...r, ref: t });
        });
      U.displayName = V;
      var B = "DialogClose",
        K = r.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            i = R(B, n);
          return (0, y.jsx)(p.WV.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.M)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function H(e) {
        return e ? "open" : "closed";
      }
      K.displayName = B;
      var $ = "DialogTitleWarning",
        [Y, G] = (0, l.k)($, {
          contentName: A,
          titleName: F,
          docsSlug: "dialog",
        }),
        Z = (e) => {
          let { titleId: t } = e,
            n = G($),
            o = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `",
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/",
              )
              .concat(n.docsSlug);
          return (
            r.useEffect(() => {
              t && !document.getElementById(t) && console.error(o);
            }, [o, t]),
            null
          );
        },
        X = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            o = G("DialogDescriptionWarning"),
            i =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                o.contentName,
                "}.",
              );
          return (
            r.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && !document.getElementById(n) && console.warn(i);
            }, [i, t, n]),
            null
          );
        },
        q = C,
        Q = j,
        J = S,
        ee = N,
        et = D,
        en = z,
        er = U,
        eo = K;
    },
    7513: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return i;
        },
      });
      var r = n(2265);
      n(7437);
      var o = r.createContext(void 0);
      function i(e) {
        let t = r.useContext(o);
        return e || t || "ltr";
      }
    },
    3938: function (e, t, n) {
      n.d(t, {
        XB: function () {
          return f;
        },
      });
      var r,
        o = n(2265),
        i = n(8149),
        l = n(5171),
        a = n(1584),
        u = n(5137),
        s = n(7437),
        c = "dismissableLayer.update",
        d = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          var n, f;
          let {
              disableOutsidePointerEvents: m = !1,
              onEscapeKeyDown: g,
              onPointerDownOutside: v,
              onFocusOutside: y,
              onInteractOutside: b,
              onDismiss: w,
              ...x
            } = e,
            E = o.useContext(d),
            [R, C] = o.useState(null),
            M =
              null !== (f = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== f
                ? f
                : null === (n = globalThis) || void 0 === n
                  ? void 0
                  : n.document,
            [, j] = o.useState({}),
            k = (0, a.e)(t, (e) => C(e)),
            P = Array.from(E.layers),
            [O] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            S = P.indexOf(O),
            T = R ? P.indexOf(R) : -1,
            N = E.layersWithOutsidePointerEventsDisabled.size > 0,
            _ = T >= S,
            A = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = (0, u.W)(e),
                i = o.useRef(!1),
                l = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            h("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", l.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...E.branches].some((e) => e.contains(t));
              !_ ||
                n ||
                (null == v || v(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, M),
            D = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = (0, u.W)(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      h(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 },
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...E.branches].some((e) => e.contains(t)) ||
                (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, M);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, u.W)(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              T !== E.layers.size - 1 ||
                (null == g || g(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, M),
            o.useEffect(() => {
              if (R)
                return (
                  m &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = M.body.style.pointerEvents),
                      (M.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(R)),
                  E.layers.add(R),
                  p(),
                  () => {
                    m &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (M.body.style.pointerEvents = r);
                  }
                );
            }, [R, M, m, E]),
            o.useEffect(
              () => () => {
                R &&
                  (E.layers.delete(R),
                  E.layersWithOutsidePointerEventsDisabled.delete(R),
                  p());
              },
              [R, E],
            ),
            o.useEffect(() => {
              let e = () => j({});
              return (
                document.addEventListener(c, e),
                () => document.removeEventListener(c, e)
              );
            }, []),
            (0, s.jsx)(l.WV.div, {
              ...x,
              ref: k,
              style: {
                pointerEvents: N ? (_ ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.M)(e.onFocusCapture, D.onFocusCapture),
              onBlurCapture: (0, i.M)(e.onBlurCapture, D.onBlurCapture),
              onPointerDownCapture: (0, i.M)(
                e.onPointerDownCapture,
                A.onPointerDownCapture,
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(c);
        document.dispatchEvent(e);
      }
      function h(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, l.jH)(i, a) : i.dispatchEvent(a);
      }
      (f.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(d),
            r = o.useRef(null),
            i = (0, a.e)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, s.jsx)(l.WV.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
    },
    1220: function (e, t, n) {
      n.d(t, {
        oC: function () {
          return td;
        },
        VY: function () {
          return ta;
        },
        ZA: function () {
          return tu;
        },
        ck: function () {
          return tc;
        },
        wU: function () {
          return th;
        },
        __: function () {
          return ts;
        },
        Uv: function () {
          return tl;
        },
        Ee: function () {
          return tf;
        },
        Rk: function () {
          return tp;
        },
        fC: function () {
          return to;
        },
        Z0: function () {
          return tm;
        },
        Tr: function () {
          return tg;
        },
        tu: function () {
          return ty;
        },
        fF: function () {
          return tv;
        },
        xz: function () {
          return ti;
        },
      });
      var r = n(2265),
        o = n(8149),
        i = n(1584),
        l = n(8324),
        a = n(1715),
        u = n(5171),
        s = n(976),
        c = n(7513),
        d = n(3938),
        f = n(589),
        p = n(467),
        h = n(3201),
        m = n(7683),
        g = n(6935),
        v = n(1383),
        y = n(5137),
        b = n(7437),
        w = "rovingFocusGroup.onEntryFocus",
        x = { bubbles: !1, cancelable: !0 },
        E = "RovingFocusGroup",
        [R, C, M] = (0, s.B)(E),
        [j, k] = (0, l.b)(E, [M]),
        [P, O] = j(E),
        S = r.forwardRef((e, t) =>
          (0, b.jsx)(R.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, b.jsx)(R.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, b.jsx)(T, { ...e, ref: t }),
            }),
          }),
        );
      S.displayName = E;
      var T = r.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: l,
              loop: s = !1,
              dir: d,
              currentTabStopId: f,
              defaultCurrentTabStopId: p,
              onCurrentTabStopIdChange: h,
              onEntryFocus: m,
              preventScrollOnEntryFocus: g = !1,
              ...v
            } = e,
            E = r.useRef(null),
            R = (0, i.e)(t, E),
            M = (0, c.gm)(d),
            [j = null, k] = (0, a.T)({ prop: f, defaultProp: p, onChange: h }),
            [O, S] = r.useState(!1),
            T = (0, y.W)(m),
            N = C(n),
            _ = r.useRef(!1),
            [A, L] = r.useState(0);
          return (
            r.useEffect(() => {
              let e = E.current;
              if (e)
                return (
                  e.addEventListener(w, T), () => e.removeEventListener(w, T)
                );
            }, [T]),
            (0, b.jsx)(P, {
              scope: n,
              orientation: l,
              dir: M,
              loop: s,
              currentTabStopId: j,
              onItemFocus: r.useCallback((e) => k(e), [k]),
              onItemShiftTab: r.useCallback(() => S(!0), []),
              onFocusableItemAdd: r.useCallback(() => L((e) => e + 1), []),
              onFocusableItemRemove: r.useCallback(() => L((e) => e - 1), []),
              children: (0, b.jsx)(u.WV.div, {
                tabIndex: O || 0 === A ? -1 : 0,
                "data-orientation": l,
                ...v,
                ref: R,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, o.M)(e.onMouseDown, () => {
                  _.current = !0;
                }),
                onFocus: (0, o.M)(e.onFocus, (e) => {
                  let t = !_.current;
                  if (e.target === e.currentTarget && t && !O) {
                    let t = new CustomEvent(w, x);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = N().filter((e) => e.focusable);
                      D(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === j),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        g,
                      );
                    }
                  }
                  _.current = !1;
                }),
                onBlur: (0, o.M)(e.onBlur, () => S(!1)),
              }),
            })
          );
        }),
        N = "RovingFocusGroupItem",
        _ = r.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: i = !0,
              active: l = !1,
              tabStopId: a,
              ...s
            } = e,
            c = (0, h.M)(),
            d = a || c,
            f = O(N, n),
            p = f.currentTabStopId === d,
            m = C(n),
            { onFocusableItemAdd: g, onFocusableItemRemove: v } = f;
          return (
            r.useEffect(() => {
              if (i) return g(), () => v();
            }, [i, g, v]),
            (0, b.jsx)(R.ItemSlot, {
              scope: n,
              id: d,
              focusable: i,
              active: l,
              children: (0, b.jsx)(u.WV.span, {
                tabIndex: p ? 0 : -1,
                "data-orientation": f.orientation,
                ...s,
                ref: t,
                onMouseDown: (0, o.M)(e.onMouseDown, (e) => {
                  i ? f.onItemFocus(d) : e.preventDefault();
                }),
                onFocus: (0, o.M)(e.onFocus, () => f.onItemFocus(d)),
                onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    f.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, n) {
                    var r;
                    let o =
                      ((r = e.key),
                      "rtl" !== n
                        ? r
                        : "ArrowLeft" === r
                          ? "ArrowRight"
                          : "ArrowRight" === r
                            ? "ArrowLeft"
                            : r);
                    if (
                      !(
                        "vertical" === t &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === t &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return A[o];
                  })(e, f.orientation, f.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let o = m()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) o.reverse();
                    else if ("prev" === t || "next" === t) {
                      var n, r;
                      "prev" === t && o.reverse();
                      let i = o.indexOf(e.currentTarget);
                      o = f.loop
                        ? ((n = o),
                          (r = i + 1),
                          n.map((e, t) => n[(r + t) % n.length]))
                        : o.slice(i + 1);
                    }
                    setTimeout(() => D(o));
                  }
                }),
              }),
            })
          );
        });
      _.displayName = N;
      var A = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function D(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = document.activeElement;
        for (let r of e)
          if (
            r === n ||
            (r.focus({ preventScroll: t }), document.activeElement !== n)
          )
            return;
      }
      var L = n(1538),
        I = n(8369),
        W = n(9418),
        F = ["Enter", " "],
        z = ["ArrowUp", "PageDown", "End"],
        V = ["ArrowDown", "PageUp", "Home", ...z],
        U = { ltr: [...F, "ArrowRight"], rtl: [...F, "ArrowLeft"] },
        B = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        K = "Menu",
        [H, $, Y] = (0, s.B)(K),
        [G, Z] = (0, l.b)(K, [Y, m.D7, k]),
        X = (0, m.D7)(),
        q = k(),
        [Q, J] = G(K),
        [ee, et] = G(K),
        en = (e) => {
          let {
              __scopeMenu: t,
              open: n = !1,
              children: o,
              dir: i,
              onOpenChange: l,
              modal: a = !0,
            } = e,
            u = X(t),
            [s, d] = r.useState(null),
            f = r.useRef(!1),
            p = (0, y.W)(l),
            h = (0, c.gm)(i);
          return (
            r.useEffect(() => {
              let e = () => {
                  (f.current = !0),
                    document.addEventListener("pointerdown", t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", t, {
                      capture: !0,
                      once: !0,
                    });
                },
                t = () => (f.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", t, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", t, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, b.jsx)(m.fC, {
              ...u,
              children: (0, b.jsx)(Q, {
                scope: t,
                open: n,
                onOpenChange: p,
                content: s,
                onContentChange: d,
                children: (0, b.jsx)(ee, {
                  scope: t,
                  onClose: r.useCallback(() => p(!1), [p]),
                  isUsingKeyboardRef: f,
                  dir: h,
                  modal: a,
                  children: o,
                }),
              }),
            })
          );
        };
      en.displayName = K;
      var er = r.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
          o = X(n);
        return (0, b.jsx)(m.ee, { ...o, ...r, ref: t });
      });
      er.displayName = "MenuAnchor";
      var eo = "MenuPortal",
        [ei, el] = G(eo, { forceMount: void 0 }),
        ea = (e) => {
          let { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
            i = J(eo, t);
          return (0, b.jsx)(ei, {
            scope: t,
            forceMount: n,
            children: (0, b.jsx)(v.z, {
              present: n || i.open,
              children: (0, b.jsx)(g.h, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      ea.displayName = eo;
      var eu = "MenuContent",
        [es, ec] = G(eu),
        ed = r.forwardRef((e, t) => {
          let n = el(eu, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...o } = e,
            i = J(eu, e.__scopeMenu),
            l = et(eu, e.__scopeMenu);
          return (0, b.jsx)(H.Provider, {
            scope: e.__scopeMenu,
            children: (0, b.jsx)(v.z, {
              present: r || i.open,
              children: (0, b.jsx)(H.Slot, {
                scope: e.__scopeMenu,
                children: l.modal
                  ? (0, b.jsx)(ef, { ...o, ref: t })
                  : (0, b.jsx)(ep, { ...o, ref: t }),
              }),
            }),
          });
        }),
        ef = r.forwardRef((e, t) => {
          let n = J(eu, e.__scopeMenu),
            l = r.useRef(null),
            a = (0, i.e)(t, l);
          return (
            r.useEffect(() => {
              let e = l.current;
              if (e) return (0, I.Ry)(e);
            }, []),
            (0, b.jsx)(eh, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: n.open,
              disableOutsideScroll: !0,
              onFocusOutside: (0, o.M)(
                e.onFocusOutside,
                (e) => e.preventDefault(),
                { checkForDefaultPrevented: !1 },
              ),
              onDismiss: () => n.onOpenChange(!1),
            })
          );
        }),
        ep = r.forwardRef((e, t) => {
          let n = J(eu, e.__scopeMenu);
          return (0, b.jsx)(eh, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1),
          });
        }),
        eh = r.forwardRef((e, t) => {
          let {
              __scopeMenu: n,
              loop: l = !1,
              trapFocus: a,
              onOpenAutoFocus: u,
              onCloseAutoFocus: s,
              disableOutsidePointerEvents: c,
              onEntryFocus: h,
              onEscapeKeyDown: g,
              onPointerDownOutside: v,
              onFocusOutside: y,
              onInteractOutside: w,
              onDismiss: x,
              disableOutsideScroll: E,
              ...R
            } = e,
            C = J(eu, n),
            M = et(eu, n),
            j = X(n),
            k = q(n),
            P = $(n),
            [O, T] = r.useState(null),
            N = r.useRef(null),
            _ = (0, i.e)(t, N, C.onContentChange),
            A = r.useRef(0),
            D = r.useRef(""),
            I = r.useRef(0),
            F = r.useRef(null),
            U = r.useRef("right"),
            B = r.useRef(0),
            K = E ? W.Z : r.Fragment,
            H = E ? { as: L.g7, allowPinchZoom: !0 } : void 0,
            Y = (e) => {
              var t, n;
              let r = D.current + e,
                o = P().filter((e) => !e.disabled),
                i = document.activeElement,
                l =
                  null === (t = o.find((e) => e.ref.current === i)) ||
                  void 0 === t
                    ? void 0
                    : t.textValue,
                a = (function (e, t, n) {
                  var r;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    i =
                      ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
                      e.map((t, n) => e[(r + n) % e.length]));
                  1 === o.length && (i = i.filter((e) => e !== n));
                  let l = i.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase()),
                  );
                  return l !== n ? l : void 0;
                })(
                  o.map((e) => e.textValue),
                  r,
                  l,
                ),
                u =
                  null === (n = o.find((e) => e.textValue === a)) ||
                  void 0 === n
                    ? void 0
                    : n.ref.current;
              !(function e(t) {
                (D.current = t),
                  window.clearTimeout(A.current),
                  "" !== t && (A.current = window.setTimeout(() => e(""), 1e3));
              })(r),
                u && setTimeout(() => u.focus());
            };
          r.useEffect(() => () => window.clearTimeout(A.current), []),
            (0, f.EW)();
          let G = r.useCallback((e) => {
            var t, n, r;
            return (
              U.current ===
                (null === (t = F.current) || void 0 === t ? void 0 : t.side) &&
              !!(r =
                null === (n = F.current) || void 0 === n ? void 0 : n.area) &&
              (function (e, t) {
                let { x: n, y: r } = e,
                  o = !1;
                for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                  let l = t[e].x,
                    a = t[e].y,
                    u = t[i].x,
                    s = t[i].y;
                  a > r != s > r &&
                    n < ((u - l) * (r - a)) / (s - a) + l &&
                    (o = !o);
                }
                return o;
              })({ x: e.clientX, y: e.clientY }, r)
            );
          }, []);
          return (0, b.jsx)(es, {
            scope: n,
            searchRef: D,
            onItemEnter: r.useCallback(
              (e) => {
                G(e) && e.preventDefault();
              },
              [G],
            ),
            onItemLeave: r.useCallback(
              (e) => {
                var t;
                G(e) ||
                  (null === (t = N.current) || void 0 === t || t.focus(),
                  T(null));
              },
              [G],
            ),
            onTriggerLeave: r.useCallback(
              (e) => {
                G(e) && e.preventDefault();
              },
              [G],
            ),
            pointerGraceTimerRef: I,
            onPointerGraceIntentChange: r.useCallback((e) => {
              F.current = e;
            }, []),
            children: (0, b.jsx)(K, {
              ...H,
              children: (0, b.jsx)(p.M, {
                asChild: !0,
                trapped: a,
                onMountAutoFocus: (0, o.M)(u, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = N.current) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: s,
                children: (0, b.jsx)(d.XB, {
                  asChild: !0,
                  disableOutsidePointerEvents: c,
                  onEscapeKeyDown: g,
                  onPointerDownOutside: v,
                  onFocusOutside: y,
                  onInteractOutside: w,
                  onDismiss: x,
                  children: (0, b.jsx)(S, {
                    asChild: !0,
                    ...k,
                    dir: M.dir,
                    orientation: "vertical",
                    loop: l,
                    currentTabStopId: O,
                    onCurrentTabStopIdChange: T,
                    onEntryFocus: (0, o.M)(h, (e) => {
                      M.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, b.jsx)(m.VY, {
                      role: "menu",
                      "aria-orientation": "vertical",
                      "data-state": eU(C.open),
                      "data-radix-menu-content": "",
                      dir: M.dir,
                      ...j,
                      ...R,
                      ref: _,
                      style: { outline: "none", ...R.style },
                      onKeyDown: (0, o.M)(R.onKeyDown, (e) => {
                        let t =
                            e.target.closest("[data-radix-menu-content]") ===
                            e.currentTarget,
                          n = e.ctrlKey || e.altKey || e.metaKey,
                          r = 1 === e.key.length;
                        t &&
                          ("Tab" === e.key && e.preventDefault(),
                          !n && r && Y(e.key));
                        let o = N.current;
                        if (e.target !== o || !V.includes(e.key)) return;
                        e.preventDefault();
                        let i = P()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        z.includes(e.key) && i.reverse(),
                          (function (e) {
                            let t = document.activeElement;
                            for (let n of e)
                              if (
                                n === t ||
                                (n.focus(), document.activeElement !== t)
                              )
                                return;
                          })(i);
                      }),
                      onBlur: (0, o.M)(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(A.current), (D.current = ""));
                      }),
                      onPointerMove: (0, o.M)(
                        e.onPointerMove,
                        eH((e) => {
                          let t = e.target,
                            n = B.current !== e.clientX;
                          if (e.currentTarget.contains(t) && n) {
                            let t = e.clientX > B.current ? "right" : "left";
                            (U.current = t), (B.current = e.clientX);
                          }
                        }),
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      ed.displayName = eu;
      var em = r.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, b.jsx)(u.WV.div, { role: "group", ...r, ref: t });
      });
      em.displayName = "MenuGroup";
      var eg = r.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, b.jsx)(u.WV.div, { ...r, ref: t });
      });
      eg.displayName = "MenuLabel";
      var ev = "MenuItem",
        ey = "menu.itemSelect",
        eb = r.forwardRef((e, t) => {
          let { disabled: n = !1, onSelect: l, ...a } = e,
            s = r.useRef(null),
            c = et(ev, e.__scopeMenu),
            d = ec(ev, e.__scopeMenu),
            f = (0, i.e)(t, s),
            p = r.useRef(!1);
          return (0, b.jsx)(ew, {
            ...a,
            ref: f,
            disabled: n,
            onClick: (0, o.M)(e.onClick, () => {
              let e = s.current;
              if (!n && e) {
                let t = new CustomEvent(ey, { bubbles: !0, cancelable: !0 });
                e.addEventListener(ey, (e) => (null == l ? void 0 : l(e)), {
                  once: !0,
                }),
                  (0, u.jH)(e, t),
                  t.defaultPrevented ? (p.current = !1) : c.onClose();
              }
            }),
            onPointerDown: (t) => {
              var n;
              null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                (p.current = !0);
            },
            onPointerUp: (0, o.M)(e.onPointerUp, (e) => {
              var t;
              p.current ||
                null === (t = e.currentTarget) ||
                void 0 === t ||
                t.click();
            }),
            onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
              let t = "" !== d.searchRef.current;
              !n &&
                (!t || " " !== e.key) &&
                F.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault());
            }),
          });
        });
      eb.displayName = ev;
      var ew = r.forwardRef((e, t) => {
          let { __scopeMenu: n, disabled: l = !1, textValue: a, ...s } = e,
            c = ec(ev, n),
            d = q(n),
            f = r.useRef(null),
            p = (0, i.e)(t, f),
            [h, m] = r.useState(!1),
            [g, v] = r.useState("");
          return (
            r.useEffect(() => {
              let e = f.current;
              if (e) {
                var t;
                v(
                  (null !== (t = e.textContent) && void 0 !== t
                    ? t
                    : ""
                  ).trim(),
                );
              }
            }, [s.children]),
            (0, b.jsx)(H.ItemSlot, {
              scope: n,
              disabled: l,
              textValue: null != a ? a : g,
              children: (0, b.jsx)(_, {
                asChild: !0,
                ...d,
                focusable: !l,
                children: (0, b.jsx)(u.WV.div, {
                  role: "menuitem",
                  "data-highlighted": h ? "" : void 0,
                  "aria-disabled": l || void 0,
                  "data-disabled": l ? "" : void 0,
                  ...s,
                  ref: p,
                  onPointerMove: (0, o.M)(
                    e.onPointerMove,
                    eH((e) => {
                      l
                        ? c.onItemLeave(e)
                        : (c.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    }),
                  ),
                  onPointerLeave: (0, o.M)(
                    e.onPointerLeave,
                    eH((e) => c.onItemLeave(e)),
                  ),
                  onFocus: (0, o.M)(e.onFocus, () => m(!0)),
                  onBlur: (0, o.M)(e.onBlur, () => m(!1)),
                }),
              }),
            })
          );
        }),
        ex = r.forwardRef((e, t) => {
          let { checked: n = !1, onCheckedChange: r, ...i } = e;
          return (0, b.jsx)(eO, {
            scope: e.__scopeMenu,
            checked: n,
            children: (0, b.jsx)(eb, {
              role: "menuitemcheckbox",
              "aria-checked": eB(n) ? "mixed" : n,
              ...i,
              ref: t,
              "data-state": eK(n),
              onSelect: (0, o.M)(
                i.onSelect,
                () => (null == r ? void 0 : r(!!eB(n) || !n)),
                { checkForDefaultPrevented: !1 },
              ),
            }),
          });
        });
      ex.displayName = "MenuCheckboxItem";
      var eE = "MenuRadioGroup",
        [eR, eC] = G(eE, { value: void 0, onValueChange: () => {} }),
        eM = r.forwardRef((e, t) => {
          let { value: n, onValueChange: r, ...o } = e,
            i = (0, y.W)(r);
          return (0, b.jsx)(eR, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: i,
            children: (0, b.jsx)(em, { ...o, ref: t }),
          });
        });
      eM.displayName = eE;
      var ej = "MenuRadioItem",
        ek = r.forwardRef((e, t) => {
          let { value: n, ...r } = e,
            i = eC(ej, e.__scopeMenu),
            l = n === i.value;
          return (0, b.jsx)(eO, {
            scope: e.__scopeMenu,
            checked: l,
            children: (0, b.jsx)(eb, {
              role: "menuitemradio",
              "aria-checked": l,
              ...r,
              ref: t,
              "data-state": eK(l),
              onSelect: (0, o.M)(
                r.onSelect,
                () => {
                  var e;
                  return null === (e = i.onValueChange) || void 0 === e
                    ? void 0
                    : e.call(i, n);
                },
                { checkForDefaultPrevented: !1 },
              ),
            }),
          });
        });
      ek.displayName = ej;
      var eP = "MenuItemIndicator",
        [eO, eS] = G(eP, { checked: !1 }),
        eT = r.forwardRef((e, t) => {
          let { __scopeMenu: n, forceMount: r, ...o } = e,
            i = eS(eP, n);
          return (0, b.jsx)(v.z, {
            present: r || eB(i.checked) || !0 === i.checked,
            children: (0, b.jsx)(u.WV.span, {
              ...o,
              ref: t,
              "data-state": eK(i.checked),
            }),
          });
        });
      eT.displayName = eP;
      var eN = r.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, b.jsx)(u.WV.div, {
          role: "separator",
          "aria-orientation": "horizontal",
          ...r,
          ref: t,
        });
      });
      eN.displayName = "MenuSeparator";
      var e_ = r.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
          o = X(n);
        return (0, b.jsx)(m.Eh, { ...o, ...r, ref: t });
      });
      e_.displayName = "MenuArrow";
      var eA = "MenuSub",
        [eD, eL] = G(eA),
        eI = (e) => {
          let {
              __scopeMenu: t,
              children: n,
              open: o = !1,
              onOpenChange: i,
            } = e,
            l = J(eA, t),
            a = X(t),
            [u, s] = r.useState(null),
            [c, d] = r.useState(null),
            f = (0, y.W)(i);
          return (
            r.useEffect(
              () => (!1 === l.open && f(!1), () => f(!1)),
              [l.open, f],
            ),
            (0, b.jsx)(m.fC, {
              ...a,
              children: (0, b.jsx)(Q, {
                scope: t,
                open: o,
                onOpenChange: f,
                content: c,
                onContentChange: d,
                children: (0, b.jsx)(eD, {
                  scope: t,
                  contentId: (0, h.M)(),
                  triggerId: (0, h.M)(),
                  trigger: u,
                  onTriggerChange: s,
                  children: n,
                }),
              }),
            })
          );
        };
      eI.displayName = eA;
      var eW = "MenuSubTrigger",
        eF = r.forwardRef((e, t) => {
          let n = J(eW, e.__scopeMenu),
            l = et(eW, e.__scopeMenu),
            a = eL(eW, e.__scopeMenu),
            u = ec(eW, e.__scopeMenu),
            s = r.useRef(null),
            { pointerGraceTimerRef: c, onPointerGraceIntentChange: d } = u,
            f = { __scopeMenu: e.__scopeMenu },
            p = r.useCallback(() => {
              s.current && window.clearTimeout(s.current), (s.current = null);
            }, []);
          return (
            r.useEffect(() => p, [p]),
            r.useEffect(() => {
              let e = c.current;
              return () => {
                window.clearTimeout(e), d(null);
              };
            }, [c, d]),
            (0, b.jsx)(er, {
              asChild: !0,
              ...f,
              children: (0, b.jsx)(ew, {
                id: a.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": a.contentId,
                "data-state": eU(n.open),
                ...e,
                ref: (0, i.F)(t, a.onTriggerChange),
                onClick: (t) => {
                  var r;
                  null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
                },
                onPointerMove: (0, o.M)(
                  e.onPointerMove,
                  eH((t) => {
                    u.onItemEnter(t),
                      t.defaultPrevented ||
                        e.disabled ||
                        n.open ||
                        s.current ||
                        (u.onPointerGraceIntentChange(null),
                        (s.current = window.setTimeout(() => {
                          n.onOpenChange(!0), p();
                        }, 100)));
                  }),
                ),
                onPointerLeave: (0, o.M)(
                  e.onPointerLeave,
                  eH((e) => {
                    var t, r;
                    p();
                    let o =
                      null === (t = n.content) || void 0 === t
                        ? void 0
                        : t.getBoundingClientRect();
                    if (o) {
                      let t =
                          null === (r = n.content) || void 0 === r
                            ? void 0
                            : r.dataset.side,
                        i = "right" === t,
                        l = o[i ? "left" : "right"],
                        a = o[i ? "right" : "left"];
                      u.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (i ? -5 : 5), y: e.clientY },
                          { x: l, y: o.top },
                          { x: a, y: o.top },
                          { x: a, y: o.bottom },
                          { x: l, y: o.bottom },
                        ],
                        side: t,
                      }),
                        window.clearTimeout(c.current),
                        (c.current = window.setTimeout(
                          () => u.onPointerGraceIntentChange(null),
                          300,
                        ));
                    } else {
                      if ((u.onTriggerLeave(e), e.defaultPrevented)) return;
                      u.onPointerGraceIntentChange(null);
                    }
                  }),
                ),
                onKeyDown: (0, o.M)(e.onKeyDown, (t) => {
                  let r = "" !== u.searchRef.current;
                  if (
                    !e.disabled &&
                    (!r || " " !== t.key) &&
                    U[l.dir].includes(t.key)
                  ) {
                    var o;
                    n.onOpenChange(!0),
                      null === (o = n.content) || void 0 === o || o.focus(),
                      t.preventDefault();
                  }
                }),
              }),
            })
          );
        });
      eF.displayName = eW;
      var ez = "MenuSubContent",
        eV = r.forwardRef((e, t) => {
          let n = el(eu, e.__scopeMenu),
            { forceMount: l = n.forceMount, ...a } = e,
            u = J(eu, e.__scopeMenu),
            s = et(eu, e.__scopeMenu),
            c = eL(ez, e.__scopeMenu),
            d = r.useRef(null),
            f = (0, i.e)(t, d);
          return (0, b.jsx)(H.Provider, {
            scope: e.__scopeMenu,
            children: (0, b.jsx)(v.z, {
              present: l || u.open,
              children: (0, b.jsx)(H.Slot, {
                scope: e.__scopeMenu,
                children: (0, b.jsx)(eh, {
                  id: c.contentId,
                  "aria-labelledby": c.triggerId,
                  ...a,
                  ref: f,
                  align: "start",
                  side: "rtl" === s.dir ? "left" : "right",
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    var t;
                    s.isUsingKeyboardRef.current &&
                      (null === (t = d.current) || void 0 === t || t.focus()),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: (0, o.M)(e.onFocusOutside, (e) => {
                    e.target !== c.trigger && u.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: (0, o.M)(e.onEscapeKeyDown, (e) => {
                    s.onClose(), e.preventDefault();
                  }),
                  onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                    let t = e.currentTarget.contains(e.target),
                      n = B[s.dir].includes(e.key);
                    if (t && n) {
                      var r;
                      u.onOpenChange(!1),
                        null === (r = c.trigger) || void 0 === r || r.focus(),
                        e.preventDefault();
                    }
                  }),
                }),
              }),
            }),
          });
        });
      function eU(e) {
        return e ? "open" : "closed";
      }
      function eB(e) {
        return "indeterminate" === e;
      }
      function eK(e) {
        return eB(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function eH(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      eV.displayName = ez;
      var e$ = "DropdownMenu",
        [eY, eG] = (0, l.b)(e$, [Z]),
        eZ = Z(),
        [eX, eq] = eY(e$),
        eQ = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              dir: o,
              open: i,
              defaultOpen: l,
              onOpenChange: u,
              modal: s = !0,
            } = e,
            c = eZ(t),
            d = r.useRef(null),
            [f = !1, p] = (0, a.T)({ prop: i, defaultProp: l, onChange: u });
          return (0, b.jsx)(eX, {
            scope: t,
            triggerId: (0, h.M)(),
            triggerRef: d,
            contentId: (0, h.M)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p((e) => !e), [p]),
            modal: s,
            children: (0, b.jsx)(en, {
              ...c,
              open: f,
              onOpenChange: p,
              dir: o,
              modal: s,
              children: n,
            }),
          });
        };
      eQ.displayName = e$;
      var eJ = "DropdownMenuTrigger",
        e0 = r.forwardRef((e, t) => {
          let { __scopeDropdownMenu: n, disabled: r = !1, ...l } = e,
            a = eq(eJ, n),
            s = eZ(n);
          return (0, b.jsx)(er, {
            asChild: !0,
            ...s,
            children: (0, b.jsx)(u.WV.button, {
              type: "button",
              id: a.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": a.open,
              "aria-controls": a.open ? a.contentId : void 0,
              "data-state": a.open ? "open" : "closed",
              "data-disabled": r ? "" : void 0,
              disabled: r,
              ...l,
              ref: (0, i.F)(t, a.triggerRef),
              onPointerDown: (0, o.M)(e.onPointerDown, (e) => {
                r ||
                  0 !== e.button ||
                  !1 !== e.ctrlKey ||
                  (a.onOpenToggle(), a.open || e.preventDefault());
              }),
              onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                !r &&
                  (["Enter", " "].includes(e.key) && a.onOpenToggle(),
                  "ArrowDown" === e.key && a.onOpenChange(!0),
                  ["Enter", " ", "ArrowDown"].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      e0.displayName = eJ;
      var e1 = (e) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          r = eZ(t);
        return (0, b.jsx)(ea, { ...r, ...n });
      };
      e1.displayName = "DropdownMenuPortal";
      var e2 = "DropdownMenuContent",
        e3 = r.forwardRef((e, t) => {
          let { __scopeDropdownMenu: n, ...i } = e,
            l = eq(e2, n),
            a = eZ(n),
            u = r.useRef(!1);
          return (0, b.jsx)(ed, {
            id: l.contentId,
            "aria-labelledby": l.triggerId,
            ...a,
            ...i,
            ref: t,
            onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
              var t;
              u.current ||
                null === (t = l.triggerRef.current) ||
                void 0 === t ||
                t.focus(),
                (u.current = !1),
                e.preventDefault();
            }),
            onInteractOutside: (0, o.M)(e.onInteractOutside, (e) => {
              let t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey,
                r = 2 === t.button || n;
              (!l.modal || r) && (u.current = !0);
            }),
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          });
        });
      e3.displayName = e2;
      var e5 = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(em, { ...o, ...r, ref: t });
      });
      e5.displayName = "DropdownMenuGroup";
      var e8 = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(eg, { ...o, ...r, ref: t });
      });
      e8.displayName = "DropdownMenuLabel";
      var e7 = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(eb, { ...o, ...r, ref: t });
      });
      e7.displayName = "DropdownMenuItem";
      var e4 = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(ex, { ...o, ...r, ref: t });
      });
      e4.displayName = "DropdownMenuCheckboxItem";
      var e6 = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(eM, { ...o, ...r, ref: t });
      });
      e6.displayName = "DropdownMenuRadioGroup";
      var e9 = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(ek, { ...o, ...r, ref: t });
      });
      e9.displayName = "DropdownMenuRadioItem";
      var te = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(eT, { ...o, ...r, ref: t });
      });
      te.displayName = "DropdownMenuItemIndicator";
      var tt = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(eN, { ...o, ...r, ref: t });
      });
      (tt.displayName = "DropdownMenuSeparator"),
        (r.forwardRef((e, t) => {
          let { __scopeDropdownMenu: n, ...r } = e,
            o = eZ(n);
          return (0, b.jsx)(e_, { ...o, ...r, ref: t });
        }).displayName = "DropdownMenuArrow");
      var tn = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(eF, { ...o, ...r, ref: t });
      });
      tn.displayName = "DropdownMenuSubTrigger";
      var tr = r.forwardRef((e, t) => {
        let { __scopeDropdownMenu: n, ...r } = e,
          o = eZ(n);
        return (0, b.jsx)(eV, {
          ...o,
          ...r,
          ref: t,
          style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      tr.displayName = "DropdownMenuSubContent";
      var to = eQ,
        ti = e0,
        tl = e1,
        ta = e3,
        tu = e5,
        ts = e8,
        tc = e7,
        td = e4,
        tf = e6,
        tp = e9,
        th = te,
        tm = tt,
        tg = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              open: r,
              onOpenChange: o,
              defaultOpen: i,
            } = e,
            l = eZ(t),
            [u = !1, s] = (0, a.T)({ prop: r, defaultProp: i, onChange: o });
          return (0, b.jsx)(eI, {
            ...l,
            open: u,
            onOpenChange: s,
            children: n,
          });
        },
        tv = tn,
        ty = tr;
    },
    589: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return i;
        },
      });
      var r = n(2265),
        o = 0;
      function i() {
        r.useEffect(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : l(),
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : l(),
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function l() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    467: function (e, t, n) {
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(2265),
        i = n(1584),
        l = n(5171),
        a = n(5137),
        u = n(7437),
        s = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = o.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: v,
              ...y
            } = e,
            [b, w] = o.useState(null),
            x = (0, a.W)(f),
            E = (0, a.W)(v),
            R = o.useRef(null),
            C = (0, i.e)(t, (e) => w(e)),
            M = o.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          o.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (M.paused || !b) return;
                  let t = e.target;
                  b.contains(t)
                    ? (R.current = t)
                    : m(R.current, { select: !0 });
                },
                t = function (e) {
                  if (M.paused || !b) return;
                  let t = e.relatedTarget;
                  null === t || b.contains(t) || m(R.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(b);
              });
              return (
                b && n.observe(b, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, b, M.paused]),
            o.useEffect(() => {
              if (b) {
                g.add(M);
                let e = document.activeElement;
                if (!b.contains(e)) {
                  let t = new CustomEvent(s, d);
                  b.addEventListener(s, x),
                    b.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (m(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        p(b).filter((e) => "A" !== e.tagName),
                        { select: !0 },
                      ),
                      document.activeElement === e && m(b));
                }
                return () => {
                  b.removeEventListener(s, x),
                    setTimeout(() => {
                      let t = new CustomEvent(c, d);
                      b.addEventListener(c, E),
                        b.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        b.removeEventListener(c, E),
                        g.remove(M);
                    }, 0);
                };
              }
            }, [b, x, E, M]);
          let j = o.useCallback(
            (e) => {
              if ((!n && !r) || M.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = p(e);
                    return [h(t, e), h(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && m(i, { select: !0 }))
                    : (e.preventDefault(), n && m(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, M.paused],
          );
          return (0, u.jsx)(l.WV.div, {
            tabIndex: -1,
            ...y,
            ref: C,
            onKeyDown: j,
          });
        });
      function p(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function h(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function m(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      f.displayName = "FocusScope";
      var g =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = v(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = v(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function v(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    3201: function (e, t, n) {
      n.d(t, {
        M: function () {
          return u;
        },
      });
      var r,
        o = n(2265),
        i = n(1336),
        l = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function u(e) {
        let [t, n] = o.useState(l());
        return (
          (0, i.b)(() => {
            e || n((e) => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    7683: function (e, t, n) {
      n.d(t, {
        ee: function () {
          return eH;
        },
        Eh: function () {
          return eY;
        },
        VY: function () {
          return e$;
        },
        fC: function () {
          return eK;
        },
        D7: function () {
          return eP;
        },
      });
      var r = n(2265);
      let o = ["top", "right", "bottom", "left"],
        i = Math.min,
        l = Math.max,
        a = Math.round,
        u = Math.floor,
        s = (e) => ({ x: e, y: e }),
        c = { left: "right", right: "left", bottom: "top", top: "bottom" },
        d = { start: "end", end: "start" };
      function f(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split("-")[0];
      }
      function h(e) {
        return e.split("-")[1];
      }
      function m(e) {
        return "x" === e ? "y" : "x";
      }
      function g(e) {
        return "y" === e ? "height" : "width";
      }
      function v(e) {
        return ["top", "bottom"].includes(p(e)) ? "y" : "x";
      }
      function y(e) {
        return e.replace(/start|end/g, (e) => d[e]);
      }
      function b(e) {
        return e.replace(/left|right|bottom|top/g, (e) => c[e]);
      }
      function w(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function x(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function E(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = v(t),
          a = m(v(t)),
          u = g(a),
          s = p(t),
          c = "y" === l,
          d = o.x + o.width / 2 - i.width / 2,
          f = o.y + o.height / 2 - i.height / 2,
          y = o[u] / 2 - i[u] / 2;
        switch (s) {
          case "top":
            r = { x: d, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - i.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (h(t)) {
          case "start":
            r[a] -= y * (n && c ? -1 : 1);
            break;
          case "end":
            r[a] += y * (n && c ? -1 : 1);
        }
        return r;
      }
      let R = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          u = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          s = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: d } = E(s, r, u),
          f = r,
          p = {},
          h = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: m } = a[n],
            {
              x: g,
              y: v,
              data: y,
              reset: b,
            } = await m({
              x: c,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: s,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (c = null != g ? g : c),
            (d = null != v ? v : d),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            b &&
              h <= 50 &&
              (h++,
              "object" == typeof b &&
                (b.placement && (f = b.placement),
                b.rects &&
                  (s =
                    !0 === b.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : b.rects),
                ({ x: c, y: d } = E(s, f, u))),
              (n = -1));
        }
        return { x: c, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function C(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: u } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: h = 0,
          } = f(t, e),
          m = w(h),
          g = a[p ? ("floating" === d ? "reference" : "floating") : d],
          v = x(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: s,
              rootBoundary: c,
              strategy: u,
            }),
          ),
          y =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          b = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          E = ((await (null == i.isElement ? void 0 : i.isElement(b))) &&
            (await (null == i.getScale ? void 0 : i.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          R = x(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: y,
                  offsetParent: b,
                  strategy: u,
                })
              : y,
          );
        return {
          top: (v.top - R.top + m.top) / E.y,
          bottom: (R.bottom - v.bottom + m.bottom) / E.y,
          left: (v.left - R.left + m.left) / E.x,
          right: (R.right - v.right + m.right) / E.x,
        };
      }
      function M(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function j(e) {
        return o.some((t) => e[t] >= 0);
      }
      async function k(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = p(n),
          a = h(n),
          u = "y" === v(n),
          s = ["left", "top"].includes(l) ? -1 : 1,
          c = i && u ? -1 : 1,
          d = f(t, e),
          {
            mainAxis: m,
            crossAxis: g,
            alignmentAxis: y,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
        return (
          a && "number" == typeof y && (g = "end" === a ? -1 * y : y),
          u ? { x: g * c, y: m * s } : { x: m * s, y: g * c }
        );
      }
      function P(e) {
        return T(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function O(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function S(e) {
        var t;
        return null ==
          (t = (T(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function T(e) {
        return e instanceof Node || e instanceof O(e).Node;
      }
      function N(e) {
        return e instanceof Element || e instanceof O(e).Element;
      }
      function _(e) {
        return e instanceof HTMLElement || e instanceof O(e).HTMLElement;
      }
      function A(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof O(e).ShadowRoot)
        );
      }
      function D(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = z(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function L(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function I(e) {
        let t = W(),
          n = z(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e),
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e),
          )
        );
      }
      function W() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function F(e) {
        return ["html", "body", "#document"].includes(P(e));
      }
      function z(e) {
        return O(e).getComputedStyle(e);
      }
      function V(e) {
        return N(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function U(e) {
        if ("html" === P(e)) return e;
        let t = e.assignedSlot || e.parentNode || (A(e) && e.host) || S(e);
        return A(t) ? t.host : t;
      }
      function B(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = U(t);
            return F(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : _(n) && D(n)
                ? n
                : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = O(o);
        return i
          ? t.concat(
              l,
              l.visualViewport || [],
              D(o) ? o : [],
              l.frameElement && n ? B(l.frameElement) : [],
            )
          : t.concat(o, B(o, [], n));
      }
      function K(e) {
        let t = z(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = _(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          u = a(n) !== i || a(r) !== l;
        return u && ((n = i), (r = l)), { width: n, height: r, $: u };
      }
      function H(e) {
        return N(e) ? e : e.contextElement;
      }
      function $(e) {
        let t = H(e);
        if (!_(t)) return s(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = K(t),
          l = (i ? a(n.width) : n.width) / r,
          u = (i ? a(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: l, y: u }
        );
      }
      let Y = s(0);
      function G(e) {
        let t = O(e);
        return W() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : Y;
      }
      function Z(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = H(e),
          a = s(1);
        t && (r ? N(r) && (a = $(r)) : (a = $(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === O(l)) && o)
            ? G(l)
            : s(0),
          c = (i.left + u.x) / a.x,
          d = (i.top + u.y) / a.y,
          f = i.width / a.x,
          p = i.height / a.y;
        if (l) {
          let e = O(l),
            t = r && N(r) ? O(r) : r,
            n = e,
            o = n.frameElement;
          for (; o && r && t !== n; ) {
            let e = $(o),
              t = o.getBoundingClientRect(),
              r = z(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (d *= e.y),
              (f *= e.x),
              (p *= e.y),
              (c += i),
              (d += l),
              (o = (n = O(o)).frameElement);
          }
        }
        return x({ width: f, height: p, x: c, y: d });
      }
      function X(e) {
        return Z(S(e)).left + V(e).scrollLeft;
      }
      function q(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = O(e),
              r = S(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              u = 0;
            if (o) {
              (i = o.width), (l = o.height);
              let e = W();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: i, height: l, x: a, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = S(e),
              n = V(e),
              r = e.ownerDocument.body,
              o = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = l(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight,
              ),
              a = -n.scrollLeft + X(e),
              u = -n.scrollTop;
            return (
              "rtl" === z(r).direction &&
                (a += l(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: u }
            );
          })(S(e));
        else if (N(t))
          r = (function (e, t) {
            let n = Z(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = _(e) ? $(e) : s(1),
              l = e.clientWidth * i.x;
            return {
              width: l,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = G(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return x(r);
      }
      function Q(e) {
        return "static" === z(e).position;
      }
      function J(e, t) {
        return _(e) && "fixed" !== z(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function ee(e, t) {
        let n = O(e);
        if (L(e)) return n;
        if (!_(e)) {
          let t = U(e);
          for (; t && !F(t); ) {
            if (N(t) && !Q(t)) return t;
            t = U(t);
          }
          return n;
        }
        let r = J(e, t);
        for (; r && ["table", "td", "th"].includes(P(r)) && Q(r); ) r = J(r, t);
        return r && F(r) && Q(r) && !I(r)
          ? n
          : r ||
              (function (e) {
                let t = U(e);
                for (; _(t) && !F(t) && !L(t); ) {
                  if (I(t)) return t;
                  t = U(t);
                }
                return null;
              })(e) ||
              n;
      }
      let et = async function (e) {
          let t = this.getOffsetParent || ee,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = _(t),
                o = S(t),
                i = "fixed" === n,
                l = Z(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                u = s(0);
              if (r || (!r && !i)) {
                if ((("body" !== P(t) || D(o)) && (a = V(t)), r)) {
                  let e = Z(t, !0, i, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = X(o));
              }
              return {
                x: l.left + a.scrollLeft - u.x,
                y: l.top + a.scrollTop - u.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        en = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = S(r),
              a = !!t && L(t.floating);
            if (r === l || (a && i)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              c = s(1),
              d = s(0),
              f = _(r);
            if (
              (f || (!f && !i)) &&
              (("body" !== P(r) || D(l)) && (u = V(r)), _(r))
            ) {
              let e = Z(r);
              (c = $(r)), (d.x = e.x + r.clientLeft), (d.y = e.y + r.clientTop);
            }
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + d.x,
              y: n.y * c.y - u.scrollTop * c.y + d.y,
            };
          },
          getDocumentElement: S,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              a = [
                ...("clippingAncestors" === n
                  ? L(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = B(e, [], !1).filter(
                            (e) => N(e) && "body" !== P(e),
                          ),
                          o = null,
                          i = "fixed" === z(e).position,
                          l = i ? U(e) : e;
                        for (; N(l) && !F(l); ) {
                          let t = z(l),
                            n = I(l);
                          n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position,
                                    )) ||
                                  (D(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = U(t);
                                      return (
                                        !(r === n || !N(r) || F(r)) &&
                                        ("fixed" === z(r).position || e(r, n))
                                      );
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = U(l));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              u = a[0],
              s = a.reduce(
                (e, n) => {
                  let r = q(t, n, o);
                  return (
                    (e.top = l(r.top, e.top)),
                    (e.right = i(r.right, e.right)),
                    (e.bottom = i(r.bottom, e.bottom)),
                    (e.left = l(r.left, e.left)),
                    e
                  );
                },
                q(t, u, o),
              );
            return {
              width: s.right - s.left,
              height: s.bottom - s.top,
              x: s.left,
              y: s.top,
            };
          },
          getOffsetParent: ee,
          getElementRects: et,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = K(e);
            return { width: t, height: n };
          },
          getScale: $,
          isElement: N,
          isRTL: function (e) {
            return "rtl" === z(e).direction;
          },
        },
        er = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: a,
                platform: u,
                elements: s,
                middlewareData: c,
              } = t,
              { element: d, padding: p = 0 } = f(e, t) || {};
            if (null == d) return {};
            let y = w(p),
              b = { x: n, y: r },
              x = m(v(o)),
              E = g(x),
              R = await u.getDimensions(d),
              C = "y" === x,
              M = C ? "clientHeight" : "clientWidth",
              j = a.reference[E] + a.reference[x] - b[x] - a.floating[E],
              k = b[x] - a.reference[x],
              P = await (null == u.getOffsetParent
                ? void 0
                : u.getOffsetParent(d)),
              O = P ? P[M] : 0;
            (O && (await (null == u.isElement ? void 0 : u.isElement(P)))) ||
              (O = s.floating[M] || a.floating[E]);
            let S = O / 2 - R[E] / 2 - 1,
              T = i(y[C ? "top" : "left"], S),
              N = i(y[C ? "bottom" : "right"], S),
              _ = O - R[E] - N,
              A = O / 2 - R[E] / 2 + (j / 2 - k / 2),
              D = l(T, i(A, _)),
              L =
                !c.arrow &&
                null != h(o) &&
                A !== D &&
                a.reference[E] / 2 - (A < T ? T : N) - R[E] / 2 < 0,
              I = L ? (A < T ? A - T : A - _) : 0;
            return {
              [x]: b[x] + I,
              data: {
                [x]: D,
                centerOffset: A - D - I,
                ...(L && { alignmentOffset: I }),
              },
              reset: L,
            };
          },
        }),
        eo = (e, t, n) => {
          let r = new Map(),
            o = { platform: en, ...n },
            i = { ...o.platform, _c: r };
          return R(e, t, { ...o, platform: i });
        };
      var ei = n(4887),
        el = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function ea(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!ea(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !ea(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eu(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function es(e, t) {
        let n = eu(e);
        return Math.round(t * n) / n;
      }
      function ec(e) {
        let t = r.useRef(e);
        return (
          el(() => {
            t.current = e;
          }),
          t
        );
      }
      let ed = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? er({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? er({ element: n, padding: r }).fn(t)
                : {};
          },
        }),
        ef = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: "offset",
              options: n,
              async fn(e) {
                var t, r;
                let { x: o, y: i, placement: l, middlewareData: a } = e,
                  u = await k(e, n);
                return l === (null == (t = a.offset) ? void 0 : t.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + u.x, y: i + u.y, data: { ...u, placement: l } };
              },
            }),
            options: [e, t],
          };
        },
        ep = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "shift",
              options: n,
              async fn(e) {
                let { x: t, y: r, placement: o } = e,
                  {
                    mainAxis: a = !0,
                    crossAxis: u = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...c
                  } = f(n, e),
                  d = { x: t, y: r },
                  h = await C(e, c),
                  g = v(p(o)),
                  y = m(g),
                  b = d[y],
                  w = d[g];
                if (a) {
                  let e = "y" === y ? "top" : "left",
                    t = "y" === y ? "bottom" : "right",
                    n = b + h[e],
                    r = b - h[t];
                  b = l(n, i(b, r));
                }
                if (u) {
                  let e = "y" === g ? "top" : "left",
                    t = "y" === g ? "bottom" : "right",
                    n = w + h[e],
                    r = w - h[t];
                  w = l(n, i(w, r));
                }
                let x = s.fn({ ...e, [y]: b, [g]: w });
                return { ...x, data: { x: x.x - t, y: x.y - r } };
              },
            }),
            options: [e, t],
          };
        },
        eh = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {
                    x: t,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: l,
                  } = e,
                  {
                    offset: a = 0,
                    mainAxis: u = !0,
                    crossAxis: s = !0,
                  } = f(n, e),
                  c = { x: t, y: r },
                  d = v(o),
                  h = m(d),
                  g = c[h],
                  y = c[d],
                  b = f(a, e),
                  w =
                    "number" == typeof b
                      ? { mainAxis: b, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...b };
                if (u) {
                  let e = "y" === h ? "height" : "width",
                    t = i.reference[h] - i.floating[e] + w.mainAxis,
                    n = i.reference[h] + i.reference[e] - w.mainAxis;
                  g < t ? (g = t) : g > n && (g = n);
                }
                if (s) {
                  var x, E;
                  let e = "y" === h ? "width" : "height",
                    t = ["top", "left"].includes(p(o)),
                    n =
                      i.reference[d] -
                      i.floating[e] +
                      ((t && (null == (x = l.offset) ? void 0 : x[d])) || 0) +
                      (t ? 0 : w.crossAxis),
                    r =
                      i.reference[d] +
                      i.reference[e] +
                      (t ? 0 : (null == (E = l.offset) ? void 0 : E[d]) || 0) -
                      (t ? w.crossAxis : 0);
                  y < n ? (y = n) : y > r && (y = r);
                }
                return { [h]: g, [d]: y };
              },
            }),
            options: [e, t],
          };
        },
        em = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "flip",
              options: n,
              async fn(e) {
                var t, r, o, i, l;
                let {
                    placement: a,
                    middlewareData: u,
                    rects: s,
                    initialPlacement: c,
                    platform: d,
                    elements: w,
                  } = e,
                  {
                    mainAxis: x = !0,
                    crossAxis: E = !0,
                    fallbackPlacements: R,
                    fallbackStrategy: M = "bestFit",
                    fallbackAxisSideDirection: j = "none",
                    flipAlignment: k = !0,
                    ...P
                  } = f(n, e);
                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                let O = p(a),
                  S = v(c),
                  T = p(c) === c,
                  N = await (null == d.isRTL ? void 0 : d.isRTL(w.floating)),
                  _ =
                    R ||
                    (T || !k
                      ? [b(c)]
                      : (function (e) {
                          let t = b(e);
                          return [y(e), t, y(t)];
                        })(c)),
                  A = "none" !== j;
                !R &&
                  A &&
                  _.push(
                    ...(function (e, t, n, r) {
                      let o = h(e),
                        i = (function (e, t, n) {
                          let r = ["left", "right"],
                            o = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? o : r;
                              return t ? r : o;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(p(e), "start" === n, r);
                      return (
                        o &&
                          ((i = i.map((e) => e + "-" + o)),
                          t && (i = i.concat(i.map(y)))),
                        i
                      );
                    })(c, k, j, N),
                  );
                let D = [c, ..._],
                  L = await C(e, P),
                  I = [],
                  W = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((x && I.push(L[O]), E)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = h(e),
                      o = m(v(e)),
                      i = g(o),
                      l =
                        "x" === o
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                            ? "bottom"
                            : "top";
                    return (
                      t.reference[i] > t.floating[i] && (l = b(l)), [l, b(l)]
                    );
                  })(a, s, N);
                  I.push(L[e[0]], L[e[1]]);
                }
                if (
                  ((W = [...W, { placement: a, overflows: I }]),
                  !I.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = D[e];
                  if (t)
                    return {
                      data: { index: e, overflows: W },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (i = W.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1],
                    )[0])
                      ? void 0
                      : i.placement;
                  if (!n)
                    switch (M) {
                      case "bestFit": {
                        let e =
                          null ==
                          (l = W.filter((e) => {
                            if (A) {
                              let t = v(e.placement);
                              return t === S || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : l[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = c;
                    }
                  if (a !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        eg = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "size",
              options: n,
              async fn(e) {
                let t, r;
                let { placement: o, rects: a, platform: u, elements: s } = e,
                  { apply: c = () => {}, ...d } = f(n, e),
                  m = await C(e, d),
                  g = p(o),
                  y = h(o),
                  b = "y" === v(o),
                  { width: w, height: x } = a.floating;
                "top" === g || "bottom" === g
                  ? ((t = g),
                    (r =
                      y ===
                      ((await (null == u.isRTL ? void 0 : u.isRTL(s.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((r = g), (t = "end" === y ? "top" : "bottom"));
                let E = x - m.top - m.bottom,
                  R = w - m.left - m.right,
                  M = i(x - m[t], E),
                  j = i(w - m[r], R),
                  k = !e.middlewareData.shift,
                  P = M,
                  O = j;
                if (
                  (b ? (O = y || k ? i(j, R) : R) : (P = y || k ? i(M, E) : E),
                  k && !y)
                ) {
                  let e = l(m.left, 0),
                    t = l(m.right, 0),
                    n = l(m.top, 0),
                    r = l(m.bottom, 0);
                  b
                    ? (O =
                        w -
                        2 * (0 !== e || 0 !== t ? e + t : l(m.left, m.right)))
                    : (P =
                        x -
                        2 * (0 !== n || 0 !== r ? n + r : l(m.top, m.bottom)));
                }
                await c({ ...e, availableWidth: O, availableHeight: P });
                let S = await u.getDimensions(s.floating);
                return w !== S.width || x !== S.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        ev = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: "hide",
              options: n,
              async fn(e) {
                let { rects: t } = e,
                  { strategy: r = "referenceHidden", ...o } = f(n, e);
                switch (r) {
                  case "referenceHidden": {
                    let n = M(
                      await C(e, { ...o, elementContext: "reference" }),
                      t.reference,
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: n,
                        referenceHidden: j(n),
                      },
                    };
                  }
                  case "escaped": {
                    let n = M(
                      await C(e, { ...o, altBoundary: !0 }),
                      t.floating,
                    );
                    return { data: { escapedOffsets: n, escaped: j(n) } };
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        ey = (e, t) => ({ ...ed(e), options: [e, t] });
      var eb = n(5171),
        ew = n(7437),
        ex = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e;
          return (0, ew.jsx)(eb.WV.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, ew.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      ex.displayName = "Arrow";
      var eE = n(1584),
        eR = n(8324),
        eC = n(5137),
        eM = n(1336),
        ej = "Popper",
        [ek, eP] = (0, eR.b)(ej),
        [eO, eS] = ek(ej),
        eT = (e) => {
          let { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null);
          return (0, ew.jsx)(eO, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n,
          });
        };
      eT.displayName = ej;
      var eN = "PopperAnchor",
        e_ = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...i } = e,
            l = eS(eN, n),
            a = r.useRef(null),
            u = (0, eE.e)(t, a);
          return (
            r.useEffect(() => {
              l.onAnchorChange((null == o ? void 0 : o.current) || a.current);
            }),
            o ? null : (0, ew.jsx)(eb.WV.div, { ...i, ref: u })
          );
        });
      e_.displayName = eN;
      var eA = "PopperContent",
        [eD, eL] = ek(eA),
        eI = r.forwardRef((e, t) => {
          var n, o, a, s, c, d, f, p;
          let {
              __scopePopper: h,
              side: m = "bottom",
              sideOffset: g = 0,
              align: v = "center",
              alignOffset: y = 0,
              arrowPadding: b = 0,
              avoidCollisions: w = !0,
              collisionBoundary: x = [],
              collisionPadding: E = 0,
              sticky: R = "partial",
              hideWhenDetached: C = !1,
              updatePositionStrategy: M = "optimized",
              onPlaced: j,
              ...k
            } = e,
            P = eS(eA, h),
            [O, T] = r.useState(null),
            N = (0, eE.e)(t, (e) => T(e)),
            [_, A] = r.useState(null),
            D = (function (e) {
              let [t, n] = r.useState(void 0);
              return (
                (0, eM.b)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(_),
            L =
              null !== (f = null == D ? void 0 : D.width) && void 0 !== f
                ? f
                : 0,
            I =
              null !== (p = null == D ? void 0 : D.height) && void 0 !== p
                ? p
                : 0,
            W =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            F = Array.isArray(x) ? x : [x],
            z = F.length > 0,
            V = { padding: W, boundary: F.filter(eV), altBoundary: z },
            {
              refs: U,
              floatingStyles: K,
              placement: $,
              isPositioned: Y,
              middlewareData: G,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: o = [],
                  platform: i,
                  elements: { reference: l, floating: a } = {},
                  transform: u = !0,
                  whileElementsMounted: s,
                  open: c,
                } = e,
                [d, f] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = r.useState(o);
              ea(p, o) || h(o);
              let [m, g] = r.useState(null),
                [v, y] = r.useState(null),
                b = r.useCallback((e) => {
                  e !== R.current && ((R.current = e), g(e));
                }, []),
                w = r.useCallback((e) => {
                  e !== C.current && ((C.current = e), y(e));
                }, []),
                x = l || m,
                E = a || v,
                R = r.useRef(null),
                C = r.useRef(null),
                M = r.useRef(d),
                j = null != s,
                k = ec(s),
                P = ec(i),
                O = r.useCallback(() => {
                  if (!R.current || !C.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  P.current && (e.platform = P.current),
                    eo(R.current, C.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      S.current &&
                        !ea(M.current, t) &&
                        ((M.current = t),
                        ei.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [p, t, n, P]);
              el(() => {
                !1 === c &&
                  M.current.isPositioned &&
                  ((M.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let S = r.useRef(!1);
              el(
                () => (
                  (S.current = !0),
                  () => {
                    S.current = !1;
                  }
                ),
                [],
              ),
                el(() => {
                  if ((x && (R.current = x), E && (C.current = E), x && E)) {
                    if (k.current) return k.current(x, E, O);
                    O();
                  }
                }, [x, E, O, k, j]);
              let T = r.useMemo(
                  () => ({
                    reference: R,
                    floating: C,
                    setReference: b,
                    setFloating: w,
                  }),
                  [b, w],
                ),
                N = r.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                _ = r.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!N.floating) return e;
                  let t = es(N.floating, d.x),
                    r = es(N.floating, d.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eu(N.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, u, N.floating, d.x, d.y]);
              return r.useMemo(
                () => ({
                  ...d,
                  update: O,
                  refs: T,
                  elements: N,
                  floatingStyles: _,
                }),
                [d, O, T, N, _],
              );
            })({
              strategy: "fixed",
              placement: m + ("center" !== v ? "-" + v : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: a = !0,
                      ancestorResize: s = !0,
                      elementResize: c = "function" == typeof ResizeObserver,
                      layoutShift: d = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: f = !1,
                    } = r,
                    p = H(e),
                    h = a || s ? [...(p ? B(p) : []), ...B(t)] : [];
                  h.forEach((e) => {
                    a && e.addEventListener("scroll", n, { passive: !0 }),
                      s && e.addEventListener("resize", n);
                  });
                  let m =
                      p && d
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = S(e);
                            function a() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function s(c, d) {
                                void 0 === c && (c = !1),
                                  void 0 === d && (d = 1),
                                  a();
                                let {
                                  left: f,
                                  top: p,
                                  width: h,
                                  height: m,
                                } = e.getBoundingClientRect();
                                if ((c || t(), !h || !m)) return;
                                let g = u(p),
                                  v = u(o.clientWidth - (f + h)),
                                  y = {
                                    rootMargin:
                                      -g +
                                      "px " +
                                      -v +
                                      "px " +
                                      -u(o.clientHeight - (p + m)) +
                                      "px " +
                                      -u(f) +
                                      "px",
                                    threshold: l(0, i(1, d)) || 1,
                                  },
                                  b = !0;
                                function w(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== d) {
                                    if (!b) return s();
                                    t
                                      ? s(!1, t)
                                      : (n = setTimeout(() => {
                                          s(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  b = !1;
                                }
                                try {
                                  r = new IntersectionObserver(w, {
                                    ...y,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(w, y);
                                }
                                r.observe(e);
                              })(!0),
                              a
                            );
                          })(p, n)
                        : null,
                    g = -1,
                    v = null;
                  c &&
                    ((v = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === p &&
                        v &&
                        (v.unobserve(t),
                        cancelAnimationFrame(g),
                        (g = requestAnimationFrame(() => {
                          var e;
                          null == (e = v) || e.observe(t);
                        }))),
                        n();
                    })),
                    p && !f && v.observe(p),
                    v.observe(t));
                  let y = f ? Z(e) : null;
                  return (
                    f &&
                      (function t() {
                        let r = Z(e);
                        y &&
                          (r.x !== y.x ||
                            r.y !== y.y ||
                            r.width !== y.width ||
                            r.height !== y.height) &&
                          n(),
                          (y = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      h.forEach((e) => {
                        a && e.removeEventListener("scroll", n),
                          s && e.removeEventListener("resize", n);
                      }),
                        null == m || m(),
                        null == (e = v) || e.disconnect(),
                        (v = null),
                        f && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: "always" === M });
              },
              elements: { reference: P.anchor },
              middleware: [
                ef({ mainAxis: g + I, alignmentAxis: y }),
                w &&
                  ep({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === R ? eh() : void 0,
                    ...V,
                  }),
                w && em({ ...V }),
                eg({
                  ...V,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: l } = n.reference,
                      a = t.floating.style;
                    a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px"),
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px"),
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px"),
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px"),
                      );
                  },
                }),
                _ && ey({ element: _, padding: b }),
                eU({ arrowWidth: L, arrowHeight: I }),
                C && ev({ strategy: "referenceHidden", ...V }),
              ],
            }),
            [X, q] = eB($),
            Q = (0, eC.W)(j);
          (0, eM.b)(() => {
            Y && (null == Q || Q());
          }, [Y, Q]);
          let J = null === (n = G.arrow) || void 0 === n ? void 0 : n.x,
            ee = null === (o = G.arrow) || void 0 === o ? void 0 : o.y,
            et =
              (null === (a = G.arrow) || void 0 === a
                ? void 0
                : a.centerOffset) !== 0,
            [en, er] = r.useState();
          return (
            (0, eM.b)(() => {
              O && er(window.getComputedStyle(O).zIndex);
            }, [O]),
            (0, ew.jsx)("div", {
              ref: U.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...K,
                transform: Y ? K.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: en,
                "--radix-popper-transform-origin": [
                  null === (s = G.transformOrigin) || void 0 === s
                    ? void 0
                    : s.x,
                  null === (c = G.transformOrigin) || void 0 === c
                    ? void 0
                    : c.y,
                ].join(" "),
                ...((null === (d = G.hide) || void 0 === d
                  ? void 0
                  : d.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, ew.jsx)(eD, {
                scope: h,
                placedSide: X,
                onArrowChange: A,
                arrowX: J,
                arrowY: ee,
                shouldHideArrow: et,
                children: (0, ew.jsx)(eb.WV.div, {
                  "data-side": X,
                  "data-align": q,
                  ...k,
                  ref: N,
                  style: { ...k.style, animation: Y ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      eI.displayName = eA;
      var eW = "PopperArrow",
        eF = { top: "bottom", right: "left", bottom: "top", left: "right" },
        ez = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = eL(eW, n),
            i = eF[o.placedSide];
          return (0, ew.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0",
              }[o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)",
              }[o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0,
            },
            children: (0, ew.jsx)(ex, {
              ...r,
              ref: t,
              style: { ...r.style, display: "block" },
            }),
          });
        });
      function eV(e) {
        return null !== e;
      }
      ez.displayName = eW;
      var eU = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let { placement: a, rects: u, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, h] = eB(a),
            m = { start: "0%", center: "50%", end: "100%" }[h],
            g =
              (null !==
                (i = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            v =
              (null !==
                (l = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== l
                ? l
                : 0) +
              f / 2,
            y = "",
            b = "";
          return (
            "bottom" === p
              ? ((y = c ? m : "".concat(g, "px")), (b = "".concat(-f, "px")))
              : "top" === p
                ? ((y = c ? m : "".concat(g, "px")),
                  (b = "".concat(u.floating.height + f, "px")))
                : "right" === p
                  ? ((y = "".concat(-f, "px")),
                    (b = c ? m : "".concat(v, "px")))
                  : "left" === p &&
                    ((y = "".concat(u.floating.width + f, "px")),
                    (b = c ? m : "".concat(v, "px"))),
            { data: { x: y, y: b } }
          );
        },
      });
      function eB(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var eK = eT,
        eH = e_,
        e$ = eI,
        eY = ez;
    },
    6935: function (e, t, n) {
      n.d(t, {
        h: function () {
          return u;
        },
      });
      var r = n(2265),
        o = n(4887),
        i = n(5171),
        l = n(1336),
        a = n(7437),
        u = r.forwardRef((e, t) => {
          var n, u;
          let { container: s, ...c } = e,
            [d, f] = r.useState(!1);
          (0, l.b)(() => f(!0), []);
          let p =
            s ||
            (d &&
              (null === (u = globalThis) || void 0 === u
                ? void 0
                : null === (n = u.document) || void 0 === n
                  ? void 0
                  : n.body));
          return p
            ? o.createPortal((0, a.jsx)(i.WV.div, { ...c, ref: t }), p)
            : null;
        });
      u.displayName = "Portal";
    },
    1383: function (e, t, n) {
      n.d(t, {
        z: function () {
          return a;
        },
      });
      var r = n(2265),
        o = n(4887),
        i = n(1584),
        l = n(1336),
        a = (e) => {
          var t, n;
          let a, s;
          let { present: c, children: d } = e,
            f = (function (e) {
              var t, n;
              let [i, a] = r.useState(),
                s = r.useRef({}),
                c = r.useRef(e),
                d = r.useRef("none"),
                [f, p] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = u(s.current);
                  d.current = "mounted" === f ? e : "none";
                }, [f]),
                (0, l.b)(() => {
                  let t = s.current,
                    n = c.current;
                  if (n !== e) {
                    let r = d.current,
                      o = u(t);
                    e
                      ? p("MOUNT")
                      : "none" === o ||
                          (null == t ? void 0 : t.display) === "none"
                        ? p("UNMOUNT")
                        : n && r !== o
                          ? p("ANIMATION_OUT")
                          : p("UNMOUNT"),
                      (c.current = e);
                  }
                }, [e, p]),
                (0, l.b)(() => {
                  if (i) {
                    let e = (e) => {
                        let t = u(s.current).includes(e.animationName);
                        e.target === i &&
                          t &&
                          o.flushSync(() => p("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === i && (d.current = u(s.current));
                      };
                    return (
                      i.addEventListener("animationstart", t),
                      i.addEventListener("animationcancel", e),
                      i.addEventListener("animationend", e),
                      () => {
                        i.removeEventListener("animationstart", t),
                          i.removeEventListener("animationcancel", e),
                          i.removeEventListener("animationend", e);
                      }
                    );
                  }
                  p("ANIMATION_END");
                }, [i, p]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(f),
                  ref: r.useCallback((e) => {
                    e && (s.current = getComputedStyle(e)), a(e);
                  }, []),
                }
              );
            })(c),
            p =
              "function" == typeof d
                ? d({ present: f.isPresent })
                : r.Children.only(d),
            h = (0, i.e)(
              f.ref,
              (a =
                null ===
                  (t = Object.getOwnPropertyDescriptor(p.props, "ref")) ||
                void 0 === t
                  ? void 0
                  : t.get) &&
                "isReactWarning" in a &&
                a.isReactWarning
                ? p.ref
                : (a =
                      null ===
                        (n = Object.getOwnPropertyDescriptor(p, "ref")) ||
                      void 0 === n
                        ? void 0
                        : n.get) &&
                    "isReactWarning" in a &&
                    a.isReactWarning
                  ? p.props.ref
                  : p.props.ref || p.ref,
            );
          return "function" == typeof d || f.isPresent
            ? r.cloneElement(p, { ref: h })
            : null;
        };
      function u(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      a.displayName = "Presence";
    },
    5171: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return a;
        },
        jH: function () {
          return u;
        },
      });
      var r = n(2265),
        o = n(4887),
        i = n(1538),
        l = n(7437),
        a = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              a = r ? i.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(a, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    1538: function (e, t, n) {
      n.d(t, {
        A4: function () {
          return u;
        },
        g7: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(1584),
        i = n(7437),
        l = r.forwardRef((e, t) => {
          let { children: n, ...o } = e,
            l = r.Children.toArray(n),
            u = l.find(s);
          if (u) {
            let e = u.props.children,
              n = l.map((t) =>
                t !== u
                  ? t
                  : r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, i.jsx)(a, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, i.jsx)(a, { ...o, ref: t, children: n });
        });
      l.displayName = "Slot";
      var a = r.forwardRef((e, t) => {
        let { children: n, ...i } = e;
        if (r.isValidElement(n)) {
          let e, l;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                  "isReactWarning" in e &&
                  e.isReactWarning
                ? n.props.ref
                : n.props.ref || n.ref;
          return r.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                    ? (n[r] = { ...o, ...i })
                    : "className" === r &&
                      (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(i, n.props),
            ref: t ? (0, o.F)(t, a) : a,
          });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var u = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
      function s(e) {
        return r.isValidElement(e) && e.type === u;
      }
    },
    7071: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return U;
        },
        fC: function () {
          return z;
        },
        xz: function () {
          return V;
        },
        zt: function () {
          return F;
        },
      });
      var r = n(2265),
        o = n(8149),
        i = n(1584),
        l = n(8324),
        a = n(3938),
        u = n(3201),
        s = n(7683),
        c = (n(6935), n(1383)),
        d = n(5171),
        f = n(1538),
        p = n(1715),
        h = n(1725),
        m = n(7437),
        [g, v] = (0, l.b)("Tooltip", [s.D7]),
        y = (0, s.D7)(),
        b = "TooltipProvider",
        w = "tooltip.open",
        [x, E] = g(b),
        R = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: o = 300,
              disableHoverableContent: i = !1,
              children: l,
            } = e,
            [a, u] = r.useState(!0),
            s = r.useRef(!1),
            c = r.useRef(0);
          return (
            r.useEffect(() => {
              let e = c.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, m.jsx)(x, {
              scope: t,
              isOpenDelayed: a,
              delayDuration: n,
              onOpen: r.useCallback(() => {
                window.clearTimeout(c.current), u(!1);
              }, []),
              onClose: r.useCallback(() => {
                window.clearTimeout(c.current),
                  (c.current = window.setTimeout(() => u(!0), o));
              }, [o]),
              isPointerInTransitRef: s,
              onPointerInTransitChange: r.useCallback((e) => {
                s.current = e;
              }, []),
              disableHoverableContent: i,
              children: l,
            })
          );
        };
      R.displayName = b;
      var C = "Tooltip",
        [M, j] = g(C),
        k = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: o,
              defaultOpen: i = !1,
              onOpenChange: l,
              disableHoverableContent: a,
              delayDuration: c,
            } = e,
            d = E(C, e.__scopeTooltip),
            f = y(t),
            [h, g] = r.useState(null),
            v = (0, u.M)(),
            b = r.useRef(0),
            x = null != a ? a : d.disableHoverableContent,
            R = null != c ? c : d.delayDuration,
            j = r.useRef(!1),
            [k = !1, P] = (0, p.T)({
              prop: o,
              defaultProp: i,
              onChange: (e) => {
                e
                  ? (d.onOpen(), document.dispatchEvent(new CustomEvent(w)))
                  : d.onClose(),
                  null == l || l(e);
              },
            }),
            O = r.useMemo(
              () =>
                k ? (j.current ? "delayed-open" : "instant-open") : "closed",
              [k],
            ),
            S = r.useCallback(() => {
              window.clearTimeout(b.current), (j.current = !1), P(!0);
            }, [P]),
            T = r.useCallback(() => {
              window.clearTimeout(b.current), P(!1);
            }, [P]),
            N = r.useCallback(() => {
              window.clearTimeout(b.current),
                (b.current = window.setTimeout(() => {
                  (j.current = !0), P(!0);
                }, R));
            }, [R, P]);
          return (
            r.useEffect(() => () => window.clearTimeout(b.current), []),
            (0, m.jsx)(s.fC, {
              ...f,
              children: (0, m.jsx)(M, {
                scope: t,
                contentId: v,
                open: k,
                stateAttribute: O,
                trigger: h,
                onTriggerChange: g,
                onTriggerEnter: r.useCallback(() => {
                  d.isOpenDelayed ? N() : S();
                }, [d.isOpenDelayed, N, S]),
                onTriggerLeave: r.useCallback(() => {
                  x ? T() : window.clearTimeout(b.current);
                }, [T, x]),
                onOpen: S,
                onClose: T,
                disableHoverableContent: x,
                children: n,
              }),
            })
          );
        };
      k.displayName = C;
      var P = "TooltipTrigger",
        O = r.forwardRef((e, t) => {
          let { __scopeTooltip: n, ...l } = e,
            a = j(P, n),
            u = E(P, n),
            c = y(n),
            f = r.useRef(null),
            p = (0, i.e)(t, f, a.onTriggerChange),
            h = r.useRef(!1),
            g = r.useRef(!1),
            v = r.useCallback(() => (h.current = !1), []);
          return (
            r.useEffect(
              () => () => document.removeEventListener("pointerup", v),
              [v],
            ),
            (0, m.jsx)(s.ee, {
              asChild: !0,
              ...c,
              children: (0, m.jsx)(d.WV.button, {
                "aria-describedby": a.open ? a.contentId : void 0,
                "data-state": a.stateAttribute,
                ...l,
                ref: p,
                onPointerMove: (0, o.M)(e.onPointerMove, (e) => {
                  "touch" === e.pointerType ||
                    g.current ||
                    u.isPointerInTransitRef.current ||
                    (a.onTriggerEnter(), (g.current = !0));
                }),
                onPointerLeave: (0, o.M)(e.onPointerLeave, () => {
                  a.onTriggerLeave(), (g.current = !1);
                }),
                onPointerDown: (0, o.M)(e.onPointerDown, () => {
                  (h.current = !0),
                    document.addEventListener("pointerup", v, { once: !0 });
                }),
                onFocus: (0, o.M)(e.onFocus, () => {
                  h.current || a.onOpen();
                }),
                onBlur: (0, o.M)(e.onBlur, a.onClose),
                onClick: (0, o.M)(e.onClick, a.onClose),
              }),
            })
          );
        });
      O.displayName = P;
      var [S, T] = g("TooltipPortal", { forceMount: void 0 }),
        N = "TooltipContent",
        _ = r.forwardRef((e, t) => {
          let n = T(N, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
            l = j(N, e.__scopeTooltip);
          return (0, m.jsx)(c.z, {
            present: r || l.open,
            children: l.disableHoverableContent
              ? (0, m.jsx)(I, { side: o, ...i, ref: t })
              : (0, m.jsx)(A, { side: o, ...i, ref: t }),
          });
        }),
        A = r.forwardRef((e, t) => {
          let n = j(N, e.__scopeTooltip),
            o = E(N, e.__scopeTooltip),
            l = r.useRef(null),
            a = (0, i.e)(t, l),
            [u, s] = r.useState(null),
            { trigger: c, onClose: d } = n,
            f = l.current,
            { onPointerInTransitChange: p } = o,
            h = r.useCallback(() => {
              s(null), p(!1);
            }, [p]),
            g = r.useCallback(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, i)) {
                      case i:
                        return "left";
                      case o:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect());
                s(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                            ? 1
                            : e.y < t.y
                              ? -1
                              : e.y > t.y
                                ? 1
                                : 0,
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t) {
                      let n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        r = [];
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n },
                          );
                          break;
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n },
                          );
                          break;
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n },
                          );
                          break;
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n },
                          );
                      }
                      return r;
                    })(r, o),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: o, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ]),
                ),
                  p(!0);
              },
              [p],
            );
          return (
            r.useEffect(() => () => h(), [h]),
            r.useEffect(() => {
              if (c && f) {
                let e = (e) => g(e, f),
                  t = (e) => g(e, c);
                return (
                  c.addEventListener("pointerleave", e),
                  f.addEventListener("pointerleave", t),
                  () => {
                    c.removeEventListener("pointerleave", e),
                      f.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [c, f, g, h]),
            r.useEffect(() => {
              if (u) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == c ? void 0 : c.contains(t)) ||
                      (null == f ? void 0 : f.contains(t)),
                    o = !(function (e, t) {
                      let { x: n, y: r } = e,
                        o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let l = t[e].x,
                          a = t[e].y,
                          u = t[i].x,
                          s = t[i].y;
                        a > r != s > r &&
                          n < ((u - l) * (r - a)) / (s - a) + l &&
                          (o = !o);
                      }
                      return o;
                    })(n, u);
                  r ? h() : o && (h(), d());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [c, f, u, d, h]),
            (0, m.jsx)(I, { ...e, ref: a })
          );
        }),
        [D, L] = g(C, { isInside: !1 }),
        I = r.forwardRef((e, t) => {
          let {
              __scopeTooltip: n,
              children: o,
              "aria-label": i,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              ...c
            } = e,
            d = j(N, n),
            p = y(n),
            { onClose: g } = d;
          return (
            r.useEffect(
              () => (
                document.addEventListener(w, g),
                () => document.removeEventListener(w, g)
              ),
              [g],
            ),
            r.useEffect(() => {
              if (d.trigger) {
                let e = (e) => {
                  let t = e.target;
                  (null == t ? void 0 : t.contains(d.trigger)) && g();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [d.trigger, g]),
            (0, m.jsx)(a.XB, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: g,
              children: (0, m.jsxs)(s.VY, {
                "data-state": d.stateAttribute,
                ...p,
                ...c,
                ref: t,
                style: {
                  ...c.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, m.jsx)(f.A4, { children: o }),
                  (0, m.jsx)(D, {
                    scope: n,
                    isInside: !0,
                    children: (0, m.jsx)(h.f, {
                      id: d.contentId,
                      role: "tooltip",
                      children: i || o,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      _.displayName = N;
      var W = "TooltipArrow";
      r.forwardRef((e, t) => {
        let { __scopeTooltip: n, ...r } = e,
          o = y(n);
        return L(W, n).isInside
          ? null
          : (0, m.jsx)(s.Eh, { ...o, ...r, ref: t });
      }).displayName = W;
      var F = R,
        z = k,
        V = O,
        U = _;
    },
    5137: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            [],
          )
        );
      }
    },
    1715: function (e, t, n) {
      n.d(t, {
        T: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(5137);
      function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [i, l] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [i] = n,
              l = r.useRef(i),
              a = (0, o.W)(t);
            return (
              r.useEffect(() => {
                l.current !== i && (a(i), (l.current = i));
              }, [i, l, a]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          u = a ? e : i,
          s = (0, o.W)(n);
        return [
          u,
          r.useCallback(
            (t) => {
              if (a) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else l(t);
            },
            [a, e, l, s],
          ),
        ];
      }
    },
    1336: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(2265),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    1725: function (e, t, n) {
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var r = n(2265),
        o = n(5171),
        i = n(7437),
        l = r.forwardRef((e, t) =>
          (0, i.jsx)(o.WV.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          }),
        );
      l.displayName = "VisuallyHidden";
      var a = l;
    },
    2218: function (e, t, n) {
      n.d(t, {
        j: function () {
          return i;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        i = (e, t) => (n) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className,
            );
          let { variants: l, defaultVariants: a } = t,
            u = Object.keys(l).map((e) => {
              let t = null == n ? void 0 : n[e],
                o = null == a ? void 0 : a[e];
              if (null === t) return null;
              let i = r(t) || r(o);
              return l[e][i];
            }),
            s =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return o(
            e,
            u,
            null == t
              ? void 0
              : null === (i = t.compoundVariants) || void 0 === i
                ? void 0
                : i.reduce((e, t) => {
                    let { class: n, className: r, ...o } = t;
                    return Object.entries(o).every((e) => {
                      let [t, n] = e;
                      return Array.isArray(n)
                        ? n.includes({ ...a, ...s }[t])
                        : { ...a, ...s }[t] === n;
                    })
                      ? [...e, n, r]
                      : e;
                  }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className,
          );
        };
    },
    4839: function (e, t, n) {
      n.d(t, {
        W: function () {
          return r;
        },
      });
      function r() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (n = 0; n < i; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
    },
    6164: function (e, t, n) {
      n.d(t, {
        m6: function () {
          return L;
        },
      });
      let r = /^\[(.+)\]$/;
      function o(e, t) {
        let n = e;
        return (
          t.split("-").forEach((e) => {
            n.nextPart.has(e) ||
              n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (n = n.nextPart.get(e));
          }),
          n
        );
      }
      let i = /\s+/;
      function l() {
        let e,
          t,
          n = 0,
          r = "";
        for (; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              let n;
              if ("string" == typeof t) return t;
              let r = "";
              for (let o = 0; o < t.length; o++)
                t[o] && (n = e(t[o])) && (r && (r += " "), (r += n));
              return r;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      function a(e) {
        let t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      let u = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        s = /^\d+\/\d+$/,
        c = new Set(["px", "full", "screen"]),
        d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        f =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        h = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        m =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function g(e) {
        return y(e) || c.has(e) || s.test(e);
      }
      function v(e) {
        return T(e, "length", N);
      }
      function y(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function b(e) {
        return T(e, "number", y);
      }
      function w(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function x(e) {
        return e.endsWith("%") && y(e.slice(0, -1));
      }
      function E(e) {
        return u.test(e);
      }
      function R(e) {
        return d.test(e);
      }
      let C = new Set(["length", "size", "percentage"]);
      function M(e) {
        return T(e, C, _);
      }
      function j(e) {
        return T(e, "position", _);
      }
      let k = new Set(["image", "url"]);
      function P(e) {
        return T(e, k, D);
      }
      function O(e) {
        return T(e, "", A);
      }
      function S() {
        return !0;
      }
      function T(e, t, n) {
        let r = u.exec(e);
        return (
          !!r &&
          (r[1] ? ("string" == typeof t ? r[1] === t : t.has(r[1])) : n(r[2]))
        );
      }
      function N(e) {
        return f.test(e) && !p.test(e);
      }
      function _() {
        return !1;
      }
      function A(e) {
        return h.test(e);
      }
      function D(e) {
        return m.test(e);
      }
      let L = (function (e, ...t) {
        let n, a, u;
        let s = function (i) {
          var l;
          return (
            (a = (n = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  n = new Map(),
                  r = new Map();
                function o(o, i) {
                  n.set(o, i), ++t > e && ((t = 0), (r = n), (n = new Map()));
                }
                return {
                  get(e) {
                    let t = n.get(e);
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = r.get(e))
                        ? (o(e, t), t)
                        : void 0;
                  },
                  set(e, t) {
                    n.has(e) ? n.set(e, t) : o(e, t);
                  },
                };
              })((l = t.reduce((e, t) => t(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let t = e.separator,
                  n = 1 === t.length,
                  r = t[0],
                  o = t.length;
                return function (e) {
                  let i;
                  let l = [],
                    a = 0,
                    u = 0;
                  for (let s = 0; s < e.length; s++) {
                    let c = e[s];
                    if (0 === a) {
                      if (c === r && (n || e.slice(s, s + o) === t)) {
                        l.push(e.slice(u, s)), (u = s + o);
                        continue;
                      }
                      if ("/" === c) {
                        i = s;
                        continue;
                      }
                    }
                    "[" === c ? a++ : "]" === c && a--;
                  }
                  let s = 0 === l.length ? e : e.substring(u),
                    c = s.startsWith("!"),
                    d = c ? s.substring(1) : s;
                  return {
                    modifiers: l,
                    hasImportantModifier: c,
                    baseClassName: d,
                    maybePostfixModifierPosition: i && i > u ? i - u : void 0,
                  };
                };
              })(l),
              ...(function (e) {
                let t = (function (e) {
                    var t;
                    let { theme: n, prefix: r } = e,
                      i = { nextPart: new Map(), validators: [] };
                    return (
                      ((t = Object.entries(e.classGroups)),
                      r
                        ? t.map(([e, t]) => [
                            e,
                            t.map((e) =>
                              "string" == typeof e
                                ? r + e
                                : "object" == typeof e
                                  ? Object.fromEntries(
                                      Object.entries(e).map(([e, t]) => [
                                        r + e,
                                        t,
                                      ]),
                                    )
                                  : e,
                            ),
                          ])
                        : t).forEach(([e, t]) => {
                        (function e(t, n, r, i) {
                          t.forEach((t) => {
                            if ("string" == typeof t) {
                              ("" === t ? n : o(n, t)).classGroupId = r;
                              return;
                            }
                            if ("function" == typeof t) {
                              if (t.isThemeGetter) {
                                e(t(i), n, r, i);
                                return;
                              }
                              n.validators.push({
                                validator: t,
                                classGroupId: r,
                              });
                              return;
                            }
                            Object.entries(t).forEach(([t, l]) => {
                              e(l, o(n, t), r, i);
                            });
                          });
                        })(t, i, e, n);
                      }),
                      i
                    );
                  })(e),
                  {
                    conflictingClassGroups: n,
                    conflictingClassGroupModifiers: i,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let n = e.split("-");
                    return (
                      "" === n[0] && 1 !== n.length && n.shift(),
                      (function e(t, n) {
                        if (0 === t.length) return n.classGroupId;
                        let r = t[0],
                          o = n.nextPart.get(r),
                          i = o ? e(t.slice(1), o) : void 0;
                        if (i) return i;
                        if (0 === n.validators.length) return;
                        let l = t.join("-");
                        return n.validators.find(({ validator: e }) => e(l))
                          ?.classGroupId;
                      })(n, t) ||
                        (function (e) {
                          if (r.test(e)) {
                            let t = r.exec(e)[1],
                              n = t?.substring(0, t.indexOf(":"));
                            if (n) return "arbitrary.." + n;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    let r = n[e] || [];
                    return t && i[e] ? [...r, ...i[e]] : r;
                  },
                };
              })(l),
            }).cache.get),
            (u = n.cache.set),
            (s = c),
            c(i)
          );
        };
        function c(e) {
          let t = a(e);
          if (t) return t;
          let r = (function (e, t) {
            let {
                splitModifiers: n,
                getClassGroupId: r,
                getConflictingClassGroupIds: o,
              } = t,
              l = new Set();
            return e
              .trim()
              .split(i)
              .map((e) => {
                let {
                    modifiers: t,
                    hasImportantModifier: o,
                    baseClassName: i,
                    maybePostfixModifierPosition: l,
                  } = n(e),
                  a = r(l ? i.substring(0, l) : i),
                  u = !!l;
                if (!a) {
                  if (!l || !(a = r(i)))
                    return { isTailwindClass: !1, originalClassName: e };
                  u = !1;
                }
                let s = (function (e) {
                  if (e.length <= 1) return e;
                  let t = [],
                    n = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...n.sort(), e), (n = []))
                        : n.push(e);
                    }),
                    t.push(...n.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: o ? s + "!" : s,
                  classGroupId: a,
                  originalClassName: e,
                  hasPostfixModifier: u,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: t,
                    classGroupId: n,
                    hasPostfixModifier: r,
                  } = e,
                  i = t + n;
                return (
                  !l.has(i) &&
                  (l.add(i), o(n, r).forEach((e) => l.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, n);
          return u(e, r), r;
        }
        return function () {
          return s(l.apply(null, arguments));
        };
      })(function () {
        let e = a("colors"),
          t = a("spacing"),
          n = a("blur"),
          r = a("brightness"),
          o = a("borderColor"),
          i = a("borderRadius"),
          l = a("borderSpacing"),
          u = a("borderWidth"),
          s = a("contrast"),
          c = a("grayscale"),
          d = a("hueRotate"),
          f = a("invert"),
          p = a("gap"),
          h = a("gradientColorStops"),
          m = a("gradientColorStopPositions"),
          C = a("inset"),
          k = a("margin"),
          T = a("opacity"),
          N = a("padding"),
          _ = a("saturate"),
          A = a("scale"),
          D = a("sepia"),
          L = a("skew"),
          I = a("space"),
          W = a("translate"),
          F = () => ["auto", "contain", "none"],
          z = () => ["auto", "hidden", "clip", "visible", "scroll"],
          V = () => ["auto", E, t],
          U = () => [E, t],
          B = () => ["", g, v],
          K = () => ["auto", y, E],
          H = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          $ = () => ["solid", "dashed", "dotted", "double", "none"],
          Y = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          G = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          Z = () => ["", "0", E],
          X = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          q = () => [y, b],
          Q = () => [y, E];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [S],
            spacing: [g, v],
            blur: ["none", "", R, E],
            brightness: q(),
            borderColor: [e],
            borderRadius: ["none", "", "full", R, E],
            borderSpacing: U(),
            borderWidth: B(),
            contrast: q(),
            grayscale: Z(),
            hueRotate: Q(),
            invert: Z(),
            gap: U(),
            gradientColorStops: [e],
            gradientColorStopPositions: [x, v],
            inset: V(),
            margin: V(),
            opacity: q(),
            padding: U(),
            saturate: q(),
            scale: q(),
            sepia: Z(),
            skew: Q(),
            space: U(),
            translate: U(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", E] }],
            container: ["container"],
            columns: [{ columns: [R] }],
            "break-after": [{ "break-after": X() }],
            "break-before": [{ "break-before": X() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...H(), E] }],
            overflow: [{ overflow: z() }],
            "overflow-x": [{ "overflow-x": z() }],
            "overflow-y": [{ "overflow-y": z() }],
            overscroll: [{ overscroll: F() }],
            "overscroll-x": [{ "overscroll-x": F() }],
            "overscroll-y": [{ "overscroll-y": F() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [C] }],
            "inset-x": [{ "inset-x": [C] }],
            "inset-y": [{ "inset-y": [C] }],
            start: [{ start: [C] }],
            end: [{ end: [C] }],
            top: [{ top: [C] }],
            right: [{ right: [C] }],
            bottom: [{ bottom: [C] }],
            left: [{ left: [C] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", w, E] }],
            basis: [{ basis: V() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", E] }],
            grow: [{ grow: Z() }],
            shrink: [{ shrink: Z() }],
            order: [{ order: ["first", "last", "none", w, E] }],
            "grid-cols": [{ "grid-cols": [S] }],
            "col-start-end": [{ col: ["auto", { span: ["full", w, E] }, E] }],
            "col-start": [{ "col-start": K() }],
            "col-end": [{ "col-end": K() }],
            "grid-rows": [{ "grid-rows": [S] }],
            "row-start-end": [{ row: ["auto", { span: [w, E] }, E] }],
            "row-start": [{ "row-start": K() }],
            "row-end": [{ "row-end": K() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", E] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", E] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...G()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...G(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...G(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [N] }],
            px: [{ px: [N] }],
            py: [{ py: [N] }],
            ps: [{ ps: [N] }],
            pe: [{ pe: [N] }],
            pt: [{ pt: [N] }],
            pr: [{ pr: [N] }],
            pb: [{ pb: [N] }],
            pl: [{ pl: [N] }],
            m: [{ m: [k] }],
            mx: [{ mx: [k] }],
            my: [{ my: [k] }],
            ms: [{ ms: [k] }],
            me: [{ me: [k] }],
            mt: [{ mt: [k] }],
            mr: [{ mr: [k] }],
            mb: [{ mb: [k] }],
            ml: [{ ml: [k] }],
            "space-x": [{ "space-x": [I] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [I] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", E, t] },
            ],
            "min-w": [{ "min-w": [E, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  E,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [R] },
                  R,
                ],
              },
            ],
            h: [
              { h: [E, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [E, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", R, v] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  b,
                ],
              },
            ],
            "font-family": [{ font: [S] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  E,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", y, b] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  g,
                  E,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", E] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", E] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [T] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [T] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g, v] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", g, E] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: U() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  E,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", E] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [T] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...H(), j] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", M] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  P,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [h] }],
            "gradient-via": [{ via: [h] }],
            "gradient-to": [{ to: [h] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [u] }],
            "border-w-x": [{ "border-x": [u] }],
            "border-w-y": [{ "border-y": [u] }],
            "border-w-s": [{ "border-s": [u] }],
            "border-w-e": [{ "border-e": [u] }],
            "border-w-t": [{ "border-t": [u] }],
            "border-w-r": [{ "border-r": [u] }],
            "border-w-b": [{ "border-b": [u] }],
            "border-w-l": [{ "border-l": [u] }],
            "border-opacity": [{ "border-opacity": [T] }],
            "border-style": [{ border: [...$(), "hidden"] }],
            "divide-x": [{ "divide-x": [u] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [u] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [T] }],
            "divide-style": [{ divide: $() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...$()] }],
            "outline-offset": [{ "outline-offset": [g, E] }],
            "outline-w": [{ outline: [g, v] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: B() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [T] }],
            "ring-offset-w": [{ "ring-offset": [g, v] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", R, O] }],
            "shadow-color": [{ shadow: [S] }],
            opacity: [{ opacity: [T] }],
            "mix-blend": [
              { "mix-blend": [...Y(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": Y() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [s] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", R, E] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [f] }],
            saturate: [{ saturate: [_] }],
            sepia: [{ sepia: [D] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [n] }],
            "backdrop-brightness": [{ "backdrop-brightness": [r] }],
            "backdrop-contrast": [{ "backdrop-contrast": [s] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [f] }],
            "backdrop-opacity": [{ "backdrop-opacity": [T] }],
            "backdrop-saturate": [{ "backdrop-saturate": [_] }],
            "backdrop-sepia": [{ "backdrop-sepia": [D] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [l] }],
            "border-spacing-x": [{ "border-spacing-x": [l] }],
            "border-spacing-y": [{ "border-spacing-y": [l] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  E,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", E] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", E] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [A] }],
            "scale-x": [{ "scale-x": [A] }],
            "scale-y": [{ "scale-y": [A] }],
            rotate: [{ rotate: [w, E] }],
            "translate-x": [{ "translate-x": [W] }],
            "translate-y": [{ "translate-y": [W] }],
            "skew-x": [{ "skew-x": [L] }],
            "skew-y": [{ "skew-y": [L] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  E,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  E,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": U() }],
            "scroll-mx": [{ "scroll-mx": U() }],
            "scroll-my": [{ "scroll-my": U() }],
            "scroll-ms": [{ "scroll-ms": U() }],
            "scroll-me": [{ "scroll-me": U() }],
            "scroll-mt": [{ "scroll-mt": U() }],
            "scroll-mr": [{ "scroll-mr": U() }],
            "scroll-mb": [{ "scroll-mb": U() }],
            "scroll-ml": [{ "scroll-ml": U() }],
            "scroll-p": [{ "scroll-p": U() }],
            "scroll-px": [{ "scroll-px": U() }],
            "scroll-py": [{ "scroll-py": U() }],
            "scroll-ps": [{ "scroll-ps": U() }],
            "scroll-pe": [{ "scroll-pe": U() }],
            "scroll-pt": [{ "scroll-pt": U() }],
            "scroll-pr": [{ "scroll-pr": U() }],
            "scroll-pb": [{ "scroll-pb": U() }],
            "scroll-pl": [{ "scroll-pl": U() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", E] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [g, v, b] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
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
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
