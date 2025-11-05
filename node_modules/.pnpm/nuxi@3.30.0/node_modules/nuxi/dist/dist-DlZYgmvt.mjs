import { t as resolveModulePath } from "./dist-Co27RTKx.mjs";
import { a as join, c as resolve, i as isAbsolute, o as normalize } from "./pathe.M-eThtNZ-KQ2nQL0i.mjs";
import { fileURLToPath } from "node:url";
import { promises, statSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";

//#region ../../node_modules/.pnpm/confbox@0.2.2/node_modules/confbox/dist/shared/confbox.DA7CpUDY.mjs
const b = /^(?:( )+|\t+)/, d$1 = "space", h$1 = "tab";
function g(e, t) {
	const n = /* @__PURE__ */ new Map();
	let s = 0, o, i;
	for (const c of e.split(/\n/g)) {
		if (!c) continue;
		let f, a, l, p, r$1;
		const y = c.match(b);
		if (y === null) s = 0, o = "";
		else {
			if (f = y[0].length, a = y[1] ? d$1 : h$1, t && a === d$1 && f === 1) continue;
			a !== o && (s = 0), o = a, l = 1, p = 0;
			const u = f - s;
			if (s = f, u === 0) l = 0, p = 1;
			else {
				const I$1 = u > 0 ? u : -u;
				i = T(a, I$1);
			}
			r$1 = n.get(i), r$1 = r$1 === void 0 ? [1, 0] : [r$1[0] + l, r$1[1] + p], n.set(i, r$1);
		}
	}
	return n;
}
function T(e, t) {
	return (e === d$1 ? "s" : "t") + String(t);
}
function w(e) {
	return {
		type: e[0] === "s" ? d$1 : h$1,
		amount: Number(e.slice(1))
	};
}
function E(e) {
	let t, n = 0, s = 0;
	for (const [o, [i, c]] of e) (i > n || i === n && c > s) && (n = i, s = c, t = o);
	return t;
}
function S$2(e, t) {
	return (e === d$1 ? " " : "	").repeat(t);
}
function _(e) {
	if (typeof e != "string") throw new TypeError("Expected a string");
	let t = g(e, !0);
	t.size === 0 && (t = g(e, !1));
	const n = E(t);
	let s, o = 0, i = "";
	return n !== void 0 && ({type: s, amount: o} = w(n), i = S$2(s, o)), {
		amount: o,
		type: s,
		indent: i
	};
}
const m = Symbol.for("__confbox_fmt__"), k = /^(\s+)/, v = /(\s+)$/;
function x$2(e, t = {}) {
	return {
		sample: t.indent === void 0 && t.preserveIndentation !== !1 && e.slice(0, t?.sampleSize || 1024),
		whiteSpace: t.preserveWhitespace === !1 ? void 0 : {
			start: k.exec(e)?.[0] || "",
			end: v.exec(e)?.[0] || ""
		}
	};
}
function N(e, t, n) {
	!t || typeof t != "object" || Object.defineProperty(t, m, {
		enumerable: !1,
		configurable: !0,
		writable: !0,
		value: x$2(e, n)
	});
}
function C(e, t) {
	if (!e || typeof e != "object" || !(m in e)) return {
		indent: t?.indent ?? 2,
		whitespace: {
			start: "",
			end: ""
		}
	};
	const n = e[m];
	return {
		indent: t?.indent || _(n.sample || "").indent,
		whitespace: n.whiteSpace || {
			start: "",
			end: ""
		}
	};
}

//#endregion
//#region ../../node_modules/.pnpm/confbox@0.2.2/node_modules/confbox/dist/shared/confbox.DnMsyigM.mjs
function $(n, l = !1) {
	const g$1 = n.length;
	let e = 0, u = "", p = 0, k$1 = 16, A = 0, o = 0, O$1 = 0, B = 0, b$1 = 0;
	function I$1(i, T$1) {
		let s = 0, c = 0;
		for (; s < i;) {
			let t = n.charCodeAt(e);
			if (t >= 48 && t <= 57) c = c * 16 + t - 48;
			else if (t >= 65 && t <= 70) c = c * 16 + t - 65 + 10;
			else if (t >= 97 && t <= 102) c = c * 16 + t - 97 + 10;
			else break;
			e++, s++;
		}
		return s < i && (c = -1), c;
	}
	function V(i) {
		e = i, u = "", p = 0, k$1 = 16, b$1 = 0;
	}
	function F() {
		let i = e;
		if (n.charCodeAt(e) === 48) e++;
		else for (e++; e < n.length && L(n.charCodeAt(e));) e++;
		if (e < n.length && n.charCodeAt(e) === 46) if (e++, e < n.length && L(n.charCodeAt(e))) for (e++; e < n.length && L(n.charCodeAt(e));) e++;
		else return b$1 = 3, n.substring(i, e);
		let T$1 = e;
		if (e < n.length && (n.charCodeAt(e) === 69 || n.charCodeAt(e) === 101)) if (e++, (e < n.length && n.charCodeAt(e) === 43 || n.charCodeAt(e) === 45) && e++, e < n.length && L(n.charCodeAt(e))) {
			for (e++; e < n.length && L(n.charCodeAt(e));) e++;
			T$1 = e;
		} else b$1 = 3;
		return n.substring(i, T$1);
	}
	function a() {
		let i = "", T$1 = e;
		for (;;) {
			if (e >= g$1) {
				i += n.substring(T$1, e), b$1 = 2;
				break;
			}
			const s = n.charCodeAt(e);
			if (s === 34) {
				i += n.substring(T$1, e), e++;
				break;
			}
			if (s === 92) {
				if (i += n.substring(T$1, e), e++, e >= g$1) {
					b$1 = 2;
					break;
				}
				switch (n.charCodeAt(e++)) {
					case 34:
						i += "\"";
						break;
					case 92:
						i += "\\";
						break;
					case 47:
						i += "/";
						break;
					case 98:
						i += "\b";
						break;
					case 102:
						i += "\f";
						break;
					case 110:
						i += `
`;
						break;
					case 114:
						i += "\r";
						break;
					case 116:
						i += "	";
						break;
					case 117:
						const t = I$1(4);
						t >= 0 ? i += String.fromCharCode(t) : b$1 = 4;
						break;
					default: b$1 = 5;
				}
				T$1 = e;
				continue;
			}
			if (s >= 0 && s <= 31) if (r(s)) {
				i += n.substring(T$1, e), b$1 = 2;
				break;
			} else b$1 = 6;
			e++;
		}
		return i;
	}
	function w$1() {
		if (u = "", b$1 = 0, p = e, o = A, B = O$1, e >= g$1) return p = g$1, k$1 = 17;
		let i = n.charCodeAt(e);
		if (J(i)) {
			do
				e++, u += String.fromCharCode(i), i = n.charCodeAt(e);
			while (J(i));
			return k$1 = 15;
		}
		if (r(i)) return e++, u += String.fromCharCode(i), i === 13 && n.charCodeAt(e) === 10 && (e++, u += `
`), A++, O$1 = e, k$1 = 14;
		switch (i) {
			case 123: return e++, k$1 = 1;
			case 125: return e++, k$1 = 2;
			case 91: return e++, k$1 = 3;
			case 93: return e++, k$1 = 4;
			case 58: return e++, k$1 = 6;
			case 44: return e++, k$1 = 5;
			case 34: return e++, u = a(), k$1 = 10;
			case 47:
				const T$1 = e - 1;
				if (n.charCodeAt(e + 1) === 47) {
					for (e += 2; e < g$1 && !r(n.charCodeAt(e));) e++;
					return u = n.substring(T$1, e), k$1 = 12;
				}
				if (n.charCodeAt(e + 1) === 42) {
					e += 2;
					const s = g$1 - 1;
					let c = !1;
					for (; e < s;) {
						const t = n.charCodeAt(e);
						if (t === 42 && n.charCodeAt(e + 1) === 47) {
							e += 2, c = !0;
							break;
						}
						e++, r(t) && (t === 13 && n.charCodeAt(e) === 10 && e++, A++, O$1 = e);
					}
					return c || (e++, b$1 = 1), u = n.substring(T$1, e), k$1 = 13;
				}
				return u += String.fromCharCode(i), e++, k$1 = 16;
			case 45: if (u += String.fromCharCode(i), e++, e === g$1 || !L(n.charCodeAt(e))) return k$1 = 16;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57: return u += F(), k$1 = 11;
			default:
				for (; e < g$1 && v$1(i);) e++, i = n.charCodeAt(e);
				if (p !== e) {
					switch (u = n.substring(p, e), u) {
						case "true": return k$1 = 8;
						case "false": return k$1 = 9;
						case "null": return k$1 = 7;
					}
					return k$1 = 16;
				}
				return u += String.fromCharCode(i), e++, k$1 = 16;
		}
	}
	function v$1(i) {
		if (J(i) || r(i)) return !1;
		switch (i) {
			case 125:
			case 93:
			case 123:
			case 91:
			case 34:
			case 58:
			case 44:
			case 47: return !1;
		}
		return !0;
	}
	function j$1() {
		let i;
		do
			i = w$1();
		while (i >= 12 && i <= 15);
		return i;
	}
	return {
		setPosition: V,
		getPosition: () => e,
		scan: l ? j$1 : w$1,
		getToken: () => k$1,
		getTokenValue: () => u,
		getTokenOffset: () => p,
		getTokenLength: () => e - p,
		getTokenStartLine: () => o,
		getTokenStartCharacter: () => p - B,
		getTokenError: () => b$1
	};
}
function J(n) {
	return n === 32 || n === 9;
}
function r(n) {
	return n === 10 || n === 13;
}
function L(n) {
	return n >= 48 && n <= 57;
}
var Q;
(function(n) {
	n[n.lineFeed = 10] = "lineFeed", n[n.carriageReturn = 13] = "carriageReturn", n[n.space = 32] = "space", n[n._0 = 48] = "_0", n[n._1 = 49] = "_1", n[n._2 = 50] = "_2", n[n._3 = 51] = "_3", n[n._4 = 52] = "_4", n[n._5 = 53] = "_5", n[n._6 = 54] = "_6", n[n._7 = 55] = "_7", n[n._8 = 56] = "_8", n[n._9 = 57] = "_9", n[n.a = 97] = "a", n[n.b = 98] = "b", n[n.c = 99] = "c", n[n.d = 100] = "d", n[n.e = 101] = "e", n[n.f = 102] = "f", n[n.g = 103] = "g", n[n.h = 104] = "h", n[n.i = 105] = "i", n[n.j = 106] = "j", n[n.k = 107] = "k", n[n.l = 108] = "l", n[n.m = 109] = "m", n[n.n = 110] = "n", n[n.o = 111] = "o", n[n.p = 112] = "p", n[n.q = 113] = "q", n[n.r = 114] = "r", n[n.s = 115] = "s", n[n.t = 116] = "t", n[n.u = 117] = "u", n[n.v = 118] = "v", n[n.w = 119] = "w", n[n.x = 120] = "x", n[n.y = 121] = "y", n[n.z = 122] = "z", n[n.A = 65] = "A", n[n.B = 66] = "B", n[n.C = 67] = "C", n[n.D = 68] = "D", n[n.E = 69] = "E", n[n.F = 70] = "F", n[n.G = 71] = "G", n[n.H = 72] = "H", n[n.I = 73] = "I", n[n.J = 74] = "J", n[n.K = 75] = "K", n[n.L = 76] = "L", n[n.M = 77] = "M", n[n.N = 78] = "N", n[n.O = 79] = "O", n[n.P = 80] = "P", n[n.Q = 81] = "Q", n[n.R = 82] = "R", n[n.S = 83] = "S", n[n.T = 84] = "T", n[n.U = 85] = "U", n[n.V = 86] = "V", n[n.W = 87] = "W", n[n.X = 88] = "X", n[n.Y = 89] = "Y", n[n.Z = 90] = "Z", n[n.asterisk = 42] = "asterisk", n[n.backslash = 92] = "backslash", n[n.closeBrace = 125] = "closeBrace", n[n.closeBracket = 93] = "closeBracket", n[n.colon = 58] = "colon", n[n.comma = 44] = "comma", n[n.dot = 46] = "dot", n[n.doubleQuote = 34] = "doubleQuote", n[n.minus = 45] = "minus", n[n.openBrace = 123] = "openBrace", n[n.openBracket = 91] = "openBracket", n[n.plus = 43] = "plus", n[n.slash = 47] = "slash", n[n.formFeed = 12] = "formFeed", n[n.tab = 9] = "tab";
})(Q || (Q = {})), new Array(20).fill(0).map((n, l) => " ".repeat(l));
const N$1 = 200;
new Array(N$1).fill(0).map((n, l) => `
` + " ".repeat(l)), new Array(N$1).fill(0).map((n, l) => "\r" + " ".repeat(l)), new Array(N$1).fill(0).map((n, l) => `\r
` + " ".repeat(l)), new Array(N$1).fill(0).map((n, l) => `
` + "	".repeat(l)), new Array(N$1).fill(0).map((n, l) => "\r" + "	".repeat(l)), new Array(N$1).fill(0).map((n, l) => `\r
` + "	".repeat(l));
var U;
(function(n) {
	n.DEFAULT = { allowTrailingComma: !1 };
})(U || (U = {}));
function S$1(n, l = [], g$1 = U.DEFAULT) {
	let e = null, u = [];
	const p = [];
	function k$1(o) {
		Array.isArray(u) ? u.push(o) : e !== null && (u[e] = o);
	}
	return P(n, {
		onObjectBegin: () => {
			const o = {};
			k$1(o), p.push(u), u = o, e = null;
		},
		onObjectProperty: (o) => {
			e = o;
		},
		onObjectEnd: () => {
			u = p.pop();
		},
		onArrayBegin: () => {
			const o = [];
			k$1(o), p.push(u), u = o, e = null;
		},
		onArrayEnd: () => {
			u = p.pop();
		},
		onLiteralValue: k$1,
		onError: (o, O$1, B) => {
			l.push({
				error: o,
				offset: O$1,
				length: B
			});
		}
	}, g$1), u[0];
}
function P(n, l, g$1 = U.DEFAULT) {
	const e = $(n, !1), u = [];
	let p = 0;
	function k$1(f) {
		return f ? () => p === 0 && f(e.getTokenOffset(), e.getTokenLength(), e.getTokenStartLine(), e.getTokenStartCharacter()) : () => !0;
	}
	function A(f) {
		return f ? (m$1) => p === 0 && f(m$1, e.getTokenOffset(), e.getTokenLength(), e.getTokenStartLine(), e.getTokenStartCharacter()) : () => !0;
	}
	function o(f) {
		return f ? (m$1) => p === 0 && f(m$1, e.getTokenOffset(), e.getTokenLength(), e.getTokenStartLine(), e.getTokenStartCharacter(), () => u.slice()) : () => !0;
	}
	function O$1(f) {
		return f ? () => {
			p > 0 ? p++ : f(e.getTokenOffset(), e.getTokenLength(), e.getTokenStartLine(), e.getTokenStartCharacter(), () => u.slice()) === !1 && (p = 1);
		} : () => !0;
	}
	function B(f) {
		return f ? () => {
			p > 0 && p--, p === 0 && f(e.getTokenOffset(), e.getTokenLength(), e.getTokenStartLine(), e.getTokenStartCharacter());
		} : () => !0;
	}
	const b$1 = O$1(l.onObjectBegin), I$1 = o(l.onObjectProperty), V = B(l.onObjectEnd), F = O$1(l.onArrayBegin), a = B(l.onArrayEnd), w$1 = o(l.onLiteralValue), v$1 = A(l.onSeparator), j$1 = k$1(l.onComment), i = A(l.onError), T$1 = g$1 && g$1.disallowComments, s = g$1 && g$1.allowTrailingComma;
	function c() {
		for (;;) {
			const f = e.scan();
			switch (e.getTokenError()) {
				case 4:
					t(14);
					break;
				case 5:
					t(15);
					break;
				case 3:
					t(13);
					break;
				case 1:
					T$1 || t(11);
					break;
				case 2:
					t(12);
					break;
				case 6:
					t(16);
					break;
			}
			switch (f) {
				case 12:
				case 13:
					T$1 ? t(10) : j$1();
					break;
				case 16:
					t(1);
					break;
				case 15:
				case 14: break;
				default: return f;
			}
		}
	}
	function t(f, m$1 = [], y = []) {
		if (i(f), m$1.length + y.length > 0) {
			let _$1 = e.getToken();
			for (; _$1 !== 17;) {
				if (m$1.indexOf(_$1) !== -1) {
					c();
					break;
				} else if (y.indexOf(_$1) !== -1) break;
				_$1 = c();
			}
		}
	}
	function D(f) {
		const m$1 = e.getTokenValue();
		return f ? w$1(m$1) : (I$1(m$1), u.push(m$1)), c(), !0;
	}
	function G() {
		switch (e.getToken()) {
			case 11:
				const f = e.getTokenValue();
				let m$1 = Number(f);
				isNaN(m$1) && (t(2), m$1 = 0), w$1(m$1);
				break;
			case 7:
				w$1(null);
				break;
			case 8:
				w$1(!0);
				break;
			case 9:
				w$1(!1);
				break;
			default: return !1;
		}
		return c(), !0;
	}
	function M() {
		return e.getToken() !== 10 ? (t(3, [], [2, 5]), !1) : (D(!1), e.getToken() === 6 ? (v$1(":"), c(), E$1() || t(4, [], [2, 5])) : t(5, [], [2, 5]), u.pop(), !0);
	}
	function X() {
		b$1(), c();
		let f = !1;
		for (; e.getToken() !== 2 && e.getToken() !== 17;) {
			if (e.getToken() === 5) {
				if (f || t(4, [], []), v$1(","), c(), e.getToken() === 2 && s) break;
			} else f && t(6, [], []);
			M() || t(4, [], [2, 5]), f = !0;
		}
		return V(), e.getToken() !== 2 ? t(7, [2], []) : c(), !0;
	}
	function Y() {
		F(), c();
		let f = !0, m$1 = !1;
		for (; e.getToken() !== 4 && e.getToken() !== 17;) {
			if (e.getToken() === 5) {
				if (m$1 || t(4, [], []), v$1(","), c(), e.getToken() === 4 && s) break;
			} else m$1 && t(6, [], []);
			f ? (u.push(0), f = !1) : u[u.length - 1]++, E$1() || t(4, [], [4, 5]), m$1 = !0;
		}
		return a(), f || u.pop(), e.getToken() !== 4 ? t(8, [4], []) : c(), !0;
	}
	function E$1() {
		switch (e.getToken()) {
			case 3: return Y();
			case 1: return X();
			case 10: return D(!0);
			default: return G();
		}
	}
	return c(), e.getToken() === 17 ? g$1.allowEmptyContent ? !0 : (t(4, [], []), !1) : E$1() ? (e.getToken() !== 17 && t(9, [], []), !0) : (t(4, [], []), !1);
}
var W;
(function(n) {
	n[n.None = 0] = "None", n[n.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", n[n.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", n[n.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", n[n.InvalidUnicode = 4] = "InvalidUnicode", n[n.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", n[n.InvalidCharacter = 6] = "InvalidCharacter";
})(W || (W = {}));
var H;
(function(n) {
	n[n.OpenBraceToken = 1] = "OpenBraceToken", n[n.CloseBraceToken = 2] = "CloseBraceToken", n[n.OpenBracketToken = 3] = "OpenBracketToken", n[n.CloseBracketToken = 4] = "CloseBracketToken", n[n.CommaToken = 5] = "CommaToken", n[n.ColonToken = 6] = "ColonToken", n[n.NullKeyword = 7] = "NullKeyword", n[n.TrueKeyword = 8] = "TrueKeyword", n[n.FalseKeyword = 9] = "FalseKeyword", n[n.StringLiteral = 10] = "StringLiteral", n[n.NumericLiteral = 11] = "NumericLiteral", n[n.LineCommentTrivia = 12] = "LineCommentTrivia", n[n.BlockCommentTrivia = 13] = "BlockCommentTrivia", n[n.LineBreakTrivia = 14] = "LineBreakTrivia", n[n.Trivia = 15] = "Trivia", n[n.Unknown = 16] = "Unknown", n[n.EOF = 17] = "EOF";
})(H || (H = {}));
const K = S$1;
var q;
(function(n) {
	n[n.InvalidSymbol = 1] = "InvalidSymbol", n[n.InvalidNumberFormat = 2] = "InvalidNumberFormat", n[n.PropertyNameExpected = 3] = "PropertyNameExpected", n[n.ValueExpected = 4] = "ValueExpected", n[n.ColonExpected = 5] = "ColonExpected", n[n.CommaExpected = 6] = "CommaExpected", n[n.CloseBraceExpected = 7] = "CloseBraceExpected", n[n.CloseBracketExpected = 8] = "CloseBracketExpected", n[n.EndOfFileExpected = 9] = "EndOfFileExpected", n[n.InvalidCommentToken = 10] = "InvalidCommentToken", n[n.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", n[n.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", n[n.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", n[n.InvalidUnicode = 14] = "InvalidUnicode", n[n.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", n[n.InvalidCharacter = 16] = "InvalidCharacter";
})(q || (q = {}));
function x(n, l) {
	const g$1 = JSON.parse(n, l?.reviver);
	return N(n, g$1, l), g$1;
}
function z(n, l) {
	const g$1 = C(n, l), e = JSON.stringify(n, l?.replacer, g$1.indent);
	return g$1.whitespace.start + e + g$1.whitespace.end;
}
function h(n, l) {
	const g$1 = K(n, l?.errors, l);
	return N(n, g$1, l), g$1;
}

//#endregion
//#region ../../node_modules/.pnpm/confbox@0.2.2/node_modules/confbox/dist/ini.mjs
var O, x$1;
function j() {
	if (x$1) return O;
	x$1 = 1;
	const { hasOwnProperty: y } = Object.prototype, d$2 = (e, t = {}) => {
		typeof t == "string" && (t = { section: t }), t.align = t.align === !0, t.newline = t.newline === !0, t.sort = t.sort === !0, t.whitespace = t.whitespace === !0 || t.align === !0, t.platform = t.platform || typeof process < "u" && process.platform, t.bracketedArray = t.bracketedArray !== !1;
		const s = t.platform === "win32" ? `\r
` : `
`, r$1 = t.whitespace ? " = " : "=", c = [], o = t.sort ? Object.keys(e).sort() : Object.keys(e);
		let g$1 = 0;
		t.align && (g$1 = h$2(o.filter((n) => e[n] === null || Array.isArray(e[n]) || typeof e[n] != "object").map((n) => Array.isArray(e[n]) ? `${n}[]` : n).concat([""]).reduce((n, i) => h$2(n).length >= h$2(i).length ? n : i)).length);
		let l = "";
		const m$1 = t.bracketedArray ? "[]" : "";
		for (const n of o) {
			const i = e[n];
			if (i && Array.isArray(i)) for (const f of i) l += h$2(`${n}${m$1}`).padEnd(g$1, " ") + r$1 + h$2(f) + s;
			else i && typeof i == "object" ? c.push(n) : l += h$2(n).padEnd(g$1, " ") + r$1 + h$2(i) + s;
		}
		t.section && l.length && (l = "[" + h$2(t.section) + "]" + (t.newline ? s + s : s) + l);
		for (const n of c) {
			const i = k$1(n, ".").join("\\."), f = (t.section ? t.section + "." : "") + i, u = d$2(e[n], {
				...t,
				section: f
			});
			l.length && u.length && (l += s), l += u;
		}
		return l;
	};
	function k$1(e, t) {
		var s = 0, r$1 = 0, c = 0, o = [];
		do
			if (c = e.indexOf(t, s), c !== -1) {
				if (s = c + t.length, c > 0 && e[c - 1] === "\\") continue;
				o.push(e.slice(r$1, c)), r$1 = c + t.length;
			}
		while (c !== -1);
		return o.push(e.slice(r$1)), o;
	}
	const w$1 = (e, t = {}) => {
		t.bracketedArray = t.bracketedArray !== !1;
		const s = Object.create(null);
		let r$1 = s, c = null;
		const o = /^\[([^\]]*)\]\s*$|^([^=]+)(=(.*))?$/i, g$1 = e.split(/[\r\n]+/g), l = {};
		for (const n of g$1) {
			if (!n || n.match(/^\s*[;#]/) || n.match(/^\s*$/)) continue;
			const i = n.match(o);
			if (!i) continue;
			if (i[1] !== void 0) {
				if (c = A(i[1]), c === "__proto__") {
					r$1 = Object.create(null);
					continue;
				}
				r$1 = s[c] = s[c] || Object.create(null);
				continue;
			}
			const f = A(i[2]);
			let u;
			t.bracketedArray ? u = f.length > 2 && f.slice(-2) === "[]" : (l[f] = (l?.[f] || 0) + 1, u = l[f] > 1);
			const a = u && f.endsWith("[]") ? f.slice(0, -2) : f;
			if (a === "__proto__") continue;
			const p = i[3] ? A(i[4]) : !0, b$1 = p === "true" || p === "false" || p === "null" ? JSON.parse(p) : p;
			u && (y.call(r$1, a) ? Array.isArray(r$1[a]) || (r$1[a] = [r$1[a]]) : r$1[a] = []), Array.isArray(r$1[a]) ? r$1[a].push(b$1) : r$1[a] = b$1;
		}
		const m$1 = [];
		for (const n of Object.keys(s)) {
			if (!y.call(s, n) || typeof s[n] != "object" || Array.isArray(s[n])) continue;
			const i = k$1(n, ".");
			r$1 = s;
			const f = i.pop(), u = f.replace(/\\\./g, ".");
			for (const a of i) a !== "__proto__" && ((!y.call(r$1, a) || typeof r$1[a] != "object") && (r$1[a] = Object.create(null)), r$1 = r$1[a]);
			r$1 === s && u === f || (r$1[u] = s[n], m$1.push(n));
		}
		for (const n of m$1) delete s[n];
		return s;
	}, _$1 = (e) => e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'"), h$2 = (e) => typeof e != "string" || e.match(/[=\r\n]/) || e.match(/^\[/) || e.length > 1 && _$1(e) || e !== e.trim() ? JSON.stringify(e) : e.split(";").join("\\;").split("#").join("\\#"), A = (e) => {
		if (e = (e || "").trim(), _$1(e)) {
			e.charAt(0) === "'" && (e = e.slice(1, -1));
			try {
				e = JSON.parse(e);
			} catch {}
		} else {
			let t = !1, s = "";
			for (let r$1 = 0, c = e.length; r$1 < c; r$1++) {
				const o = e.charAt(r$1);
				if (t) "\\;#".indexOf(o) !== -1 ? s += o : s += "\\" + o, t = !1;
				else {
					if (";#".indexOf(o) !== -1) break;
					o === "\\" ? t = !0 : s += o;
				}
			}
			return t && (s += "\\"), s.trim();
		}
		return e;
	};
	return O = {
		parse: w$1,
		decode: w$1,
		stringify: d$2,
		encode: d$2,
		safe: h$2,
		unsafe: A
	}, O;
}
var I = j();
function S(y, d$2) {
	return I.parse(y, d$2);
}

//#endregion
//#region ../../node_modules/.pnpm/pkg-types@2.3.0/node_modules/pkg-types/dist/index.mjs
const defaultFindOptions = {
	startingFrom: ".",
	rootPattern: /^node_modules$/,
	reverse: false,
	test: (filePath) => {
		try {
			if (statSync(filePath).isFile()) return true;
		} catch {}
	}
};
async function findFile(filename, _options = {}) {
	const filenames = Array.isArray(filename) ? filename : [filename];
	const options = {
		...defaultFindOptions,
		..._options
	};
	const basePath = resolve(options.startingFrom);
	const leadingSlash = basePath[0] === "/";
	const segments = basePath.split("/").filter(Boolean);
	if (filenames.includes(segments.at(-1)) && await options.test(basePath)) return basePath;
	if (leadingSlash) segments[0] = "/" + segments[0];
	let root = segments.findIndex((r$1) => r$1.match(options.rootPattern));
	if (root === -1) root = 0;
	if (options.reverse) for (let index = root + 1; index <= segments.length; index++) for (const filename2 of filenames) {
		const filePath = join(...segments.slice(0, index), filename2);
		if (await options.test(filePath)) return filePath;
	}
	else for (let index = segments.length; index > root; index--) for (const filename2 of filenames) {
		const filePath = join(...segments.slice(0, index), filename2);
		if (await options.test(filePath)) return filePath;
	}
	throw new Error(`Cannot find matching ${filename} in ${options.startingFrom} or parent directories`);
}
function findNearestFile(filename, options = {}) {
	return findFile(filename, options);
}
function _resolvePath(id, opts = {}) {
	if (id instanceof URL || id.startsWith("file://")) return normalize(fileURLToPath(id));
	if (isAbsolute(id)) return normalize(id);
	return resolveModulePath(id, {
		...opts,
		from: opts.from || opts.parent || opts.url
	});
}
const FileCache$1 = /* @__PURE__ */ new Map();
async function readTSConfig(id, options = {}) {
	const resolvedPath = await resolveTSConfig(id, options);
	const cache = options.cache && typeof options.cache !== "boolean" ? options.cache : FileCache$1;
	if (options.cache && cache.has(resolvedPath)) return cache.get(resolvedPath);
	const parsed = h(await promises.readFile(resolvedPath, "utf8"));
	cache.set(resolvedPath, parsed);
	return parsed;
}
async function resolveTSConfig(id = process.cwd(), options = {}) {
	return findNearestFile("tsconfig.json", {
		...options,
		startingFrom: _resolvePath(id, options)
	});
}
const FileCache = /* @__PURE__ */ new Map();
async function readPackageJSON(id, options = {}) {
	const resolvedPath = await resolvePackageJSON(id, options);
	const cache = options.cache && typeof options.cache !== "boolean" ? options.cache : FileCache;
	if (options.cache && cache.has(resolvedPath)) return cache.get(resolvedPath);
	const blob = await promises.readFile(resolvedPath, "utf8");
	let parsed;
	try {
		parsed = x(blob);
	} catch {
		parsed = h(blob);
	}
	cache.set(resolvedPath, parsed);
	return parsed;
}
async function writePackageJSON(path, pkg) {
	await promises.writeFile(path, z(pkg));
}
async function resolvePackageJSON(id = process.cwd(), options = {}) {
	return findNearestFile("package.json", {
		...options,
		startingFrom: _resolvePath(id, options)
	});
}

//#endregion
export { S as a, writePackageJSON as i, readPackageJSON as n, readTSConfig as r, findFile as t };