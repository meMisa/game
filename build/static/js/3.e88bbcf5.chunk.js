(this["webpackJsonprock-paper-scissors"] =
  this["webpackJsonprock-paper-scissors"] || []).push([
  [3],
  {
    29: function (e, t, r) {},
    30: function (e, t, r) {},
    31: function (e, t, r) {},
    32: function (e, t, r) {},
    33: function (e, t, r) {},
    35: function (e, t, r) {
      "use strict";
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, s = new Array(t); r < t; r++) s[r] = e[r];
        return s;
      }
      function c(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var r = [],
                s = !0,
                c = !1,
                n = void 0;
              try {
                for (
                  var a, i = e[Symbol.iterator]();
                  !(s = (a = i.next()).done) &&
                  (r.push(a.value), !t || r.length !== t);
                  s = !0
                );
              } catch (o) {
                (c = !0), (n = o);
              } finally {
                try {
                  s || null == i.return || i.return();
                } finally {
                  if (c) throw n;
                }
              }
              return r;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return s(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? s(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      r.r(t);
      var n = r(0),
        a = r.n(n),
        i = r.p + "static/media/logo-bonus.9bf8aeb8.svg",
        o = "scissors",
        l = "spock",
        u = "paper",
        m = "lizard",
        d = "rock",
        b = "RULES",
        j = "close",
        p = "YOU WON",
        f = "YOU LOSE",
        O = (r(29), r(3)),
        h = function (e) {
          return Object(O.jsxs)("div", {
            className: "justify-content-space-between score-wrapper",
            "data-testid": "score",
            children: [
              Object(O.jsx)("div", {
                className: "score-logo-bonus",
                children: Object(O.jsx)("img", {
                  src: i,
                  alt: "Rock, Paper, Scissors, Lizard, Spock",
                }),
              }),
              Object(O.jsxs)("div", {
                className: "score-text score-bonus-text-container",
                children: [
                  Object(O.jsx)("p", { children: "SCORE" }),
                  Object(O.jsx)("div", {
                    className: "dark-text count",
                    children: Object(O.jsx)("span", { children: e.score }),
                  }),
                ],
              }),
            ],
          });
        };
      function x(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                x(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var y,
        N = function (e) {
          var t = e.src,
            r = e.wrapperClassName,
            s = e.btnClassName,
            c = e.alt,
            n = e.handleOnClick;
          return Object(O.jsx)("div", {
            className: r,
            children: t.map(function (e, t) {
              return Object(O.jsx)(
                "button",
                {
                  name: c[t],
                  className: "button-common ".concat(s[t]),
                  onClick: n,
                  children: Object(O.jsx)("img", {
                    className: "image-common",
                    src: e,
                    alt: c[t],
                  }),
                },
                t
              );
            }),
          });
        },
        w = r.p + "static/media/icon-scissors.3b1a5d7e.svg",
        E = r.p + "static/media/icon-spock.f4d7eee8.svg",
        S = r.p + "static/media/icon-paper.8b57a6b1.svg",
        C = r.p + "static/media/icon-lizard.0f83914c.svg",
        I = r.p + "static/media/icon-rock.476e90a9.svg",
        k =
          (r(30),
          function (e) {
            var t = e.userItemName,
              r = e.houseItemName,
              s = e.resultText,
              c = e.winner,
              a = e.playAgain,
              i = [
                {
                  itemName: t,
                  text: "YOU PICKED",
                  className: "",
                  winnerClassName: "user" === c ? "winner" : "",
                  resultText: s,
                },
                {
                  itemName: r,
                  text: "THE HOUSE PICKED",
                  className: "house-part",
                  winnerClassName: "house" === c ? "winner" : "",
                  resultText: s,
                },
              ],
              b = n.useCallback(function (e) {
                switch (e) {
                  case o:
                    return w;
                  case l:
                    return E;
                  case u:
                    return S;
                  case m:
                    return C;
                  case d:
                    return I;
                }
              }, []);
            return Object(O.jsx)("div", {
              className:
                "display-flex justify-content-space-between font-weight-bold game-result-wrapper",
              children: i.map(function (e, t) {
                return Object(O.jsxs)(
                  "div",
                  {
                    style: { display: "contents" },
                    children: [
                      Object(O.jsxs)("div", {
                        className:
                          "display-flex flex-direction-col item-container",
                        children: [
                          Object(O.jsx)("p", {
                            className: "game-result-header",
                            children: e.text,
                          }),
                          Object(O.jsx)("div", {
                            className: e.winnerClassName,
                            children: Object(O.jsx)("button", {
                              className: "button-common ".concat(e.itemName),
                              children: Object(O.jsx)("img", {
                                className: "image-common pick-img ".concat(
                                  e.className
                                ),
                                src: b(e.itemName),
                                alt: e.itemName,
                              }),
                            }),
                          }),
                          Object(O.jsx)("p", {
                            className: "game-result-header-mobile",
                            children: e.text,
                          }),
                        ],
                      }),
                      0 === t &&
                        Object(O.jsxs)("div", {
                          className:
                            "display-flex flex-direction-col result-text-wrapper",
                          children: [
                            Object(O.jsx)("p", { children: e.resultText }),
                            Object(O.jsx)("button", {
                              className: "result-text cursor-pointer",
                              onClick: a,
                              children: "PLAY AGAIN",
                            }),
                          ],
                        }),
                    ],
                  },
                  t
                );
              }),
            });
          });
      !(function (e) {
        (e.SELECT_ITEM = "@@game/SELECT_ITEM"),
          (e.DE_SELECT_ITEM = "@@game/DE_SELECT_ITEM");
      })(y || (y = {}));
      var T,
        P = (function () {
          var e;
          return {
            getService: function () {
              return e || (e = this);
            },
            setScore: function (e) {
              sessionStorage.setItem("score", e);
            },
            getScore: function () {
              return sessionStorage.getItem("score");
            },
            clearScore: function () {
              sessionStorage.removeItem("score"), sessionStorage.clear();
            },
          };
        })().getService(),
        L = {
          currentItem: {
            selectedItem: !1,
            userItemName: "",
            houseItemName: "",
            score: Number(P.getScore()) || 0,
            resultText: "",
            winner: "",
          },
        },
        _ =
          (x((T = {}), o, [u, m]),
          x(T, u, [d, l]),
          x(T, d, [m, o]),
          x(T, m, [l, u]),
          x(T, l, [o, d]),
          T);
      function A(e, t) {
        switch (t.type) {
          case y.SELECT_ITEM:
            var r = [d, u, m, l, o][Math.floor(5 * Math.random())],
              s = (function (e, t) {
                return e === t ? "FUTILE" : _[e].includes(t) ? p : f;
              })(t.payload.name, r),
              c =
                e.currentItem.score +
                (function (e) {
                  return e === p ? 1 : e === f ? -1 : 0;
                })(s);
            return (
              P.setScore(c),
              v(
                v({}, e),
                {},
                {
                  currentItem: {
                    selectedItem: !0,
                    userItemName: t.payload.name,
                    winner: s === p ? "user" : s === f ? "house" : "none",
                    houseItemName: r,
                    resultText: s,
                    score: c,
                  },
                }
              )
            );
          case y.DE_SELECT_ITEM:
            return v(
              v({}, e),
              {},
              { currentItem: v(v({}, e.currentItem), {}, { selectedItem: !1 }) }
            );
          default:
            return e;
        }
      }
      r(31);
      var M = function (e) {
          var t = c(n.useReducer(A, L), 2),
            r = t[0],
            s = t[1],
            a = n.useCallback(function (e) {
              var t;
              s(
                ((t = { name: e.currentTarget.name }),
                { type: y.SELECT_ITEM, payload: t })
              );
            }, []),
            i = n.useCallback(function () {
              s({ type: y.DE_SELECT_ITEM });
            }, []);
          return (
            n.useEffect(
              function () {
                e.changeScore(r.currentItem.score);
              },
              [r.currentItem.score]
            ),
            Object(O.jsx)(O.Fragment, {
              children: r.currentItem.selectedItem
                ? Object(O.jsx)(
                    k,
                    v(v({}, r.currentItem), {}, { playAgain: i })
                  )
                : Object(O.jsxs)("div", {
                    className: "pentagon",
                    children: [
                      Object(O.jsx)(N, {
                        src: [w],
                        wrapperClassName: "top margin-top-1",
                        btnClassName: ["scissors"],
                        alt: [o],
                        handleOnClick: a,
                      }),
                      Object(O.jsx)(N, {
                        src: [E, S],
                        wrapperClassName:
                          "display-flex justify-content-space-around margin-auto middle",
                        btnClassName: ["spock", "paper"],
                        alt: [l, u],
                        handleOnClick: a,
                      }),
                      Object(O.jsx)("br", {}),
                      Object(O.jsx)("br", {}),
                      Object(O.jsx)("br", {}),
                      Object(O.jsx)(N, {
                        src: [C, I],
                        wrapperClassName:
                          "display-flex justify-content-space-evenly margin-auto end",
                        btnClassName: ["lizard", "rock"],
                        alt: [m, d],
                        handleOnClick: a,
                      }),
                    ],
                  }),
            })
          );
        },
        D = r(13),
        U = r.n(D),
        z = r.p + "static/media/icon-close.bde602ec.svg",
        R =
          (r(32),
          function (e) {
            var t = e.isShowing,
              r = e.hide,
              s = e.title,
              c = e.children;
            return t
              ? U.a.createPortal(
                  Object(O.jsxs)(a.a.Fragment, {
                    children: [
                      Object(O.jsx)("div", { className: "modal-overlay" }),
                      Object(O.jsx)("div", {
                        className: "modal-wrapper",
                        "aria-modal": !0,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        role: "dialog",
                        children: Object(O.jsxs)("div", {
                          className: "modal",
                          children: [
                            Object(O.jsxs)("div", {
                              className:
                                "display-flex justify-content-space-between font-weight-bold modal-header",
                              children: [
                                Object(O.jsx)("p", { children: s }),
                                Object(O.jsx)("button", {
                                  type: "button",
                                  className: "modal-close-button",
                                  "data-dismiss": "modal",
                                  "aria-label": "Close",
                                  onClick: r,
                                  children: Object(O.jsx)("img", {
                                    src: z,
                                    alt: j,
                                  }),
                                }),
                              ],
                            }),
                            Object(O.jsx)("div", {
                              className: "modal-body",
                              children: c,
                            }),
                            Object(O.jsx)("div", {
                              className:
                                "margin-auto modal-close-button-wrapper",
                              children: Object(O.jsx)("button", {
                                type: "button",
                                className: "modal-close-button-mobile",
                                "data-dismiss": "modal",
                                "aria-label": "Close",
                                onClick: r,
                                children: Object(O.jsx)("img", {
                                  src: z,
                                  alt: j,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  document.body
                )
              : null;
          }),
        Y = function () {
          var e = c(Object(n.useState)(!1), 2),
            t = e[0],
            r = e[1];
          return {
            isShowing: t,
            toggle: function () {
              r(!t);
            },
          };
        },
        F = r.p + "static/media/image-rules-bonus.ca590b33.svg";
      r(33),
        (t.default = function () {
          var e = Y(),
            t = e.isShowing,
            r = e.toggle,
            s = c(n.useState(0), 2),
            a = s[0],
            i = s[1],
            o = n.useCallback(function (e) {
              setTimeout(function () {
                i(e);
              }, 2e3);
            }, []);
          return (
            n.useEffect(
              function () {
                document.body.style.overflow = t ? "hidden" : "auto";
              },
              [t]
            ),
            Object(O.jsxs)("div", {
              className: "rock-paper-scissors margin-auto",
              children: [
                Object(O.jsx)(h, { score: a }),
                Object(O.jsx)(M, { changeScore: o }),
                Object(O.jsxs)("div", {
                  className: "rules-wrapper",
                  children: [
                    Object(O.jsx)("button", {
                      className: "rules-btn cursor-pointer",
                      onClick: r,
                      children: b,
                    }),
                    Object(O.jsx)(R, {
                      isShowing: t,
                      hide: r,
                      title: b,
                      children: Object(O.jsx)("img", { src: F, alt: b }),
                    }),
                  ],
                }),
              ],
            })
          );
        });
    },
  },
]);
//# sourceMappingURL=3.e88bbcf5.chunk.js.map
