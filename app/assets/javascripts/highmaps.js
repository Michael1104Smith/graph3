/*
 Highmaps JS v1.1.9 (2015-10-07)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function() {
    function w() {
        var a, b = arguments,
            c, d = {},
            e = function(a, b) {
                var c, d;
                typeof a !== "object" && (a = {});
                for (d in b) b.hasOwnProperty(d) && (c = b[d], a[d] = c && typeof c === "object" && Object.prototype.toString.call(c) !== "[object Array]" && d !== "renderTo" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]);
                return a
            };
        b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }

    function D(a, b) {
        return parseInt(a, b || 10)
    }

    function Aa(a) {
        return typeof a === "string"
    }

    function ha(a) {
        return a &&
            typeof a === "object"
    }

    function Ca(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function qa(a) {
        return typeof a === "number"
    }

    function Pa(a) {
        return G.log(a) / G.LN10
    }

    function na(a) {
        return G.pow(10, a)
    }

    function wa(a, b) {
        for (var c = a.length; c--;)
            if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }

    function x(a) {
        return a !== r && a !== null
    }

    function N(a, b, c) {
        var d, e;
        if (Aa(b)) x(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (x(b) && ha(b))
            for (d in b) a.setAttribute(d, b[d]);
        return e
    }

    function ra(a) {
        return Ca(a) ?
            a : [a]
    }

    function K(a, b) {
        if (sa && !fa && b && b.opacity !== r) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        q(a.style, b)
    }

    function ca(a, b, c, d, e) {
        a = C.createElement(a);
        b && q(a, b);
        e && K(a, {
            padding: 0,
            border: S,
            margin: 0
        });
        c && K(a, c);
        d && d.appendChild(a);
        return a
    }

    function $(a, b) {
        var c = function() {
            return r
        };
        c.prototype = new a;
        q(c.prototype, b);
        return c
    }

    function Da(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function Ja(a, b) {
        for (var c = "{", d = !1, e, f, g, h, i, j = [];
            (c = a.indexOf(c)) !== -1;) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                i = g.length;
                e = b;
                for (h = 0; h < i; h++) e = e[g[h]];
                if (f.length) f = f.join(":"), g = /\.([0-9])/, h = J.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e !== null && (e = B.numberFormat(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : ""))) : e = Ka(f, e)
            }
            j.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        j.push(a);
        return j.join("")
    }

    function tb(a, b, c, d, e) {
        var f, g = a,
            c = p(c, 1);
        f = a / c;
        b || (b = [1, 2, 2.5, 5, 10], d === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
        for (d = 0; d < b.length; d++)
            if (g = b[d], e && g * c >= a || !e && f <= (b[d] +
                    (b[d + 1] || b[d])) / 2) break;
        g *= c;
        return g
    }

    function ib(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return d === 0 ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++) delete a[e].ss_i
    }

    function Qa(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function Ea(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function $a(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }

    function La(a) {
        ab || (ab = ca(Fa));
        a && ab.appendChild(a);
        ab.innerHTML = ""
    }

    function da(a,
        b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw c;
        H.console && console.log(c)
    }

    function xa(a, b) {
        return parseFloat(a.toPrecision(b || 14))
    }

    function Ra(a, b) {
        b.renderer.globalAnimation = p(a, b.animation)
    }

    function ub() {
        var a = J.global,
            b = a.useUTC,
            c = b ? "getUTC" : "get",
            d = b ? "setUTC" : "set";
        Ga = a.Date || window.Date;
        vb = b && a.timezoneOffset;
        jb = b && a.getTimezoneOffset;
        wb = c + "Minutes";
        xb = c + "Hours";
        yb = c + "Day";
        zb = c + "Date";
        kb = c + "Month";
        lb = c + "FullYear";
        Ab = d + "Month";
        Bb = d + "FullYear"
    }

    function R() {}

    function Ma(a,
        b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        !c && !d && this.addLabel()
    }

    function Cb(a, b) {
        var c, d, e, f, g = !1,
            h = a.x,
            i = a.y;
        for (c = 0, d = b.length - 1; c < b.length; d = c++) e = b[c][1] > i, f = b[d][1] > i, e !== f && h < (b[d][0] - b[c][0]) * (i - b[c][1]) / (b[d][1] - b[c][1]) + b[c][0] && (g = !g);
        return g
    }

    function Db(a, b, c, d, e, f, g, h) {
        return ["M", a + e, b, "L", a + c - f, b, "C", a + c - f / 2, b, a + c, b + f / 2, a + c, b + f, "L", a + c, b + d - g, "C", a + c, b + d - g / 2, a + c - g / 2, b + d, a + c - g, b + d, "L", a + h, b + d, "C", a + h / 2, b + d, a, b + d - h / 2, a, b + d - h, "L", a, b + e, "C", a, b + e / 2, a + e / 2, b, a + e, b, "Z"]
    }
    var r, C = document,
        H = window,
        G = Math,
        A = G.round,
        ga = G.floor,
        ta = G.ceil,
        t = G.max,
        E = G.min,
        O = G.abs,
        ja = G.cos,
        oa = G.sin,
        mb = G.PI,
        ka = mb * 2 / 360,
        ya = navigator.userAgent,
        Eb = H.opera,
        sa = /(msie|trident|edge)/i.test(ya) && !Eb,
        bb = C.documentMode === 8,
        cb = !sa && /AppleWebKit/.test(ya),
        Ha = /Firefox/.test(ya),
        Fb = /(Mobile|Android|Windows Phone)/.test(ya),
        Ba = "http://www.w3.org/2000/svg",
        fa = !!C.createElementNS && !!C.createElementNS(Ba, "svg").createSVGRect,
        Lb = Ha && parseInt(ya.split("Firefox/")[1], 10) < 4,
        ia = !fa && !sa && !!C.createElement("canvas").getContext,
        Na, Sa, Gb = {},
        nb = 0,
        ab, J, Ka, ob, db, T = function() {
            return r
        },
        X = [],
        Ta = 0,
        Fa = "div",
        S = "none",
        Mb = /^[0-9]+$/,
        eb = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
        Nb = "stroke-width",
        Ga, vb, jb, wb, xb, yb, zb, kb, lb, Ab, Bb, v = {},
        B;
    B = H.Highcharts = H.Highcharts ? da(16, !0) : {};
    B.seriesTypes = v;
    var q = B.extend = function(a, b) {
            var c;
            a || (a = {});
            for (c in b) a[c] = b[c];
            return a
        },
        p = B.pick = function() {
            var a = arguments,
                b, c, d = a.length;
            for (b = 0; b < d; b++)
                if (c = a[b], c !== r && c !== null) return c
        },
        ea = B.wrap = function(a, b, c) {
            var d = a[b];
            a[b] = function() {
                var a =
                    Array.prototype.slice.call(arguments);
                a.unshift(d);
                return c.apply(this, a)
            }
        };
    Ka = function(a, b, c) {
        if (!x(b) || isNaN(b)) return J.lang.invalidDate || "";
        var a = p(a, "%Y-%m-%d %H:%M:%S"),
            d = new Ga(b - (jb && jb(b) || vb || 0) * 6E4),
            e, f = d[xb](),
            g = d[yb](),
            h = d[zb](),
            i = d[kb](),
            j = d[lb](),
            k = J.lang,
            l = k.weekdays,
            d = q({
                a: l[g].substr(0, 3),
                A: l[g],
                d: Da(h),
                e: h,
                w: g,
                b: k.shortMonths[i],
                B: k.months[i],
                m: Da(i + 1),
                y: j.toString().substr(2, 2),
                Y: j,
                H: Da(f),
                k: f,
                I: Da(f % 12 || 12),
                l: f % 12 || 12,
                M: Da(d[wb]()),
                p: f < 12 ? "AM" : "PM",
                P: f < 12 ? "am" : "pm",
                S: Da(d.getSeconds()),
                L: Da(A(b % 1E3), 3)
            }, B.dateFormats);
        for (e in d)
            for (; a.indexOf("%" + e) !== -1;) a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    db = {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 24192E5,
        year: 314496E5
    };
    B.numberFormat = function(a, b, c, d) {
        var e = J.lang,
            a = +a || 0,
            f = b === -1 ? E((a.toString().split(".")[1] || "").length, 20) : isNaN(b = O(b)) ? 2 : b,
            b = c === void 0 ? e.decimalPoint : c,
            d = d === void 0 ? e.thousandsSep : d,
            e = a < 0 ? "-" : "",
            c = String(D(a = O(a).toFixed(f))),
            g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + O(a - c).toFixed(f).slice(2) : "")
    };
    ob = {
        init: function(a, b, c) {
            var b = b || "",
                d = a.shift,
                e = b.indexOf("C") > -1,
                f = e ? 7 : 3,
                g, b = b.split(" "),
                c = [].concat(c),
                h, i, j = function(a) {
                    for (g = a.length; g--;) a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
                };
            e && (j(b), j(c));
            a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length)
                for (; d--;) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)
                for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(i));
            return [b, c]
        },
        step: function(a, b, c, d) {
            var e = [],
                f = a.length;
            if (c === 1) e = d;
            else if (f === b.length && c < 1)
                for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d;
            else e = b;
            return e
        }
    };
    (function(a) {
        H.HighchartsAdapter = H.HighchartsAdapter || a && {
            init: function(b) {
                var c = a.fx;
                a.extend(a.easing, {
                    easeOutQuad: function(a, b, c, g, h) {
                        return -g * (b /=
                            h) * (b - 2) + c
                    }
                });
                a.each(["cur", "_default", "width", "height", "opacity"], function(b, e) {
                    var f = c.step,
                        g;
                    e === "cur" ? f = c.prototype : e === "_default" && a.Tween && (f = a.Tween.propHooks[e], e = "set");
                    (g = f[e]) && (f[e] = function(a) {
                        var c, a = b ? a : this;
                        if (a.prop !== "align") return c = a.elem, c.attr ? c.attr(a.prop, e === "cur" ? r : a.now) : g.apply(this, arguments)
                    })
                });
                ea(a.cssHooks.opacity, "get", function(a, b, c) {
                    return b.attr ? b.opacity || 0 : a.call(this, b, c)
                });
                this.addAnimSetter("d", function(a) {
                    var c = a.elem,
                        f;
                    if (!a.started) f = b.init(c, c.d, c.toD),
                        a.start = f[0], a.end = f[1], a.started = !0;
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                });
                this.each = Array.prototype.forEach ? function(a, b) {
                    return Array.prototype.forEach.call(a, b)
                } : function(a, b) {
                    var c, g = a.length;
                    for (c = 0; c < g; c++)
                        if (b.call(a[c], a[c], c, a) === !1) return c
                };
                a.fn.highcharts = function() {
                    var a = "Chart",
                        b = arguments,
                        c, g;
                    if (this[0]) {
                        Aa(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1));
                        c = b[0];
                        if (c !== r) c.chart = c.chart || {}, c.chart.renderTo = this[0], new B[a](c, b[1]), g = this;
                        c === r && (g = X[N(this[0], "data-highcharts-chart")])
                    }
                    return g
                }
            },
            addAnimSetter: function(b, c) {
                a.Tween ? a.Tween.propHooks[b] = {
                    set: c
                } : a.fx.step[b] = c
            },
            getScript: a.getScript,
            inArray: a.inArray,
            adapterRun: function(b, c) {
                return a(b)[c]()
            },
            grep: a.grep,
            map: function(a, c) {
                for (var d = [], e = 0, f = a.length; e < f; e++) d[e] = c.call(a[e], a[e], e, a);
                return d
            },
            offset: function(b) {
                return a(b).offset()
            },
            addEvent: function(b, c, d) {
                a(b).bind(c, d)
            },
            removeEvent: function(b, c, d) {
                var e = C.removeEventListener ? "removeEventListener" : "detachEvent";
                C[e] && b && !b[e] && (b[e] = function() {});
                a(b).unbind(c, d)
            },
            fireEvent: function(b,
                c, d, e) {
                var f = a.Event(c),
                    g = "detached" + c,
                    h;
                !sa && d && (delete d.layerX, delete d.layerY, delete d.returnValue);
                q(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each(["preventDefault", "stopPropagation"], function(a, b) {
                    var c = f[b];
                    f[b] = function() {
                        try {
                            c.call(f)
                        } catch (a) {
                            b === "preventDefault" && (h = !0)
                        }
                    }
                });
                a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null);
                e && !f.isDefaultPrevented() && !h && e(f)
            },
            washMouseEvent: function(a) {
                var c = a.originalEvent || a;
                if (c.pageX === r) c.pageX = a.pageX, c.pageY = a.pageY;
                return c
            },
            animate: function(b, c, d) {
                var e =
                    a(b);
                if (!b.style) b.style = {};
                if (c.d) b.toD = c.d, c.d = 1;
                e.stop();
                c.opacity !== r && b.attr && (c.opacity += "px");
                b.hasAnim = 1;
                e.animate(c, d)
            },
            stop: function(b) {
                b.hasAnim && a(b).stop()
            }
        }
    })(H.jQuery);
    var M = H.HighchartsAdapter,
        U = M || {};
    M && M.init.call(M, ob);
    var fb = U.adapterRun,
        Ob = U.getScript,
        Ua = U.inArray,
        o = B.each = U.each,
        pb = U.grep,
        Pb = U.offset,
        Oa = U.map,
        L = U.addEvent,
        aa = U.removeEvent,
        I = U.fireEvent,
        Qb = U.washMouseEvent,
        gb = U.animate,
        Va = U.stop;
    J = {
        colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/maps/1.1.9/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/maps/1.1.9/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    align: "center",
                    formatter: function() {
                        return this.y === null ? "" : B.numberFormat(this.y, -1)
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: 0.25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: 0.5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: fa,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Fb ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var V = J.plotOptions,
        U = V.line;
    ub();
    var Rb = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        Sb = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
        Tb = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        W = function(a) {
            var b = [],
                c, d;
            (function(a) {
                a && a.stops ? d = Oa(a.stops, function(a) {
                        return W(a[1])
                    }) :
                    (c = Rb.exec(a)) ? b = [D(c[1]), D(c[2]), D(c[3]), parseFloat(c[4], 10)] : (c = Sb.exec(a)) ? b = [D(c[1], 16), D(c[2], 16), D(c[3], 16), 1] : (c = Tb.exec(a)) && (b = [D(c[1]), D(c[2]), D(c[3]), 1])
            })(a);
            return {
                get: function(c) {
                    var f;
                    d ? (f = w(a), f.stops = [].concat(f.stops), o(d, function(a, b) {
                        f.stops[b] = [f.stops[b][0], a.get(c)]
                    })) : f = b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a;
                    return f
                },
                brighten: function(a) {
                    if (d) o(d, function(b) {
                        b.brighten(a)
                    });
                    else if (qa(a) && a !== 0) {
                        var c;
                        for (c = 0; c < 3; c++) b[c] +=
                            D(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255)
                    }
                    return this
                },
                rgba: b,
                setOpacity: function(a) {
                    b[3] = a;
                    return this
                },
                raw: a
            }
        };
    R.prototype = {
        opacity: 1,
        textProps: "fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
        init: function(a, b) {
            this.element = b === "span" ? ca(b) : C.createElementNS(Ba, b);
            this.renderer = a
        },
        animate: function(a, b, c) {
            b = p(b, this.renderer.globalAnimation, !0);
            Va(this);
            if (b) {
                b = w(b, {});
                if (c) b.complete = c;
                gb(this, a, b)
            } else this.attr(a, null, c);
            return this
        },
        colorGradient: function(a, b, c) {
            var d = this.renderer,
                e, f, g, h, i, j, k, l, n, m, u, s = [];
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                i = d.gradients;
                k = a.stops;
                m = c.radialReference;
                Ca(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                f === "radialGradient" && m && !x(g.gradientUnits) && (h = g, g = w(g, d.getRadialAttr(m, h), {
                    gradientUnits: "userSpaceOnUse"
                }));
                for (u in g) u !== "id" && s.push(u, g[u]);
                for (u in k) s.push(k[u]);
                s = s.join(",");
                i[s] ? a = i[s].attr("id") :
                    (g.id = a = "highcharts-" + nb++, i[s] = j = d.createElement(f).attr(g).add(d.defs), j.radAttr = h, j.stops = [], o(k, function(a) {
                        a[1].indexOf("rgba") === 0 ? (e = W(a[1]), l = e.get("rgb"), n = e.get("a")) : (l = a[1], n = 1);
                        a = d.createElement("stop").attr({
                            offset: a[0],
                            "stop-color": l,
                            "stop-opacity": n
                        }).add(j);
                        j.stops.push(a)
                    }));
                c.setAttribute(b, "url(" + d.url + "#" + a + ")");
                c.gradient = s
            }
        },
        applyTextShadow: function(a) {
            var b = this.element,
                c, d = a.indexOf("contrast") !== -1,
                e = {},
                f = this.renderer.forExport,
                g = f || b.style.textShadow !== r && !sa;
            if (d) e.textShadow =
                a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill));
            if (cb || f) e.textRendering = "geometricPrecision";
            g ? this.css(e) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")), o(a.split(/\s?,\s?/g), function(a) {
                var d = b.firstChild,
                    e, f, a = a.split(" ");
                e = a[a.length - 1];
                (f = a[a.length - 2]) && o(c, function(a, c) {
                    var g;
                    c === 0 && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), c === null && b.setAttribute("y", 0));
                    g = a.cloneNode(1);
                    N(g, {
                        "class": "highcharts-text-shadow",
                        fill: e,
                        stroke: e,
                        "stroke-opacity": 1 / t(D(f), 3),
                        "stroke-width": f,
                        "stroke-linejoin": "round"
                    });
                    b.insertBefore(g, d)
                })
            }))
        },
        attr: function(a, b, c) {
            var d, e = this.element,
                f, g = this,
                h;
            typeof a === "string" && b !== r && (d = a, a = {}, a[d] = b);
            if (typeof a === "string") g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (d in a) {
                    b = a[d];
                    h = !1;
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0);
                    if (this.rotation && (d === "x" || d === "y")) this.doTransform = !0;
                    h ||
                        (this[d + "Setter"] || this._defaultSetter).call(this, b, d, e);
                    this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b)
                }
                if (this.doTransform) this.updateTransform(), this.doTransform = !1
            }
            c && c();
            return g
        },
        updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--;) c[d].setAttribute(a, a === "height" ? t(b - (c[d].cutHeight || 0), 0) : a === "d" ? this.d : b)
        },
        addClass: function(a) {
            var b = this.element,
                c = N(b, "class") || "";
            c.indexOf(a) === -1 && N(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function(a) {
            var b =
                this;
            o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(c) {
                b[c] = p(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
            })
        },
        clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : S)
        },
        crisp: function(a) {
            var b, c = {},
                d, e = a.strokeWidth || this.strokeWidth || 0;
            d = A(e) % 2 / 2;
            a.x = ga(a.x || this.x || 0) + d;
            a.y = ga(a.y || this.y || 0) + d;
            a.width = ga((a.width || this.width || 0) - 2 * d);
            a.height = ga((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !==
                a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function(a) {
            var b = this.styles,
                c = {},
                d = this.element,
                e, f, g = "";
            e = !b;
            if (a && a.color) a.fill = a.color;
            if (b)
                for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && d.nodeName.toLowerCase() === "text" && D(a.width) || this.textWidth;
                b && (a = q(b, c));
                this.styles = a;
                e && (ia || !fa && this.renderer.forExport) && delete a.width;
                if (sa && !fa) K(this.element, a);
                else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    N(d, "style", g)
                }
                e &&
                    this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function(a, b) {
            var c = this,
                d = c.element;
            Sa && a === "click" ? (d.ontouchstart = function(a) {
                c.touchEventFired = Ga.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function(a) {
                (ya.indexOf("Android") === -1 || Ga.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a)
            }) : d["on" + a] = b;
            return this
        },
        setRadialReference: function(a) {
            var b = this.renderer.gradients[this.element.gradient];
            this.element.radialReference = a;
            b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
            return this
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function() {
            var a = this.translateX || 0,
                b = this.translateY || 0,
                c = this.scaleX,
                d = this.scaleY,
                e = this.inverted,
                f = this.rotation,
                g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (x(c) || x(d)) && a.push("scale(" + p(c, 1) + " " + p(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate = b, !c || Aa(c)) this.alignTo = d = c || "renderer", wa(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = p(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x ||
                0);
            g = (c.y || 0) + (a.y || 0);
            if (d === "right" || d === "center") f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d];
            h[b ? "translateX" : "x"] = A(f);
            if (e === "bottom" || e === "middle") g += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[e] || 1);
            h[b ? "translateY" : "y"] = A(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function(a) {
            var b, c = this.renderer,
                d, e = this.rotation,
                f = this.element,
                g = this.styles,
                h = e * ka;
            d = this.textStr;
            var i, j = f.style,
                k, l;
            d !== r && (l = ["", e || 0, g && g.fontSize, f.style.width].join(","),
                l = d === "" || Mb.test(d) ? "num:" + d.toString().length + l : d + l);
            l && !a && (b = c.cache[l]);
            if (!b) {
                if (f.namespaceURI === Ba || c.forExport) {
                    try {
                        k = this.fakeTS && function(a) {
                            o(f.querySelectorAll(".highcharts-text-shadow"), function(b) {
                                b.style.display = a
                            })
                        }, Ha && j.textShadow ? (i = j.textShadow, j.textShadow = "") : k && k(S), b = f.getBBox ? q({}, f.getBBox()) : {
                            width: f.offsetWidth,
                            height: f.offsetHeight
                        }, i ? j.textShadow = i : k && k("")
                    } catch (n) {}
                    if (!b || b.width < 0) b = {
                        width: 0,
                        height: 0
                    }
                } else b = this.htmlGetBBox();
                if (c.isSVG) {
                    a = b.width;
                    d = b.height;
                    if (sa &&
                        g && g.fontSize === "11px" && d.toPrecision(3) === "16.9") b.height = d = 14;
                    if (e) b.width = O(d * oa(h)) + O(a * ja(h)), b.height = O(d * ja(h)) + O(a * oa(h))
                }
                l && (c.cache[l] = b)
            }
            return b
        },
        show: function(a) {
            return this.attr({
                visibility: a ? "inherit" : "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(a) {
            var b = this;
            b.animate({
                opacity: 0
            }, {
                duration: a || 150,
                complete: function() {
                    b.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(a) {
            var b = this.renderer,
                c = this.element,
                d;
            if (a) this.parentGroup = a;
            this.parentInverted = a && a.inverted;
            this.textStr !== void 0 && b.buildText(this);
            this.added = !0;
            if (!a || a.handleZ || this.zIndex) d = this.zIndexSetter();
            d || (a ? a.element : b.box).appendChild(c);
            if (this.onAdd) this.onAdd();
            return this
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function() {
            var a = this,
                b = a.element || {},
                c = a.shadows,
                d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup,
                e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            Va(a);
            if (a.clipPath) a.clipPath = a.clipPath.destroy();
            if (a.stops) {
                for (f =
                    0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && o(c, function(b) {
                    a.safeRemoveChild(b)
                }); d && d.div && d.div.childNodes.length === 0;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && wa(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f, g = this.element,
                h, i, j, k;
            if (a) {
                i = p(a.width, 3);
                j = (a.opacity || 0.15) / i;
                k = this.parentInverted ? "(-1,-1)" : "(" + p(a.offsetX, 1) + ", " + p(a.offsetY, 1) + ")";
                for (e = 1; e <= i; e++) {
                    f =
                        g.cloneNode(0);
                    h = i * 2 + 1 - 2 * e;
                    N(f, {
                        isShadow: "true",
                        stroke: a.color || "black",
                        "stroke-opacity": j * e,
                        "stroke-width": h,
                        transform: "translate" + k,
                        fill: S
                    });
                    if (c) N(f, "height", t(N(f, "height") - h, 0)), f.cutHeight = h;
                    b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);
                    d.push(f)
                }
                this.shadows = d
            }
            return this
        },
        xGetter: function(a) {
            this.element.nodeName === "circle" && (a = {
                x: "cx",
                y: "cy"
            }[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function(a) {
            a = p(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) &&
                (a = parseFloat(a));
            return a
        },
        dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a
        },
        dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;) a[b] = D(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN",
                    "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[a])
        },
        opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = C.createElementNS(Ba, "title"), this.element.appendChild(b));
            b.appendChild(C.createTextNode(String(p(a), "").replace(/<[^>]*>/g, "")))
        },
        textSetter: function(a) {
            if (a !== this.textStr) delete this.bBox,
                this.textStr = a, this.added && this.renderer.buildText(this)
        },
        fillSetter: function(a, b, c) {
            typeof a === "string" ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        visibilitySetter: function(a, b, c) {
            a === "inherit" ? c.removeAttribute(b) : c.setAttribute(b, a)
        },
        zIndexSetter: function(a, b) {
            var c = this.renderer,
                d = this.parentGroup,
                c = (d || c).element || c.box,
                e, f, g = this.element,
                h;
            e = this.added;
            var i;
            x(a) && (g.setAttribute(b, a), a = +a, this[b] === a && (e = !1), this[b] = a);
            if (e) {
                if ((a = this.zIndex) && d) d.handleZ = !0;
                d = c.childNodes;
                for (i = 0; i <
                    d.length && !h; i++)
                    if (e = d[i], f = N(e, "zIndex"), e !== g && (D(f) > a || !x(a) && x(f))) c.insertBefore(g, e), h = !0;
                h || c.appendChild(g)
            }
            return h
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }
    };
    R.prototype.yGetter = R.prototype.xGetter;
    R.prototype.translateXSetter = R.prototype.translateYSetter = R.prototype.rotationSetter = R.prototype.verticalAlignSetter = R.prototype.scaleXSetter = R.prototype.scaleYSetter = function(a, b) {
        this[b] = a;
        this.doTransform = !0
    };
    R.prototype["stroke-widthSetter"] = R.prototype.strokeSetter = function(a,
        b, c) {
        this[b] = a;
        if (this.stroke && this["stroke-width"]) this.strokeWidth = this["stroke-width"], R.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0;
        else if (b === "stroke-width" && a === 0 && this.hasStroke) c.removeAttribute("stroke"), this.hasStroke = !1
    };
    var la = function() {
        this.init.apply(this, arguments)
    };
    la.prototype = {
        Element: R,
        init: function(a, b, c, d, e, f) {
            var g = location,
                h, d = this.createElement("svg").attr({
                    version: "1.1"
                }).css(this.getStyle(d));
            h = d.element;
            a.appendChild(h);
            a.innerHTML.indexOf("xmlns") === -1 && N(h, "xmlns", Ba);
            this.isSVG = !0;
            this.box = h;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (Ha || cb) && C.getElementsByTagName("base").length ? g.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(C.createTextNode("Created with Highmaps 1.1.9"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = f;
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b,
                c, !1);
            var i;
            if (Ha && a.getBoundingClientRect) this.subPixelFix = b = function() {
                K(a, {
                    left: 0,
                    top: 0
                });
                i = a.getBoundingClientRect();
                K(a, {
                    left: ta(i.left) - i.left + "px",
                    top: ta(i.top) - i.top + "px"
                })
            }, b(), L(H, "resize", b)
        },
        getStyle: function(a) {
            return this.style = q({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            $a(this.gradients || {});
            this.gradients = null;
            if (a) this.defs = a.destroy();
            this.subPixelFix && aa(H, "resize", this.subPixelFix);
            return this.alignedObjects = null
        },
        createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        draw: function() {},
        getRadialAttr: function(a, b) {
            return {
                cx: a[0] - a[2] / 2 + b.cx * a[2],
                cy: a[1] - a[2] / 2 + b.cy * a[2],
                r: b.r * a[2]
            }
        },
        buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = p(a.textStr, "").toString(), f = e.indexOf("<") !== -1, g = b.childNodes, h, i, j = N(b, "x"), k = a.styles, l = a.textWidth, n = k && k.lineHeight,
                    m = k && k.textShadow, u = k && k.textOverflow === "ellipsis", s = g.length, P = l && !a.added && this.box, y = function(a) {
                        return n ? D(n) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : k && k.fontSize || c.style.fontSize || 12, a).h
                    }, z = function(a) {
                        return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                    }; s--;) b.removeChild(g[s]);
            !f && !m && !u && e.indexOf(" ") === -1 ? b.appendChild(C.createTextNode(z(e))) : (h = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, P && P.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g,
                    '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e[e.length - 1] === "" && e.pop(), o(e, function(e, f) {
                    var g, n = 0,
                        e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                    g = e.split("|||");
                    o(g, function(e) {
                        if (e !== "" || g.length === 1) {
                            var m = {},
                                s = C.createElementNS(Ba, "tspan"),
                                o;
                            h.test(e) && (o = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), N(s, "style", o));
                            i.test(e) && !d && (N(s, "onclick", 'location.href="' + e.match(i)[1] + '"'),
                                K(s, {
                                    cursor: "pointer"
                                }));
                            e = z(e.replace(/<(.|\n)*?>/g, "") || " ");
                            if (e !== " ") {
                                s.appendChild(C.createTextNode(e));
                                if (n) m.dx = 0;
                                else if (f && j !== null) m.x = j;
                                N(s, m);
                                b.appendChild(s);
                                !n && f && (!fa && d && K(s, {
                                    display: "block"
                                }), N(s, "dy", y(s)));
                                if (l) {
                                    for (var m = e.replace(/([^\^])-/g, "$1- ").split(" "), p = g.length > 1 || f || m.length > 1 && k.whiteSpace !== "nowrap", P, ba, r, x = [], q = y(s), t = 1, A = a.rotation, w = e, v = w.length;
                                        (p || u) && (m.length || x.length);) a.rotation = 0, P = a.getBBox(!0), r = P.width, !fa && c.forExport && (r = c.measureSpanWidth(s.firstChild.data,
                                        a.styles)), P = r > l, ba === void 0 && (ba = P), u && ba ? (v /= 2, w === "" || !P && v < 0.5 ? m = [] : (P && (ba = !0), w = e.substring(0, w.length + (P ? -1 : 1) * ta(v)), m = [w + (l > 3 ? "\u2026" : "")], s.removeChild(s.firstChild))) : !P || m.length === 1 ? (m = x, x = [], m.length && (t++, s = C.createElementNS(Ba, "tspan"), N(s, {
                                        dy: q,
                                        x: j
                                    }), o && N(s, "style", o), b.appendChild(s)), r > l && (l = r)) : (s.removeChild(s.firstChild), x.unshift(m.pop())), m.length && s.appendChild(C.createTextNode(m.join(" ").replace(/- /g, "-")));
                                    ba && a.attr("title", a.textStr);
                                    a.rotation = A
                                }
                                n++
                            }
                        }
                    })
                }), P && P.removeChild(b),
                m && a.applyTextShadow && a.applyTextShadow(m))
        },
        getContrast: function(a) {
            a = W(a).rgba;
            return a[0] + a[1] + a[2] > 384 ? "#000000" : "#FFFFFF"
        },
        button: function(a, b, c, d, e, f, g, h, i) {
            var j = this.label(a, b, c, i, null, null, null, null, "button"),
                k = 0,
                l, n, m, u, s, o, a = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                e = w({
                    "stroke-width": 1,
                    stroke: "#CCCCCC",
                    fill: {
                        linearGradient: a,
                        stops: [
                            [0, "#FEFEFE"],
                            [1, "#F6F6F6"]
                        ]
                    },
                    r: 2,
                    padding: 5,
                    style: {
                        color: "black"
                    }
                }, e);
            m = e.style;
            delete e.style;
            f = w(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, f);
            u = f.style;
            delete f.style;
            g = w(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, g);
            s = g.style;
            delete g.style;
            h = w(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            o = h.style;
            delete h.style;
            L(j.element, sa ? "mouseover" : "mouseenter", function() {
                k !== 3 && j.attr(f).css(u)
            });
            L(j.element, sa ? "mouseout" : "mouseleave", function() {
                k !== 3 && (l = [e, f, g][k], n = [m, u, s][k], j.attr(l).css(n))
            });
            j.setState = function(a) {
                (j.state = k = a) ? a === 2 ? j.attr(g).css(s) : a === 3 && j.attr(h).css(o): j.attr(e).css(m)
            };
            return j.on("click", function(a) {
                k !==
                    3 && d.call(j, a)
            }).attr(e).css(q({
                cursor: "default"
            }, m))
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = A(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = A(a[2]) + b % 2 / 2);
            return a
        },
        path: function(a) {
            var b = {
                fill: S
            };
            Ca(a) ? b.d = a : ha(a) && q(b, a);
            return this.createElement("path").attr(b)
        },
        circle: function(a, b, c) {
            a = ha(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            b = this.createElement("circle");
            b.xSetter = function(a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function(a) {
                this.element.setAttribute("cy", a)
            };
            return b.attr(a)
        },
        arc: function(a, b, c, d, e,
            f) {
            if (ha(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            });
            a.r = c;
            return a
        },
        rect: function(a, b, c, d, e, f) {
            var e = ha(a) ? a.r : e,
                g = this.createElement("rect"),
                a = ha(a) ? a : a === r ? {} : {
                    x: a,
                    y: b,
                    width: t(c, 0),
                    height: t(d, 0)
                };
            if (f !== r) a.strokeWidth = f, a = g.crisp(a);
            if (e) a.r = e;
            g.rSetter = function(a) {
                N(this.element, {
                    rx: a,
                    ry: a
                })
            };
            return g.attr(a)
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[p(c, !0) ? "animate" : "attr"]({
                    width: a,
                    height: b
                }); e--;) d[e].align()
        },
        g: function(a) {
            var b = this.createElement("g");
            return x(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: S
            };
            arguments.length > 1 && q(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function(a, b, c, d, e, f) {
            var g, h = this.symbols[a],
                h = h && h(A(b),
                    A(c), d, e, f),
                i = /^url\((.*?)\)$/,
                j, k;
            if (h) g = this.path(h), q(g, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && q(g, f);
            else if (i.test(a)) k = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(A((d - b[0]) / 2), A((e - b[1]) / 2)))
            }, j = a.match(i)[1], a = Gb[j] || f && f.width && f.height && [f.width, f.height], g = this.image(j).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? k(g, a) : (g.attr({
                width: 0,
                height: 0
            }), ca("img", {
                onload: function() {
                    this.width === 0 && (K(this, {
                        position: "absolute",
                        top: "-999em"
                    }), document.body.appendChild(this));
                    k(g, Gb[j] = [this.width, this.height]);
                    this.parentNode && this.parentNode.removeChild(this)
                },
                src: j
            }));
            return g
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = 0.166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            },
            square: function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            },
            "triangle-down": function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            },
            diamond: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L",
                    a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"
                ]
            },
            arc: function(a, b, c, d, e) {
                var f = e.start,
                    c = e.r || c || d,
                    g = e.end - 0.001,
                    d = e.innerR,
                    h = e.open,
                    i = ja(f),
                    j = oa(f),
                    k = ja(g),
                    g = oa(g),
                    e = e.end - f < mb ? 0 : 1;
                return ["M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"]
            },
            callout: function(a, b, c, d, e) {
                var f = E(e && e.r || 0, c, d),
                    g = f + 6,
                    h = e && e.anchorX,
                    e = e && e.anchorY,
                    i;
                i = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b +
                    f, "C", a, b, a, b, a + f, b
                ];
                h && h > c && e > b + g && e < b + d - g ? i.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && h < 0 && e > b + g && e < b + d - g ? i.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? i.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && e < 0 && h > a + g && h < a + c - g && i.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return i
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + nb++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs),
                a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            a.count = 0;
            return a
        },
        text: function(a,
            b, c, d) {
            var e = ia || !fa && this.forExport,
                f = {};
            if (d && (this.allowHTML || !this.forExport)) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            if (c) f.y = Math.round(c);
            if (a || a === 0) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            if (!d) a.xSetter = function(a, b, c) {
                var d = c.getElementsByTagName("tspan"),
                    e, f = c.getAttribute(b),
                    n;
                for (n = 0; n < d.length; n++) e = d[n], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a)
            };
            return a
        },
        fontMetrics: function(a, b) {
            var c, d, a = a || this.style.fontSize;
            !a &&
                b && H.getComputedStyle && (b = b.element || b, a = (c = H.getComputedStyle(b, "")) && c.fontSize);
            a = /px/.test(a) ? D(a) : /em/.test(a) ? parseFloat(a) * 12 : 12;
            c = a < 24 ? a + 3 : A(a * 1.2);
            d = A(c * 0.8);
            return {
                h: c,
                b: d,
                f: a
            }
        },
        rotCorr: function(a, b, c) {
            var d = a;
            b && c && (d = t(d * ja(b * ka), 4));
            return {
                x: -a / 3 * oa(b * ka),
                y: d
            }
        },
        label: function(a, b, c, d, e, f, g, h, i) {
            function j() {
                var a, b;
                a = u.element.style;
                p = (t === void 0 || ua === void 0 || m.styles.textAlign) && x(u.textStr) && u.getBBox();
                m.width = (t || p.width || 0) + 2 * z + ba;
                m.height = (ua || p.height || 0) + 2 * z;
                C = z + n.fontMetrics(a &&
                    a.fontSize, u).b;
                if (E) {
                    if (!s) a = A(-y * z) + B, b = (h ? -C : 0) + B, m.box = s = d ? n.symbol(d, a, b, m.width, m.height, F) : n.rect(a, b, m.width, m.height, 0, F[Nb]), s.isImg || s.attr("fill", S), s.add(m);
                    s.isImg || s.attr(q({
                        width: A(m.width),
                        height: A(m.height)
                    }, F));
                    F = null
                }
            }

            function k() {
                var a = m.styles,
                    a = a && a.textAlign,
                    b = ba + z * (1 - y),
                    c;
                c = h ? 0 : C;
                if (x(t) && p && (a === "center" || a === "right")) b += {
                    center: 0.5,
                    right: 1
                }[a] * (t - p.width);
                if (b !== u.x || c !== u.y) u.attr("x", b), c !== r && u.attr("y", c);
                u.x = b;
                u.y = c
            }

            function l(a, b) {
                s ? s.attr(a, b) : F[a] = b
            }
            var n = this,
                m =
                n.g(i),
                u = n.text("", 0, 0, g).attr({
                    zIndex: 1
                }),
                s, p, y = 0,
                z = 3,
                ba = 0,
                t, ua, qb, v, B = 0,
                F = {},
                C, E;
            m.onAdd = function() {
                u.add(m);
                m.attr({
                    text: a || a === 0 ? a : "",
                    x: b,
                    y: c
                });
                s && x(e) && m.attr({
                    anchorX: e,
                    anchorY: f
                })
            };
            m.widthSetter = function(a) {
                t = a
            };
            m.heightSetter = function(a) {
                ua = a
            };
            m.paddingSetter = function(a) {
                if (x(a) && a !== z) z = m.padding = a, k()
            };
            m.paddingLeftSetter = function(a) {
                x(a) && a !== ba && (ba = a, k())
            };
            m.alignSetter = function(a) {
                y = {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[a]
            };
            m.textSetter = function(a) {
                a !== r && u.textSetter(a);
                j();
                k()
            };
            m["stroke-widthSetter"] =
                function(a, b) {
                    a && (E = !0);
                    B = a % 2 / 2;
                    l(b, a)
                };
            m.strokeSetter = m.fillSetter = m.rSetter = function(a, b) {
                b === "fill" && a && (E = !0);
                l(b, a)
            };
            m.anchorXSetter = function(a, b) {
                e = a;
                l(b, A(a) - B - qb)
            };
            m.anchorYSetter = function(a, b) {
                f = a;
                l(b, a - v)
            };
            m.xSetter = function(a) {
                m.x = a;
                y && (a -= y * ((t || p.width) + z));
                qb = A(a);
                m.attr("translateX", qb)
            };
            m.ySetter = function(a) {
                v = m.y = A(a);
                m.attr("translateY", v)
            };
            var D = m.css;
            return q(m, {
                css: function(a) {
                    if (a) {
                        var b = {},
                            a = w(a);
                        o(m.textProps, function(c) {
                            a[c] !== r && (b[c] = a[c], delete a[c])
                        });
                        u.css(b)
                    }
                    return D.call(m,
                        a)
                },
                getBBox: function() {
                    return {
                        width: p.width + 2 * z,
                        height: p.height + 2 * z,
                        x: p.x - z,
                        y: p.y - z
                    }
                },
                shadow: function(a) {
                    s && s.shadow(a);
                    return m
                },
                destroy: function() {
                    aa(m.element, "mouseenter");
                    aa(m.element, "mouseleave");
                    u && (u = u.destroy());
                    s && (s = s.destroy());
                    R.prototype.destroy.call(m);
                    m = n = j = k = l = null
                }
            })
        }
    };
    Na = la;
    q(R.prototype, {
        htmlCss: function(a) {
            var b = this.element;
            if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b, this.updateTransform();
            if (a && a.textOverflow === "ellipsis") a.whiteSpace = "nowrap", a.overflow =
                "hidden";
            this.styles = q(this.styles, a);
            K(this.element, a);
            return this
        },
        htmlGetBBox: function() {
            var a = this.element;
            if (a.nodeName === "text") a.style.position = "absolute";
            return {
                x: a.offsetLeft,
                y: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            }
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var a = this.renderer,
                    b = this.element,
                    c = this.translateX || 0,
                    d = this.translateY || 0,
                    e = this.x || 0,
                    f = this.y || 0,
                    g = this.textAlign || "left",
                    h = {
                        left: 0,
                        center: 0.5,
                        right: 1
                    }[g],
                    i = this.shadows,
                    j = this.styles;
                K(b, {
                    marginLeft: c,
                    marginTop: d
                });
                i && o(i, function(a) {
                    K(a, {
                        marginLeft: c + 1,
                        marginTop: d + 1
                    })
                });
                this.inverted && o(b.childNodes, function(c) {
                    a.invertChild(c, b)
                });
                if (b.tagName === "SPAN") {
                    var k = this.rotation,
                        l, n = D(this.textWidth),
                        m = [k, g, b.innerHTML, this.textWidth, this.textAlign].join(",");
                    if (m !== this.cTT) {
                        l = a.fontMetrics(b.style.fontSize).b;
                        x(k) && this.setSpanRotation(k, h, l);
                        i = p(this.elemWidth, b.offsetWidth);
                        if (i > n && /[ \-]/.test(b.textContent || b.innerText)) K(b, {
                            width: n + "px",
                            display: "block",
                            whiteSpace: j && j.whiteSpace || "normal"
                        }), i = n;
                        this.getSpanCorrection(i,
                            l, h, k, g)
                    }
                    K(b, {
                        left: e + (this.xCorr || 0) + "px",
                        top: f + (this.yCorr || 0) + "px"
                    });
                    if (cb) l = b.offsetHeight;
                    this.cTT = m
                }
            } else this.alignOnAdd = !0
        },
        setSpanRotation: function(a, b, c) {
            var d = {},
                e = sa ? "-ms-transform" : cb ? "-webkit-transform" : Ha ? "MozTransform" : Eb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (Ha ? "Origin" : "-origin")] = d.transformOrigin = b * 100 + "% " + c + "px";
            K(this.element, d)
        },
        getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }
    });
    q(la.prototype, {
        html: function(a, b, c) {
            var d = this.createElement("span"),
                e = d.element,
                f = d.renderer;
            d.textSetter = function(a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML = this.textStr = a;
                d.htmlUpdateTransform()
            };
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function(a, b) {
                b === "align" && (b = "textAlign");
                d[b] = a;
                d.htmlUpdateTransform()
            };
            d.attr({
                text: a,
                x: A(b),
                y: A(c)
            }).css({
                position: "absolute",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            e.style.whiteSpace = "nowrap";
            d.css = d.htmlCss;
            if (f.isSVG) d.add = function(a) {
                var b, c = f.box.parentNode,
                    j = [];
                if (this.parentGroup =
                    a) {
                    if (b = a.div, !b) {
                        for (; a;) j.push(a), a = a.parentGroup;
                        o(j.reverse(), function(a) {
                            var d, e = N(a.element, "class");
                            e && (e = {
                                className: e
                            });
                            b = a.div = a.div || ca(Fa, e, {
                                position: "absolute",
                                left: (a.translateX || 0) + "px",
                                top: (a.translateY || 0) + "px"
                            }, b || c);
                            d = b.style;
                            q(a, {
                                translateXSetter: function(b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                },
                                translateYSetter: function(b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }
                            });
                            o(["opacity", "visibility"], function(b) {
                                ea(a, b + "Setter", function(a, b, c, e) {
                                    a.call(this, b, c, e);
                                    d[c] = b
                                })
                            })
                        })
                    }
                } else b =
                    c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d
            };
            return d
        }
    });
    var Wa;
    if (!fa && !ia) M = {
        init: function(a, b) {
            var c = ["<", b, ' filled="f" stroked="f"'],
                d = ["position: ", "absolute", ";"],
                e = b === Fa;
            (b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");
            d.push("visibility: ", e ? "hidden" : "visible");
            c.push(' style="', d.join(""), '"/>');
            if (b) c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = ca(c);
            this.renderer = a
        },
        add: function(a) {
            var b = this.renderer,
                c = this.element,
                d = b.box,
                d = a ? a.element || a : d;
            a && a.inverted && b.invertChild(c, d);
            d.appendChild(c);
            this.added = !0;
            this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
            if (this.onAdd) this.onAdd();
            return this
        },
        updateTransform: R.prototype.htmlUpdateTransform,
        setSpanRotation: function() {
            var a = this.rotation,
                b = ja(a * ka),
                c = oa(a * ka);
            K(this.element, {
                filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : S
            })
        },
        getSpanCorrection: function(a, b, c, d,
            e) {
            var f = d ? ja(d * ka) : 1,
                g = d ? oa(d * ka) : 0,
                h = p(this.elemHeight, this.element.offsetHeight),
                i;
            this.xCorr = f < 0 && -a;
            this.yCorr = g < 0 && -h;
            i = f * g < 0;
            this.xCorr += g * b * (i ? 1 - c : c);
            this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);
            e && e !== "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), K(this.element, {
                textAlign: e
            }))
        },
        pathToVML: function(a) {
            for (var b = a.length, c = []; b--;)
                if (qa(a[b])) c[b] = A(a[b] * 10) - 5;
                else if (a[b] === "Z") c[b] = "x";
            else if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at")) c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1),
                c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1);
            return c.join(" ") || "x"
        },
        clip: function(a) {
            var b = this,
                c;
            a ? (c = a.members, wa(c, b), c.push(b), b.destroyClip = function() {
                wa(c, b)
            }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {
                clip: bb ? "inherit" : "rect(auto)"
            });
            return b.css(a)
        },
        css: R.prototype.htmlCss,
        safeRemoveChild: function(a) {
            a.parentNode && La(a)
        },
        destroy: function() {
            this.destroyClip && this.destroyClip();
            return R.prototype.destroy.apply(this)
        },
        on: function(a, b) {
            this.element["on" + a] = function() {
                var a = H.event;
                a.target =
                    a.srcElement;
                b(a)
            };
            return this
        },
        cutOffPath: function(a, b) {
            var c, a = a.split(/[ ,]/);
            c = a.length;
            if (c === 9 || c === 11) a[c - 4] = a[c - 2] = D(a[c - 2]) - 10 * b;
            return a.join(" ")
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f = this.element,
                g = this.renderer,
                h, i = f.style,
                j, k = f.path,
                l, n, m, u;
            k && typeof k.value !== "string" && (k = "x");
            n = k;
            if (a) {
                m = p(a.width, 3);
                u = (a.opacity || 0.15) / m;
                for (e = 1; e <= 3; e++) {
                    l = m * 2 + 1 - 2 * e;
                    c && (n = this.cutOffPath(k.value, l + 0.5));
                    j = ['<shape isShadow="true" strokeweight="', l, '" filled="false" path="', n, '" coordsize="10 10" style="',
                        f.style.cssText, '" />'
                    ];
                    h = ca(g.prepVML(j), null, {
                        left: D(i.left) + p(a.offsetX, 1),
                        top: D(i.top) + p(a.offsetY, 1)
                    });
                    if (c) h.cutOff = l + 1;
                    j = ['<stroke color="', a.color || "black", '" opacity="', u * e, '"/>'];
                    ca(g.prepVML(j), null, null, h);
                    b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
                    d.push(h)
                }
                this.shadows = d
            }
            return this
        },
        updateShadows: T,
        setAttr: function(a, b) {
            bb ? this.element[a] = b : this.element.setAttribute(a, b)
        },
        classSetter: function(a) {
            this.element.className = a
        },
        dashstyleSetter: function(a, b, c) {
            (c.getElementsByTagName("stroke")[0] ||
                ca(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";
            this[b] = a
        },
        dSetter: function(a, b, c) {
            var d = this.shadows,
                a = a || [];
            this.d = a.join && a.join(" ");
            c.path = a = this.pathToVML(a);
            if (d)
                for (c = d.length; c--;) d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
            this.setAttr(b, a)
        },
        fillSetter: function(a, b, c) {
            var d = c.nodeName;
            if (d === "SPAN") c.style.color = a;
            else if (d !== "IMG") c.filled = a !== S, this.setAttr("fillcolor", this.renderer.color(a, c, b, this))
        },
        opacitySetter: T,
        rotationSetter: function(a, b, c) {
            c = c.style;
            this[b] = c[b] = a;
            c.left = -A(oa(a * ka) + 1) + "px";
            c.top = A(ja(a * ka)) + "px"
        },
        strokeSetter: function(a, b, c) {
            this.setAttr("strokecolor", this.renderer.color(a, c, b))
        },
        "stroke-widthSetter": function(a, b, c) {
            c.stroked = !!a;
            this[b] = a;
            qa(a) && (a += "px");
            this.setAttr("strokeweight", a)
        },
        titleSetter: function(a, b) {
            this.setAttr(b, a)
        },
        visibilitySetter: function(a, b, c) {
            a === "inherit" && (a = "visible");
            this.shadows && o(this.shadows, function(c) {
                c.style[b] = a
            });
            c.nodeName === "DIV" && (a = a === "hidden" ? "-999em" : 0, bb || (c.style[b] = a ? "visible" : "hidden"),
                b = "top");
            c.style[b] = a
        },
        xSetter: function(a, b, c) {
            this[b] = a;
            b === "x" ? b = "left" : b === "y" && (b = "top");
            this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a
        },
        zIndexSetter: function(a, b, c) {
            c.style[b] = a
        }
    }, B.VMLElement = M = $(R, M), M.prototype.ySetter = M.prototype.widthSetter = M.prototype.heightSetter = M.prototype.xSetter, M = {
        Element: M,
        isIE8: ya.indexOf("MSIE 8.0") > -1,
        init: function(a, b, c, d) {
            var e;
            this.alignedObjects = [];
            d = this.createElement(Fa).css(q(this.getStyle(d), {
                position: "relative"
            }));
            e = d.element;
            a.appendChild(d.element);
            this.isVML = !0;
            this.box = e;
            this.boxWrapper = d;
            this.cache = {};
            this.setSize(b, c, !1);
            if (!C.namespaces.hcv) {
                C.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                try {
                    C.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                } catch (f) {
                    C.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                }
            }
        },
        isHidden: function() {
            return !this.box.offsetWidth
        },
        clipRect: function(a,
            b, c, d) {
            var e = this.createElement(),
                f = ha(a);
            return q(e, {
                members: [],
                count: 0,
                left: (f ? a.x : a) + 1,
                top: (f ? a.y : b) + 1,
                width: (f ? a.width : c) - 1,
                height: (f ? a.height : d) - 1,
                getCSS: function(a) {
                    var b = a.element,
                        c = b.nodeName,
                        a = a.inverted,
                        d = this.top - (c === "shape" ? b.offsetTop : 0),
                        e = this.left,
                        b = e + this.width,
                        f = d + this.height,
                        d = {
                            clip: "rect(" + A(a ? e : d) + "px," + A(a ? f : b) + "px," + A(a ? b : f) + "px," + A(a ? d : e) + "px)"
                        };
                    !a && bb && c === "DIV" && q(d, {
                        width: b + "px",
                        height: f + "px"
                    });
                    return d
                },
                updateClipping: function() {
                    o(e.members, function(a) {
                        a.element && a.css(e.getCSS(a))
                    })
                }
            })
        },
        color: function(a, b, c, d) {
            var e = this,
                f, g = /^rgba/,
                h, i, j = S;
            a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
            if (i) {
                var k, l, n = a.linearGradient || a.radialGradient,
                    m, u, s, p, y, z = "",
                    a = a.stops,
                    ba, r = [],
                    ua = function() {
                        h = ['<fill colors="' + r.join(",") + '" opacity="', s, '" o:opacity2="', u, '" type="', i, '" ', z, 'focus="100%" method="any" />'];
                        ca(e.prepVML(h), null, null, b)
                    };
                m = a[0];
                ba = a[a.length - 1];
                m[0] > 0 && a.unshift([0, m[1]]);
                ba[0] < 1 && a.push([1, ba[1]]);
                o(a, function(a, b) {
                    g.test(a[1]) ? (f = W(a[1]), k = f.get("rgb"),
                        l = f.get("a")) : (k = a[1], l = 1);
                    r.push(a[0] * 100 + "% " + k);
                    b ? (s = l, p = k) : (u = l, y = k)
                });
                if (c === "fill")
                    if (i === "gradient") c = n.x1 || n[0] || 0, a = n.y1 || n[1] || 0, m = n.x2 || n[2] || 0, n = n.y2 || n[3] || 0, z = 'angle="' + (90 - G.atan((n - a) / (m - c)) * 180 / mb) + '"', ua();
                    else {
                        var j = n.r,
                            t = j * 2,
                            x = j * 2,
                            q = n.cx,
                            A = n.cy,
                            w = b.radialReference,
                            v, j = function() {
                                w && (v = d.getBBox(), q += (w[0] - v.x) / v.width - 0.5, A += (w[1] - v.y) / v.height - 0.5, t *= w[2] / v.width, x *= w[2] / v.height);
                                z = 'src="' + J.global.VMLRadialGradientURL + '" size="' + t + "," + x + '" origin="0.5,0.5" position="' + q + "," +
                                    A + '" color2="' + y + '" ';
                                ua()
                            };
                        d.added ? j() : d.onAdd = j;
                        j = p
                    } else j = k
            } else if (g.test(a) && b.tagName !== "IMG") f = W(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], ca(this.prepVML(h), null, null, b), j = f.get("rgb");
            else {
                j = b.getElementsByTagName(c);
                if (j.length) j[0].opacity = 1, j[0].type = "solid";
                j = a
            }
            return j
        },
        prepVML: function(a) {
            var b = this.isIE8,
                a = a.join("");
            b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') :
                a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
            return a
        },
        text: la.prototype.html,
        path: function(a) {
            var b = {
                coordsize: "10 10"
            };
            Ca(a) ? b.d = a : ha(a) && q(b, a);
            return this.createElement("shape").attr(b)
        },
        circle: function(a, b, c) {
            var d = this.symbol("circle");
            if (ha(a)) c = a.r, b = a.y, a = a.x;
            d.isCircle = !0;
            d.r = c;
            return d.attr({
                x: a,
                y: b
            })
        },
        g: function(a) {
            var b;
            a && (b = {
                className: "highcharts-" + a,
                "class": "highcharts-" + a
            });
            return this.createElement(Fa).attr(b)
        },
        image: function(a,
            b, c, d, e) {
            var f = this.createElement("img").attr({
                src: a
            });
            arguments.length > 1 && f.attr({
                x: b,
                y: c,
                width: d,
                height: e
            });
            return f
        },
        createElement: function(a) {
            return a === "rect" ? this.symbol(a) : la.prototype.createElement.call(this, a)
        },
        invertChild: function(a, b) {
            var c = this,
                d = b.style,
                e = a.tagName === "IMG" && a.style;
            K(a, {
                flip: "x",
                left: D(d.width) - (e ? D(e.top) : 1),
                top: D(d.height) - (e ? D(e.left) : 1),
                rotation: -90
            });
            o(a.childNodes, function(b) {
                c.invertChild(b, a)
            })
        },
        symbols: {
            arc: function(a, b, c, d, e) {
                var f = e.start,
                    g = e.end,
                    h = e.r || c ||
                    d,
                    c = e.innerR,
                    d = ja(f),
                    i = oa(f),
                    j = ja(g),
                    k = oa(g);
                if (g - f === 0) return ["x"];
                f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k];
                e.open && !c && f.push("e", "M", a, b);
                f.push("at", a - c, b - c, a + c, b + c, a + c * j, b + c * k, a + c * d, b + c * i, "x", "e");
                f.isArc = !0;
                return f
            },
            circle: function(a, b, c, d, e) {
                e && (c = d = 2 * e.r);
                e && e.isCircle && (a -= c / 2, b -= d / 2);
                return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
            },
            rect: function(a, b, c, d, e) {
                return la.prototype.symbols[!x(e) || !e.r ? "square" : "callout"].call(0, a, b, c, d, e)
            }
        }
    }, B.VMLRenderer = Wa = function() {
        this.init.apply(this,
            arguments)
    }, Wa.prototype = w(la.prototype, M), Na = Wa;
    la.prototype.measureSpanWidth = function(a, b) {
        var c = C.createElement("span"),
            d;
        d = C.createTextNode(a);
        c.appendChild(d);
        K(c, b);
        this.box.appendChild(c);
        d = c.offsetWidth;
        La(c);
        return d
    };
    var Hb;
    if (ia) B.CanVGRenderer = M = function() {
        Ba = "http://www.w3.org/1999/xhtml"
    }, M.prototype.symbols = {}, Hb = function() {
        function a() {
            var a = b.length,
                d;
            for (d = 0; d < a; d++) b[d]();
            b = []
        }
        var b = [];
        return {
            push: function(c, d) {
                b.length === 0 && Ob(d, a);
                b.push(c)
            }
        }
    }(), Na = M;
    Ma.prototype = {
        addLabel: function() {
            var a =
                this.axis,
                b = a.options,
                c = a.chart,
                d = a.categories,
                e = a.names,
                f = this.pos,
                g = b.labels,
                h = a.tickPositions,
                i = f === h[0],
                j = f === h[h.length - 1],
                e = d ? p(d[f], e[f], f) : f,
                d = this.label,
                h = h.info,
                k;
            a.isDatetimeAxis && h && (k = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = i;
            this.isLast = j;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: i,
                isLast: j,
                dateTimeLabelFormat: k,
                value: a.isLog ? xa(na(e)) : e
            });
            x(d) ? d && d.attr({
                text: b
            }) : (this.labelLength = (this.label = d = x(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(w(g.style)).add(a.labelGroup) :
                null) && d.getBBox().width, this.rotation = 0)
        },
        getLabelSize: function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        },
        handleOverflow: function(a) {
            var b = this.axis,
                c = a.x,
                d = b.chart.chartWidth,
                e = b.chart.spacing,
                f = p(b.labelLeft, E(b.pos, e[3])),
                e = p(b.labelRight, t(b.pos + b.len, d - e[1])),
                g = this.label,
                h = this.rotation,
                i = {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[b.labelAlign],
                j = g.getBBox().width,
                k = b.slotWidth,
                l = 1,
                n, m = {};
            if (h) h < 0 && c - i * j < f ? n = A(c / ja(h * ka) - f) : h > 0 && c + i * j > e && (n = A((d - c) / ja(h * ka)));
            else if (d =
                c + (1 - i) * j, c - i * j < f ? k = a.x + k * (1 - i) - f : d > e && (k = e - a.x + k * i, l = -1), k = E(b.slotWidth, k), k < b.slotWidth && b.labelAlign === "center" && (a.x += l * (b.slotWidth - k - i * (b.slotWidth - E(j, k)))), j > k || b.autoRotation && g.styles.width) n = k;
            if (n) {
                m.width = n;
                if (!b.options.labels.style.textOverflow) m.textOverflow = "ellipsis";
                g.css(m)
            }
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis,
                f = e.chart,
                g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) -
                    e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var i = this.axis,
                j = i.transA,
                k = i.reversed,
                l = i.staggerLines,
                n = i.tickRotCorr || {
                    x: 0,
                    y: 0
                },
                c = p(e.y, n.y + (i.side === 2 ? 8 : -(c.getBBox().height / 2))),
                a = a + e.x + n.x - (f && d ? f * j * (k ? -1 : 1) : 0),
                b = b + c - (f && !d ? f * j * (k ? 1 : -1) : 0);
            l && (b += g / (h || 1) % l * (i.labelOffset / l));
            return {
                x: a,
                y: A(b)
            }
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        },
        render: function(a,
            b, c) {
            var d = this.axis,
                e = d.options,
                f = d.chart.renderer,
                g = d.horiz,
                h = this.type,
                i = this.label,
                j = this.pos,
                k = e.labels,
                l = this.gridLine,
                n = h ? h + "Grid" : "grid",
                m = h ? h + "Tick" : "tick",
                u = e[n + "LineWidth"],
                s = e[n + "LineColor"],
                o = e[n + "LineDashStyle"],
                y = e[m + "Length"],
                n = p(e[m + "Width"], !h && d.isXAxis ? 1 : 0),
                z = e[m + "Color"],
                ba = e[m + "Position"],
                m = this.mark,
                t = k.step,
                ua = !0,
                x = d.tickmarkOffset,
                q = this.getPosition(g, j, x, b),
                w = q.x,
                q = q.y,
                v = g && w === d.pos + d.len || !g && q === d.pos ? -1 : 1,
                c = p(c, 1);
            this.isActive = !0;
            if (u) {
                j = d.getPlotLinePath(j + x, u * v, b, !0);
                if (l === r) {
                    l = {
                        stroke: s,
                        "stroke-width": u
                    };
                    if (o) l.dashstyle = o;
                    if (!h) l.zIndex = 1;
                    if (b) l.opacity = 0;
                    this.gridLine = l = u ? f.path(j).attr(l).add(d.gridGroup) : null
                }
                if (!b && l && j) l[this.isNew ? "attr" : "animate"]({
                    d: j,
                    opacity: c
                })
            }
            if (n && y) ba === "inside" && (y = -y), d.opposite && (y = -y), h = this.getMarkPath(w, q, y, n * v, g, f), m ? m.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: z,
                "stroke-width": n,
                opacity: c
            }).add(d.axisGroup);
            if (i && !isNaN(w)) i.xy = q = this.getLabelPosition(w, q, i, g, k, x, a, t), this.isFirst && !this.isLast && !p(e.showFirstLabel,
                1) || this.isLast && !this.isFirst && !p(e.showLastLabel, 1) ? ua = !1 : g && !d.isRadial && !k.step && !k.rotation && !b && c !== 0 && this.handleOverflow(q), t && a % t && (ua = !1), ua && !isNaN(q.y) ? (q.opacity = c, i[this.isNew ? "attr" : "animate"](q), this.isNew = !1) : i.attr("y", -9999)
        },
        destroy: function() {
            $a(this, this.axis)
        }
    };
    var Y = B.Axis = function() {
        this.init.apply(this, arguments)
    };
    Y.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {
                enabled: !0,
                style: {
                    color: "#606060",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0,
                y: 15
            },
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: 0.01,
            maxPadding: 0.01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: !0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return B.numberFormat(this.total, -1)
                },
                style: w(V.line.dataLabels.style, {
                    color: "#000000"
                })
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.chart = a;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options,
                e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.reversed = d.reversed;
            this.visible =
                d.visible !== !1;
            this.zoomEnabled = d.zoomEnabled !== !1;
            this.categories = d.categories || e === "category";
            this.names = this.names || [];
            this.isLog = e === "logarithmic";
            this.isDatetimeAxis = e === "datetime";
            this.isLinked = x(d.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.stacksTouched = 0;
            this.min = this.max = null;
            this.crosshair =
                p(d.crosshair, ra(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            Ua(this, a.axes) === -1 && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            if (a.inverted && c && this.reversed === r) this.reversed = !0;
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) L(this, f, d[f]);
            if (this.isLog) this.val2lin = Pa, this.lin2val = na
        },
        setOptions: function(a) {
            this.options = w(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], w(J[this.coll], a))
        },
        defaultLabelFormatter: function() {
            var a = this.axis,
                b = this.value,
                c = a.categories,
                d = this.dateTimeLabelFormat,
                e = J.lang.numericSymbols,
                f = e && e.length,
                g, h = a.options.labels.format,
                a = a.isLog ? b : a.tickInterval;
            if (h) g = Ja(h, this);
            else if (c) g = b;
            else if (d) g = Ka(d, b);
            else if (f && a >= 1E3)
                for (; f-- && g === r;) c = Math.pow(1E3, f + 1), a >= c && b * 10 % c === 0 && e[f] !==
                    null && (g = B.numberFormat(b / c, -1) + e[f]);
            g === r && (g = O(b) >= 1E4 ? B.numberFormat(b, -1) : B.numberFormat(b, -1, r, ""));
            return g
        },
        getSeriesExtremes: function() {
            var a = this,
                b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.threshold = null;
            a.softThreshold = !a.isXAxis;
            a.buildStacks && a.buildStacks();
            o(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d = c.options,
                        e = d.threshold,
                        f;
                    a.hasVisibleSeries = !0;
                    a.isLog && e <= 0 && (e = null);
                    if (a.isXAxis) {
                        if (d = c.xData, d.length) a.dataMin = E(p(a.dataMin, d[0]),
                            Qa(d)), a.dataMax = t(p(a.dataMax, d[0]), Ea(d))
                    } else {
                        c.getExtremes();
                        f = c.dataMax;
                        c = c.dataMin;
                        if (x(c) && x(f)) a.dataMin = E(p(a.dataMin, c), c), a.dataMax = t(p(a.dataMax, f), f);
                        if (x(e)) a.threshold = e;
                        if (!d.softThreshold || a.isLog) a.softThreshold = !1
                    }
                }
            })
        },
        translate: function(a, b, c, d, e, f) {
            var g = this.linkedParent || this,
                h = 1,
                i = 0,
                j = d ? g.oldTransA : g.transA,
                d = d ? g.oldMin : g.min,
                k = g.minPixelPadding,
                e = (g.doPostTranslate || g.isLog && e) && g.lin2val;
            if (!j) j = g.transA;
            if (c) h *= -1, i = g.len;
            g.reversed && (h *= -1, i -= h * (g.sector || g.len));
            b ? (a =
                a * h + i, a -= k, a = a / j + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * j + i + h * k + (qa(f) ? j * f * g.pointRange : 0));
            return a
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart,
                g = this.left,
                h = this.top,
                i, j, k = c && f.oldChartHeight || f.chartHeight,
                l = c && f.oldChartWidth || f.chartWidth,
                n;
            i = this.transB;
            var m = function(a, b, c) {
                    if (a <
                        b || a > c) d ? a = E(t(b, a), c) : n = !0;
                    return a
                },
                e = p(e, this.translate(a, null, null, c)),
                a = c = A(e + i);
            i = j = A(k - e - i);
            isNaN(e) ? n = !0 : this.horiz ? (i = h, j = k - this.bottom, a = c = m(a, g, g + this.width)) : (a = g, c = l - this.right, i = j = m(i, h, h + this.height));
            return n && !d ? null : f.renderer.crispLine(["M", a, i, "L", c, j], b || 1)
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = xa(ga(b / a) * a),
                f = xa(ta(c / a) * a),
                g = [];
            if (b === c && qa(b)) return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = xa(b + a);
                if (b === d) break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function() {
            var a = this.options,
                b = this.tickPositions,
                c = this.minorTickInterval,
                d = [],
                e, f = this.pointRangePadding || 0;
            e = this.min - f;
            var f = this.max + f,
                g = f - e;
            if (g && g / c < this.len / 3)
                if (this.isLog) {
                    f = b.length;
                    for (e = 1; e < f; e++) d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0))
                } else if (this.isDatetimeAxis && a.minorTickInterval === "auto") d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek));
            else
                for (b = e + (b[0] - e) % c; b <= f; b += c) d.push(b);
            d.length !== 0 && this.trimTicks(d, a.startOnTick, a.endOnTick);
            return d
        },
        adjustForMinRange: function() {
            var a =
                this.options,
                b = this.min,
                c = this.max,
                d, e = this.dataMax - this.dataMin >= this.minRange,
                f, g, h, i, j, k;
            if (this.isXAxis && this.minRange === r && !this.isLog) x(a.min) || x(a.max) ? this.minRange = null : (o(this.series, function(a) {
                i = a.xData;
                for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--)
                    if (h = i[g] - i[g - 1], f === r || h < f) f = h
            }), this.minRange = E(f * 5, this.dataMax - this.dataMin));
            if (c - b < this.minRange) {
                k = this.minRange;
                d = (k - c + b) / 2;
                d = [b - d, p(a.min, b - d)];
                if (e) d[2] = this.dataMin;
                b = Ea(d);
                c = [b + k, p(a.max, b + k)];
                if (e) c[2] = this.dataMax;
                c = Qa(c);
                c - b < k && (d[0] =
                    c - k, d[1] = p(a.min, c - k), b = Ea(d))
            }
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function(a) {
            var b = this,
                c = b.max - b.min,
                d = b.axisPointRange || 0,
                e, f = 0,
                g = 0,
                h = b.linkedParent,
                i = !!b.categories,
                j = b.transA,
                k = b.isXAxis;
            if (k || i || d)
                if (h ? (f = h.minPointOffset, g = h.pointRangePadding) : o(b.series, function(a) {
                        var c = i ? 1 : k ? a.pointRange : b.axisPointRange || 0,
                            h = a.options.pointPlacement,
                            j = a.closestPointRange;
                        d = t(d, c);
                        b.single || (f = t(f, Aa(h) ? 0 : c / 2), g = t(g, h === "on" ? 0 : c));
                        !a.noSharedTooltip && x(j) && (e = x(e) ? E(e, j) : j)
                    }), h = b.ordinalSlope && e ?
                    b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = E(d, c), k) b.closestPointRange = e;
            if (a) b.oldTransA = j;
            b.translationSlope = b.transA = j = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = j * f
        },
        minFromRange: function() {
            return this.max - this.range
        },
        setTickInterval: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = b.isLog,
                f = b.isDatetimeAxis,
                g = b.isXAxis,
                h = b.isLinked,
                i = d.maxPadding,
                j = d.minPadding,
                k = d.tickInterval,
                l = d.tickPixelInterval,
                n = b.categories,
                m = b.threshold,
                u = b.softThreshold,
                s, P, y, z;
            !f && !n && !h && this.getTickAmount();
            y = p(b.userMin, d.min);
            z = p(b.userMax, d.max);
            h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = p(c.min, c.dataMin), b.max = p(c.max, c.dataMax), d.type !== b.linkedParent.options.type && da(11, 1)) : (!u && x(m) && (b.dataMin >= m ? (s = m, j = 0) : b.dataMax <= m && (P = m, i = 0)), b.min = p(y, s, b.dataMin), b.max = p(z, P, b.dataMax));
            if (e) !a && E(b.min, p(b.dataMin, b.min)) <= 0 && da(10, 1), b.min = xa(Pa(b.min), 15), b.max = xa(Pa(b.max), 15);
            if (b.range && x(b.max)) b.userMin = b.min = y = t(b.min,
                b.minFromRange()), b.userMax = z = b.max, b.range = null;
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            if (!n && !b.axisPointRange && !b.usePercentage && !h && x(b.min) && x(b.max) && (c = b.max - b.min)) !x(y) && j && (b.min -= c * j), !x(z) && i && (b.max += c * i);
            if (qa(d.floor)) b.min = t(b.min, d.floor);
            if (qa(d.ceiling)) b.max = E(b.max, d.ceiling);
            if (u && x(b.dataMin))
                if (m = m || 0, !x(y) && b.min < m && b.dataMin >= m) b.min = m;
                else if (!x(z) && b.max > m && b.dataMax <= m) b.max = m;
            b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : h && !k && l ===
                b.linkedParent.options.tickPixelInterval ? k = b.linkedParent.tickInterval : p(k, this.tickAmount ? (b.max - b.min) / t(this.tickAmount - 1, 1) : void 0, n ? 1 : (b.max - b.min) * l / t(b.len, l));
            g && !a && o(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval);
            if (b.pointRange) b.tickInterval = t(b.pointRange, b.tickInterval);
            a = p(d.minTickInterval, b.isDatetimeAxis &&
                b.closestPointRange);
            if (!k && b.tickInterval < a) b.tickInterval = a;
            if (!f && !e && !k) b.tickInterval = tb(b.tickInterval, null, G.pow(10, ga(G.log(b.tickInterval) / G.LN10)), p(d.allowDecimals, !(b.tickInterval > 0.5 && b.tickInterval < 5 && b.max > 1E3 && b.max < 9999)), !!this.tickAmount);
            if (!this.tickAmount && this.len) b.tickInterval = b.unsquish();
            this.setTickPositions()
        },
        setTickPositions: function() {
            var a = this.options,
                b, c = a.tickPositions,
                d = a.tickPositioner,
                e = a.startOnTick,
                f = a.endOnTick,
                g;
            this.tickmarkOffset = this.categories && a.tickmarkPlacement ===
                "between" && this.tickInterval === 1 ? 0.5 : 0;
            this.minorTickInterval = a.minorTickInterval === "auto" && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
            this.tickPositions = b = c && c.slice();
            if (!b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max),
                    b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max])))) this.tickPositions = b = d;
            if (!this.isLinked) this.trimTicks(b, e, f), this.min === this.max && x(this.min) && !this.tickAmount && (g = !0, this.min -= 0.5, this.max += 0.5), this.single = g, !c && !d && this.adjustTickAmount()
        },
        trimTicks: function(a, b, c) {
            var d = a[0],
                e = a[a.length - 1],
                f = this.minPointOffset || 0;
            b ? this.min = d : this.min - f > d && a.shift();
            c ? this.max = e : this.max + f < e && a.pop();
            a.length === 0 && x(d) && a.push((e + d) / 2)
        },
        getTickAmount: function() {
            var a = {},
                b, c = this.options,
                d = c.tickAmount,
                e = c.tickPixelInterval;
            !x(c.tickInterval) && this.len < e && !this.isRadial && !this.isLog && c.startOnTick && c.endOnTick && (d = 2);
            !d && this.chart.options.chart.alignTicks !== !1 && c.alignTicks !== !1 && (o(this.chart[this.coll], function(c) {
                var d = c.options,
                    e = c.horiz,
                    d = [e ? d.left : d.top, e ? d.width : d.height, d.pane].join(",");
                c.series.length && (a[d] ? b = !0 : a[d] = 1)
            }), b && (d = ta(this.len / e) + 1));
            if (d < 4) this.finalTickAmt = d, d = 5;
            this.tickAmount = d
        },
        adjustTickAmount: function() {
            var a = this.tickInterval,
                b =
                this.tickPositions,
                c = this.tickAmount,
                d = this.finalTickAmt,
                e = b && b.length;
            if (e < c) {
                for (; b.length < c;) b.push(xa(b[b.length - 1] + a));
                this.transA *= (e - 1) / (c - 1);
                this.max = b[b.length - 1]
            } else e > c && (this.tickInterval *= 2, this.setTickPositions());
            if (x(d)) {
                for (a = c = b.length; a--;)(d === 3 && a % 2 === 1 || d <= 2 && a > 0 && a < c - 1) && b.splice(a, 1);
                this.finalTickAmt = r
            }
        },
        setScale: function() {
            var a, b;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            b = this.len !== this.oldAxisLength;
            o(this.series, function(b) {
                if (b.isDirtyData ||
                    b.isDirty || b.xAxis.isDirty) a = !0
            });
            if (b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax
            } else this.cleanStacks && this.cleanStacks()
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this,
                g = f.chart,
                c = p(c, !0);
            o(f.series, function(a) {
                delete a.kdTree
            });
            e = q(e, {
                min: a,
                max: b
            });
            I(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                c && g.redraw(d)
            })
        },
        zoom: function(a, b) {
            var c = this.dataMin,
                d = this.dataMax,
                e = this.options,
                f = E(c, p(e.min, c)),
                e = t(d, p(e.max, d));
            this.allowZoomOutside || (x(c) && a <= f && (a = f), x(d) && b >= e && (b = e));
            this.displayBtn = a !== r || b !== r;
            this.setExtremes(a, b, !1, r, {
                trigger: "zoom"
            });
            return !0
        },
        setAxisSize: function() {
            var a = this.chart,
                b = this.options,
                c = b.offsetLeft || 0,
                d = this.horiz,
                e = p(b.width, a.plotWidth - c + (b.offsetRight || 0)),
                f = p(b.height,
                    a.plotHeight),
                g = p(b.top, a.plotTop),
                b = p(b.left, a.plotLeft + c),
                c = /%$/;
            c.test(f) && (f = parseFloat(f) / 100 * a.plotHeight);
            c.test(g) && (g = parseFloat(g) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = t(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? xa(na(this.min)) : this.min,
                max: a ? xa(na(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(a) {
            var b = this.isLog,
                c = b ? na(this.min) : this.min,
                b = b ? na(this.max) : this.max;
            a === null ? a = b < 0 ? b : c : c > a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function(a) {
            a = (p(a, 0) - this.side * 90 + 720) % 360;
            return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center"
        },
        unsquish: function() {
            var a = this.ticks,
                b = this.options.labels,
                c = this.horiz,
                d = this.tickInterval,
                e = d,
                f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d),
                g, h = b.rotation,
                i = this.chart.renderer.fontMetrics(b.style.fontSize,
                    a[0] && a[0].label),
                j, k = Number.MAX_VALUE,
                l, n = function(a) {
                    a /= f || 1;
                    a = a > 1 ? ta(a) : 1;
                    return a * d
                };
            c ? (l = !b.staggerLines && !b.step && (x(h) ? [h] : f < p(b.autoRotationLimit, 80) && b.autoRotation)) && o(l, function(a) {
                var b;
                if (a === h || a && a >= -90 && a <= 90) j = n(O(i.h / oa(ka * a))), b = j + O(a / 360), b < k && (k = b, g = a, e = j)
            }) : b.step || (e = n(i.h));
            this.autoRotation = l;
            this.labelRotation = p(g, h);
            return e
        },
        renderUnsquish: function() {
            var a = this.chart,
                b = a.renderer,
                c = this.tickPositions,
                d = this.ticks,
                e = this.options.labels,
                f = this.horiz,
                g = a.margin,
                h = this.categories ?
                c.length : c.length - 1,
                i = this.slotWidth = f && !e.step && !e.rotation && (this.staggerLines || 1) * a.plotWidth / h || !f && (g[3] && g[3] - a.spacing[3] || a.chartWidth * 0.33),
                j = t(1, A(i - 2 * (e.padding || 5))),
                k = {},
                g = b.fontMetrics(e.style.fontSize, d[0] && d[0].label),
                h = e.style.textOverflow,
                l, n = 0;
            if (!Aa(e.rotation)) k.rotation = e.rotation || 0;
            if (this.autoRotation) o(c, function(a) {
                if ((a = d[a]) && a.labelLength > n) n = a.labelLength
            }), n > j && n > g.h ? k.rotation = this.labelRotation : this.labelRotation = 0;
            else if (i && (l = {
                    width: j + "px"
                }, !h)) {
                l.textOverflow =
                    "clip";
                for (i = c.length; !f && i--;)
                    if (j = c[i], j = d[j].label)
                        if (j.styles.textOverflow === "ellipsis" && j.css({
                                textOverflow: "clip"
                            }), j.getBBox().height > this.len / c.length - (g.h - g.f)) j.specCss = {
                            textOverflow: "ellipsis"
                        }
            }
            if (k.rotation && (l = {
                    width: (n > a.chartHeight * 0.5 ? a.chartHeight * 0.33 : a.chartHeight) + "px"
                }, !h)) l.textOverflow = "ellipsis";
            this.labelAlign = k.align = e.align || this.autoLabelAlign(this.labelRotation);
            o(c, function(a) {
                var b = (a = d[a]) && a.label;
                if (b) b.attr(k), l && b.css(w(l, b.specCss)), delete b.specCss, a.rotation =
                    k.rotation
            });
            this.tickRotCorr = b.rotCorr(g.b, this.labelRotation || 0, this.side === 2)
        },
        hasData: function() {
            return this.hasVisibleSeries || x(this.min) && x(this.max) && !!this.tickPositions
        },
        getOffset: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.tickPositions,
                f = a.ticks,
                g = a.horiz,
                h = a.side,
                i = b.inverted ? [1, 0, 3, 2][h] : h,
                j, k, l = 0,
                n, m = 0,
                u = d.title,
                s = d.labels,
                P = 0,
                y = b.axisOffset,
                b = b.clipOffset,
                z = [-1, 1, 1, -1][h],
                q, r = a.axisParent;
            j = a.hasData();
            a.showAxis = k = j || p(d.showEmpty, !0);
            a.staggerLines = a.horiz && s.staggerLines;
            if (!a.axisGroup) a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(r), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(r), a.labelGroup = c.g("axis-labels").attr({
                zIndex: s.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add(r);
            if (j || a.isLinked) {
                if (o(e, function(b) {
                        f[b] ? f[b].addLabel() : f[b] = new Ma(a, b)
                    }), a.renderUnsquish(), o(e, function(b) {
                        if (h === 0 || h === 2 || {
                                1: "left",
                                3: "right"
                            }[h] === a.labelAlign) P = t(f[b].getLabelSize(), P)
                    }), a.staggerLines) P *= a.staggerLines, a.labelOffset =
                    P
            } else
                for (q in f) f[q].destroy(), delete f[q];
            if (u && u.text && u.enabled !== !1) {
                if (!a.axisTitle) a.axisTitle = c.text(u.text, 0, 0, u.useHTML).attr({
                    zIndex: 7,
                    rotation: u.rotation || 0,
                    align: u.textAlign || {
                        low: "left",
                        middle: "center",
                        high: "right"
                    }[u.align]
                }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(u.style).add(a.axisGroup), a.axisTitle.isNew = !0;
                if (k) l = a.axisTitle.getBBox()[g ? "height" : "width"], n = u.offset, m = x(n) ? 0 : p(u.margin, g ? 5 : 10);
                a.axisTitle[k ? "show" : "hide"]()
            }
            a.offset = z * p(d.offset, y[h]);
            a.tickRotCorr =
                a.tickRotCorr || {
                    x: 0,
                    y: 0
                };
            c = h === 2 ? a.tickRotCorr.y : 0;
            g = P + m + (P && z * (g ? p(s.y, a.tickRotCorr.y + 8) : s.x) - c);
            a.axisTitleMargin = p(n, g);
            y[h] = t(y[h], a.axisTitleMargin + l + z * a.offset, g);
            d = d.offset ? 0 : ga(d.lineWidth / 2) * 2;
            b[i] = t(b[i], d)
        },
        getLinePath: function(a) {
            var b = this.chart,
                c = this.opposite,
                d = this.offset,
                e = this.horiz,
                f = this.left + (c ? this.width : 0) + d,
                d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight -
                this.bottom
            ], a)
        },
        getTitlePosition: function() {
            var a = this.horiz,
                b = this.left,
                c = this.top,
                d = this.len,
                e = this.options.title,
                f = a ? b : c,
                g = this.opposite,
                h = this.offset,
                i = e.x || 0,
                j = e.y || 0,
                k = D(e.style.fontSize || 12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                }[e.align],
                b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? k : 0);
            return {
                x: a ? d + i : b + (g ? this.width : 0) + h + i,
                y: a ? b + j - (g ? this.height : 0) + h : d + j
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.isLog,
                f = a.isLinked,
                g = a.tickPositions,
                h = a.axisTitle,
                i = a.ticks,
                j = a.minorTicks,
                k = a.alternateBands,
                l = d.stackLabels,
                n = d.alternateGridColor,
                m = a.tickmarkOffset,
                u = d.lineWidth,
                s, p = b.hasRendered && x(a.oldMin) && !isNaN(a.oldMin),
                y = a.showAxis,
                z = c.globalAnimation,
                q, t;
            a.labelEdge.length = 0;
            a.overlap = !1;
            o([i, j, k], function(a) {
                for (var b in a) a[b].isActive = !1
            });
            if (a.hasData() || f) {
                a.minorTickInterval && !a.categories && o(a.getMinorTickPositions(), function(b) {
                    j[b] || (j[b] = new Ma(a, b, "minor"));
                    p && j[b].isNew && j[b].render(null, !0);
                    j[b].render(null, !1, 1)
                });
                if (g.length &&
                    (o(g, function(b, c) {
                        if (!f || b >= a.min && b <= a.max) i[b] || (i[b] = new Ma(a, b)), p && i[b].isNew && i[b].render(c, !0, 0.1), i[b].render(c)
                    }), m && (a.min === 0 || a.single))) i[-1] || (i[-1] = new Ma(a, -1, null, !0)), i[-1].render(-1);
                n && o(g, function(b, c) {
                    t = g[c + 1] !== r ? g[c + 1] + m : a.max - m;
                    if (c % 2 === 0 && b < a.max && t <= a.max - m) k[b] || (k[b] = new B.PlotLineOrBand(a)), q = b + m, k[b].options = {
                        from: e ? na(q) : q,
                        to: e ? na(t) : t,
                        color: n
                    }, k[b].render(), k[b].isActive = !0
                });
                if (!a._addedPlotLB) o((d.plotLines || []).concat(d.plotBands || []), function(b) {
                        a.addPlotBandOrLine(b)
                    }),
                    a._addedPlotLB = !0
            }
            o([i, j, k], function(a) {
                var c, d, e = [],
                    f = z ? z.duration || 500 : 0,
                    g = function() {
                        for (d = e.length; d--;) a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                    };
                for (c in a)
                    if (!a[c].isActive) a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c);
                a === k || !b.hasRendered || !f ? g() : f && setTimeout(g, f)
            });
            if (u) s = a.getLinePath(u), a.axisLine ? a.axisLine.animate({
                d: s
            }) : a.axisLine = c.path(s).attr({
                stroke: d.lineColor,
                "stroke-width": u,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[y ? "show" : "hide"]();
            if (h && y) h[h.isNew ? "attr" :
                "animate"](a.getTitlePosition()), h.isNew = !1;
            l && l.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function() {
            this.visible && (this.render(), o(this.plotLinesAndBands, function(a) {
                a.render()
            }));
            o(this.series, function(a) {
                a.isDirty = !0
            })
        },
        destroy: function(a) {
            var b = this,
                c = b.stacks,
                d, e = b.plotLinesAndBands;
            a || aa(b);
            for (d in c) $a(c[d]), c[d] = null;
            o([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                $a(a)
            });
            for (a = e.length; a--;) e[a].destroy();
            o("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),
                function(a) {
                    b[a] && (b[a] = b[a].destroy())
                });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function(a, b) {
            var c, d = this.crosshair,
                e = d.animation;
            if (!this.crosshair || (x(b) || !p(this.crosshair.snap, !0)) === !1 || b && b.series && b.series[this.coll] !== this) this.hideCrosshair();
            else if (p(d.snap, !0) ? x(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : p(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null,
                    null, c) || null, c === null) this.hideCrosshair();
            else if (this.cross) this.cross.attr({
                visibility: "visible"
            })[e ? "animate" : "attr"]({
                d: c
            }, e);
            else {
                e = this.categories && !this.isRadial;
                e = {
                    "stroke-width": d.width || (e ? this.transA : 1),
                    stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
                    zIndex: d.zIndex || 2
                };
                if (d.dashStyle) e.dashstyle = d.dashStyle;
                this.cross = this.chart.renderer.path(c).attr(e).add()
            }
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    };
    q(Y.prototype, void 0);
    Y.prototype.getLogTickPositions = function(a,
        b, c, d) {
        var e = this.options,
            f = this.len,
            g = [];
        if (!d) this._minorAutoInterval = null;
        if (a >= 0.5) a = A(a), g = this.getLinearTickPositions(a, b, c);
        else if (a >= 0.08)
            for (var f = ga(b), h, i, j, k, l, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !l; f++) {
                i = e.length;
                for (h = 0; h < i && !l; h++) j = Pa(na(f) * e[h]), j > b && (!d || k <= c) && k !== r && g.push(k), k > c && (l = !0), k = j
            } else if (b = na(b), c = na(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = p(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length :
                    f) || 1)), a = tb(a, null, G.pow(10, ga(G.log(a) / G.LN10))), g = Oa(this.getLinearTickPositions(a, b, c), Pa), !d) this._minorAutoInterval = a / 5;
        if (!d) this.tickInterval = a;
        return g
    };
    var Ib = B.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    Ib.prototype = {
        init: function(a, b) {
            var c = b.borderWidth,
                d = b.style,
                e = D(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {
                x: 0,
                y: 0
            };
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e,
                fill: b.backgroundColor,
                "stroke-width": c,
                r: b.borderRadius,
                zIndex: 8
            }).css(d).css({
                padding: 0
            }).add().attr({
                y: -9999
            });
            ia || this.label.shadow(b.shadow);
            this.shared = b.shared
        },
        destroy: function() {
            if (this.label) this.label = this.label.destroy();
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        },
        move: function(a, b, c, d) {
            var e = this,
                f = e.now,
                g = e.options.animation !== !1 && !e.isHidden && (O(a - f.x) > 1 || O(b - f.y) > 1),
                h = e.followPointer || e.len > 1;
            q(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? r : g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: h ? r : g ? (f.anchorY +
                    d) / 2 : d
            });
            e.label.attr(f);
            if (g) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32)
        },
        hide: function(a) {
            var b = this;
            clearTimeout(this.hideTimer);
            if (!this.isHidden) this.hideTimer = setTimeout(function() {
                b.label.fadeOut();
                b.isHidden = !0
            }, p(a, this.options.hideDelay, 500))
        },
        getAnchor: function(a, b) {
            var c, d = this.chart,
                e = d.inverted,
                f = d.plotTop,
                g = d.plotLeft,
                h = 0,
                i = 0,
                j, k, a = ra(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === r && (b = d.pointer.normalize(b)), c = [b.chartX -
                d.plotLeft, b.chartY - f
            ]);
            c || (o(a, function(a) {
                j = a.series.yAxis;
                k = a.series.xAxis;
                h += a.plotX + (!e && k ? k.left - g : 0);
                i += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && j ? j.top - f : 0)
            }), h /= a.length, i /= a.length, c = [e ? d.plotWidth - i : h, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - h : i]);
            return Oa(c, A)
        },
        getPosition: function(a, b, c) {
            var d = this.chart,
                e = this.distance,
                f = {},
                g = c.h || 0,
                h, i = ["y", d.chartHeight, b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight],
                j = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft,
                    d.plotLeft + d.plotWidth
                ],
                k = p(c.ttBelow, d.inverted && !c.negative || !d.inverted && c.negative),
                l = function(a, b, c, d, h, i) {
                    var j = c < d - e,
                        n = d + e + c < b,
                        l = d - e - c;
                    d += e;
                    if (k && n) f[a] = d;
                    else if (!k && j) f[a] = l;
                    else if (j) f[a] = E(i - c, l - g < 0 ? l : l - g);
                    else if (n) f[a] = t(h, d + g + c > b ? d : d + g);
                    else return !1
                },
                n = function(a, b, c, d) {
                    if (d < e || d > b - e) return !1;
                    else f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2
                },
                m = function(a) {
                    var b = i;
                    i = j;
                    j = b;
                    h = a
                },
                u = function() {
                    l.apply(0, i) !== !1 ? n.apply(0, j) === !1 && !h && (m(!0), u()) : h ? f.x = f.y = 0 : (m(!0), u())
                };
            (d.inverted || this.len > 1) && m();
            u();
            return f
        },
        defaultFormatter: function(a) {
            var b = this.points || ra(this),
                c;
            c = [a.tooltipFooterHeaderFormatter(b[0])];
            c = c.concat(a.bodyFormatter(b));
            c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
            return c.join("")
        },
        refresh: function(a, b) {
            var c = this.chart,
                d = this.label,
                e = this.options,
                f, g, h, i = {},
                j, k = [];
            j = e.formatter || this.defaultFormatter;
            var i = c.hoverPoints,
                l, n = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = ra(a)[0].series.tooltipOptions.followPointer;
            h = this.getAnchor(a, b);
            f = h[0];
            g = h[1];
            n &&
                (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints = a, i && o(i, function(a) {
                    a.setState()
                }), o(a, function(a) {
                    a.setState("hover");
                    k.push(a.getLabelConfig())
                }), i = {
                    x: a[0].category,
                    y: a[0].y
                }, i.points = k, this.len = k.length, a = a[0]) : i = a.getLabelConfig();
            j = j.call(i, this);
            i = a.series;
            this.distance = p(i.tooltipOptions.distance, 16);
            j === !1 ? this.hide() : (this.isHidden && (Va(d), d.attr("opacity", 1).show()), d.attr({
                text: j
            }), l = e.borderColor || a.color || i.color || "#606060", d.attr({
                stroke: l
            }), this.updatePosition({
                plotX: f,
                plotY: g,
                negative: a.negative,
                ttBelow: a.ttBelow,
                h: h[2] || 0
            }), this.isHidden = !1);
            I(c, "tooltipRefresh", {
                text: j,
                x: f + c.plotLeft,
                y: g + c.plotTop,
                borderColor: l
            })
        },
        updatePosition: function(a) {
            var b = this.chart,
                c = this.label,
                c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(A(c.x), A(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        },
        getXDateFormat: function(a, b, c) {
            var d, b = b.dateTimeLabelFormats,
                e = c && c.closestPointRange,
                f, g = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3
                },
                h, i = "millisecond";
            if (e) {
                h =
                    Ka("%m-%d %H:%M:%S.%L", a.x);
                for (f in db) {
                    if (e === db.week && +Ka("%w", a.x) === c.options.startOfWeek && h.substr(6) === "00:00:00.000") {
                        f = "week";
                        break
                    } else if (db[f] > e) {
                        f = i;
                        break
                    } else if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f])) break;
                    f !== "week" && (i = f)
                }
                f && (d = b[f])
            } else d = b.day;
            return d || b.year
        },
        tooltipFooterHeaderFormatter: function(a, b) {
            var c = b ? "footer" : "header",
                d = a.series,
                e = d.tooltipOptions,
                f = e.xDateFormat,
                g = d.xAxis,
                h = g && g.options.type === "datetime" && qa(a.key),
                c = e[c + "Format"];
            h && !f && (f = this.getXDateFormat(a,
                e, g));
            h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));
            return Ja(c, {
                point: a,
                series: d
            })
        },
        bodyFormatter: function(a) {
            return Oa(a, function(a) {
                var c = a.series.tooltipOptions;
                return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat)
            })
        }
    };
    var pa;
    Sa = C.documentElement.ontouchstart !== r;
    var za = B.Pointer = function(a, b) {
        this.init(a, b)
    };
    za.prototype = {
        init: function(a, b) {
            var c = b.chart,
                d = c.events,
                e = ia ? "" : c.zoomType,
                c = a.inverted,
                f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY =
                e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            if (B.Tooltip && b.tooltip.enabled) a.tooltip = new Ib(a, b.tooltip), this.followTouchMove = p(b.tooltip.followTouchMove, !0);
            this.setDOMEvents()
        },
        normalize: function(a, b) {
            var c, d, a = a || window.event,
                a = Qb(a);
            if (!a.target) a.target = a.srcElement;
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            if (!b) this.chartPosition = b = Pb(this.chart.container);
            d.pageX === r ? (c = t(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
            return q(a, {
                chartX: A(c),
                chartY: A(d)
            })
        },
        getCoordinates: function(a) {
            var b = {
                xAxis: [],
                yAxis: []
            };
            o(this.chart.axes, function(c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: c,
                    value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                })
            });
            return b
        },
        runPointActions: function(a) {
            var b = this.chart,
                c = b.series,
                d = b.tooltip,
                e = d ? d.shared : !1,
                f = b.hoverPoint,
                g = b.hoverSeries,
                h, i = Number.MAX_VALUE,
                j, k, l = [],
                n, m;
            if (!e && !g)
                for (h = 0; h < c.length; h++)
                    if (c[h].directTouch ||
                        !c[h].options.stickyTracking) c = [];
            g && (e ? g.noSharedTooltip : g.directTouch) && f ? n = f : (o(c, function(b) {
                j = b.noSharedTooltip && e;
                k = !e && b.directTouch;
                b.visible && !j && !k && p(b.options.enableMouseTracking, !0) && (m = b.searchPoint(a, !j && b.kdDimensions === 1)) && l.push(m)
            }), o(l, function(a) {
                if (a && typeof a.dist === "number" && a.dist < i) i = a.dist, n = a
            }));
            if (n && (n !== this.prevKDPoint || d && d.isHidden)) {
                if (e && !n.series.noSharedTooltip) {
                    for (h = l.length; h--;)(l[h].clientX !== n.clientX || l[h].series.noSharedTooltip) && l.splice(h, 1);
                    l.length &&
                        d && d.refresh(l, a);
                    o(l, function(b) {
                        b.onMouseOver(a, b !== (g && g.directTouch && f || n))
                    })
                } else if (d && d.refresh(n, a), !g || !g.directTouch) n.onMouseOver(a);
                this.prevKDPoint = n
            } else c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({
                plotX: c[0],
                plotY: c[1]
            }));
            if (d && !this._onDocumentMouseMove) this._onDocumentMouseMove = function(a) {
                if (X[pa]) X[pa].pointer.onDocumentMouseMove(a)
            }, L(C, "mousemove", this._onDocumentMouseMove);
            o(b.axes, function(b) {
                b.drawCrosshair(a, p(n, f))
            })
        },
        reset: function(a,
            b) {
            var c = this.chart,
                d = c.hoverSeries,
                e = c.hoverPoint,
                f = c.hoverPoints,
                g = c.tooltip,
                h = g && g.shared ? f : e;
            (a = a && g && h) && ra(h)[0].plotX === r && (a = !1);
            if (a) g.refresh(h), e && (e.setState(e.state, !0), o(c.axes, function(a) {
                p(a.options.crosshair && a.options.crosshair.snap, !0) ? a.drawCrosshair(null, e) : a.hideCrosshair()
            }));
            else {
                if (e) e.onMouseOut();
                f && o(f, function(a) {
                    a.setState()
                });
                if (d) d.onMouseOut();
                g && g.hide(b);
                if (this._onDocumentMouseMove) aa(C, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null;
                o(c.axes,
                    function(a) {
                        a.hideCrosshair()
                    });
                this.hoverX = c.hoverPoints = c.hoverPoint = null
            }
        },
        scaleGroups: function(a, b) {
            var c = this.chart,
                d;
            o(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        },
        dragStart: function(a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY =
                a.chartY
        },
        drag: function(a) {
            var b = this.chart,
                c = b.options.chart,
                d = a.chartX,
                e = a.chartY,
                f = this.zoomHor,
                g = this.zoomVert,
                h = b.plotLeft,
                i = b.plotTop,
                j = b.plotWidth,
                k = b.plotHeight,
                l, n = this.selectionMarker,
                m = this.mouseDownX,
                u = this.mouseDownY,
                s = c.panKey && a[c.panKey + "Key"];
            if (!n || !n.touch)
                if (d < h ? d = h : d > h + j && (d = h + j), e < i ? e = i : e > i + k && (e = i + k), this.hasDragged = Math.sqrt(Math.pow(m - d, 2) + Math.pow(u - e, 2)), this.hasDragged > 10) {
                    l = b.isInsidePlot(m - h, u - i);
                    if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !s && !n) this.selectionMarker =
                        n = b.renderer.rect(h, i, f ? 1 : j, g ? 1 : k, 0).attr({
                            fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                            zIndex: 7
                        }).add();
                    n && f && (d -= m, n.attr({
                        width: O(d),
                        x: (d > 0 ? 0 : d) + m
                    }));
                    n && g && (d = e - u, n.attr({
                        height: O(d),
                        y: (d > 0 ? 0 : d) + u
                    }));
                    l && !n && c.panning && b.pan(a, c.panning)
                }
        },
        drop: function(a) {
            var b = this,
                c = this.chart,
                d = this.hasPinched;
            if (this.selectionMarker) {
                var e = {
                        xAxis: [],
                        yAxis: [],
                        originalEvent: a.originalEvent || a
                    },
                    f = this.selectionMarker,
                    g = f.attr ? f.attr("x") : f.x,
                    h = f.attr ? f.attr("y") : f.y,
                    i = f.attr ? f.attr("width") : f.width,
                    j = f.attr ?
                    f.attr("height") : f.height,
                    k;
                if (this.hasDragged || d) o(c.axes, function(c) {
                    if (c.zoomEnabled && x(c.min) && (d || b[{
                            xAxis: "zoomX",
                            yAxis: "zoomY"
                        }[c.coll]])) {
                        var f = c.horiz,
                            m = a.type === "touchend" ? c.minPixelPadding : 0,
                            u = c.toValue((f ? g : h) + m),
                            f = c.toValue((f ? g + i : h + j) - m);
                        e[c.coll].push({
                            axis: c,
                            min: E(u, f),
                            max: t(u, f)
                        });
                        k = !0
                    }
                }), k && I(c, "selection", e, function(a) {
                    c.zoom(q(a, d ? {
                        animation: !1
                    } : null))
                });
                this.selectionMarker = this.selectionMarker.destroy();
                d && this.scaleGroups()
            }
            if (c) K(c.container, {
                    cursor: c._cursor
                }), c.cancelClick =
                this.hasDragged > 10, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []
        },
        onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        },
        onDocumentMouseUp: function(a) {
            X[pa] && X[pa].pointer.drop(a)
        },
        onDocumentMouseMove: function(a) {
            var b = this.chart,
                c = this.chartPosition,
                a = this.normalize(a, c);
            c && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset()
        },
        onContainerMouseLeave: function() {
            var a =
                X[pa];
            if (a) a.pointer.reset(), a.pointer.chartPosition = null
        },
        onContainerMouseMove: function(a) {
            var b = this.chart;
            pa = b.index;
            a = this.normalize(a);
            a.returnValue = !1;
            b.mouseIsDown === "mousedown" && this.drag(a);
            (this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a)
        },
        inClass: function(a, b) {
            for (var c; a;) {
                if (c = N(a, "class"))
                    if (c.indexOf(b) !== -1) return !0;
                    else if (c.indexOf("highcharts-container") !== -1) return !1;
                a = a.parentNode
            }
        },
        onTrackerMouseOut: function(a) {
            var b =
                this.chart.hoverSeries,
                a = a.relatedTarget || a.toElement;
            if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && !this.inClass(a, "highcharts-series-" + b.index)) b.onMouseOut()
        },
        onContainerClick: function(a) {
            var b = this.chart,
                c = b.hoverPoint,
                d = b.plotLeft,
                e = b.plotTop,
                a = this.normalize(a);
            a.originalEvent = a;
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (I(c.series, "click", q(a, {
                point: c
            })), b.hoverPoint && c.firePointEvent("click", a)) : (q(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX -
                d, a.chartY - e) && I(b, "click", a)))
        },
        setDOMEvents: function() {
            var a = this,
                b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function(b) {
                a.onContainerClick(b)
            };
            L(b, "mouseleave", a.onContainerMouseLeave);
            Ta === 1 && L(C, "mouseup", a.onDocumentMouseUp);
            if (Sa) b.ontouchstart = function(b) {
                a.onContainerTouchStart(b)
            }, b.ontouchmove = function(b) {
                a.onContainerTouchMove(b)
            }, Ta === 1 && L(C, "touchend", a.onDocumentTouchEnd)
        },
        destroy: function() {
            var a;
            aa(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            Ta || (aa(C, "mouseup", this.onDocumentMouseUp), aa(C, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }
    };
    q(B.Pointer.prototype, {
        pinchTranslate: function(a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        },
        pinchTranslateDirection: function(a, b, c, d, e, f, g, h) {
            var i = this.chart,
                j = a ?
                "x" : "y",
                k = a ? "X" : "Y",
                l = "chart" + k,
                n = a ? "width" : "height",
                m = i["plot" + (a ? "Left" : "Top")],
                u, s, p = h || 1,
                o = i.inverted,
                z = i.bounds[a ? "h" : "v"],
                q = b.length === 1,
                t = b[0][l],
                r = c[0][l],
                x = !q && b[1][l],
                w = !q && c[1][l],
                v, c = function() {
                    !q && O(t - x) > 20 && (p = h || O(r - w) / O(t - x));
                    s = (m - r) / p + t;
                    u = i["plot" + (a ? "Width" : "Height")] / p
                };
            c();
            b = s;
            b < z.min ? (b = z.min, v = !0) : b + u > z.max && (b = z.max - u, v = !0);
            v ? (r -= 0.8 * (r - g[j][0]), q || (w -= 0.8 * (w - g[j][1])), c()) : g[j] = [r, w];
            o || (f[j] = s - m, f[n] = u);
            f = o ? 1 / p : p;
            e[n] = u;
            e[j] = b;
            d[o ? a ? "scaleY" : "scaleX" : "scale" + k] = p;
            d["translate" +
                k] = f * m + (r - f * t)
        },
        pinch: function(a) {
            var b = this,
                c = b.chart,
                d = b.pinchDown,
                e = a.touches,
                f = e.length,
                g = b.lastValidTouch,
                h = b.hasZoom,
                i = b.selectionMarker,
                j = {},
                k = f === 1 && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick),
                l = {};
            if (f > 1) b.initiated = !0;
            h && b.initiated && !k && a.preventDefault();
            Oa(e, function(a) {
                return b.normalize(a)
            });
            if (a.type === "touchstart") o(e, function(a, b) {
                d[b] = {
                    chartX: a.chartX,
                    chartY: a.chartY
                }
            }), g.x = [d[0].chartX, d[1] && d[1].chartX], g.y = [d[0].chartY, d[1] && d[1].chartY], o(c.axes,
                function(a) {
                    if (a.zoomEnabled) {
                        var b = c.bounds[a.horiz ? "h" : "v"],
                            d = a.minPixelPadding,
                            e = a.toPixels(p(a.options.min, a.dataMin)),
                            f = a.toPixels(p(a.options.max, a.dataMax)),
                            g = E(e, f),
                            e = t(e, f);
                        b.min = E(a.pos, g - d);
                        b.max = t(a.pos + a.len, e + d)
                    }
                }), b.res = !0;
            else if (d.length) {
                if (!i) b.selectionMarker = i = q({
                    destroy: T,
                    touch: !0
                }, c.plotBox);
                b.pinchTranslate(d, e, j, i, l, g);
                b.hasPinched = h;
                b.scaleGroups(j, l);
                if (!h && b.followTouchMove && f === 1) this.runPointActions(b.normalize(a));
                else if (b.res) b.res = !1, this.reset(!1, 0)
            }
        },
        touch: function(a,
            b) {
            var c = this.chart;
            pa = c.index;
            a.touches.length === 1 ? (a = this.normalize(a), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && !c.openMenu ? (b && this.runPointActions(a), this.pinch(a)) : b && this.reset()) : a.touches.length === 2 && this.pinch(a)
        },
        onContainerTouchStart: function(a) {
            this.touch(a, !0)
        },
        onContainerTouchMove: function(a) {
            this.touch(a)
        },
        onDocumentTouchEnd: function(a) {
            X[pa] && X[pa].pointer.drop(a)
        }
    });
    if (H.PointerEvent || H.MSPointerEvent) {
        var va = {},
            rb = !!H.PointerEvent,
            Ub = function() {
                var a, b = [];
                b.item = function(a) {
                    return this[a]
                };
                for (a in va) va.hasOwnProperty(a) && b.push({
                    pageX: va[a].pageX,
                    pageY: va[a].pageY,
                    target: va[a].target
                });
                return b
            },
            sb = function(a, b, c, d) {
                a = a.originalEvent || a;
                if ((a.pointerType === "touch" || a.pointerType === a.MSPOINTER_TYPE_TOUCH) && X[pa]) d(a), d = X[pa].pointer, d[b]({
                    type: c,
                    target: a.currentTarget,
                    preventDefault: T,
                    touches: Ub()
                })
            };
        q(za.prototype, {
            onContainerPointerDown: function(a) {
                sb(a, "onContainerTouchStart", "touchstart", function(a) {
                    va[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        target: a.currentTarget
                    }
                })
            },
            onContainerPointerMove: function(a) {
                sb(a,
                    "onContainerTouchMove", "touchmove",
                    function(a) {
                        va[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY
                        };
                        if (!va[a.pointerId].target) va[a.pointerId].target = a.currentTarget
                    })
            },
            onDocumentPointerUp: function(a) {
                sb(a, "onDocumentTouchEnd", "touchend", function(a) {
                    delete va[a.pointerId]
                })
            },
            batchMSEvents: function(a) {
                a(this.chart.container, rb ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a(this.chart.container, rb ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(C, rb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        });
        ea(za.prototype, "init", function(a, b, c) {
            a.call(this, b, c);
            this.hasZoom && K(b.container, {
                "-ms-touch-action": S,
                "touch-action": S
            })
        });
        ea(za.prototype, "setDOMEvents", function(a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(L)
        });
        ea(za.prototype, "destroy", function(a) {
            this.batchMSEvents(aa);
            a.call(this)
        })
    }
    var Xa = B.Legend = function(a, b) {
        this.init(a, b)
    };
    Xa.prototype = {
        init: function(a, b) {
            var c = this,
                d = b.itemStyle,
                e = b.itemMarginTop || 0;
            this.options = b;
            if (b.enabled) c.itemStyle = d, c.itemHiddenStyle =
                w(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = p(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = p(b.symbolWidth, 16), c.pages = [], c.render(), L(c.chart, "endResize", function() {
                    c.positionCheckboxes()
                })
        },
        colorizeItem: function(a, b) {
            var c = this.options,
                d = a.legendItem,
                e = a.legendLine,
                f = a.legendSymbol,
                g = this.itemHiddenStyle.color,
                c = b ? c.itemStyle.color : g,
                h = b ? a.legendColor || a.color || "#CCC" : g,
                g = a.options && a.options.marker,
                i = {
                    fill: h
                },
                j;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g && f.isMarker)
                    for (j in i.stroke = h, g = a.convertAttribs(g), g) d = g[j], d !== r && (i[j] = d);
                f.attr(i)
            }
        },
        positionItem: function(a) {
            var b = this.options,
                c = b.symbolPadding,
                b = !b.rtl,
                d = a._legendItemPos,
                e = d[0],
                d = d[1],
                f = a.checkbox;
            (a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            if (f) f.x = e, f.y = d
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            o(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && La(a.checkbox)
        },
        destroy: function() {
            var a = this.group,
                b = this.box;
            if (b) this.box = b.destroy();
            if (a) this.group = a.destroy()
        },
        positionCheckboxes: function(a) {
            var b = this.group.alignAttr,
                c, d = this.clipHeight || this.legendHeight;
            if (b) c = b.translateY, o(this.allItems, function(e) {
                var f = e.checkbox,
                    g;
                f && (g = c + f.y + (a || 0) + 3, K(f, {
                    left: b.translateX + e.checkboxOffset + f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && g < c + d - 6 ? "" : S
                }))
            })
        },
        renderTitle: function() {
            var a = this.padding,
                b = this.options.title,
                c = 0;
            if (b.text) {
                if (!this.title) this.title = this.chart.renderer.label(b.text,
                    a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                    zIndex: 1
                }).css(b.style).add(this.group);
                a = this.title.getBBox();
                c = a.height;
                this.offsetWidth = a.width;
                this.contentGroup.attr({
                    translateY: c
                })
            }
            this.titleHeight = c
        },
        setText: function(a) {
            var b = this.options;
            a.legendItem.attr({
                text: b.labelFormat ? Ja(b.labelFormat, a) : b.labelFormatter.call(a)
            })
        },
        renderItem: function(a) {
            var b = this.chart,
                c = b.renderer,
                d = this.options,
                e = d.layout === "horizontal",
                f = this.symbolWidth,
                g = d.symbolPadding,
                h = this.itemStyle,
                i = this.itemHiddenStyle,
                j = this.padding,
                k = e ? p(d.itemDistance, 20) : 0,
                l = !d.rtl,
                n = d.width,
                m = d.itemMarginBottom || 0,
                u = this.itemMarginTop,
                s = this.initialItemX,
                o = a.legendItem,
                y = a.series && a.series.drawLegendSymbol ? a.series : a,
                z = y.options,
                z = this.createCheckboxForItem && z && z.showCheckbox,
                q = d.useHTML;
            if (!o) {
                a.legendGroup = c.g("legend-item").attr({
                    zIndex: 1
                }).add(this.scrollGroup);
                a.legendItem = o = c.text("", l ? f + g : -g, this.baseline || 0, q).css(w(a.visible ? h : i)).attr({
                    align: l ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup);
                if (!this.baseline) this.fontMetrics =
                    c.fontMetrics(h.fontSize, o), this.baseline = this.fontMetrics.f + 3 + u, o.attr("y", this.baseline);
                y.drawLegendSymbol(this, a);
                this.setItemEvents && this.setItemEvents(a, o, q, h, i);
                this.colorizeItem(a, a.visible);
                z && this.createCheckboxForItem(a)
            }
            this.setText(a);
            c = o.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + k + (z ? 20 : 0);
            this.itemHeight = g = A(a.legendItemHeight || c.height);
            if (e && this.itemX - s + f > (n || b.chartWidth - 2 * j - s - d.x)) this.itemX = s, this.itemY += u + this.lastLineHeight + m, this.lastLineHeight =
                0;
            this.maxItemWidth = t(this.maxItemWidth, f);
            this.lastItemY = u + this.itemY + m;
            this.lastLineHeight = t(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += u + g + m, this.lastLineHeight = g);
            this.offsetWidth = n || t((e ? this.itemX - s - k : f) + j, this.offsetWidth)
        },
        getAllItems: function() {
            var a = [];
            o(this.chart.series, function(b) {
                var c = b.options;
                if (p(c.showInLegend, !x(c.linkedTo) ? r : !1, !0)) a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b))
            });
            return a
        },
        adjustMargins: function(a,
            b) {
            var c = this.chart,
                d = this.options,
                e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
            this.display && !d.floating && o([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(f, g) {
                f.test(e) && !x(a[g]) && (c[eb[g]] = t(c[eb[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + p(d.margin, 12) + b[g]))
            })
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.group,
                e, f, g, h, i = a.box,
                j = a.options,
                k = a.padding,
                l = j.borderWidth,
                n = j.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            if (!d) a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup);
            a.renderTitle();
            e = a.getAllItems();
            ib(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            j.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            a.lastLineHeight = 0;
            o(e, function(b) {
                a.renderItem(b)
            });
            g = (j.width || a.offsetWidth) + k;
            h = a.lastItemY + a.lastLineHeight +
                a.titleHeight;
            h = a.handleOverflow(h);
            h += k;
            if (l || n) {
                if (i) {
                    if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp({
                        width: g,
                        height: h
                    })), i.isNew = !1
                } else a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({
                    stroke: j.borderColor,
                    "stroke-width": l || 0,
                    fill: n || S
                }).add(d).shadow(j.shadow), i.isNew = !0;
                i[f ? "show" : "hide"]()
            }
            a.legendWidth = g;
            a.legendHeight = h;
            o(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(q({
                width: g,
                height: h
            }, j), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b = this,
                c =
                this.chart,
                d = c.renderer,
                e = this.options,
                f = e.y,
                f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding,
                g = e.maxHeight,
                h, i = this.clipRect,
                j = e.navigation,
                k = p(j.animation, !0),
                l = j.arrowSize || 12,
                n = this.nav,
                m = this.pages,
                u = this.padding,
                s, q = this.allItems,
                y = function(a) {
                    i.attr({
                        height: a
                    });
                    if (b.contentGroup.div) b.contentGroup.div.style.clip = "rect(" + u + "px,9999px," + (u + a) + "px,0)"
                };
            e.layout === "horizontal" && (f /= 2);
            g && (f = E(f, g));
            m.length = 0;
            if (a > f) {
                this.clipHeight = h = t(f - 20 - this.titleHeight - u, 0);
                this.currentPage =
                    p(this.currentPage, 1);
                this.fullHeight = a;
                o(q, function(a, b) {
                    var c = a._legendItemPos[1],
                        d = A(a.legendItem.getBBox().height),
                        e = m.length;
                    if (!e || c - m[e - 1] > h && (s || c) !== m[e - 1]) m.push(s || c), e++;
                    b === q.length - 1 && c + d - m[e - 1] > h && m.push(c);
                    c !== s && (s = c)
                });
                if (!i) i = b.clipRect = d.clipRect(0, u, 9999, 0), b.contentGroup.clip(i);
                y(h);
                if (!n) this.nav = n = d.g().attr({
                        zIndex: 1
                    }).add(this.group), this.up = d.symbol("triangle", 0, 0, l, l).on("click", function() {
                        b.scroll(-1, k)
                    }).add(n), this.pager = d.text("", 15, 10).css(j.style).add(n), this.down =
                    d.symbol("triangle-down", 0, 0, l, l).on("click", function() {
                        b.scroll(1, k)
                    }).add(n);
                b.scroll(0);
                a = f
            } else if (n) y(c.chartHeight), n.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0;
            return a
        },
        scroll: function(a, b) {
            var c = this.pages,
                d = c.length,
                e = this.currentPage + a,
                f = this.clipHeight,
                g = this.options.navigation,
                h = g.activeColor,
                g = g.inactiveColor,
                i = this.pager,
                j = this.padding;
            e > d && (e = d);
            if (e > 0) b !== r && Ra(b, this.chart), this.nav.attr({
                    translateX: j,
                    translateY: f + this.padding + 7 + this.titleHeight,
                    visibility: "visible"
                }),
                this.up.attr({
                    fill: e === 1 ? g : h
                }).css({
                    cursor: e === 1 ? "default" : "pointer"
                }), i.attr({
                    text: e + "/" + d
                }), this.down.attr({
                    x: 18 + this.pager.getBBox().width,
                    fill: e === d ? g : h
                }).css({
                    cursor: e === d ? "default" : "pointer"
                }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({
                    translateY: c
                }), this.currentPage = e, this.positionCheckboxes(c)
        }
    };
    var Ya = B.LegendSymbolMixin = {
        drawRectangle: function(a, b) {
            var c = a.options.symbolHeight || a.fontMetrics.f;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius ||
                0).attr({
                zIndex: 3
            }).add(b.legendGroup)
        },
        drawLineMarker: function(a) {
            var b = this.options,
                c = b.marker,
                d;
            d = a.symbolWidth;
            var e = this.chart.renderer,
                f = this.legendGroup,
                a = a.baseline - A(a.fontMetrics.b * 0.3),
                g;
            if (b.lineWidth) {
                g = {
                    "stroke-width": b.lineWidth
                };
                if (b.dashStyle) g.dashstyle = b.dashStyle;
                this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f)
            }
            if (c && c.enabled !== !1) b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0
        }
    };
    (/Trident\/7\.0/.test(ya) || Ha) && ea(Xa.prototype,
        "positionItem",
        function(a, b) {
            var c = this,
                d = function() {
                    b._legendItemPos && a.call(c, b)
                };
            d();
            setTimeout(d)
        });
    var ma = B.Chart = function() {
        this.init.apply(this, arguments)
    };
    ma.prototype = {
        callbacks: [],
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = w(J, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries =
                d.showAxes;
            var f = this,
                g;
            f.index = X.length;
            X.push(f);
            Ta++;
            d.reflow !== !1 && L(f, "load", function() {
                f.initReflow()
            });
            if (e)
                for (g in e) L(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = ia ? !1 : p(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender()
        },
        initSeries: function(a) {
            var b = this.options.chart;
            (b = v[a.type || b.type || b.defaultSeriesType]) || da(17, !0);
            b = new b;
            b.init(this, a);
            return b
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a,
                a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight
        },
        redraw: function(a) {
            var b = this.axes,
                c = this.series,
                d = this.pointer,
                e = this.legend,
                f = this.isDirtyLegend,
                g, h, i = this.hasCartesianSeries,
                j = this.isDirtyBox,
                k = c.length,
                l = k,
                n = this.renderer,
                m = n.isHidden(),
                p = [];
            Ra(a, this);
            m && this.cloneRenderTo();
            for (this.layOutTitles(); l--;)
                if (a = c[l], a.options.stacking && (g = !0, a.isDirty)) {
                    h = !0;
                    break
                }
            if (h)
                for (l = k; l--;)
                    if (a = c[l], a.options.stacking) a.isDirty = !0;
            o(c, function(a) {
                a.isDirty && a.options.legendType === "point" && (a.updateTotals && a.updateTotals(), f = !0)
            });
            if (f && e.options.enabled) e.render(),
                this.isDirtyLegend = !1;
            g && this.getStacks();
            if (i && !this.isResizing) this.maxTicks = null, o(b, function(a) {
                a.setScale()
            });
            this.getMargins();
            i && (o(b, function(a) {
                a.isDirty && (j = !0)
            }), o(b, function(a) {
                var b = a.min + "," + a.max;
                if (a.extKey !== b) a.extKey = b, p.push(function() {
                    I(a, "afterSetExtremes", q(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                });
                (j || g) && a.redraw()
            }));
            j && this.drawChartBox();
            o(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            n.draw();
            I(this, "redraw");
            m && this.cloneRenderTo(!0);
            o(p, function(a) {
                a.call()
            })
        },
        get: function(a) {
            var b = this.axes,
                c = this.series,
                d, e;
            for (d = 0; d < b.length; d++)
                if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++)
                if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++) {
                e = c[d].points || [];
                for (b = 0; b < e.length; b++)
                    if (e[b].id === a) return e[b]
            }
            return null
        },
        getAxes: function() {
            var a = this,
                b = this.options,
                c = b.xAxis = ra(b.xAxis || {}),
                b = b.yAxis = ra(b.yAxis || {});
            o(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            o(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            o(c, function(b) {
                new Y(a,
                    b)
            })
        },
        getSelectedPoints: function() {
            var a = [];
            o(this.series, function(b) {
                a = a.concat(pb(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        },
        getSelectedSeries: function() {
            return pb(this.series, function(a) {
                return a.selected
            })
        },
        setTitle: function(a, b, c) {
            var g;
            var d = this,
                e = d.options,
                f;
            f = e.title = w(e.title, a);
            g = e.subtitle = w(e.subtitle, b), e = g;
            o([
                ["title", a, f],
                ["subtitle", b, e]
            ], function(a) {
                var b = a[0],
                    c = d[b],
                    e = a[1],
                    a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        },
        layOutTitles: function(a) {
            var b = 0,
                c = this.title,
                d = this.subtitle,
                e = this.options,
                f = e.title,
                e = e.subtitle,
                g = this.renderer,
                h = this.spacingBox.width - 44;
            if (c && (c.css({
                    width: (f.width || h) + "px"
                }).align(q({
                    y: g.fontMetrics(f.style.fontSize, c).b - 3
                }, f), !1, "spacingBox"), !f.floating && !f.verticalAlign)) b = c.getBBox().height;
            d && (d.css({
                width: (e.width || h) + "px"
            }).align(q({
                y: b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b
            }, e), !1, "spacingBox"), !e.floating && !e.verticalAlign && (b = ta(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            if (!this.isDirtyBox && c) this.isDirtyBox = c, this.hasRendered && p(a, !0) && this.isDirtyBox && this.redraw()
        },
        getChartSize: function() {
            var a = this.options.chart,
                b = a.width,
                a = a.height,
                c = this.renderToClone || this.renderTo;
            if (!x(b)) this.containerWidth = fb(c, "width");
            if (!x(a)) this.containerHeight = fb(c, "height");
            this.chartWidth = t(0, b || this.containerWidth || 600);
            this.chartHeight = t(0, p(a, this.containerHeight > 19 ? this.containerHeight :
                400))
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone,
                c = this.container;
            a ? b && (this.renderTo.appendChild(c), La(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), K(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block", "important"), C.body.appendChild(b), c && b.appendChild(c))
        },
        getContainer: function() {
            var a, b = this.options,
                c = b.chart,
                d, e, f;
            this.renderTo =
                a = c.renderTo;
            f = "highcharts-" + nb++;
            if (Aa(a)) this.renderTo = a = C.getElementById(a);
            a || da(13, !0);
            d = D(N(a, "data-highcharts-chart"));
            !isNaN(d) && X[d] && X[d].hasRendered && X[d].destroy();
            N(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            !c.skipClone && !a.offsetWidth && this.cloneRenderTo();
            this.getChartSize();
            d = this.chartWidth;
            e = this.chartHeight;
            this.container = a = ca(Fa, {
                className: "highcharts-container" + (c.className ? " " + c.className : ""),
                id: f
            }, q({
                position: "relative",
                overflow: "hidden",
                width: d + "px",
                height: e + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, c.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = new(B[c.renderer] || Na)(a, d, e, c.style, c.forExport, b.exporting && b.exporting.allowHTML);
            ia && this.renderer.create(this, a, d, e);
            this.renderer.chartIndex = this.index
        },
        getMargins: function(a) {
            var b = this.spacing,
                c = this.margin,
                d = this.titleOffset;
            this.resetMargins();
            if (d && !x(c[0])) this.plotTop = t(this.plotTop, d + this.options.title.margin + b[0]);
            this.legend.adjustMargins(c,
                b);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            a || this.getAxisMargins()
        },
        getAxisMargins: function() {
            var a = this,
                b = a.axisOffset = [0, 0, 0, 0],
                c = a.margin;
            a.hasCartesianSeries && o(a.axes, function(a) {
                a.visible && a.getOffset()
            });
            o(eb, function(d, e) {
                x(c[e]) || (a[d] += b[e])
            });
            a.setChartSize()
        },
        reflow: function(a) {
            var b = this,
                c = b.options.chart,
                d = b.renderTo,
                e = c.width || fb(d, "width"),
                f = c.height || fb(d, "height"),
                c = a ? a.target : H,
                d = function() {
                    if (b.container) b.setSize(e,
                        f, !1), b.hasUserSize = null
                };
            if (!b.hasUserSize && !b.isPrinting && e && f && (c === H || c === C)) {
                if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d();
                b.containerWidth = e;
                b.containerHeight = f
            }
        },
        initReflow: function() {
            var a = this,
                b = function(b) {
                    a.reflow(b)
                };
            L(H, "resize", b);
            L(a, "destroy", function() {
                aa(H, "resize", b)
            })
        },
        setSize: function(a, b, c) {
            var d = this,
                e, f, g, h = d.renderer;
            d.isResizing += 1;
            g = function() {
                d && I(d, "endResize", null, function() {
                    d.isResizing -= 1
                })
            };
            Ra(c,
                d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            if (x(a)) d.chartWidth = e = t(0, A(a)), d.hasUserSize = !!e;
            if (x(b)) d.chartHeight = f = t(0, A(b));
            a = h.globalAnimation;
            (a ? gb : K)(d.container, {
                width: e + "px",
                height: f + "px"
            }, a);
            d.setChartSize(!0);
            h.setSize(e, f, c);
            d.maxTicks = null;
            o(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            o(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            I(d, "resize");
            a = h.globalAnimation;
            a === !1 ?
                g() : setTimeout(g, a && a.duration || 500)
        },
        setChartSize: function(a) {
            var b = this.inverted,
                c = this.renderer,
                d = this.chartWidth,
                e = this.chartHeight,
                f = this.options.chart,
                g = this.spacing,
                h = this.clipOffset,
                i, j, k, l;
            this.plotLeft = i = A(this.plotLeft);
            this.plotTop = j = A(this.plotTop);
            this.plotWidth = k = t(0, A(d - i - this.marginRight));
            this.plotHeight = l = t(0, A(e - j - this.marginBottom));
            this.plotSizeX = b ? l : k;
            this.plotSizeY = b ? k : l;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: i,
                y: j,
                width: k,
                height: l
            };
            d = 2 * ga(this.plotBorderWidth / 2);
            b = ta(t(d, h[3]) / 2);
            c = ta(t(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: ga(this.plotSizeX - t(d, h[1]) / 2 - b),
                height: t(0, ga(this.plotSizeY - t(d, h[2]) / 2 - c))
            };
            a || o(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var a = this;
            o(eb, function(b, c) {
                a[b] = p(a.margin[c], a.spacing[c])
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var a = this.options.chart,
                b = this.renderer,
                c = this.chartWidth,
                d = this.chartHeight,
                e = this.chartBackground,
                f = this.plotBackground,
                g = this.plotBorder,
                h = this.plotBGImage,
                i = a.borderWidth || 0,
                j = a.backgroundColor,
                k = a.plotBackgroundColor,
                l = a.plotBackgroundImage,
                n = a.plotBorderWidth || 0,
                m, p = this.plotLeft,
                o = this.plotTop,
                q = this.plotWidth,
                y = this.plotHeight,
                z = this.plotBox,
                r = this.clipRect,
                t = this.clipBox;
            m = i + (a.shadow ? 8 : 0);
            if (i || j)
                if (e) e.animate(e.crisp({
                    width: c - m,
                    height: d - m
                }));
                else {
                    e = {
                        fill: j || S
                    };
                    if (i) e.stroke = a.borderColor, e["stroke-width"] = i;
                    this.chartBackground =
                        b.rect(m / 2, m / 2, c - m, d - m, a.borderRadius, i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)
                }
            if (k) f ? f.animate(z) : this.plotBackground = b.rect(p, o, q, y, 0).attr({
                fill: k
            }).add().shadow(a.plotShadow);
            if (l) h ? h.animate(z) : this.plotBGImage = b.image(l, p, o, q, y).add();
            r ? r.animate({
                width: t.width,
                height: t.height
            }) : this.clipRect = b.clipRect(t);
            if (n) g ? g.animate(g.crisp({
                x: p,
                y: o,
                width: q,
                height: y,
                strokeWidth: -n
            })) : this.plotBorder = b.rect(p, o, q, y, 0, -n).attr({
                stroke: a.plotBorderColor,
                "stroke-width": n,
                fill: S,
                zIndex: 1
            }).add();
            this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var a = this,
                b = a.options.chart,
                c, d = a.options.series,
                e, f;
            o(["inverted", "angular", "polar"], function(g) {
                c = v[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;)(c = v[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        },
        linkSeries: function() {
            var a = this,
                b = a.series;
            o(b, function(a) {
                a.linkedSeries.length = 0
            });
            o(b, function(b) {
                var d = b.options.linkedTo;
                if (Aa(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d))) d.linkedSeries.push(b),
                    b.linkedParent = d, b.visible = p(b.options.visible, d.options.visible, b.visible)
            })
        },
        renderSeries: function() {
            o(this.series, function(a) {
                a.translate();
                a.render()
            })
        },
        renderLabels: function() {
            var a = this,
                b = a.options.labels;
            b.items && o(b.items, function(c) {
                var d = q(b.style, c.style),
                    e = D(d.left) + a.plotLeft,
                    f = D(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({
                    zIndex: 2
                }).css(d).add()
            })
        },
        render: function() {
            var a = this.axes,
                b = this.renderer,
                c = this.options,
                d, e, f, g;
            this.setTitle();
            this.legend =
                new Xa(this, c.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            d = this.plotWidth;
            e = this.plotHeight -= 13;
            o(a, function(a) {
                a.setScale()
            });
            this.getAxisMargins();
            f = d / this.plotWidth > 1.1;
            g = e / this.plotHeight > 1.1;
            if (f || g) this.maxTicks = null, o(a, function(a) {
                (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0)
            }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && o(a, function(a) {
                a.visible && a.render()
            });
            if (!this.seriesGroup) this.seriesGroup = b.g("series-group").attr({
                zIndex: 3
            }).add();
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        },
        showCredits: function(a) {
            if (a.enabled && !this.credits) this.credits = this.renderer.text(a.text, 0, 0).on("click", function() {
                if (a.href) location.href = a.href
            }).attr({
                align: a.position.align,
                zIndex: 8
            }).css(a.style).add().align(a.position)
        },
        destroy: function() {
            var a = this,
                b = a.axes,
                c = a.series,
                d = a.container,
                e, f = d && d.parentNode;
            I(a, "destroy");
            X[a.index] = r;
            Ta--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            aa(a);
            for (e = b.length; e--;) b[e] =
                b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            if (d) d.innerHTML = "", aa(d), f && La(d);
            for (e in a) delete a[e]
        },
        isReadyToRender: function() {
            var a = this;
            return !fa && H == H.top && C.readyState !== "complete" || ia && !H.canvg ? (ia ? Hb.push(function() {
                    a.firstRender()
                }, a.options.global.canvasToolsURL) :
                C.attachEvent("onreadystatechange", function() {
                    C.detachEvent("onreadystatechange", a.firstRender);
                    C.readyState === "complete" && a.firstRender()
                }), !1) : !0
        },
        firstRender: function() {
            var a = this,
                b = a.options,
                c = a.callback;
            if (a.isReadyToRender()) {
                a.getContainer();
                I(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                o(b.series || [], function(b) {
                    a.initSeries(b)
                });
                a.linkSeries();
                I(a, "beforeRender");
                if (B.Pointer) a.pointer = new za(a, b);
                a.render();
                a.renderer.draw();
                c && c.apply(a, [a]);
                o(a.callbacks,
                    function(b) {
                        a.index !== r && b.apply(a, [a])
                    });
                I(a, "load");
                a.cloneRenderTo(!0)
            }
        },
        splashArray: function(a, b) {
            var c = b[a],
                c = ha(c) ? c : [c, c, c, c];
            return [p(b[a + "Top"], c[0]), p(b[a + "Right"], c[1]), p(b[a + "Bottom"], c[2]), p(b[a + "Left"], c[3])]
        }
    };
    var Z = function() {};
    Z.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.color = a.color;
            this.applyOptions(b, c);
            this.pointAttr = {};
            if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length)) a.colorCounter =
                0;
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a, b) {
            var c = this.series,
                d = c.options.pointValKey || c.pointValKey,
                a = Z.prototype.optionsToObject.call(this, a);
            q(this, a);
            this.options = this.options ? q(this.options, a) : a;
            if (d) this.y = this[d];
            if (this.x === r && c) this.x = b === r ? c.autoIncrement() : b;
            return this
        },
        optionsToObject: function(a) {
            var b = {},
                c = this.series,
                d = c.options.keys,
                e = d || c.pointArrayMap || ["y"],
                f = e.length,
                g = 0,
                h = 0;
            if (typeof a === "number" || a === null) b[e[0]] = a;
            else if (Ca(a)) {
                if (!d && a.length > f) {
                    c = typeof a[0];
                    if (c === "string") b.name = a[0];
                    else if (c === "number") b.x = a[0];
                    g++
                }
                for (; h < f;) {
                    if (!d || a[g] !== void 0) b[e[h]] = a[g];
                    g++;
                    h++
                }
            } else if (typeof a === "object") {
                b = a;
                if (a.dataLabels) c._hasPointLabels = !0;
                if (a.marker) c._hasPointMarkers = !0
            }
            return b
        },
        destroy: function() {
            var a = this.series.chart,
                b = a.hoverPoints,
                c;
            a.pointCount--;
            if (b && (this.setState(), wa(b, this), !b.length)) a.hoverPoints = null;
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) aa(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function() {
            for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(a) {
            var b = this.series,
                c = b.tooltipOptions,
                d = p(c.valueDecimals, ""),
                e = c.valuePrefix || "",
                f = c.valueSuffix ||
                "";
            o(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return Ja(a, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            a === "click" && e.allowPointSelect && (c = function(a) {
                d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            I(this, a, b, c)
        },
        visible: !0
    };
    var Q = B.Series = function() {};
    Q.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Z,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(a, b) {
            var c = this,
                d, e, f = a.series,
                g = function(a, b) {
                    return p(a.options.index, a._i) - p(b.options.index, b._i)
                };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            q(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: b.visible !== !1,
                selected: b.selected ===
                    !0
            });
            if (ia) b.animation = !1;
            e = b.events;
            for (d in e) L(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            o(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            if (c.isCartesian) a.hasCartesianSeries = !0;
            f.push(c);
            c._i = f.length - 1;
            ib(f, g);
            this.yAxis && ib(this.yAxis.series, g);
            o(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function() {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            o(a.axisTypes || [], function(e) {
                o(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== r && b[e] === d.id || b[e] === r && d.index === 0) c.series.push(a), a[e] = c, c.isDirty = !0
                });
                !a[e] && a.optionalAxis !== e && da(18, !0)
            })
        },
        updateParallelArrays: function(a, b) {
            var c = a.series,
                d = arguments;
            o(c.parallelArrays, typeof b === "number" ? function(d) {
                var f = d === "y" && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f
            } : function(a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            })
        },
        autoIncrement: function() {
            var a = this.options,
                b = this.xIncrement,
                c, d = a.pointIntervalUnit,
                b = p(b, a.pointStart, 0);
            this.pointInterval = c = p(this.pointInterval, a.pointInterval, 1);
            if (d === "month" || d === "year") a = new Ga(b), a = d === "month" ? +a[Ab](a[kb]() + c) : +a[Bb](a[lb]() + c), c = a - b;
            this.xIncrement = b + c;
            return b
        },
        getSegments: function() {
            var a = -1,
                b = [],
                c, d = this.points,
                e = d.length;
            if (e)
                if (this.options.connectNulls) {
                    for (c = e; c--;) d[c].y === null && d.splice(c, 1);
                    d.length && (b = [d])
                } else o(d, function(c, g) {
                    c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
                });
            this.segments =
                b
        },
        setOptions: function(a) {
            var b = this.chart,
                c = b.options.plotOptions,
                b = b.userOptions || {},
                d = b.plotOptions || {},
                e = c[this.type];
            this.userOptions = a;
            c = w(e, c.series, a);
            this.tooltipOptions = w(J.tooltip, J.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            e.marker === null && delete c.marker;
            this.zoneAxis = c.zoneAxis;
            a = this.zones = (c.zones || []).slice();
            if ((c.negativeColor || c.negativeFillColor) && !c.zones) a.push({
                value: c[this.zoneAxis + "Threshold"] || c.threshold ||
                    0,
                color: c.negativeColor,
                fillColor: c.negativeFillColor
            });
            a.length && x(a[a.length - 1].value) && a.push({
                color: this.color,
                fillColor: this.fillColor
            });
            return c
        },
        getCyclic: function(a, b, c) {
            var d = this.userOptions,
                e = "_" + a + "Index",
                f = a + "Counter";
            b || (x(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        },
        getColor: function() {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || V[this.type].color, this.chart.options.colors)
        },
        getSymbol: function() {
            var a =
                this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            if (/^url/.test(this.symbol)) a.radius = 0
        },
        drawLegendSymbol: Ya.drawLineMarker,
        setData: function(a, b, c, d) {
            var e = this,
                f = e.points,
                g = f && f.length || 0,
                h, i = e.options,
                j = e.chart,
                k = null,
                l = e.xAxis,
                n = l && !!l.categories,
                m = i.turboThreshold,
                u = this.xData,
                s = this.yData,
                q = (h = e.pointArrayMap) && h.length,
                a = a || [];
            h = a.length;
            b = p(b, !0);
            if (d !== !1 && h && g === h && !e.cropped && !e.hasGroupedData && e.visible) o(a, function(a, b) {
                f[b].update && f[b].update(a, !1, null, !1)
            });
            else {
                e.xIncrement = null;
                e.pointRange = n ? 1 : i.pointRange;
                e.colorCounter = 0;
                o(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0
                });
                if (m && h > m) {
                    for (c = 0; k === null && c < h;) k = a[c], c++;
                    if (qa(k)) {
                        n = p(i.pointStart, 0);
                        k = p(i.pointInterval, 1);
                        for (c = 0; c < h; c++) u[c] = n, s[c] = a[c], n += k;
                        e.xIncrement = n
                    } else if (Ca(k))
                        if (q)
                            for (c = 0; c < h; c++) k = a[c], u[c] = k[0], s[c] = k.slice(1, q + 1);
                        else
                            for (c = 0; c < h; c++) k = a[c], u[c] = k[0], s[c] = k[1];
                    else da(12)
                } else
                    for (c = 0; c < h; c++)
                        if (a[c] !== r && (k = {
                                series: e
                            }, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c), n && x(k.name))) l.names[k.x] = k.name;
                Aa(s[0]) && da(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--;) f[c] && f[c].destroy && f[c].destroy();
                if (l) l.minRange = l.userMinRange;
                e.isDirty = e.isDirtyData = j.isDirtyBox = !0;
                c = !1
            }
            i.legendType === "point" && (this.processData(), this.generatePoints());
            b && j.redraw(c)
        },
        processData: function(a) {
            var b = this.xData,
                c = this.yData,
                d = b.length,
                e;
            e = 0;
            var f, g, h = this.xAxis,
                i, j = this.options;
            i = j.cropThreshold;
            var k = this.getExtremesFromAll || j.getExtremesFromAll,
                l = this.isCartesian,
                n, m;
            if (l && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            if (h) a = h.getExtremes(), n = a.min, m = a.max;
            if (l && this.sorted && !k && (!i || d > i || this.forceCrop))
                if (b[d - 1] < n || b[0] > m) b = [], c = [];
                else if (b[0] < n || b[d - 1] > m) e = this.cropData(this.xData, this.yData, n, m), b = e.xData, c = e.yData, e = e.start, f = !0;
            for (i = b.length - 1; i >= 0; i--) d = b[i] - b[i - 1], d > 0 && (g === r || d < g) ? g = d : d < 0 && this.requireSorting && da(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            if (j.pointRange === null) this.pointRange =
                g || 1;
            this.closestPointRange = g
        },
        cropData: function(a, b, c, d) {
            var e = a.length,
                f = 0,
                g = e,
                h = p(this.cropShoulder, 1),
                i;
            for (i = 0; i < e; i++)
                if (a[i] >= c) {
                    f = t(0, i - h);
                    break
                }
            for (; i < e; i++)
                if (a[i] > d) {
                    g = i + h;
                    break
                }
            return {
                xData: a.slice(f, g),
                yData: b.slice(f, g),
                start: f,
                end: g
            }
        },
        generatePoints: function() {
            var a = this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart || 0,
                i, j = this.hasGroupedData,
                k, l = [],
                n;
            if (!b && !j) b = [], b.length = a.length, b = this.data = b;
            for (n = 0; n < g; n++) i =
                h + n, j ? l[n] = (new f).init(this, [d[n]].concat(ra(e[n]))) : (b[i] ? k = b[i] : a[i] !== r && (b[i] = k = (new f).init(this, a[i], d[n])), l[n] = k), l[n].index = i;
            if (b && (g !== (c = b.length) || j))
                for (n = 0; n < c; n++)
                    if (n === h && !j && (n += g), b[n]) b[n].destroyElements(), b[n].plotX = r;
            this.data = b;
            this.points = l
        },
        getExtremes: function(a) {
            var b = this.yAxis,
                c = this.processedXData,
                d, e = [],
                f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min,
                h = d.max,
                i, j, k, l, a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (l = 0; l < d; l++)
                if (j = c[l], k = a[l], i = k !== null && k !==
                    r && (!b.isLog || k.length || k > 0), j = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[l + 1] || j) >= g && (c[l - 1] || j) <= h, i && j)
                    if (i = k.length)
                        for (; i--;) k[i] !== null && (e[f++] = k[i]);
                    else e[f++] = k;
            this.dataMin = Qa(e);
            this.dataMax = Ea(e)
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, j = i === "between" || qa(i), k = a.threshold,
                    l = a.startFromThreshold ? k : 0, n, m, o, s, q = Number.MAX_VALUE, a = 0; a < g; a++) {
                var y = f[a],
                    z = y.x,
                    w = y.y;
                m = y.low;
                var v = b && e.stacks[(this.negStacks && w < (l ? 0 : k) ? "-" : "") + this.stackKey];
                if (e.isLog && w !== null && w <= 0) y.y = w = null, da(10);
                y.plotX = n = E(t(-1E5, c.translate(z, 0, 0, 0, 1, i, this.type === "flags")), 1E5);
                if (b && this.visible && v && v[z]) s = this.getStackIndicator(s, z, this.index), v = v[z], w = v.points[s.key], m = w[0], w = w[1], m === l && (m = p(k, e.min)), e.isLog && m <= 0 && (m = null), y.total = y.stackTotal = v.total, y.percentage = v.total && y.y / v.total * 100,
                    y.stackY = w, v.setOffset(this.pointXOffset || 0, this.barW || 0);
                y.yBottom = x(m) ? e.translate(m, 0, 1, 0, 1) : null;
                h && (w = this.modifyValue(w, y));
                y.plotY = m = typeof w === "number" && w !== Infinity ? E(t(-1E5, e.translate(w, 0, 1, 0, 1)), 1E5) : r;
                y.isInside = m !== r && m >= 0 && m <= e.len && n >= 0 && n <= c.len;
                y.clientX = j ? c.translate(z, 0, 0, 0, 1) : n;
                y.negative = y.y < (k || 0);
                y.category = d && d[y.x] !== r ? d[y.x] : y.x;
                a && (q = E(q, O(n - o)));
                o = n
            }
            this.closestPointRangePx = q;
            this.getSegments()
        },
        setClip: function(a) {
            var b = this.chart,
                c = this.options,
                d = b.renderer,
                e = b.inverted,
                f = this.clipBox,
                g = f || b.clipBox,
                h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, c.xAxis, c.yAxis].join(","),
                i = b[h],
                j = b[h + "m"];
            if (!i) {
                if (a) g.width = 0, b[h + "m"] = j = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight);
                b[h] = i = d.clipRect(g)
            }
            a && (i.count += 1);
            if (c.clip !== !1) this.group.clip(a || f ? i : b.clipRect), this.markerGroup.clip(j), this.sharedClipKey = h;
            a || (i.count -= 1, i.count <= 0 && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
        },
        animate: function(a) {
            var b =
                this.chart,
                c = this.options.animation,
                d;
            if (c && !ha(c)) c = V[this.type].animation;
            a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({
                width: b.plotSizeX
            }, c), b[d + "m"] && b[d + "m"].animate({
                width: b.plotSizeX + 99
            }, c), this.animate = null)
        },
        afterAnimate: function() {
            this.setClip();
            I(this, "afterAnimate")
        },
        drawPoints: function() {
            var a, b = this.points,
                c = this.chart,
                d, e, f, g, h, i, j, k, l = this.options.marker,
                n = this.pointAttr[""],
                m, o, s, t = this.markerGroup,
                y = p(l.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * l.radius);
            if (l.enabled !== !1 || this._hasPointMarkers)
                for (f = b.length; f--;)
                    if (g = b[f], d = ga(g.plotX), e = g.plotY, k = g.graphic, m = g.marker || {}, o = !!g.marker, a = y && m.enabled === r || m.enabled, s = g.isInside, a && e !== r && !isNaN(e) && g.y !== null)
                        if (a = g.pointAttr[g.selected ? "select" : ""] || n, h = a.r, i = p(m.symbol, this.symbol), j = i.indexOf("url") === 0, k) k[s ? "show" : "hide"](!0).animate(q({
                            x: d - h,
                            y: e - h
                        }, k.symbolName ? {
                            width: 2 * h,
                            height: 2 * h
                        } : {}));
                        else {
                            if (s && (h > 0 || j)) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h, o ? m : l).attr(a).add(t)
                        } else if (k) g.graphic =
                k.destroy()
        },
        convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions,
                f, g, h = {},
                a = a || {},
                b = b || {},
                c = c || {},
                d = d || {};
            for (f in e) g = e[f], h[f] = p(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function() {
            var a = this,
                b = a.options,
                c = V[a.type].marker ? b.marker : b,
                d = c.states,
                e = d.hover,
                f, g = a.color,
                h = a.options.negativeColor;
            f = {
                stroke: g,
                fill: g
            };
            var i = a.points || [],
                j, k, l = [],
                n = a.pointAttrToOptions;
            j = a.hasPointSpecificOptions;
            var m = c.lineColor,
                u = c.fillColor;
            k = b.turboThreshold;
            var s = a.zones,
                t = a.zoneAxis || "y",
                y;
            b.marker ? (e.radius =
                e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || W(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || W(e.negativeColor || h).brighten(e.brightness).get());
            l[""] = a.convertAttribs(c, f);
            o(["hover", "select"], function(b) {
                l[b] = a.convertAttribs(d[b], l[""])
            });
            a.pointAttr = l;
            g = i.length;
            if (!k || g < k || j)
                for (; g--;) {
                    k = i[g];
                    if ((c = k.options && k.options.marker || k.options) && c.enabled === !1) c.radius = 0;
                    if (s.length) {
                        j = 0;
                        for (f = s[j]; k[t] >= f.value;) f =
                            s[++j];
                        k.color = k.fillColor = p(f.color, a.color)
                    }
                    j = b.colorByPoint || k.color;
                    if (k.options)
                        for (y in n) x(c[n[y]]) && (j = !0);
                    if (j) {
                        c = c || {};
                        j = [];
                        d = c.states || {};
                        f = d.hover = d.hover || {};
                        if (!b.marker || k.negative && !f.fillColor && !e.fillColor) f[a.pointAttrToOptions.fill] = f.color || !k.options.color && e[k.negative && h ? "negativeColor" : "color"] || W(k.color).brighten(f.brightness || e.brightness).get();
                        f = {
                            color: k.color
                        };
                        if (!u) f.fillColor = k.color;
                        if (!m) f.lineColor = k.color;
                        c.hasOwnProperty("color") && !c.color && delete c.color;
                        j[""] =
                            a.convertAttribs(q(f, c), l[""]);
                        j.hover = a.convertAttribs(d.hover, l.hover, j[""]);
                        j.select = a.convertAttribs(d.select, l.select, j[""])
                    } else j = l;
                    k.pointAttr = j
                }
        },
        destroy: function() {
            var a = this,
                b = a.chart,
                c = /AppleWebKit\/533/.test(ya),
                d, e = a.data || [],
                f, g, h;
            I(a, "destroy");
            aa(a);
            o(a.axisTypes || [], function(b) {
                if (h = a[b]) wa(h.series, a), h.isDirty = h.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (d = e.length; d--;)(f = e[d]) && f.destroy && f.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            for (g in a) a[g] instanceof
            R && !a[g].survive && (d = c && g === "group" ? "hide" : "destroy", a[g][d]());
            if (b.hoverSeries === a) b.hoverSeries = null;
            wa(b.series, a);
            for (g in a) delete a[g]
        },
        getSegmentPath: function(a) {
            var b = this,
                c = [],
                d = b.options.step;
            o(a, function(e, f) {
                var g = e.plotX,
                    h = e.plotY,
                    i;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h, "L") : d === "center" ? c.push((i.plotX + g) / 2, i.plotY, "L", (i.plotX + g) / 2, h, "L") : c.push(g, i.plotY, "L")), c.push(e.plotX, e.plotY))
            });
            return c
        },
        getGraphPath: function() {
            var a =
                this,
                b = [],
                c, d = [];
            o(a.segments, function(e) {
                c = a.getSegmentPath(e);
                e.length > 1 ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath = b
        },
        drawGraph: function() {
            var a = this,
                b = this.options,
                c = [
                    ["graph", b.lineColor || this.color, b.dashStyle]
                ],
                d = b.lineWidth,
                e = b.linecap !== "square",
                f = this.getGraphPath(),
                g = this.fillGraph && this.color || S;
            o(this.zones, function(d, e) {
                c.push(["zoneGraph" + e, d.color || a.color, d.dashStyle || b.dashStyle])
            });
            o(c, function(c, i) {
                var j = c[0],
                    k = a[j];
                if (k) k.animate({
                    d: f
                });
                else if ((d || g) && f.length) k = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: g,
                    zIndex: 1
                }, c[2] ? k.dashstyle = c[2] : e && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), a[j] = a.chart.renderer.path(f).attr(k).add(a.group).shadow(i < 2 && b.shadow)
            })
        },
        applyZones: function() {
            var a = this,
                b = this.chart,
                c = b.renderer,
                d = this.zones,
                e, f, g = this.clips || [],
                h, i = this.graph,
                j = this.area,
                k = t(b.chartWidth, b.chartHeight),
                l = this[(this.zoneAxis || "y") + "Axis"],
                n, m = l.reversed,
                u = b.inverted,
                s = l.horiz,
                q, y, z, x = !1;
            if (d.length && (i || j) && l.min !== r) i && i.hide(), j && j.hide(), n = l.getExtremes(),
                o(d, function(d, o) {
                    e = m ? s ? b.plotWidth : 0 : s ? 0 : l.toPixels(n.min);
                    e = E(t(p(f, e), 0), k);
                    f = E(t(A(l.toPixels(p(d.value, n.max), !0)), 0), k);
                    x && (e = f = l.toPixels(n.max));
                    q = Math.abs(e - f);
                    y = E(e, f);
                    z = t(e, f);
                    if (l.isXAxis) {
                        if (h = {
                                x: u ? z : y,
                                y: 0,
                                width: q,
                                height: k
                            }, !s) h.x = b.plotHeight - h.x
                    } else if (h = {
                            x: 0,
                            y: u ? z : y,
                            width: k,
                            height: q
                        }, s) h.y = b.plotWidth - h.y;
                    b.inverted && c.isVML && (h = l.isXAxis ? {
                        x: 0,
                        y: m ? y : z,
                        height: h.width,
                        width: b.chartWidth
                    } : {
                        x: h.y - b.plotLeft - b.spacingBox.x,
                        y: 0,
                        width: h.height,
                        height: b.chartHeight
                    });
                    g[o] ? g[o].animate(h) :
                        (g[o] = c.clipRect(h), i && a["zoneGraph" + o].clip(g[o]), j && a["zoneArea" + o].clip(g[o]));
                    x = d.value > n.max
                }), this.clips = g
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                o(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b = this,
                c = b.chart;
            if (b.xAxis) L(c, "resize", a), L(b, "destroy", function() {
                aa(c, "resize", a)
            }), a(), b.invertGroups = a
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a],
                g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                    visibility: c,
                    zIndex: d || 0.1
                }).add(e),
                f.addClass("highcharts-series-" + this.index));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function() {
            var a = this.chart,
                b = this.xAxis,
                c = this.yAxis;
            if (a.inverted) b = c, c = this.xAxis;
            return {
                translateX: b ? b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c, d = a.options,
                e = (c = d.animation) && !!a.animate && b.renderer.isSVG && p(c.duration, 500) || 0,
                f = a.visible ? "visible" : "hidden",
                g = d.zIndex,
                h = a.hasRendered,
                i = b.seriesGroup;
            c = a.plotGroup("group", "series",
                f, g, i);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, i);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            o(a.points, function(a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker();
            b.inverted && a.invertGroups();
            d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect);
            e && a.animate();
            if (!h) e ? a.animationTimeout = setTimeout(function() {
                    a.afterAnimate()
                },
                e) : a.afterAnimate();
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function() {
            var a = this.chart,
                b = this.isDirtyData,
                c = this.isDirty,
                d = this.group,
                e = this.xAxis,
                f = this.yAxis;
            d && (a.inverted && d.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), d.animate({
                translateX: p(e && e.left, a.plotLeft),
                translateY: p(f && f.top, a.plotTop)
            }));
            this.translate();
            this.render();
            b && I(this, "updatedData");
            (c || b) && delete this.kdTree
        },
        kdDimensions: 1,
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function(a, b) {
            var c = this.xAxis,
                d = this.yAxis,
                e = this.chart.inverted;
            return this.searchKDTree({
                clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos,
                plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos
            }, b)
        },
        buildKDTree: function() {
            function a(b, d, g) {
                var h, i;
                if (i = b && b.length) return h = c.kdAxisArray[d % g], b.sort(function(a, b) {
                    return a[h] - b[h]
                }), i = Math.floor(i / 2), {
                    point: b[i],
                    left: a(b.slice(0, i), d + 1, g),
                    right: a(b.slice(i + 1), d + 1, g)
                }
            }

            function b() {
                var b = pb(c.points || [], function(a) {
                    return a.y !== null
                });
                c.kdTree = a(b, d, d)
            }
            var c = this,
                d = c.kdDimensions;
            delete c.kdTree;
            c.options.kdSync ?
                b() : setTimeout(b)
        },
        searchKDTree: function(a, b) {
            function c(a, b, j, k) {
                var l = b.point,
                    n = d.kdAxisArray[j % k],
                    m, o, p = l;
                o = x(a[e]) && x(l[e]) ? Math.pow(a[e] - l[e], 2) : null;
                m = x(a[f]) && x(l[f]) ? Math.pow(a[f] - l[f], 2) : null;
                m = (o || 0) + (m || 0);
                l.dist = x(m) ? Math.sqrt(m) : Number.MAX_VALUE;
                l.distX = x(o) ? Math.sqrt(o) : Number.MAX_VALUE;
                n = a[n] - l[n];
                m = n < 0 ? "left" : "right";
                o = n < 0 ? "right" : "left";
                b[m] && (m = c(a, b[m], j + 1, k), p = m[g] < p[g] ? m : l);
                b[o] && Math.sqrt(n * n) < p[g] && (a = c(a, b[o], j + 1, k), p = a[g] < p[g] ? a : p);
                return p
            }
            var d = this,
                e = this.kdAxisArray[0],
                f = this.kdAxisArray[1],
                g = b ? "distX" : "dist";
            this.kdTree || this.buildKDTree();
            if (this.kdTree) return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
        }
    };
    q(ma.prototype, {
        addSeries: function(a, b, c) {
            var d, e = this;
            a && (b = p(b, !0), I(e, "addSeries", {
                options: a
            }, function() {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                e.linkSeries();
                b && e.redraw(c)
            }));
            return d
        },
        addAxis: function(a, b, c, d) {
            var e = b ? "xAxis" : "yAxis",
                f = this.options;
            new Y(this, w(a, {
                index: this[e].length,
                isX: b
            }));
            f[e] = ra(f[e] || {});
            f[e].push(a);
            p(c, !0) && this.redraw(d)
        },
        showLoading: function(a) {
            var b = this,
                c = b.options,
                d = b.loadingDiv,
                e = c.loading,
                f = function() {
                    d && K(d, {
                        left: b.plotLeft + "px",
                        top: b.plotTop + "px",
                        width: b.plotWidth + "px",
                        height: b.plotHeight + "px"
                    })
                };
            if (!d) b.loadingDiv = d = ca(Fa, {
                className: "highcharts-loading"
            }, q(e.style, {
                zIndex: 10,
                display: S
            }), b.container), b.loadingSpan = ca("span", null, e.labelStyle, d), L(b, "redraw", f);
            b.loadingSpan.innerHTML = a || c.lang.loading;
            if (!b.loadingShown) K(d, {
                    opacity: 0,
                    display: ""
                }), gb(d, {
                    opacity: e.style.opacity
                }, {
                    duration: e.showDuration || 0
                }),
                b.loadingShown = !0;
            f()
        },
        hideLoading: function() {
            var a = this.options,
                b = this.loadingDiv;
            b && gb(b, {
                opacity: 0
            }, {
                duration: a.loading.hideDuration || 100,
                complete: function() {
                    K(b, {
                        display: S
                    })
                }
            });
            this.loadingShown = !1
        }
    });
    q(Z.prototype, {
        update: function(a, b, c, d) {
            function e() {
                f.applyOptions(a);
                if (f.y === null && h) f.graphic = h.destroy();
                if (ha(a) && !Ca(a)) f.redraw = function() {
                    if (h && h.element && a && a.marker && a.marker.symbol) f.graphic = h.destroy();
                    if (a && a.dataLabels && f.dataLabel) f.dataLabel = f.dataLabel.destroy();
                    f.redraw = null
                };
                i = f.index;
                g.updateParallelArrays(f, i);
                if (l && f.name) l[f.x] = f.name;
                k.data[i] = f.options;
                g.isDirty = g.isDirtyData = !0;
                if (!g.fixedBox && g.hasCartesianSeries) j.isDirtyBox = !0;
                if (k.legendType === "point") j.isDirtyLegend = !0;
                b && j.redraw(c)
            }
            var f = this,
                g = f.series,
                h = f.graphic,
                i, j = g.chart,
                k = g.options,
                l = g.xAxis && g.xAxis.names,
                b = p(b, !0);
            d === !1 ? e() : f.firePointEvent("update", {
                options: a
            }, e)
        },
        remove: function(a, b) {
            this.series.removePoint(Ua(this, this.series.data), a, b)
        }
    });
    q(Q.prototype, {
        addPoint: function(a, b, c, d) {
            var e = this,
                f = e.options,
                g = e.data,
                h = e.graph,
                i = e.area,
                j = e.chart,
                k = e.xAxis && e.xAxis.names,
                l = h && h.shift || 0,
                n = ["graph", "area"],
                h = f.data,
                m, u = e.xData;
            Ra(d, j);
            if (c) {
                for (d = e.zones.length; d--;) n.push("zoneGraph" + d, "zoneArea" + d);
                o(n, function(a) {
                    if (e[a]) e[a].shift = l + (f.step ? 2 : 1)
                })
            }
            if (i) i.isArea = !0;
            b = p(b, !0);
            i = {
                series: e
            };
            e.pointClass.prototype.applyOptions.apply(i, [a]);
            n = i.x;
            d = u.length;
            if (e.requireSorting && n < u[d - 1])
                for (m = !0; d && u[d - 1] > n;) d--;
            e.updateParallelArrays(i, "splice", d, 0, 0);
            e.updateParallelArrays(i, d);
            if (k && i.name) k[n] =
                i.name;
            h.splice(d, 0, a);
            m && (e.data.splice(d, 0, null), e.processData());
            f.legendType === "point" && e.generatePoints();
            c && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), e.updateParallelArrays(i, "shift"), h.shift()));
            e.isDirty = !0;
            e.isDirtyData = !0;
            b && (e.getAttribs(), j.redraw())
        },
        removePoint: function(a, b, c) {
            var d = this,
                e = d.data,
                f = e[a],
                g = d.points,
                h = d.chart,
                i = function() {
                    e.length === g.length && g.splice(a, 1);
                    e.splice(a, 1);
                    d.options.data.splice(a, 1);
                    d.updateParallelArrays(f || {
                        series: d
                    }, "splice", a, 1);
                    f && f.destroy();
                    d.isDirty = !0;
                    d.isDirtyData = !0;
                    b && h.redraw()
                };
            Ra(c, h);
            b = p(b, !0);
            f ? f.firePointEvent("remove", null, i) : i()
        },
        remove: function(a, b) {
            var c = this,
                d = c.chart,
                a = p(a, !0);
            if (!c.isRemoving) c.isRemoving = !0, I(c, "remove", null, function() {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                d.linkSeries();
                a && d.redraw(b)
            });
            c.isRemoving = !1
        },
        update: function(a, b) {
            var c = this,
                d = this.chart,
                e = this.userOptions,
                f = this.type,
                g = v[f].prototype,
                h = ["group", "markerGroup", "dataLabelsGroup"],
                i;
            if (a.type && a.type !== f || a.zIndex !== void 0) h.length = 0;
            o(h, function(a) {
                h[a] =
                    c[a];
                delete c[a]
            });
            a = w(e, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, a);
            this.remove(!1);
            for (i in g) this[i] = r;
            q(this, v[a.type || f].prototype);
            o(h, function(a) {
                c[a] = h[a]
            });
            this.init(d, a);
            d.linkSeries();
            p(b, !0) && d.redraw(!1)
        }
    });
    q(Y.prototype, {
        update: function(a, b) {
            var c = this.chart,
                a = c.options[this.coll][this.options.index] = w(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = this.chart._labelPanes = r;
            this.init(c, q(a, {
                events: r
            }));
            c.isDirtyBox = !0;
            p(b, !0) && c.redraw()
        },
        remove: function(a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--;) d[e] && d[e].remove(!1);
            wa(b.axes, this);
            wa(b[c], this);
            b.options[c].splice(this.options.index, 1);
            o(b[c], function(a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            p(a, !0) && b.redraw()
        },
        setTitle: function(a, b) {
            this.update({
                title: a
            }, b)
        },
        setCategories: function(a, b) {
            this.update({
                categories: a
            }, b)
        }
    });
    M = $(Q);
    v.line = M;
    V.column = w(U, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        softThreshold: !1,
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    M = $(Q, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            Q.prototype.init.apply(this,
                arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && o(b.series, function(b) {
                if (b.type === a.type) b.isDirty = !0
            })
        },
        getColumnMetrics: function() {
            var a = this,
                b = a.options,
                c = a.xAxis,
                d = a.yAxis,
                e = c.reversed,
                f, g = {},
                h, i = 0;
            b.grouping === !1 ? i = 1 : o(a.chart.series, function(b) {
                var c = b.options,
                    e = b.yAxis;
                if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos) c.stacking ? (f = b.stackKey, g[f] === r && (g[f] = i++), h = g[f]) : c.grouping !== !1 && (h = i++), b.columnIndex = h
            });
            var j = E(O(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange ||
                    c.tickInterval || 1), c.len),
                k = j * b.groupPadding,
                l = (j - 2 * k) / i,
                b = E(b.maxPointWidth || c.len, p(b.pointWidth, l * (1 - 2 * b.pointPadding)));
            return a.columnMetrics = {
                width: b,
                offset: (l - b) / 2 + (k + ((e ? i - (a.columnIndex || 0) : a.columnIndex) || 0) * l - j / 2) * (e ? -1 : 1)
            }
        },
        crispCol: function(a, b, c, d) {
            var e = this.chart,
                f = this.borderWidth,
                g = -(f % 2 ? 0.5 : 0),
                f = f % 2 ? 0.5 : 1;
            e.inverted && e.renderer.isVML && (f += 1);
            c = Math.round(a + c) + g;
            a = Math.round(a) + g;
            c -= a;
            g = O(b) <= 0.5;
            d = Math.round(b + d) + f;
            b = Math.round(b) + f;
            d -= b;
            g && (b -= 1, d += 1);
            return {
                x: a,
                y: b,
                width: c,
                height: d
            }
        },
        translate: function() {
            var a = this,
                b = a.chart,
                c = a.options,
                d = a.borderWidth = p(c.borderWidth, a.closestPointRange * a.xAxis.transA < 2 ? 0 : 1),
                e = a.yAxis,
                f = a.translatedThreshold = e.getThreshold(c.threshold),
                g = p(c.minPointLength, 5),
                h = a.getColumnMetrics(),
                i = h.width,
                j = a.barW = t(i, 1 + 2 * d),
                k = a.pointXOffset = h.offset;
            b.inverted && (f -= 0.5);
            c.pointPadding && (j = ta(j));
            Q.prototype.translate.apply(a);
            o(a.points, function(c) {
                var d = E(p(c.yBottom, f), 9E4),
                    h = 999 + O(d),
                    h = E(t(-h, c.plotY), e.len + h),
                    o = c.plotX + k,
                    s = j,
                    q = E(h, d),
                    y, z = t(h, d) - q;
                O(z) <
                    g && g && (z = g, y = !e.reversed && !c.negative || e.reversed && c.negative, q = O(q - f) > g ? d - g : f - (y ? g : 0));
                c.barX = o;
                c.pointWidth = i;
                c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - o - s / 2, z] : [o + s / 2, h + e.pos - b.plotTop, z];
                c.shapeType = "rect";
                c.shapeArgs = a.crispCol(o, q, s, z)
            })
        },
        getSymbol: T,
        drawLegendSymbol: Ya.drawRectangle,
        drawGraph: T,
        drawPoints: function() {
            var a = this,
                b = this.chart,
                c = a.options,
                d = b.renderer,
                e = c.animationLimit || 250,
                f, g;
            o(a.points, function(h) {
                var i = h.plotY,
                    j = h.graphic;
                if (i !== r && !isNaN(i) && h.y !== null) f =
                    h.shapeArgs, i = x(a.borderWidth) ? {
                        "stroke-width": a.borderWidth
                    } : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], j ? (Va(j), j.attr(i)[b.pointCount < e ? "animate" : "attr"](w(f))) : h.graphic = d[h.shapeType](f).attr(i).attr(g).add(h.group || a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius);
                else if (j) h.graphic = j.destroy()
            })
        },
        animate: function(a) {
            var b = this.yAxis,
                c = this.options,
                d = this.chart.inverted,
                e = {};
            if (fa) a ? (e.scaleY = 0.001, a = E(b.pos + b.len, t(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len :
                e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null)
        },
        remove: function() {
            var a = this,
                b = a.chart;
            b.hasRendered && o(b.series, function(b) {
                if (b.type === a.type) b.isDirty = !0
            });
            Q.prototype.remove.apply(a, arguments)
        }
    });
    v.column = M;
    V.scatter = w(U, {
        lineWidth: 0,
        marker: {
            enabled: !0
        },
        tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    U = $(Q, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        kdDimensions: 2,
        drawGraph: function() {
            this.options.lineWidth && Q.prototype.drawGraph.call(this)
        }
    });
    v.scatter = U;
    Q.prototype.drawDataLabels = function() {
        var a = this,
            b = a.options,
            c = b.cursor,
            d = b.dataLabels,
            e = a.points,
            f, g, h = a.hasRendered || 0,
            i, j, k = a.chart.renderer;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), j = a.plotGroup("dataLabelsGroup",
            "data-labels", d.defer ? "hidden" : "visible", d.zIndex || 6), p(d.defer, !0) && (j.attr({
            opacity: +h
        }), h || L(a, "afterAnimate", function() {
            a.visible && j.show();
            j[b.animation ? "animate" : "attr"]({
                opacity: 1
            }, {
                duration: 200
            })
        })), g = d, o(e, function(e) {
            var h, m = e.dataLabel,
                o, s, t = e.connector,
                y = !0,
                z, v = {};
            f = e.dlOptions || e.options && e.options.dataLabels;
            h = p(f && f.enabled, g.enabled);
            if (m && !h) e.dataLabel = m.destroy();
            else if (h) {
                d = w(g, f);
                z = d.style;
                h = d.rotation;
                o = e.getLabelConfig();
                i = d.format ? Ja(d.format, o) : d.formatter.call(o, d);
                z.color =
                    p(d.color, z.color, a.color, "black");
                if (m)
                    if (x(i)) m.attr({
                        text: i
                    }), y = !1;
                    else {
                        if (e.dataLabel = m = m.destroy(), t) e.connector = t.destroy()
                    } else if (x(i)) {
                    m = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius || 0,
                        rotation: h,
                        padding: d.padding,
                        zIndex: 1
                    };
                    if (z.color === "contrast") v.color = d.inside || d.distance < 0 || b.stacking ? k.getContrast(e.color || a.color) : "#000000";
                    if (c) v.cursor = c;
                    for (s in m) m[s] === r && delete m[s];
                    m = e.dataLabel = k[h ? "text" : "label"](i, 0, -999, d.shape, null, null, d.useHTML).attr(m).css(q(z,
                        v)).add(j).shadow(d.shadow)
                }
                m && a.alignDataLabel(e, m, d, null, y)
            }
        })
    };
    Q.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart,
            g = f.inverted,
            h = p(a.plotX, -999),
            i = p(a.plotY, -999),
            j = b.getBBox(),
            k = f.renderer.fontMetrics(c.style.fontSize).b,
            l = this.visible && (a.series.forceDL || f.isInsidePlot(h, A(i), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g));
        if (l) d = q({
            x: g ? f.plotWidth - i : h,
            y: A(g ? f.plotHeight - h : i),
            width: 0,
            height: 0
        }, d), q(c, {
            width: j.width,
            height: j.height
        }), c.rotation ? (a = f.renderer.rotCorr(k, c.rotation),
            b[e ? "attr" : "animate"]({
                x: d.x + c.x + d.width / 2 + a.x,
                y: d.y + c.y + d.height / 2
            }).attr({
                align: c.align
            })) : (b.align(c, null, d), g = b.alignAttr, p(c.overflow, "justify") === "justify" ? this.justifyDataLabel(b, c, g, j, d, e) : p(c.crop, !0) && (l = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + j.width, g.y + j.height)), c.shape && b.attr({
            anchorX: a.plotX,
            anchorY: a.plotY
        }));
        if (!l) Va(b), b.attr({
            y: -999
        }), b.placed = !1
    };
    Q.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var g = this.chart,
            h = b.align,
            i = b.verticalAlign,
            j, k, l = a.box ? 0 : a.padding || 0;
        j = c.x +
            l;
        if (j < 0) h === "right" ? b.align = "left" : b.x = -j, k = !0;
        j = c.x + d.width - l;
        if (j > g.plotWidth) h === "left" ? b.align = "right" : b.x = g.plotWidth - j, k = !0;
        j = c.y + l;
        if (j < 0) i === "bottom" ? b.verticalAlign = "top" : b.y = -j, k = !0;
        j = c.y + d.height - l;
        if (j > g.plotHeight) i === "top" ? b.verticalAlign = "bottom" : b.y = g.plotHeight - j, k = !0;
        if (k) a.placed = !f, a.align(b, null, e)
    };
    if (v.pie) v.pie.prototype.drawDataLabels = function() {
            var a = this,
                b = a.data,
                c, d = a.chart,
                e = a.options.dataLabels,
                f = p(e.connectorPadding, 10),
                g = p(e.connectorWidth, 1),
                h = d.plotWidth,
                i = d.plotHeight,
                j, k, l = p(e.softConnector, !0),
                n = e.distance,
                m = a.center,
                u = m[2] / 2,
                s = m[1],
                q = n > 0,
                y, z, r, x = [
                    [],
                    []
                ],
                w, v, B, C, F, D = [0, 0, 0, 0],
                K = function(a, b) {
                    return b.y - a.y
                };
            if (a.visible && (e.enabled || a._hasPointLabels)) {
                Q.prototype.drawDataLabels.apply(a);
                o(b, function(a) {
                    a.dataLabel && a.visible && x[a.half].push(a)
                });
                for (C = 2; C--;) {
                    var I = [],
                        L = [],
                        G = x[C],
                        J = G.length,
                        H;
                    if (J) {
                        a.sortByAngle(G, C - 0.5);
                        for (F = b = 0; !b && G[F];) b = G[F] && G[F].dataLabel && (G[F].dataLabel.getBBox().height || 21), F++;
                        if (n > 0) {
                            z = E(s + u + n, d.plotHeight);
                            for (F = t(0, s - u - n); F <=
                                z; F += b) I.push(F);
                            z = I.length;
                            if (J > z) {
                                c = [].concat(G);
                                c.sort(K);
                                for (F = J; F--;) c[F].rank = F;
                                for (F = J; F--;) G[F].rank >= z && G.splice(F, 1);
                                J = G.length
                            }
                            for (F = 0; F < J; F++) {
                                c = G[F];
                                r = c.labelPos;
                                c = 9999;
                                var N, M;
                                for (M = 0; M < z; M++) N = O(I[M] - r[1]), N < c && (c = N, H = M);
                                if (H < F && I[F] !== null) H = F;
                                else
                                    for (z < J - F + H && I[F] !== null && (H = z - J + F); I[H] === null;) H++;
                                L.push({
                                    i: H,
                                    y: I[H]
                                });
                                I[H] = null
                            }
                            L.sort(K)
                        }
                        for (F = 0; F < J; F++) {
                            c = G[F];
                            r = c.labelPos;
                            y = c.dataLabel;
                            B = c.visible === !1 ? "hidden" : "inherit";
                            c = r[1];
                            if (n > 0) {
                                if (z = L.pop(), H = z.i, v = z.y, c > v && I[H + 1] !== null ||
                                    c < v && I[H - 1] !== null) v = E(t(0, c), d.plotHeight)
                            } else v = c;
                            w = e.justify ? m[0] + (C ? -1 : 1) * (u + n) : a.getX(v === s - u - n || v === s + u + n ? c : v, C);
                            y._attr = {
                                visibility: B,
                                align: r[6]
                            };
                            y._pos = {
                                x: w + e.x + ({
                                    left: f,
                                    right: -f
                                }[r[6]] || 0),
                                y: v + e.y - 10
                            };
                            y.connX = w;
                            y.connY = v;
                            if (this.options.size === null) z = y.width, w - z < f ? D[3] = t(A(z - w + f), D[3]) : w + z > h - f && (D[1] = t(A(w + z - h + f), D[1])), v - b / 2 < 0 ? D[0] = t(A(-v + b / 2), D[0]) : v + b / 2 > i && (D[2] = t(A(v + b / 2 - i), D[2]))
                        }
                    }
                }
                if (Ea(D) === 0 || this.verifyDataLabelOverflow(D)) this.placeDataLabels(), q && g && o(this.points, function(b) {
                    j =
                        b.connector;
                    r = b.labelPos;
                    if ((y = b.dataLabel) && y._pos && b.visible) B = y._attr.visibility, w = y.connX, v = y.connY, k = l ? ["M", w + (r[6] === "left" ? 5 : -5), v, "C", w, v, 2 * r[2] - r[4], 2 * r[3] - r[5], r[2], r[3], "L", r[4], r[5]] : ["M", w + (r[6] === "left" ? 5 : -5), v, "L", r[2], r[3], "L", r[4], r[5]], j ? (j.animate({
                        d: k
                    }), j.attr("visibility", B)) : b.connector = j = a.chart.renderer.path(k).attr({
                        "stroke-width": g,
                        stroke: e.connectorColor || b.color || "#606060",
                        visibility: B
                    }).add(a.dataLabelsGroup);
                    else if (j) b.connector = j.destroy()
                })
            }
        }, v.pie.prototype.placeDataLabels =
        function() {
            o(this.points, function(a) {
                var b = a.dataLabel;
                if (b && a.visible)(a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({
                    y: -999
                })
            })
        }, v.pie.prototype.alignDataLabel = T, v.pie.prototype.verifyDataLabelOverflow = function(a) {
            var b = this.center,
                c = this.options,
                d = c.center,
                e = c.minSize || 80,
                f = e,
                g;
            d[0] !== null ? f = t(b[2] - t(a[1], a[3]), e) : (f = t(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);
            d[1] !== null ? f = t(E(f, b[2] - t(a[0], a[2])), e) : (f = t(E(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
            f < b[2] ? (b[2] =
                f, b[3] = Math.min(/%$/.test(c.innerSize || 0) ? f * parseFloat(c.innerSize || 0) / 100 : parseFloat(c.innerSize || 0), f), this.translate(b), o(this.points, function(a) {
                    if (a.dataLabel) a.dataLabel._pos = null
                }), this.drawDataLabels && this.drawDataLabels()) : g = !0;
            return g
        };
    if (v.column) v.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart.inverted,
            g = a.series,
            h = a.dlBox || a.shapeArgs,
            i = p(a.below, a.plotY > p(this.translatedThreshold, g.yAxis.len)),
            j = p(c.inside, !!this.options.stacking);
        if (h && (d = w(h), f && (d = {
                x: g.yAxis.len -
                    d.y - d.height,
                y: g.xAxis.len - d.x - d.width,
                width: d.height,
                height: d.width
            }), !j)) f ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0);
        c.align = p(c.align, !f || j ? "center" : i ? "right" : "left");
        c.verticalAlign = p(c.verticalAlign, f || j ? "middle" : i ? "top" : "bottom");
        Q.prototype.alignDataLabel.call(this, a, b, c, d, e)
    };
    (function(a) {
        var b = a.Chart,
            c = a.each,
            d = a.pick,
            e = HighchartsAdapter.addEvent;
        b.prototype.callbacks.push(function(a) {
            function b() {
                var e = [];
                c(a.series, function(a) {
                    var b = a.options.dataLabels,
                        f = a.dataLabelCollections || ["dataLabel"];
                    (b.enabled || a._hasPointLabels) && !b.allowOverlap && a.visible && c(f, function(b) {
                        c(a.points, function(a) {
                            if (a[b]) a[b].labelrank = d(a.labelrank, a.shapeArgs && a.shapeArgs.height), e.push(a[b])
                        })
                    })
                });
                a.hideOverlappingLabels(e)
            }
            b();
            e(a, "redraw", b)
        });
        b.prototype.hideOverlappingLabels = function(a) {
            var b = a.length,
                d, e, j, k, l, n, m;
            for (e = 0; e < b; e++)
                if (d = a[e]) d.oldOpacity = d.opacity, d.newOpacity = 1;
            a.sort(function(a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (e = 0; e < b; e++) {
                j = a[e];
                for (d = e + 1; d < b; ++d)
                    if (k = a[d],
                        j && k && j.placed && k.placed && j.newOpacity !== 0 && k.newOpacity !== 0 && (l = j.alignAttr, n = k.alignAttr, m = 2 * (j.box ? 0 : j.padding), l = !(n.x > l.x + (j.width - m) || n.x + (k.width - m) < l.x || n.y > l.y + (j.height - m) || n.y + (k.height - m) < l.y)))(j.labelrank < k.labelrank ? j : k).newOpacity = 0
            }
            c(a, function(a) {
                var b, c;
                if (a) {
                    c = a.newOpacity;
                    if (a.oldOpacity !== c && a.placed) c ? a.show(!0) : b = function() {
                        a.hide()
                    }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b);
                    a.isOld = !0
                }
            })
        }
    })(B);
    ea(Y.prototype, "getSeriesExtremes", function(a) {
        var b =
            this.isXAxis,
            c, d, e = [],
            f;
        b && o(this.series, function(a, b) {
            if (a.useMapGeometry) e[b] = a.xData, a.xData = []
        });
        a.call(this);
        if (b && (c = p(this.dataMin, Number.MAX_VALUE), d = p(this.dataMax, -Number.MAX_VALUE), o(this.series, function(a, b) {
                if (a.useMapGeometry) c = Math.min(c, p(a.minX, c)), d = Math.max(d, p(a.maxX, c)), a.xData = e[b], f = !0
            }), f)) this.dataMin = c, this.dataMax = d
    });
    ea(Y.prototype, "setAxisTranslation", function(a) {
        var b = this.chart,
            c = b.plotWidth / b.plotHeight,
            b = b.xAxis[0],
            d;
        a.call(this);
        this.coll === "yAxis" && b.transA !== r &&
            o(this.series, function(a) {
                a.preserveAspectRatio && (d = !0)
            });
        if (d && (this.transA = b.transA = Math.min(this.transA, b.transA), a = c / ((b.max - b.min) / (this.max - this.min)), a = a < 1 ? this : b, c = (a.max - a.min) * a.transA, a.pixelPadding = a.len - c, a.minPixelPadding = a.pixelPadding / 2, c = a.fixTo)) {
            c = c[1] - a.toValue(c[0], !0);
            c *= a.transA;
            if (Math.abs(c) > a.minPixelPadding || a.min === a.dataMin && a.max === a.dataMax) c = 0;
            a.minPixelPadding -= c
        }
    });
    ea(Y.prototype, "render", function(a) {
        a.call(this);
        this.fixTo = null
    });
    var Za = B.ColorAxis = function() {
        this.isColorAxis = !0;
        this.init.apply(this, arguments)
    };
    q(Za.prototype, Y.prototype);
    q(Za.prototype, {
        defaultColorAxisOptions: {
            lineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            startOnTick: !0,
            endOnTick: !0,
            offset: 0,
            marker: {
                animation: {
                    duration: 50
                },
                color: "gray",
                width: 0.01
            },
            labels: {
                overflow: "justify"
            },
            minColor: "#EFEFFF",
            maxColor: "#003875",
            tickLength: 5
        },
        init: function(a, b) {
            var c = a.options.legend.layout !== "vertical",
                d;
            d = w(this.defaultColorAxisOptions, {
                side: c ? 2 : 1,
                reversed: !c
            }, b, {
                opposite: !c,
                showEmpty: !1,
                title: null,
                isColor: !0
            });
            Y.prototype.init.call(this, a, d);
            b.dataClasses && this.initDataClasses(b);
            this.initStops(b);
            this.horiz = c;
            this.zoomEnabled = !1
        },
        tweenColors: function(a, b, c) {
            var d;
            !b.rgba.length || !a.rgba.length ? a = b.raw || "none" : (a = a.rgba, b = b.rgba, d = b[3] !== 1 || a[3] !== 1, a = (d ? "rgba(" : "rgb(") + Math.round(b[0] + (a[0] - b[0]) * (1 - c)) + "," + Math.round(b[1] + (a[1] - b[1]) * (1 - c)) + "," + Math.round(b[2] + (a[2] - b[2]) * (1 - c)) + (d ? "," + (b[3] + (a[3] - b[3]) * (1 - c)) : "") + ")");
            return a
        },
        initDataClasses: function(a) {
            var b = this,
                c = this.chart,
                d, e = 0,
                f = this.options,
                g = a.dataClasses.length;
            this.dataClasses = d = [];
            this.legendItems = [];
            o(a.dataClasses, function(a, i) {
                var j, a = w(a);
                d.push(a);
                if (!a.color) f.dataClassColor === "category" ? (j = c.options.colors, a.color = j[e++], e === j.length && (e = 0)) : a.color = b.tweenColors(W(f.minColor), W(f.maxColor), g < 2 ? 0.5 : i / (g - 1))
            })
        },
        initStops: function(a) {
            this.stops = a.stops || [
                [0, this.options.minColor],
                [1, this.options.maxColor]
            ];
            o(this.stops, function(a) {
                a.color = W(a[1])
            })
        },
        setOptions: function(a) {
            Y.prototype.setOptions.call(this,
                a);
            this.options.crosshair = this.options.marker;
            this.coll = "colorAxis"
        },
        setAxisSize: function() {
            var a = this.legendSymbol,
                b = this.chart,
                c, d, e;
            if (a) this.left = c = a.attr("x"), this.top = d = a.attr("y"), this.width = e = a.attr("width"), this.height = a = a.attr("height"), this.right = b.chartWidth - c - e, this.bottom = b.chartHeight - d - a, this.len = this.horiz ? e : a, this.pos = this.horiz ? c : d
        },
        toColor: function(a, b) {
            var c, d = this.stops,
                e, f = this.dataClasses,
                g, h;
            if (f)
                for (h = f.length; h--;) {
                    if (g = f[h], e = g.from, d = g.to, (e === r || a >= e) && (d === r || a <= d)) {
                        c =
                            g.color;
                        if (b) b.dataClass = h;
                        break
                    }
                } else {
                    this.isLog && (a = this.val2lin(a));
                    c = 1 - (this.max - a) / (this.max - this.min || 1);
                    for (h = d.length; h--;)
                        if (c > d[h][0]) break;
                    e = d[h] || d[h + 1];
                    d = d[h + 1] || e;
                    c = 1 - (d[0] - c) / (d[0] - e[0] || 1);
                    c = this.tweenColors(e.color, d.color, c)
                }
            return c
        },
        getOffset: function() {
            var a = this.legendGroup,
                b = this.chart.axisOffset[this.side];
            if (a) {
                this.axisParent = a;
                Y.prototype.getOffset.call(this);
                if (!this.added) this.added = !0, this.labelLeft = 0, this.labelRight = this.width;
                this.chart.axisOffset[this.side] = b
            }
        },
        setLegendColor: function() {
            var a,
                b = this.options;
            a = this.reversed;
            a = this.horiz ? [+a, 0, +!a, 0] : [0, +!a, 0, +a];
            this.legendColor = {
                linearGradient: {
                    x1: a[0],
                    y1: a[1],
                    x2: a[2],
                    y2: a[3]
                },
                stops: b.stops || [
                    [0, b.minColor],
                    [1, b.maxColor]
                ]
            }
        },
        drawLegendSymbol: function(a, b) {
            var c = a.padding,
                d = a.options,
                e = this.horiz,
                f = p(d.symbolWidth, e ? 200 : 12),
                g = p(d.symbolHeight, e ? 12 : 200),
                h = p(d.labelPadding, e ? 16 : 30),
                d = p(d.itemDistance, 10);
            this.setLegendColor();
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 11, f, g).attr({
                zIndex: 1
            }).add(b.legendGroup);
            b.legendSymbol.getBBox();
            this.legendItemWidth = f + c + (e ? d : h);
            this.legendItemHeight = g + c + (e ? h : 0)
        },
        setState: T,
        visible: !0,
        setVisible: T,
        getSeriesExtremes: function() {
            var a;
            if (this.series.length) a = this.series[0], this.dataMin = a.valueMin, this.dataMax = a.valueMax
        },
        drawCrosshair: function(a, b) {
            var c = b && b.plotX,
                d = b && b.plotY,
                e, f = this.pos,
                g = this.len;
            if (b) e = this.toPixels(b[b.series.colorKey]), e < f ? e = f - 2 : e > f + g && (e = f + g + 2), b.plotX = e, b.plotY = this.len - e, Y.prototype.drawCrosshair.call(this, a, b), b.plotX = c, b.plotY = d, this.cross && this.cross.attr({
                fill: this.crosshair.color
            }).add(this.legendGroup)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            return typeof e === "number" ? this.horiz ? ["M", e - 4, this.top - 6, "L", e + 4, this.top - 6, e, this.top, "Z"] : ["M", this.left, e, "L", this.left - 6, e + 6, this.left - 6, e - 6, "Z"] : Y.prototype.getPlotLinePath.call(this, a, b, c, d)
        },
        update: function(a, b) {
            var c = this.chart,
                d = c.legend;
            o(this.series, function(a) {
                a.isDirtyData = !0
            });
            if (a.dataClasses && d.allItems) o(d.allItems, function(a) {
                a.isDataClass && a.legendGroup.destroy()
            }), c.isDirtyLegend = !0;
            c.options[this.coll] = w(this.userOptions, a);
            Y.prototype.update.call(this,
                a, b);
            this.legendItem && (this.setLegendColor(), d.colorizeItem(this, !0))
        },
        getDataClassLegendSymbols: function() {
            var a = this,
                b = this.chart,
                c = this.legendItems,
                d = b.options.legend,
                e = d.valueDecimals,
                f = d.valueSuffix || "",
                g;
            c.length || o(this.dataClasses, function(d, i) {
                var j = !0,
                    k = d.from,
                    l = d.to;
                g = "";
                k === r ? g = "< " : l === r && (g = "> ");
                k !== r && (g += B.numberFormat(k, e) + f);
                k !== r && l !== r && (g += " - ");
                l !== r && (g += B.numberFormat(l, e) + f);
                c.push(q({
                    chart: b,
                    name: g,
                    options: {},
                    drawLegendSymbol: Ya.drawRectangle,
                    visible: !0,
                    setState: T,
                    isDataClass: !0,
                    setVisible: function() {
                        j = this.visible = !j;
                        o(a.series, function(a) {
                            o(a.points, function(a) {
                                a.dataClass === i && a.setVisible(j)
                            })
                        });
                        b.legend.colorizeItem(this, j)
                    }
                }, d))
            });
            return c
        },
        name: ""
    });
    o(["fill", "stroke"], function(a) {
        HighchartsAdapter.addAnimSetter(a, function(b) {
            b.elem.attr(a, Za.prototype.tweenColors(W(b.start), W(b.end), b.pos))
        })
    });
    ea(ma.prototype, "getAxes", function(a) {
        var b = this.options.colorAxis;
        a.call(this);
        this.colorAxis = [];
        b && new Za(this, b)
    });
    ea(Xa.prototype, "getAllItems", function(a) {
        var b = [],
            c =
            this.chart.colorAxis[0];
        c && (c.options.dataClasses ? b = b.concat(c.getDataClassLegendSymbols()) : b.push(c), o(c.series, function(a) {
            a.options.showInLegend = !1
        }));
        return b.concat(a.call(this))
    });
    var Ia = {
            setVisible: function(a) {
                var b = this,
                    c = a ? "show" : "hide";
                o(["graphic", "dataLabel"], function(a) {
                    if (b[a]) b[a][c]()
                })
            }
        },
        Jb = {
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color",
                dashstyle: "dashStyle"
            },
            pointArrayMap: ["value"],
            axisTypes: ["xAxis", "yAxis", "colorAxis"],
            optionalAxis: "colorAxis",
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            getSymbol: T,
            parallelArrays: ["x", "y", "value"],
            colorKey: "value",
            translateColors: function() {
                var a = this,
                    b = this.options.nullColor,
                    c = this.colorAxis,
                    d = this.colorKey;
                o(this.data, function(e) {
                    var f = e[d];
                    if (f = e.options.color || (f === null ? b : c && f !== void 0 ? c.toColor(f, e) : e.color || a.color)) e.color = f
                })
            }
        },
        hb = document.documentElement.style.vectorEffect !== void 0;
    V.map = w(V.scatter, {
        allAreas: !0,
        animation: !1,
        nullColor: "#F8F8F8",
        borderColor: "silver",
        borderWidth: 1,
        marker: null,
        stickyTracking: !1,
        dataLabels: {
            formatter: function() {
                return this.point.value
            },
            inside: !0,
            verticalAlign: "middle",
            crop: !1,
            overflow: !1,
            padding: 0
        },
        turboThreshold: 0,
        tooltip: {
            followPointer: !0,
            pointFormat: "{point.name}: {point.value}<br/>"
        },
        states: {
            normal: {
                animation: !0
            },
            hover: {
                brightness: 0.2,
                halo: null
            }
        }
    });
    var Kb = $(Z, q({
        applyOptions: function(a, b) {
            var c = Z.prototype.applyOptions.call(this, a, b),
                d = this.series,
                e = d.joinBy;
            if (d.mapData)
                if (e = c[e[1]] !== void 0 && d.mapMap[c[e[1]]]) {
                    if (d.xyFromShape) c.x = e._midX, c.y = e._midY;
                    q(c, e)
                } else c.value = c.value || null;
            return c
        },
        onMouseOver: function(a) {
            clearTimeout(this.colorInterval);
            if (this.value !== null) Z.prototype.onMouseOver.call(this, a);
            else this.series.onMouseOut(a)
        },
        onMouseOut: function() {
            var a = this,
                b = +new Ga,
                c = W(a.color),
                d = W(a.pointAttr.hover.fill),
                e = a.series.options.states.normal.animation,
                f = e && (e.duration || 500),
                g;
            if (f && c.rgba.length === 4 && d.rgba.length === 4 && a.state !== "select") g = a.pointAttr[""].fill, delete a.pointAttr[""].fill, clearTimeout(a.colorInterval), a.colorInterval =
                setInterval(function() {
                    var e = (new Ga - b) / f,
                        g = a.graphic;
                    e > 1 && (e = 1);
                    g && g.attr("fill", Za.prototype.tweenColors.call(0, d, c, e));
                    e >= 1 && clearTimeout(a.colorInterval)
                }, 13);
            Z.prototype.onMouseOut.call(a);
            if (g) a.pointAttr[""].fill = g
        },
        zoomTo: function() {
            var a = this.series;
            a.xAxis.setExtremes(this._minX, this._maxX, !1);
            a.yAxis.setExtremes(this._minY, this._maxY, !1);
            a.chart.redraw()
        }
    }, Ia));
    v.map = $(v.scatter, w(Jb, {
        type: "map",
        pointClass: Kb,
        supportsDrilldown: !0,
        getExtremesFromAll: !0,
        useMapGeometry: !0,
        forceDL: !0,
        searchPoint: T,
        directTouch: !0,
        preserveAspectRatio: !0,
        getBox: function(a) {
            var b = Number.MAX_VALUE,
                c = -b,
                d = b,
                e = -b,
                f = b,
                g = b,
                h = this.xAxis,
                i = this.yAxis,
                j;
            o(a || [], function(a) {
                if (a.path) {
                    if (typeof a.path === "string") a.path = B.splitPath(a.path);
                    var h = a.path || [],
                        i = h.length,
                        m = !1,
                        o = -b,
                        s = b,
                        q = -b,
                        r = b,
                        t = a.properties;
                    if (!a._foundBox) {
                        for (; i--;) typeof h[i] === "number" && !isNaN(h[i]) && (m ? (o = Math.max(o, h[i]), s = Math.min(s, h[i])) : (q = Math.max(q, h[i]), r = Math.min(r, h[i])), m = !m);
                        a._midX = s + (o - s) * (a.middleX || t && t["hc-middle-x"] || 0.5);
                        a._midY = r + (q -
                            r) * (a.middleY || t && t["hc-middle-y"] || 0.5);
                        a._maxX = o;
                        a._minX = s;
                        a._maxY = q;
                        a._minY = r;
                        a.labelrank = p(a.labelrank, (o - s) * (q - r));
                        a._foundBox = !0
                    }
                    c = Math.max(c, a._maxX);
                    d = Math.min(d, a._minX);
                    e = Math.max(e, a._maxY);
                    f = Math.min(f, a._minY);
                    g = Math.min(a._maxX - a._minX, a._maxY - a._minY, g);
                    j = !0
                }
            });
            if (j) {
                this.minY = Math.min(f, p(this.minY, b));
                this.maxY = Math.max(e, p(this.maxY, -b));
                this.minX = Math.min(d, p(this.minX, b));
                this.maxX = Math.max(c, p(this.maxX, -b));
                if (h && h.options.minRange === void 0) h.minRange = Math.min(5 * g, (this.maxX -
                    this.minX) / 5, h.minRange || b);
                if (i && i.options.minRange === void 0) i.minRange = Math.min(5 * g, (this.maxY - this.minY) / 5, i.minRange || b)
            }
        },
        getExtremes: function() {
            Q.prototype.getExtremes.call(this, this.valueData);
            this.chart.hasRendered && this.isDirtyData && this.getBox(this.options.data);
            this.valueMin = this.dataMin;
            this.valueMax = this.dataMax;
            this.dataMin = this.minY;
            this.dataMax = this.maxY
        },
        translatePath: function(a) {
            var b = !1,
                c = this.xAxis,
                d = this.yAxis,
                e = c.min,
                f = c.transA,
                c = c.minPixelPadding,
                g = d.min,
                h = d.transA,
                d = d.minPixelPadding,
                i, j = [];
            if (a)
                for (i = a.length; i--;) typeof a[i] === "number" ? (j[i] = b ? (a[i] - e) * f + c : (a[i] - g) * h + d, b = !b) : j[i] = a[i];
            return j
        },
        setData: function(a, b) {
            var c = this.options,
                d = c.mapData,
                e = c.joinBy,
                f = e === null,
                g = [],
                h, i, j;
            f && (e = "_i");
            e = this.joinBy = B.splat(e);
            e[1] || (e[1] = e[0]);
            a && o(a, function(b, c) {
                typeof b === "number" && (a[c] = {
                    value: b
                });
                if (f) a[c]._i = c
            });
            this.getBox(a);
            if (d) {
                if (d.type === "FeatureCollection") {
                    if (d["hc-transform"])
                        for (h in this.chart.mapTransforms = i = d["hc-transform"], i)
                            if (i.hasOwnProperty(h) && h.rotation) h.cosAngle =
                                Math.cos(h.rotation), h.sinAngle = Math.sin(h.rotation);
                    d = B.geojson(d, this.type, this)
                }
                this.getBox(d);
                this.mapData = d;
                this.mapMap = {};
                for (j = 0; j < d.length; j++) h = d[j], i = h.properties, h._i = j, e[0] && i && i[e[0]] && (h[e[0]] = i[e[0]]), this.mapMap[h[e[0]]] = h;
                c.allAreas && (a = a || [], e[1] && o(a, function(a) {
                    g.push(a[e[1]])
                }), g = "|" + g.join("|") + "|", o(d, function(b) {
                    (!e[0] || g.indexOf("|" + b[e[0]] + "|") === -1) && a.push(w(b, {
                        value: null
                    }))
                }))
            }
            Q.prototype.setData.call(this, a, b)
        },
        drawGraph: T,
        drawDataLabels: T,
        doFullTranslate: function() {
            return this.isDirtyData ||
                this.chart.isResizing || this.chart.renderer.isVML || !this.baseTrans
        },
        translate: function() {
            var a = this,
                b = a.xAxis,
                c = a.yAxis,
                d = a.doFullTranslate();
            a.generatePoints();
            o(a.data, function(e) {
                e.plotX = b.toPixels(e._midX, !0);
                e.plotY = c.toPixels(e._midY, !0);
                if (d) e.shapeType = "path", e.shapeArgs = {
                    d: a.translatePath(e.path)
                }, hb && (e.shapeArgs["vector-effect"] = "non-scaling-stroke")
            });
            a.translateColors()
        },
        drawPoints: function() {
            var a = this,
                b = a.xAxis,
                c = a.yAxis,
                d = a.group,
                e = a.chart,
                f = e.renderer,
                g, h = this.baseTrans;
            if (!a.transformGroup) a.transformGroup =
                f.g().attr({
                    scaleX: 1,
                    scaleY: 1
                }).add(d), a.transformGroup.survive = !0;
            a.doFullTranslate() ? (e.hasRendered && a.pointAttrToOptions.fill === "color" && o(a.points, function(a) {
                if (a.shapeArgs) a.shapeArgs.fill = a.pointAttr[p(a.state, "")].fill
            }), hb || o(a.points, function(b) {
                b = b.pointAttr[""];
                b["stroke-width"] === a.pointAttr[""]["stroke-width"] && (b["stroke-width"] = "inherit")
            }), a.group = a.transformGroup, v.column.prototype.drawPoints.apply(a), a.group = d, o(a.points, function(a) {
                a.graphic && (a.name && a.graphic.addClass("highcharts-name-" +
                    a.name.replace(" ", "-").toLowerCase()), a.properties && a.properties["hc-key"] && a.graphic.addClass("highcharts-key-" + a.properties["hc-key"].toLowerCase()), hb || (a.graphic["stroke-widthSetter"] = T))
            }), this.baseTrans = {
                originX: b.min - b.minPixelPadding / b.transA,
                originY: c.min - c.minPixelPadding / c.transA + (c.reversed ? 0 : c.len / c.transA),
                transAX: b.transA,
                transAY: c.transA
            }, this.transformGroup.animate({
                translateX: 0,
                translateY: 0,
                scaleX: 1,
                scaleY: 1
            })) : (g = b.transA / h.transAX, d = c.transA / h.transAY, b = b.toPixels(h.originX, !0),
                c = c.toPixels(h.originY, !0), g > 0.99 && g < 1.01 && d > 0.99 && d < 1.01 && (d = g = 1, b = Math.round(b), c = Math.round(c)), this.transformGroup.animate({
                    translateX: b,
                    translateY: c,
                    scaleX: g,
                    scaleY: d
                }));
            hb || a.group.element.setAttribute("stroke-width", a.options.borderWidth / (g || 1));
            this.drawMapDataLabels()
        },
        drawMapDataLabels: function() {
            Q.prototype.drawDataLabels.call(this);
            this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect)
        },
        render: function() {
            var a = this,
                b = Q.prototype.render;
            a.chart.renderer.isVML && a.data.length >
                3E3 ? setTimeout(function() {
                    b.call(a)
                }) : b.call(a)
        },
        animate: function(a) {
            var b = this.options.animation,
                c = this.group,
                d = this.xAxis,
                e = this.yAxis,
                f = d.pos,
                g = e.pos;
            if (this.chart.renderer.isSVG) b === !0 && (b = {
                duration: 1E3
            }), a ? c.attr({
                translateX: f + d.len / 2,
                translateY: g + e.len / 2,
                scaleX: 0.001,
                scaleY: 0.001
            }) : (c.animate({
                translateX: f,
                translateY: g,
                scaleX: 1,
                scaleY: 1
            }, b), this.animate = null)
        },
        animateDrilldown: function(a) {
            var b = this.chart.plotBox,
                c = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
                d = c.bBox,
                e = this.chart.options.drilldown.animation;
            if (!a) a = Math.min(d.width / b.width, d.height / b.height), c.shapeArgs = {
                scaleX: a,
                scaleY: a,
                translateX: d.x,
                translateY: d.y
            }, o(this.points, function(a) {
                a.graphic && a.graphic.attr(c.shapeArgs).animate({
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0,
                    translateY: 0
                }, e)
            }), this.animate = null
        },
        drawLegendSymbol: Ya.drawRectangle,
        animateDrillupFrom: function(a) {
            v.column.prototype.animateDrillupFrom.call(this, a)
        },
        animateDrillupTo: function(a) {
            v.column.prototype.animateDrillupTo.call(this, a)
        }
    }));
    (function(a) {
        var b = a.Chart,
            c = a.each,
            d = a.pick,
            e = HighchartsAdapter.addEvent;
        b.prototype.callbacks.push(function(a) {
            function b() {
                var e = [];
                c(a.series, function(a) {
                    var b = a.options.dataLabels,
                        f = a.dataLabelCollections || ["dataLabel"];
                    (b.enabled || a._hasPointLabels) && !b.allowOverlap && a.visible && c(f, function(b) {
                        c(a.points, function(a) {
                            if (a[b]) a[b].labelrank = d(a.labelrank, a.shapeArgs && a.shapeArgs.height), e.push(a[b])
                        })
                    })
                });
                a.hideOverlappingLabels(e)
            }
            b();
            e(a, "redraw", b)
        });
        b.prototype.hideOverlappingLabels = function(a) {
            var b = a.length,
                d, e, j, k, l, n, m;
            for (e = 0; e <
                b; e++)
                if (d = a[e]) d.oldOpacity = d.opacity, d.newOpacity = 1;
            a.sort(function(a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (e = 0; e < b; e++) {
                j = a[e];
                for (d = e + 1; d < b; ++d)
                    if (k = a[d], j && k && j.placed && k.placed && j.newOpacity !== 0 && k.newOpacity !== 0 && (l = j.alignAttr, n = k.alignAttr, m = 2 * (j.box ? 0 : j.padding), l = !(n.x > l.x + (j.width - m) || n.x + (k.width - m) < l.x || n.y > l.y + (j.height - m) || n.y + (k.height - m) < l.y)))(j.labelrank < k.labelrank ? j : k).newOpacity = 0
            }
            c(a, function(a) {
                var b, c;
                if (a) {
                    c = a.newOpacity;
                    if (a.oldOpacity !== c && a.placed) c ? a.show(!0) :
                        b = function() {
                            a.hide()
                        }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b);
                    a.isOld = !0
                }
            })
        }
    })(B);
    q(ma.prototype, {
        renderMapNavigation: function() {
            var a = this,
                b = this.options.mapNavigation,
                c = b.buttons,
                d, e, f, g, h = function(a) {
                    if (a) a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
                },
                i = function(b) {
                    this.handler.call(a, b);
                    h(b)
                };
            if (p(b.enableButtons, b.enabled) && !a.renderer.forExport)
                for (d in c)
                    if (c.hasOwnProperty(d)) f = w(b.buttonOptions, c[d]), e = f.theme,
                        e.style = w(f.theme.style, f.style), g = e.states, e = a.renderer.button(f.text, 0, 0, i, e, g && g.hover, g && g.select, 0, d === "zoomIn" ? "topbutton" : "bottombutton").attr({
                            width: f.width,
                            height: f.height,
                            title: a.options.lang[d],
                            zIndex: 5
                        }).add(), e.handler = f.onclick, e.align(q(f, {
                            width: e.width,
                            height: 2 * e.height
                        }), null, f.alignTo), L(e.element, "dblclick", h)
        },
        fitToBox: function(a, b) {
            o([
                ["x", "width"],
                ["y", "height"]
            ], function(c) {
                var d = c[0],
                    c = c[1];
                a[d] + a[c] > b[d] + b[c] && (a[c] > b[c] ? (a[c] = b[c], a[d] = b[d]) : a[d] = b[d] + b[c] - a[c]);
                a[c] > b[c] &&
                    (a[c] = b[c]);
                a[d] < b[d] && (a[d] = b[d])
            });
            return a
        },
        mapZoom: function(a, b, c, d, e) {
            var f = this.xAxis[0],
                g = f.max - f.min,
                h = p(b, f.min + g / 2),
                i = g * a,
                g = this.yAxis[0],
                j = g.max - g.min,
                k = p(c, g.min + j / 2);
            j *= a;
            h = this.fitToBox({
                x: h - i * (d ? (d - f.pos) / f.len : 0.5),
                y: k - j * (e ? (e - g.pos) / g.len : 0.5),
                width: i,
                height: j
            }, {
                x: f.dataMin,
                y: g.dataMin,
                width: f.dataMax - f.dataMin,
                height: g.dataMax - g.dataMin
            });
            if (d) f.fixTo = [d - f.pos, b];
            if (e) g.fixTo = [e - g.pos, c];
            a !== void 0 ? (f.setExtremes(h.x, h.x + h.width, !1), g.setExtremes(h.y, h.y + h.height, !1)) : (f.setExtremes(void 0,
                void 0, !1), g.setExtremes(void 0, void 0, !1));
            this.redraw()
        }
    });
    ea(ma.prototype, "render", function(a) {
        var b = this,
            c = b.options.mapNavigation;
        b.renderMapNavigation();
        a.call(b);
        (p(c.enableDoubleClickZoom, c.enabled) || c.enableDoubleClickZoomTo) && L(b.container, "dblclick", function(a) {
            b.pointer.onContainerDblClick(a)
        });
        p(c.enableMouseWheelZoom, c.enabled) && L(b.container, document.onmousewheel === void 0 ? "DOMMouseScroll" : "mousewheel", function(a) {
            b.pointer.onContainerMouseWheel(a);
            return !1
        })
    });
    q(za.prototype, {
        onContainerDblClick: function(a) {
            var b =
                this.chart,
                a = this.normalize(a);
            b.options.mapNavigation.enableDoubleClickZoomTo ? b.pointer.inClass(a.target, "highcharts-tracker") && b.hoverPoint.zoomTo() : b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && b.mapZoom(0.5, b.xAxis[0].toValue(a.chartX), b.yAxis[0].toValue(a.chartY), a.chartX, a.chartY)
        },
        onContainerMouseWheel: function(a) {
            var b = this.chart,
                c, a = this.normalize(a);
            c = a.detail || -(a.wheelDelta / 120);
            b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && b.mapZoom(Math.pow(2, c), b.xAxis[0].toValue(a.chartX),
                b.yAxis[0].toValue(a.chartY), a.chartX, a.chartY)
        }
    });
    ea(za.prototype, "init", function(a, b, c) {
        a.call(this, b, c);
        if (p(c.mapNavigation.enableTouchZoom, c.mapNavigation.enabled)) this.pinchX = this.pinchHor = this.pinchY = this.pinchVert = this.hasZoom = !0
    });
    ea(za.prototype, "pinchTranslate", function(a, b, c, d, e, f, g) {
        a.call(this, b, c, d, e, f, g);
        this.chart.options.chart.type === "map" && this.hasZoom && (a = d.scaleX > d.scaleY, this.pinchTranslateDirection(!a, b, c, d, e, f, g, a ? d.scaleX : d.scaleY))
    });
    V.mapline = w(V.map, {
        lineWidth: 1,
        fillColor: "none"
    });
    v.mapline = $(v.map, {
        type: "mapline",
        pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            dashstyle: "dashStyle"
        },
        drawLegendSymbol: v.line.prototype.drawLegendSymbol
    });
    V.mappoint = w(V.scatter, {
        dataLabels: {
            enabled: !0,
            formatter: function() {
                return this.point.name
            },
            crop: !1,
            defer: !1,
            overflow: !1,
            style: {
                color: "#000000"
            }
        }
    });
    v.mappoint = $(v.scatter, {
        type: "mappoint",
        forceDL: !0,
        pointClass: $(Z, {
            applyOptions: function(a, b) {
                var c = Z.prototype.applyOptions.call(this, a, b);
                a.lat !== void 0 && a.lon !==
                    void 0 && (c = q(c, this.series.chart.fromLatLonToPoint(c)));
                return c
            }
        })
    });
    V.bubble = w(V.scatter, {
        dataLabels: {
            formatter: function() {
                return this.point.z
            },
            inside: !0,
            verticalAlign: "middle"
        },
        marker: {
            lineColor: null,
            lineWidth: 1
        },
        minSize: 8,
        maxSize: "20%",
        softThreshold: !1,
        states: {
            hover: {
                halo: {
                    size: 5
                }
            }
        },
        tooltip: {
            pointFormat: "({point.x}, {point.y}), Size: {point.z}"
        },
        turboThreshold: 0,
        zThreshold: 0,
        zoneAxis: "z"
    });
    var Vb = $(Z, {
        haloPath: function() {
            return Z.prototype.haloPath.call(this, this.shapeArgs.r + this.series.options.states.hover.halo.size)
        },
        ttBelow: !1
    });
    v.bubble = $(v.scatter, {
        type: "bubble",
        pointClass: Vb,
        pointArrayMap: ["y", "z"],
        parallelArrays: ["x", "y", "z"],
        trackerGroups: ["group", "dataLabelsGroup"],
        bubblePadding: !0,
        zoneAxis: "z",
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor"
        },
        applyOpacity: function(a) {
            var b = this.options.marker,
                c = p(b.fillOpacity, 0.5),
                a = a || b.fillColor || this.color;
            c !== 1 && (a = W(a).setOpacity(c).get("rgba"));
            return a
        },
        convertAttribs: function() {
            var a = Q.prototype.convertAttribs.apply(this, arguments);
            a.fill = this.applyOpacity(a.fill);
            return a
        },
        getRadii: function(a, b, c, d) {
            var e, f, g, h = this.zData,
                i = [],
                j = this.options,
                k = j.sizeBy !== "width",
                l = j.zThreshold,
                n = b - a;
            for (f = 0, e = h.length; f < e; f++) g = h[f], j.sizeByAbsoluteValue && (g = Math.abs(g - l), b = Math.max(b - l, Math.abs(a - l)), a = 0), g === null ? g = null : g < a ? g = c / 2 - 1 : (g = n > 0 ? (g - a) / n : 0.5, k && g >= 0 && (g = Math.sqrt(g)), g = G.ceil(c + g * (d - c)) / 2), i.push(g);
            this.radii = i
        },
        animate: function(a) {
            var b = this.options.animation;
            if (!a) o(this.points, function(a) {
                var d = a.graphic,
                    a = a.shapeArgs;
                d && a &&
                    (d.attr("r", 1), d.animate({
                        r: a.r
                    }, b))
            }), this.animate = null
        },
        translate: function() {
            var a, b = this.data,
                c, d, e = this.radii;
            v.scatter.prototype.translate.call(this);
            for (a = b.length; a--;) c = b[a], d = e ? e[a] : 0, typeof d === "number" && d >= this.minPxSize / 2 ? (c.shapeType = "circle", c.shapeArgs = {
                x: c.plotX,
                y: c.plotY,
                r: d
            }, c.dlBox = {
                x: c.plotX - d,
                y: c.plotY - d,
                width: 2 * d,
                height: 2 * d
            }) : c.shapeArgs = c.plotY = c.dlBox = r
        },
        drawLegendSymbol: function(a, b) {
            var c = D(a.itemStyle.fontSize) / 2;
            b.legendSymbol = this.chart.renderer.circle(c, a.baseline - c,
                c).attr({
                zIndex: 3
            }).add(b.legendGroup);
            b.legendSymbol.isMarker = !0
        },
        drawPoints: v.column.prototype.drawPoints,
        alignDataLabel: v.column.prototype.alignDataLabel,
        buildKDTree: T,
        applyZones: T
    });
    Y.prototype.beforePadding = function() {
        var a = this,
            b = this.len,
            c = this.chart,
            d = 0,
            e = b,
            f = this.isXAxis,
            g = f ? "xData" : "yData",
            h = this.min,
            i = {},
            j = G.min(c.plotWidth, c.plotHeight),
            k = Number.MAX_VALUE,
            l = -Number.MAX_VALUE,
            n = this.max - h,
            m = b / n,
            q = [];
        o(this.series, function(b) {
            var d = b.options;
            if (b.bubblePadding && (b.visible || !c.options.chart.ignoreHiddenSeries))
                if (a.allowZoomOutside = !0, q.push(b), f) o(["minSize", "maxSize"], function(a) {
                    var b = d[a],
                        c = /%$/.test(b),
                        b = D(b);
                    i[a] = c ? j * b / 100 : b
                }), b.minPxSize = i.minSize, b.maxPxSize = i.maxSize, b = b.zData, b.length && (k = p(d.zMin, G.min(k, G.max(Qa(b), d.displayNegative === !1 ? d.zThreshold : -Number.MAX_VALUE))), l = p(d.zMax, G.max(l, Ea(b))))
        });
        o(q, function(a) {
            var b = a[g],
                c = b.length,
                i;
            f && a.getRadii(k, l, a.minPxSize, a.maxPxSize);
            if (n > 0)
                for (; c--;) typeof b[c] === "number" && (i = a.radii[c], d = Math.min((b[c] - h) * m - i, d), e = Math.max((b[c] - h) * m + i, e))
        });
        q.length && n > 0 && !this.isLog &&
            (e -= b, m *= (b + d - e) / b, o([
                ["min", "userMin", d],
                ["max", "userMax", e]
            ], function(b) {
                p(a.options[b[0]], a[b[1]]) === r && (a[b[0]] += b[2] / m)
            }))
    };
    if (v.bubble) V.mapbubble = w(V.bubble, {
        animationLimit: 500,
        tooltip: {
            pointFormat: "{point.name}: {point.z}"
        }
    }), v.mapbubble = $(v.bubble, {
        pointClass: $(Z, {
            applyOptions: function(a, b) {
                var c;
                a && a.lat !== void 0 && a.lon !== void 0 ? (c = Z.prototype.applyOptions.call(this, a, b), c = q(c, this.series.chart.fromLatLonToPoint(c))) : c = Kb.prototype.applyOptions.call(this, a, b);
                return c
            },
            ttBelow: !1
        }),
        xyFromShape: !0,
        type: "mapbubble",
        pointArrayMap: ["z"],
        getMapData: v.map.prototype.getMapData,
        getBox: v.map.prototype.getBox,
        setData: v.map.prototype.setData
    });
    ma.prototype.transformFromLatLon = function(a, b) {
        if (window.proj4 === void 0) return da(21), {
            x: 0,
            y: null
        };
        var c = window.proj4(b.crs, [a.lon, a.lat]),
            d = b.cosAngle || b.rotation && Math.cos(b.rotation),
            e = b.sinAngle || b.rotation && Math.sin(b.rotation),
            c = b.rotation ? [c[0] * d + c[1] * e, -c[0] * e + c[1] * d] : c;
        return {
            x: ((c[0] - (b.xoffset || 0)) * (b.scale || 1) + (b.xpan || 0)) * (b.jsonres || 1) + (b.jsonmarginX ||
                0),
            y: (((b.yoffset || 0) - c[1]) * (b.scale || 1) + (b.ypan || 0)) * (b.jsonres || 1) - (b.jsonmarginY || 0)
        }
    };
    ma.prototype.transformToLatLon = function(a, b) {
        if (window.proj4 === void 0) da(21);
        else {
            var c = {
                    x: ((a.x - (b.jsonmarginX || 0)) / (b.jsonres || 1) - (b.xpan || 0)) / (b.scale || 1) + (b.xoffset || 0),
                    y: ((-a.y - (b.jsonmarginY || 0)) / (b.jsonres || 1) + (b.ypan || 0)) / (b.scale || 1) + (b.yoffset || 0)
                },
                d = b.cosAngle || b.rotation && Math.cos(b.rotation),
                e = b.sinAngle || b.rotation && Math.sin(b.rotation),
                c = window.proj4(b.crs, "WGS84", b.rotation ? {
                    x: c.x * d + c.y * -e,
                    y: c.x *
                        e + c.y * d
                } : c);
            return {
                lat: c.y,
                lon: c.x
            }
        }
    };
    ma.prototype.fromPointToLatLon = function(a) {
        var b = this.mapTransforms,
            c;
        if (b) {
            for (c in b)
                if (b.hasOwnProperty(c) && b[c].hitZone && Cb({
                        x: a.x,
                        y: -a.y
                    }, b[c].hitZone.coordinates[0])) return this.transformToLatLon(a, b[c]);
            return this.transformToLatLon(a, b["default"])
        } else da(22)
    };
    ma.prototype.fromLatLonToPoint = function(a) {
        var b = this.mapTransforms,
            c, d;
        if (!b) return da(22), {
            x: 0,
            y: null
        };
        for (c in b)
            if (b.hasOwnProperty(c) && b[c].hitZone && (d = this.transformFromLatLon(a, b[c]), Cb({
                    x: d.x,
                    y: -d.y
                }, b[c].hitZone.coordinates[0]))) return d;
        return this.transformFromLatLon(a, b["default"])
    };
    B.geojson = function(a, b, c) {
        var d = [],
            e = [],
            f = function(a) {
                var b = 0,
                    c = a.length;
                for (e.push("M"); b < c; b++) b === 1 && e.push("L"), e.push(a[b][0], -a[b][1])
            },
            b = b || "map";
        o(a.features, function(a) {
            var c = a.geometry,
                i = c.type,
                c = c.coordinates,
                a = a.properties,
                j;
            e = [];
            b === "map" || b === "mapbubble" ? (i === "Polygon" ? (o(c, f), e.push("Z")) : i === "MultiPolygon" && (o(c, function(a) {
                o(a, f)
            }), e.push("Z")), e.length && (j = {
                path: e
            })) : b === "mapline" ? (i ===
                "LineString" ? f(c) : i === "MultiLineString" && o(c, f), e.length && (j = {
                    path: e
                })) : b === "mappoint" && i === "Point" && (j = {
                x: c[0],
                y: -c[1]
            });
            j && d.push(q(j, {
                name: a.name || a.NAME,
                properties: a
            }))
        });
        if (c && a.copyrightShort) c.chart.mapCredits = '<a href="http://www.highcharts.com">Highcharts</a> \u00a9 <a href="' + a.copyrightUrl + '">' + a.copyrightShort + "</a>", c.chart.mapCreditsFull = a.copyright;
        return d
    };
    ea(ma.prototype, "showCredits", function(a, b) {
        if (J.credits.text === this.options.credits.text && this.mapCredits) b.text = this.mapCredits,
            b.href = null;
        a.call(this, b);
        this.credits && this.credits.attr({
            title: this.mapCreditsFull
        })
    });
    q(J.lang, {
        zoomIn: "Zoom in",
        zoomOut: "Zoom out"
    });
    J.mapNavigation = {
        buttonOptions: {
            alignTo: "plotBox",
            align: "left",
            verticalAlign: "top",
            x: 0,
            width: 18,
            height: 18,
            style: {
                fontSize: "15px",
                fontWeight: "bold",
                textAlign: "center"
            },
            theme: {
                "stroke-width": 1
            }
        },
        buttons: {
            zoomIn: {
                onclick: function() {
                    this.mapZoom(0.5)
                },
                text: "+",
                y: 0
            },
            zoomOut: {
                onclick: function() {
                    this.mapZoom(2)
                },
                text: "-",
                y: 28
            }
        }
    };
    B.splitPath = function(a) {
        var b, a = a.replace(/([A-Za-z])/g,
                " $1 "),
            a = a.replace(/^\s*/, "").replace(/\s*$/, ""),
            a = a.split(/[ ,]+/);
        for (b = 0; b < a.length; b++) /[a-zA-Z]/.test(a[b]) || (a[b] = parseFloat(a[b]));
        return a
    };
    B.maps = {};
    la.prototype.symbols.topbutton = function(a, b, c, d, e) {
        return Db(a - 1, b - 1, c, d, e.r, e.r, 0, 0)
    };
    la.prototype.symbols.bottombutton = function(a, b, c, d, e) {
        return Db(a - 1, b - 1, c, d, 0, 0, e.r, e.r)
    };
    Na === Wa && o(["topbutton", "bottombutton"], function(a) {
        Wa.prototype.symbols[a] = la.prototype.symbols[a]
    });
    B.Map = function(a, b) {
        var c = {
                endOnTick: !1,
                gridLineWidth: 0,
                lineWidth: 0,
                minPadding: 0,
                maxPadding: 0,
                startOnTick: !1,
                title: null,
                tickPositions: []
            },
            d;
        d = a.series;
        a.series = null;
        a = w({
            chart: {
                panning: "xy",
                type: "map"
            },
            xAxis: c,
            yAxis: w(c, {
                reversed: !0
            })
        }, a, {
            chart: {
                inverted: !1,
                alignTicks: !1
            }
        });
        a.series = d;
        return new ma(a, b)
    };
    J.plotOptions.heatmap = w(J.plotOptions.scatter, {
        animation: !1,
        borderWidth: 0,
        nullColor: "#F8F8F8",
        dataLabels: {
            formatter: function() {
                return this.point.value
            },
            inside: !0,
            verticalAlign: "middle",
            crop: !1,
            overflow: !1,
            padding: 0
        },
        marker: null,
        pointRange: null,
        tooltip: {
            pointFormat: "{point.x}, {point.y}: {point.value}<br/>"
        },
        states: {
            normal: {
                animation: !0
            },
            hover: {
                halo: !1,
                brightness: 0.2
            }
        }
    });
    v.heatmap = $(v.scatter, w(Jb, {
        type: "heatmap",
        pointArrayMap: ["y", "value"],
        hasPointSpecificOptions: !0,
        pointClass: $(Z, Ia),
        supportsDrilldown: !0,
        getExtremesFromAll: !0,
        directTouch: !0,
        init: function() {
            var a;
            v.scatter.prototype.init.apply(this, arguments);
            a = this.options;
            this.pointRange = a.pointRange = p(a.pointRange, a.colsize || 1);
            this.yAxis.axisPointRange = a.rowsize || 1
        },
        translate: function() {
            var a = this.options,
                b = this.xAxis,
                c = this.yAxis,
                d = function(a, b,
                    c) {
                    return Math.min(Math.max(b, a), c)
                };
            this.generatePoints();
            o(this.points, function(e) {
                var f = (a.colsize || 1) / 2,
                    g = (a.rowsize || 1) / 2,
                    h = d(Math.round(b.len - b.translate(e.x - f, 0, 1, 0, 1)), 0, b.len),
                    f = d(Math.round(b.len - b.translate(e.x + f, 0, 1, 0, 1)), 0, b.len),
                    i = d(Math.round(c.translate(e.y - g, 0, 1, 0, 1)), 0, c.len),
                    g = d(Math.round(c.translate(e.y + g, 0, 1, 0, 1)), 0, c.len);
                e.plotX = e.clientX = (h + f) / 2;
                e.plotY = (i + g) / 2;
                e.shapeType = "rect";
                e.shapeArgs = {
                    x: Math.min(h, f),
                    y: Math.min(i, g),
                    width: Math.abs(f - h),
                    height: Math.abs(g - i)
                }
            });
            this.translateColors();
            this.chart.hasRendered && o(this.points, function(a) {
                a.shapeArgs.fill = a.options.color || a.color
            })
        },
        drawPoints: v.column.prototype.drawPoints,
        animate: T,
        getBox: T,
        drawLegendSymbol: Ya.drawRectangle,
        getExtremes: function() {
            Q.prototype.getExtremes.call(this, this.valueData);
            this.valueMin = this.dataMin;
            this.valueMax = this.dataMax;
            Q.prototype.getExtremes.call(this)
        }
    }));
    Ia = B.TrackerMixin = {
        drawTrackerPoint: function() {
            var a = this,
                b = a.chart,
                c = b.pointer,
                d = a.options.cursor,
                e = d && {
                    cursor: d
                },
                f = function(a) {
                    for (var c = a.target,
                            d; c && !d;) d = c.point, c = c.parentNode;
                    if (d !== r && d !== b.hoverPoint) d.onMouseOver(a)
                };
            o(a.points, function(a) {
                if (a.graphic) a.graphic.element.point = a;
                if (a.dataLabel) a.dataLabel.element.point = a
            });
            if (!a._hasTracking) o(a.trackerGroups, function(b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                        c.onTrackerMouseOut(a)
                    }).css(e), Sa)) a[b].on("touchstart", f)
            }), a._hasTracking = !0
        },
        drawTrackerGraph: function() {
            var a = this,
                b = a.options,
                c = b.trackByArea,
                d = [].concat(c ? a.areaPath : a.graphPath),
                e = d.length,
                f = a.chart,
                g = f.pointer,
                h = f.renderer,
                i = f.options.tooltip.snap,
                j = a.tracker,
                k = b.cursor,
                l = k && {
                    cursor: k
                },
                k = a.singlePoints,
                n, m = function() {
                    if (f.hoverSeries !== a) a.onMouseOver()
                },
                p = "rgba(192,192,192," + (fa ? 1.0E-4 : 0.002) + ")";
            if (e && !c)
                for (n = e + 1; n--;) d[n] === "M" && d.splice(n + 1, 0, d[n + 1] - i, d[n + 2], "L"), (n && d[n] === "M" || n === e) && d.splice(n, 0, "L", d[n - 2] + i, d[n - 1]);
            for (n = 0; n < k.length; n++) e = k[n], d.push("M", e.plotX - i, e.plotY, "L", e.plotX + i, e.plotY);
            j ? j.attr({
                d: d
            }) : (a.tracker = h.path(d).attr({
                "stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden",
                stroke: p,
                fill: c ? p : S,
                "stroke-width": b.lineWidth + (c ? 0 : 2 * i),
                zIndex: 2
            }).add(a.group), o([a.tracker, a.markerGroup], function(a) {
                a.addClass("highcharts-tracker").on("mouseover", m).on("mouseout", function(a) {
                    g.onTrackerMouseOut(a)
                }).css(l);
                if (Sa) a.on("touchstart", m)
            }))
        }
    };
    if (v.column) M.prototype.drawTracker = Ia.drawTrackerPoint;
    if (v.pie) v.pie.prototype.drawTracker = Ia.drawTrackerPoint;
    if (v.scatter) U.prototype.drawTracker = Ia.drawTrackerPoint;
    q(Xa.prototype, {
        setItemEvents: function(a,
            b, c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function() {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout", function() {
                b.css(a.visible ? d : e);
                a.setState()
            }).on("click", function(b) {
                var c = function() {
                        a.setVisible && a.setVisible()
                    },
                    b = {
                        browserEvent: b
                    };
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : I(a, "legendItemClick", b, c)
            })
        },
        createCheckboxForItem: function(a) {
            a.checkbox = ca("input", {
                    type: "checkbox",
                    checked: a.selected,
                    defaultChecked: a.selected
                }, this.options.itemCheckboxStyle,
                this.chart.container);
            L(a.checkbox, "click", function(b) {
                I(a.series || a, "checkboxClick", {
                    checked: b.target.checked,
                    item: a
                }, function() {
                    a.select()
                })
            })
        }
    });
    J.legend.itemStyle.cursor = "pointer";
    q(ma.prototype, {
        showResetZoom: function() {
            var a = this,
                b = J.lang,
                c = a.options.chart.resetZoomButton,
                d = c.theme,
                e = d.states,
                f = c.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({
                align: c.position.align,
                title: b.resetZoomTitle
            }).add().align(c.position, !1, f)
        },
        zoomOut: function() {
            var a = this;
            I(a, "selection", {
                resetSelection: !0
            }, function() {
                a.zoom()
            })
        },
        zoom: function(a) {
            var b, c = this.pointer,
                d = !1,
                e;
            !a || a.resetSelection ? o(this.axes, function(a) {
                b = a.zoom()
            }) : o(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis,
                    h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            if (d && !e) this.showResetZoom();
            else if (!d && ha(e)) this.resetZoomButton = e.destroy();
            b && this.redraw(p(this.options.chart.animation,
                a && a.animation, this.pointCount < 100))
        },
        pan: function(a, b) {
            var c = this,
                d = c.hoverPoints,
                e;
            d && o(d, function(a) {
                a.setState()
            });
            o(b === "xy" ? [1, 0] : [1], function(b) {
                var d = a[b ? "chartX" : "chartY"],
                    h = c[b ? "xAxis" : "yAxis"][0],
                    i = c[b ? "mouseDownX" : "mouseDownY"],
                    j = (h.pointRange || 0) / 2,
                    k = h.getExtremes(),
                    l = h.toValue(i - d, !0) + j,
                    j = h.toValue(i + c[b ? "plotWidth" : "plotHeight"] - d, !0) - j,
                    i = i > d;
                if (h.series.length && (i || l > E(k.dataMin, k.min)) && (!i || j < t(k.dataMax, k.max))) h.setExtremes(l, j, !1, !1, {
                    trigger: "pan"
                }), e = !0;
                c[b ? "mouseDownX" : "mouseDownY"] =
                    d
            });
            e && c.redraw(!1);
            K(c.container, {
                cursor: "move"
            })
        }
    });
    q(Z.prototype, {
        select: function(a, b) {
            var c = this,
                d = c.series,
                e = d.chart,
                a = p(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function() {
                c.selected = c.options.selected = a;
                d.options.data[Ua(c, d.data)] = c.options;
                c.setState(a && "select");
                b || o(e.getSelectedPoints(), function(a) {
                    if (a.selected && a !== c) a.selected = a.options.selected = !1, d.options.data[Ua(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")
                })
            })
        },
        onMouseOver: function(a,
            b) {
            var c = this.series,
                d = c.chart,
                e = d.tooltip,
                f = d.hoverPoint;
            if (d.hoverSeries !== c) c.onMouseOver();
            if (f && f !== this) f.onMouseOut();
            if (this.series && (this.firePointEvent("mouseOver"), e && (!e.shared || c.noSharedTooltip) && e.refresh(this, a), this.setState("hover"), !b)) d.hoverPoint = this
        },
        onMouseOut: function() {
            var a = this.series.chart,
                b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            if (!b || Ua(this, b) === -1) this.setState(), a.hoverPoint = null
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var a = w(this.series.options.point,
                        this.options).events,
                    b;
                this.events = a;
                for (b in a) L(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(a, b) {
            var c = ga(this.plotX),
                d = this.plotY,
                e = this.series,
                f = e.options.states,
                g = V[e.type].marker && e.options.marker,
                h = g && !g.enabled,
                i = g && g.states[a],
                j = i && i.enabled === !1,
                k = e.stateMarkerGraphic,
                l = this.marker || {},
                n = e.chart,
                m = e.halo,
                o, a = a || "";
            o = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && a !== "select" || f[a] && f[a].enabled === !1 || a && (j || h && i.enabled === !1) || a && l.states && l.states[a] &&
                    l.states[a].enabled === !1)) {
                if (this.graphic) g = g && this.graphic.symbolName && o.r, this.graphic.attr(w(o, g ? {
                    x: c - g,
                    y: d - g,
                    width: 2 * g,
                    height: 2 * g
                } : {})), k && k.hide();
                else {
                    if (a && i)
                        if (g = i.radius, l = l.symbol || e.symbol, k && k.currentSymbol !== l && (k = k.destroy()), k) k[b ? "animate" : "attr"]({
                            x: c - g,
                            y: d - g
                        });
                        else if (l) e.stateMarkerGraphic = k = n.renderer.symbol(l, c - g, d - g, 2 * g, 2 * g).attr(o).add(e.markerGroup), k.currentSymbol = l;
                    if (k) k[a && n.isInsidePlot(c, d, n.inverted) ? "show" : "hide"](), k.element.point = this
                }
                if ((c = f[a] && f[a].halo) && c.size) {
                    if (!m) e.halo =
                        m = n.renderer.path().add(n.seriesGroup);
                    m.attr(q({
                        fill: W(this.color || e.color).setOpacity(c.opacity).get()
                    }, c.attributes))[b ? "animate" : "attr"]({
                        d: this.haloPath(c.size)
                    })
                } else m && m.attr({
                    d: []
                });
                this.state = a
            }
        },
        haloPath: function(a) {
            var b = this.series,
                c = b.chart,
                d = b.getPlotBox(),
                e = c.inverted;
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : this.plotX) - a, d.translateY + (e ? b.xAxis.len - this.plotX : this.plotY) - a, a * 2, a * 2)
        }
    });
    q(Q.prototype, {
        onMouseOver: function() {
            var a = this.chart,
                b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && I(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        },
        onMouseOut: function() {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            b.hoverSeries = null;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && I(this, "mouseOut");
            c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();
            this.setState()
        },
        setState: function(a) {
            var b = this.options,
                c = this.graph,
                d = b.states,
                e = b.lineWidth,
                b = 0,
                a = a || "";
            if (this.state !== a && (this.state = a, !(d[a] &&
                    d[a].enabled === !1) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle))) {
                a = {
                    "stroke-width": e
                };
                for (c.attr(a); this["zoneGraph" + b];) this["zoneGraph" + b].attr(a), b += 1
            }
        },
        setVisible: function(a, b) {
            var c = this,
                d = c.chart,
                e = c.legendItem,
                f, g = d.options.chart.ignoreHiddenSeries,
                h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === r ? !h : a) ? "show" : "hide";
            o(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(a) {
                if (c[a]) c[a][f]()
            });
            if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) ===
                c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && o(d.series, function(a) {
                if (a.options.stacking && a.visible) a.isDirty = !0
            });
            o(c.linkedSeries, function(b) {
                b.setVisible(a, !1)
            });
            if (g) d.isDirtyBox = !0;
            b !== !1 && d.redraw();
            I(c, f)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(a) {
            this.selected = a = a === r ? !this.selected : a;
            if (this.checkbox) this.checkbox.checked = a;
            I(this, a ? "select" : "unselect")
        },
        drawTracker: Ia.drawTrackerGraph
    });
    q(B, {
        Color: W,
        Point: Z,
        Tick: Ma,
        Renderer: Na,
        SVGElement: R,
        SVGRenderer: la,
        arrayMin: Qa,
        arrayMax: Ea,
        charts: X,
        dateFormat: Ka,
        error: da,
        format: Ja,
        pathAnim: ob,
        getOptions: function() {
            return J
        },
        hasBidiBug: Lb,
        isTouchDevice: Fb,
        setOptions: function(a) {
            J = w(!0, J, a);
            ub();
            return J
        },
        addEvent: L,
        removeEvent: aa,
        createElement: ca,
        discardElement: La,
        css: K,
        each: o,
        map: Oa,
        merge: w,
        splat: ra,
        extendClass: $,
        pInt: D,
        svg: fa,
        canvas: ia,
        vml: !fa && !ia,
        product: "Highmaps",
        version: "1.1.9"
    })
})();