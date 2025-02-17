"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [546],
  {
    4458: function (e, t, n) {
      n.d(t, {
        Ee: function () {
          return R;
        },
        NY: function () {
          return b;
        },
        fC: function () {
          return x;
        },
      });
      var r = n(2265),
        o = n(8324),
        a = n(5137),
        i = n(1336),
        u = n(5171),
        l = n(7437),
        s = "Avatar",
        [d, c] = (0, o.b)(s),
        [f, v] = d(s),
        w = r.forwardRef((e, t) => {
          let { __scopeAvatar: n, ...o } = e,
            [a, i] = r.useState("idle");
          return (0, l.jsx)(f, {
            scope: n,
            imageLoadingStatus: a,
            onImageLoadingStatusChange: i,
            children: (0, l.jsx)(u.WV.span, { ...o, ref: t }),
          });
        });
      w.displayName = s;
      var p = "AvatarImage",
        m = r.forwardRef((e, t) => {
          let {
              __scopeAvatar: n,
              src: o,
              onLoadingStatusChange: s = () => {},
              ...d
            } = e,
            c = v(p, n),
            f = (function (e) {
              let [t, n] = r.useState("idle");
              return (
                (0, i.b)(() => {
                  if (!e) {
                    n("error");
                    return;
                  }
                  let t = !0,
                    r = new window.Image(),
                    o = (e) => () => {
                      t && n(e);
                    };
                  return (
                    n("loading"),
                    (r.onload = o("loaded")),
                    (r.onerror = o("error")),
                    (r.src = e),
                    () => {
                      t = !1;
                    }
                  );
                }, [e]),
                t
              );
            })(o),
            w = (0, a.W)((e) => {
              s(e), c.onImageLoadingStatusChange(e);
            });
          return (
            (0, i.b)(() => {
              "idle" !== f && w(f);
            }, [f, w]),
            "loaded" === f
              ? (0, l.jsx)(u.WV.img, { ...d, ref: t, src: o })
              : null
          );
        });
      m.displayName = p;
      var g = "AvatarFallback",
        h = r.forwardRef((e, t) => {
          let { __scopeAvatar: n, delayMs: o, ...a } = e,
            i = v(g, n),
            [s, d] = r.useState(void 0 === o);
          return (
            r.useEffect(() => {
              if (void 0 !== o) {
                let e = window.setTimeout(() => d(!0), o);
                return () => window.clearTimeout(e);
              }
            }, [o]),
            s && "loaded" !== i.imageLoadingStatus
              ? (0, l.jsx)(u.WV.span, { ...a, ref: t })
              : null
          );
        });
      h.displayName = g;
      var x = w,
        R = m,
        b = h;
    },
    7668: function (e, t, n) {
      n.d(t, {
        Content: function () {
          return eh;
        },
        Indicator: function () {
          return eg;
        },
        Item: function () {
          return ew;
        },
        Link: function () {
          return em;
        },
        List: function () {
          return ev;
        },
        Root: function () {
          return ef;
        },
        Trigger: function () {
          return ep;
        },
        Viewport: function () {
          return ex;
        },
      });
      var r = n(2265),
        o = n(4887),
        a = n(8324),
        i = n(8149),
        u = n(5171),
        l = n(1715),
        s = n(1584),
        d = n(7513),
        c = n(1383),
        f = n(3201),
        v = n(976),
        w = n(3938),
        p = n(1336),
        m = n(5137),
        g = n(1725),
        h = n(7437),
        x = "NavigationMenu",
        [R, b, C] = (0, v.B)(x),
        [E, M, y] = (0, v.B)(x),
        [T, j] = (0, a.b)(x, [C, y]),
        [N, I] = T(x),
        [L, P] = T(x),
        k = r.forwardRef((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: o,
              onValueChange: a,
              defaultValue: i,
              delayDuration: c = 200,
              skipDelayDuration: f = 300,
              orientation: v = "horizontal",
              dir: w,
              ...p
            } = e,
            [m, g] = r.useState(null),
            x = (0, s.e)(t, (e) => g(e)),
            R = (0, d.gm)(w),
            b = r.useRef(0),
            C = r.useRef(0),
            E = r.useRef(0),
            [M, y] = r.useState(!0),
            [T = "", j] = (0, l.T)({
              prop: o,
              onChange: (e) => {
                let t = f > 0;
                "" !== e
                  ? (window.clearTimeout(E.current), t && y(!1))
                  : (window.clearTimeout(E.current),
                    (E.current = window.setTimeout(() => y(!0), f))),
                  null == a || a(e);
              },
              defaultProp: i,
            }),
            N = r.useCallback(() => {
              window.clearTimeout(C.current),
                (C.current = window.setTimeout(() => j(""), 150));
            }, [j]),
            I = r.useCallback(
              (e) => {
                window.clearTimeout(C.current), j(e);
              },
              [j],
            ),
            L = r.useCallback(
              (e) => {
                T === e
                  ? window.clearTimeout(C.current)
                  : (b.current = window.setTimeout(() => {
                      window.clearTimeout(C.current), j(e);
                    }, c));
              },
              [T, j, c],
            );
          return (
            r.useEffect(
              () => () => {
                window.clearTimeout(b.current),
                  window.clearTimeout(C.current),
                  window.clearTimeout(E.current);
              },
              [],
            ),
            (0, h.jsx)(_, {
              scope: n,
              isRootMenu: !0,
              value: T,
              dir: R,
              orientation: v,
              rootNavigationMenu: m,
              onTriggerEnter: (e) => {
                window.clearTimeout(b.current), M ? L(e) : I(e);
              },
              onTriggerLeave: () => {
                window.clearTimeout(b.current), N();
              },
              onContentEnter: () => window.clearTimeout(C.current),
              onContentLeave: N,
              onItemSelect: (e) => {
                j((t) => (t === e ? "" : e));
              },
              onItemDismiss: () => j(""),
              children: (0, h.jsx)(u.WV.nav, {
                "aria-label": "Main",
                "data-orientation": v,
                dir: R,
                ...p,
                ref: x,
              }),
            })
          );
        });
      k.displayName = x;
      var S = "NavigationMenuSub";
      r.forwardRef((e, t) => {
        let {
            __scopeNavigationMenu: n,
            value: r,
            onValueChange: o,
            defaultValue: a,
            orientation: i = "horizontal",
            ...s
          } = e,
          d = I(S, n),
          [c = "", f] = (0, l.T)({ prop: r, onChange: o, defaultProp: a });
        return (0, h.jsx)(_, {
          scope: n,
          isRootMenu: !1,
          value: c,
          dir: d.dir,
          orientation: i,
          rootNavigationMenu: d.rootNavigationMenu,
          onTriggerEnter: (e) => f(e),
          onItemSelect: (e) => f(e),
          onItemDismiss: () => f(""),
          children: (0, h.jsx)(u.WV.div, {
            "data-orientation": i,
            ...s,
            ref: t,
          }),
        });
      }).displayName = S;
      var _ = (e) => {
          let {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: o,
              dir: a,
              orientation: i,
              children: u,
              value: l,
              onItemSelect: s,
              onItemDismiss: d,
              onTriggerEnter: c,
              onTriggerLeave: v,
              onContentEnter: w,
              onContentLeave: p,
            } = e,
            [g, x] = r.useState(null),
            [b, C] = r.useState(new Map()),
            [E, M] = r.useState(null);
          return (0, h.jsx)(N, {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: o,
            value: l,
            previousValue: (function (e) {
              let t = r.useRef({ value: e, previous: e });
              return r.useMemo(
                () => (
                  t.current.value !== e &&
                    ((t.current.previous = t.current.value),
                    (t.current.value = e)),
                  t.current.previous
                ),
                [e],
              );
            })(l),
            baseId: (0, f.M)(),
            dir: a,
            orientation: i,
            viewport: g,
            onViewportChange: x,
            indicatorTrack: E,
            onIndicatorTrackChange: M,
            onTriggerEnter: (0, m.W)(c),
            onTriggerLeave: (0, m.W)(v),
            onContentEnter: (0, m.W)(w),
            onContentLeave: (0, m.W)(p),
            onItemSelect: (0, m.W)(s),
            onItemDismiss: (0, m.W)(d),
            onViewportContentChange: r.useCallback((e, t) => {
              C((n) => (n.set(e, t), new Map(n)));
            }, []),
            onViewportContentRemove: r.useCallback((e) => {
              C((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t));
            }, []),
            children: (0, h.jsx)(R.Provider, {
              scope: t,
              children: (0, h.jsx)(L, { scope: t, items: b, children: u }),
            }),
          });
        },
        W = "NavigationMenuList",
        A = r.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, ...r } = e,
            o = I(W, n),
            a = (0, h.jsx)(u.WV.ul, {
              "data-orientation": o.orientation,
              ...r,
              ref: t,
            });
          return (0, h.jsx)(u.WV.div, {
            style: { position: "relative" },
            ref: o.onIndicatorTrackChange,
            children: (0, h.jsx)(R.Slot, {
              scope: n,
              children: o.isRootMenu
                ? (0, h.jsx)(en, { asChild: !0, children: a })
                : a,
            }),
          });
        });
      A.displayName = W;
      var D = "NavigationMenuItem",
        [F, V] = T(D),
        K = r.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, value: o, ...a } = e,
            i = (0, f.M)(),
            l = r.useRef(null),
            s = r.useRef(null),
            d = r.useRef(null),
            c = r.useRef(() => {}),
            v = r.useRef(!1),
            w = r.useCallback(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "start";
              if (l.current) {
                c.current();
                let t = ea(l.current);
                t.length && ei("start" === e ? t : t.reverse());
              }
            }, []),
            p = r.useCallback(() => {
              if (l.current) {
                let e = ea(l.current);
                e.length &&
                  (c.current =
                    (e.forEach((e) => {
                      (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                        e.setAttribute("tabindex", "-1");
                    }),
                    () => {
                      e.forEach((e) => {
                        let t = e.dataset.tabindex;
                        e.setAttribute("tabindex", t);
                      });
                    }));
              }
            }, []);
          return (0, h.jsx)(F, {
            scope: n,
            value: o || i || "LEGACY_REACT_AUTO_VALUE",
            triggerRef: s,
            contentRef: l,
            focusProxyRef: d,
            wasEscapeCloseRef: v,
            onEntryKeyDown: w,
            onFocusProxyEnter: w,
            onRootContentClose: p,
            onContentFocusOutside: p,
            children: (0, h.jsx)(u.WV.li, { ...a, ref: t }),
          });
        });
      K.displayName = D;
      var O = "NavigationMenuTrigger",
        z = r.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, disabled: o, ...a } = e,
            l = I(O, e.__scopeNavigationMenu),
            d = V(O, e.__scopeNavigationMenu),
            c = r.useRef(null),
            f = (0, s.e)(c, d.triggerRef, t),
            v = es(l.baseId, d.value),
            w = ed(l.baseId, d.value),
            p = r.useRef(!1),
            m = r.useRef(!1),
            x = d.value === l.value;
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)(R.ItemSlot, {
                scope: n,
                value: d.value,
                children: (0, h.jsx)(eo, {
                  asChild: !0,
                  children: (0, h.jsx)(u.WV.button, {
                    id: v,
                    disabled: o,
                    "data-disabled": o ? "" : void 0,
                    "data-state": el(x),
                    "aria-expanded": x,
                    "aria-controls": w,
                    ...a,
                    ref: f,
                    onPointerEnter: (0, i.M)(e.onPointerEnter, () => {
                      (m.current = !1), (d.wasEscapeCloseRef.current = !1);
                    }),
                    onPointerMove: (0, i.M)(
                      e.onPointerMove,
                      ec(() => {
                        o ||
                          m.current ||
                          d.wasEscapeCloseRef.current ||
                          p.current ||
                          (l.onTriggerEnter(d.value), (p.current = !0));
                      }),
                    ),
                    onPointerLeave: (0, i.M)(
                      e.onPointerLeave,
                      ec(() => {
                        o || (l.onTriggerLeave(), (p.current = !1));
                      }),
                    ),
                    onClick: (0, i.M)(e.onClick, () => {
                      l.onItemSelect(d.value), (m.current = x);
                    }),
                    onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                      let t = {
                        horizontal: "ArrowDown",
                        vertical: "rtl" === l.dir ? "ArrowLeft" : "ArrowRight",
                      }[l.orientation];
                      x &&
                        e.key === t &&
                        (d.onEntryKeyDown(), e.preventDefault());
                    }),
                  }),
                }),
              }),
              x &&
                (0, h.jsxs)(h.Fragment, {
                  children: [
                    (0, h.jsx)(g.f, {
                      "aria-hidden": !0,
                      tabIndex: 0,
                      ref: d.focusProxyRef,
                      onFocus: (e) => {
                        let t = d.contentRef.current,
                          n = e.relatedTarget,
                          r = n === c.current,
                          o = null == t ? void 0 : t.contains(n);
                        (r || !o) && d.onFocusProxyEnter(r ? "start" : "end");
                      },
                    }),
                    l.viewport && (0, h.jsx)("span", { "aria-owns": w }),
                  ],
                }),
            ],
          });
        });
      z.displayName = O;
      var H = "navigationMenu.linkSelect",
        U = r.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
          return (0, h.jsx)(eo, {
            asChild: !0,
            children: (0, h.jsx)(u.WV.a, {
              "data-active": r ? "" : void 0,
              "aria-current": r ? "page" : void 0,
              ...a,
              ref: t,
              onClick: (0, i.M)(
                e.onClick,
                (e) => {
                  let t = e.target,
                    n = new CustomEvent(H, { bubbles: !0, cancelable: !0 });
                  if (
                    (t.addEventListener(H, (e) => (null == o ? void 0 : o(e)), {
                      once: !0,
                    }),
                    (0, u.jH)(t, n),
                    !n.defaultPrevented && !e.metaKey)
                  ) {
                    let e = new CustomEvent(Q, { bubbles: !0, cancelable: !0 });
                    (0, u.jH)(t, e);
                  }
                },
                { checkForDefaultPrevented: !1 },
              ),
            }),
          });
        });
      U.displayName = "NavigationMenuLink";
      var B = "NavigationMenuIndicator",
        G = r.forwardRef((e, t) => {
          let { forceMount: n, ...r } = e,
            a = I(B, e.__scopeNavigationMenu),
            i = !!a.value;
          return a.indicatorTrack
            ? o.createPortal(
                (0, h.jsx)(c.z, {
                  present: n || i,
                  children: (0, h.jsx)(Y, { ...r, ref: t }),
                }),
                a.indicatorTrack,
              )
            : null;
        });
      G.displayName = B;
      var Y = r.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, ...o } = e,
            a = I(B, n),
            i = b(n),
            [l, s] = r.useState(null),
            [d, c] = r.useState(null),
            f = "horizontal" === a.orientation,
            v = !!a.value;
          r.useEffect(() => {
            var e;
            let t =
              null === (e = i().find((e) => e.value === a.value)) ||
              void 0 === e
                ? void 0
                : e.ref.current;
            t && s(t);
          }, [i, a.value]);
          let w = () => {
            l &&
              c({
                size: f ? l.offsetWidth : l.offsetHeight,
                offset: f ? l.offsetLeft : l.offsetTop,
              });
          };
          return (
            eu(l, w),
            eu(a.indicatorTrack, w),
            d
              ? (0, h.jsx)(u.WV.div, {
                  "aria-hidden": !0,
                  "data-state": v ? "visible" : "hidden",
                  "data-orientation": a.orientation,
                  ...o,
                  ref: t,
                  style: {
                    position: "absolute",
                    ...(f
                      ? {
                          left: 0,
                          width: d.size + "px",
                          transform: "translateX(".concat(d.offset, "px)"),
                        }
                      : {
                          top: 0,
                          height: d.size + "px",
                          transform: "translateY(".concat(d.offset, "px)"),
                        }),
                    ...o.style,
                  },
                })
              : null
          );
        }),
        X = "NavigationMenuContent",
        q = r.forwardRef((e, t) => {
          let { forceMount: n, ...r } = e,
            o = I(X, e.__scopeNavigationMenu),
            a = V(X, e.__scopeNavigationMenu),
            u = (0, s.e)(a.contentRef, t),
            l = a.value === o.value,
            d = {
              value: a.value,
              triggerRef: a.triggerRef,
              focusProxyRef: a.focusProxyRef,
              wasEscapeCloseRef: a.wasEscapeCloseRef,
              onContentFocusOutside: a.onContentFocusOutside,
              onRootContentClose: a.onRootContentClose,
              ...r,
            };
          return o.viewport
            ? (0, h.jsx)(J, { forceMount: n, ...d, ref: u })
            : (0, h.jsx)(c.z, {
                present: n || l,
                children: (0, h.jsx)(Z, {
                  "data-state": el(l),
                  ...d,
                  ref: u,
                  onPointerEnter: (0, i.M)(e.onPointerEnter, o.onContentEnter),
                  onPointerLeave: (0, i.M)(
                    e.onPointerLeave,
                    ec(o.onContentLeave),
                  ),
                  style: {
                    pointerEvents: !l && o.isRootMenu ? "none" : void 0,
                    ...d.style,
                  },
                }),
              });
        });
      q.displayName = X;
      var J = r.forwardRef((e, t) => {
          let { onViewportContentChange: n, onViewportContentRemove: r } = I(
            X,
            e.__scopeNavigationMenu,
          );
          return (
            (0, p.b)(() => {
              n(e.value, { ref: t, ...e });
            }, [e, t, n]),
            (0, p.b)(() => () => r(e.value), [e.value, r]),
            null
          );
        }),
        Q = "navigationMenu.rootContentDismiss",
        Z = r.forwardRef((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: o,
              triggerRef: a,
              focusProxyRef: u,
              wasEscapeCloseRef: l,
              onRootContentClose: d,
              onContentFocusOutside: c,
              ...f
            } = e,
            v = I(X, n),
            p = r.useRef(null),
            m = (0, s.e)(p, t),
            g = es(v.baseId, o),
            x = ed(v.baseId, o),
            R = b(n),
            C = r.useRef(null),
            { onItemDismiss: E } = v;
          r.useEffect(() => {
            let e = p.current;
            if (v.isRootMenu && e) {
              let t = () => {
                var t;
                E(),
                  d(),
                  e.contains(document.activeElement) &&
                    (null === (t = a.current) || void 0 === t || t.focus());
              };
              return (
                e.addEventListener(Q, t), () => e.removeEventListener(Q, t)
              );
            }
          }, [v.isRootMenu, e.value, a, E, d]);
          let M = r.useMemo(() => {
            let e = R().map((e) => e.value);
            "rtl" === v.dir && e.reverse();
            let t = e.indexOf(v.value),
              n = e.indexOf(v.previousValue),
              r = o === v.value,
              a = n === e.indexOf(o);
            if (!r && !a) return C.current;
            let i = (() => {
              if (t !== n) {
                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                if (a && -1 !== t) return t > n ? "to-start" : "to-end";
              }
              return null;
            })();
            return (C.current = i), i;
          }, [v.previousValue, v.value, v.dir, R, o]);
          return (0, h.jsx)(en, {
            asChild: !0,
            children: (0, h.jsx)(w.XB, {
              id: x,
              "aria-labelledby": g,
              "data-motion": M,
              "data-orientation": v.orientation,
              ...f,
              ref: m,
              disableOutsidePointerEvents: !1,
              onDismiss: () => {
                var e;
                let t = new Event(Q, { bubbles: !0, cancelable: !0 });
                null === (e = p.current) || void 0 === e || e.dispatchEvent(t);
              },
              onFocusOutside: (0, i.M)(e.onFocusOutside, (e) => {
                var t;
                c();
                let n = e.target;
                (null === (t = v.rootNavigationMenu) || void 0 === t
                  ? void 0
                  : t.contains(n)) && e.preventDefault();
              }),
              onPointerDownOutside: (0, i.M)(e.onPointerDownOutside, (e) => {
                var t;
                let n = e.target,
                  r = R().some((e) => {
                    var t;
                    return null === (t = e.ref.current) || void 0 === t
                      ? void 0
                      : t.contains(n);
                  }),
                  o =
                    v.isRootMenu &&
                    (null === (t = v.viewport) || void 0 === t
                      ? void 0
                      : t.contains(n));
                (r || o || !v.isRootMenu) && e.preventDefault();
              }),
              onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                let t = e.altKey || e.ctrlKey || e.metaKey;
                if ("Tab" === e.key && !t) {
                  let t = ea(e.currentTarget),
                    r = document.activeElement,
                    o = t.findIndex((e) => e === r);
                  if (
                    ei(
                      e.shiftKey
                        ? t.slice(0, o).reverse()
                        : t.slice(o + 1, t.length),
                    )
                  )
                    e.preventDefault();
                  else {
                    var n;
                    null === (n = u.current) || void 0 === n || n.focus();
                  }
                }
              }),
              onEscapeKeyDown: (0, i.M)(e.onEscapeKeyDown, (e) => {
                l.current = !0;
              }),
            }),
          });
        }),
        $ = "NavigationMenuViewport",
        ee = r.forwardRef((e, t) => {
          let { forceMount: n, ...r } = e,
            o = !!I($, e.__scopeNavigationMenu).value;
          return (0, h.jsx)(c.z, {
            present: n || o,
            children: (0, h.jsx)(et, { ...r, ref: t }),
          });
        });
      ee.displayName = $;
      var et = r.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, children: o, ...a } = e,
            l = I($, n),
            d = (0, s.e)(t, l.onViewportChange),
            f = P(X, e.__scopeNavigationMenu),
            [v, w] = r.useState(null),
            [p, m] = r.useState(null),
            g = v ? (null == v ? void 0 : v.width) + "px" : void 0,
            x = v ? (null == v ? void 0 : v.height) + "px" : void 0,
            R = !!l.value,
            b = R ? l.value : l.previousValue;
          return (
            eu(p, () => {
              p && w({ width: p.offsetWidth, height: p.offsetHeight });
            }),
            (0, h.jsx)(u.WV.div, {
              "data-state": el(R),
              "data-orientation": l.orientation,
              ...a,
              ref: d,
              style: {
                pointerEvents: !R && l.isRootMenu ? "none" : void 0,
                "--radix-navigation-menu-viewport-width": g,
                "--radix-navigation-menu-viewport-height": x,
                ...a.style,
              },
              onPointerEnter: (0, i.M)(e.onPointerEnter, l.onContentEnter),
              onPointerLeave: (0, i.M)(e.onPointerLeave, ec(l.onContentLeave)),
              children: Array.from(f.items).map((e) => {
                let [t, { ref: n, forceMount: r, ...o }] = e,
                  a = b === t;
                return (0, h.jsx)(
                  c.z,
                  {
                    present: r || a,
                    children: (0, h.jsx)(Z, {
                      ...o,
                      ref: (0, s.F)(n, (e) => {
                        a && e && m(e);
                      }),
                    }),
                  },
                  t,
                );
              }),
            })
          );
        }),
        en = r.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, ...r } = e,
            o = I("FocusGroup", n);
          return (0, h.jsx)(E.Provider, {
            scope: n,
            children: (0, h.jsx)(E.Slot, {
              scope: n,
              children: (0, h.jsx)(u.WV.div, { dir: o.dir, ...r, ref: t }),
            }),
          });
        }),
        er = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        eo = r.forwardRef((e, t) => {
          let { __scopeNavigationMenu: n, ...r } = e,
            o = M(n),
            a = I("FocusGroupItem", n);
          return (0, h.jsx)(E.ItemSlot, {
            scope: n,
            children: (0, h.jsx)(u.WV.button, {
              ...r,
              ref: t,
              onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                if (["Home", "End", ...er].includes(e.key)) {
                  let t = o().map((e) => e.ref.current);
                  if (
                    ([
                      "rtl" === a.dir ? "ArrowRight" : "ArrowLeft",
                      "ArrowUp",
                      "End",
                    ].includes(e.key) && t.reverse(),
                    er.includes(e.key))
                  ) {
                    let n = t.indexOf(e.currentTarget);
                    t = t.slice(n + 1);
                  }
                  setTimeout(() => ei(t)), e.preventDefault();
                }
              }),
            }),
          });
        });
      function ea(e) {
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
      function ei(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t),
        );
      }
      function eu(e, t) {
        let n = (0, m.W)(t);
        (0, p.b)(() => {
          let t = 0;
          if (e) {
            let r = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
            });
            return (
              r.observe(e),
              () => {
                window.cancelAnimationFrame(t), r.unobserve(e);
              }
            );
          }
        }, [e, n]);
      }
      function el(e) {
        return e ? "open" : "closed";
      }
      function es(e, t) {
        return "".concat(e, "-trigger-").concat(t);
      }
      function ed(e, t) {
        return "".concat(e, "-content-").concat(t);
      }
      function ec(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      var ef = k,
        ev = A,
        ew = K,
        ep = z,
        em = U,
        eg = G,
        eh = q,
        ex = ee;
    },
  },
]);
