(this["webpackJsonprock-paper-scissors"] =
  this["webpackJsonprock-paper-scissors"] || []).push([
  [0],
  {
    27: function (e, t, n) {},
    28: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(0),
        s = n.n(c),
        r = n(13),
        o = n.n(r),
        i = n(15),
        a = n(1),
        j = n(3),
        b = Object(c.lazy)(function () {
          return n.e(3).then(n.bind(null, 35));
        }),
        p = function () {
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsx)(i.a, {
              children: Object(j.jsx)(c.Suspense, {
                fallback: Object(j.jsx)("div", { children: "Loading..." }),
                children: Object(j.jsxs)(a.d, {
                  children: [
                    Object(j.jsx)(a.b, {
                      exact: !0,
                      path: "/rock-paper-scissors",
                      component: b,
                    }),
                    Object(j.jsx)(a.a, { to: "/rock-paper-scissors" }),
                  ],
                }),
              }),
            }),
          });
        },
        d = Object(c.memo)(p),
        u = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(4)
              .then(n.bind(null, 34))
              .then(function (t) {
                var n = t.getCLS,
                  c = t.getFID,
                  s = t.getFCP,
                  r = t.getLCP,
                  o = t.getTTFB;
                n(e), c(e), s(e), r(e), o(e);
              });
        };
      n(27);
      o.a.render(
        Object(j.jsx)(s.a.StrictMode, { children: Object(j.jsx)(d, {}) }),
        document.getElementById("root")
      ),
        u();
    },
  },
  [[28, 1, 2]],
]);
//# sourceMappingURL=main.649be437.chunk.js.map
