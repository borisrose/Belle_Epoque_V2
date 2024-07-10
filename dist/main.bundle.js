(() => {
  "use strict";
  var e = {
      83: (e, n, t) => {
        t.d(n, { A: () => d });
        var o = t(601),
          r = t.n(o),
          a = t(314),
          i = t.n(a),
          s = t(417),
          c = t.n(s),
          l = new URL(t(959), t.b),
          u = i()(r());
        u.push([
          e.id,
          "@import url(https://cdn.jsdelivr.net/npm/bulma@1.0.1/css/bulma.min.css);"
        ]),
          u.push([
            e.id,
            "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"
          ]);
        var p = c()(l);
        u.push([
          e.id,
          `@keyframes show-down{from{opacity:0;transform:translateY(-100px)}to{opacity:1;transform:translateY(0)}}*{box-sizing:border-box}html{font-family:"Poppins",sans-serif}body{margin:0}li{list-style:none}ul,li,p,h1,h2,h3,h4,h5,h6{margin:0;padding:0}a{text-decoration:none;color:#000}.custom-main{display:flex;flex-direction:column;min-height:100vh;padding-top:8vh}.custom-header{position:fixed;display:flex;align-items:center;justify-content:space-between;padding-inline:10px;top:0;left:0;right:0;box-shadow:0 0 5px #000;height:8vh}.custom-button{margin-inline:5px}.article-input{margin-block:5px;display:flex;flex-direction:column}.custom-form{display:flex;flex-direction:column;padding:10px}.custom-form>section:first-of-type{display:flex;flex-direction:column}.custom-form>section:last-of-type{display:flex}.home__main{background-image:url(${p});background-position:center;background-size:cover;background-repeat:no-repeat}.log__main{background-image:url(${p});background-position:center;background-size:cover;background-repeat:no-repeat;background-blend-mode:color;background-color:rgba(0,0,0,.6);align-items:center;justify-content:center}.log__main>section:first-of-type{width:50%}.menu__main{background-image:url(${p});background-position:center;background-size:cover;background-repeat:no-repeat;background-blend-mode:color;background-color:rgba(0,0,0,.6)}`,
          ""
        ]);
        const d = u;
      },
      314: e => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  o = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  o && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, o, r, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (o && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  t &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = t))
                      : (u[2] = t)),
                  r &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = r))
                      : (u[4] = "".concat(r))),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
      417: e => {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      601: e => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: e => {
        var n = [];
        function t(e) {
          for (var t = -1, o = 0; o < n.length; o++)
            if (n[o].identifier === e) {
              t = o;
              break;
            }
          return t;
        }
        function o(e, o) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              l = o.base ? c[0] + o.base : c[0],
              u = a[l] || 0,
              p = "".concat(l, " ").concat(u);
            a[l] = u + 1;
            var d = t(p),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5]
              };
            if (-1 !== d) n[d].references++, n[d].updater(f);
            else {
              var m = r(f, o);
              (o.byIndex = s),
                n.splice(s, 0, { identifier: p, updater: m, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function r(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var a = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var c = o(e, r), l = 0; l < a.length; l++) {
              var u = t(a[l]);
              0 === n[u].references && (n[u].updater(), n.splice(u, 1));
            }
            a = c;
          };
        };
      },
      659: e => {
        var n = {};
        e.exports = function (e, t) {
          var o = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      540: e => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: e => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(o, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            }
          };
        };
      },
      113: e => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      959: (e, n, t) => {
        e.exports = t.p + "images/bg.jpg";
      }
    },
    n = {};
  function t(o) {
    var r = n[o];
    if (void 0 !== r) return r.exports;
    var a = (n[o] = { id: o, exports: {} });
    return e[o](a, a.exports, t), a.exports;
  }
  (t.m = e),
    (t.n = e => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var o in n)
        t.o(n, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var o = n.getElementsByTagName("script");
        if (o.length)
          for (var r = o.length - 1; r > -1 && (!e || !/^http(s?):/.test(e)); )
            e = o[r--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0);
  const o = function (e) {
    this.onNavigate = e;
  };
  window.onNavigate = function (e) {
    console.log("✅ you are using onNavigate"), r(e);
  };
  var r = function (e) {
    window.history.pushState({}, "", window.location.pathname + e);
    var n = document.getElementById("app");
    (n.innerHTML += ""),
      (n.innerHTML +=
        ' \n            <header class="header custom-header">\n                    <a href="">\n                        <span aria-label="Nom de l\'application">Belle Epoque</span>\n                    </a>\n                    '.concat(
          '\n             <nav>\n                  <a href=""\n                      <span aria-label="icone de la page d\'accueil">\n                        <i class="fa-solid fa-house"></i>\n                      </span>\n                      <span>\n                        Accueil\n                      </span>\n                  </a>\n                  <a href="#login">\n                      <span aria-label="icone de la page de connexion">\n                        <i class="fa-solid fa-right-to-bracket"></i>\n                     <span>\n                     <span>\n                        Connexion\n                     </span>\n                  </a>\n              </nav>\n        \n        \n        ',
          "\n            </header>\n        \n        "
        )),
      "" === e &&
        (console.log("✅ You are on home page"),
        (n.innerHTML +=
          '\n            <main \n                class="main custom-main home__main"\n            >\n                <h1>Home Page</h1>\n            </main>\n        \n        '),
        new o(window.onNavigate));
  };
  window.onpopstate = function () {
    console.log("✅ state is popping you are chanding the url address"),
      r(window.location.hash);
  };
  var a = t(72),
    i = t.n(a),
    s = t(825),
    c = t.n(s),
    l = t(659),
    u = t.n(l),
    p = t(56),
    d = t.n(p),
    f = t(540),
    m = t.n(f),
    h = t(113),
    g = t.n(h),
    v = t(83),
    b = {};
  (b.styleTagTransform = g()),
    (b.setAttributes = d()),
    (b.insert = u().bind(null, "head")),
    (b.domAPI = c()),
    (b.insertStyleElement = m()),
    i()(v.A, b),
    v.A && v.A.locals && v.A.locals,
    console.log("✅ main.ts is being read"),
    console.log("✅ the export default function of router.ts has been called"),
    r(window.location.hash);
})();
