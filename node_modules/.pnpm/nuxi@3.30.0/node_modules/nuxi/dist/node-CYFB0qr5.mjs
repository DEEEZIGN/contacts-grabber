import { i as __require } from "./chunk-DxYZOojV.mjs";
import { basename } from "node:path";
import { deprecate, promisify, types } from "node:util";
import { format as format$1 } from "node:url";
import { createReadStream, promises, statSync } from "node:fs";
import { Buffer as Buffer$1 } from "node:buffer";
import nodeHTTP from "node:http";
import nodeHTTPS from "node:https";
import { isIP } from "node:net";
import me, { PassThrough, pipeline } from "node:stream";
import st from "node:zlib";

//#region ../../node_modules/.pnpm/node-fetch-native@1.6.7/node_modules/node-fetch-native/dist/shared/node-fetch-native.DfbY2q-x.mjs
var t = Object.defineProperty;
var o = (e, l) => t(e, "name", {
	value: l,
	configurable: !0
});
var n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function f(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
o(f, "getDefaultExportFromCjs");

//#endregion
//#region ../../node_modules/.pnpm/node-fetch-native@1.6.7/node_modules/node-fetch-native/dist/node.mjs
var Os = Object.defineProperty;
var fi = (i) => {
	throw TypeError(i);
};
var n$1 = (i, o$1) => Os(i, "name", {
	value: o$1,
	configurable: !0
});
var ci = (i, o$1, a) => o$1.has(i) || fi("Cannot " + a);
var O = (i, o$1, a) => (ci(i, o$1, "read from private field"), a ? a.call(i) : o$1.get(i)), be = (i, o$1, a) => o$1.has(i) ? fi("Cannot add the same private member more than once") : o$1 instanceof WeakSet ? o$1.add(i) : o$1.set(i, a), X = (i, o$1, a, f$1) => (ci(i, o$1, "write to private field"), f$1 ? f$1.call(i, a) : o$1.set(i, a), a);
var ve, zt, bt, Cr, ze, It, Ft, mt, ee, yt, He, Ve, gt;
function Us(i) {
	if (!/^data:/i.test(i)) throw new TypeError("`uri` does not appear to be a Data URI (must begin with \"data:\")");
	i = i.replace(/\r?\n/g, "");
	const o$1 = i.indexOf(",");
	if (o$1 === -1 || o$1 <= 4) throw new TypeError("malformed data: URI");
	const a = i.substring(5, o$1).split(";");
	let f$1 = "", l = !1;
	const p = a[0] || "text/plain";
	let h = p;
	for (let A = 1; A < a.length; A++) a[A] === "base64" ? l = !0 : a[A] && (h += `;${a[A]}`, a[A].indexOf("charset=") === 0 && (f$1 = a[A].substring(8)));
	!a[0] && !f$1.length && (h += ";charset=US-ASCII", f$1 = "US-ASCII");
	const S = l ? "base64" : "ascii", v = unescape(i.substring(o$1 + 1)), w = Buffer.from(v, S);
	return w.type = p, w.typeFull = h, w.charset = f$1, w;
}
n$1(Us, "dataUriToBuffer");
var pi = {}, kt = { exports: {} };
/**
* @license
* web-streams-polyfill v3.3.3
* Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
* This code is released under the MIT license.
* SPDX-License-Identifier: MIT
*/ var xs = kt.exports, bi;
function Ns() {
	return bi || (bi = 1, function(i, o$1) {
		(function(a, f$1) {
			f$1(o$1);
		})(xs, function(a) {
			function f$1() {}
			n$1(f$1, "noop");
			function l(e) {
				return typeof e == "object" && e !== null || typeof e == "function";
			}
			n$1(l, "typeIsObject");
			const p = f$1;
			function h(e, t$1) {
				try {
					Object.defineProperty(e, "name", {
						value: t$1,
						configurable: !0
					});
				} catch {}
			}
			n$1(h, "setFunctionName");
			const S = Promise, v = Promise.prototype.then, w = Promise.reject.bind(S);
			function A(e) {
				return new S(e);
			}
			n$1(A, "newPromise");
			function T(e) {
				return A((t$1) => t$1(e));
			}
			n$1(T, "promiseResolvedWith");
			function b(e) {
				return w(e);
			}
			n$1(b, "promiseRejectedWith");
			function q(e, t$1, r) {
				return v.call(e, t$1, r);
			}
			n$1(q, "PerformPromiseThen");
			function g(e, t$1, r) {
				q(q(e, t$1, r), void 0, p);
			}
			n$1(g, "uponPromise");
			function V(e, t$1) {
				g(e, t$1);
			}
			n$1(V, "uponFulfillment");
			function I(e, t$1) {
				g(e, void 0, t$1);
			}
			n$1(I, "uponRejection");
			function F(e, t$1, r) {
				return q(e, t$1, r);
			}
			n$1(F, "transformPromiseWith");
			function Q(e) {
				q(e, void 0, p);
			}
			n$1(Q, "setPromiseIsHandledToTrue");
			let ge = n$1((e) => {
				if (typeof queueMicrotask == "function") ge = queueMicrotask;
				else {
					const t$1 = T(void 0);
					ge = n$1((r) => q(t$1, r), "_queueMicrotask");
				}
				return ge(e);
			}, "_queueMicrotask");
			function z(e, t$1, r) {
				if (typeof e != "function") throw new TypeError("Argument is not a function");
				return Function.prototype.apply.call(e, t$1, r);
			}
			n$1(z, "reflectCall");
			function j(e, t$1, r) {
				try {
					return T(z(e, t$1, r));
				} catch (s) {
					return b(s);
				}
			}
			n$1(j, "promiseCall");
			const U = 16384, bn = class bn$1 {
				constructor() {
					this._cursor = 0, this._size = 0, this._front = {
						_elements: [],
						_next: void 0
					}, this._back = this._front, this._cursor = 0, this._size = 0;
				}
				get length() {
					return this._size;
				}
				push(t$1) {
					const r = this._back;
					let s = r;
					r._elements.length === U - 1 && (s = {
						_elements: [],
						_next: void 0
					}), r._elements.push(t$1), s !== r && (this._back = s, r._next = s), ++this._size;
				}
				shift() {
					const t$1 = this._front;
					let r = t$1;
					const s = this._cursor;
					let u = s + 1;
					const c = t$1._elements, d = c[s];
					return u === U && (r = t$1._next, u = 0), --this._size, this._cursor = u, t$1 !== r && (this._front = r), c[s] = void 0, d;
				}
				forEach(t$1) {
					let r = this._cursor, s = this._front, u = s._elements;
					for (; (r !== u.length || s._next !== void 0) && !(r === u.length && (s = s._next, u = s._elements, r = 0, u.length === 0));) t$1(u[r]), ++r;
				}
				peek() {
					const t$1 = this._front, r = this._cursor;
					return t$1._elements[r];
				}
			};
			n$1(bn, "SimpleQueue");
			let D = bn;
			const jt = Symbol("[[AbortSteps]]"), Qn = Symbol("[[ErrorSteps]]"), Ar = Symbol("[[CancelSteps]]"), Br = Symbol("[[PullSteps]]"), kr = Symbol("[[ReleaseSteps]]");
			function Yn(e, t$1) {
				e._ownerReadableStream = t$1, t$1._reader = e, t$1._state === "readable" ? qr(e) : t$1._state === "closed" ? xi(e) : Gn(e, t$1._storedError);
			}
			n$1(Yn, "ReadableStreamReaderGenericInitialize");
			function Wr(e, t$1) {
				const r = e._ownerReadableStream;
				return ie(r, t$1);
			}
			n$1(Wr, "ReadableStreamReaderGenericCancel");
			function _e(e) {
				const t$1 = e._ownerReadableStream;
				t$1._state === "readable" ? Or(e, /* @__PURE__ */ new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : Ni(e, /* @__PURE__ */ new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t$1._readableStreamController[kr](), t$1._reader = void 0, e._ownerReadableStream = void 0;
			}
			n$1(_e, "ReadableStreamReaderGenericRelease");
			function Lt(e) {
				return /* @__PURE__ */ new TypeError("Cannot " + e + " a stream using a released reader");
			}
			n$1(Lt, "readerLockException");
			function qr(e) {
				e._closedPromise = A((t$1, r) => {
					e._closedPromise_resolve = t$1, e._closedPromise_reject = r;
				});
			}
			n$1(qr, "defaultReaderClosedPromiseInitialize");
			function Gn(e, t$1) {
				qr(e), Or(e, t$1);
			}
			n$1(Gn, "defaultReaderClosedPromiseInitializeAsRejected");
			function xi(e) {
				qr(e), Zn(e);
			}
			n$1(xi, "defaultReaderClosedPromiseInitializeAsResolved");
			function Or(e, t$1) {
				e._closedPromise_reject !== void 0 && (Q(e._closedPromise), e._closedPromise_reject(t$1), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
			}
			n$1(Or, "defaultReaderClosedPromiseReject");
			function Ni(e, t$1) {
				Gn(e, t$1);
			}
			n$1(Ni, "defaultReaderClosedPromiseResetToRejected");
			function Zn(e) {
				e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
			}
			n$1(Zn, "defaultReaderClosedPromiseResolve");
			const Kn = Number.isFinite || function(e) {
				return typeof e == "number" && isFinite(e);
			}, Hi = Math.trunc || function(e) {
				return e < 0 ? Math.ceil(e) : Math.floor(e);
			};
			function Vi(e) {
				return typeof e == "object" || typeof e == "function";
			}
			n$1(Vi, "isDictionary");
			function ue(e, t$1) {
				if (e !== void 0 && !Vi(e)) throw new TypeError(`${t$1} is not an object.`);
			}
			n$1(ue, "assertDictionary");
			function Z(e, t$1) {
				if (typeof e != "function") throw new TypeError(`${t$1} is not a function.`);
			}
			n$1(Z, "assertFunction");
			function Qi(e) {
				return typeof e == "object" && e !== null || typeof e == "function";
			}
			n$1(Qi, "isObject");
			function Jn(e, t$1) {
				if (!Qi(e)) throw new TypeError(`${t$1} is not an object.`);
			}
			n$1(Jn, "assertObject");
			function Se(e, t$1, r) {
				if (e === void 0) throw new TypeError(`Parameter ${t$1} is required in '${r}'.`);
			}
			n$1(Se, "assertRequiredArgument");
			function zr(e, t$1, r) {
				if (e === void 0) throw new TypeError(`${t$1} is required in '${r}'.`);
			}
			n$1(zr, "assertRequiredField");
			function Ir(e) {
				return Number(e);
			}
			n$1(Ir, "convertUnrestrictedDouble");
			function Xn(e) {
				return e === 0 ? 0 : e;
			}
			n$1(Xn, "censorNegativeZero");
			function Yi(e) {
				return Xn(Hi(e));
			}
			n$1(Yi, "integerPart");
			function Fr(e, t$1) {
				const s = Number.MAX_SAFE_INTEGER;
				let u = Number(e);
				if (u = Xn(u), !Kn(u)) throw new TypeError(`${t$1} is not a finite number`);
				if (u = Yi(u), u < 0 || u > s) throw new TypeError(`${t$1} is outside the accepted range of 0 to ${s}, inclusive`);
				return !Kn(u) || u === 0 ? 0 : u;
			}
			n$1(Fr, "convertUnsignedLongLongWithEnforceRange");
			function jr(e, t$1) {
				if (!We(e)) throw new TypeError(`${t$1} is not a ReadableStream.`);
			}
			n$1(jr, "assertReadableStream");
			function Qe(e) {
				return new fe(e);
			}
			n$1(Qe, "AcquireReadableStreamDefaultReader");
			function eo(e, t$1) {
				e._reader._readRequests.push(t$1);
			}
			n$1(eo, "ReadableStreamAddReadRequest");
			function Lr(e, t$1, r) {
				const u = e._reader._readRequests.shift();
				r ? u._closeSteps() : u._chunkSteps(t$1);
			}
			n$1(Lr, "ReadableStreamFulfillReadRequest");
			function $t(e) {
				return e._reader._readRequests.length;
			}
			n$1($t, "ReadableStreamGetNumReadRequests");
			function to(e) {
				const t$1 = e._reader;
				return !(t$1 === void 0 || !Ee(t$1));
			}
			n$1(to, "ReadableStreamHasDefaultReader");
			const mn = class mn$1 {
				constructor(t$1) {
					if (Se(t$1, 1, "ReadableStreamDefaultReader"), jr(t$1, "First parameter"), qe(t$1)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
					Yn(this, t$1), this._readRequests = new D();
				}
				get closed() {
					return Ee(this) ? this._closedPromise : b(Dt("closed"));
				}
				cancel(t$1 = void 0) {
					return Ee(this) ? this._ownerReadableStream === void 0 ? b(Lt("cancel")) : Wr(this, t$1) : b(Dt("cancel"));
				}
				read() {
					if (!Ee(this)) return b(Dt("read"));
					if (this._ownerReadableStream === void 0) return b(Lt("read from"));
					let t$1, r;
					const s = A((c, d) => {
						t$1 = c, r = d;
					});
					return _t(this, {
						_chunkSteps: n$1((c) => t$1({
							value: c,
							done: !1
						}), "_chunkSteps"),
						_closeSteps: n$1(() => t$1({
							value: void 0,
							done: !0
						}), "_closeSteps"),
						_errorSteps: n$1((c) => r(c), "_errorSteps")
					}), s;
				}
				releaseLock() {
					if (!Ee(this)) throw Dt("releaseLock");
					this._ownerReadableStream !== void 0 && Gi(this);
				}
			};
			n$1(mn, "ReadableStreamDefaultReader");
			let fe = mn;
			Object.defineProperties(fe.prototype, {
				cancel: { enumerable: !0 },
				read: { enumerable: !0 },
				releaseLock: { enumerable: !0 },
				closed: { enumerable: !0 }
			}), h(fe.prototype.cancel, "cancel"), h(fe.prototype.read, "read"), h(fe.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(fe.prototype, Symbol.toStringTag, {
				value: "ReadableStreamDefaultReader",
				configurable: !0
			});
			function Ee(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests") ? !1 : e instanceof fe;
			}
			n$1(Ee, "IsReadableStreamDefaultReader");
			function _t(e, t$1) {
				const r = e._ownerReadableStream;
				r._disturbed = !0, r._state === "closed" ? t$1._closeSteps() : r._state === "errored" ? t$1._errorSteps(r._storedError) : r._readableStreamController[Br](t$1);
			}
			n$1(_t, "ReadableStreamDefaultReaderRead");
			function Gi(e) {
				_e(e);
				ro(e, /* @__PURE__ */ new TypeError("Reader was released"));
			}
			n$1(Gi, "ReadableStreamDefaultReaderRelease");
			function ro(e, t$1) {
				const r = e._readRequests;
				e._readRequests = new D(), r.forEach((s) => {
					s._errorSteps(t$1);
				});
			}
			n$1(ro, "ReadableStreamDefaultReaderErrorReadRequests");
			function Dt(e) {
				return /* @__PURE__ */ new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
			}
			n$1(Dt, "defaultReaderBrandCheckException");
			const Zi = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {}).prototype), yn = class yn$1 {
				constructor(t$1, r) {
					this._ongoingPromise = void 0, this._isFinished = !1, this._reader = t$1, this._preventCancel = r;
				}
				next() {
					const t$1 = n$1(() => this._nextSteps(), "nextSteps");
					return this._ongoingPromise = this._ongoingPromise ? F(this._ongoingPromise, t$1, t$1) : t$1(), this._ongoingPromise;
				}
				return(t$1) {
					const r = n$1(() => this._returnSteps(t$1), "returnSteps");
					return this._ongoingPromise ? F(this._ongoingPromise, r, r) : r();
				}
				_nextSteps() {
					if (this._isFinished) return Promise.resolve({
						value: void 0,
						done: !0
					});
					const t$1 = this._reader;
					let r, s;
					const u = A((d, m) => {
						r = d, s = m;
					});
					return _t(t$1, {
						_chunkSteps: n$1((d) => {
							this._ongoingPromise = void 0, ge(() => r({
								value: d,
								done: !1
							}));
						}, "_chunkSteps"),
						_closeSteps: n$1(() => {
							this._ongoingPromise = void 0, this._isFinished = !0, _e(t$1), r({
								value: void 0,
								done: !0
							});
						}, "_closeSteps"),
						_errorSteps: n$1((d) => {
							this._ongoingPromise = void 0, this._isFinished = !0, _e(t$1), s(d);
						}, "_errorSteps")
					}), u;
				}
				_returnSteps(t$1) {
					if (this._isFinished) return Promise.resolve({
						value: t$1,
						done: !0
					});
					this._isFinished = !0;
					const r = this._reader;
					if (!this._preventCancel) {
						const s = Wr(r, t$1);
						return _e(r), F(s, () => ({
							value: t$1,
							done: !0
						}));
					}
					return _e(r), T({
						value: t$1,
						done: !0
					});
				}
			};
			n$1(yn, "ReadableStreamAsyncIteratorImpl");
			let Mt = yn;
			const no = {
				next() {
					return oo(this) ? this._asyncIteratorImpl.next() : b(io("next"));
				},
				return(e) {
					return oo(this) ? this._asyncIteratorImpl.return(e) : b(io("return"));
				}
			};
			Object.setPrototypeOf(no, Zi);
			function Ki(e, t$1) {
				const s = new Mt(Qe(e), t$1), u = Object.create(no);
				return u._asyncIteratorImpl = s, u;
			}
			n$1(Ki, "AcquireReadableStreamAsyncIterator");
			function oo(e) {
				if (!l(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl")) return !1;
				try {
					return e._asyncIteratorImpl instanceof Mt;
				} catch {
					return !1;
				}
			}
			n$1(oo, "IsReadableStreamAsyncIterator");
			function io(e) {
				return /* @__PURE__ */ new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
			}
			n$1(io, "streamAsyncIteratorBrandCheckException");
			const ao = Number.isNaN || function(e) {
				return e !== e;
			};
			var $r, Dr, Mr;
			function St(e) {
				return e.slice();
			}
			n$1(St, "CreateArrayFromList");
			function so(e, t$1, r, s, u) {
				new Uint8Array(e).set(new Uint8Array(r, s, u), t$1);
			}
			n$1(so, "CopyDataBlockBytes");
			let we = n$1((e) => (typeof e.transfer == "function" ? we = n$1((t$1) => t$1.transfer(), "TransferArrayBuffer") : typeof structuredClone == "function" ? we = n$1((t$1) => structuredClone(t$1, { transfer: [t$1] }), "TransferArrayBuffer") : we = n$1((t$1) => t$1, "TransferArrayBuffer"), we(e)), "TransferArrayBuffer"), Ae = n$1((e) => (typeof e.detached == "boolean" ? Ae = n$1((t$1) => t$1.detached, "IsDetachedBuffer") : Ae = n$1((t$1) => t$1.byteLength === 0, "IsDetachedBuffer"), Ae(e)), "IsDetachedBuffer");
			function lo(e, t$1, r) {
				if (e.slice) return e.slice(t$1, r);
				const s = r - t$1, u = new ArrayBuffer(s);
				return so(u, 0, e, t$1, s), u;
			}
			n$1(lo, "ArrayBufferSlice");
			function Ut(e, t$1) {
				const r = e[t$1];
				if (r != null) {
					if (typeof r != "function") throw new TypeError(`${String(t$1)} is not a function`);
					return r;
				}
			}
			n$1(Ut, "GetMethod");
			function Ji(e) {
				const t$1 = { [Symbol.iterator]: () => e.iterator }, r = async function* () {
					return yield* t$1;
				}();
				return {
					iterator: r,
					nextMethod: r.next,
					done: !1
				};
			}
			n$1(Ji, "CreateAsyncFromSyncIterator");
			const Ur = (Mr = ($r = Symbol.asyncIterator) !== null && $r !== void 0 ? $r : (Dr = Symbol.for) === null || Dr === void 0 ? void 0 : Dr.call(Symbol, "Symbol.asyncIterator")) !== null && Mr !== void 0 ? Mr : "@@asyncIterator";
			function uo(e, t$1 = "sync", r) {
				if (r === void 0) if (t$1 === "async") {
					if (r = Ut(e, Ur), r === void 0) return Ji(uo(e, "sync", Ut(e, Symbol.iterator)));
				} else r = Ut(e, Symbol.iterator);
				if (r === void 0) throw new TypeError("The object is not iterable");
				const s = z(r, e, []);
				if (!l(s)) throw new TypeError("The iterator method must return an object");
				return {
					iterator: s,
					nextMethod: s.next,
					done: !1
				};
			}
			n$1(uo, "GetIterator");
			function Xi(e) {
				const t$1 = z(e.nextMethod, e.iterator, []);
				if (!l(t$1)) throw new TypeError("The iterator.next() method must return an object");
				return t$1;
			}
			n$1(Xi, "IteratorNext");
			function ea(e) {
				return !!e.done;
			}
			n$1(ea, "IteratorComplete");
			function ta(e) {
				return e.value;
			}
			n$1(ta, "IteratorValue");
			function ra(e) {
				return !(typeof e != "number" || ao(e) || e < 0);
			}
			n$1(ra, "IsNonNegativeNumber");
			function fo(e) {
				const t$1 = lo(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
				return new Uint8Array(t$1);
			}
			n$1(fo, "CloneAsUint8Array");
			function xr(e) {
				const t$1 = e._queue.shift();
				return e._queueTotalSize -= t$1.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t$1.value;
			}
			n$1(xr, "DequeueValue");
			function Nr(e, t$1, r) {
				if (!ra(r) || r === Infinity) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
				e._queue.push({
					value: t$1,
					size: r
				}), e._queueTotalSize += r;
			}
			n$1(Nr, "EnqueueValueWithSize");
			function na(e) {
				return e._queue.peek().value;
			}
			n$1(na, "PeekQueueValue");
			function Be(e) {
				e._queue = new D(), e._queueTotalSize = 0;
			}
			n$1(Be, "ResetQueue");
			function co(e) {
				return e === DataView;
			}
			n$1(co, "isDataViewConstructor");
			function oa(e) {
				return co(e.constructor);
			}
			n$1(oa, "isDataView");
			function ia(e) {
				return co(e) ? 1 : e.BYTES_PER_ELEMENT;
			}
			n$1(ia, "arrayBufferViewElementSize");
			const gn = class gn$1 {
				constructor() {
					throw new TypeError("Illegal constructor");
				}
				get view() {
					if (!Hr(this)) throw Zr("view");
					return this._view;
				}
				respond(t$1) {
					if (!Hr(this)) throw Zr("respond");
					if (Se(t$1, 1, "respond"), t$1 = Fr(t$1, "First parameter"), this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
					if (Ae(this._view.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
					Vt(this._associatedReadableByteStreamController, t$1);
				}
				respondWithNewView(t$1) {
					if (!Hr(this)) throw Zr("respondWithNewView");
					if (Se(t$1, 1, "respondWithNewView"), !ArrayBuffer.isView(t$1)) throw new TypeError("You can only respond with array buffer views");
					if (this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
					if (Ae(t$1.buffer)) throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
					Qt(this._associatedReadableByteStreamController, t$1);
				}
			};
			n$1(gn, "ReadableStreamBYOBRequest");
			let Re = gn;
			Object.defineProperties(Re.prototype, {
				respond: { enumerable: !0 },
				respondWithNewView: { enumerable: !0 },
				view: { enumerable: !0 }
			}), h(Re.prototype.respond, "respond"), h(Re.prototype.respondWithNewView, "respondWithNewView"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Re.prototype, Symbol.toStringTag, {
				value: "ReadableStreamBYOBRequest",
				configurable: !0
			});
			const _n = class _n$1 {
				constructor() {
					throw new TypeError("Illegal constructor");
				}
				get byobRequest() {
					if (!Ie(this)) throw Rt("byobRequest");
					return Gr(this);
				}
				get desiredSize() {
					if (!Ie(this)) throw Rt("desiredSize");
					return Ro(this);
				}
				close() {
					if (!Ie(this)) throw Rt("close");
					if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
					const t$1 = this._controlledReadableByteStream._state;
					if (t$1 !== "readable") throw new TypeError(`The stream (in ${t$1} state) is not in the readable state and cannot be closed`);
					wt(this);
				}
				enqueue(t$1) {
					if (!Ie(this)) throw Rt("enqueue");
					if (Se(t$1, 1, "enqueue"), !ArrayBuffer.isView(t$1)) throw new TypeError("chunk must be an array buffer view");
					if (t$1.byteLength === 0) throw new TypeError("chunk must have non-zero byteLength");
					if (t$1.buffer.byteLength === 0) throw new TypeError("chunk's buffer must have non-zero byteLength");
					if (this._closeRequested) throw new TypeError("stream is closed or draining");
					const r = this._controlledReadableByteStream._state;
					if (r !== "readable") throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);
					Ht(this, t$1);
				}
				error(t$1 = void 0) {
					if (!Ie(this)) throw Rt("error");
					K(this, t$1);
				}
				[Ar](t$1) {
					ho(this), Be(this);
					const r = this._cancelAlgorithm(t$1);
					return Nt(this), r;
				}
				[Br](t$1) {
					const r = this._controlledReadableByteStream;
					if (this._queueTotalSize > 0) {
						wo(this, t$1);
						return;
					}
					const s = this._autoAllocateChunkSize;
					if (s !== void 0) {
						let u;
						try {
							u = new ArrayBuffer(s);
						} catch (d) {
							t$1._errorSteps(d);
							return;
						}
						const c = {
							buffer: u,
							bufferByteLength: s,
							byteOffset: 0,
							byteLength: s,
							bytesFilled: 0,
							minimumFill: 1,
							elementSize: 1,
							viewConstructor: Uint8Array,
							readerType: "default"
						};
						this._pendingPullIntos.push(c);
					}
					eo(r, t$1), Fe(this);
				}
				[kr]() {
					if (this._pendingPullIntos.length > 0) {
						const t$1 = this._pendingPullIntos.peek();
						t$1.readerType = "none", this._pendingPullIntos = new D(), this._pendingPullIntos.push(t$1);
					}
				}
			};
			n$1(_n, "ReadableByteStreamController");
			let te = _n;
			Object.defineProperties(te.prototype, {
				close: { enumerable: !0 },
				enqueue: { enumerable: !0 },
				error: { enumerable: !0 },
				byobRequest: { enumerable: !0 },
				desiredSize: { enumerable: !0 }
			}), h(te.prototype.close, "close"), h(te.prototype.enqueue, "enqueue"), h(te.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(te.prototype, Symbol.toStringTag, {
				value: "ReadableByteStreamController",
				configurable: !0
			});
			function Ie(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") ? !1 : e instanceof te;
			}
			n$1(Ie, "IsReadableByteStreamController");
			function Hr(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? !1 : e instanceof Re;
			}
			n$1(Hr, "IsReadableStreamBYOBRequest");
			function Fe(e) {
				if (!fa(e)) return;
				if (e._pulling) {
					e._pullAgain = !0;
					return;
				}
				e._pulling = !0;
				g(e._pullAlgorithm(), () => (e._pulling = !1, e._pullAgain && (e._pullAgain = !1, Fe(e)), null), (s) => (K(e, s), null));
			}
			n$1(Fe, "ReadableByteStreamControllerCallPullIfNeeded");
			function ho(e) {
				Qr(e), e._pendingPullIntos = new D();
			}
			n$1(ho, "ReadableByteStreamControllerClearPendingPullIntos");
			function Vr(e, t$1) {
				let r = !1;
				e._state === "closed" && (r = !0);
				const s = po(t$1);
				t$1.readerType === "default" ? Lr(e, s, r) : ma(e, s, r);
			}
			n$1(Vr, "ReadableByteStreamControllerCommitPullIntoDescriptor");
			function po(e) {
				const t$1 = e.bytesFilled, r = e.elementSize;
				return new e.viewConstructor(e.buffer, e.byteOffset, t$1 / r);
			}
			n$1(po, "ReadableByteStreamControllerConvertPullIntoDescriptor");
			function xt(e, t$1, r, s) {
				e._queue.push({
					buffer: t$1,
					byteOffset: r,
					byteLength: s
				}), e._queueTotalSize += s;
			}
			n$1(xt, "ReadableByteStreamControllerEnqueueChunkToQueue");
			function bo(e, t$1, r, s) {
				let u;
				try {
					u = lo(t$1, r, r + s);
				} catch (c) {
					throw K(e, c), c;
				}
				xt(e, u, 0, s);
			}
			n$1(bo, "ReadableByteStreamControllerEnqueueClonedChunkToQueue");
			function mo(e, t$1) {
				t$1.bytesFilled > 0 && bo(e, t$1.buffer, t$1.byteOffset, t$1.bytesFilled), Ye(e);
			}
			n$1(mo, "ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");
			function yo(e, t$1) {
				const r = Math.min(e._queueTotalSize, t$1.byteLength - t$1.bytesFilled), s = t$1.bytesFilled + r;
				let u = r, c = !1;
				const m = s - s % t$1.elementSize;
				m >= t$1.minimumFill && (u = m - t$1.bytesFilled, c = !0);
				const R = e._queue;
				for (; u > 0;) {
					const y = R.peek(), C = Math.min(u, y.byteLength), P = t$1.byteOffset + t$1.bytesFilled;
					so(t$1.buffer, P, y.buffer, y.byteOffset, C), y.byteLength === C ? R.shift() : (y.byteOffset += C, y.byteLength -= C), e._queueTotalSize -= C, go(e, C, t$1), u -= C;
				}
				return c;
			}
			n$1(yo, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");
			function go(e, t$1, r) {
				r.bytesFilled += t$1;
			}
			n$1(go, "ReadableByteStreamControllerFillHeadPullIntoDescriptor");
			function _o(e) {
				e._queueTotalSize === 0 && e._closeRequested ? (Nt(e), At(e._controlledReadableByteStream)) : Fe(e);
			}
			n$1(_o, "ReadableByteStreamControllerHandleQueueDrain");
			function Qr(e) {
				e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = null, e._byobRequest = null);
			}
			n$1(Qr, "ReadableByteStreamControllerInvalidateBYOBRequest");
			function Yr(e) {
				for (; e._pendingPullIntos.length > 0;) {
					if (e._queueTotalSize === 0) return;
					const t$1 = e._pendingPullIntos.peek();
					yo(e, t$1) && (Ye(e), Vr(e._controlledReadableByteStream, t$1));
				}
			}
			n$1(Yr, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");
			function aa(e) {
				const t$1 = e._controlledReadableByteStream._reader;
				for (; t$1._readRequests.length > 0;) {
					if (e._queueTotalSize === 0) return;
					wo(e, t$1._readRequests.shift());
				}
			}
			n$1(aa, "ReadableByteStreamControllerProcessReadRequestsUsingQueue");
			function sa(e, t$1, r, s) {
				const u = e._controlledReadableByteStream, c = t$1.constructor, d = ia(c), { byteOffset: m, byteLength: R } = t$1, y = r * d;
				let C;
				try {
					C = we(t$1.buffer);
				} catch (B) {
					s._errorSteps(B);
					return;
				}
				const P = {
					buffer: C,
					bufferByteLength: C.byteLength,
					byteOffset: m,
					byteLength: R,
					bytesFilled: 0,
					minimumFill: y,
					elementSize: d,
					viewConstructor: c,
					readerType: "byob"
				};
				if (e._pendingPullIntos.length > 0) {
					e._pendingPullIntos.push(P), Po(u, s);
					return;
				}
				if (u._state === "closed") {
					const B = new c(P.buffer, P.byteOffset, 0);
					s._closeSteps(B);
					return;
				}
				if (e._queueTotalSize > 0) {
					if (yo(e, P)) {
						const B = po(P);
						_o(e), s._chunkSteps(B);
						return;
					}
					if (e._closeRequested) {
						const B = /* @__PURE__ */ new TypeError("Insufficient bytes to fill elements in the given buffer");
						K(e, B), s._errorSteps(B);
						return;
					}
				}
				e._pendingPullIntos.push(P), Po(u, s), Fe(e);
			}
			n$1(sa, "ReadableByteStreamControllerPullInto");
			function la(e, t$1) {
				t$1.readerType === "none" && Ye(e);
				const r = e._controlledReadableByteStream;
				if (Kr(r)) for (; vo(r) > 0;) Vr(r, Ye(e));
			}
			n$1(la, "ReadableByteStreamControllerRespondInClosedState");
			function ua(e, t$1, r) {
				if (go(e, t$1, r), r.readerType === "none") {
					mo(e, r), Yr(e);
					return;
				}
				if (r.bytesFilled < r.minimumFill) return;
				Ye(e);
				const s = r.bytesFilled % r.elementSize;
				if (s > 0) {
					const u = r.byteOffset + r.bytesFilled;
					bo(e, r.buffer, u - s, s);
				}
				r.bytesFilled -= s, Vr(e._controlledReadableByteStream, r), Yr(e);
			}
			n$1(ua, "ReadableByteStreamControllerRespondInReadableState");
			function So(e, t$1) {
				const r = e._pendingPullIntos.peek();
				Qr(e), e._controlledReadableByteStream._state === "closed" ? la(e, r) : ua(e, t$1, r), Fe(e);
			}
			n$1(So, "ReadableByteStreamControllerRespondInternal");
			function Ye(e) {
				return e._pendingPullIntos.shift();
			}
			n$1(Ye, "ReadableByteStreamControllerShiftPendingPullInto");
			function fa(e) {
				const t$1 = e._controlledReadableByteStream;
				return t$1._state !== "readable" || e._closeRequested || !e._started ? !1 : !!(to(t$1) && $t(t$1) > 0 || Kr(t$1) && vo(t$1) > 0 || Ro(e) > 0);
			}
			n$1(fa, "ReadableByteStreamControllerShouldCallPull");
			function Nt(e) {
				e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0;
			}
			n$1(Nt, "ReadableByteStreamControllerClearAlgorithms");
			function wt(e) {
				const t$1 = e._controlledReadableByteStream;
				if (!(e._closeRequested || t$1._state !== "readable")) {
					if (e._queueTotalSize > 0) {
						e._closeRequested = !0;
						return;
					}
					if (e._pendingPullIntos.length > 0) {
						const r = e._pendingPullIntos.peek();
						if (r.bytesFilled % r.elementSize !== 0) {
							const s = /* @__PURE__ */ new TypeError("Insufficient bytes to fill elements in the given buffer");
							throw K(e, s), s;
						}
					}
					Nt(e), At(t$1);
				}
			}
			n$1(wt, "ReadableByteStreamControllerClose");
			function Ht(e, t$1) {
				const r = e._controlledReadableByteStream;
				if (e._closeRequested || r._state !== "readable") return;
				const { buffer: s, byteOffset: u, byteLength: c } = t$1;
				if (Ae(s)) throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
				const d = we(s);
				if (e._pendingPullIntos.length > 0) {
					const m = e._pendingPullIntos.peek();
					if (Ae(m.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
					Qr(e), m.buffer = we(m.buffer), m.readerType === "none" && mo(e, m);
				}
				if (to(r)) if (aa(e), $t(r) === 0) xt(e, d, u, c);
				else {
					e._pendingPullIntos.length > 0 && Ye(e);
					Lr(r, new Uint8Array(d, u, c), !1);
				}
				else Kr(r) ? (xt(e, d, u, c), Yr(e)) : xt(e, d, u, c);
				Fe(e);
			}
			n$1(Ht, "ReadableByteStreamControllerEnqueue");
			function K(e, t$1) {
				const r = e._controlledReadableByteStream;
				r._state === "readable" && (ho(e), Be(e), Nt(e), Zo(r, t$1));
			}
			n$1(K, "ReadableByteStreamControllerError");
			function wo(e, t$1) {
				const r = e._queue.shift();
				e._queueTotalSize -= r.byteLength, _o(e);
				const s = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
				t$1._chunkSteps(s);
			}
			n$1(wo, "ReadableByteStreamControllerFillReadRequestFromQueue");
			function Gr(e) {
				if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
					const t$1 = e._pendingPullIntos.peek(), r = new Uint8Array(t$1.buffer, t$1.byteOffset + t$1.bytesFilled, t$1.byteLength - t$1.bytesFilled), s = Object.create(Re.prototype);
					da(s, e, r), e._byobRequest = s;
				}
				return e._byobRequest;
			}
			n$1(Gr, "ReadableByteStreamControllerGetBYOBRequest");
			function Ro(e) {
				const t$1 = e._controlledReadableByteStream._state;
				return t$1 === "errored" ? null : t$1 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
			}
			n$1(Ro, "ReadableByteStreamControllerGetDesiredSize");
			function Vt(e, t$1) {
				const r = e._pendingPullIntos.peek();
				if (e._controlledReadableByteStream._state === "closed") {
					if (t$1 !== 0) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
				} else {
					if (t$1 === 0) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
					if (r.bytesFilled + t$1 > r.byteLength) throw new RangeError("bytesWritten out of range");
				}
				r.buffer = we(r.buffer), So(e, t$1);
			}
			n$1(Vt, "ReadableByteStreamControllerRespond");
			function Qt(e, t$1) {
				const r = e._pendingPullIntos.peek();
				if (e._controlledReadableByteStream._state === "closed") {
					if (t$1.byteLength !== 0) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
				} else if (t$1.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
				if (r.byteOffset + r.bytesFilled !== t$1.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
				if (r.bufferByteLength !== t$1.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
				if (r.bytesFilled + t$1.byteLength > r.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
				const u = t$1.byteLength;
				r.buffer = we(t$1.buffer), So(e, u);
			}
			n$1(Qt, "ReadableByteStreamControllerRespondWithNewView");
			function To(e, t$1, r, s, u, c, d) {
				t$1._controlledReadableByteStream = e, t$1._pullAgain = !1, t$1._pulling = !1, t$1._byobRequest = null, t$1._queue = t$1._queueTotalSize = void 0, Be(t$1), t$1._closeRequested = !1, t$1._started = !1, t$1._strategyHWM = c, t$1._pullAlgorithm = s, t$1._cancelAlgorithm = u, t$1._autoAllocateChunkSize = d, t$1._pendingPullIntos = new D(), e._readableStreamController = t$1;
				g(T(r()), () => (t$1._started = !0, Fe(t$1), null), (R) => (K(t$1, R), null));
			}
			n$1(To, "SetUpReadableByteStreamController");
			function ca(e, t$1, r) {
				const s = Object.create(te.prototype);
				let u, c, d;
				t$1.start !== void 0 ? u = n$1(() => t$1.start(s), "startAlgorithm") : u = n$1(() => {}, "startAlgorithm"), t$1.pull !== void 0 ? c = n$1(() => t$1.pull(s), "pullAlgorithm") : c = n$1(() => T(void 0), "pullAlgorithm"), t$1.cancel !== void 0 ? d = n$1((R) => t$1.cancel(R), "cancelAlgorithm") : d = n$1(() => T(void 0), "cancelAlgorithm");
				const m = t$1.autoAllocateChunkSize;
				if (m === 0) throw new TypeError("autoAllocateChunkSize must be greater than 0");
				To(e, s, u, c, d, r, m);
			}
			n$1(ca, "SetUpReadableByteStreamControllerFromUnderlyingSource");
			function da(e, t$1, r) {
				e._associatedReadableByteStreamController = t$1, e._view = r;
			}
			n$1(da, "SetUpReadableStreamBYOBRequest");
			function Zr(e) {
				return /* @__PURE__ */ new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
			}
			n$1(Zr, "byobRequestBrandCheckException");
			function Rt(e) {
				return /* @__PURE__ */ new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
			}
			n$1(Rt, "byteStreamControllerBrandCheckException");
			function ha(e, t$1) {
				ue(e, t$1);
				const r = e?.mode;
				return { mode: r === void 0 ? void 0 : pa(r, `${t$1} has member 'mode' that`) };
			}
			n$1(ha, "convertReaderOptions");
			function pa(e, t$1) {
				if (e = `${e}`, e !== "byob") throw new TypeError(`${t$1} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
				return e;
			}
			n$1(pa, "convertReadableStreamReaderMode");
			function ba(e, t$1) {
				var r;
				ue(e, t$1);
				return { min: Fr((r = e?.min) !== null && r !== void 0 ? r : 1, `${t$1} has member 'min' that`) };
			}
			n$1(ba, "convertByobReadOptions");
			function Co(e) {
				return new ce(e);
			}
			n$1(Co, "AcquireReadableStreamBYOBReader");
			function Po(e, t$1) {
				e._reader._readIntoRequests.push(t$1);
			}
			n$1(Po, "ReadableStreamAddReadIntoRequest");
			function ma(e, t$1, r) {
				const u = e._reader._readIntoRequests.shift();
				r ? u._closeSteps(t$1) : u._chunkSteps(t$1);
			}
			n$1(ma, "ReadableStreamFulfillReadIntoRequest");
			function vo(e) {
				return e._reader._readIntoRequests.length;
			}
			n$1(vo, "ReadableStreamGetNumReadIntoRequests");
			function Kr(e) {
				const t$1 = e._reader;
				return !(t$1 === void 0 || !je(t$1));
			}
			n$1(Kr, "ReadableStreamHasBYOBReader");
			const Sn = class Sn$1 {
				constructor(t$1) {
					if (Se(t$1, 1, "ReadableStreamBYOBReader"), jr(t$1, "First parameter"), qe(t$1)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
					if (!Ie(t$1._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
					Yn(this, t$1), this._readIntoRequests = new D();
				}
				get closed() {
					return je(this) ? this._closedPromise : b(Yt("closed"));
				}
				cancel(t$1 = void 0) {
					return je(this) ? this._ownerReadableStream === void 0 ? b(Lt("cancel")) : Wr(this, t$1) : b(Yt("cancel"));
				}
				read(t$1, r = {}) {
					if (!je(this)) return b(Yt("read"));
					if (!ArrayBuffer.isView(t$1)) return b(/* @__PURE__ */ new TypeError("view must be an array buffer view"));
					if (t$1.byteLength === 0) return b(/* @__PURE__ */ new TypeError("view must have non-zero byteLength"));
					if (t$1.buffer.byteLength === 0) return b(/* @__PURE__ */ new TypeError("view's buffer must have non-zero byteLength"));
					if (Ae(t$1.buffer)) return b(/* @__PURE__ */ new TypeError("view's buffer has been detached"));
					let s;
					try {
						s = ba(r, "options");
					} catch (y) {
						return b(y);
					}
					const u = s.min;
					if (u === 0) return b(/* @__PURE__ */ new TypeError("options.min must be greater than 0"));
					if (oa(t$1)) {
						if (u > t$1.byteLength) return b(/* @__PURE__ */ new RangeError("options.min must be less than or equal to view's byteLength"));
					} else if (u > t$1.length) return b(/* @__PURE__ */ new RangeError("options.min must be less than or equal to view's length"));
					if (this._ownerReadableStream === void 0) return b(Lt("read from"));
					let c, d;
					const m = A((y, C) => {
						c = y, d = C;
					});
					return Eo(this, t$1, u, {
						_chunkSteps: n$1((y) => c({
							value: y,
							done: !1
						}), "_chunkSteps"),
						_closeSteps: n$1((y) => c({
							value: y,
							done: !0
						}), "_closeSteps"),
						_errorSteps: n$1((y) => d(y), "_errorSteps")
					}), m;
				}
				releaseLock() {
					if (!je(this)) throw Yt("releaseLock");
					this._ownerReadableStream !== void 0 && ya(this);
				}
			};
			n$1(Sn, "ReadableStreamBYOBReader");
			let ce = Sn;
			Object.defineProperties(ce.prototype, {
				cancel: { enumerable: !0 },
				read: { enumerable: !0 },
				releaseLock: { enumerable: !0 },
				closed: { enumerable: !0 }
			}), h(ce.prototype.cancel, "cancel"), h(ce.prototype.read, "read"), h(ce.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ce.prototype, Symbol.toStringTag, {
				value: "ReadableStreamBYOBReader",
				configurable: !0
			});
			function je(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? !1 : e instanceof ce;
			}
			n$1(je, "IsReadableStreamBYOBReader");
			function Eo(e, t$1, r, s) {
				const u = e._ownerReadableStream;
				u._disturbed = !0, u._state === "errored" ? s._errorSteps(u._storedError) : sa(u._readableStreamController, t$1, r, s);
			}
			n$1(Eo, "ReadableStreamBYOBReaderRead");
			function ya(e) {
				_e(e);
				Ao(e, /* @__PURE__ */ new TypeError("Reader was released"));
			}
			n$1(ya, "ReadableStreamBYOBReaderRelease");
			function Ao(e, t$1) {
				const r = e._readIntoRequests;
				e._readIntoRequests = new D(), r.forEach((s) => {
					s._errorSteps(t$1);
				});
			}
			n$1(Ao, "ReadableStreamBYOBReaderErrorReadIntoRequests");
			function Yt(e) {
				return /* @__PURE__ */ new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
			}
			n$1(Yt, "byobReaderBrandCheckException");
			function Tt(e, t$1) {
				const { highWaterMark: r } = e;
				if (r === void 0) return t$1;
				if (ao(r) || r < 0) throw new RangeError("Invalid highWaterMark");
				return r;
			}
			n$1(Tt, "ExtractHighWaterMark");
			function Gt(e) {
				const { size: t$1 } = e;
				return t$1 || (() => 1);
			}
			n$1(Gt, "ExtractSizeAlgorithm");
			function Zt(e, t$1) {
				ue(e, t$1);
				const r = e?.highWaterMark, s = e?.size;
				return {
					highWaterMark: r === void 0 ? void 0 : Ir(r),
					size: s === void 0 ? void 0 : ga(s, `${t$1} has member 'size' that`)
				};
			}
			n$1(Zt, "convertQueuingStrategy");
			function ga(e, t$1) {
				return Z(e, t$1), (r) => Ir(e(r));
			}
			n$1(ga, "convertQueuingStrategySize");
			function _a(e, t$1) {
				ue(e, t$1);
				const r = e?.abort, s = e?.close, u = e?.start, c = e?.type, d = e?.write;
				return {
					abort: r === void 0 ? void 0 : Sa(r, e, `${t$1} has member 'abort' that`),
					close: s === void 0 ? void 0 : wa(s, e, `${t$1} has member 'close' that`),
					start: u === void 0 ? void 0 : Ra(u, e, `${t$1} has member 'start' that`),
					write: d === void 0 ? void 0 : Ta(d, e, `${t$1} has member 'write' that`),
					type: c
				};
			}
			n$1(_a, "convertUnderlyingSink");
			function Sa(e, t$1, r) {
				return Z(e, r), (s) => j(e, t$1, [s]);
			}
			n$1(Sa, "convertUnderlyingSinkAbortCallback");
			function wa(e, t$1, r) {
				return Z(e, r), () => j(e, t$1, []);
			}
			n$1(wa, "convertUnderlyingSinkCloseCallback");
			function Ra(e, t$1, r) {
				return Z(e, r), (s) => z(e, t$1, [s]);
			}
			n$1(Ra, "convertUnderlyingSinkStartCallback");
			function Ta(e, t$1, r) {
				return Z(e, r), (s, u) => j(e, t$1, [s, u]);
			}
			n$1(Ta, "convertUnderlyingSinkWriteCallback");
			function Bo(e, t$1) {
				if (!Ge(e)) throw new TypeError(`${t$1} is not a WritableStream.`);
			}
			n$1(Bo, "assertWritableStream");
			function Ca(e) {
				if (typeof e != "object" || e === null) return !1;
				try {
					return typeof e.aborted == "boolean";
				} catch {
					return !1;
				}
			}
			n$1(Ca, "isAbortSignal");
			const Pa = typeof AbortController == "function";
			function va() {
				if (Pa) return new AbortController();
			}
			n$1(va, "createAbortController");
			const wn = class wn$1 {
				constructor(t$1 = {}, r = {}) {
					t$1 === void 0 ? t$1 = null : Jn(t$1, "First parameter");
					const s = Zt(r, "Second parameter"), u = _a(t$1, "First parameter");
					if (Wo(this), u.type !== void 0) throw new RangeError("Invalid type is specified");
					const d = Gt(s), m = Tt(s, 1);
					Da(this, u, m, d);
				}
				get locked() {
					if (!Ge(this)) throw tr("locked");
					return Ze(this);
				}
				abort(t$1 = void 0) {
					return Ge(this) ? Ze(this) ? b(/* @__PURE__ */ new TypeError("Cannot abort a stream that already has a writer")) : Kt(this, t$1) : b(tr("abort"));
				}
				close() {
					return Ge(this) ? Ze(this) ? b(/* @__PURE__ */ new TypeError("Cannot close a stream that already has a writer")) : he(this) ? b(/* @__PURE__ */ new TypeError("Cannot close an already-closing stream")) : qo(this) : b(tr("close"));
				}
				getWriter() {
					if (!Ge(this)) throw tr("getWriter");
					return ko(this);
				}
			};
			n$1(wn, "WritableStream");
			let de = wn;
			Object.defineProperties(de.prototype, {
				abort: { enumerable: !0 },
				close: { enumerable: !0 },
				getWriter: { enumerable: !0 },
				locked: { enumerable: !0 }
			}), h(de.prototype.abort, "abort"), h(de.prototype.close, "close"), h(de.prototype.getWriter, "getWriter"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(de.prototype, Symbol.toStringTag, {
				value: "WritableStream",
				configurable: !0
			});
			function ko(e) {
				return new re(e);
			}
			n$1(ko, "AcquireWritableStreamDefaultWriter");
			function Ea(e, t$1, r, s, u = 1, c = () => 1) {
				const d = Object.create(de.prototype);
				Wo(d);
				return Lo(d, Object.create(ke.prototype), e, t$1, r, s, u, c), d;
			}
			n$1(Ea, "CreateWritableStream");
			function Wo(e) {
				e._state = "writable", e._storedError = void 0, e._writer = void 0, e._writableStreamController = void 0, e._writeRequests = new D(), e._inFlightWriteRequest = void 0, e._closeRequest = void 0, e._inFlightCloseRequest = void 0, e._pendingAbortRequest = void 0, e._backpressure = !1;
			}
			n$1(Wo, "InitializeWritableStream");
			function Ge(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? !1 : e instanceof de;
			}
			n$1(Ge, "IsWritableStream");
			function Ze(e) {
				return e._writer !== void 0;
			}
			n$1(Ze, "IsWritableStreamLocked");
			function Kt(e, t$1) {
				var r;
				if (e._state === "closed" || e._state === "errored") return T(void 0);
				e._writableStreamController._abortReason = t$1, (r = e._writableStreamController._abortController) === null || r === void 0 || r.abort(t$1);
				const s = e._state;
				if (s === "closed" || s === "errored") return T(void 0);
				if (e._pendingAbortRequest !== void 0) return e._pendingAbortRequest._promise;
				let u = !1;
				s === "erroring" && (u = !0, t$1 = void 0);
				const c = A((d, m) => {
					e._pendingAbortRequest = {
						_promise: void 0,
						_resolve: d,
						_reject: m,
						_reason: t$1,
						_wasAlreadyErroring: u
					};
				});
				return e._pendingAbortRequest._promise = c, u || Xr(e, t$1), c;
			}
			n$1(Kt, "WritableStreamAbort");
			function qo(e) {
				const t$1 = e._state;
				if (t$1 === "closed" || t$1 === "errored") return b(/* @__PURE__ */ new TypeError(`The stream (in ${t$1} state) is not in the writable state and cannot be closed`));
				const r = A((u, c) => {
					e._closeRequest = {
						_resolve: u,
						_reject: c
					};
				}), s = e._writer;
				return s !== void 0 && e._backpressure && t$1 === "writable" && ln(s), Ma(e._writableStreamController), r;
			}
			n$1(qo, "WritableStreamClose");
			function Aa(e) {
				return A((r, s) => {
					const u = {
						_resolve: r,
						_reject: s
					};
					e._writeRequests.push(u);
				});
			}
			n$1(Aa, "WritableStreamAddWriteRequest");
			function Jr(e, t$1) {
				if (e._state === "writable") {
					Xr(e, t$1);
					return;
				}
				en(e);
			}
			n$1(Jr, "WritableStreamDealWithRejection");
			function Xr(e, t$1) {
				const r = e._writableStreamController;
				e._state = "erroring", e._storedError = t$1;
				const s = e._writer;
				s !== void 0 && zo(s, t$1), !Oa(e) && r._started && en(e);
			}
			n$1(Xr, "WritableStreamStartErroring");
			function en(e) {
				e._state = "errored", e._writableStreamController[Qn]();
				const t$1 = e._storedError;
				if (e._writeRequests.forEach((u) => {
					u._reject(t$1);
				}), e._writeRequests = new D(), e._pendingAbortRequest === void 0) {
					Jt(e);
					return;
				}
				const r = e._pendingAbortRequest;
				if (e._pendingAbortRequest = void 0, r._wasAlreadyErroring) {
					r._reject(t$1), Jt(e);
					return;
				}
				g(e._writableStreamController[jt](r._reason), () => (r._resolve(), Jt(e), null), (u) => (r._reject(u), Jt(e), null));
			}
			n$1(en, "WritableStreamFinishErroring");
			function Ba(e) {
				e._inFlightWriteRequest._resolve(void 0), e._inFlightWriteRequest = void 0;
			}
			n$1(Ba, "WritableStreamFinishInFlightWrite");
			function ka(e, t$1) {
				e._inFlightWriteRequest._reject(t$1), e._inFlightWriteRequest = void 0, Jr(e, t$1);
			}
			n$1(ka, "WritableStreamFinishInFlightWriteWithError");
			function Wa(e) {
				e._inFlightCloseRequest._resolve(void 0), e._inFlightCloseRequest = void 0, e._state === "erroring" && (e._storedError = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = void 0)), e._state = "closed";
				const r = e._writer;
				r !== void 0 && Uo(r);
			}
			n$1(Wa, "WritableStreamFinishInFlightClose");
			function qa(e, t$1) {
				e._inFlightCloseRequest._reject(t$1), e._inFlightCloseRequest = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._reject(t$1), e._pendingAbortRequest = void 0), Jr(e, t$1);
			}
			n$1(qa, "WritableStreamFinishInFlightCloseWithError");
			function he(e) {
				return !(e._closeRequest === void 0 && e._inFlightCloseRequest === void 0);
			}
			n$1(he, "WritableStreamCloseQueuedOrInFlight");
			function Oa(e) {
				return !(e._inFlightWriteRequest === void 0 && e._inFlightCloseRequest === void 0);
			}
			n$1(Oa, "WritableStreamHasOperationMarkedInFlight");
			function za(e) {
				e._inFlightCloseRequest = e._closeRequest, e._closeRequest = void 0;
			}
			n$1(za, "WritableStreamMarkCloseRequestInFlight");
			function Ia(e) {
				e._inFlightWriteRequest = e._writeRequests.shift();
			}
			n$1(Ia, "WritableStreamMarkFirstWriteRequestInFlight");
			function Jt(e) {
				e._closeRequest !== void 0 && (e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
				const t$1 = e._writer;
				t$1 !== void 0 && an(t$1, e._storedError);
			}
			n$1(Jt, "WritableStreamRejectCloseAndClosedPromiseIfNeeded");
			function tn(e, t$1) {
				const r = e._writer;
				r !== void 0 && t$1 !== e._backpressure && (t$1 ? Ya(r) : ln(r)), e._backpressure = t$1;
			}
			n$1(tn, "WritableStreamUpdateBackpressure");
			const Rn = class Rn$1 {
				constructor(t$1) {
					if (Se(t$1, 1, "WritableStreamDefaultWriter"), Bo(t$1, "First parameter"), Ze(t$1)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
					this._ownerWritableStream = t$1, t$1._writer = this;
					const r = t$1._state;
					if (r === "writable") !he(t$1) && t$1._backpressure ? nr(this) : xo(this), rr(this);
					else if (r === "erroring") sn(this, t$1._storedError), rr(this);
					else if (r === "closed") xo(this), Va(this);
					else {
						const s = t$1._storedError;
						sn(this, s), Mo(this, s);
					}
				}
				get closed() {
					return Le(this) ? this._closedPromise : b($e("closed"));
				}
				get desiredSize() {
					if (!Le(this)) throw $e("desiredSize");
					if (this._ownerWritableStream === void 0) throw Pt("desiredSize");
					return $a(this);
				}
				get ready() {
					return Le(this) ? this._readyPromise : b($e("ready"));
				}
				abort(t$1 = void 0) {
					return Le(this) ? this._ownerWritableStream === void 0 ? b(Pt("abort")) : Fa(this, t$1) : b($e("abort"));
				}
				close() {
					if (!Le(this)) return b($e("close"));
					const t$1 = this._ownerWritableStream;
					return t$1 === void 0 ? b(Pt("close")) : he(t$1) ? b(/* @__PURE__ */ new TypeError("Cannot close an already-closing stream")) : Oo(this);
				}
				releaseLock() {
					if (!Le(this)) throw $e("releaseLock");
					this._ownerWritableStream !== void 0 && Io(this);
				}
				write(t$1 = void 0) {
					return Le(this) ? this._ownerWritableStream === void 0 ? b(Pt("write to")) : Fo(this, t$1) : b($e("write"));
				}
			};
			n$1(Rn, "WritableStreamDefaultWriter");
			let re = Rn;
			Object.defineProperties(re.prototype, {
				abort: { enumerable: !0 },
				close: { enumerable: !0 },
				releaseLock: { enumerable: !0 },
				write: { enumerable: !0 },
				closed: { enumerable: !0 },
				desiredSize: { enumerable: !0 },
				ready: { enumerable: !0 }
			}), h(re.prototype.abort, "abort"), h(re.prototype.close, "close"), h(re.prototype.releaseLock, "releaseLock"), h(re.prototype.write, "write"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(re.prototype, Symbol.toStringTag, {
				value: "WritableStreamDefaultWriter",
				configurable: !0
			});
			function Le(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? !1 : e instanceof re;
			}
			n$1(Le, "IsWritableStreamDefaultWriter");
			function Fa(e, t$1) {
				const r = e._ownerWritableStream;
				return Kt(r, t$1);
			}
			n$1(Fa, "WritableStreamDefaultWriterAbort");
			function Oo(e) {
				const t$1 = e._ownerWritableStream;
				return qo(t$1);
			}
			n$1(Oo, "WritableStreamDefaultWriterClose");
			function ja(e) {
				const t$1 = e._ownerWritableStream, r = t$1._state;
				return he(t$1) || r === "closed" ? T(void 0) : r === "errored" ? b(t$1._storedError) : Oo(e);
			}
			n$1(ja, "WritableStreamDefaultWriterCloseWithErrorPropagation");
			function La(e, t$1) {
				e._closedPromiseState === "pending" ? an(e, t$1) : Qa(e, t$1);
			}
			n$1(La, "WritableStreamDefaultWriterEnsureClosedPromiseRejected");
			function zo(e, t$1) {
				e._readyPromiseState === "pending" ? No(e, t$1) : Ga(e, t$1);
			}
			n$1(zo, "WritableStreamDefaultWriterEnsureReadyPromiseRejected");
			function $a(e) {
				const t$1 = e._ownerWritableStream, r = t$1._state;
				return r === "errored" || r === "erroring" ? null : r === "closed" ? 0 : $o(t$1._writableStreamController);
			}
			n$1($a, "WritableStreamDefaultWriterGetDesiredSize");
			function Io(e) {
				const t$1 = e._ownerWritableStream, r = /* @__PURE__ */ new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
				zo(e, r), La(e, r), t$1._writer = void 0, e._ownerWritableStream = void 0;
			}
			n$1(Io, "WritableStreamDefaultWriterRelease");
			function Fo(e, t$1) {
				const r = e._ownerWritableStream, s = r._writableStreamController, u = Ua(s, t$1);
				if (r !== e._ownerWritableStream) return b(Pt("write to"));
				const c = r._state;
				if (c === "errored") return b(r._storedError);
				if (he(r) || c === "closed") return b(/* @__PURE__ */ new TypeError("The stream is closing or closed and cannot be written to"));
				if (c === "erroring") return b(r._storedError);
				const d = Aa(r);
				return xa(s, t$1, u), d;
			}
			n$1(Fo, "WritableStreamDefaultWriterWrite");
			const jo = {}, Tn = class Tn$1 {
				constructor() {
					throw new TypeError("Illegal constructor");
				}
				get abortReason() {
					if (!rn(this)) throw on("abortReason");
					return this._abortReason;
				}
				get signal() {
					if (!rn(this)) throw on("signal");
					if (this._abortController === void 0) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
					return this._abortController.signal;
				}
				error(t$1 = void 0) {
					if (!rn(this)) throw on("error");
					this._controlledWritableStream._state === "writable" && Do(this, t$1);
				}
				[jt](t$1) {
					const r = this._abortAlgorithm(t$1);
					return Xt(this), r;
				}
				[Qn]() {
					Be(this);
				}
			};
			n$1(Tn, "WritableStreamDefaultController");
			let ke = Tn;
			Object.defineProperties(ke.prototype, {
				abortReason: { enumerable: !0 },
				signal: { enumerable: !0 },
				error: { enumerable: !0 }
			}), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ke.prototype, Symbol.toStringTag, {
				value: "WritableStreamDefaultController",
				configurable: !0
			});
			function rn(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") ? !1 : e instanceof ke;
			}
			n$1(rn, "IsWritableStreamDefaultController");
			function Lo(e, t$1, r, s, u, c, d, m) {
				t$1._controlledWritableStream = e, e._writableStreamController = t$1, t$1._queue = void 0, t$1._queueTotalSize = void 0, Be(t$1), t$1._abortReason = void 0, t$1._abortController = va(), t$1._started = !1, t$1._strategySizeAlgorithm = m, t$1._strategyHWM = d, t$1._writeAlgorithm = s, t$1._closeAlgorithm = u, t$1._abortAlgorithm = c;
				tn(e, nn(t$1));
				g(T(r()), () => (t$1._started = !0, er(t$1), null), (P) => (t$1._started = !0, Jr(e, P), null));
			}
			n$1(Lo, "SetUpWritableStreamDefaultController");
			function Da(e, t$1, r, s) {
				const u = Object.create(ke.prototype);
				let c, d, m, R;
				t$1.start !== void 0 ? c = n$1(() => t$1.start(u), "startAlgorithm") : c = n$1(() => {}, "startAlgorithm"), t$1.write !== void 0 ? d = n$1((y) => t$1.write(y, u), "writeAlgorithm") : d = n$1(() => T(void 0), "writeAlgorithm"), t$1.close !== void 0 ? m = n$1(() => t$1.close(), "closeAlgorithm") : m = n$1(() => T(void 0), "closeAlgorithm"), t$1.abort !== void 0 ? R = n$1((y) => t$1.abort(y), "abortAlgorithm") : R = n$1(() => T(void 0), "abortAlgorithm"), Lo(e, u, c, d, m, R, r, s);
			}
			n$1(Da, "SetUpWritableStreamDefaultControllerFromUnderlyingSink");
			function Xt(e) {
				e._writeAlgorithm = void 0, e._closeAlgorithm = void 0, e._abortAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
			}
			n$1(Xt, "WritableStreamDefaultControllerClearAlgorithms");
			function Ma(e) {
				Nr(e, jo, 0), er(e);
			}
			n$1(Ma, "WritableStreamDefaultControllerClose");
			function Ua(e, t$1) {
				try {
					return e._strategySizeAlgorithm(t$1);
				} catch (r) {
					return Ct(e, r), 1;
				}
			}
			n$1(Ua, "WritableStreamDefaultControllerGetChunkSize");
			function $o(e) {
				return e._strategyHWM - e._queueTotalSize;
			}
			n$1($o, "WritableStreamDefaultControllerGetDesiredSize");
			function xa(e, t$1, r) {
				try {
					Nr(e, t$1, r);
				} catch (u) {
					Ct(e, u);
					return;
				}
				const s = e._controlledWritableStream;
				if (!he(s) && s._state === "writable") tn(s, nn(e));
				er(e);
			}
			n$1(xa, "WritableStreamDefaultControllerWrite");
			function er(e) {
				const t$1 = e._controlledWritableStream;
				if (!e._started || t$1._inFlightWriteRequest !== void 0) return;
				if (t$1._state === "erroring") {
					en(t$1);
					return;
				}
				if (e._queue.length === 0) return;
				const s = na(e);
				s === jo ? Na(e) : Ha(e, s);
			}
			n$1(er, "WritableStreamDefaultControllerAdvanceQueueIfNeeded");
			function Ct(e, t$1) {
				e._controlledWritableStream._state === "writable" && Do(e, t$1);
			}
			n$1(Ct, "WritableStreamDefaultControllerErrorIfNeeded");
			function Na(e) {
				const t$1 = e._controlledWritableStream;
				za(t$1), xr(e);
				const r = e._closeAlgorithm();
				Xt(e), g(r, () => (Wa(t$1), null), (s) => (qa(t$1, s), null));
			}
			n$1(Na, "WritableStreamDefaultControllerProcessClose");
			function Ha(e, t$1) {
				const r = e._controlledWritableStream;
				Ia(r);
				g(e._writeAlgorithm(t$1), () => {
					Ba(r);
					const u = r._state;
					if (xr(e), !he(r) && u === "writable") tn(r, nn(e));
					return er(e), null;
				}, (u) => (r._state === "writable" && Xt(e), ka(r, u), null));
			}
			n$1(Ha, "WritableStreamDefaultControllerProcessWrite");
			function nn(e) {
				return $o(e) <= 0;
			}
			n$1(nn, "WritableStreamDefaultControllerGetBackpressure");
			function Do(e, t$1) {
				const r = e._controlledWritableStream;
				Xt(e), Xr(r, t$1);
			}
			n$1(Do, "WritableStreamDefaultControllerError");
			function tr(e) {
				return /* @__PURE__ */ new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
			}
			n$1(tr, "streamBrandCheckException$2");
			function on(e) {
				return /* @__PURE__ */ new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
			}
			n$1(on, "defaultControllerBrandCheckException$2");
			function $e(e) {
				return /* @__PURE__ */ new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
			}
			n$1($e, "defaultWriterBrandCheckException");
			function Pt(e) {
				return /* @__PURE__ */ new TypeError("Cannot " + e + " a stream using a released writer");
			}
			n$1(Pt, "defaultWriterLockException");
			function rr(e) {
				e._closedPromise = A((t$1, r) => {
					e._closedPromise_resolve = t$1, e._closedPromise_reject = r, e._closedPromiseState = "pending";
				});
			}
			n$1(rr, "defaultWriterClosedPromiseInitialize");
			function Mo(e, t$1) {
				rr(e), an(e, t$1);
			}
			n$1(Mo, "defaultWriterClosedPromiseInitializeAsRejected");
			function Va(e) {
				rr(e), Uo(e);
			}
			n$1(Va, "defaultWriterClosedPromiseInitializeAsResolved");
			function an(e, t$1) {
				e._closedPromise_reject !== void 0 && (Q(e._closedPromise), e._closedPromise_reject(t$1), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected");
			}
			n$1(an, "defaultWriterClosedPromiseReject");
			function Qa(e, t$1) {
				Mo(e, t$1);
			}
			n$1(Qa, "defaultWriterClosedPromiseResetToRejected");
			function Uo(e) {
				e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved");
			}
			n$1(Uo, "defaultWriterClosedPromiseResolve");
			function nr(e) {
				e._readyPromise = A((t$1, r) => {
					e._readyPromise_resolve = t$1, e._readyPromise_reject = r;
				}), e._readyPromiseState = "pending";
			}
			n$1(nr, "defaultWriterReadyPromiseInitialize");
			function sn(e, t$1) {
				nr(e), No(e, t$1);
			}
			n$1(sn, "defaultWriterReadyPromiseInitializeAsRejected");
			function xo(e) {
				nr(e), ln(e);
			}
			n$1(xo, "defaultWriterReadyPromiseInitializeAsResolved");
			function No(e, t$1) {
				e._readyPromise_reject !== void 0 && (Q(e._readyPromise), e._readyPromise_reject(t$1), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected");
			}
			n$1(No, "defaultWriterReadyPromiseReject");
			function Ya(e) {
				nr(e);
			}
			n$1(Ya, "defaultWriterReadyPromiseReset");
			function Ga(e, t$1) {
				sn(e, t$1);
			}
			n$1(Ga, "defaultWriterReadyPromiseResetToRejected");
			function ln(e) {
				e._readyPromise_resolve !== void 0 && (e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled");
			}
			n$1(ln, "defaultWriterReadyPromiseResolve");
			function Za() {
				if (typeof globalThis < "u") return globalThis;
				if (typeof self < "u") return self;
				if (typeof n < "u") return n;
			}
			n$1(Za, "getGlobals");
			const un = Za();
			function Ka(e) {
				if (!(typeof e == "function" || typeof e == "object") || e.name !== "DOMException") return !1;
				try {
					return new e(), !0;
				} catch {
					return !1;
				}
			}
			n$1(Ka, "isDOMExceptionConstructor");
			function Ja() {
				const e = un?.DOMException;
				return Ka(e) ? e : void 0;
			}
			n$1(Ja, "getFromGlobal");
			function Xa() {
				const e = n$1(function(r, s) {
					this.message = r || "", this.name = s || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
				}, "DOMException");
				return h(e, "DOMException"), e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", {
					value: e,
					writable: !0,
					configurable: !0
				}), e;
			}
			n$1(Xa, "createPolyfill");
			const es = Ja() || Xa();
			function Ho(e, t$1, r, s, u, c) {
				const d = Qe(e), m = ko(t$1);
				e._disturbed = !0;
				let R = !1, y = T(void 0);
				return A((C, P) => {
					let B;
					if (c !== void 0) {
						if (B = n$1(() => {
							const _ = c.reason !== void 0 ? c.reason : new es("Aborted", "AbortError"), E = [];
							s || E.push(() => t$1._state === "writable" ? Kt(t$1, _) : T(void 0)), u || E.push(() => e._state === "readable" ? ie(e, _) : T(void 0)), N(() => Promise.all(E.map((k) => k())), !0, _);
						}, "abortAlgorithm"), c.aborted) {
							B();
							return;
						}
						c.addEventListener("abort", B);
					}
					function ae() {
						return A((_, E) => {
							function k(Y) {
								Y ? _() : q(nt(), k, E);
							}
							n$1(k, "next"), k(!1);
						});
					}
					n$1(ae, "pipeLoop");
					function nt() {
						return R ? T(!0) : q(m._readyPromise, () => A((_, E) => {
							_t(d, {
								_chunkSteps: n$1((k) => {
									y = q(Fo(m, k), void 0, f$1), _(!1);
								}, "_chunkSteps"),
								_closeSteps: n$1(() => _(!0), "_closeSteps"),
								_errorSteps: E
							});
						}));
					}
					if (n$1(nt, "pipeStep"), Te(e, d._closedPromise, (_) => (s ? J(!0, _) : N(() => Kt(t$1, _), !0, _), null)), Te(t$1, m._closedPromise, (_) => (u ? J(!0, _) : N(() => ie(e, _), !0, _), null)), x(e, d._closedPromise, () => (r ? J() : N(() => ja(m)), null)), he(t$1) || t$1._state === "closed") {
						const _ = /* @__PURE__ */ new TypeError("the destination writable stream closed before all data could be piped to it");
						u ? J(!0, _) : N(() => ie(e, _), !0, _);
					}
					Q(ae());
					function Oe() {
						const _ = y;
						return q(y, () => _ !== y ? Oe() : void 0);
					}
					n$1(Oe, "waitForWritesToFinish");
					function Te(_, E, k) {
						_._state === "errored" ? k(_._storedError) : I(E, k);
					}
					n$1(Te, "isOrBecomesErrored");
					function x(_, E, k) {
						_._state === "closed" ? k() : V(E, k);
					}
					n$1(x, "isOrBecomesClosed");
					function N(_, E, k) {
						if (R) return;
						R = !0, t$1._state === "writable" && !he(t$1) ? V(Oe(), Y) : Y();
						function Y() {
							return g(_(), () => Ce(E, k), (ot) => Ce(!0, ot)), null;
						}
						n$1(Y, "doTheRest");
					}
					n$1(N, "shutdownWithAction");
					function J(_, E) {
						R || (R = !0, t$1._state === "writable" && !he(t$1) ? V(Oe(), () => Ce(_, E)) : Ce(_, E));
					}
					n$1(J, "shutdown");
					function Ce(_, E) {
						return Io(m), _e(d), c !== void 0 && c.removeEventListener("abort", B), _ ? P(E) : C(void 0), null;
					}
					n$1(Ce, "finalize");
				});
			}
			n$1(Ho, "ReadableStreamPipeTo");
			const Cn = class Cn$1 {
				constructor() {
					throw new TypeError("Illegal constructor");
				}
				get desiredSize() {
					if (!or(this)) throw ar("desiredSize");
					return fn(this);
				}
				close() {
					if (!or(this)) throw ar("close");
					if (!Je(this)) throw new TypeError("The stream is not in a state that permits close");
					De(this);
				}
				enqueue(t$1 = void 0) {
					if (!or(this)) throw ar("enqueue");
					if (!Je(this)) throw new TypeError("The stream is not in a state that permits enqueue");
					return Ke(this, t$1);
				}
				error(t$1 = void 0) {
					if (!or(this)) throw ar("error");
					oe(this, t$1);
				}
				[Ar](t$1) {
					Be(this);
					const r = this._cancelAlgorithm(t$1);
					return ir(this), r;
				}
				[Br](t$1) {
					const r = this._controlledReadableStream;
					if (this._queue.length > 0) {
						const s = xr(this);
						this._closeRequested && this._queue.length === 0 ? (ir(this), At(r)) : vt(this), t$1._chunkSteps(s);
					} else eo(r, t$1), vt(this);
				}
				[kr]() {}
			};
			n$1(Cn, "ReadableStreamDefaultController");
			let ne = Cn;
			Object.defineProperties(ne.prototype, {
				close: { enumerable: !0 },
				enqueue: { enumerable: !0 },
				error: { enumerable: !0 },
				desiredSize: { enumerable: !0 }
			}), h(ne.prototype.close, "close"), h(ne.prototype.enqueue, "enqueue"), h(ne.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ne.prototype, Symbol.toStringTag, {
				value: "ReadableStreamDefaultController",
				configurable: !0
			});
			function or(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") ? !1 : e instanceof ne;
			}
			n$1(or, "IsReadableStreamDefaultController");
			function vt(e) {
				if (!Vo(e)) return;
				if (e._pulling) {
					e._pullAgain = !0;
					return;
				}
				e._pulling = !0;
				g(e._pullAlgorithm(), () => (e._pulling = !1, e._pullAgain && (e._pullAgain = !1, vt(e)), null), (s) => (oe(e, s), null));
			}
			n$1(vt, "ReadableStreamDefaultControllerCallPullIfNeeded");
			function Vo(e) {
				const t$1 = e._controlledReadableStream;
				return !Je(e) || !e._started ? !1 : !!(qe(t$1) && $t(t$1) > 0 || fn(e) > 0);
			}
			n$1(Vo, "ReadableStreamDefaultControllerShouldCallPull");
			function ir(e) {
				e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
			}
			n$1(ir, "ReadableStreamDefaultControllerClearAlgorithms");
			function De(e) {
				if (!Je(e)) return;
				const t$1 = e._controlledReadableStream;
				e._closeRequested = !0, e._queue.length === 0 && (ir(e), At(t$1));
			}
			n$1(De, "ReadableStreamDefaultControllerClose");
			function Ke(e, t$1) {
				if (!Je(e)) return;
				const r = e._controlledReadableStream;
				if (qe(r) && $t(r) > 0) Lr(r, t$1, !1);
				else {
					let s;
					try {
						s = e._strategySizeAlgorithm(t$1);
					} catch (u) {
						throw oe(e, u), u;
					}
					try {
						Nr(e, t$1, s);
					} catch (u) {
						throw oe(e, u), u;
					}
				}
				vt(e);
			}
			n$1(Ke, "ReadableStreamDefaultControllerEnqueue");
			function oe(e, t$1) {
				const r = e._controlledReadableStream;
				r._state === "readable" && (Be(e), ir(e), Zo(r, t$1));
			}
			n$1(oe, "ReadableStreamDefaultControllerError");
			function fn(e) {
				const t$1 = e._controlledReadableStream._state;
				return t$1 === "errored" ? null : t$1 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
			}
			n$1(fn, "ReadableStreamDefaultControllerGetDesiredSize");
			function ts(e) {
				return !Vo(e);
			}
			n$1(ts, "ReadableStreamDefaultControllerHasBackpressure");
			function Je(e) {
				const t$1 = e._controlledReadableStream._state;
				return !e._closeRequested && t$1 === "readable";
			}
			n$1(Je, "ReadableStreamDefaultControllerCanCloseOrEnqueue");
			function Qo(e, t$1, r, s, u, c, d) {
				t$1._controlledReadableStream = e, t$1._queue = void 0, t$1._queueTotalSize = void 0, Be(t$1), t$1._started = !1, t$1._closeRequested = !1, t$1._pullAgain = !1, t$1._pulling = !1, t$1._strategySizeAlgorithm = d, t$1._strategyHWM = c, t$1._pullAlgorithm = s, t$1._cancelAlgorithm = u, e._readableStreamController = t$1;
				g(T(r()), () => (t$1._started = !0, vt(t$1), null), (R) => (oe(t$1, R), null));
			}
			n$1(Qo, "SetUpReadableStreamDefaultController");
			function rs(e, t$1, r, s) {
				const u = Object.create(ne.prototype);
				let c, d, m;
				t$1.start !== void 0 ? c = n$1(() => t$1.start(u), "startAlgorithm") : c = n$1(() => {}, "startAlgorithm"), t$1.pull !== void 0 ? d = n$1(() => t$1.pull(u), "pullAlgorithm") : d = n$1(() => T(void 0), "pullAlgorithm"), t$1.cancel !== void 0 ? m = n$1((R) => t$1.cancel(R), "cancelAlgorithm") : m = n$1(() => T(void 0), "cancelAlgorithm"), Qo(e, u, c, d, m, r, s);
			}
			n$1(rs, "SetUpReadableStreamDefaultControllerFromUnderlyingSource");
			function ar(e) {
				return /* @__PURE__ */ new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
			}
			n$1(ar, "defaultControllerBrandCheckException$1");
			function ns(e, t$1) {
				return Ie(e._readableStreamController) ? is(e) : os(e);
			}
			n$1(ns, "ReadableStreamTee");
			function os(e, t$1) {
				const r = Qe(e);
				let s = !1, u = !1, c = !1, d = !1, m, R, y, C, P;
				const B = A((x) => {
					P = x;
				});
				function ae() {
					return s ? (u = !0, T(void 0)) : (s = !0, _t(r, {
						_chunkSteps: n$1((N) => {
							ge(() => {
								u = !1;
								const J = N, Ce = N;
								c || Ke(y._readableStreamController, J), d || Ke(C._readableStreamController, Ce), s = !1, u && ae();
							});
						}, "_chunkSteps"),
						_closeSteps: n$1(() => {
							s = !1, c || De(y._readableStreamController), d || De(C._readableStreamController), (!c || !d) && P(void 0);
						}, "_closeSteps"),
						_errorSteps: n$1(() => {
							s = !1;
						}, "_errorSteps")
					}), T(void 0));
				}
				n$1(ae, "pullAlgorithm");
				function nt(x) {
					if (c = !0, m = x, d) {
						const J = ie(e, St([m, R]));
						P(J);
					}
					return B;
				}
				n$1(nt, "cancel1Algorithm");
				function Oe(x) {
					if (d = !0, R = x, c) {
						const J = ie(e, St([m, R]));
						P(J);
					}
					return B;
				}
				n$1(Oe, "cancel2Algorithm");
				function Te() {}
				return n$1(Te, "startAlgorithm"), y = Et(Te, ae, nt), C = Et(Te, ae, Oe), I(r._closedPromise, (x) => (oe(y._readableStreamController, x), oe(C._readableStreamController, x), (!c || !d) && P(void 0), null)), [y, C];
			}
			n$1(os, "ReadableStreamDefaultTee");
			function is(e) {
				let t$1 = Qe(e), r = !1, s = !1, u = !1, c = !1, d = !1, m, R, y, C, P;
				const B = A((_) => {
					P = _;
				});
				function ae(_) {
					I(_._closedPromise, (E) => (_ !== t$1 || (K(y._readableStreamController, E), K(C._readableStreamController, E), (!c || !d) && P(void 0)), null));
				}
				n$1(ae, "forwardReaderError");
				function nt() {
					je(t$1) && (_e(t$1), t$1 = Qe(e), ae(t$1)), _t(t$1, {
						_chunkSteps: n$1((E) => {
							ge(() => {
								s = !1, u = !1;
								const k = E;
								let Y = E;
								if (!c && !d) try {
									Y = fo(E);
								} catch (ot) {
									K(y._readableStreamController, ot), K(C._readableStreamController, ot), P(ie(e, ot));
									return;
								}
								c || Ht(y._readableStreamController, k), d || Ht(C._readableStreamController, Y), r = !1, s ? Te() : u && x();
							});
						}, "_chunkSteps"),
						_closeSteps: n$1(() => {
							r = !1, c || wt(y._readableStreamController), d || wt(C._readableStreamController), y._readableStreamController._pendingPullIntos.length > 0 && Vt(y._readableStreamController, 0), C._readableStreamController._pendingPullIntos.length > 0 && Vt(C._readableStreamController, 0), (!c || !d) && P(void 0);
						}, "_closeSteps"),
						_errorSteps: n$1(() => {
							r = !1;
						}, "_errorSteps")
					});
				}
				n$1(nt, "pullWithDefaultReader");
				function Oe(_, E) {
					Ee(t$1) && (_e(t$1), t$1 = Co(e), ae(t$1));
					const k = E ? C : y, Y = E ? y : C;
					Eo(t$1, _, 1, {
						_chunkSteps: n$1((it) => {
							ge(() => {
								s = !1, u = !1;
								const at = E ? d : c;
								if (E ? c : d) at || Qt(k._readableStreamController, it);
								else {
									let ui;
									try {
										ui = fo(it);
									} catch (kn) {
										K(k._readableStreamController, kn), K(Y._readableStreamController, kn), P(ie(e, kn));
										return;
									}
									at || Qt(k._readableStreamController, it), Ht(Y._readableStreamController, ui);
								}
								r = !1, s ? Te() : u && x();
							});
						}, "_chunkSteps"),
						_closeSteps: n$1((it) => {
							r = !1;
							const at = E ? d : c, cr = E ? c : d;
							at || wt(k._readableStreamController), cr || wt(Y._readableStreamController), it !== void 0 && (at || Qt(k._readableStreamController, it), !cr && Y._readableStreamController._pendingPullIntos.length > 0 && Vt(Y._readableStreamController, 0)), (!at || !cr) && P(void 0);
						}, "_closeSteps"),
						_errorSteps: n$1(() => {
							r = !1;
						}, "_errorSteps")
					});
				}
				n$1(Oe, "pullWithBYOBReader");
				function Te() {
					if (r) return s = !0, T(void 0);
					r = !0;
					const _ = Gr(y._readableStreamController);
					return _ === null ? nt() : Oe(_._view, !1), T(void 0);
				}
				n$1(Te, "pull1Algorithm");
				function x() {
					if (r) return u = !0, T(void 0);
					r = !0;
					const _ = Gr(C._readableStreamController);
					return _ === null ? nt() : Oe(_._view, !0), T(void 0);
				}
				n$1(x, "pull2Algorithm");
				function N(_) {
					if (c = !0, m = _, d) {
						const k = ie(e, St([m, R]));
						P(k);
					}
					return B;
				}
				n$1(N, "cancel1Algorithm");
				function J(_) {
					if (d = !0, R = _, c) {
						const k = ie(e, St([m, R]));
						P(k);
					}
					return B;
				}
				n$1(J, "cancel2Algorithm");
				function Ce() {}
				return n$1(Ce, "startAlgorithm"), y = Go(Ce, Te, N), C = Go(Ce, x, J), ae(t$1), [y, C];
			}
			n$1(is, "ReadableByteStreamTee");
			function as(e) {
				return l(e) && typeof e.getReader < "u";
			}
			n$1(as, "isReadableStreamLike");
			function ss(e) {
				return as(e) ? us(e.getReader()) : ls(e);
			}
			n$1(ss, "ReadableStreamFrom");
			function ls(e) {
				let t$1;
				const r = uo(e, "async"), s = f$1;
				function u() {
					let d;
					try {
						d = Xi(r);
					} catch (R) {
						return b(R);
					}
					return F(T(d), (R) => {
						if (!l(R)) throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
						if (ea(R)) De(t$1._readableStreamController);
						else {
							const C = ta(R);
							Ke(t$1._readableStreamController, C);
						}
					});
				}
				n$1(u, "pullAlgorithm");
				function c(d) {
					const m = r.iterator;
					let R;
					try {
						R = Ut(m, "return");
					} catch (P) {
						return b(P);
					}
					if (R === void 0) return T(void 0);
					let y;
					try {
						y = z(R, m, [d]);
					} catch (P) {
						return b(P);
					}
					return F(T(y), (P) => {
						if (!l(P)) throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
					});
				}
				return n$1(c, "cancelAlgorithm"), t$1 = Et(s, u, c, 0), t$1;
			}
			n$1(ls, "ReadableStreamFromIterable");
			function us(e) {
				let t$1;
				const r = f$1;
				function s() {
					let c;
					try {
						c = e.read();
					} catch (d) {
						return b(d);
					}
					return F(c, (d) => {
						if (!l(d)) throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
						if (d.done) De(t$1._readableStreamController);
						else {
							const m = d.value;
							Ke(t$1._readableStreamController, m);
						}
					});
				}
				n$1(s, "pullAlgorithm");
				function u(c) {
					try {
						return T(e.cancel(c));
					} catch (d) {
						return b(d);
					}
				}
				return n$1(u, "cancelAlgorithm"), t$1 = Et(r, s, u, 0), t$1;
			}
			n$1(us, "ReadableStreamFromDefaultReader");
			function fs$1(e, t$1) {
				ue(e, t$1);
				const r = e, s = r?.autoAllocateChunkSize, u = r?.cancel, c = r?.pull, d = r?.start, m = r?.type;
				return {
					autoAllocateChunkSize: s === void 0 ? void 0 : Fr(s, `${t$1} has member 'autoAllocateChunkSize' that`),
					cancel: u === void 0 ? void 0 : cs(u, r, `${t$1} has member 'cancel' that`),
					pull: c === void 0 ? void 0 : ds(c, r, `${t$1} has member 'pull' that`),
					start: d === void 0 ? void 0 : hs(d, r, `${t$1} has member 'start' that`),
					type: m === void 0 ? void 0 : ps(m, `${t$1} has member 'type' that`)
				};
			}
			n$1(fs$1, "convertUnderlyingDefaultOrByteSource");
			function cs(e, t$1, r) {
				return Z(e, r), (s) => j(e, t$1, [s]);
			}
			n$1(cs, "convertUnderlyingSourceCancelCallback");
			function ds(e, t$1, r) {
				return Z(e, r), (s) => j(e, t$1, [s]);
			}
			n$1(ds, "convertUnderlyingSourcePullCallback");
			function hs(e, t$1, r) {
				return Z(e, r), (s) => z(e, t$1, [s]);
			}
			n$1(hs, "convertUnderlyingSourceStartCallback");
			function ps(e, t$1) {
				if (e = `${e}`, e !== "bytes") throw new TypeError(`${t$1} '${e}' is not a valid enumeration value for ReadableStreamType`);
				return e;
			}
			n$1(ps, "convertReadableStreamType");
			function bs(e, t$1) {
				return ue(e, t$1), { preventCancel: !!e?.preventCancel };
			}
			n$1(bs, "convertIteratorOptions");
			function Yo(e, t$1) {
				ue(e, t$1);
				const r = e?.preventAbort, s = e?.preventCancel, u = e?.preventClose, c = e?.signal;
				return c !== void 0 && ms(c, `${t$1} has member 'signal' that`), {
					preventAbort: !!r,
					preventCancel: !!s,
					preventClose: !!u,
					signal: c
				};
			}
			n$1(Yo, "convertPipeOptions");
			function ms(e, t$1) {
				if (!Ca(e)) throw new TypeError(`${t$1} is not an AbortSignal.`);
			}
			n$1(ms, "assertAbortSignal");
			function ys(e, t$1) {
				ue(e, t$1);
				const r = e?.readable;
				zr(r, "readable", "ReadableWritablePair"), jr(r, `${t$1} has member 'readable' that`);
				const s = e?.writable;
				return zr(s, "writable", "ReadableWritablePair"), Bo(s, `${t$1} has member 'writable' that`), {
					readable: r,
					writable: s
				};
			}
			n$1(ys, "convertReadableWritablePair");
			const Pn = class Pn$1 {
				constructor(t$1 = {}, r = {}) {
					t$1 === void 0 ? t$1 = null : Jn(t$1, "First parameter");
					const s = Zt(r, "Second parameter"), u = fs$1(t$1, "First parameter");
					if (cn(this), u.type === "bytes") {
						if (s.size !== void 0) throw new RangeError("The strategy for a byte stream cannot have a size function");
						const c = Tt(s, 0);
						ca(this, u, c);
					} else {
						const c = Gt(s), d = Tt(s, 1);
						rs(this, u, d, c);
					}
				}
				get locked() {
					if (!We(this)) throw Me("locked");
					return qe(this);
				}
				cancel(t$1 = void 0) {
					return We(this) ? qe(this) ? b(/* @__PURE__ */ new TypeError("Cannot cancel a stream that already has a reader")) : ie(this, t$1) : b(Me("cancel"));
				}
				getReader(t$1 = void 0) {
					if (!We(this)) throw Me("getReader");
					return ha(t$1, "First parameter").mode === void 0 ? Qe(this) : Co(this);
				}
				pipeThrough(t$1, r = {}) {
					if (!We(this)) throw Me("pipeThrough");
					Se(t$1, 1, "pipeThrough");
					const s = ys(t$1, "First parameter"), u = Yo(r, "Second parameter");
					if (qe(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
					if (Ze(s.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
					return Q(Ho(this, s.writable, u.preventClose, u.preventAbort, u.preventCancel, u.signal)), s.readable;
				}
				pipeTo(t$1, r = {}) {
					if (!We(this)) return b(Me("pipeTo"));
					if (t$1 === void 0) return b("Parameter 1 is required in 'pipeTo'.");
					if (!Ge(t$1)) return b(/* @__PURE__ */ new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
					let s;
					try {
						s = Yo(r, "Second parameter");
					} catch (u) {
						return b(u);
					}
					return qe(this) ? b(/* @__PURE__ */ new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Ze(t$1) ? b(/* @__PURE__ */ new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : Ho(this, t$1, s.preventClose, s.preventAbort, s.preventCancel, s.signal);
				}
				tee() {
					if (!We(this)) throw Me("tee");
					return St(ns(this));
				}
				values(t$1 = void 0) {
					if (!We(this)) throw Me("values");
					const r = bs(t$1, "First parameter");
					return Ki(this, r.preventCancel);
				}
				[Ur](t$1) {
					return this.values(t$1);
				}
				static from(t$1) {
					return ss(t$1);
				}
			};
			n$1(Pn, "ReadableStream");
			let L = Pn;
			Object.defineProperties(L, { from: { enumerable: !0 } }), Object.defineProperties(L.prototype, {
				cancel: { enumerable: !0 },
				getReader: { enumerable: !0 },
				pipeThrough: { enumerable: !0 },
				pipeTo: { enumerable: !0 },
				tee: { enumerable: !0 },
				values: { enumerable: !0 },
				locked: { enumerable: !0 }
			}), h(L.from, "from"), h(L.prototype.cancel, "cancel"), h(L.prototype.getReader, "getReader"), h(L.prototype.pipeThrough, "pipeThrough"), h(L.prototype.pipeTo, "pipeTo"), h(L.prototype.tee, "tee"), h(L.prototype.values, "values"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(L.prototype, Symbol.toStringTag, {
				value: "ReadableStream",
				configurable: !0
			}), Object.defineProperty(L.prototype, Ur, {
				value: L.prototype.values,
				writable: !0,
				configurable: !0
			});
			function Et(e, t$1, r, s = 1, u = () => 1) {
				const c = Object.create(L.prototype);
				cn(c);
				return Qo(c, Object.create(ne.prototype), e, t$1, r, s, u), c;
			}
			n$1(Et, "CreateReadableStream");
			function Go(e, t$1, r) {
				const s = Object.create(L.prototype);
				cn(s);
				return To(s, Object.create(te.prototype), e, t$1, r, 0, void 0), s;
			}
			n$1(Go, "CreateReadableByteStream");
			function cn(e) {
				e._state = "readable", e._reader = void 0, e._storedError = void 0, e._disturbed = !1;
			}
			n$1(cn, "InitializeReadableStream");
			function We(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? !1 : e instanceof L;
			}
			n$1(We, "IsReadableStream");
			function qe(e) {
				return e._reader !== void 0;
			}
			n$1(qe, "IsReadableStreamLocked");
			function ie(e, t$1) {
				if (e._disturbed = !0, e._state === "closed") return T(void 0);
				if (e._state === "errored") return b(e._storedError);
				At(e);
				const r = e._reader;
				if (r !== void 0 && je(r)) {
					const u = r._readIntoRequests;
					r._readIntoRequests = new D(), u.forEach((c) => {
						c._closeSteps(void 0);
					});
				}
				return F(e._readableStreamController[Ar](t$1), f$1);
			}
			n$1(ie, "ReadableStreamCancel");
			function At(e) {
				e._state = "closed";
				const t$1 = e._reader;
				if (t$1 !== void 0 && (Zn(t$1), Ee(t$1))) {
					const r = t$1._readRequests;
					t$1._readRequests = new D(), r.forEach((s) => {
						s._closeSteps();
					});
				}
			}
			n$1(At, "ReadableStreamClose");
			function Zo(e, t$1) {
				e._state = "errored", e._storedError = t$1;
				const r = e._reader;
				r !== void 0 && (Or(r, t$1), Ee(r) ? ro(r, t$1) : Ao(r, t$1));
			}
			n$1(Zo, "ReadableStreamError");
			function Me(e) {
				return /* @__PURE__ */ new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
			}
			n$1(Me, "streamBrandCheckException$1");
			function Ko(e, t$1) {
				ue(e, t$1);
				const r = e?.highWaterMark;
				return zr(r, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: Ir(r) };
			}
			n$1(Ko, "convertQueuingStrategyInit");
			const Jo = n$1((e) => e.byteLength, "byteLengthSizeFunction");
			h(Jo, "size");
			const vn = class vn$1 {
				constructor(t$1) {
					Se(t$1, 1, "ByteLengthQueuingStrategy"), t$1 = Ko(t$1, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t$1.highWaterMark;
				}
				get highWaterMark() {
					if (!ei(this)) throw Xo("highWaterMark");
					return this._byteLengthQueuingStrategyHighWaterMark;
				}
				get size() {
					if (!ei(this)) throw Xo("size");
					return Jo;
				}
			};
			n$1(vn, "ByteLengthQueuingStrategy");
			let Xe = vn;
			Object.defineProperties(Xe.prototype, {
				highWaterMark: { enumerable: !0 },
				size: { enumerable: !0 }
			}), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Xe.prototype, Symbol.toStringTag, {
				value: "ByteLengthQueuingStrategy",
				configurable: !0
			});
			function Xo(e) {
				return /* @__PURE__ */ new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
			}
			n$1(Xo, "byteLengthBrandCheckException");
			function ei(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") ? !1 : e instanceof Xe;
			}
			n$1(ei, "IsByteLengthQueuingStrategy");
			const ti = n$1(() => 1, "countSizeFunction");
			h(ti, "size");
			const En = class En$1 {
				constructor(t$1) {
					Se(t$1, 1, "CountQueuingStrategy"), t$1 = Ko(t$1, "First parameter"), this._countQueuingStrategyHighWaterMark = t$1.highWaterMark;
				}
				get highWaterMark() {
					if (!ni(this)) throw ri("highWaterMark");
					return this._countQueuingStrategyHighWaterMark;
				}
				get size() {
					if (!ni(this)) throw ri("size");
					return ti;
				}
			};
			n$1(En, "CountQueuingStrategy");
			let et = En;
			Object.defineProperties(et.prototype, {
				highWaterMark: { enumerable: !0 },
				size: { enumerable: !0 }
			}), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(et.prototype, Symbol.toStringTag, {
				value: "CountQueuingStrategy",
				configurable: !0
			});
			function ri(e) {
				return /* @__PURE__ */ new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
			}
			n$1(ri, "countBrandCheckException");
			function ni(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") ? !1 : e instanceof et;
			}
			n$1(ni, "IsCountQueuingStrategy");
			function gs(e, t$1) {
				ue(e, t$1);
				const r = e?.cancel, s = e?.flush, u = e?.readableType, c = e?.start, d = e?.transform, m = e?.writableType;
				return {
					cancel: r === void 0 ? void 0 : Rs(r, e, `${t$1} has member 'cancel' that`),
					flush: s === void 0 ? void 0 : _s(s, e, `${t$1} has member 'flush' that`),
					readableType: u,
					start: c === void 0 ? void 0 : Ss(c, e, `${t$1} has member 'start' that`),
					transform: d === void 0 ? void 0 : ws(d, e, `${t$1} has member 'transform' that`),
					writableType: m
				};
			}
			n$1(gs, "convertTransformer");
			function _s(e, t$1, r) {
				return Z(e, r), (s) => j(e, t$1, [s]);
			}
			n$1(_s, "convertTransformerFlushCallback");
			function Ss(e, t$1, r) {
				return Z(e, r), (s) => z(e, t$1, [s]);
			}
			n$1(Ss, "convertTransformerStartCallback");
			function ws(e, t$1, r) {
				return Z(e, r), (s, u) => j(e, t$1, [s, u]);
			}
			n$1(ws, "convertTransformerTransformCallback");
			function Rs(e, t$1, r) {
				return Z(e, r), (s) => j(e, t$1, [s]);
			}
			n$1(Rs, "convertTransformerCancelCallback");
			const An = class An$1 {
				constructor(t$1 = {}, r = {}, s = {}) {
					t$1 === void 0 && (t$1 = null);
					const u = Zt(r, "Second parameter"), c = Zt(s, "Third parameter"), d = gs(t$1, "First parameter");
					if (d.readableType !== void 0) throw new RangeError("Invalid readableType specified");
					if (d.writableType !== void 0) throw new RangeError("Invalid writableType specified");
					const m = Tt(c, 0), R = Gt(c), y = Tt(u, 1), C = Gt(u);
					let P;
					const B = A((ae) => {
						P = ae;
					});
					Ts(this, B, y, C, m, R), Ps(this, d), d.start !== void 0 ? P(d.start(this._transformStreamController)) : P(void 0);
				}
				get readable() {
					if (!oi(this)) throw li("readable");
					return this._readable;
				}
				get writable() {
					if (!oi(this)) throw li("writable");
					return this._writable;
				}
			};
			n$1(An, "TransformStream");
			let tt = An;
			Object.defineProperties(tt.prototype, {
				readable: { enumerable: !0 },
				writable: { enumerable: !0 }
			}), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(tt.prototype, Symbol.toStringTag, {
				value: "TransformStream",
				configurable: !0
			});
			function Ts(e, t$1, r, s, u, c) {
				function d() {
					return t$1;
				}
				n$1(d, "startAlgorithm");
				function m(B) {
					return As(e, B);
				}
				n$1(m, "writeAlgorithm");
				function R(B) {
					return Bs(e, B);
				}
				n$1(R, "abortAlgorithm");
				function y() {
					return ks(e);
				}
				n$1(y, "closeAlgorithm"), e._writable = Ea(d, m, y, R, r, s);
				function C() {
					return Ws(e);
				}
				n$1(C, "pullAlgorithm");
				function P(B) {
					return qs(e, B);
				}
				n$1(P, "cancelAlgorithm"), e._readable = Et(d, C, P, u, c), e._backpressure = void 0, e._backpressureChangePromise = void 0, e._backpressureChangePromise_resolve = void 0, sr(e, !0), e._transformStreamController = void 0;
			}
			n$1(Ts, "InitializeTransformStream");
			function oi(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? !1 : e instanceof tt;
			}
			n$1(oi, "IsTransformStream");
			function ii(e, t$1) {
				oe(e._readable._readableStreamController, t$1), dn(e, t$1);
			}
			n$1(ii, "TransformStreamError");
			function dn(e, t$1) {
				ur(e._transformStreamController), Ct(e._writable._writableStreamController, t$1), hn(e);
			}
			n$1(dn, "TransformStreamErrorWritableAndUnblockWrite");
			function hn(e) {
				e._backpressure && sr(e, !1);
			}
			n$1(hn, "TransformStreamUnblockWrite");
			function sr(e, t$1) {
				e._backpressureChangePromise !== void 0 && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = A((r) => {
					e._backpressureChangePromise_resolve = r;
				}), e._backpressure = t$1;
			}
			n$1(sr, "TransformStreamSetBackpressure");
			const Bn = class Bn$1 {
				constructor() {
					throw new TypeError("Illegal constructor");
				}
				get desiredSize() {
					if (!lr(this)) throw fr("desiredSize");
					const t$1 = this._controlledTransformStream._readable._readableStreamController;
					return fn(t$1);
				}
				enqueue(t$1 = void 0) {
					if (!lr(this)) throw fr("enqueue");
					ai(this, t$1);
				}
				error(t$1 = void 0) {
					if (!lr(this)) throw fr("error");
					vs(this, t$1);
				}
				terminate() {
					if (!lr(this)) throw fr("terminate");
					Es(this);
				}
			};
			n$1(Bn, "TransformStreamDefaultController");
			let pe = Bn;
			Object.defineProperties(pe.prototype, {
				enqueue: { enumerable: !0 },
				error: { enumerable: !0 },
				terminate: { enumerable: !0 },
				desiredSize: { enumerable: !0 }
			}), h(pe.prototype.enqueue, "enqueue"), h(pe.prototype.error, "error"), h(pe.prototype.terminate, "terminate"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(pe.prototype, Symbol.toStringTag, {
				value: "TransformStreamDefaultController",
				configurable: !0
			});
			function lr(e) {
				return !l(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? !1 : e instanceof pe;
			}
			n$1(lr, "IsTransformStreamDefaultController");
			function Cs(e, t$1, r, s, u) {
				t$1._controlledTransformStream = e, e._transformStreamController = t$1, t$1._transformAlgorithm = r, t$1._flushAlgorithm = s, t$1._cancelAlgorithm = u, t$1._finishPromise = void 0, t$1._finishPromise_resolve = void 0, t$1._finishPromise_reject = void 0;
			}
			n$1(Cs, "SetUpTransformStreamDefaultController");
			function Ps(e, t$1) {
				const r = Object.create(pe.prototype);
				let s, u, c;
				t$1.transform !== void 0 ? s = n$1((d) => t$1.transform(d, r), "transformAlgorithm") : s = n$1((d) => {
					try {
						return ai(r, d), T(void 0);
					} catch (m) {
						return b(m);
					}
				}, "transformAlgorithm"), t$1.flush !== void 0 ? u = n$1(() => t$1.flush(r), "flushAlgorithm") : u = n$1(() => T(void 0), "flushAlgorithm"), t$1.cancel !== void 0 ? c = n$1((d) => t$1.cancel(d), "cancelAlgorithm") : c = n$1(() => T(void 0), "cancelAlgorithm"), Cs(e, r, s, u, c);
			}
			n$1(Ps, "SetUpTransformStreamDefaultControllerFromTransformer");
			function ur(e) {
				e._transformAlgorithm = void 0, e._flushAlgorithm = void 0, e._cancelAlgorithm = void 0;
			}
			n$1(ur, "TransformStreamDefaultControllerClearAlgorithms");
			function ai(e, t$1) {
				const r = e._controlledTransformStream, s = r._readable._readableStreamController;
				if (!Je(s)) throw new TypeError("Readable side is not in a state that permits enqueue");
				try {
					Ke(s, t$1);
				} catch (c) {
					throw dn(r, c), r._readable._storedError;
				}
				ts(s) !== r._backpressure && sr(r, !0);
			}
			n$1(ai, "TransformStreamDefaultControllerEnqueue");
			function vs(e, t$1) {
				ii(e._controlledTransformStream, t$1);
			}
			n$1(vs, "TransformStreamDefaultControllerError");
			function si(e, t$1) {
				return F(e._transformAlgorithm(t$1), void 0, (s) => {
					throw ii(e._controlledTransformStream, s), s;
				});
			}
			n$1(si, "TransformStreamDefaultControllerPerformTransform");
			function Es(e) {
				const t$1 = e._controlledTransformStream, r = t$1._readable._readableStreamController;
				De(r);
				dn(t$1, /* @__PURE__ */ new TypeError("TransformStream terminated"));
			}
			n$1(Es, "TransformStreamDefaultControllerTerminate");
			function As(e, t$1) {
				const r = e._transformStreamController;
				if (e._backpressure) {
					const s = e._backpressureChangePromise;
					return F(s, () => {
						const u = e._writable;
						if (u._state === "erroring") throw u._storedError;
						return si(r, t$1);
					});
				}
				return si(r, t$1);
			}
			n$1(As, "TransformStreamDefaultSinkWriteAlgorithm");
			function Bs(e, t$1) {
				const r = e._transformStreamController;
				if (r._finishPromise !== void 0) return r._finishPromise;
				const s = e._readable;
				r._finishPromise = A((c, d) => {
					r._finishPromise_resolve = c, r._finishPromise_reject = d;
				});
				const u = r._cancelAlgorithm(t$1);
				return ur(r), g(u, () => (s._state === "errored" ? rt(r, s._storedError) : (oe(s._readableStreamController, t$1), pn(r)), null), (c) => (oe(s._readableStreamController, c), rt(r, c), null)), r._finishPromise;
			}
			n$1(Bs, "TransformStreamDefaultSinkAbortAlgorithm");
			function ks(e) {
				const t$1 = e._transformStreamController;
				if (t$1._finishPromise !== void 0) return t$1._finishPromise;
				const r = e._readable;
				t$1._finishPromise = A((u, c) => {
					t$1._finishPromise_resolve = u, t$1._finishPromise_reject = c;
				});
				const s = t$1._flushAlgorithm();
				return ur(t$1), g(s, () => (r._state === "errored" ? rt(t$1, r._storedError) : (De(r._readableStreamController), pn(t$1)), null), (u) => (oe(r._readableStreamController, u), rt(t$1, u), null)), t$1._finishPromise;
			}
			n$1(ks, "TransformStreamDefaultSinkCloseAlgorithm");
			function Ws(e) {
				return sr(e, !1), e._backpressureChangePromise;
			}
			n$1(Ws, "TransformStreamDefaultSourcePullAlgorithm");
			function qs(e, t$1) {
				const r = e._transformStreamController;
				if (r._finishPromise !== void 0) return r._finishPromise;
				const s = e._writable;
				r._finishPromise = A((c, d) => {
					r._finishPromise_resolve = c, r._finishPromise_reject = d;
				});
				const u = r._cancelAlgorithm(t$1);
				return ur(r), g(u, () => (s._state === "errored" ? rt(r, s._storedError) : (Ct(s._writableStreamController, t$1), hn(e), pn(r)), null), (c) => (Ct(s._writableStreamController, c), hn(e), rt(r, c), null)), r._finishPromise;
			}
			n$1(qs, "TransformStreamDefaultSourceCancelAlgorithm");
			function fr(e) {
				return /* @__PURE__ */ new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
			}
			n$1(fr, "defaultControllerBrandCheckException");
			function pn(e) {
				e._finishPromise_resolve !== void 0 && (e._finishPromise_resolve(), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
			}
			n$1(pn, "defaultControllerFinishPromiseResolve");
			function rt(e, t$1) {
				e._finishPromise_reject !== void 0 && (Q(e._finishPromise), e._finishPromise_reject(t$1), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
			}
			n$1(rt, "defaultControllerFinishPromiseReject");
			function li(e) {
				return /* @__PURE__ */ new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
			}
			n$1(li, "streamBrandCheckException"), a.ByteLengthQueuingStrategy = Xe, a.CountQueuingStrategy = et, a.ReadableByteStreamController = te, a.ReadableStream = L, a.ReadableStreamBYOBReader = ce, a.ReadableStreamBYOBRequest = Re, a.ReadableStreamDefaultController = ne, a.ReadableStreamDefaultReader = fe, a.TransformStream = tt, a.TransformStreamDefaultController = pe, a.WritableStream = de, a.WritableStreamDefaultController = ke, a.WritableStreamDefaultWriter = re;
		});
	}(kt, kt.exports)), kt.exports;
}
n$1(Ns, "requirePonyfill_es2018");
var mi;
function Hs() {
	if (mi) return pi;
	mi = 1;
	const i = 65536;
	if (!globalThis.ReadableStream) try {
		const o$1 = __require("node:process"), { emitWarning: a } = o$1;
		try {
			o$1.emitWarning = () => {}, Object.assign(globalThis, __require("node:stream/web")), o$1.emitWarning = a;
		} catch (f$1) {
			throw o$1.emitWarning = a, f$1;
		}
	} catch {
		Object.assign(globalThis, Ns());
	}
	try {
		const { Blob: o$1 } = __require("buffer");
		o$1 && !o$1.prototype.stream && (o$1.prototype.stream = n$1(function(f$1) {
			let l = 0;
			const p = this;
			return new ReadableStream({
				type: "bytes",
				async pull(h) {
					const v = await p.slice(l, Math.min(p.size, l + i)).arrayBuffer();
					l += v.byteLength, h.enqueue(new Uint8Array(v)), l === p.size && h.close();
				}
			});
		}, "name"));
	} catch {}
	return pi;
}
n$1(Hs, "requireStreams"), Hs();
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ const yi = 65536;
async function* Wn(i, o$1 = !0) {
	for (const a of i) if ("stream" in a) yield* a.stream();
	else if (ArrayBuffer.isView(a)) if (o$1) {
		let f$1 = a.byteOffset;
		const l = a.byteOffset + a.byteLength;
		for (; f$1 !== l;) {
			const p = Math.min(l - f$1, yi), h = a.buffer.slice(f$1, f$1 + p);
			f$1 += h.byteLength, yield new Uint8Array(h);
		}
	} else yield a;
	else {
		let f$1 = 0, l = a;
		for (; f$1 !== l.size;) {
			const h = await l.slice(f$1, Math.min(l.size, f$1 + yi)).arrayBuffer();
			f$1 += h.byteLength, yield new Uint8Array(h);
		}
	}
}
n$1(Wn, "toIterator");
const gi = (ze = class {
	constructor(o$1 = [], a = {}) {
		be(this, ve, []);
		be(this, zt, "");
		be(this, bt, 0);
		be(this, Cr, "transparent");
		if (typeof o$1 != "object" || o$1 === null) throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
		if (typeof o$1[Symbol.iterator] != "function") throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
		if (typeof a != "object" && typeof a != "function") throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
		a === null && (a = {});
		const f$1 = new TextEncoder();
		for (const p of o$1) {
			let h;
			ArrayBuffer.isView(p) ? h = new Uint8Array(p.buffer.slice(p.byteOffset, p.byteOffset + p.byteLength)) : p instanceof ArrayBuffer ? h = new Uint8Array(p.slice(0)) : p instanceof ze ? h = p : h = f$1.encode(`${p}`), X(this, bt, O(this, bt) + (ArrayBuffer.isView(h) ? h.byteLength : h.size)), O(this, ve).push(h);
		}
		X(this, Cr, `${a.endings === void 0 ? "transparent" : a.endings}`);
		const l = a.type === void 0 ? "" : String(a.type);
		X(this, zt, /^[\x20-\x7E]*$/.test(l) ? l : "");
	}
	get size() {
		return O(this, bt);
	}
	get type() {
		return O(this, zt);
	}
	async text() {
		const o$1 = new TextDecoder();
		let a = "";
		for await (const f$1 of Wn(O(this, ve), !1)) a += o$1.decode(f$1, { stream: !0 });
		return a += o$1.decode(), a;
	}
	async arrayBuffer() {
		const o$1 = new Uint8Array(this.size);
		let a = 0;
		for await (const f$1 of Wn(O(this, ve), !1)) o$1.set(f$1, a), a += f$1.length;
		return o$1.buffer;
	}
	stream() {
		const o$1 = Wn(O(this, ve), !0);
		return new globalThis.ReadableStream({
			type: "bytes",
			async pull(a) {
				const f$1 = await o$1.next();
				f$1.done ? a.close() : a.enqueue(f$1.value);
			},
			async cancel() {
				await o$1.return();
			}
		});
	}
	slice(o$1 = 0, a = this.size, f$1 = "") {
		const { size: l } = this;
		let p = o$1 < 0 ? Math.max(l + o$1, 0) : Math.min(o$1, l), h = a < 0 ? Math.max(l + a, 0) : Math.min(a, l);
		const S = Math.max(h - p, 0), v = O(this, ve), w = [];
		let A = 0;
		for (const b of v) {
			if (A >= S) break;
			const q = ArrayBuffer.isView(b) ? b.byteLength : b.size;
			if (p && q <= p) p -= q, h -= q;
			else {
				let g;
				ArrayBuffer.isView(b) ? (g = b.subarray(p, Math.min(q, h)), A += g.byteLength) : (g = b.slice(p, Math.min(q, h)), A += g.size), h -= q, w.push(g), p = 0;
			}
		}
		const T = new ze([], { type: String(f$1).toLowerCase() });
		return X(T, bt, S), X(T, ve, w), T;
	}
	get [Symbol.toStringTag]() {
		return "Blob";
	}
	static [Symbol.hasInstance](o$1) {
		return o$1 && typeof o$1 == "object" && typeof o$1.constructor == "function" && (typeof o$1.stream == "function" || typeof o$1.arrayBuffer == "function") && /^(Blob|File)$/.test(o$1[Symbol.toStringTag]);
	}
}, ve = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), n$1(ze, "Blob"), ze);
Object.defineProperties(gi.prototype, {
	size: { enumerable: !0 },
	type: { enumerable: !0 },
	slice: { enumerable: !0 }
});
const ut = gi, qn = (mt = class extends ut {
	constructor(a, f$1, l = {}) {
		if (arguments.length < 2) throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
		super(a, l);
		be(this, It, 0);
		be(this, Ft, "");
		l === null && (l = {});
		const p = l.lastModified === void 0 ? Date.now() : Number(l.lastModified);
		Number.isNaN(p) || X(this, It, p), X(this, Ft, String(f$1));
	}
	get name() {
		return O(this, Ft);
	}
	get lastModified() {
		return O(this, It);
	}
	get [Symbol.toStringTag]() {
		return "File";
	}
	static [Symbol.hasInstance](a) {
		return !!a && a instanceof ut && /^(File)$/.test(a[Symbol.toStringTag]);
	}
}, It = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), n$1(mt, "File"), mt);
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ var { toStringTag: Wt, iterator: Qs, hasInstance: Ys } = Symbol, _i = Math.random, Gs = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), Si = n$1((i, o$1, a) => (i += "", /^(Blob|File)$/.test(o$1 && o$1[Wt]) ? [(a = a !== void 0 ? a + "" : o$1[Wt] == "File" ? o$1.name : "blob", i), o$1.name !== a || o$1[Wt] == "blob" ? new qn([o$1], a, o$1) : o$1] : [i, o$1 + ""]), "f"), On = n$1((i, o$1) => (o$1 ? i : i.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1"), Ue = n$1((i, o$1, a) => {
	if (o$1.length < a) throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a} arguments required, but only ${o$1.length} present.`);
}, "x");
const br = (yt = class {
	constructor(...o$1) {
		be(this, ee, []);
		if (o$1.length) throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
	}
	get [Wt]() {
		return "FormData";
	}
	[Qs]() {
		return this.entries();
	}
	static [Ys](o$1) {
		return o$1 && typeof o$1 == "object" && o$1[Wt] === "FormData" && !Gs.some((a) => typeof o$1[a] != "function");
	}
	append(...o$1) {
		Ue("append", arguments, 2), O(this, ee).push(Si(...o$1));
	}
	delete(o$1) {
		Ue("delete", arguments, 1), o$1 += "", X(this, ee, O(this, ee).filter(([a]) => a !== o$1));
	}
	get(o$1) {
		Ue("get", arguments, 1), o$1 += "";
		for (var a = O(this, ee), f$1 = a.length, l = 0; l < f$1; l++) if (a[l][0] === o$1) return a[l][1];
		return null;
	}
	getAll(o$1, a) {
		return Ue("getAll", arguments, 1), a = [], o$1 += "", O(this, ee).forEach((f$1) => f$1[0] === o$1 && a.push(f$1[1])), a;
	}
	has(o$1) {
		return Ue("has", arguments, 1), o$1 += "", O(this, ee).some((a) => a[0] === o$1);
	}
	forEach(o$1, a) {
		Ue("forEach", arguments, 1);
		for (var [f$1, l] of this) o$1.call(a, l, f$1, this);
	}
	set(...o$1) {
		Ue("set", arguments, 2);
		var a = [], f$1 = !0;
		o$1 = Si(...o$1), O(this, ee).forEach((l) => {
			l[0] === o$1[0] ? f$1 && (f$1 = !a.push(o$1)) : a.push(l);
		}), f$1 && a.push(o$1), X(this, ee, a);
	}
	*entries() {
		yield* O(this, ee);
	}
	*keys() {
		for (var [o$1] of this) yield o$1;
	}
	*values() {
		for (var [, o$1] of this) yield o$1;
	}
}, ee = /* @__PURE__ */ new WeakMap(), n$1(yt, "FormData"), yt);
function Zs(i, o$1 = ut) {
	var a = `${_i()}${_i()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), f$1 = [], l = `--${a}\r
Content-Disposition: form-data; name="`;
	return i.forEach((p, h) => typeof p == "string" ? f$1.push(l + On(h) + `"\r
\r
${p.replace(/\r(?!\n)|(?<!\r)\n/g, `\r
`)}\r
`) : f$1.push(l + On(h) + `"; filename="${On(p.name, 1)}"\r
Content-Type: ${p.type || "application/octet-stream"}\r
\r
`, p, `\r
`)), f$1.push(`--${a}--`), new o$1(f$1, { type: "multipart/form-data; boundary=" + a });
}
n$1(Zs, "formDataToBlob");
const Un = class Un$1 extends Error {
	constructor(o$1, a) {
		super(o$1), Error.captureStackTrace(this, this.constructor), this.type = a;
	}
	get name() {
		return this.constructor.name;
	}
	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}
};
n$1(Un, "FetchBaseError");
let ft = Un;
const xn = class xn$1 extends ft {
	constructor(o$1, a, f$1) {
		super(o$1, a), f$1 && (this.code = this.errno = f$1.code, this.erroredSysCall = f$1.syscall);
	}
};
n$1(xn, "FetchError");
let G = xn;
const mr = Symbol.toStringTag, wi = n$1((i) => typeof i == "object" && typeof i.append == "function" && typeof i.delete == "function" && typeof i.get == "function" && typeof i.getAll == "function" && typeof i.has == "function" && typeof i.set == "function" && typeof i.sort == "function" && i[mr] === "URLSearchParams", "isURLSearchParameters"), yr = n$1((i) => i && typeof i == "object" && typeof i.arrayBuffer == "function" && typeof i.type == "string" && typeof i.stream == "function" && typeof i.constructor == "function" && /^(Blob|File)$/.test(i[mr]), "isBlob"), Ks = n$1((i) => typeof i == "object" && (i[mr] === "AbortSignal" || i[mr] === "EventTarget"), "isAbortSignal"), Js = n$1((i, o$1) => {
	const a = new URL(o$1).hostname, f$1 = new URL(i).hostname;
	return a === f$1 || a.endsWith(`.${f$1}`);
}, "isDomainOrSubdomain"), Xs = n$1((i, o$1) => {
	return new URL(o$1).protocol === new URL(i).protocol;
}, "isSameProtocol"), el = promisify(me.pipeline), H = Symbol("Body internals"), Nn = class Nn$1 {
	constructor(o$1, { size: a = 0 } = {}) {
		let f$1 = null;
		o$1 === null ? o$1 = null : wi(o$1) ? o$1 = Buffer$1.from(o$1.toString()) : yr(o$1) || Buffer$1.isBuffer(o$1) || (types.isAnyArrayBuffer(o$1) ? o$1 = Buffer$1.from(o$1) : ArrayBuffer.isView(o$1) ? o$1 = Buffer$1.from(o$1.buffer, o$1.byteOffset, o$1.byteLength) : o$1 instanceof me || (o$1 instanceof br ? (o$1 = Zs(o$1), f$1 = o$1.type.split("=")[1]) : o$1 = Buffer$1.from(String(o$1))));
		let l = o$1;
		Buffer$1.isBuffer(o$1) ? l = me.Readable.from(o$1) : yr(o$1) && (l = me.Readable.from(o$1.stream())), this[H] = {
			body: o$1,
			stream: l,
			boundary: f$1,
			disturbed: !1,
			error: null
		}, this.size = a, o$1 instanceof me && o$1.on("error", (p) => {
			const h = p instanceof ft ? p : new G(`Invalid response body while trying to fetch ${this.url}: ${p.message}`, "system", p);
			this[H].error = h;
		});
	}
	get body() {
		return this[H].stream;
	}
	get bodyUsed() {
		return this[H].disturbed;
	}
	async arrayBuffer() {
		const { buffer: o$1, byteOffset: a, byteLength: f$1 } = await zn(this);
		return o$1.slice(a, a + f$1);
	}
	async formData() {
		const o$1 = this.headers.get("content-type");
		if (o$1.startsWith("application/x-www-form-urlencoded")) {
			const f$1 = new br(), l = new URLSearchParams(await this.text());
			for (const [p, h] of l) f$1.append(p, h);
			return f$1;
		}
		const { toFormData: a } = await import("./multipart-parser-BrN-emv6.mjs");
		return a(this.body, o$1);
	}
	async blob() {
		const o$1 = this.headers && this.headers.get("content-type") || this[H].body && this[H].body.type || "";
		return new ut([await this.arrayBuffer()], { type: o$1 });
	}
	async json() {
		const o$1 = await this.text();
		return JSON.parse(o$1);
	}
	async text() {
		const o$1 = await zn(this);
		return new TextDecoder().decode(o$1);
	}
	buffer() {
		return zn(this);
	}
};
n$1(Nn, "Body");
let xe = Nn;
xe.prototype.buffer = deprecate(xe.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(xe.prototype, {
	body: { enumerable: !0 },
	bodyUsed: { enumerable: !0 },
	arrayBuffer: { enumerable: !0 },
	blob: { enumerable: !0 },
	json: { enumerable: !0 },
	text: { enumerable: !0 },
	data: { get: deprecate(() => {}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") }
});
async function zn(i) {
	if (i[H].disturbed) throw new TypeError(`body used already for: ${i.url}`);
	if (i[H].disturbed = !0, i[H].error) throw i[H].error;
	const { body: o$1 } = i;
	if (o$1 === null) return Buffer$1.alloc(0);
	if (!(o$1 instanceof me)) return Buffer$1.alloc(0);
	const a = [];
	let f$1 = 0;
	try {
		for await (const l of o$1) {
			if (i.size > 0 && f$1 + l.length > i.size) {
				const p = new G(`content size at ${i.url} over limit: ${i.size}`, "max-size");
				throw o$1.destroy(p), p;
			}
			f$1 += l.length, a.push(l);
		}
	} catch (l) {
		throw l instanceof ft ? l : new G(`Invalid response body while trying to fetch ${i.url}: ${l.message}`, "system", l);
	}
	if (o$1.readableEnded === !0 || o$1._readableState.ended === !0) try {
		return a.every((l) => typeof l == "string") ? Buffer$1.from(a.join("")) : Buffer$1.concat(a, f$1);
	} catch (l) {
		throw new G(`Could not create Buffer from response body for ${i.url}: ${l.message}`, "system", l);
	}
	else throw new G(`Premature close of server response while trying to fetch ${i.url}`);
}
n$1(zn, "consumeBody");
const In = n$1((i, o$1) => {
	let a, f$1, { body: l } = i[H];
	if (i.bodyUsed) throw new Error("cannot clone body after it is used");
	return l instanceof me && typeof l.getBoundary != "function" && (a = new PassThrough({ highWaterMark: o$1 }), f$1 = new PassThrough({ highWaterMark: o$1 }), l.pipe(a), l.pipe(f$1), i[H].stream = a, l = f$1), l;
}, "clone"), tl = deprecate((i) => i.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167"), Ri = n$1((i, o$1) => i === null ? null : typeof i == "string" ? "text/plain;charset=UTF-8" : wi(i) ? "application/x-www-form-urlencoded;charset=UTF-8" : yr(i) ? i.type || null : Buffer$1.isBuffer(i) || types.isAnyArrayBuffer(i) || ArrayBuffer.isView(i) ? null : i instanceof br ? `multipart/form-data; boundary=${o$1[H].boundary}` : i && typeof i.getBoundary == "function" ? `multipart/form-data;boundary=${tl(i)}` : i instanceof me ? null : "text/plain;charset=UTF-8", "extractContentType"), rl = n$1((i) => {
	const { body: o$1 } = i[H];
	return o$1 === null ? 0 : yr(o$1) ? o$1.size : Buffer$1.isBuffer(o$1) ? o$1.length : o$1 && typeof o$1.getLengthSync == "function" && o$1.hasKnownLength && o$1.hasKnownLength() ? o$1.getLengthSync() : null;
}, "getTotalBytes"), nl = n$1(async (i, { body: o$1 }) => {
	o$1 === null ? i.end() : await el(o$1, i);
}, "writeToStream"), gr = typeof nodeHTTP.validateHeaderName == "function" ? nodeHTTP.validateHeaderName : (i) => {
	if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)) {
		const o$1 = /* @__PURE__ */ new TypeError(`Header name must be a valid HTTP token [${i}]`);
		throw Object.defineProperty(o$1, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), o$1;
	}
}, Fn = typeof nodeHTTP.validateHeaderValue == "function" ? nodeHTTP.validateHeaderValue : (i, o$1) => {
	if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o$1)) {
		const a = /* @__PURE__ */ new TypeError(`Invalid character in header content ["${i}"]`);
		throw Object.defineProperty(a, "code", { value: "ERR_INVALID_CHAR" }), a;
	}
}, Pr = class Pr$1 extends URLSearchParams {
	constructor(o$1) {
		let a = [];
		if (o$1 instanceof Pr$1) {
			const f$1 = o$1.raw();
			for (const [l, p] of Object.entries(f$1)) a.push(...p.map((h) => [l, h]));
		} else if (o$1 != null) if (typeof o$1 == "object" && !types.isBoxedPrimitive(o$1)) {
			const f$1 = o$1[Symbol.iterator];
			if (f$1 == null) a.push(...Object.entries(o$1));
			else {
				if (typeof f$1 != "function") throw new TypeError("Header pairs must be iterable");
				a = [...o$1].map((l) => {
					if (typeof l != "object" || types.isBoxedPrimitive(l)) throw new TypeError("Each header pair must be an iterable object");
					return [...l];
				}).map((l) => {
					if (l.length !== 2) throw new TypeError("Each header pair must be a name/value tuple");
					return [...l];
				});
			}
		} else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
		return a = a.length > 0 ? a.map(([f$1, l]) => (gr(f$1), Fn(f$1, String(l)), [String(f$1).toLowerCase(), String(l)])) : void 0, super(a), new Proxy(this, { get(f$1, l, p) {
			switch (l) {
				case "append":
				case "set": return (h, S) => (gr(h), Fn(h, String(S)), URLSearchParams.prototype[l].call(f$1, String(h).toLowerCase(), String(S)));
				case "delete":
				case "has":
				case "getAll": return (h) => (gr(h), URLSearchParams.prototype[l].call(f$1, String(h).toLowerCase()));
				case "keys": return () => (f$1.sort(), new Set(URLSearchParams.prototype.keys.call(f$1)).keys());
				default: return Reflect.get(f$1, l, p);
			}
		} });
	}
	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}
	toString() {
		return Object.prototype.toString.call(this);
	}
	get(o$1) {
		const a = this.getAll(o$1);
		if (a.length === 0) return null;
		let f$1 = a.join(", ");
		return /^content-encoding$/i.test(o$1) && (f$1 = f$1.toLowerCase()), f$1;
	}
	forEach(o$1, a = void 0) {
		for (const f$1 of this.keys()) Reflect.apply(o$1, a, [
			this.get(f$1),
			f$1,
			this
		]);
	}
	*values() {
		for (const o$1 of this.keys()) yield this.get(o$1);
	}
	*entries() {
		for (const o$1 of this.keys()) yield [o$1, this.get(o$1)];
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	raw() {
		return [...this.keys()].reduce((o$1, a) => (o$1[a] = this.getAll(a), o$1), {});
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return [...this.keys()].reduce((o$1, a) => {
			const f$1 = this.getAll(a);
			return a === "host" ? o$1[a] = f$1[0] : o$1[a] = f$1.length > 1 ? f$1 : f$1[0], o$1;
		}, {});
	}
};
n$1(Pr, "Headers");
let ye = Pr;
Object.defineProperties(ye.prototype, [
	"get",
	"entries",
	"forEach",
	"values"
].reduce((i, o$1) => (i[o$1] = { enumerable: !0 }, i), {}));
function ol(i = []) {
	return new ye(i.reduce((o$1, a, f$1, l) => (f$1 % 2 === 0 && o$1.push(l.slice(f$1, f$1 + 2)), o$1), []).filter(([o$1, a]) => {
		try {
			return gr(o$1), Fn(o$1, String(a)), !0;
		} catch {
			return !1;
		}
	}));
}
n$1(ol, "fromRawHeaders");
const il = new Set([
	301,
	302,
	303,
	307,
	308
]), jn = n$1((i) => il.has(i), "isRedirect"), se = Symbol("Response internals"), Ne = class Ne$1 extends xe {
	constructor(o$1 = null, a = {}) {
		super(o$1, a);
		const f$1 = a.status != null ? a.status : 200, l = new ye(a.headers);
		if (o$1 !== null && !l.has("Content-Type")) {
			const p = Ri(o$1, this);
			p && l.append("Content-Type", p);
		}
		this[se] = {
			type: "default",
			url: a.url,
			status: f$1,
			statusText: a.statusText || "",
			headers: l,
			counter: a.counter,
			highWaterMark: a.highWaterMark
		};
	}
	get type() {
		return this[se].type;
	}
	get url() {
		return this[se].url || "";
	}
	get status() {
		return this[se].status;
	}
	get ok() {
		return this[se].status >= 200 && this[se].status < 300;
	}
	get redirected() {
		return this[se].counter > 0;
	}
	get statusText() {
		return this[se].statusText;
	}
	get headers() {
		return this[se].headers;
	}
	get highWaterMark() {
		return this[se].highWaterMark;
	}
	clone() {
		return new Ne$1(In(this, this.highWaterMark), {
			type: this.type,
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected,
			size: this.size,
			highWaterMark: this.highWaterMark
		});
	}
	static redirect(o$1, a = 302) {
		if (!jn(a)) throw new RangeError("Failed to execute \"redirect\" on \"response\": Invalid status code");
		return new Ne$1(null, {
			headers: { location: new URL(o$1).toString() },
			status: a
		});
	}
	static error() {
		const o$1 = new Ne$1(null, {
			status: 0,
			statusText: ""
		});
		return o$1[se].type = "error", o$1;
	}
	static json(o$1 = void 0, a = {}) {
		const f$1 = JSON.stringify(o$1);
		if (f$1 === void 0) throw new TypeError("data is not JSON serializable");
		const l = new ye(a && a.headers);
		return l.has("content-type") || l.set("content-type", "application/json"), new Ne$1(f$1, {
			...a,
			headers: l
		});
	}
	get [Symbol.toStringTag]() {
		return "Response";
	}
};
n$1(Ne, "Response");
let le = Ne;
Object.defineProperties(le.prototype, {
	type: { enumerable: !0 },
	url: { enumerable: !0 },
	status: { enumerable: !0 },
	ok: { enumerable: !0 },
	redirected: { enumerable: !0 },
	statusText: { enumerable: !0 },
	headers: { enumerable: !0 },
	clone: { enumerable: !0 }
});
const al = n$1((i) => {
	if (i.search) return i.search;
	const o$1 = i.href.length - 1, a = i.hash || (i.href[o$1] === "#" ? "#" : "");
	return i.href[o$1 - a.length] === "?" ? "?" : "";
}, "getSearch");
function Ti(i, o$1 = !1) {
	return i == null || (i = new URL(i), /^(about|blob|data):$/.test(i.protocol)) ? "no-referrer" : (i.username = "", i.password = "", i.hash = "", o$1 && (i.pathname = "", i.search = ""), i);
}
n$1(Ti, "stripURLForUseAsAReferrer");
const Ci = new Set([
	"",
	"no-referrer",
	"no-referrer-when-downgrade",
	"same-origin",
	"origin",
	"strict-origin",
	"origin-when-cross-origin",
	"strict-origin-when-cross-origin",
	"unsafe-url"
]), sl = "strict-origin-when-cross-origin";
function ll(i) {
	if (!Ci.has(i)) throw new TypeError(`Invalid referrerPolicy: ${i}`);
	return i;
}
n$1(ll, "validateReferrerPolicy");
function ul(i) {
	if (/^(http|ws)s:$/.test(i.protocol)) return !0;
	const o$1 = i.host.replace(/(^\[)|(]$)/g, ""), a = isIP(o$1);
	return a === 4 && /^127\./.test(o$1) || a === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o$1) ? !0 : i.host === "localhost" || i.host.endsWith(".localhost") ? !1 : i.protocol === "file:";
}
n$1(ul, "isOriginPotentiallyTrustworthy");
function ct(i) {
	return /^about:(blank|srcdoc)$/.test(i) || i.protocol === "data:" || /^(blob|filesystem):$/.test(i.protocol) ? !0 : ul(i);
}
n$1(ct, "isUrlPotentiallyTrustworthy");
function fl(i, { referrerURLCallback: o$1, referrerOriginCallback: a } = {}) {
	if (i.referrer === "no-referrer" || i.referrerPolicy === "") return null;
	const f$1 = i.referrerPolicy;
	if (i.referrer === "about:client") return "no-referrer";
	const l = i.referrer;
	let p = Ti(l), h = Ti(l, !0);
	p.toString().length > 4096 && (p = h), o$1 && (p = o$1(p)), a && (h = a(h));
	const S = new URL(i.url);
	switch (f$1) {
		case "no-referrer": return "no-referrer";
		case "origin": return h;
		case "unsafe-url": return p;
		case "strict-origin": return ct(p) && !ct(S) ? "no-referrer" : h.toString();
		case "strict-origin-when-cross-origin": return p.origin === S.origin ? p : ct(p) && !ct(S) ? "no-referrer" : h;
		case "same-origin": return p.origin === S.origin ? p : "no-referrer";
		case "origin-when-cross-origin": return p.origin === S.origin ? p : h;
		case "no-referrer-when-downgrade": return ct(p) && !ct(S) ? "no-referrer" : p;
		default: throw new TypeError(`Invalid referrerPolicy: ${f$1}`);
	}
}
n$1(fl, "determineRequestsReferrer");
function cl(i) {
	const o$1 = (i.get("referrer-policy") || "").split(/[,\s]+/);
	let a = "";
	for (const f$1 of o$1) f$1 && Ci.has(f$1) && (a = f$1);
	return a;
}
n$1(cl, "parseReferrerPolicyFromHeader");
const $ = Symbol("Request internals"), qt = n$1((i) => typeof i == "object" && typeof i[$] == "object", "isRequest"), dl = deprecate(() => {}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)"), vr = class vr$1 extends xe {
	constructor(o$1, a = {}) {
		let f$1;
		if (qt(o$1) ? f$1 = new URL(o$1.url) : (f$1 = new URL(o$1), o$1 = {}), f$1.username !== "" || f$1.password !== "") throw new TypeError(`${f$1} is an url with embedded credentials.`);
		let l = a.method || o$1.method || "GET";
		if (/^(delete|get|head|options|post|put)$/i.test(l) && (l = l.toUpperCase()), !qt(a) && "data" in a && dl(), (a.body != null || qt(o$1) && o$1.body !== null) && (l === "GET" || l === "HEAD")) throw new TypeError("Request with GET/HEAD method cannot have body");
		const p = a.body ? a.body : qt(o$1) && o$1.body !== null ? In(o$1) : null;
		super(p, { size: a.size || o$1.size || 0 });
		const h = new ye(a.headers || o$1.headers || {});
		if (p !== null && !h.has("Content-Type")) {
			const w = Ri(p, this);
			w && h.set("Content-Type", w);
		}
		let S = qt(o$1) ? o$1.signal : null;
		if ("signal" in a && (S = a.signal), S != null && !Ks(S)) throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
		let v = a.referrer == null ? o$1.referrer : a.referrer;
		if (v === "") v = "no-referrer";
		else if (v) {
			const w = new URL(v);
			v = /^about:(\/\/)?client$/.test(w) ? "client" : w;
		} else v = void 0;
		this[$] = {
			method: l,
			redirect: a.redirect || o$1.redirect || "follow",
			headers: h,
			parsedURL: f$1,
			signal: S,
			referrer: v
		}, this.follow = a.follow === void 0 ? o$1.follow === void 0 ? 20 : o$1.follow : a.follow, this.compress = a.compress === void 0 ? o$1.compress === void 0 ? !0 : o$1.compress : a.compress, this.counter = a.counter || o$1.counter || 0, this.agent = a.agent || o$1.agent, this.highWaterMark = a.highWaterMark || o$1.highWaterMark || 16384, this.insecureHTTPParser = a.insecureHTTPParser || o$1.insecureHTTPParser || !1, this.referrerPolicy = a.referrerPolicy || o$1.referrerPolicy || "";
	}
	get method() {
		return this[$].method;
	}
	get url() {
		return format$1(this[$].parsedURL);
	}
	get headers() {
		return this[$].headers;
	}
	get redirect() {
		return this[$].redirect;
	}
	get signal() {
		return this[$].signal;
	}
	get referrer() {
		if (this[$].referrer === "no-referrer") return "";
		if (this[$].referrer === "client") return "about:client";
		if (this[$].referrer) return this[$].referrer.toString();
	}
	get referrerPolicy() {
		return this[$].referrerPolicy;
	}
	set referrerPolicy(o$1) {
		this[$].referrerPolicy = ll(o$1);
	}
	clone() {
		return new vr$1(this);
	}
	get [Symbol.toStringTag]() {
		return "Request";
	}
};
n$1(vr, "Request");
let dt = vr;
Object.defineProperties(dt.prototype, {
	method: { enumerable: !0 },
	url: { enumerable: !0 },
	headers: { enumerable: !0 },
	redirect: { enumerable: !0 },
	clone: { enumerable: !0 },
	signal: { enumerable: !0 },
	referrer: { enumerable: !0 },
	referrerPolicy: { enumerable: !0 }
});
const hl = n$1((i) => {
	const { parsedURL: o$1 } = i[$], a = new ye(i[$].headers);
	a.has("Accept") || a.set("Accept", "*/*");
	let f$1 = null;
	if (i.body === null && /^(post|put)$/i.test(i.method) && (f$1 = "0"), i.body !== null) {
		const S = rl(i);
		typeof S == "number" && !Number.isNaN(S) && (f$1 = String(S));
	}
	f$1 && a.set("Content-Length", f$1), i.referrerPolicy === "" && (i.referrerPolicy = sl), i.referrer && i.referrer !== "no-referrer" ? i[$].referrer = fl(i) : i[$].referrer = "no-referrer", i[$].referrer instanceof URL && a.set("Referer", i.referrer), a.has("User-Agent") || a.set("User-Agent", "node-fetch"), i.compress && !a.has("Accept-Encoding") && a.set("Accept-Encoding", "gzip, deflate, br");
	let { agent: l } = i;
	typeof l == "function" && (l = l(o$1));
	const p = al(o$1);
	return {
		parsedURL: o$1,
		options: {
			path: o$1.pathname + p,
			method: i.method,
			headers: a[Symbol.for("nodejs.util.inspect.custom")](),
			insecureHTTPParser: i.insecureHTTPParser,
			agent: l
		}
	};
}, "getNodeRequestOptions"), Hn = class Hn$1 extends ft {
	constructor(o$1, a = "aborted") {
		super(o$1, a);
	}
};
n$1(Hn, "AbortError");
let _r = Hn;
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ var Ln, Pi;
function pl() {
	if (Pi) return Ln;
	if (Pi = 1, !globalThis.DOMException) try {
		const { MessageChannel: i } = __require("worker_threads"), o$1 = new i().port1, a = /* @__PURE__ */ new ArrayBuffer();
		o$1.postMessage(a, [a, a]);
	} catch (i) {
		i.constructor.name === "DOMException" && (globalThis.DOMException = i.constructor);
	}
	return Ln = globalThis.DOMException, Ln;
}
n$1(pl, "requireNodeDomexception");
const ml = f(pl()), { stat: $n } = promises, yl = n$1((i, o$1) => vi(statSync(i), i, o$1), "blobFromSync"), gl = n$1((i, o$1) => $n(i).then((a) => vi(a, i, o$1)), "blobFrom"), _l = n$1((i, o$1) => $n(i).then((a) => Ei(a, i, o$1)), "fileFrom"), Sl = n$1((i, o$1) => Ei(statSync(i), i, o$1), "fileFromSync"), vi = n$1((i, o$1, a = "") => new ut([new Sr({
	path: o$1,
	size: i.size,
	lastModified: i.mtimeMs,
	start: 0
})], { type: a }), "fromBlob"), Ei = n$1((i, o$1, a = "") => new qn([new Sr({
	path: o$1,
	size: i.size,
	lastModified: i.mtimeMs,
	start: 0
})], basename(o$1), {
	type: a,
	lastModified: i.mtimeMs
}), "fromFile"), Er = class Er$1 {
	constructor(o$1) {
		be(this, He);
		be(this, Ve);
		X(this, He, o$1.path), X(this, Ve, o$1.start), this.size = o$1.size, this.lastModified = o$1.lastModified;
	}
	slice(o$1, a) {
		return new Er$1({
			path: O(this, He),
			lastModified: this.lastModified,
			size: a - o$1,
			start: O(this, Ve) + o$1
		});
	}
	async *stream() {
		const { mtimeMs: o$1 } = await $n(O(this, He));
		if (o$1 > this.lastModified) throw new ml("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
		yield* createReadStream(O(this, He), {
			start: O(this, Ve),
			end: O(this, Ve) + this.size - 1
		});
	}
	get [Symbol.toStringTag]() {
		return "Blob";
	}
};
He = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), n$1(Er, "BlobDataItem");
let Sr = Er;
const wl = new Set([
	"data:",
	"http:",
	"https:"
]);
async function Ai(i, o$1) {
	return new Promise((a, f$1) => {
		const l = new dt(i, o$1), { parsedURL: p, options: h } = hl(l);
		if (!wl.has(p.protocol)) throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${p.protocol.replace(/:$/, "")}" is not supported.`);
		if (p.protocol === "data:") {
			const g = Us(l.url);
			a(new le(g, { headers: { "Content-Type": g.typeFull } }));
			return;
		}
		const S = (p.protocol === "https:" ? nodeHTTPS : nodeHTTP).request, { signal: v } = l;
		let w = null;
		const A = n$1(() => {
			const g = new _r("The operation was aborted.");
			f$1(g), l.body && l.body instanceof me.Readable && l.body.destroy(g), !(!w || !w.body) && w.body.emit("error", g);
		}, "abort");
		if (v && v.aborted) {
			A();
			return;
		}
		const T = n$1(() => {
			A(), q();
		}, "abortAndFinalize"), b = S(p.toString(), h);
		v && v.addEventListener("abort", T);
		const q = n$1(() => {
			b.abort(), v && v.removeEventListener("abort", T);
		}, "finalize");
		b.on("error", (g) => {
			f$1(new G(`request to ${l.url} failed, reason: ${g.message}`, "system", g)), q();
		}), Rl(b, (g) => {
			w && w.body && w.body.destroy(g);
		}), process.version < "v14" && b.on("socket", (g) => {
			let V;
			g.prependListener("end", () => {
				V = g._eventsCount;
			}), g.prependListener("close", (I) => {
				if (w && V < g._eventsCount && !I) {
					const F = /* @__PURE__ */ new Error("Premature close");
					F.code = "ERR_STREAM_PREMATURE_CLOSE", w.body.emit("error", F);
				}
			});
		}), b.on("response", (g) => {
			b.setTimeout(0);
			const V = ol(g.rawHeaders);
			if (jn(g.statusCode)) {
				const z = V.get("Location");
				let j = null;
				try {
					j = z === null ? null : new URL(z, l.url);
				} catch {
					if (l.redirect !== "manual") {
						f$1(new G(`uri requested responds with an invalid redirect URL: ${z}`, "invalid-redirect")), q();
						return;
					}
				}
				switch (l.redirect) {
					case "error":
						f$1(new G(`uri requested responds with a redirect, redirect mode is set to error: ${l.url}`, "no-redirect")), q();
						return;
					case "manual": break;
					case "follow": {
						if (j === null) break;
						if (l.counter >= l.follow) {
							f$1(new G(`maximum redirect reached at: ${l.url}`, "max-redirect")), q();
							return;
						}
						const U = {
							headers: new ye(l.headers),
							follow: l.follow,
							counter: l.counter + 1,
							agent: l.agent,
							compress: l.compress,
							method: l.method,
							body: In(l),
							signal: l.signal,
							size: l.size,
							referrer: l.referrer,
							referrerPolicy: l.referrerPolicy
						};
						if (!Js(l.url, j) || !Xs(l.url, j)) for (const jt of [
							"authorization",
							"www-authenticate",
							"cookie",
							"cookie2"
						]) U.headers.delete(jt);
						if (g.statusCode !== 303 && l.body && o$1.body instanceof me.Readable) {
							f$1(new G("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), q();
							return;
						}
						(g.statusCode === 303 || (g.statusCode === 301 || g.statusCode === 302) && l.method === "POST") && (U.method = "GET", U.body = void 0, U.headers.delete("content-length"));
						const D = cl(V);
						D && (U.referrerPolicy = D), a(Ai(new dt(j, U))), q();
						return;
					}
					default: return f$1(/* @__PURE__ */ new TypeError(`Redirect option '${l.redirect}' is not a valid value of RequestRedirect`));
				}
			}
			v && g.once("end", () => {
				v.removeEventListener("abort", T);
			});
			let I = pipeline(g, new PassThrough(), (z) => {
				z && f$1(z);
			});
			process.version < "v12.10" && g.on("aborted", T);
			const F = {
				url: l.url,
				status: g.statusCode,
				statusText: g.statusMessage,
				headers: V,
				size: l.size,
				counter: l.counter,
				highWaterMark: l.highWaterMark
			}, Q = V.get("Content-Encoding");
			if (!l.compress || l.method === "HEAD" || Q === null || g.statusCode === 204 || g.statusCode === 304) {
				w = new le(I, F), a(w);
				return;
			}
			const ge = {
				flush: st.Z_SYNC_FLUSH,
				finishFlush: st.Z_SYNC_FLUSH
			};
			if (Q === "gzip" || Q === "x-gzip") {
				I = pipeline(I, st.createGunzip(ge), (z) => {
					z && f$1(z);
				}), w = new le(I, F), a(w);
				return;
			}
			if (Q === "deflate" || Q === "x-deflate") {
				const z = pipeline(g, new PassThrough(), (j) => {
					j && f$1(j);
				});
				z.once("data", (j) => {
					(j[0] & 15) === 8 ? I = pipeline(I, st.createInflate(), (U) => {
						U && f$1(U);
					}) : I = pipeline(I, st.createInflateRaw(), (U) => {
						U && f$1(U);
					}), w = new le(I, F), a(w);
				}), z.once("end", () => {
					w || (w = new le(I, F), a(w));
				});
				return;
			}
			if (Q === "br") {
				I = pipeline(I, st.createBrotliDecompress(), (z) => {
					z && f$1(z);
				}), w = new le(I, F), a(w);
				return;
			}
			w = new le(I, F), a(w);
		}), nl(b, l).catch(f$1);
	});
}
n$1(Ai, "fetch$1");
function Rl(i, o$1) {
	const a = Buffer$1.from(`0\r
\r
`);
	let f$1 = !1, l = !1, p;
	i.on("response", (h) => {
		const { headers: S } = h;
		f$1 = S["transfer-encoding"] === "chunked" && !S["content-length"];
	}), i.on("socket", (h) => {
		const S = n$1(() => {
			if (f$1 && !l) {
				const w = /* @__PURE__ */ new Error("Premature close");
				w.code = "ERR_STREAM_PREMATURE_CLOSE", o$1(w);
			}
		}, "onSocketClose"), v = n$1((w) => {
			l = Buffer$1.compare(w.slice(-5), a) === 0, !l && p && (l = Buffer$1.compare(p.slice(-3), a.slice(0, 3)) === 0 && Buffer$1.compare(w.slice(-2), a.slice(3)) === 0), p = w;
		}, "onData");
		h.prependListener("close", S), h.on("data", v), i.on("close", () => {
			h.removeListener("close", S), h.removeListener("data", v);
		});
	});
}
n$1(Rl, "fixResponseChunkedTransferBadEnding");
const Bi = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap();
function W(i) {
	const o$1 = Bi.get(i);
	return console.assert(o$1 != null, "'this' is expected an Event object, but got", i), o$1;
}
n$1(W, "pd");
function ki(i) {
	if (i.passiveListener != null) {
		typeof console < "u" && typeof console.error == "function" && console.error("Unable to preventDefault inside passive event listener invocation.", i.passiveListener);
		return;
	}
	i.event.cancelable && (i.canceled = !0, typeof i.event.preventDefault == "function" && i.event.preventDefault());
}
n$1(ki, "setCancelFlag");
function ht(i, o$1) {
	Bi.set(this, {
		eventTarget: i,
		event: o$1,
		eventPhase: 2,
		currentTarget: i,
		canceled: !1,
		stopped: !1,
		immediateStopped: !1,
		passiveListener: null,
		timeStamp: o$1.timeStamp || Date.now()
	}), Object.defineProperty(this, "isTrusted", {
		value: !1,
		enumerable: !0
	});
	const a = Object.keys(o$1);
	for (let f$1 = 0; f$1 < a.length; ++f$1) {
		const l = a[f$1];
		l in this || Object.defineProperty(this, l, Wi(l));
	}
}
n$1(ht, "Event"), ht.prototype = {
	get type() {
		return W(this).event.type;
	},
	get target() {
		return W(this).eventTarget;
	},
	get currentTarget() {
		return W(this).currentTarget;
	},
	composedPath() {
		const i = W(this).currentTarget;
		return i == null ? [] : [i];
	},
	get NONE() {
		return 0;
	},
	get CAPTURING_PHASE() {
		return 1;
	},
	get AT_TARGET() {
		return 2;
	},
	get BUBBLING_PHASE() {
		return 3;
	},
	get eventPhase() {
		return W(this).eventPhase;
	},
	stopPropagation() {
		const i = W(this);
		i.stopped = !0, typeof i.event.stopPropagation == "function" && i.event.stopPropagation();
	},
	stopImmediatePropagation() {
		const i = W(this);
		i.stopped = !0, i.immediateStopped = !0, typeof i.event.stopImmediatePropagation == "function" && i.event.stopImmediatePropagation();
	},
	get bubbles() {
		return !!W(this).event.bubbles;
	},
	get cancelable() {
		return !!W(this).event.cancelable;
	},
	preventDefault() {
		ki(W(this));
	},
	get defaultPrevented() {
		return W(this).canceled;
	},
	get composed() {
		return !!W(this).event.composed;
	},
	get timeStamp() {
		return W(this).timeStamp;
	},
	get srcElement() {
		return W(this).eventTarget;
	},
	get cancelBubble() {
		return W(this).stopped;
	},
	set cancelBubble(i) {
		if (!i) return;
		const o$1 = W(this);
		o$1.stopped = !0, typeof o$1.event.cancelBubble == "boolean" && (o$1.event.cancelBubble = !0);
	},
	get returnValue() {
		return !W(this).canceled;
	},
	set returnValue(i) {
		i || ki(W(this));
	},
	initEvent() {}
}, Object.defineProperty(ht.prototype, "constructor", {
	value: ht,
	configurable: !0,
	writable: !0
}), typeof window < "u" && typeof window.Event < "u" && (Object.setPrototypeOf(ht.prototype, window.Event.prototype), Dn.set(window.Event.prototype, ht));
function Wi(i) {
	return {
		get() {
			return W(this).event[i];
		},
		set(o$1) {
			W(this).event[i] = o$1;
		},
		configurable: !0,
		enumerable: !0
	};
}
n$1(Wi, "defineRedirectDescriptor");
function Tl(i) {
	return {
		value() {
			const o$1 = W(this).event;
			return o$1[i].apply(o$1, arguments);
		},
		configurable: !0,
		enumerable: !0
	};
}
n$1(Tl, "defineCallDescriptor");
function Cl(i, o$1) {
	const a = Object.keys(o$1);
	if (a.length === 0) return i;
	function f$1(l, p) {
		i.call(this, l, p);
	}
	n$1(f$1, "CustomEvent"), f$1.prototype = Object.create(i.prototype, { constructor: {
		value: f$1,
		configurable: !0,
		writable: !0
	} });
	for (let l = 0; l < a.length; ++l) {
		const p = a[l];
		if (!(p in i.prototype)) {
			const S = typeof Object.getOwnPropertyDescriptor(o$1, p).value == "function";
			Object.defineProperty(f$1.prototype, p, S ? Tl(p) : Wi(p));
		}
	}
	return f$1;
}
n$1(Cl, "defineWrapper");
function qi(i) {
	if (i == null || i === Object.prototype) return ht;
	let o$1 = Dn.get(i);
	return o$1 ?? (o$1 = Cl(qi(Object.getPrototypeOf(i)), i), Dn.set(i, o$1)), o$1;
}
n$1(qi, "getWrapper");
function Pl(i, o$1) {
	return new (qi(Object.getPrototypeOf(o$1)))(i, o$1);
}
n$1(Pl, "wrapEvent");
function vl(i) {
	return W(i).immediateStopped;
}
n$1(vl, "isStopped");
function El(i, o$1) {
	W(i).eventPhase = o$1;
}
n$1(El, "setEventPhase");
function Al(i, o$1) {
	W(i).currentTarget = o$1;
}
n$1(Al, "setCurrentTarget");
function Oi(i, o$1) {
	W(i).passiveListener = o$1;
}
n$1(Oi, "setPassiveListener");
const zi = /* @__PURE__ */ new WeakMap(), Ii = 1, Fi = 2, wr = 3;
function Rr(i) {
	return i !== null && typeof i == "object";
}
n$1(Rr, "isObject");
function Ot(i) {
	const o$1 = zi.get(i);
	if (o$1 == null) throw new TypeError("'this' is expected an EventTarget object, but got another value.");
	return o$1;
}
n$1(Ot, "getListeners");
function Bl(i) {
	return {
		get() {
			let a = Ot(this).get(i);
			for (; a != null;) {
				if (a.listenerType === wr) return a.listener;
				a = a.next;
			}
			return null;
		},
		set(o$1) {
			typeof o$1 != "function" && !Rr(o$1) && (o$1 = null);
			const a = Ot(this);
			let f$1 = null, l = a.get(i);
			for (; l != null;) l.listenerType === wr ? f$1 !== null ? f$1.next = l.next : l.next !== null ? a.set(i, l.next) : a.delete(i) : f$1 = l, l = l.next;
			if (o$1 !== null) {
				const p = {
					listener: o$1,
					listenerType: wr,
					passive: !1,
					once: !1,
					next: null
				};
				f$1 === null ? a.set(i, p) : f$1.next = p;
			}
		},
		configurable: !0,
		enumerable: !0
	};
}
n$1(Bl, "defineEventAttributeDescriptor");
function ji(i, o$1) {
	Object.defineProperty(i, `on${o$1}`, Bl(o$1));
}
n$1(ji, "defineEventAttribute");
function Li(i) {
	function o$1() {
		Pe.call(this);
	}
	n$1(o$1, "CustomEventTarget"), o$1.prototype = Object.create(Pe.prototype, { constructor: {
		value: o$1,
		configurable: !0,
		writable: !0
	} });
	for (let a = 0; a < i.length; ++a) ji(o$1.prototype, i[a]);
	return o$1;
}
n$1(Li, "defineCustomEventTarget");
function Pe() {
	if (this instanceof Pe) {
		zi.set(this, /* @__PURE__ */ new Map());
		return;
	}
	if (arguments.length === 1 && Array.isArray(arguments[0])) return Li(arguments[0]);
	if (arguments.length > 0) {
		const i = new Array(arguments.length);
		for (let o$1 = 0; o$1 < arguments.length; ++o$1) i[o$1] = arguments[o$1];
		return Li(i);
	}
	throw new TypeError("Cannot call a class as a function");
}
n$1(Pe, "EventTarget"), Pe.prototype = {
	addEventListener(i, o$1, a) {
		if (o$1 == null) return;
		if (typeof o$1 != "function" && !Rr(o$1)) throw new TypeError("'listener' should be a function or an object.");
		const f$1 = Ot(this), l = Rr(a), h = (l ? !!a.capture : !!a) ? Ii : Fi, S = {
			listener: o$1,
			listenerType: h,
			passive: l && !!a.passive,
			once: l && !!a.once,
			next: null
		};
		let v = f$1.get(i);
		if (v === void 0) {
			f$1.set(i, S);
			return;
		}
		let w = null;
		for (; v != null;) {
			if (v.listener === o$1 && v.listenerType === h) return;
			w = v, v = v.next;
		}
		w.next = S;
	},
	removeEventListener(i, o$1, a) {
		if (o$1 == null) return;
		const f$1 = Ot(this), p = (Rr(a) ? !!a.capture : !!a) ? Ii : Fi;
		let h = null, S = f$1.get(i);
		for (; S != null;) {
			if (S.listener === o$1 && S.listenerType === p) {
				h !== null ? h.next = S.next : S.next !== null ? f$1.set(i, S.next) : f$1.delete(i);
				return;
			}
			h = S, S = S.next;
		}
	},
	dispatchEvent(i) {
		if (i == null || typeof i.type != "string") throw new TypeError("\"event.type\" should be a string.");
		const o$1 = Ot(this), a = i.type;
		let f$1 = o$1.get(a);
		if (f$1 == null) return !0;
		const l = Pl(this, i);
		let p = null;
		for (; f$1 != null;) {
			if (f$1.once ? p !== null ? p.next = f$1.next : f$1.next !== null ? o$1.set(a, f$1.next) : o$1.delete(a) : p = f$1, Oi(l, f$1.passive ? f$1.listener : null), typeof f$1.listener == "function") try {
				f$1.listener.call(this, l);
			} catch (h) {
				typeof console < "u" && typeof console.error == "function" && console.error(h);
			}
			else f$1.listenerType !== wr && typeof f$1.listener.handleEvent == "function" && f$1.listener.handleEvent(l);
			if (vl(l)) break;
			f$1 = f$1.next;
		}
		return Oi(l, null), El(l, 0), Al(l, null), !l.defaultPrevented;
	}
}, Object.defineProperty(Pe.prototype, "constructor", {
	value: Pe,
	configurable: !0,
	writable: !0
}), typeof window < "u" && typeof window.EventTarget < "u" && Object.setPrototypeOf(Pe.prototype, window.EventTarget.prototype);
const Vn = class Vn$1 extends Pe {
	constructor() {
		throw super(), /* @__PURE__ */ new TypeError("AbortSignal cannot be constructed directly");
	}
	get aborted() {
		const o$1 = Tr.get(this);
		if (typeof o$1 != "boolean") throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
		return o$1;
	}
};
n$1(Vn, "AbortSignal");
let pt = Vn;
ji(pt.prototype, "abort");
function kl() {
	const i = Object.create(pt.prototype);
	return Pe.call(i), Tr.set(i, !1), i;
}
n$1(kl, "createAbortSignal");
function Wl(i) {
	Tr.get(i) === !1 && (Tr.set(i, !0), i.dispatchEvent({ type: "abort" }));
}
n$1(Wl, "abortSignal");
const Tr = /* @__PURE__ */ new WeakMap();
Object.defineProperties(pt.prototype, { aborted: { enumerable: !0 } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(pt.prototype, Symbol.toStringTag, {
	configurable: !0,
	value: "AbortSignal"
});
let Mn = (gt = class {
	constructor() {
		$i.set(this, kl());
	}
	get signal() {
		return Di(this);
	}
	abort() {
		Wl(Di(this));
	}
}, n$1(gt, "AbortController"), gt);
const $i = /* @__PURE__ */ new WeakMap();
function Di(i) {
	const o$1 = $i.get(i);
	if (o$1 == null) throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i === null ? "null" : typeof i}`);
	return o$1;
}
n$1(Di, "getSignal"), Object.defineProperties(Mn.prototype, {
	signal: { enumerable: !0 },
	abort: { enumerable: !0 }
}), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Mn.prototype, Symbol.toStringTag, {
	configurable: !0,
	value: "AbortController"
});
var ql = Object.defineProperty, Ol = n$1((i, o$1) => ql(i, "name", {
	value: o$1,
	configurable: !0
}), "e");
const Mi = Ai;
Ui();
function Ui() {
	!globalThis.process?.versions?.node && !globalThis.process?.env?.DISABLE_NODE_FETCH_NATIVE_WARN && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
n$1(Ui, "s"), Ol(Ui, "checkNodeEnvironment");

//#endregion
export { le as a, ye as c, dt as i, Mn as n, qn as o, br as r, ut as s, Mi as t };