import { t as logger } from "./logger-BLLcWqPD.mjs";
import { c as resolve, n as dirname } from "./pathe.M-eThtNZ-KQ2nQL0i.mjs";
import { r as rmRecursive } from "./fs-B3CNiWYf.mjs";
import { createHash } from "node:crypto";
import { promises } from "node:fs";

//#region ../../node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/shared/ohash.D__AXeF1.mjs
function serialize(o) {
	return typeof o == "string" ? `'${o}'` : new c().serialize(o);
}
const c = /* @__PURE__ */ function() {
	class o {
		#t = /* @__PURE__ */ new Map();
		compare(t, r$1) {
			const e$1 = typeof t, n = typeof r$1;
			return e$1 === "string" && n === "string" ? t.localeCompare(r$1) : e$1 === "number" && n === "number" ? t - r$1 : String.prototype.localeCompare.call(this.serialize(t, true), this.serialize(r$1, true));
		}
		serialize(t, r$1) {
			if (t === null) return "null";
			switch (typeof t) {
				case "string": return r$1 ? t : `'${t}'`;
				case "bigint": return `${t}n`;
				case "object": return this.$object(t);
				case "function": return this.$function(t);
			}
			return String(t);
		}
		serializeObject(t) {
			const r$1 = Object.prototype.toString.call(t);
			if (r$1 !== "[object Object]") return this.serializeBuiltInType(r$1.length < 10 ? `unknown:${r$1}` : r$1.slice(8, -1), t);
			const e$1 = t.constructor, n = e$1 === Object || e$1 === void 0 ? "" : e$1.name;
			if (n !== "" && globalThis[n] === e$1) return this.serializeBuiltInType(n, t);
			if (typeof t.toJSON == "function") {
				const i = t.toJSON();
				return n + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
			}
			return this.serializeObjectEntries(n, Object.entries(t));
		}
		serializeBuiltInType(t, r$1) {
			const e$1 = this["$" + t];
			if (e$1) return e$1.call(this, r$1);
			if (typeof r$1?.entries == "function") return this.serializeObjectEntries(t, r$1.entries());
			throw new Error(`Cannot serialize ${t}`);
		}
		serializeObjectEntries(t, r$1) {
			const e$1 = Array.from(r$1).sort((i, a) => this.compare(i[0], a[0]));
			let n = `${t}{`;
			for (let i = 0; i < e$1.length; i++) {
				const [a, l] = e$1[i];
				n += `${this.serialize(a, true)}:${this.serialize(l)}`, i < e$1.length - 1 && (n += ",");
			}
			return n + "}";
		}
		$object(t) {
			let r$1 = this.#t.get(t);
			return r$1 === void 0 && (this.#t.set(t, `#${this.#t.size}`), r$1 = this.serializeObject(t), this.#t.set(t, r$1)), r$1;
		}
		$function(t) {
			const r$1 = Function.prototype.toString.call(t);
			return r$1.slice(-15) === "[native code] }" ? `${t.name || ""}()[native]` : `${t.name}(${t.length})${r$1.replace(/\s*\n\s*/g, "")}`;
		}
		$Array(t) {
			let r$1 = "[";
			for (let e$1 = 0; e$1 < t.length; e$1++) r$1 += this.serialize(t[e$1]), e$1 < t.length - 1 && (r$1 += ",");
			return r$1 + "]";
		}
		$Date(t) {
			try {
				return `Date(${t.toISOString()})`;
			} catch {
				return "Date(null)";
			}
		}
		$ArrayBuffer(t) {
			return `ArrayBuffer[${new Uint8Array(t).join(",")}]`;
		}
		$Set(t) {
			return `Set${this.$Array(Array.from(t).sort((r$1, e$1) => this.compare(r$1, e$1)))}`;
		}
		$Map(t) {
			return this.serializeObjectEntries("Map", t.entries());
		}
	}
	for (const s$1 of [
		"Error",
		"RegExp",
		"URL"
	]) o.prototype["$" + s$1] = function(t) {
		return `${s$1}(${t})`;
	};
	for (const s$1 of [
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array"
	]) o.prototype["$" + s$1] = function(t) {
		return `${s$1}[${t.join(",")}]`;
	};
	for (const s$1 of ["BigInt64Array", "BigUint64Array"]) o.prototype["$" + s$1] = function(t) {
		return `${s$1}[${t.join("n,")}${t.length > 0 ? "n" : ""}]`;
	};
	return o;
}();

//#endregion
//#region ../../node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/crypto/node/index.mjs
const e = globalThis.process?.getBuiltinModule?.("crypto")?.hash, r = "sha256", s = "base64url";
function digest(t) {
	if (e) return e(r, t, s);
	const o = createHash(r).update(t);
	return globalThis.process?.versions?.webcontainer ? o.digest().toString(s) : o.digest(s);
}

//#endregion
//#region ../../node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs
function hash(input) {
	return digest(serialize(input));
}

//#endregion
//#region src/utils/nuxt.ts
async function cleanupNuxtDirs(rootDir, buildDir) {
	logger.info("Cleaning up generated Nuxt files and caches...");
	await rmRecursive([
		buildDir,
		".output",
		"dist",
		"node_modules/.vite",
		"node_modules/.cache"
	].map((dir) => resolve(rootDir, dir)));
}
function nuxtVersionToGitIdentifier(version) {
	const id = /\.([0-9a-f]{7,8})$/.exec(version);
	if (id?.[1]) return id[1];
	return `v${version}`;
}
function resolveNuxtManifest(nuxt) {
	const manifest = {
		_hash: null,
		project: { rootDir: nuxt.options.rootDir },
		versions: { nuxt: nuxt._version }
	};
	manifest._hash = hash(manifest);
	return manifest;
}
async function writeNuxtManifest(nuxt, manifest = resolveNuxtManifest(nuxt)) {
	const manifestPath = resolve(nuxt.options.buildDir, "nuxt.json");
	await promises.mkdir(dirname(manifestPath), { recursive: true });
	await promises.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
	return manifest;
}
async function loadNuxtManifest(buildDir) {
	const manifestPath = resolve(buildDir, "nuxt.json");
	return await promises.readFile(manifestPath, "utf-8").then((data) => JSON.parse(data)).catch(() => null);
}

//#endregion
export { writeNuxtManifest as a, resolveNuxtManifest as i, loadNuxtManifest as n, nuxtVersionToGitIdentifier as r, cleanupNuxtDirs as t };