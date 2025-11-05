import { i as __require, t as __commonJS } from "./chunk-DxYZOojV.mjs";
import { n as require_micromatch, t as require_is_glob } from "./is-glob-CEEBqAg8.mjs";

//#region ../../node_modules/.pnpm/@parcel+watcher@2.5.1/node_modules/@parcel/watcher/wrapper.js
var require_wrapper = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/@parcel+watcher@2.5.1/node_modules/@parcel/watcher/wrapper.js": ((exports) => {
	const path = __require("path");
	const micromatch = require_micromatch();
	const isGlob = require_is_glob();
	function normalizeOptions(dir, opts = {}) {
		const { ignore,...rest } = opts;
		if (Array.isArray(ignore)) {
			opts = { ...rest };
			for (const value of ignore) if (isGlob(value)) {
				if (!opts.ignoreGlobs) opts.ignoreGlobs = [];
				const regex = micromatch.makeRe(value, {
					dot: true,
					lookbehinds: false
				});
				opts.ignoreGlobs.push(regex.source);
			} else {
				if (!opts.ignorePaths) opts.ignorePaths = [];
				opts.ignorePaths.push(path.resolve(dir, value));
			}
		}
		return opts;
	}
	exports.createWrapper = (binding$1) => {
		return {
			writeSnapshot(dir, snapshot, opts) {
				return binding$1.writeSnapshot(path.resolve(dir), path.resolve(snapshot), normalizeOptions(dir, opts));
			},
			getEventsSince(dir, snapshot, opts) {
				return binding$1.getEventsSince(path.resolve(dir), path.resolve(snapshot), normalizeOptions(dir, opts));
			},
			async subscribe(dir, fn, opts) {
				dir = path.resolve(dir);
				opts = normalizeOptions(dir, opts);
				await binding$1.subscribe(dir, fn, opts);
				return { unsubscribe() {
					return binding$1.unsubscribe(dir, fn, opts);
				} };
			},
			unsubscribe(dir, fn, opts) {
				return binding$1.unsubscribe(path.resolve(dir), fn, normalizeOptions(dir, opts));
			}
		};
	};
}) });

//#endregion
//#region ../../node_modules/.pnpm/detect-libc@1.0.3/node_modules/detect-libc/lib/detect-libc.js
var require_detect_libc = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/detect-libc@1.0.3/node_modules/detect-libc/lib/detect-libc.js": ((exports, module) => {
	var platform = __require("os").platform();
	var spawnSync = __require("child_process").spawnSync;
	var readdirSync = __require("fs").readdirSync;
	var GLIBC = "glibc";
	var MUSL = "musl";
	var spawnOptions = {
		encoding: "utf8",
		env: process.env
	};
	if (!spawnSync) spawnSync = function() {
		return {
			status: 126,
			stdout: "",
			stderr: ""
		};
	};
	function contains(needle) {
		return function(haystack) {
			return haystack.indexOf(needle) !== -1;
		};
	}
	function versionFromMuslLdd(out) {
		return out.split(/[\r\n]+/)[1].trim().split(/\s/)[1];
	}
	function safeReaddirSync(path$1) {
		try {
			return readdirSync(path$1);
		} catch (e) {}
		return [];
	}
	var family = "";
	var version = "";
	var method = "";
	if (platform === "linux") {
		var glibc = spawnSync("getconf", ["GNU_LIBC_VERSION"], spawnOptions);
		if (glibc.status === 0) {
			family = GLIBC;
			version = glibc.stdout.trim().split(" ")[1];
			method = "getconf";
		} else {
			var ldd = spawnSync("ldd", ["--version"], spawnOptions);
			if (ldd.status === 0 && ldd.stdout.indexOf(MUSL) !== -1) {
				family = MUSL;
				version = versionFromMuslLdd(ldd.stdout);
				method = "ldd";
			} else if (ldd.status === 1 && ldd.stderr.indexOf(MUSL) !== -1) {
				family = MUSL;
				version = versionFromMuslLdd(ldd.stderr);
				method = "ldd";
			} else {
				var lib = safeReaddirSync("/lib");
				if (lib.some(contains("-linux-gnu"))) {
					family = GLIBC;
					method = "filesystem";
				} else if (lib.some(contains("libc.musl-"))) {
					family = MUSL;
					method = "filesystem";
				} else if (lib.some(contains("ld-musl-"))) {
					family = MUSL;
					method = "filesystem";
				} else if (safeReaddirSync("/usr/sbin").some(contains("glibc"))) {
					family = GLIBC;
					method = "filesystem";
				}
			}
		}
	}
	var isNonGlibcLinux = family !== "" && family !== GLIBC;
	module.exports = {
		GLIBC,
		MUSL,
		family,
		version,
		method,
		isNonGlibcLinux
	};
}) });

//#endregion
//#region ../../node_modules/.pnpm/@parcel+watcher@2.5.1/node_modules/@parcel/watcher/index.js
var require_watcher = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/@parcel+watcher@2.5.1/node_modules/@parcel/watcher/index.js": ((exports) => {
	const { createWrapper } = require_wrapper();
	let name = `@parcel/watcher-${process.platform}-${process.arch}`;
	if (process.platform === "linux") {
		const { MUSL: MUSL$1, family: family$1 } = require_detect_libc();
		if (family$1 === MUSL$1) name += "-musl";
		else name += "-glibc";
	}
	let binding;
	try {
		binding = __require(name);
	} catch (err) {
		handleError(err);
		try {
			binding = __require("./build/Release/watcher.node");
		} catch (err$1) {
			handleError(err$1);
			try {
				binding = __require("./build/Debug/watcher.node");
			} catch (err$2) {
				handleError(err$2);
				throw new Error(`No prebuild or local build of @parcel/watcher found. Tried ${name}. Please ensure it is installed (don't use --no-optional when installing with npm). Otherwise it is possible we don't support your platform yet. If this is the case, please report an issue to https://github.com/parcel-bundler/watcher.`);
			}
		}
	}
	function handleError(err) {
		if (err?.code !== "MODULE_NOT_FOUND") throw err;
	}
	const wrapper = createWrapper(binding);
	exports.writeSnapshot = wrapper.writeSnapshot;
	exports.getEventsSince = wrapper.getEventsSince;
	exports.subscribe = wrapper.subscribe;
	exports.unsubscribe = wrapper.unsubscribe;
}) });

//#endregion
export default require_watcher();

export {  };