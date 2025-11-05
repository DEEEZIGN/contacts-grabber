import { s as __toESM } from "./chunk-DxYZOojV.mjs";
import { n as readPackageJSON } from "./dist-DlZYgmvt.mjs";
import { t as require_semver } from "./semver-o-01em3A.mjs";

//#region src/utils/versions.ts
var import_semver = /* @__PURE__ */ __toESM(require_semver(), 1);
async function getNuxtVersion(cwd, cache = true) {
	const nuxtPkg = await readPackageJSON("nuxt", {
		url: cwd,
		try: true,
		cache
	});
	if (nuxtPkg) return nuxtPkg.version;
	const pkg = await readPackageJSON(cwd);
	const pkgDep = pkg?.dependencies?.nuxt || pkg?.devDependencies?.nuxt;
	return pkgDep && (0, import_semver.coerce)(pkgDep)?.version || "3.0.0";
}

//#endregion
export { getNuxtVersion as t };