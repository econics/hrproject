(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    3170: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 4517)),
        Promise.resolve().then(a.bind(a, 1647)),
        Promise.resolve().then(a.bind(a, 6910)),
        Promise.resolve().then(a.bind(a, 5317)),
        Promise.resolve().then(a.bind(a, 9666)),
        Promise.resolve().then(a.bind(a, 7668)),
        Promise.resolve().then(a.t.bind(a, 231, 23));
    },
    4517: function (e, t, a) {
      "use strict";
      var s = a(7437),
        n = a(2265);
      let r = async () => ({
        daily: { calls: 20, emails: 50, meetings: 5, conversionRate: 10 },
        weekly: { calls: 100, emails: 250, meetings: 25, conversionRate: 15 },
        monthly: { calls: 400, emails: 1e3, meetings: 100, conversionRate: 20 },
      });
      t.default = () => {
        let [e, t] = (0, n.useState)({
          daily: { calls: 0, emails: 0, meetings: 0, conversionRate: 0 },
          weekly: { calls: 0, emails: 0, meetings: 0, conversionRate: 0 },
          monthly: { calls: 0, emails: 0, meetings: 0, conversionRate: 0 },
        });
        return (
          (0, n.useEffect)(() => {
            (async () => {
              t(await r());
            })();
          }, []),
          (0, s.jsxs)("div", {
            className: "p-4",
            children: [
              (0, s.jsx)("h2", {
                className: "mb-4 text-2xl font-bold",
                children: "SDR Performance Tracking",
              }),
              (0, s.jsxs)("div", {
                className: "grid grid-cols-1 gap-4 md:grid-cols-3",
                children: [
                  (0, s.jsxs)("div", {
                    className: "rounded-lg bg-white p-4 shadow-md",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "mb-2 text-xl font-semibold",
                        children: "Daily Stats",
                      }),
                      (0, s.jsxs)("p", {
                        children: ["Calls: ", e.daily.calls],
                      }),
                      (0, s.jsxs)("p", {
                        children: ["Emails: ", e.daily.emails],
                      }),
                      (0, s.jsxs)("p", {
                        children: ["Meetings: ", e.daily.meetings],
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          "Conversion Rate: ",
                          e.daily.conversionRate,
                          "%",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "rounded-lg bg-white p-4 shadow-md",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "mb-2 text-xl font-semibold",
                        children: "Weekly Stats",
                      }),
                      (0, s.jsxs)("p", {
                        children: ["Calls: ", e.weekly.calls],
                      }),
                      (0, s.jsxs)("p", {
                        children: ["Emails: ", e.weekly.emails],
                      }),
                      (0, s.jsxs)("p", {
                        children: ["Meetings: ", e.weekly.meetings],
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          "Conversion Rate: ",
                          e.weekly.conversionRate,
                          "%",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "rounded-lg bg-white p-4 shadow-md",
                    children: [
                      (0, s.jsx)("h3", {
                        className: "mb-2 text-xl font-semibold",
                        children: "Monthly Stats",
                      }),
                      (0, s.jsxs)("p", {
                        children: ["Calls: ", e.monthly.calls],
                      }),
                      (0, s.jsxs)("p", {
                        children: ["Emails: ", e.monthly.emails],
                      }),
                      (0, s.jsxs)("p", {
                        children: ["Meetings: ", e.monthly.meetings],
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          "Conversion Rate: ",
                          e.monthly.conversionRate,
                          "%",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "mt-4 rounded-lg bg-white p-4 shadow-md",
                children: [
                  (0, s.jsx)("h3", {
                    className: "mb-2 text-xl font-semibold",
                    children: "Insights",
                  }),
                  (0, s.jsx)("p", {
                    children:
                      "Performance trends and recommendations will be displayed here...",
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    1647: function (e, t, a) {
      "use strict";
      a.d(t, {
        Avatar: function () {
          return o;
        },
        AvatarFallback: function () {
          return d;
        },
        AvatarImage: function () {
          return i;
        },
      });
      var s = a(7437),
        n = a(2265),
        r = a(4458),
        l = a(7440);
      let o = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.fC, {
          ref: t,
          className: (0, l.cn)(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            a,
          ),
          ...n,
        });
      });
      o.displayName = r.fC.displayName;
      let i = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.Ee, {
          ref: t,
          className: (0, l.cn)("aspect-square h-full w-full", a),
          ...n,
        });
      });
      i.displayName = r.Ee.displayName;
      let d = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.NY, {
          ref: t,
          className: (0, l.cn)(
            "flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800",
            a,
          ),
          ...n,
        });
      });
      d.displayName = r.NY.displayName;
    },
    6910: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          DropdownMenu: function () {
            return c;
          },
          DropdownMenuCheckboxItem: function () {
            return w;
          },
          DropdownMenuContent: function () {
            return g;
          },
          DropdownMenuGroup: function () {
            return m;
          },
          DropdownMenuItem: function () {
            return y;
          },
          DropdownMenuLabel: function () {
            return j;
          },
          DropdownMenuPortal: function () {
            return f;
          },
          DropdownMenuRadioGroup: function () {
            return x;
          },
          DropdownMenuRadioItem: function () {
            return N;
          },
          DropdownMenuSeparator: function () {
            return v;
          },
          DropdownMenuShortcut: function () {
            return k;
          },
          DropdownMenuSub: function () {
            return p;
          },
          DropdownMenuSubContent: function () {
            return b;
          },
          DropdownMenuSubTrigger: function () {
            return h;
          },
          DropdownMenuTrigger: function () {
            return u;
          },
        });
      var s = a(7437),
        n = a(2265),
        r = a(1220),
        l = a(7592),
        o = a(2468),
        i = a(8165),
        d = a(7440);
      let c = r.fC,
        u = r.xz,
        m = r.ZA,
        f = r.Uv,
        p = r.Tr,
        x = r.Ee,
        h = n.forwardRef((e, t) => {
          let { className: a, inset: n, children: o, ...i } = e;
          return (0, s.jsxs)(r.fF, {
            ref: t,
            className: (0, d.cn)(
              "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
              n && "pl-8",
              a,
            ),
            ...i,
            children: [o, (0, s.jsx)(l.Z, { className: "ml-auto h-4 w-4" })],
          });
        });
      h.displayName = r.fF.displayName;
      let b = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.tu, {
          ref: t,
          className: (0, d.cn)(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            a,
          ),
          ...n,
        });
      });
      b.displayName = r.tu.displayName;
      let g = n.forwardRef((e, t) => {
        let { className: a, sideOffset: n = 4, ...l } = e;
        return (0, s.jsx)(r.Uv, {
          children: (0, s.jsx)(r.VY, {
            ref: t,
            sideOffset: n,
            className: (0, d.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
              a,
            ),
            ...l,
          }),
        });
      });
      g.displayName = r.VY.displayName;
      let y = n.forwardRef((e, t) => {
        let { className: a, inset: n, ...l } = e;
        return (0, s.jsx)(r.ck, {
          ref: t,
          className: (0, d.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
            n && "pl-8",
            a,
          ),
          ...l,
        });
      });
      y.displayName = r.ck.displayName;
      let w = n.forwardRef((e, t) => {
        let { className: a, children: n, checked: l, ...i } = e;
        return (0, s.jsxs)(r.oC, {
          ref: t,
          className: (0, d.cn)(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
            a,
          ),
          checked: l,
          ...i,
          children: [
            (0, s.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, s.jsx)(r.wU, {
                children: (0, s.jsx)(o.Z, { className: "h-4 w-4" }),
              }),
            }),
            n,
          ],
        });
      });
      w.displayName = r.oC.displayName;
      let N = n.forwardRef((e, t) => {
        let { className: a, children: n, ...l } = e;
        return (0, s.jsxs)(r.Rk, {
          ref: t,
          className: (0, d.cn)(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
            a,
          ),
          ...l,
          children: [
            (0, s.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, s.jsx)(r.wU, {
                children: (0, s.jsx)(i.Z, {
                  className: "h-2 w-2 fill-current",
                }),
              }),
            }),
            n,
          ],
        });
      });
      N.displayName = r.Rk.displayName;
      let j = n.forwardRef((e, t) => {
        let { className: a, inset: n, ...l } = e;
        return (0, s.jsx)(r.__, {
          ref: t,
          className: (0, d.cn)(
            "px-2 py-1.5 text-sm font-semibold",
            n && "pl-8",
            a,
          ),
          ...l,
        });
      });
      j.displayName = r.__.displayName;
      let v = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.Z0, {
          ref: t,
          className: (0, d.cn)(
            "-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800",
            a,
          ),
          ...n,
        });
      });
      v.displayName = r.Z0.displayName;
      let k = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("span", {
          className: (0, d.cn)("ml-auto text-xs tracking-widest opacity-60", t),
          ...a,
        });
      };
      k.displayName = "DropdownMenuShortcut";
    },
    5317: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          Sheet: function () {
            return d;
          },
          SheetClose: function () {
            return u;
          },
          SheetContent: function () {
            return x;
          },
          SheetDescription: function () {
            return y;
          },
          SheetFooter: function () {
            return b;
          },
          SheetHeader: function () {
            return h;
          },
          SheetOverlay: function () {
            return f;
          },
          SheetPortal: function () {
            return m;
          },
          SheetTitle: function () {
            return g;
          },
          SheetTrigger: function () {
            return c;
          },
        });
      var s = a(7437),
        n = a(2265),
        r = a(3304),
        l = a(2218),
        o = a(4697),
        i = a(7440);
      let d = r.fC,
        c = r.xz,
        u = r.x8,
        m = r.h_,
        f = n.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, s.jsx)(r.aV, {
            className: (0, i.cn)(
              "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a,
            ),
            ...n,
            ref: t,
          });
        });
      f.displayName = r.aV.displayName;
      let p = (0, l.j)(
          "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",
          {
            variants: {
              side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                  "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                  "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
              },
            },
            defaultVariants: { side: "right" },
          },
        ),
        x = n.forwardRef((e, t) => {
          let { side: a = "right", className: n, children: l, ...d } = e;
          return (0, s.jsxs)(m, {
            children: [
              (0, s.jsx)(f, {}),
              (0, s.jsxs)(r.VY, {
                ref: t,
                className: (0, i.cn)(p({ side: a }), n),
                ...d,
                children: [
                  l,
                  (0, s.jsxs)(r.x8, {
                    className:
                      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800",
                    children: [
                      (0, s.jsx)(o.Z, { className: "h-4 w-4" }),
                      (0, s.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      x.displayName = r.VY.displayName;
      let h = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col space-y-2 text-center sm:text-left",
            t,
          ),
          ...a,
        });
      };
      h.displayName = "SheetHeader";
      let b = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t,
          ),
          ...a,
        });
      };
      b.displayName = "SheetFooter";
      let g = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.Dx, {
          ref: t,
          className: (0, i.cn)(
            "text-lg font-semibold text-slate-950 dark:text-slate-50",
            a,
          ),
          ...n,
        });
      });
      g.displayName = r.Dx.displayName;
      let y = n.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, s.jsx)(r.dk, {
          ref: t,
          className: (0, i.cn)("text-sm text-slate-500 dark:text-slate-400", a),
          ...n,
        });
      });
      y.displayName = r.dk.displayName;
    },
    9666: function (e, t, a) {
      "use strict";
      a.d(t, {
        Tooltip: function () {
          return i;
        },
        TooltipContent: function () {
          return c;
        },
        TooltipProvider: function () {
          return o;
        },
        TooltipTrigger: function () {
          return d;
        },
      });
      var s = a(7437),
        n = a(2265),
        r = a(7071),
        l = a(7440);
      let o = r.zt,
        i = r.fC,
        d = r.xz,
        c = n.forwardRef((e, t) => {
          let { className: a, sideOffset: n = 4, ...o } = e;
          return (0, s.jsx)(r.VY, {
            ref: t,
            sideOffset: n,
            className: (0, l.cn)(
              "z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
              a,
            ),
            ...o,
          });
        });
      c.displayName = r.VY.displayName;
    },
    7440: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return r;
        },
      });
      var s = a(4839),
        n = a(6164);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, n.m6)((0, s.W)(...t));
      }
    },
  },
  function (e) {
    e.O(0, [456, 546, 971, 23, 744], function () {
      return e((e.s = 3170));
    }),
      (_N_E = e.O());
  },
]);
