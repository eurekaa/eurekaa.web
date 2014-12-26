!function (e, t) {
    "use strict";
    var n = t.prototype.trim, r = t.prototype.trimRight, i = t.prototype.trimLeft, s = function (e) {return e * 1 || 0}, o = function (e, t) {
        if (t < 1)return "";
        var n = "";
        while (t > 0)t & 1 && (n += e), t >>= 1, e += e;
        return n
    }, u = [].slice, a = function (e) {return e == null ? "\\s" : e.source ? e.source : "[" + p.escapeRegExp(e) + "]"}, f = {
        lt: "<",
        gt: ">",
        quot: '"',
        apos: "'",
        amp: "&"
    }, l = {};
    for (var c in f)l[f[c]] = c;
    var h = function () {
        function e(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()}

        var n = o, r = function () {return r.cache.hasOwnProperty(arguments[0]) || (r.cache[arguments[0]] = r.parse(arguments[0])), r.format.call(null, r.cache[arguments[0]], arguments)};
        return r.format = function (r, i) {
            var s = 1, o = r.length, u = "", a, f = [], l, c, p, d, v, m;
            for (l = 0; l < o; l++) {
                u = e(r[l]);
                if (u === "string")f.push(r[l]); else if (u === "array") {
                    p = r[l];
                    if (p[2]) {
                        a = i[s];
                        for (c = 0; c < p[2].length; c++) {
                            if (!a.hasOwnProperty(p[2][c]))throw new Error(h('[_.sprintf] property "%s" does not exist', p[2][c]));
                            a = a[p[2][c]]
                        }
                    } else p[1] ? a = i[p[1]] : a = i[s++];
                    if (/[^s]/.test(p[8]) && e(a) != "number")throw new Error(h("[_.sprintf] expecting number but found %s", e(a)));
                    switch (p[8]) {
                        case"b":
                            a = a.toString(2);
                            break;
                        case"c":
                            a = t.fromCharCode(a);
                            break;
                        case"d":
                            a = parseInt(a, 10);
                            break;
                        case"e":
                            a = p[7] ? a.toExponential(p[7]) : a.toExponential();
                            break;
                        case"f":
                            a = p[7] ? parseFloat(a).toFixed(p[7]) : parseFloat(a);
                            break;
                        case"o":
                            a = a.toString(8);
                            break;
                        case"s":
                            a = (a = t(a)) && p[7] ? a.substring(0, p[7]) : a;
                            break;
                        case"u":
                            a = Math.abs(a);
                            break;
                        case"x":
                            a = a.toString(16);
                            break;
                        case"X":
                            a = a.toString(16).toUpperCase()
                    }
                    a = /[def]/.test(p[8]) && p[3] && a >= 0 ? "+" + a : a, v = p[4] ? p[4] == "0" ? "0" : p[4].charAt(1) : " ", m = p[6] - t(a).length, d = p[6] ? n(v, m) : "", f.push(p[5] ? a + d : d + a)
                }
            }
            return f.join("")
        }, r.cache = {}, r.parse = function (e) {
            var t = e, n = [], r = [], i = 0;
            while (t) {
                if ((n = /^[^\x25]+/.exec(t)) !== null)r.push(n[0]); else if ((n = /^\x25{2}/.exec(t)) !== null)r.push("%"); else {
                    if ((n = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)) === null)throw new Error("[_.sprintf] huh?");
                    if (n[2]) {
                        i |= 1;
                        var s = [], o = n[2], u = [];
                        if ((u = /^([a-z_][a-z_\d]*)/i.exec(o)) === null)throw new Error("[_.sprintf] huh?");
                        s.push(u[1]);
                        while ((o = o.substring(u[0].length)) !== "")if ((u = /^\.([a-z_][a-z_\d]*)/i.exec(o)) !== null)s.push(u[1]); else {
                            if ((u = /^\[(\d+)\]/.exec(o)) === null)throw new Error("[_.sprintf] huh?");
                            s.push(u[1])
                        }
                        n[2] = s
                    } else i |= 2;
                    if (i === 3)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                    r.push(n)
                }
                t = t.substring(n[0].length)
            }
            return r
        }, r
    }(), p = {
        VERSION: "2.3.0",
        isBlank: function (e) {return e == null && (e = ""), /^\s*$/.test(e)},
        stripTags: function (e) {return e == null ? "" : t(e).replace(/<\/?[^>]+>/g, "")},
        capitalize: function (e) {return e = e == null ? "" : t(e), e.charAt(0).toUpperCase() + e.slice(1)},
        chop: function (e, n) {return e == null ? [] : (e = t(e), n = ~~n, n > 0 ? e.match(new RegExp(".{1," + n + "}", "g")) : [e])},
        clean: function (e) {return p.strip(e).replace(/\s+/g, " ")},
        count: function (e, n) {return e == null || n == null ? 0 : t(e).split(n).length - 1},
        chars: function (e) {return e == null ? [] : t(e).split("")},
        swapCase: function (e) {return e == null ? "" : t(e).replace(/\S/g, function (e) {return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()})},
        escapeHTML: function (e) {return e == null ? "" : t(e).replace(/[&<>"']/g, function (e) {return "&" + l[e] + ";"})},
        unescapeHTML: function (e) {
            return e == null ? "" : t(e).replace(/\&([^;]+);/g, function (e, n) {
                var r;
                return n in f ? f[n] : (r = n.match(/^#x([\da-fA-F]+)$/)) ? t.fromCharCode(parseInt(r[1], 16)) : (r = n.match(/^#(\d+)$/)) ? t.fromCharCode(~~r[1]) : e
            })
        },
        escapeRegExp: function (e) {return e == null ? "" : t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")},
        splice: function (e, t, n, r) {
            var i = p.chars(e);
            return i.splice(~~t, ~~n, r), i.join("")
        },
        insert: function (e, t, n) {return p.splice(e, t, 0, n)},
        include: function (e, n) {return n === "" ? !0 : e == null ? !1 : t(e).indexOf(n) !== -1},
        join: function () {
            var e = u.call(arguments), t = e.shift();
            return t == null && (t = ""), e.join(t)
        },
        lines: function (e) {return e == null ? [] : t(e).split("\n")},
        reverse: function (e) {return p.chars(e).reverse().join("")},
        startsWith: function (e, n) {return n === "" ? !0 : e == null || n == null ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(0, n.length) === n)},
        endsWith: function (e, n) {return n === "" ? !0 : e == null || n == null ? !1 : (e = t(e), n = t(n), e.length >= n.length && e.slice(e.length - n.length) === n)},
        succ: function (e) {return e == null ? "" : (e = t(e), e.slice(0, -1) + t.fromCharCode(e.charCodeAt(e.length - 1) + 1))},
        titleize: function (e) {return e == null ? "" : t(e).replace(/(?:^|\s)\S/g, function (e) {return e.toUpperCase()})},
        camelize: function (e) {return p.trim(e).replace(/[-_\s]+(.)?/g, function (e, t) {return t.toUpperCase()})},
        underscored: function (e) {return p.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()},
        dasherize: function (e) {return p.trim(e).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()},
        classify: function (e) {return p.titleize(t(e).replace(/_/g, " ")).replace(/\s/g, "")},
        humanize: function (e) {return p.capitalize(p.underscored(e).replace(/_id$/, "").replace(/_/g, " "))},
        trim: function (e, r) {return e == null ? "" : !r && n ? n.call(e) : (r = a(r), t(e).replace(new RegExp("^" + r + "+|" + r + "+$", "g"), ""))},
        ltrim: function (e, n) {return e == null ? "" : !n && i ? i.call(e) : (n = a(n), t(e).replace(new RegExp("^" + n + "+"), ""))},
        rtrim: function (e, n) {return e == null ? "" : !n && r ? r.call(e) : (n = a(n), t(e).replace(new RegExp(n + "+$"), ""))},
        truncate: function (e, n, r) {return e == null ? "" : (e = t(e), r = r || "...", n = ~~n, e.length > n ? e.slice(0, n) + r : e)},
        prune: function (e, n, r) {
            if (e == null)return "";
            e = t(e), n = ~~n, r = r != null ? t(r) : "...";
            if (e.length <= n)return e;
            var i = function (e) {return e.toUpperCase() !== e.toLowerCase() ? "A" : " "}, s = e.slice(0, n + 1).replace(/.(?=\W*\w*$)/g, i);
            return s.slice(s.length - 2).match(/\w\w/) ? s = s.replace(/\s*\S+$/, "") : s = p.rtrim(s.slice(0, s.length - 1)), (s + r).length > e.length ? e : e.slice(0, s.length) + r
        },
        words: function (e, t) {return p.isBlank(e) ? [] : p.trim(e, t).split(t || /\s+/)},
        pad: function (e, n, r, i) {
            e = e == null ? "" : t(e), n = ~~n;
            var s = 0;
            r ? r.length > 1 && (r = r.charAt(0)) : r = " ";
            switch (i) {
                case"right":
                    return s = n - e.length, e + o(r, s);
                case"both":
                    return s = n - e.length, o(r, Math.ceil(s / 2)) + e + o(r, Math.floor(s / 2));
                default:
                    return s = n - e.length, o(r, s) + e
            }
        },
        lpad: function (e, t, n) {return p.pad(e, t, n)},
        rpad: function (e, t, n) {return p.pad(e, t, n, "right")},
        lrpad: function (e, t, n) {return p.pad(e, t, n, "both")},
        sprintf: h,
        vsprintf: function (e, t) {return t.unshift(e), h.apply(null, t)},
        toNumber: function (e, n) {
            if (e == null || e == "")return 0;
            e = t(e);
            var r = s(s(e).toFixed(~~n));
            return r === 0 && !e.match(/^0+$/) ? Number.NaN : r
        },
        numberFormat: function (e, t, n, r) {
            if (isNaN(e) || e == null)return "";
            e = e.toFixed(~~t), r = r || ",";
            var i = e.split("."), s = i[0], o = i[1] ? (n || ".") + i[1] : "";
            return s.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + r) + o
        },
        strRight: function (e, n) {
            if (e == null)return "";
            e = t(e), n = n != null ? t(n) : n;
            var r = n ? e.indexOf(n) : -1;
            return ~r ? e.slice(r + n.length, e.length) : e
        },
        strRightBack: function (e, n) {
            if (e == null)return "";
            e = t(e), n = n != null ? t(n) : n;
            var r = n ? e.lastIndexOf(n) : -1;
            return ~r ? e.slice(r + n.length, e.length) : e
        },
        strLeft: function (e, n) {
            if (e == null)return "";
            e = t(e), n = n != null ? t(n) : n;
            var r = n ? e.indexOf(n) : -1;
            return ~r ? e.slice(0, r) : e
        },
        strLeftBack: function (e, t) {
            if (e == null)return "";
            e += "", t = t != null ? "" + t : t;
            var n = e.lastIndexOf(t);
            return ~n ? e.slice(0, n) : e
        },
        toSentence: function (e, t, n, r) {
            t = t || ", ", n = n || " and ";
            var i = e.slice(), s = i.pop();
            return e.length > 2 && r && (n = p.rtrim(t) + n), i.length ? i.join(t) + n + s : s
        },
        toSentenceSerial: function () {
            var e = u.call(arguments);
            return e[3] = !0, p.toSentence.apply(p, e)
        },
        slugify: function (e) {
            if (e == null)return "";
            var n = "ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź", r = "aaaaaaaaceeeeeiiiilnoooooouuuunczz", i = new RegExp(a(n), "g");
            return e = t(e).toLowerCase().replace(i, function (e) {
                var t = n.indexOf(e);
                return r.charAt(t) || "-"
            }), p.dasherize(e.replace(/[^\w\s-]/g, ""))
        },
        surround: function (e, t) {return [t, e, t].join("")},
        quote: function (e) {return p.surround(e, '"')},
        exports: function () {
            var e = {};
            for (var t in this) {
                if (!this.hasOwnProperty(t) || t.match(/^(?:include|contains|reverse)$/))continue;
                e[t] = this[t]
            }
            return e
        },
        repeat: function (e, n, r) {
            if (e == null)return "";
            n = ~~n;
            if (r == null)return o(t(e), n);
            for (var i = []; n > 0; i[--n] = e);
            return i.join(r)
        },
        levenshtein: function (e, n) {
            if (e == null && n == null)return 0;
            if (e == null)return t(n).length;
            if (n == null)return t(e).length;
            e = t(e), n = t(n);
            var r = [], i, s;
            for (var o = 0; o <= n.length; o++)for (var u = 0; u <= e.length; u++)o && u ? e.charAt(u - 1) === n.charAt(o - 1) ? s = i : s = Math.min(r[u], r[u - 1], i) + 1 : s = o + u, i = r[u], r[u] = s;
            return r.pop()
        }
    };
    p.strip = p.trim, p.lstrip = p.ltrim, p.rstrip = p.rtrim, p.center = p.lrpad, p.rjust = p.lpad, p.ljust = p.rpad, p.contains = p.include, p.q = p.quote, typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (module.exports = p), exports._s = p) : typeof define == "function" && define.amd ? define("underscore.string", [], function () {return p}) : (e._ = e._ || {}, e._.string = e._.str = p)
}(this, String);
