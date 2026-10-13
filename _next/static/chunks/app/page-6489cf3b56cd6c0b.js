(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    8350: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 9743));
    },
    9743: function (e, t, a) {
      "use strict";
      (a.r(t),
        a.d(t, {
          default: function () {
            return ez;
          },
        }));
      var s = a(7437),
        r = a(2265),
        n = a(7586),
        i = a(2159);
      let l = [
        "SYSTEM INIT: Launching Quantum Kernel v3.4.1...",
        "CORE: Synchronizing AI neural network arrays...",
        "INTERFACE: Establishing secure protocol handshake...",
        "GRID: Loading interactive spatial UI modules...",
        "DATABASES: Connecting CodeOrbit activity nodes...",
        "SYSTEM SECURE: Encryption verified. Welcome, user.",
      ];
      function o(e) {
        let { onComplete: t } = e,
          [a, o] = (0, r.useState)(0),
          [c, d] = (0, r.useState)(0),
          [x, p] = (0, r.useState)([]),
          [m, h] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              o((t) =>
                t >= 100
                  ? (clearInterval(e), 100)
                  : Math.min(t + (Math.floor(8 * Math.random()) + 2), 100),
              );
            }, 120);
            return () => clearInterval(e);
          }, []),
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              c < l.length
                ? (p((e) => [...e, l[c]]), d((e) => e + 1))
                : clearInterval(e);
            }, 400);
            return () => clearInterval(e);
          }, [c]),
          (0, r.useEffect)(() => {
            if (100 === a) {
              let e = setTimeout(() => {
                (h(!0), setTimeout(t, 800));
              }, 800);
              return () => clearTimeout(e);
            }
          }, [a, t]),
          (0, s.jsx)(n.M, {
            children:
              !m &&
              (0, s.jsxs)(i.E.div, {
                initial: { opacity: 1 },
                exit: {
                  opacity: 0,
                  y: -100,
                  transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                },
                className:
                  "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cyber-black text-foreground select-none",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-0 bg-cyber-grid-pattern bg-[size:30px_30px] opacity-10 pointer-events-none",
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-[90%] max-w-xl flex flex-col space-y-8 z-10",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "relative flex justify-center items-center",
                        children: [
                          (0, s.jsxs)(i.E.svg, {
                            animate: { rotate: 360 },
                            transition: {
                              repeat: 1 / 0,
                              duration: 4,
                              ease: "linear",
                            },
                            className:
                              "w-24 h-24 text-cyber-cyan filter drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]",
                            viewBox: "0 0 100 100",
                            children: [
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "45",
                                stroke: "currentColor",
                                strokeWidth: "1",
                                strokeDasharray: "10, 8",
                                fill: "none",
                              }),
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "35",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeDasharray: "30, 15",
                                fill: "none",
                                opacity: "0.7",
                              }),
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "25",
                                stroke: "currentColor",
                                strokeWidth: "1",
                                strokeDasharray: "5, 5",
                                fill: "none",
                                opacity: "0.5",
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "absolute font-mono text-xs tracking-widest text-cyber-purple animate-pulse",
                            children: "CORE",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                          (0, s.jsxs)("span", {
                            className:
                              "font-orbitron font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple filter drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]",
                            children: [a, "%"],
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "font-mono text-xs text-cyber-cyan tracking-wider animate-pulse",
                            children:
                              a < 100
                                ? "INITIALIZING INTERFACE..."
                                : "SYSTEM BOOT COMPLETED",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "h-2 w-full bg-cyber-lightgray rounded-full overflow-hidden border border-cyber-cyan/10 relative p-[1px]",
                        children: [
                          (0, s.jsx)(i.E.div, {
                            className:
                              "h-full rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple",
                            style: { width: "".concat(a, "%") },
                            layout: !0,
                            transition: {
                              type: "spring",
                              stiffness: 100,
                              damping: 20,
                            },
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,240,255,0.2)_50%)] bg-[size:4px_100%] pointer-events-none",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "h-40 bg-cyber-dark/80 border border-cyber-cyan/20 rounded-md p-4 font-mono text-[10px] sm:text-xs text-cyber-emerald/90 overflow-hidden flex flex-col space-y-1 backdrop-blur-md relative shadow-cyber-grid shadow-inner",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "absolute top-1 right-2 flex space-x-1",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-red-500/60",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-yellow-500/60",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-green-500/60",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "text-cyber-cyan/50 pb-1 border-b border-cyber-cyan/10 mb-1 flex items-center justify-between",
                            children: [
                              (0, s.jsx)("span", {
                                children: "TERMINAL_OUTPUT // ARUN_BOOT_LOG",
                              }),
                              (0, s.jsx)("span", {
                                className: "animate-pulse",
                                children: "● REC",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex-1 overflow-y-auto space-y-1 scrollbar-none pr-1",
                            children: [
                              x.map((e, t) =>
                                (0, s.jsxs)(
                                  i.E.div,
                                  {
                                    initial: { opacity: 0, x: -10 },
                                    animate: { opacity: 1, x: 0 },
                                    transition: { duration: 0.3 },
                                    className: "flex",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: "text-cyber-cyan/70 mr-2",
                                        children: ">",
                                      }),
                                      (0, s.jsx)("span", { children: e }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                              a < 100 &&
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex items-center text-cyber-cyan",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: "text-cyber-cyan/70 mr-2",
                                      children: ">",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "w-2 h-4 bg-cyber-cyan animate-pulse inline-block",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          })
        );
      }
      var c = a(9694),
        d = a(3269);
      function x() {
        let { scrollYProgress: e } = (0, c.v)(),
          t = (0, d.q)(e, { stiffness: 120, damping: 30, restDelta: 0.001 });
        return (0, s.jsx)(i.E.div, {
          className: "scroll-progress",
          style: { scaleX: t },
        });
      }
      var p = a(1906);
      function m() {
        let [e, t] = (0, r.useState)(!1),
          [a, n] = (0, r.useState)(!1),
          [l, o] = (0, r.useState)({ x: 0, y: 0 }),
          [c, x] = (0, r.useState)(!0),
          m = (0, p.c)(-100),
          h = (0, p.c)(-100),
          u = { damping: 30, stiffness: 250, mass: 0.6 },
          b = (0, d.q)(m, u),
          f = (0, d.q)(h, u);
        return ((0, r.useEffect)(() => {
          let e = window.matchMedia("(pointer: fine)");
          if ((x(!e.matches), !e.matches)) return;
          n(!0);
          let a = (e) => {
              (m.set(e.clientX),
                h.set(e.clientY),
                o({ x: e.clientX, y: e.clientY }));
            },
            s = () => n(!1),
            r = () => n(!0);
          (window.addEventListener("mousemove", a),
            document.addEventListener("mouseleave", s),
            document.addEventListener("mouseenter", r));
          let i = () => t(!0),
            l = () => t(!1),
            c = () => {
              document
                .querySelectorAll(
                  'a, button, [role="button"], input, textarea, select, .cyber-card, .hover-trigger',
                )
                .forEach((e) => {
                  (e.addEventListener("mouseenter", i),
                    e.addEventListener("mouseleave", l));
                });
            };
          c();
          let d = new MutationObserver(c);
          return (
            d.observe(document.body, { childList: !0, subtree: !0 }),
            () => {
              (window.removeEventListener("mousemove", a),
                document.removeEventListener("mouseleave", s),
                document.removeEventListener("mouseenter", r),
                d.disconnect());
            }
          );
        }, [m, h]),
        c || !a)
          ? null
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(i.E.div, {
                  className:
                    "fixed top-0 left-0 w-8 h-8 rounded-full border border-cyber-cyan z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-screen",
                  style: {
                    x: b,
                    y: f,
                    boxShadow: e
                      ? "0 0 15px rgba(0, 240, 255, 0.6), inset 0 0 8px rgba(0, 240, 255, 0.4)"
                      : "0 0 8px rgba(0, 240, 255, 0.2)",
                    width: e ? 48 : 32,
                    height: e ? 48 : 32,
                    borderColor: e ? "#b923ff" : "#00f0ff",
                  },
                  transition: {
                    type: "tween",
                    ease: "backOut",
                    duration: 0.15,
                  },
                }),
                (0, s.jsx)(i.E.div, {
                  className:
                    "fixed top-0 left-0 pointer-events-none z-[9999] font-mono text-[8px] text-cyber-cyan/50 tracking-widest pl-6 pt-2 select-none",
                  style: { x: b, y: f },
                  children: (0, s.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, s.jsxs)("span", { children: ["X: ", l.x] }),
                      (0, s.jsxs)("span", { children: ["Y: ", l.y] }),
                    ],
                  }),
                }),
              ],
            });
      }
      function h() {
        let [e, t] = (0, r.useState)(!1),
          a = (0, p.c)(0),
          n = (0, p.c)(0),
          l = (0, d.q)(a, { stiffness: 45, damping: 30 }),
          o = (0, d.q)(n, { stiffness: 45, damping: 30 });
        return ((0, r.useEffect)(() => {
          (t(!0), a.set(window.innerWidth / 2), n.set(window.innerHeight / 2));
          let e = (e) => {
            (a.set(e.clientX), n.set(e.clientY));
          };
          return (
            window.addEventListener("mousemove", e),
            () => window.removeEventListener("mousemove", e)
          );
        }, [a, n]),
        e)
          ? (0, s.jsxs)("div", {
              className:
                "fixed inset-0 pointer-events-none z-[1] overflow-hidden",
              children: [
                (0, s.jsx)(i.E.div, {
                  className:
                    "absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-cyber-cyan/10 via-cyber-blue/5 to-transparent filter blur-[60px]",
                  style: { x: l, y: o, left: -200, top: -200 },
                }),
                (0, s.jsx)(i.E.div, {
                  className:
                    "absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-cyber-purple/10 via-cyber-pink/2 to-transparent filter blur-[80px]",
                  style: { x: l, y: o, left: -250, top: -250 },
                }),
              ],
            })
          : null;
      }
      var u = a(4891),
        b = a(420);
      let f = [
          { id: "hero", label: "HOME", hash: "#hero" },
          { id: "about", label: "ABOUT", hash: "#about" },
          { id: "tech", label: "TECH", hash: "#tech" },
          { id: "projects", label: "PROJECTS", hash: "#projects" },
          { id: "experience", label: "EXPERIENCE", hash: "#experience" },
          { id: "contact", label: "CONTACT", hash: "#contact" },
        ],
        g = () =>
          (0, s.jsxs)("svg", {
            className:
              "w-[20px] h-[20px] text-white group-hover:text-blue-400 transition-colors duration-300",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("path", {
                d: "M6 8H26",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
              }),
              (0, s.jsx)("path", {
                d: "M16 8L8 24",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
              }),
              (0, s.jsx)("path", {
                d: "M16 8L24 24",
                stroke: "currentColor",
                strokeWidth: "2.5",
                strokeLinecap: "round",
              }),
              (0, s.jsx)("path", {
                d: "M11 18H21",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          });
      function y() {
        let [e, t] = (0, r.useState)("hero"),
          [a, l] = (0, r.useState)(!1),
          [o, c] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          let e = () => {
            l(window.scrollY > 20);
            let e = f.map((e) => document.getElementById(e.id)),
              a = window.scrollY + 200;
            e.forEach((e) => {
              if (!e) return;
              let s = e.offsetTop,
                r = e.offsetHeight;
              a >= s && a < s + r && t(e.id);
            });
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        let d = (e, a) => {
          e.preventDefault();
          let s = document.querySelector(a);
          s &&
            (s.scrollIntoView({ behavior: "smooth" }),
            t(a.substring(1)),
            c(!1));
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(i.E.header, {
              initial: { y: -100, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
              className:
                "fixed top-4 left-1/2 -translate-x-1/2 z-[99] w-[92%] max-w-5xl rounded-full border transition-all duration-300 font-sans text-[11px] font-medium tracking-wider select-none ".concat(
                  a
                    ? "bg-[#0d0d12]/85 backdrop-blur-md border-zinc-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                    : "bg-transparent border-transparent",
                ),
              children: (0, s.jsxs)("div", {
                className: "px-6 py-3 flex items-center justify-between",
                children: [
                  (0, s.jsxs)("a", {
                    href: "#hero",
                    onClick: (e) => d(e, "#hero"),
                    className: "flex items-center space-x-2.5 text-white group",
                    children: [
                      (0, s.jsx)(g, {}),
                      (0, s.jsxs)("span", {
                        className:
                          "font-sans font-extrabold tracking-tight text-xs sm:text-[13px] uppercase text-white group-hover:text-blue-400 transition-colors",
                        children: [
                          "Charlie",
                          (0, s.jsx)("span", {
                            className: "font-light text-zinc-500 ml-0.5",
                            children: "Smith",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("nav", {
                    className: "hidden md:flex items-center space-x-1 relative",
                    children: f.map((t) =>
                      (0, s.jsxs)(
                        "a",
                        {
                          href: t.hash,
                          onClick: (e) => d(e, t.hash),
                          className:
                            "relative px-4 py-1.5 rounded-full transition-all duration-200 hover:text-white ".concat(
                              e === t.id
                                ? "text-white font-semibold"
                                : "text-zinc-400",
                            ),
                          children: [
                            e === t.id &&
                              (0, s.jsx)(i.E.span, {
                                layoutId: "activePill",
                                className:
                                  "absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-10",
                                transition: {
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 30,
                                },
                              }),
                            t.label,
                          ],
                        },
                        t.id,
                      ),
                    ),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "hidden lg:flex items-center space-x-1.5 text-[9px] font-mono text-zinc-400 bg-zinc-900/40 border border-zinc-800 px-3.5 py-1 rounded-full",
                    children: [
                      (0, s.jsx)("span", {
                        className:
                          "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse",
                      }),
                      (0, s.jsx)("span", { children: "SYS_STATUS: ONLINE" }),
                    ],
                  }),
                  (0, s.jsx)("button", {
                    onClick: () => c(!o),
                    className:
                      "md:hidden p-1.5 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none",
                    children: o
                      ? (0, s.jsx)(u.Z, { className: "w-4 h-4" })
                      : (0, s.jsx)(b.Z, { className: "w-4 h-4" }),
                  }),
                ],
              }),
            }),
            (0, s.jsx)(n.M, {
              children:
                o &&
                (0, s.jsx)(i.E.div, {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.3 },
                  className:
                    "fixed top-[70px] left-[4%] right-[4%] z-[98] md:hidden rounded-2xl border border-zinc-800 bg-[#0d0d12]/95 backdrop-blur-xl p-6 font-sans text-xs overflow-hidden shadow-2xl",
                  children: (0, s.jsxs)("div", {
                    className: "flex flex-col space-y-4",
                    children: [
                      f.map((t) =>
                        (0, s.jsx)(
                          "a",
                          {
                            href: t.hash,
                            onClick: (e) => d(e, t.hash),
                            className:
                              "px-4 py-2.5 rounded-xl border tracking-widest text-center transition-all ".concat(
                                e === t.id
                                  ? "border-zinc-700 bg-zinc-800/40 text-white font-bold"
                                  : "border-transparent text-zinc-400 hover:border-zinc-800 hover:text-white",
                              ),
                            children: t.label,
                          },
                          t.id,
                        ),
                      ),
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center space-x-1.5 text-[9px] font-mono text-zinc-400 bg-zinc-900/40 border border-zinc-800 px-3 py-2 rounded-xl justify-center",
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse",
                          }),
                          (0, s.jsx)("span", {
                            children: "SECURE CONTAINER LINK ACTIVE",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
      var v = a(1192),
        w = a(2095),
        j = a(3145);
      let N = [
          "Software Engineer",
          "Full Stack Developer",
          "Open AI Integration",
        ],
        E = [
          // { label: "Research Internships", value: 3, suffix: "" },
          // { label: "Flagship Projects", value: 3, suffix: "+" },
          // { label: "Kaggle Medal", value: 1, suffix: "\uD83E\uDD48" },
          // { label: "Kaggle Medal", value: 1, suffix: "\uD83E\uDD48" },
          // { label: "Kaggle Medal", value: 1, suffix: "\uD83E\uDD48" },
          // { label: "Tech Skills", value: 30, suffix: "+" },
        ],
        z = (e) => {
          let { className: t } = e;
          return (0, s.jsx)("svg", {
            className: t,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
            }),
          });
        },
        I = (e) => {
          let { className: t } = e;
          return (0, s.jsx)("svg", {
            className: t,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            }),
          });
        },
        k = (e) => {
          let { className: t } = e;
          return (0, s.jsx)("svg", {
            className: t,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              d: "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-2.36-2.333c-.54-.54-1.41-.54-1.95 0l-2.38 2.38c-.54.54-1.41.54-1.95 0l-.39-.39c-.54-.54-.54-1.41 0-1.95l2.39-2.38c.54-.54.54-1.41 0-1.95l-2.38-2.38c-.54-.54-.54-1.41 0-1.95l.39-.39c.54-.54 1.41-.54 1.95 0l6.77 6.77c.54.54 1.41.54 1.95 0l2.38-2.38c.54-.54.54-1.41 0-1.95l-6.77-6.77c-.27-.27-.64-.44-1.03-.44z",
            }),
          });
        },
        S = (e) => {
          let { className: t } = e;
          return (0, s.jsx)("svg", {
            className: t,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, s.jsx)("path", {
              d: "M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336z",
            }),
          });
        },
        C = (e) => {
          let { className: t } = e;
          return (0, s.jsxs)("svg", {
            className: t,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("rect", {
                x: "2",
                y: "4",
                width: "20",
                height: "16",
                rx: "2",
              }),
              (0, s.jsx)("path", { d: "M22 6l-10 7L2 6" }),
            ],
          });
        };
      function T(e) {
        let { value: t, suffix: a, start: n } = e,
          [i, l] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            if (!n) return;
            let e = 0,
              a = performance.now(),
              s = (r) => {
                let n = Math.min((r - a) / 1400, 1);
                (l(Math.round((1 - Math.pow(1 - n, 3)) * t)),
                  n < 1 && (e = requestAnimationFrame(s)));
              };
            return (
              (e = requestAnimationFrame(s)),
              () => cancelAnimationFrame(e)
            );
          }, [n, t]),
          (0, s.jsxs)(s.Fragment, { children: [i, a] })
        );
      }
      function A() {
        let e = (0, r.useRef)(null),
          [t, a] = (0, r.useState)(0),
          [n, l] = (0, r.useState)(""),
          [o, c] = (0, r.useState)(!1),
          [x, m] = (0, r.useState)(100),
          [h, u] = (0, r.useState)(!1),
          [b, f] = (0, r.useState)(!1),
          [g, y] = (0, r.useState)(0),
          A = (0, p.c)(0),
          R = (0, p.c)(0),
          _ = (0, d.q)(A, { stiffness: 150, damping: 15, mass: 0.4 }),
          M = (0, d.q)(R, { stiffness: 150, damping: 15, mass: 0.4 });
        return (
          (0, r.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let a = t.getContext("2d");
            if (!a) return;
            let s = (t.width = window.innerWidth),
              r = (t.height = window.innerHeight),
              n = () => {
                t &&
                  ((s = t.width = window.innerWidth),
                  (r = t.height = window.innerHeight));
              };
            window.addEventListener("resize", n);
            let i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&+-/*",
              l = Array.from({ length: s / 14 }, () => 1),
              o = setInterval(() => {
                ((a.fillStyle = "rgba(3, 3, 8, 0.08)"),
                  a.fillRect(0, 0, s, r),
                  l.forEach((e, t) => {
                    let s = i[Math.floor(Math.random() * i.length)];
                    ((a.fillStyle =
                      Math.random() > 0.5 ? "#00f0ff" : "#b923ff"),
                      (a.font = "".concat(14, "px monospace")),
                      a.fillText(s, 14 * t, 14 * e),
                      14 * e > r && Math.random() > 0.975 && (l[t] = 0),
                      l[t]++);
                  }));
              }, 33);
            return () => {
              (clearInterval(o), window.removeEventListener("resize", n));
            };
          }, []),
          (0, r.useEffect)(() => {
            let e = setTimeout(() => {
              let e = N[t];
              o
                ? (l(e.substring(0, n.length - 1)),
                  m(50),
                  "" === n && (c(!1), a((e) => (e + 1) % N.length)))
                : (l(e.substring(0, n.length + 1)),
                  m(100),
                  n === e && (m(2e3), c(!0)));
            }, x);
            return () => clearTimeout(e);
          }, [n, o, t, x]),
          (0, r.useEffect)(() => {
            let e = setTimeout(() => u(!0), 1200);
            return () => clearTimeout(e);
          }, []),
          (0, s.jsxs)("section", {
            id: "hero",
            className:
              "relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden select-none",
            children: [
              (0, s.jsx)("canvas", {
                ref: e,
                className:
                  "absolute inset-0 z-0 opacity-20 pointer-events-none",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute inset-0 bg-cyber-grid-pattern bg-[size:40px_40px] opacity-[0.05] z-0 pointer-events-none",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-cyber-cyan/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-cyber-purple/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-slow",
                style: { animationDelay: "2s" },
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-[92%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 items-center",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "lg:col-span-7 flex flex-col space-y-6 text-left",
                    children: [
                      (0, s.jsxs)(i.E.div, {
                        initial: { opacity: 0, x: -30 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.6 },
                        className:
                          "self-start flex items-center space-x-1.5 text-[9px] text-zinc-400 bg-zinc-900/40 border border-zinc-800 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase",
                        children: [
                          (0, s.jsx)(v.Z, {
                            className:
                              "w-3.5 h-3.5 text-blue-400 animate-pulse",
                          }),
                          (0, s.jsx)("span", {
                            children: "COMMAND_ROOT // SYSTEM: ACTIVE",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                          (0, s.jsxs)(i.E.h1, {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.7, delay: 0.2 },
                            className:
                              "aurora-text font-sans font-extrabold text-4xl sm:text-7xl text-white tracking-tight uppercase drop-shadow-[0_2px_20px_rgba(0,240,255,0.15)]",
                            children: [
                              "Charlie",
                              (0, s.jsx)("br", {}),
                              "Smith",
                            ],
                          }),
                          (0, s.jsxs)(i.E.div, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { duration: 0.6, delay: 0.4 },
                            className:
                              "font-mono text-base sm:text-2xl text-cyber-emerald/90 flex items-center tracking-widest min-h-[40px]",
                            children: [
                              (0, s.jsx)("span", { children: "// " }),
                              (0, s.jsx)("span", {
                                className: "ml-2 font-bold",
                                children: n,
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "ml-1 w-2.5 h-6 bg-cyber-emerald animate-pulse inline-block",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(i.E.p, {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.7, delay: 0.5 },
                        className:
                          "text-white/70 max-w-xl text-sm sm:text-base leading-relaxed",
                        children:
                          "Full-stack developer with 10+ years of experience designing, developing, and optimizing production web applications and AI-powered solutions. Specialized in JavaScript/TypeScript, React, and modern web frameworks, with extensive experience integrating OpenAI capabilities and building custom solutions on WordPress, Shopify, and diverse web platforms.",
                      }),
                      (0, s.jsxs)(i.E.div, {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.7, delay: 0.6 },
                        className: "flex flex-wrap gap-4 pt-2",
                        children: [
                          (0, s.jsx)("a", {
                            href: "#projects",
                            onClick: (e) => {
                              var t;
                              (e.preventDefault(),
                                null ===
                                  (t = document.getElementById("projects")) ||
                                  void 0 === t ||
                                  t.scrollIntoView({ behavior: "smooth" }));
                            },
                            className:
                              "px-6 py-3 rounded-xl bg-white text-zinc-950 font-sans font-semibold text-xs tracking-wider transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-0.5 active:scale-[0.98] shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_28px_rgba(255,255,255,0.28)]",
                            children: "VIEW PROJECTS",
                          }),
                          (0, s.jsx)("a", {
                            href: "#contact",
                            onClick: (e) => {
                              var t;
                              (e.preventDefault(),
                                null ===
                                  (t = document.getElementById("contact")) ||
                                  void 0 === t ||
                                  t.scrollIntoView({ behavior: "smooth" }));
                            },
                            className:
                              "px-6 py-3 rounded-xl bg-transparent border border-zinc-800 hover:border-cyber-cyan/50 text-zinc-300 hover:text-white font-sans font-semibold text-xs tracking-wider transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-[0_10px_28px_-8px_rgba(0,240,255,0.4)]",
                            children: "GET IN TOUCH",
                          }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              if (b) return;
                              (f(!0), y(0));
                              let e = setInterval(() => {
                                y((t) =>
                                  t >= 100
                                    ? (clearInterval(e),
                                      setTimeout(() => {
                                        f(!1);
                                        let e = document.createElement("a");
                                        ((e.href = "Charlie_Smith_Resume.pdf"),
                                          (e.download =
                                            "Charlie_Smith_Resume.pdf"),
                                          document.body.appendChild(e),
                                          e.click(),
                                          document.body.removeChild(e));
                                      }, 600),
                                      100)
                                    : t + 10,
                                );
                              }, 150);
                            },
                            disabled: b,
                            className:
                              "px-6 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyber-purple/50 text-zinc-300 hover:text-white font-sans font-semibold text-xs tracking-wider transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-[0_10px_28px_-8px_rgba(185,35,255,0.4)] flex items-center space-x-2 group",
                            children: [
                              (0, s.jsx)(w.Z, {
                                className:
                                  "w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5",
                              }),
                              (0, s.jsx)("span", {
                                children: b
                                  ? "SYNTHESIZING... ".concat(g, "%")
                                  : "DOWNLOAD RESUME",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(i.E.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.7, delay: 0.7 },
                        className: "flex items-center space-x-4 pt-4",
                        children: [
                          {
                            icon: (0, s.jsx)(z, { className: "w-4 h-4" }),
                            url: "https://github.com/Charlie21",
                            label: "Github",
                          },
                          {
                            icon: (0, s.jsx)(I, { className: "w-4 h-4" }),
                            url: "https://www.linkedin.com/in/charliesmith/",
                            label: "LinkedIn",
                          },
                          {
                            icon: (0, s.jsx)(S, { className: "w-4 h-4" }),
                            url: "https://www.kaggle.com/charliesmith03",
                            label: "Kaggle",
                          },
                          {
                            icon: (0, s.jsx)(k, { className: "w-4 h-4" }),
                            url: "https://leetcode.com/u/9charliesmith4826",
                            label: "LeetCode",
                          },
                          {
                            icon: (0, s.jsx)(C, { className: "w-4 h-4" }),
                            url: "mailto:viscra0101@gmail.com",
                            label: "Email",
                          },
                        ].map((e, t) =>
                          (0, s.jsxs)(
                            "a",
                            {
                              href: e.url,
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "icon-pop group/soc relative w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-cyber-cyan hover:bg-zinc-900",
                              "aria-label": e.label,
                              children: [
                                e.icon,
                                (0, s.jsx)("span", {
                                  className:
                                    "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-800 bg-[#0d0d12]/95 px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-zinc-300 opacity-0 translate-y-1 transition-all duration-200 group-hover/soc:opacity-100 group-hover/soc:translate-y-0 shadow-[0_4px_16px_rgba(0,0,0,0.5)]",
                                  children: e.label,
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "float-slow lg:col-span-5 flex justify-center items-center relative select-none",
                    children: (0, s.jsxs)(i.E.div, {
                      initial: { scale: 0.95, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      transition: { duration: 0.8, delay: 0.4 },
                      onMouseMove: (e) => {
                        let t = e.currentTarget.getBoundingClientRect(),
                          a = (e.clientX - t.left) / t.width - 0.5,
                          s = (e.clientY - t.top) / t.height - 0.5;
                        (A.set(-(12 * s)), R.set(12 * a));
                      },
                      onMouseLeave: () => {
                        (A.set(0), R.set(0));
                      },
                      style: {
                        rotateX: _,
                        rotateY: M,
                        transformPerspective: 900,
                      },
                      className:
                        "conic-ring relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-3xl border border-zinc-800 bg-[#0d0d12]/75 backdrop-blur-md shadow-2xl group [transform-style:preserve-3d]",
                      children: [
                        (0, s.jsx)("div", {
                          className: "absolute inset-0 p-4 z-10",
                          children: (0, s.jsxs)("div", {
                            className:
                              "relative w-full h-full rounded-2xl overflow-hidden border border-zinc-850 bg-zinc-950",
                            children: [
                              (0, s.jsx)(j.default, {
                                srccet: "",
                                src: "./charlie_photo.png",
                                alt: "Charlie Smith Avatar Hologram",
                                fill: !0,
                                priority: !0,
                                className:
                                  "object-cover opacity-90 group-hover:scale-102 transition-transform duration-700",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-cyber-grid-pattern bg-[size:15px_15px] opacity-[0.02] z-10",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none z-10",
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "absolute top-6 left-6 z-20 font-mono text-[8px] text-zinc-500 tracking-wider",
                          children: [
                            (0, s.jsx)("span", {
                              children: "TARGET_SYSTEM: ON",
                            }),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("span", { children: "LOCK: 99.4%" }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "absolute bottom-6 right-6 z-20 font-mono text-[8px] text-zinc-500 tracking-wider text-right",
                          children: [
                            (0, s.jsx)("span", { children: "SYS_SYNC: OK" }),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("span", {
                              children: "FACIAL_ID: ARUN_T",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "absolute bottom-6 left-0 w-full z-10",
                children: (0, s.jsx)("div", {
                  className: "w-[92%] max-w-6xl mx-auto",
                  children: (0, s.jsx)("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                    children: E.map((e, t) =>
                      (0, s.jsxs)(
                        i.E.div,
                        {
                          initial: { opacity: 0, y: 30 },
                          animate: h ? { opacity: 1, y: 0 } : {},
                          transition: { duration: 0.5, delay: 0.1 * t },
                          whileHover: { y: -6 },
                          className:
                            "sheen card-glow p-4 flex flex-col items-center justify-center border border-zinc-800 bg-[#0d0d12]/75 backdrop-blur-md rounded-2xl hover:border-zinc-700/80 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight",
                              children: (0, s.jsx)(T, {
                                value: e.value,
                                suffix: e.suffix,
                                start: h,
                              }),
                            }),
                            (0, s.jsx)("span", {
                              className:
                                "font-mono text-[9px] sm:text-[10px] text-zinc-500 tracking-wider text-center mt-1.5 uppercase",
                              children: e.label,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                }),
              }),
            ],
          })
        );
      }
      var R = a(4257),
        _ = a(1585),
        M = a(4166),
        P = a(512),
        L = a(1178),
        O = a(1150),
        D = a(166),
        G = a(8617);
      let F = [
        "React",
        "404",
        "404-2",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "TypeScript",
        "JavaScript",
        "Python",
        "C++",
        "Docker",
        "Git",
        "GitHub",
        "Linux",
        "GCP",
        "Firebase",
        "Vercel",
        "Tailwind",
        "REST APIs",
        "KaTeX",
        "Framer Motion",
        "GSAP",
      ];
      function B() {
        return (0, s.jsxs)("div", {
          className:
            "w-full h-[320px] sm:h-[400px] flex flex-col justify-between p-6 border border-cyber-purple/15 bg-cyber-dark/30 rounded-xl relative overflow-hidden font-mono select-none",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 bg-cyber-grid-pattern bg-[size:15px_15px] opacity-[0.03]",
            }),
            (0, s.jsxs)("div", {
              className:
                "w-full flex justify-between items-center z-10 text-[9px] text-cyber-purple/60",
              children: [
                (0, s.jsx)("span", {
                  children: "SYSTEM_FALLBACK: TAG_GRID_ON",
                }),
                (0, s.jsx)("span", { children: "SYS_STATUS: COMPAT_MODE" }),
              ],
            }),
            (0, s.jsx)("div", {
              className:
                "flex flex-wrap items-center justify-center gap-2.5 max-w-md my-auto z-10",
              children: F.map((e, t) =>
                (0, s.jsx)(
                  i.E.span,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.4, delay: 0.02 * t },
                    whileHover: {
                      scale: 1.08,
                      borderColor: "rgba(0, 240, 255, 0.4)",
                      color: "#00f0ff",
                    },
                    className:
                      "px-3 py-1 text-[10px] sm:text-[11px] border border-white/5 bg-cyber-black/55 text-white/60 rounded-md cursor-pointer transition-colors hover:shadow-[0_0_8px_rgba(0,240,255,0.25)]",
                    children: e,
                  },
                  e,
                ),
              ),
            }),
            (0, s.jsxs)("div", {
              className:
                "w-full flex justify-between items-center z-10 text-[8px] text-white/30",
              children: [
                (0, s.jsx)("span", { children: "MATRIX_LOCK: ENGAGED" }),
                (0, s.jsx)("span", { children: "DRAG_ROTATE: LOCKED" }),
              ],
            }),
          ],
        });
      }
      class H extends r.Component {
        static getDerivedStateFromError(e) {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          console.warn(
            "TechSphere Three.js runtime error caught. Displaying elegant cyber fallback.",
            e,
            t,
          );
        }
        render() {
          return this.state.hasError ? (0, s.jsx)(B, {}) : this.children;
        }
        constructor(...e) {
          (super(...e), (this.state = { hasError: !1 }));
        }
      }
      let V = (0, D.default)(
        () =>
          Promise.all([a.e(689), a.e(870), a.e(918), a.e(466), a.e(901)]).then(
            a.bind(a, 1901),
          ),
        {
          loadableGenerated: { webpack: () => [1901] },
          ssr: !1,
          loading: () =>
            (0, s.jsxs)("div", {
              className:
                "w-full h-[320px] sm:h-[400px] flex flex-col items-center justify-center border border-cyber-cyan/15 bg-cyber-dark/30 rounded-xl relative overflow-hidden font-mono",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "absolute inset-0 bg-cyber-grid-pattern bg-[size:20px_20px] opacity-[0.05]",
                }),
                (0, s.jsx)(G.Z, {
                  className:
                    "w-8 h-8 text-cyber-cyan animate-spin mb-3 opacity-60",
                }),
                (0, s.jsx)("span", {
                  className:
                    "text-[10px] text-cyber-cyan/60 tracking-widest animate-pulse",
                  children: "CALIBRATING_3D_TAG_MATRIX...",
                }),
              ],
            }),
        },
      );
      function U() {
        return (0, s.jsx)(H, { children: (0, s.jsx)(V, {}) });
      }
      let Z = [
        {
          icon: (0, s.jsx)(R.Z, { className: "w-5 h-5 text-blue-400" }),
          title: "Full-Stack Development",
          desc: "Build scalable frontend and backend applications using JavaScript, TypeScript, React, and modern frameworks.",
        },
        {
          icon: (0, s.jsx)(_.Z, { className: "w-5 h-5 text-indigo-400" }),
          title: "AI & OpenAI Integration",
          desc: "Integrate OpenAI APIs to build intelligent chatbots, automation, and AI-powered user experiences.",
        },
        {
          icon: (0, s.jsx)(M.Z, { className: "w-5 h-5 text-cyan-400" }),
          title: "API & System Integration",
          desc: "Design REST APIs and connect databases, third-party services, and existing platforms.",
        },
        {
          icon: (0, s.jsx)(P.Z, { className: "w-5 h-5 text-zinc-300" }),
          title: "Performance Optimization",
          desc: "Improve application speed through caching, database optimization, asset optimization, and efficient architecture.",
        },
        {
          icon: (0, s.jsx)(_.Z, { className: "w-5 h-5 text-indigo-300" }),
          title: "WordPress & Shopify Development",
          desc: "Extend WordPress, Shopify, and other web platforms with custom features and integrations.",
        },
      ];
      function Y() {
        return (0, s.jsxs)("section", {
          id: "about",
          className:
            "relative min-h-screen py-24 flex items-center justify-center overflow-hidden border-t border-zinc-900 bg-[#07070a]",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-blue-950/5 rounded-full filter blur-[150px] pointer-events-none",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-indigo-950/5 rounded-full filter blur-[150px] pointer-events-none",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none",
            }),
            (0, s.jsxs)("div", {
              className:
                "w-[92%] max-w-6xl mx-auto flex flex-col space-y-16 z-10",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col space-y-3 text-center items-center font-sans",
                  children: [
                    (0, s.jsx)(i.E.div, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      className:
                        "flex items-center space-x-1.5 text-[9px] text-zinc-400 border border-zinc-800 bg-zinc-900/40 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase",
                      children: (0, s.jsx)("span", { children: "BIOGRAPHY" }),
                    }),
                    (0, s.jsx)(i.E.h2, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { delay: 0.1 },
                      className:
                        "aurora-text heading-underline font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight",
                      children: "About Charlie",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-zinc-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed",
                      children:
                        "Full-Stack Developer with expertise in OpenAI integration and modern web technologies.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-sans",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "lg:col-span-7 flex flex-col space-y-6 text-left",
                      children: [
                        (0, s.jsxs)(i.E.div, {
                          initial: { opacity: 0, x: -30 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: !0 },
                          className:
                            "sheen card-glow p-6 rounded-2xl border border-zinc-800/80 bg-[#0d0d12]/75 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]",
                          children: [
                            (0, s.jsx)("h3", {
                              className:
                                "font-semibold text-white tracking-wide text-lg mb-4 flex items-center gap-2",
                              children: (0, s.jsx)("span", {
                                children: "Developer Overview",
                              }),
                            }),
                            (0, s.jsxs)("p", {
                              className:
                                "text-zinc-300 text-sm leading-relaxed mb-4",
                              children: [
                                "I am a full-stack developer with over a decade of experience building web applications for both clients and internal teams.",
                                 "Specializing in JavaScript and TypeScript—particularly frameworks like Angular and React—I have successfully developed responsive user interfaces (UIs), internal tools, and practical applications across various industries.",
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-zinc-300 text-sm leading-relaxed",
                              children:[
                                "I provide services that build cross-platform AI solutions by integrating the OpenAI API into existing websites and applications, such as WordPress sites, e-commerce platforms, and custom systems.",
                                "Additionally, by connecting AI services with REST APIs, databases, and existing back-end systems, I enable the implementation of features like AI-powered chatbots, intelligent Q&A, customer support, and workflow automation, allowing for the integration of AI capabilities without requiring a complete platform overhaul.",
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)(i.E.div, {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { delay: 0.1 },
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "p-4 border border-zinc-800/80 bg-zinc-900/40 rounded-xl font-mono text-[10px] text-zinc-300 tracking-wider flex items-center justify-between hover:border-zinc-700/80 transition-colors",
                              children: [
                                (0, s.jsx)("span", {
                                  children: "PHP & JavaScript Expert",
                                }),
                                (0, s.jsx)(O.Z, {
                                  className: "w-3.5 h-3.5 text-zinc-500",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "p-4 border border-zinc-800/80 bg-zinc-900/40 rounded-xl font-mono text-[10px] text-zinc-300 tracking-wider flex items-center justify-between hover:border-zinc-700/80 transition-colors",
                              children: [
                                (0, s.jsx)("span", {
                                  children:
                                    "FOCUS: FULL-STAC + OpenAI API",
                                }),
                                (0, s.jsx)(O.Z, {
                                  className: "w-3.5 h-3.5 text-zinc-500",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)(i.E.div, {
                      initial: { opacity: 0, scale: 0.9 },
                      whileInView: { opacity: 1, scale: 1 },
                      viewport: { once: !0 },
                      transition: { duration: 0.8 },
                      className:
                        "lg:col-span-5 flex justify-center items-center",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full max-w-[420px] rounded-2xl border border-zinc-800/80 bg-[#0d0d12]/50 backdrop-blur-md relative p-2 shadow-2xl",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "absolute inset-0 bg-cyber-grid-pattern bg-[size:15px_15px] opacity-[0.03] z-0",
                          }),
                          (0, s.jsx)(U, {}),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col space-y-6 pt-8 font-sans",
                  children: [
                    (0, s.jsx)("h3", {
                      className:
                        "font-semibold text-zinc-400 tracking-widest text-center text-xs uppercase mb-2",
                      children: "// KEY STRENGTHS & SPECIALIZATIONS",
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",
                      children: Z.map((e, t) =>
                        (0, s.jsxs)(
                          i.E.div,
                          {
                            initial: { opacity: 0, y: 25 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0 },
                            transition: { duration: 0.4, delay: 0.05 * t },
                            className:
                              "sheen card-glow p-5 rounded-2xl border border-zinc-800 bg-[#0d0d12]/60 hover:border-zinc-700/80 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-start space-y-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] shadow-inner text-left",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-850 w-fit",
                                children: e.icon,
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col space-y-1",
                                children: [
                                  (0, s.jsx)("h4", {
                                    className:
                                      "font-semibold text-white tracking-wide text-[12px] uppercase",
                                    children: e.title,
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-zinc-400 text-[11px] leading-relaxed",
                                    children: e.desc,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let W = [
        { name: "JavaScript (ES6+)", category: "languages", level: 88, grade: "EXPERT" },
        { name: "TypeScript", category: "languages", level: 80, grade: "EXPERT" },
        { name: "PHP", category: "languages", level: 86, grade: "EXPERT" },
        { name: "C/C++", category: "languages", level: 89, grade: "EXPERT" },
        { name: "JAVA", category: "languages", level: 91, grade: "EXPERT" },
        { name: "React", category: "Frontend", level: 85, grade: "EXPERT" },
        { name: "Next.js", category: "Frontend", level: 83, grade: "EXPERT" },
        { name: "Angular", category: "Frontend", level: 75, grade: "EXPERT" },
        { name: "Node.js", category: "Backend", level: 84, grade: "EXPERT" },
        { name: "Express.js", category: "Backend", level: 74, grade: "EXPERT" },
        { name: "Spring", category: "Backend", level: 65, grade: "EXPERT" },
        { name: "MySQL", category: "database", level: 93, grade: "EXPERT" },
        { name: "PostgreSQL", category: "database", level: 86, grade: "EXPERT" },
        { name: "MongoDB", category: "database", level: 81, grade: "EXPERT" },
        { name: "Prisma", category: "database", level: 75, grade: "EXPERT" },
        { name: "Mongoose", category: "database", level: 76, grade: "EXPERT" },
        { name: "REST API", category: "API", level: 70, grade: "EXPERT" },
        { name: "OpenAI API", category: "aiml", level: 89, grade: "EXPERT" },
        { name: "AI Chatbot", category: "aiml", level: 85, grade: "EXPERT" },
        { name: "Git / GitHub", category: "tools", level: 88, grade: "EXPERT" },
        { name: "OpenAI Platform", category: "tools", level: 73, grade: "EXPERT" },
        { name: "Docker", category: "tools", level: 76, grade: "EXPERT" },
        { name: "Vercel / AWS", category: "tools", level: 95, grade: "EXPERT" },
        ],
        q = [
          { id: "all", label: "ALL" },
          { id: "languages", label: "LANGUAGES" },
          { id: "aiml", label: "AI / ML" },
          { id: "Frontend", label: "FRONTEND" },
          { id: "Backend", label: "BACKEND" },
          { id: "database", label: "DATABASES / ORM" },
          { id: "tools", label: "TOOLS" },
        ];
      function X(e) {
        let { skill: t } = e,
          [a, n] = (0, r.useState)(0),
          [l, o] = (0, r.useState)(0);
        return (0, s.jsx)(i.E.div, {
          layout: !0,
          initial: { opacity: 0, y: 15 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.35, ease: "easeOut" },
          className: "perspective-1000",
          children: (0, s.jsxs)("div", {
            onMouseMove: (e) => {
              let t = e.currentTarget.getBoundingClientRect(),
                a = t.width,
                s = t.height,
                r = e.clientX - t.left - a / 2;
              (n(-(((e.clientY - t.top - s / 2) / (s / 2)) * 4)),
                o((r / (a / 2)) * 4));
            },
            onMouseLeave: () => {
              (n(0), o(0));
            },
            style: {
              transform: "rotateX("
                .concat(a, "deg) rotateY(")
                .concat(l, "deg)"),
              transformStyle: "preserve-3d",
            },
            className:
              "sheen card-glow w-full p-6 rounded-2xl border border-zinc-800/80 bg-[#0d0d12]/75 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-zinc-700/80 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all duration-200 ease-out select-none group flex flex-col justify-between h-[120px] relative overflow-hidden",
            children: [
              (0, s.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
              }),
              (0, s.jsxs)("div", {
                style: { transform: "translateZ(20px)" },
                className: "flex justify-between items-center z-10",
                children: [
                  (0, s.jsx)("span", {
                    className:
                      "font-sans font-semibold text-[13px] sm:text-[14px] text-white tracking-wide",
                    children: t.name,
                  }),
                  (0, s.jsx)("span", {
                    className:
                      "font-mono text-[8px] sm:text-[9px] font-medium tracking-widest text-zinc-400 border border-zinc-800 px-2.5 py-0.5 rounded-full bg-zinc-900/80",
                    children: t.grade,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                style: { transform: "translateZ(10px)" },
                className: "flex flex-col space-y-2 z-10 w-full",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex justify-between text-[9px] font-mono text-zinc-500 tracking-wider",
                    children: [
                      (0, s.jsx)("span", { children: "PROFICIENCY" }),
                      (0, s.jsxs)("span", {
                        className: "text-zinc-300",
                        children: [t.level, "%"],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "h-[4px] w-full bg-zinc-800/80 rounded-full overflow-hidden relative",
                    children: (0, s.jsx)(i.E.div, {
                      initial: { width: 0 },
                      whileInView: { width: "".concat(t.level, "%") },
                      viewport: { once: !0 },
                      transition: { duration: 1.2, ease: "easeOut" },
                      className:
                        "h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function K() {
        let [e, t] = (0, r.useState)("all"),
          a = W.filter((t) => "all" === e || t.category === e);
        return (0, s.jsxs)("section", {
          id: "tech",
          className:
            "relative min-h-screen py-24 flex items-center justify-center overflow-hidden border-t border-zinc-900 bg-[#07070a]",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,16,24,0.3),transparent_60%)] pointer-events-none",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-blue-900/5 rounded-full filter blur-[150px] pointer-events-none",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-900/5 rounded-full filter blur-[150px] pointer-events-none",
            }),
            (0, s.jsxs)("div", {
              className:
                "w-[92%] max-w-6xl mx-auto flex flex-col space-y-12 z-10",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col space-y-3 text-center items-center",
                  children: [
                    (0, s.jsxs)(i.E.div, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      className:
                        "flex items-center space-x-1.5 text-[9px] text-zinc-400 border border-zinc-800 bg-zinc-900/40 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase",
                      children: [
                        (0, s.jsx)(G.Z, {
                          className: "w-3 h-3 text-blue-400 animate-pulse",
                        }),
                        (0, s.jsx)("span", {
                          children: "TECHNICAL SPECIFICATIONS",
                        }),
                      ],
                    }),
                    (0, s.jsx)(i.E.h2, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { delay: 0.1 },
                      className:
                        "aurora-text heading-underline font-sans font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight",
                      children: "Skills & Expertise",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-zinc-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed",
                      children:
                        "A comprehensive matrix of core technologies, libraries, and database frameworks compiled through full stack software engineering.",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto select-none font-sans",
                  children: q.map((a) =>
                    (0, s.jsx)(
                      "button",
                      {
                        onClick: () => t(a.id),
                        className:
                          "px-4 py-1.5 rounded-full text-[10px] tracking-wider border font-medium transition-all duration-300 ".concat(
                            e === a.id
                              ? "bg-white text-zinc-950 border-white shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                              : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white",
                          ),
                        children: a.label,
                      },
                      a.id,
                    ),
                  ),
                }),
                (0, s.jsx)(i.E.div, {
                  layout: !0,
                  className:
                    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4",
                  children: (0, s.jsx)(n.M, {
                    mode: "popLayout",
                    children: a.map((e) => (0, s.jsx)(X, { skill: e }, e.name)),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var J = a(677),
        Q = a(422),
        $ = a(8940);
      let ee = [
        {
          id: "GOODISET",
          title: "GOODISET",
          tagline:
            "Mobile-first Shopping Experience for a Multilingual Product ",
          description:
            "Modernized a Shopify e-commerce platform with Next.js and PostgreSQL, achieving 80% faster page loads, while integrating an OpenAI-powered Alin AI assistant for automated insurance Q&A, customer request classification, and WhatsApp service escalation.",
          features: [
            "Integrated an AI-powered virtual assistant (Alin) into the BNP Paribas Cardif digital platform, enabling automated customer support, insurance-related Q&A, request classification, and seamless escalation to customer service through WhatsApp.",
            "Migrated a legacy WordPress platform to a React/Next.js headless CMS architecture using WordPress REST APIs.",
            "Implemented Server-Side Rendering (SSR), route-based code splitting, dynamic imports, and lazy loading to optimize frontend performance.",
            "Reduced average page load time from 1.5s to 0.3s (80% improvement) and decreased frontend bundle size by approximately 45%.",
            "Improved Core Web Vitals, including LCP and FCP, through image optimization (WebP), CDN caching, and asset delivery enhancements.",
            "Enhanced SEO by delivering pre-rendered pages, optimized metadata, and improved crawlability for search engines.",
            "Increased application scalability and maintainability through component-based React architecture and API-driven content management.",
          ],
          tech: [
            "OpenAI API",
            "WhatsApp Business API",
            "Next.js",
            "React",
            "TypeScript",
            "Wordpress",
            "WPGraphQL",
            "PHP",
          ],
          image: "./image-1788839083641.png",
          architecture:
            "Shopify Dashboard <--> React & TypeScript <--> PostgreSQL & Prisma <--> GA4 & Stripe",
          github: "https://github.com/Charlie21/Codeorbit",
          demo: "https://goodiset.com/",
        },
        {
          id: "Cardinal Peak ",
          title: "Cardinal Peak ",
          tagline: "Created custom Applications different Industries",
          description:
            "Migrated a legacy WordPress site to a React/Next.js headless architecture, reducing page load time from 1.5s to 0.3s through SSR, code splitting, and performance optimization, while improving SEO, scalability, and user experience.",
          features: [
            "Rebuilt the frontend with Next.js SSR/ISR, reducing average page load time from 1.5s to 0.3s (80% improvement) and decreasing Time to First Byte (TTFB) from approximately 600ms to under 100ms through server-side rendering, edge caching, and optimized data-fetching strategies.",
            "Implemented advanced image optimization strategies including WebP/AVIF conversion, responsive image delivery, lazy loading, and automatic image resizing, reducing image payload sizes by up to 40–50% and improving Largest Contentful Paint (LCP).",
            "Integrated Google Analytics 4 (GA4) and advanced event tracking to measure customer behavior, checkout funnel performance, and conversion metrics, enabling data-driven optimization and marketing decisions.",
          ],
          tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Shopify",
            "PHP",
          ],
          image: "./image-1788839734307.png",
          architecture:
            "OpenAI API <--> React.js & TypeScript  <--> Next.js & WPGraphQL Engine",
          github: "https://github.com/Charlie21/Codeorbit",
          demo: "https://bnpparibascardif.it/",
        },
        {
          id: "Chaunceyallpro",
          title: "Chaunceyallpro",
          tagline: "Turning Inquiries Into Customers.",
          description:
            "Developed and optimized a WordPress-based home-services platform with custom booking, lead generation, Google Maps, and SEO features, reducing page load time by 63% (2.4s → 0.9s) and TTFB by 74% (700ms → 180ms).",
          features: [
            "Integrated an AI-powered customer support and lead-generation chatbot into a WordPress platform using JavaScript, PHP REST APIs, OpenAI API, and RAG-based retrieval, enabling automated service Q&A, quote qualification, and booking assistance.",
            "Engineered a WordPress/PHP home-services platform with custom quote, booking, Google Maps project visualization, and SEO-focused service/FAQ architecture.",
            "Optimized WordPress/MySQL queries, caching, WebP images, lazy loading, and frontend assets, reducing page load time from 2.4s → 0.9s (63%) and TTFB from 700ms → 180ms (74%).",
            "Built an SEO-driven content structure across service, location, FAQ, and blog pages, while integrating Google Maps, Google Analytics/GTM, and lead-generation forms to improve local search visibility and customer conversion flow.",
          ],
          tech: [
            "OpenAI API",
            "WordPress",
            "PHP",
            "MySQL",
            "JavaScript",
            "Google Maps API",
            "Google Analytics",
            "SEO",
          ],
          image: "./image-1788834090558.png",
          architecture:
            "WordPress Dashboard <--> SEO <--> Google Map <--> Lead Conversion Optimization",
          github: "https://github.com/Charlie21/Codeorbit",
          demo: "https://chaunceyallpro.com/",
        },
        {
          id: "OpenAI API Master",
          title: "AI Integration",
          tagline: "AI-Powered Web Platform Integration",
          description:
            "Engineered flexible OpenAI API integrations for existing websites and web applications across diverse technology stacks, enabling AI chat, automated support, knowledge-based Q&A, and intelligent workflows with minimal architectural changes.",
          features: [
            "Integrated OpenAI API into existing websites and web applications across diverse technology stacks.",
            "Built AI-powered chatbots for customer support, intelligent Q&A, and automated user interactions.",
            "Connected AI services with REST APIs, databases, and existing backend systems without requiring a full platform rebuild.",
            "Designed reusable AI integration architectures that can extend WordPress, e-commerce platforms, and custom web applications with minimal changes.",
          ],
          tech: ["OpenAI API", "JavaScript", "PHP", "JAVA", "C#"],
          image: "./image-15-1024x538.webp",
          architecture: "existing websites <--> OpenAI API",
          github: "https://github.com/Charlie21",
          demo: false,
        },
      ];
      function et() {
        let [e, t] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(
            () => (
              e
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = ""),
              () => {
                document.body.style.overflow = "";
              }
            ),
            [e],
          ),
          (0, s.jsxs)("section", {
            id: "projects",
            className:
              "relative min-h-screen py-24 flex items-center justify-center overflow-hidden border-t border-zinc-900 bg-[#07070a]",
            children: [
              (0, s.jsx)("div", {
                className:
                  "absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-blue-950/5 rounded-full filter blur-[150px] pointer-events-none",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-950/5 rounded-full filter blur-[150px] pointer-events-none",
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-[92%] max-w-6xl mx-auto flex flex-col space-y-12 z-10",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col space-y-3 text-center items-center font-sans",
                    children: [
                      (0, s.jsx)(i.E.div, {
                        initial: { opacity: 0, y: 15 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        className:
                          "flex items-center space-x-1.5 text-[9px] text-zinc-400 border border-zinc-800 bg-zinc-900/40 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase",
                        children: (0, s.jsx)("span", { children: "PORTFOLIO" }),
                      }),
                      (0, s.jsx)(i.E.h2, {
                        initial: { opacity: 0, y: 15 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { delay: 0.1 },
                        className:
                          "aurora-text heading-underline font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight",
                        children: "Featured Works",
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-zinc-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed",
                        children:
                          "A curated showcase of dynamic applications, developer dashboards, and intelligent system architectures built from scratch.",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 font-sans",
                    children: ee.map((e, a) =>
                      (0, s.jsxs)(
                        i.E.div,
                        {
                          initial: { opacity: 0, y: 30 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5, delay: 0.1 * a },
                          className:
                            "sheen card-glow group flex flex-col h-full border border-zinc-800/80 bg-[#0d0d12]/75 hover:border-zinc-700/80 transition-all duration-300 select-none rounded-2xl overflow-hidden hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "relative w-full h-[200px] bg-zinc-950 overflow-hidden border-b border-zinc-900",
                              children: [
                                e.isBlueprint
                                  ? (0, s.jsxs)("div", {
                                      className:
                                        "w-full h-full flex flex-col justify-center items-center p-6 relative",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "absolute inset-0 bg-cyber-grid-pattern bg-[size:15px_15px] opacity-[0.05]",
                                        }),
                                        (0, s.jsx)(G.Z, {
                                          className:
                                            "w-12 h-12 text-zinc-500 animate-pulse opacity-60 mb-2",
                                        }),
                                        (0, s.jsxs)("span", {
                                          className:
                                            "font-mono text-[9px] text-zinc-400 tracking-wider",
                                          children: [
                                            "SCHEMATIC_NODE_MAPPING // ",
                                            e.id.toUpperCase(),
                                            "_v1.0",
                                          ],
                                        }),
                                        (0, s.jsxs)("svg", {
                                          className:
                                            "absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none",
                                          viewBox: "0 0 100 100",
                                          preserveAspectRatio: "none",
                                          children: [
                                            (0, s.jsx)("line", {
                                              x1: "10",
                                              y1: "20",
                                              x2: "40",
                                              y2: "20",
                                              stroke: "#00f0ff",
                                              strokeWidth: "0.5",
                                              strokeDasharray: "2, 2",
                                            }),
                                            (0, s.jsx)("line", {
                                              x1: "40",
                                              y1: "20",
                                              x2: "50",
                                              y2: "40",
                                              stroke: "#00f0ff",
                                              strokeWidth: "0.5",
                                            }),
                                            (0, s.jsx)("line", {
                                              x1: "50",
                                              y1: "40",
                                              x2: "90",
                                              y2: "40",
                                              stroke: "#b923ff",
                                              strokeWidth: "0.5",
                                              strokeDasharray: "3, 3",
                                            }),
                                            (0, s.jsx)("circle", {
                                              cx: "50",
                                              cy: "40",
                                              r: "1.5",
                                              fill: "#00f0ff",
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : (0, s.jsxs)("div", {
                                      className: "w-full h-full relative",
                                      children: [
                                        (0, s.jsx)(j.default, {
                                          src: e.image,
                                          alt: e.title,
                                          fill: !0,
                                          className:
                                            "codeorbit" === e.id
                                              ? "object-contain p-6 group-hover:scale-[1.02] transition-transform duration-700 opacity-95"
                                              : "object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-80",
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90",
                                        }),
                                      ],
                                    }),
                                (0, s.jsx)("span", {
                                  className:
                                    "absolute top-3 left-3 z-10 font-mono text-[8px] border border-zinc-800 text-zinc-400 bg-zinc-900/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider",
                                  children: e.tech[0],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "p-6 flex flex-col flex-grow text-left space-y-4 justify-between",
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col space-y-2",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "flex flex-col space-y-1",
                                      children: [
                                        (0, s.jsx)("h3", {
                                          className:
                                            "font-semibold text-lg text-white group-hover:text-blue-400 transition-colors tracking-wide",
                                          children:
                                            "codeorbit" === e.id
                                              ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                    (0, s.jsx)("span", {
                                                      className:
                                                        "text-blue-500",
                                                      children: "Code",
                                                    }),
                                                    (0, s.jsx)("span", {
                                                      className:
                                                        "text-white group-hover:text-white transition-colors",
                                                      children: "Orbit",
                                                    }),
                                                  ],
                                                })
                                              : e.title,
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "font-mono text-[9px] text-zinc-500 tracking-wider uppercase",
                                          children: e.tagline,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-zinc-400 text-xs sm:text-[13px] leading-relaxed line-clamp-3",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col space-y-4 pt-2",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "flex flex-wrap gap-1.5",
                                      children: [
                                        e.tech.slice(0, 4).map((e) =>
                                          (0, s.jsx)(
                                            "span",
                                            {
                                              className:
                                                "font-mono text-[8px] bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded",
                                              children: e,
                                            },
                                            e,
                                          ),
                                        ),
                                        e.tech.length > 4 &&
                                          (0, s.jsxs)("span", {
                                            className:
                                              "font-mono text-[8px] bg-blue-950/20 border border-blue-900/30 text-blue-400 px-2 py-0.5 rounded",
                                            children: [
                                              "+",
                                              e.tech.length - 4,
                                              " MORE",
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, s.jsx)("button", {
                                      onClick: () => t(e),
                                      className:
                                        "w-full py-2 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-medium text-[10px] tracking-wider uppercase rounded-xl transition-all flex items-center justify-center space-x-2",
                                      children: (0, s.jsx)("span", {
                                        children: "[VIEW SPECIFICATIONS]",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
              (0, s.jsx)(n.M, {
                children:
                  e &&
                  (0, s.jsx)(i.E.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className:
                      "fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md",
                    children: (0, s.jsxs)(i.E.div, {
                      initial: { scale: 0.95, y: 30 },
                      animate: { scale: 1, y: 0 },
                      exit: { scale: 0.95, y: 30 },
                      transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 220,
                      },
                      className:
                        "w-full max-w-3xl max-h-[85vh] rounded-2xl border border-zinc-800 bg-[#0d0d12]/95 text-left flex flex-col overflow-hidden shadow-2xl relative font-sans",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "absolute inset-0 bg-cyber-grid-pattern bg-[size:15px_15px] opacity-[0.02] z-0",
                        }),
                        (0, s.jsx)("button", {
                          onClick: () => t(null),
                          className:
                            "absolute top-4 right-4 z-[99] p-2 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-900/80 text-zinc-400 hover:text-white transition-all shadow-lg",
                          children: (0, s.jsx)(u.Z, { className: "w-4 h-4" }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "overflow-y-auto flex-1 scrollbar-none z-10",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "relative w-full h-[220px] bg-zinc-950 border-b border-zinc-900 flex items-center justify-center overflow-hidden",
                              children: [
                                "codeorbit" === e.id
                                  ? (0, s.jsxs)("div", {
                                      className:
                                        "w-full h-full bg-[#07070a] flex items-center justify-center p-8 relative",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "absolute inset-0 bg-cyber-grid-pattern bg-[size:20px_20px] opacity-[0.03]",
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "relative w-full max-w-[420px] h-full",
                                          children: (0, s.jsx)(j.default, {
                                            src: "./codeorbit_logo.webp",
                                            alt: "CodeOrbit Logo",
                                            fill: !0,
                                            className: "object-contain",
                                            priority: !0,
                                          }),
                                        }),
                                      ],
                                    })
                                  : e.isBlueprint
                                    ? (0, s.jsxs)("div", {
                                        className:
                                          "w-full h-full flex flex-col justify-center items-center p-6 relative",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "absolute inset-0 bg-cyber-grid-pattern bg-[size:20px_20px] opacity-[0.05]",
                                          }),
                                          (0, s.jsx)(G.Z, {
                                            className:
                                              "w-16 h-16 text-zinc-500 animate-pulse opacity-60 mb-2",
                                          }),
                                          (0, s.jsxs)("span", {
                                            className:
                                              "font-mono text-xs text-zinc-400 tracking-widest uppercase",
                                            children: [
                                              "HOLOGRAPHIC_CORE // ",
                                              e.id.toUpperCase(),
                                              "_v1.0",
                                            ],
                                          }),
                                        ],
                                      })
                                    : (0, s.jsxs)("div", {
                                        className: "w-full h-full relative",
                                        children: [
                                          (0, s.jsx)(j.default, {
                                            src: e.image,
                                            alt: e.title,
                                            fill: !0,
                                            className:
                                              "object-cover opacity-60",
                                          }),
                                          (0, s.jsx)("div", {
                                            className:
                                              "absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent opacity-95",
                                          }),
                                        ],
                                      }),
                                "codeorbit" !== e.id &&
                                  (0, s.jsxs)("div", {
                                    className:
                                      "absolute bottom-6 left-6 z-10 flex flex-col space-y-1",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "font-mono text-[8px] text-zinc-400 tracking-widest uppercase border border-zinc-800 px-2.5 py-0.5 rounded-full bg-zinc-900/80 self-start",
                                        children: "SYSTEM ARCHITECTURE",
                                      }),
                                      (0, s.jsx)("h2", {
                                        className:
                                          "font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase mt-1",
                                        children: e.title,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "p-6 sm:p-8 space-y-6",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "flex flex-col space-y-2 border-b border-zinc-900 pb-4",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold",
                                      children: "// SUMMARY",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-zinc-300 text-sm leading-relaxed",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                                e.architecture &&
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-col space-y-2 border-b border-zinc-900 pb-4 text-xs",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold",
                                        children:
                                          "// SYSTEM ARCHITECTURE SCHEMA",
                                      }),
                                      (0, s.jsx)("code", {
                                        className:
                                          "p-3 bg-zinc-950 rounded-xl border border-zinc-900 text-emerald-400 font-mono block",
                                        children: e.architecture,
                                      }),
                                    ],
                                  }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col space-y-3",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "font-mono text-[10px] text-zinc-400 tracking-widest uppercase font-bold",
                                      children: "// CAPABILITIES & UTILITIES",
                                    }),
                                    (0, s.jsx)("ul", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-zinc-400",
                                      children: e.features.map((e, t) =>
                                        (0, s.jsxs)(
                                          "li",
                                          {
                                            className:
                                              "flex items-start space-x-2.5 p-3.5 bg-zinc-900/40 border border-zinc-850 rounded-2xl",
                                            children: [
                                              (0, s.jsx)(J.Z, {
                                                className:
                                                  "w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5",
                                              }),
                                              (0, s.jsx)("span", {
                                                className: "leading-relaxed",
                                                children: e,
                                              }),
                                            ],
                                          },
                                          t,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex flex-col space-y-2 pt-2",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "font-mono text-[10px] text-zinc-400 tracking-widest uppercase font-bold",
                                      children: "// SKILLSET_BINDS",
                                    }),
                                    (0, s.jsx)("div", {
                                      className: "flex flex-wrap gap-2",
                                      children: e.tech.map((e) =>
                                        (0, s.jsx)(
                                          "span",
                                          {
                                            className:
                                              "font-mono text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 rounded",
                                            children: e,
                                          },
                                          e,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "p-4 bg-zinc-950 border-t border-zinc-900 flex items-center justify-end gap-3 z-10",
                          children: [
                            (0, s.jsxs)("a", {
                              href: e.github,
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "px-4 py-2 border border-zinc-850 hover:border-zinc-700 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-xl font-mono text-[9px] tracking-wider uppercase transition-all duration-300 flex items-center space-x-2",
                              children: [
                                (0, s.jsx)(Q.Z, { className: "w-3.5 h-3.5" }),
                                (0, s.jsx)("span", {
                                  children: "[SOURCE_CODE]",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("a", {
                              href: e.demo,
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "px-4 py-2 bg-white hover:bg-zinc-200 text-zinc-950 font-mono font-bold text-[9px] tracking-wider uppercase rounded-xl transition-all duration-300 flex items-center space-x-2 hover:scale-[1.02] shadow-[0_4px_12px_rgba(255,255,255,0.15)]",
                              children: [
                                (0, s.jsx)($.Z, { className: "w-3.5 h-3.5" }),
                                (0, s.jsx)("span", { children: "[LIVE_DEMO]" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              }),
            ],
          })
        );
      }
      var ea = a(9885),
        es = a(8512),
        er = a(7189),
        en = a(5763);
      let ei = [
        {
          id: 1,
          company: "Softeq ",
          role: "Junior Software Developer",
          location: "Houston, Texas",
          duration: "Oct 2020 – Jul 2022",
          points: [
            "Assisted with development of web, desktop, and mobile application projects.",
            "Built frontend features and supported backend development tasks.",
            "Worked with senior developers on debugging, testing, and application improvements.",
            "Helped maintain existing software systems and resolve technical issues.",
          ],
          icon: (0, s.jsx)(ea.Z, { className: "w-4 h-4 text-blue-400" }),
        },
        {
          id: 2,
          company: "Cardinal Peak",
          role: "Full-Stack Developer",
          location: "Lafayette, Colorado",
          duration: "Jul 2022 – May 2023",
          points: [
            "Developed frontend components, backend services, and database integrations.",
            "Worked on application design, feature implementation, testing, and troubleshooting.",
            "Collaborated with engineering teams to improve software quality and maintainability.",
            "Supported existing applications by fixing issues and implementing new features.",
          ],
          icon: (0, s.jsx)(G.Z, { className: "w-4 h-4 text-blue-400" }),
        },
        {
          id: 3,
          company: "Chaunceyallpro",
          role: "Senior Developer",
          location: "New YORK, USA",
          duration: "May 2023 – Apr 2025",
          points: [
            "Developed a React and Node.js application for over 50,000 users and reduced page loading times by 35%.",
            "Participated in code reviews, testing, deployments, and technical discussions. Enhanced existing application functionality through code optimization and technical improvements",
          ],
          icon: (0, s.jsx)(G.Z, { className: "w-4 h-4 text-cyan-400" }),
        },
      ];
      function el() {
        return (0, s.jsxs)("section", {
          id: "experience",
          className:
            "relative min-h-screen py-24 flex items-center justify-center overflow-hidden border-t border-zinc-900 bg-[#07070a]",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-blue-950/5 rounded-full filter blur-[150px] pointer-events-none",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-950/5 rounded-full filter blur-[150px] pointer-events-none",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none",
            }),
            (0, s.jsxs)("div", {
              className:
                "w-[92%] max-w-6xl mx-auto flex flex-col space-y-16 z-10",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col space-y-3 text-center items-center font-sans",
                  children: [
                    (0, s.jsx)(i.E.div, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      className:
                        "flex items-center space-x-1.5 text-[9px] text-zinc-400 border border-zinc-800 bg-zinc-900/40 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase",
                      children: (0, s.jsx)("span", { children: "EXPERIENCE" }),
                    }),
                    (0, s.jsx)(i.E.h2, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { delay: 0.1 },
                      className:
                        "aurora-text heading-underline font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight",
                      children: "Career & Research",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-zinc-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed",
                      children:
                        "A chronological timeline summarizing development experience and full-stack software achievements in chronological order.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "relative max-w-4xl mx-auto w-full",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-zinc-800 opacity-60",
                    }),
                    (0, s.jsx)(i.E.div, {
                      className:
                        "absolute left-4 md:left-1/2 w-[1px] h-32 -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent",
                      animate: { top: ["0%", "100%"] },
                      transition: {
                        repeat: 1 / 0,
                        duration: 8,
                        ease: "linear",
                      },
                    }),
                    (0, s.jsx)("div", {
                      className: "space-y-12 w-full font-sans",
                      children: ei.map((e, t) => {
                        let a = t % 2 == 0;
                        return (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "relative flex flex-col md:flex-row items-stretch w-full",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full border border-zinc-800 -translate-x-1/2 z-10 flex items-center justify-center bg-[#0d0d12] transition-all duration-300 pointer-events-none select-none",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-zinc-400 bg-zinc-900/60 rounded-full",
                                  children: (0, s.jsx)(es.Z, {
                                    className: "w-3.5 h-3.5",
                                  }),
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 ".concat(
                                    a
                                      ? "md:text-right"
                                      : "md:order-2 md:pl-12 md:text-left",
                                  ),
                                children: (0, s.jsxs)(i.E.div, {
                                  initial: { opacity: 0, x: a ? -40 : 40 },
                                  whileInView: { opacity: 1, x: 0 },
                                  viewport: { once: !0 },
                                  transition: {
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                  },
                                  className:
                                    "sheen card-glow p-6 rounded-2xl border border-zinc-800/80 bg-[#0d0d12]/75 backdrop-blur-md group hover:scale-[1.01] hover:border-zinc-700/80 transition-all duration-350 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "flex flex-col mb-4 ".concat(
                                        a ? "md:items-end" : "md:items-start",
                                      ),
                                      children: [
                                        (0, s.jsx)("span", {
                                          className:
                                            "font-mono text-[9px] text-zinc-400 tracking-wider border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 rounded-full self-start md:self-auto uppercase",
                                          children: e.role,
                                        }),
                                        (0, s.jsx)("h3", {
                                          className:
                                            "font-semibold text-lg text-white mt-2 group-hover:text-blue-400 transition-colors tracking-wide",
                                          children: e.company,
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex flex-wrap gap-3 font-mono text-[10px] text-zinc-500 mt-1.5 ".concat(
                                              a
                                                ? "md:justify-end"
                                                : "md:justify-start",
                                            ),
                                          children: [
                                            (0, s.jsxs)("span", {
                                              className:
                                                "flex items-center gap-1",
                                              children: [
                                                (0, s.jsx)(er.Z, {
                                                  className:
                                                    "w-3 h-3 text-zinc-650",
                                                }),
                                                e.duration,
                                              ],
                                            }),
                                            (0, s.jsxs)("span", {
                                              className:
                                                "flex items-center gap-1",
                                              children: [
                                                (0, s.jsx)(en.Z, {
                                                  className:
                                                    "w-3 h-3 text-zinc-650",
                                                }),
                                                e.location,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("ul", {
                                      className:
                                        "space-y-2.5 text-xs text-zinc-400 leading-relaxed ".concat(
                                          a ? "md:text-right" : "md:text-left",
                                        ),
                                      children: e.points.map((e, t) =>
                                        (0, s.jsxs)(
                                          "li",
                                          {
                                            className:
                                              "flex items-start gap-2.5 ".concat(
                                                a
                                                  ? "md:flex-row-reverse"
                                                  : "flex-row",
                                              ),
                                            children: [
                                              (0, s.jsx)("span", {
                                                className:
                                                  "w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0 mt-1.5",
                                              }),
                                              (0, s.jsx)("span", {
                                                children: e,
                                              }),
                                            ],
                                          },
                                          t,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: "hidden md:block w-1/2",
                              }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var eo = a(1996),
        ec = a(981),
        ed = a(1451);
      let ex = [
        {
          id: "redis",
          title: "Redis OSS Contributor",
          subtitle: "Redis Python Client",
          duration: "2024",
          description:
            "Merged pull requests into the official Redis Python client, contributing bug fixes and improvements to a widely-used open source library.",
          tag: "OPEN SOURCE",
        },
        {
          id: "leetcode",
          title: "LeetCode 100 Days Badge",
          subtitle: "Algorithmic Consistency",
          duration: "2025",
          description:
            "Solved 150+ problems and earned the official 100 Days Badge for tackling complex data structure and algorithm challenges with sustained daily consistency.",
          tag: "ALGORITHMS",
        },
        {
          id: "mckinsey",
          title: "McKinsey Virtual Experience",
          subtitle: "Strategy Consulting Program",
          duration: "2025",
          description:
            "Completed the McKinsey & Company Virtual Experience Program, solving real-world consulting case problems using structured, data-driven approaches.",
          tag: "STRATEGY",
        },
        {
          id: "hacktober",
          title: "Hacktoberfest Contributor",
          subtitle: "Global Open Source Fest",
          duration: "2024",
          description:
            "Merged multiple verified pull requests into various global repositories, supporting open source software expansion.",
          tag: "OPEN SOURCE",
        },
        {
          id: "redis-py",
          title: "Merged PR — Redis (redis-py)",
          subtitle: "Redis Python Client",
          duration: "2025",
          description:
            "Authored and landed a merged pull request into redis-py, the official Redis client for Python, contributing to a widely-used production-grade open source library.",
          tag: "MERGED PR",
        },
        {
          id: "podman-container-libs",
          title: "Merged PR — Red Hat Podman",
          subtitle: "container-libs",
          duration: "2025",
          description:
            "Contributed a merged pull request to Red Hat's Podman container-libs, improving the container tooling ecosystem used across enterprise Linux workflows.",
          tag: "MERGED PR",
        },
        {
          id: "gemini",
          title: "Gemini Verified Student",
          subtitle: "Generative AI Scholar",
          duration: "2025",
          description:
            "Successfully qualified for the Gemini Verified Student Program, mastering LLM prompts, structural embeddings, and API pipelines.",
          tag: "ARTIFICIAL INTEL",
        },
        {
          id: "olympiad",
          title: "Zone Olympiad Qualifier",
          subtitle: "Mathematical Excellence",
          duration: "High School",
          description:
            "Ranked top-tier in zone-level competitive mathematics and logical reasoning olympiads.",
          tag: "MATHEMATICS",
        },
      ];
      function ep() {
        let [e, t] = (0, r.useState)("achievements"),
          [a, l] = (0, r.useState)(null);
        return (0, s.jsxs)("section", {
          id: "achievements",
          className:
            "",//"relative min-h-screen py-24 flex items-center justify-center overflow-hidden border-t border-zinc-900 bg-[#07070a]",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-blue-950/5 rounded-full filter blur-[150px] pointer-events-none",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-950/5 rounded-full filter blur-[150px] pointer-events-none",
            }),
            (0, s.jsxs)("div", {
              className:
                "w-[92%] max-w-6xl mx-auto flex flex-col space-y-12 z-10",
              /*children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col space-y-3 text-center items-center font-sans",
                  children: [
                    (0, s.jsx)(i.E.div, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      className:
                        "flex items-center space-x-1.5 text-[9px] text-zinc-400 border border-zinc-800 bg-zinc-900/40 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase",
                      children: (0, s.jsx)("span", {
                        children: "ACCOMPLISHMENTS",
                      }),
                    }),
                    (0, s.jsx)(i.E.h2, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { delay: 0.1 },
                      className:
                        "aurora-text heading-underline font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight",
                      children: "Honors & Contributions",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-zinc-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed",
                      children:
                        "A comprehensive registry key work achievements, strategic programs, and open-source contributions.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex justify-center space-x-2 font-sans select-none",
                  children: [
                    (0, s.jsx)("button", {
                      onClick: () => t("achievements"),
                      className:
                        "px-5 py-2 rounded-full text-[10px] tracking-wider border font-medium transition-all duration-300 ".concat(
                          "achievements" === e
                            ? "bg-white text-zinc-950 border-white shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                            : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white",
                        ),
                      children: "HONORS REGISTRY",
                    }),
                    (0, s.jsx)("button", {
                      onClick: () => t("github"),
                      className:
                        "px-5 py-2 rounded-full text-[10px] tracking-wider border font-medium transition-all duration-300 ".concat(
                          "github" === e
                            ? "bg-white text-zinc-950 border-white shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                            : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white",
                        ),
                      children: "GITHUB METRICS",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "pt-4 min-h-[400px]",
                  children: (0, s.jsx)(n.M, {
                    mode: "wait",
                    children:
                      "achievements" === e
                        ? (0, s.jsx)(
                            i.E.div,
                            {
                              initial: { opacity: 0, y: 15 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -15 },
                              transition: { duration: 0.35 },
                              className:
                                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans",
                              children: ex.map((e) => {
                                let t = a === e.id;
                                return (0, s.jsxs)(
                                  "div",
                                  {
                                    onClick: () => l(t ? null : e.id),
                                    className:
                                      "sheen card-glow p-6 rounded-2xl border border-zinc-800/80 bg-[#0d0d12]/75 backdrop-blur-md cursor-pointer select-none transition-all duration-300 flex flex-col justify-between hover:scale-[1.01] hover:border-zinc-700/80 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className: "flex flex-col space-y-3",
                                        children: [
                                          (0, s.jsxs)("div", {
                                            className:
                                              "flex justify-between items-start font-mono text-[8px] text-zinc-500",
                                            children: [
                                              (0, s.jsx)("span", {
                                                children: e.tag,
                                              }),
                                              (0, s.jsxs)("span", {
                                                className:
                                                  "flex items-center gap-1",
                                                children: [
                                                  (0, s.jsx)(er.Z, {
                                                    className: "w-2.5 h-2.5",
                                                  }),
                                                  e.duration,
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, s.jsxs)("div", {
                                            className:
                                              "flex flex-col space-y-1",
                                            children: [
                                              (0, s.jsx)("h3", {
                                                className:
                                                  "font-semibold text-sm sm:text-base text-white tracking-wide transition-colors group-hover:text-blue-400",
                                                children: e.title,
                                              }),
                                              (0, s.jsx)("span", {
                                                className:
                                                  "font-mono text-[9px] text-zinc-500 tracking-wider uppercase",
                                                children: e.subtitle,
                                              }),
                                            ],
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "text-zinc-400 text-xs leading-relaxed pt-1",
                                            children: e.description,
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "font-mono text-[8px] text-zinc-650 tracking-wider uppercase pt-4 block self-start mt-2",
                                        children: t
                                          ? "[COLLAPSE DETAILS]"
                                          : "[EXPAND METADATA]",
                                      }),
                                      (0, s.jsx)(n.M, {
                                        children:
                                          t &&
                                          (0, s.jsxs)(i.E.div, {
                                            initial: { height: 0, opacity: 0 },
                                            animate: {
                                              height: "auto",
                                              opacity: 1,
                                            },
                                            exit: { height: 0, opacity: 0 },
                                            transition: { duration: 0.25 },
                                            className:
                                              "overflow-hidden border-t border-zinc-900 mt-4 pt-4 text-[10px] text-zinc-400 font-mono space-y-2 leading-relaxed",
                                            children: [
                                              (0, s.jsx)("div", {
                                                children:
                                                  "> AUTH_STATUS: VERIFIED_SUCCESS",
                                              }),
                                              (0, s.jsxs)("div", {
                                                children: [
                                                  "> REGISTRY_NODE: ",
                                                  e.id.toUpperCase(),
                                                  "_DAT",
                                                ],
                                              }),
                                              (0, s.jsx)("div", {
                                                className:
                                                  "text-[10px] text-zinc-550 pt-1 font-sans",
                                                children:
                                                  "Record synchronized against official verified credentials and program indices.",
                                              }),
                                            ],
                                          }),
                                      }),
                                    ],
                                  },
                                  e.id,
                                );
                              }),
                            },
                            "achievements",
                          )
                        : (0, s.jsxs)(
                            i.E.div,
                            {
                              initial: { opacity: 0, y: 15 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -15 },
                              transition: { duration: 0.35 },
                              className: "w-full space-y-8 font-sans text-left",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "p-6 rounded-2xl border border-zinc-800 bg-[#0d0d12]/75 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col space-y-4",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-zinc-900 pb-3",
                                      children: [
                                        (0, s.jsxs)("span", {
                                          className:
                                            "font-mono text-[10px] text-zinc-300 font-bold tracking-wider flex items-center gap-1.5",
                                          children: [
                                            (0, s.jsx)(eo.Z, {
                                              className:
                                                "w-3.5 h-3.5 text-orange-500 animate-pulse",
                                            }),
                                            "CONTRIBUTION CORE // @Charlie21",
                                          ],
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "font-mono text-[9px] text-zinc-500 tracking-wider",
                                          children:
                                            "842+ COMMITS SYNCED THIS CYCLE",
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "overflow-x-auto scrollbar-none py-2 select-none",
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "grid grid-flow-col grid-rows-7 gap-[2px] min-w-[550px] w-full justify-center",
                                        children: (() => {
                                          let e = [];
                                          for (let t = 0; t < 371; t++) {
                                            let a = Math.random(),
                                              r =
                                                a > 0.88
                                                  ? 3
                                                  : a > 0.65
                                                    ? 2
                                                    : a > 0.45
                                                      ? 1
                                                      : 0,
                                              n = [
                                                "bg-zinc-900 border border-zinc-950",
                                                "bg-blue-900/20 border border-blue-900/10 shadow-[0_0_2px_rgba(59,130,246,0.1)]",
                                                "bg-blue-600/40 border border-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.2)]",
                                                "bg-indigo-500 border border-indigo-400/30 shadow-[0_0_8px_rgba(99,102,241,0.3)]",
                                              ];
                                            e.push(
                                              (0, s.jsx)(
                                                "div",
                                                {
                                                  className:
                                                    "w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-[1.5px] transition-all hover:scale-[1.3] ".concat(
                                                      n[r],
                                                    ),
                                                  title: "Day "
                                                    .concat(t, ": ")
                                                    .concat(2 * r, " commits"),
                                                },
                                                t,
                                              ),
                                            );
                                          }
                                          return e;
                                        })(),
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex justify-between items-center font-mono text-[8px] text-zinc-500 pt-2 border-t border-zinc-900",
                                      children: [
                                        (0, s.jsx)("span", {
                                          children: "JANUARY // PRESENT",
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex items-center space-x-1.5",
                                          children: [
                                            (0, s.jsx)("span", {
                                              children: "LESS",
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "w-[8px] h-[8px] bg-zinc-900 rounded-[1px]",
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "w-[8px] h-[8px] bg-blue-900/20 rounded-[1px]",
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "w-[8px] h-[8px] bg-blue-600/40 rounded-[1px]",
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "w-[8px] h-[8px] bg-indigo-500 rounded-[1px]",
                                            }),
                                            (0, s.jsx)("span", {
                                              children: "MORE",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "grid grid-cols-2 md:grid-cols-4 gap-4",
                                  children: [
                                    {
                                      label: "PULL REQUESTS",
                                      value: "100+",
                                      icon: (0, s.jsx)(ec.Z, {
                                        className: "w-4 h-4 text-blue-400",
                                      }),
                                    },
                                    {
                                      label: "COMMITS SYNCED",
                                      value: "842+",
                                      icon: (0, s.jsx)(eo.Z, {
                                        className: "w-4 h-4 text-orange-400",
                                      }),
                                    },
                                    {
                                      label: "REPOSITORIES",
                                      value: "12",
                                      icon: (0, s.jsx)(Q.Z, {
                                        className: "w-4 h-4 text-emerald-400",
                                      }),
                                    },
                                    {
                                      label: "ACADEMICS READ",
                                      value: "15+",
                                      icon: (0, s.jsx)(ed.Z, {
                                        className: "w-4 h-4 text-purple-400",
                                      }),
                                    },
                                  ].map((e, t) =>
                                    (0, s.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "sheen card-glow p-5 rounded-2xl border border-zinc-800 bg-[#0d0d12]/75 backdrop-blur-md hover:border-zinc-700/80 transition-all flex items-center space-x-4 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:scale-[1.02]",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "p-2.5 rounded-xl bg-zinc-900 border border-zinc-850",
                                            children: e.icon,
                                          }),
                                          (0, s.jsxs)("div", {
                                            className:
                                              "flex flex-col text-left font-sans",
                                            children: [
                                              (0, s.jsx)("span", {
                                                className:
                                                  "font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none",
                                                children: e.value,
                                              }),
                                              (0, s.jsx)("span", {
                                                className:
                                                  "font-mono text-[8px] text-zinc-500 tracking-wider mt-1.5",
                                                children: e.label,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                              ],
                            },
                            "github",
                          ),
                  }),
                }),
              ],*/
            }),
          ],
        });
      }
      var em = a(498),
        eh = a(1536),
        eu = a(4283);
      function eb() {
        let [e, t] = (0, r.useState)({ name: "", email: "", msg: "" }),
          [a, l] = (0, r.useState)(!1),
          [o, c] = (0, r.useState)(!1),
          [d, x] = (0, r.useState)([
            "Transceiver offline.",
            "Awaiting client input packets...",
          ]),
          [p, m] = (0, r.useState)(null),
          h = (e, t) => {
            (navigator.clipboard.writeText(e),
              m(t),
              x((e) => [
                ...e,
                "Metadata copied: [".concat(t.toUpperCase(), "]"),
              ]),
              setTimeout(() => m(null), 2e3));
          },
          b = (e) => {
            let { name: a, value: s } = e.target;
            t((e) => ({ ...e, [a]: s }));
          },
          f = async (a) => {
            if ((a.preventDefault(), !e.name || !e.email || !e.msg)) {
              x((e) => [...e, "ERROR: Missing packet fields."]);
              return;
            }
            (l(!0),
              x((e) => [
                ...e,
                "Resolving gateway endpoint...",
                "Encrypting packet payloads (AES-256)...",
              ]));
            try {
              if (
                (
                  await fetch("https://formspree.io/f/xwvzbpyj", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    body: JSON.stringify({
                      name: e.name,
                      email: e.email,
                      message: e.msg,
                    }),
                  })
                ).ok
              )
                (x((e) => [
                  ...e,
                  "Connecting to mail servers...",
                  "TRANSMISSION_COMPLETE: Message successfully sent!",
                ]),
                  t({ name: "", email: "", msg: "" }),
                  c(!0),
                  setTimeout(() => c(!1), 6e3));
              else throw Error("Transmission link disrupted.");
            } catch (e) {
              x((e) => [
                ...e,
                "ERROR: Transmission gateway failed.",
                "Please email coordinates manually.",
              ]);
            } finally {
              l(!1);
            }
          };
        return (0, s.jsxs)("section", {
          id: "contact",
          className:
            "relative min-h-screen py-24 flex items-center justify-center overflow-hidden border-t border-zinc-900 bg-[#07070a]",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-blue-950/5 rounded-full filter blur-[150px] pointer-events-none animate-pulse-slow",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-indigo-950/5 rounded-full filter blur-[150px] pointer-events-none animate-pulse-slow",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none",
            }),
            (0, s.jsxs)("div", {
              className:
                "w-[92%] max-w-6xl mx-auto flex flex-col space-y-12 z-10",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col space-y-3 text-center items-center font-sans",
                  children: [
                    (0, s.jsx)(i.E.div, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      className:
                        "flex items-center space-x-1.5 text-[9px] text-zinc-400 border border-zinc-800 bg-zinc-900/40 px-3.5 py-1 rounded-full tracking-widest font-mono uppercase",
                      children: (0, s.jsx)("span", { children: "CONTACT" }),
                    }),
                    (0, s.jsx)(i.E.h2, {
                      initial: { opacity: 0, y: 15 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { delay: 0.1 },
                      className:
                        "aurora-text heading-underline font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight",
                      children: "Establish Contact",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-zinc-400 text-xs sm:text-sm font-sans max-w-md mx-auto leading-relaxed",
                      children:
                        "Reach out via the encrypted gateway prompt or copy telemetry coordinates directly to your terminal.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans text-xs",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "lg:col-span-7 flex flex-col justify-between h-full w-full",
                      children: (0, s.jsxs)(i.E.div, {
                        initial: { opacity: 0, x: -30 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: !0 },
                        className:
                          "card-glow p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-[#0d0d12]/75 backdrop-blur-md flex-grow flex flex-col justify-between shadow-2xl w-full",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "flex justify-between items-center border-b border-zinc-900 pb-3 mb-6",
                            children: [
                              (0, s.jsxs)("span", {
                                className:
                                  "text-zinc-300 font-mono tracking-wider flex items-center gap-2",
                                children: [
                                  (0, s.jsx)(R.Z, {
                                    className: "w-4 h-4 text-zinc-400",
                                  }),
                                  "CONTACT_PROMPT v1.0",
                                ],
                              }),
                              (0, s.jsx)("span", {
                                className: "text-[9px] text-zinc-550 font-mono",
                                children: "SECURE_LINK: SSL_AES_256",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("form", {
                            onSubmit: f,
                            className: "space-y-4 flex-grow w-full",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col space-y-1.5 text-left w-full",
                                children: [
                                  (0, s.jsx)("label", {
                                    className:
                                      "text-[9px] text-zinc-500 font-mono tracking-wider uppercase",
                                    children: "[01] SENDER_NAME:",
                                  }),
                                  (0, s.jsx)("input", {
                                    type: "text",
                                    name: "name",
                                    required: !0,
                                    value: e.name,
                                    onChange: b,
                                    placeholder: "Enter your name...",
                                    className:
                                      "w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-750 focus:border-zinc-700 rounded-xl px-4 py-2.5 text-white placeholder-zinc-650 focus:outline-none transition-all",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col space-y-1.5 text-left w-full",
                                children: [
                                  (0, s.jsx)("label", {
                                    className:
                                      "text-[9px] text-zinc-500 font-mono tracking-wider uppercase",
                                    children: "[02] SENDER_EMAIL:",
                                  }),
                                  (0, s.jsx)("input", {
                                    type: "email",
                                    name: "email",
                                    required: !0,
                                    value: e.email,
                                    onChange: b,
                                    placeholder: "Enter your email address...",
                                    className:
                                      "w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-750 focus:border-zinc-700 rounded-xl px-4 py-2.5 text-white placeholder-zinc-650 focus:outline-none transition-all",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col space-y-1.5 text-left w-full",
                                children: [
                                  (0, s.jsx)("label", {
                                    className:
                                      "text-[9px] text-zinc-550 font-mono tracking-wider uppercase",
                                    children: "[03] PACKET_MESSAGE:",
                                  }),
                                  (0, s.jsx)("textarea", {
                                    name: "msg",
                                    rows: 4,
                                    required: !0,
                                    value: e.msg,
                                    onChange: b,
                                    placeholder:
                                      "Type your message details here...",
                                    className:
                                      "w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-750 focus:border-zinc-700 rounded-xl px-4 py-2.5 text-white placeholder-zinc-650 focus:outline-none transition-all resize-none",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("button", {
                                type: "submit",
                                disabled: a,
                                className:
                                  "w-full py-3 bg-white text-zinc-950 font-sans font-semibold tracking-wider uppercase rounded-xl transition-all hover:bg-zinc-200 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-2 shadow-[0_4px_12px_rgba(255,255,255,0.15)]",
                                children: [
                                  (0, s.jsx)(em.Z, {
                                    className: "w-4 h-4 text-zinc-950",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: a
                                      ? "TRANSMITTING..."
                                      : "TRANSMIT MESSAGE",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "mt-6 bg-zinc-950 border border-zinc-900 rounded-xl p-3.5 h-28 flex flex-col relative overflow-hidden",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "absolute top-1 right-2 text-[8px] text-zinc-600 font-mono",
                                children: "SYS_MONITOR",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "flex-grow overflow-y-auto space-y-1 pr-1 text-[10px] text-zinc-400 font-mono scrollbar-none select-none text-left",
                                children: d.map((e, t) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className: "flex",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: "text-zinc-600 mr-1.5",
                                          children: ">",
                                        }),
                                        (0, s.jsx)("span", { children: e }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "lg:col-span-5 flex flex-col justify-between h-full space-y-4 w-full",
                      children: [
                        (0, s.jsxs)(i.E.div, {
                          initial: { opacity: 0, x: 30 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: !0 },
                          className:
                            "sheen card-glow p-6 rounded-2xl border border-zinc-800 bg-[#0d0d12]/75 backdrop-blur-md flex-grow flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[260px] w-full",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "absolute inset-0 bg-cyber-grid-pattern bg-[size:15px_15px] opacity-[0.02]",
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "flex justify-between items-center border-b border-zinc-900 pb-3 z-10 relative",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "font-mono text-[9px] text-zinc-400 font-bold tracking-wider",
                                  children: "GEOMETRIC RADAR TELEMETRY",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-[8px] text-zinc-555 font-mono",
                                  children: "NODE: PRAYAGRAJ_IN",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "relative w-full h-[150px] flex items-center justify-center overflow-hidden my-4 z-10",
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "absolute w-[180px] h-[180px] rounded-full border border-zinc-800 flex items-center justify-center opacity-60",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "absolute w-[120px] h-[120px] rounded-full border border-zinc-850",
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "absolute w-[60px] h-[60px] rounded-full border border-zinc-900/60",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(i.E.div, {
                                  className:
                                    "absolute w-[120px] h-[1px] bg-gradient-to-r from-blue-500/80 to-transparent origin-left",
                                  style: { x: "0%", y: "0%" },
                                  animate: { rotate: 360 },
                                  transition: {
                                    repeat: 1 / 0,
                                    duration: 4,
                                    ease: "linear",
                                  },
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "absolute w-2 h-2 bg-blue-500 rounded-full animate-ping",
                                  style: {
                                    transform: "translate(20px, -15px)",
                                  },
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "absolute w-1.5 h-1.5 bg-indigo-500 rounded-full",
                                  style: {
                                    transform: "translate(20px, -15px)",
                                  },
                                }),
                                (0, s.jsxs)("span", {
                                  className:
                                    "absolute text-[8px] text-zinc-400 font-mono",
                                  style: {
                                    transform: "translate(60px, -30px)",
                                  },
                                  children: [
                                    "LAT_25.4358 ",
                                    (0, s.jsx)("br", {}),
                                    " LNG_81.8463",
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "border-t border-zinc-900 pt-3 flex flex-col space-y-1.5 text-left z-10 relative",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "font-mono text-[8px] text-zinc-500",
                                  children: "CURRENT_LOC:",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "font-semibold text-[11px] text-white tracking-wide uppercase",
                                  children: "Prayagraj, Uttar Pradesh, India",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "flex flex-col space-y-3 w-full",
                          children: [
                            {
                              label: "Email Address",
                              val: "viscra0101@gmail.com",
                            },
                            { label: "Phone", val: "+91-6307601115" },
                          ].map((e, t) =>
                            (0, s.jsxs)(
                              "div",
                              {
                                onClick: () => h(e.val, e.label),
                                className:
                                  "sheen card-glow p-3.5 border border-zinc-800 bg-[#0d0d12]/70 hover:border-zinc-700/80 rounded-xl flex items-center justify-between cursor-pointer transition-all hover:scale-[1.01] group w-full",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-col text-left space-y-1",
                                    children: [
                                      (0, s.jsx)("span", {
                                        className:
                                          "font-mono text-[8px] text-zinc-500 uppercase",
                                        children: e.label,
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "text-[11px] font-semibold text-white tracking-wide break-all max-w-[200px] sm:max-w-none",
                                        children: e.val,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("button", {
                                    className:
                                      "p-2 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white transition-colors",
                                    children:
                                      p === e.label
                                        ? (0, s.jsx)(eh.Z, {
                                            className:
                                              "w-3.5 h-3.5 text-emerald-400",
                                          })
                                        : (0, s.jsx)(eu.Z, {
                                            className: "w-3.5 h-3.5",
                                          }),
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(n.M, {
              children:
                o &&
                (0, s.jsxs)(i.E.div, {
                  initial: { opacity: 0, y: 50, scale: 0.95 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 20, scale: 0.95 },
                  transition: { type: "spring", damping: 25, stiffness: 350 },
                  className:
                    "fixed bottom-6 right-6 z-[99999] max-w-sm sm:max-w-md p-5 rounded-2xl border border-emerald-500/30 bg-[#0d0d12]/90 backdrop-blur-md shadow-[0_12px_40px_rgba(16,185,129,0.15)] flex gap-4 select-none font-sans text-left",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "p-2 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 self-start",
                      children: (0, s.jsx)(eh.Z, {
                        className: "w-5 h-5 animate-bounce",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex-grow space-y-1",
                      children: [
                        (0, s.jsx)("h4", {
                          className:
                            "font-bold text-sm text-white tracking-wide uppercase",
                          children: "TRANSMISSION COMPLETE",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-[10px] sm:text-xs text-zinc-400 leading-relaxed font-mono",
                          children:
                            "[SUCCESS]: Message successfully routed to communications array. Charlie will receive your coordinates shortly.",
                        }),
                      ],
                    }),
                    (0, s.jsx)("button", {
                      onClick: () => c(!1),
                      className:
                        "p-1 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 text-zinc-500 hover:text-white transition-all self-start",
                      children: (0, s.jsx)(u.Z, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
            }),
          ],
        });
      }
      var ef = a(8843),
        eg = a(8975);
      let ey = () =>
        (0, s.jsxs)("svg", {
          className:
            "w-[20px] h-[20px] text-white group-hover:text-blue-400 transition-colors duration-300",
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M6 8H26",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
            }),
            (0, s.jsx)("path", {
              d: "M16 8L8 24",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
            }),
            (0, s.jsx)("path", {
              d: "M16 8L24 24",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
            }),
            (0, s.jsx)("path", {
              d: "M11 18H21",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
            }),
          ],
        });
      function ev() {
        let e = (e) => {
          e.preventDefault();
          let t = document.getElementById("hero");
          t && t.scrollIntoView({ behavior: "smooth" });
        };
        return (0, s.jsxs)("footer", {
          className:
            "relative bg-[#07070a] border-t border-zinc-900 py-12 select-none overflow-hidden font-sans text-xs text-zinc-400",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none",
            }),
            (0, s.jsxs)("div", {
              className:
                "w-[92%] max-w-6xl mx-auto flex flex-col space-y-8 z-10 relative",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row items-center justify-between gap-6",
                  children: [
                    (0, s.jsxs)("a", {
                      href: "#hero",
                      onClick: e,
                      className:
                        "flex items-center space-x-2.5 text-white group",
                      children: [
                        (0, s.jsx)(ey, {}),
                        (0, s.jsxs)("span", {
                          className:
                            "font-sans font-extrabold tracking-tight text-xs sm:text-[13px] uppercase text-white group-hover:text-blue-400 transition-colors",
                          children: [
                            "Charlie",
                            (0, s.jsx)("span", {
                              className: "font-light text-zinc-550 ml-0.5",
                              children: "Smith",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("nav", {
                      className:
                        "flex flex-wrap items-center justify-center gap-4 sm:gap-6",
                      children: [
                        { label: "ABOUT", hash: "#about" },
                        { label: "TECH", hash: "#tech" },
                        { label: "PROJECTS", hash: "#projects" },
                        { label: "EXPERIENCE", hash: "#experience" },
                        { label: "CONTACT", hash: "#contact" },
                      ].map((e) =>
                        (0, s.jsxs)(
                          "a",
                          {
                            href: e.hash,
                            onClick: (t) => {
                              var a;
                              (t.preventDefault(),
                                null === (a = document.querySelector(e.hash)) ||
                                  void 0 === a ||
                                  a.scrollIntoView({ behavior: "smooth" }));
                            },
                            className: "hover:text-white transition-colors",
                            children: ["//", e.label],
                          },
                          e.label,
                        ),
                      ),
                    }),
                    (0, s.jsxs)("button", {
                      onClick: e,
                      className:
                        "px-4 py-2 border border-zinc-800 hover:border-zinc-700 text-zinc-350 hover:text-white rounded-full flex items-center space-x-2 text-[10px] tracking-wider uppercase transition-all hover:scale-[1.03]",
                      children: [
                        (0, s.jsx)(ef.Z, { className: "w-3.5 h-3.5" }),
                        (0, s.jsx)("span", { children: "SCROLL TO TOP" }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", { className: "w-full h-[1px] bg-zinc-900" }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] text-zinc-550",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        (0, s.jsx)("span", {
                          children: "\xa9 2026 Charlie Smith",
                        }),
                        (0, s.jsx)("span", { children: "|" }),
                        (0, s.jsx)("span", { children: "ALL RIGHTS RESERVED" }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex items-center space-x-1.5 text-zinc-400 bg-zinc-900/40 border border-zinc-800 px-3.5 py-1 rounded-full text-[9px] font-mono",
                      children: [
                        (0, s.jsx)(eg.Z, {
                          className: "w-3.5 h-3.5 text-emerald-500",
                        }),
                        (0, s.jsx)("span", { children: "SECURE CONNECTION" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var ew = a(3471);
      let ej = [
          { label: "\uD83D\uDE80 Who is Charlie?", query: "who is charlie" },
          { label: "\uD83D\uDCBB Core Tech Stack?", query: "tech stack" },
          {
            label: "\uD83D\uDD2C Research Internships?",
            query: "research internships",
          },
          { label: "\uD83D\uDCC2 Best Projects?", query: "projects" },
          { label: "\uD83D\uDCEC Contact Details?", query: "contact" },
        ],
        eN = {
          charlie:
            "Charlie Smith is a Software Engineer, Full Stack Developer, and AI Engineer pursuing his BTech in CSE (AI & Data Science) at IIIT Manipur. He specializes in designing robust full-stack applications, intelligent AI pipelines, and high-performance algorithms.",
          "tech stack":
            "My primary technical stack covers:\n• Frontend: React, Next.js (latest), TypeScript, Tailwind CSS\n• Backend: Node.js, Express.js, REST APIs\n• Databases: MongoDB, PostgreSQL, MySQL\n• Languages: JavaScript, Python, C++\n• Tools: Git, Docker, Linux, GCP, Firebase, Vercel",
          "research internships":
            "I have completed two prestigious research internships:\n1. IIIT Vadodara (2026 - Present): Focused on backend-driven data workflows, algorithm optimizations, and high-scalability indexing.\n2. NIT Warangal (Dec 2025 - Jan 2026): Designed system optimization models and conducted performance comparative analyses.",
          projects:
            "My flagship products include:\n1. CodeOrbit: Unified coding performance dashboard aggregating GitHub, LeetCode, etc., with Groq LLAMA-3 AI recommendations.\n2. ScholarSynth: AI Research Paper Analyzer leveraging Google Gemini APIs to summarize papers and compile quizzes.\n3. Food Redistribution: MERN platform coordinating surplus food collections for NGOs.",
          contact:
            "Let's build something extraordinary! You can reach me here:\n• Location: Prayagraj, India\n• Email: viscra0101@gmail.com\n(You can also use the contact form below or reach out via LinkedIn/GitHub links)",
          hire: "I am actively seeking Software Engineer, Full Stack Developer, and AI Engineer positions! I bring rich React skills, research-backed system thinking, and MERN database proficiency to high-growth teams.",
        };
      function eE() {
        let [e, t] = (0, r.useState)(!1),
          [a, l] = (0, r.useState)([
            {
              id: "welcome",
              sender: "ai",
              text: "Neural connection secure. I am ARUN_AI_BOT v1.0. How can I assist your investigation of Charlie's portfolio?",
            },
          ]),
          [o, c] = (0, r.useState)(""),
          [d, x] = (0, r.useState)(!1),
          p = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          p.current && (p.current.scrollTop = p.current.scrollHeight);
        }, [a, d]);
        let m = (e) => {
          if (!e.trim()) return;
          let t = Date.now().toString();
          (l((a) => [...a, { id: t, sender: "user", text: e }]),
            c(""),
            x(!0),
            setTimeout(() => {
              let t = e.toLowerCase(),
                a =
                  "Analysis complete. Query parameters processed, but no direct entry found. Try asking about 'tech stack', 'projects', 'research internships', or 'who is charlie'.";
              for (let [e, s] of Object.entries(eN))
                if (t.includes(e) || e.includes(t)) {
                  a = s;
                  break;
                }
              (l((e) => [
                ...e,
                { id: (Date.now() + 1).toString(), sender: "ai", text: a },
              ]),
                x(!1));
            }, 1e3));
        };
        return (0, s.jsxs)("div", {
          className: "fixed bottom-6 right-6 z-[999] font-mono",
          children: [
            (0, s.jsx)(n.M, {
              children:
                !e &&
                (0, s.jsx)(i.E.button, {
                  initial: { scale: 0, rotate: -90 },
                  animate: { scale: 1, rotate: 0 },
                  exit: { scale: 0, rotate: 90 },
                  onClick: () => t(!0),
                  className:
                    "w-14 h-14 rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple p-[2px] flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] focus:outline-none hover:scale-105 transition-transform",
                  children: (0, s.jsxs)("div", {
                    className:
                      "w-full h-full rounded-full bg-cyber-dark flex items-center justify-center relative overflow-hidden group",
                    children: [
                      (0, s.jsx)(ew.Z, {
                        className:
                          "w-6 h-6 text-cyber-cyan group-hover:text-cyber-purple transition-colors",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute inset-0 bg-cyber-cyan/15 animate-ping rounded-full pointer-events-none",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute -inset-2 bg-gradient-radial from-cyber-cyan/20 to-transparent animate-pulse",
                      }),
                    ],
                  }),
                }),
            }),
            (0, s.jsx)(n.M, {
              children:
                e &&
                (0, s.jsxs)(i.E.div, {
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                  transition: { type: "spring", damping: 25, stiffness: 220 },
                  className:
                    "w-[90vw] sm:w-[360px] h-[480px] rounded-xl border border-cyber-cyan/20 bg-cyber-dark/95 backdrop-blur-xl flex flex-col overflow-hidden shadow-2xl filter drop-shadow-[0_0_20px_rgba(0,240,255,0.15)] tech-corner",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none z-10",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "p-4 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 border-b border-cyber-cyan/20 flex items-center justify-between",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, s.jsx)(ew.Z, {
                                  className: "w-5 h-5 text-cyber-cyan",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "absolute bottom-0 right-0 w-2 h-2 rounded-full bg-cyber-emerald animate-pulse",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex flex-col",
                              children: [
                                (0, s.jsxs)("span", {
                                  className:
                                    "text-xs font-bold text-cyber-cyan tracking-wider flex items-center gap-1",
                                  children: [
                                    "ARUN_AI_BOT ",
                                    (0, s.jsx)(v.Z, {
                                      className: "w-3 h-3 animate-pulse",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("span", {
                                  className: "text-[9px] text-cyber-cyan/60",
                                  children: "SYS_STATUS: READY",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("button", {
                          onClick: () => t(!1),
                          className:
                            "p-1 rounded-md text-cyber-cyan/60 hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors",
                          children: (0, s.jsx)(u.Z, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      ref: p,
                      className:
                        "flex-1 p-4 overflow-y-auto space-y-4 scrollbar-none text-xs",
                      children: [
                        a.map((e) =>
                          (0, s.jsx)(
                            "div",
                            {
                              className: "flex ".concat(
                                "user" === e.sender
                                  ? "justify-end"
                                  : "justify-start",
                              ),
                              children: (0, s.jsxs)("div", {
                                className:
                                  "max-w-[85%] rounded-lg p-2.5 whitespace-pre-line leading-relaxed ".concat(
                                    "user" === e.sender
                                      ? "bg-cyber-cyan/10 border border-cyber-cyan/30 text-white rounded-tr-none"
                                      : "bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-cyan rounded-tl-none",
                                  ),
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "block text-[8px] text-white/40 mb-1",
                                    children:
                                      "user" === e.sender
                                        ? "INVESTIGATOR//"
                                        : "ARUN_AI//",
                                  }),
                                  e.text,
                                ],
                              }),
                            },
                            e.id,
                          ),
                        ),
                        d &&
                          (0, s.jsx)("div", {
                            className: "flex justify-start",
                            children: (0, s.jsxs)("div", {
                              className:
                                "max-w-[85%] rounded-lg p-2.5 bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-cyan rounded-tl-none flex items-center space-x-2",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "text-[8px] text-white/40",
                                  children: "COMPUTING_RESPONSE",
                                }),
                                (0, s.jsxs)("span", {
                                  className: "flex space-x-1",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-bounce",
                                      style: { animationDelay: "0ms" },
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-bounce",
                                      style: { animationDelay: "150ms" },
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-bounce",
                                      style: { animationDelay: "300ms" },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "px-4 py-2 border-t border-cyber-cyan/10 bg-cyber-black/40 flex items-center space-x-2 overflow-x-auto scrollbar-none select-none",
                      children: ej.map((e) =>
                        (0, s.jsx)(
                          "button",
                          {
                            onClick: () => m(e.query),
                            className:
                              "flex-shrink-0 px-2 py-1 text-[9px] rounded-full border border-cyber-cyan/30 hover:border-cyber-cyan text-cyber-cyan bg-cyber-cyan/5 hover:bg-cyber-cyan/15 transition-all",
                            children: e.label,
                          },
                          e.query,
                        ),
                      ),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "p-3 border-t border-cyber-cyan/20 bg-cyber-black/70 flex items-center space-x-2",
                      children: [
                        (0, s.jsx)("input", {
                          type: "text",
                          value: o,
                          onChange: (e) => c(e.target.value),
                          onKeyDown: (e) => {
                            "Enter" === e.key && m(o);
                          },
                          placeholder: "Ask ARUN_AI_BOT about Charlie...",
                          className:
                            "flex-1 bg-cyber-dark border border-cyber-cyan/20 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-cyber-cyan transition-colors placeholder:text-white/20 font-mono",
                        }),
                        (0, s.jsx)("button", {
                          onClick: () => m(o),
                          className:
                            "p-2 rounded-md bg-cyber-cyan/10 border border-cyber-cyan/30 hover:bg-cyber-cyan hover:text-cyber-black text-cyber-cyan transition-all",
                          children: (0, s.jsx)(em.Z, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                  ],
                }),
            }),
          ],
        });
      }
      function ez() {
        let [e, t] = (0, r.useState)(!0);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(o, { onComplete: () => t(!1) }),
            (0, s.jsx)(n.M, {
              children:
                !e &&
                (0, s.jsxs)(i.E.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  className:
                    "relative min-h-screen bg-cyber-black text-foreground selection:bg-cyber-cyan/30",
                  children: [
                    (0, s.jsx)(x, {}),
                    (0, s.jsx)(m, {}),
                    (0, s.jsx)(h, {}),
                    (0, s.jsx)(y, {}),
                    (0, s.jsxs)("main", {
                      className: "relative w-full overflow-x-hidden",
                      children: [
                        (0, s.jsx)(A, {}),
                        (0, s.jsx)(Y, {}),
                        (0, s.jsx)(K, {}),
                        (0, s.jsx)(et, {}),
                        (0, s.jsx)(el, {}),
                        (0, s.jsx)(ep, {}),
                        (0, s.jsx)(eb, {}),
                      ],
                    }),
                    (0, s.jsx)(eE, {}),
                    (0, s.jsx)(ev, {}),
                  ],
                }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    (e.O(0, [753, 971, 117, 744], function () {
      return e((e.s = 8350));
    }),
      (_N_E = e.O()));
  },
]);
