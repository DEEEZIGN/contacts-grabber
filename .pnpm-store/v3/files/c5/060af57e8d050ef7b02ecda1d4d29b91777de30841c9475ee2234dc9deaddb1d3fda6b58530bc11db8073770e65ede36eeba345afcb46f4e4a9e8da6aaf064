import { s as __toESM } from "./chunk-DxYZOojV.mjs";
import { r as colors } from "./dist-D6bEcHI0.mjs";
import { t as defineCommand } from "./dist-BGwS-Kdh.mjs";
import { o as logLevelArgs, t as cwdArgs } from "./_shared-CoPxtaYg.mjs";
import { t as logger } from "./logger-BLLcWqPD.mjs";
import { t as runCommand } from "./run-54qpUrpD.mjs";
import { t as resolveModulePath } from "./dist-Co27RTKx.mjs";
import { n as joinURL } from "./dist-A4GfTVP-.mjs";
import { a as join$1, c as resolve$1, o as normalize } from "./pathe.M-eThtNZ-KQ2nQL0i.mjs";
import { n as readPackageJSON } from "./dist-DlZYgmvt.mjs";
import { r as detectPackageManager, t as addDependency } from "./nypm.CLjaS_sz-BpnbjyUz.mjs";
import { t as require_semver } from "./semver-o-01em3A.mjs";
import { i as $fetch, n as fetchModules, r as getRegistryFromContent, t as checkNuxtCompatibility } from "./_utils-DFWSyyEL.mjs";
import { r as require_main, t as SUPPORTED_EXTENSIONS } from "./c12.8GPsgFQh-BPkPk7vk.mjs";
import { t as getNuxtVersion } from "./versions-CaimdJnx.mjs";
import { t as prepare_default } from "./prepare-BU1XmAbE.mjs";
import { dirname, extname, join } from "node:path";
import process from "node:process";
import * as fs$1 from "node:fs";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { homedir } from "node:os";

//#region ../../node_modules/.pnpm/c12@3.3.1_magicast@0.5.1/node_modules/c12/dist/update.mjs
var import_main = /* @__PURE__ */ __toESM(require_main(), 1);
const UPDATABLE_EXTS = [
	".js",
	".ts",
	".mjs",
	".cjs",
	".mts",
	".cts"
];
async function updateConfig(opts) {
	const { parseModule } = await import("./dist-2ccGpL_E.mjs");
	let configFile = tryResolve(`./${opts.configFile}`, opts.cwd, SUPPORTED_EXTENSIONS) || tryResolve(`./.config/${opts.configFile}`, opts.cwd, SUPPORTED_EXTENSIONS) || tryResolve(`./.config/${opts.configFile.split(".")[0]}`, opts.cwd, SUPPORTED_EXTENSIONS);
	let created = false;
	if (!configFile) {
		configFile = join$1(opts.cwd, opts.configFile + (opts.createExtension || ".ts"));
		const createResult = await opts.onCreate?.({ configFile }) ?? true;
		if (!createResult) throw new Error("Config file creation aborted.");
		const content = typeof createResult === "string" ? createResult : `export default {}
`;
		await mkdir(dirname(configFile), { recursive: true });
		await writeFile(configFile, content, "utf8");
		created = true;
	}
	const ext = extname(configFile);
	if (!UPDATABLE_EXTS.includes(ext)) throw new Error(`Unsupported config file extension: ${ext} (${configFile}) (supported: ${UPDATABLE_EXTS.join(", ")})`);
	const _module = parseModule(await readFile(configFile, "utf8"), opts.magicast);
	const defaultExport = _module.exports.default;
	if (!defaultExport) throw new Error("Default export is missing in the config file!");
	const configObj = defaultExport.$type === "function-call" ? defaultExport.$args[0] : defaultExport;
	await opts.onUpdate?.(configObj);
	await writeFile(configFile, _module.generate().code);
	return {
		configFile,
		created
	};
}
function tryResolve(path$1, cwd, extensions) {
	const res = resolveModulePath(path$1, {
		try: true,
		from: join$1(cwd, "/"),
		extensions,
		suffixes: ["", "/index"],
		cache: false
	});
	return res ? normalize(res) : void 0;
}

//#endregion
//#region src/commands/module/add.ts
var import_semver = /* @__PURE__ */ __toESM(require_semver(), 1);
var add_default = defineCommand({
	meta: {
		name: "add",
		description: "Add Nuxt modules"
	},
	args: {
		...cwdArgs,
		...logLevelArgs,
		moduleName: {
			type: "positional",
			description: "Specify one or more modules to install by name, separated by spaces"
		},
		skipInstall: {
			type: "boolean",
			description: "Skip npm install"
		},
		skipConfig: {
			type: "boolean",
			description: "Skip nuxt.config.ts update"
		},
		dev: {
			type: "boolean",
			description: "Install modules as dev dependencies"
		}
	},
	async setup(ctx) {
		const cwd = resolve$1(ctx.args.cwd);
		const modules = ctx.args._.map((e) => e.trim()).filter(Boolean);
		const projectPkg = await readPackageJSON(cwd).catch(() => ({}));
		if (!projectPkg.dependencies?.nuxt && !projectPkg.devDependencies?.nuxt) {
			logger.warn(`No \`nuxt\` dependency detected in \`${cwd}\`.`);
			if (await logger.prompt(`Do you want to continue anyway?`, {
				type: "confirm",
				initial: false,
				cancel: "default"
			}) !== true) process.exit(1);
		}
		const resolvedModules = (await Promise.all(modules.map((moduleName) => resolveModule(moduleName, cwd)))).filter((x) => x != null);
		logger.info(`Resolved \`${resolvedModules.map((x) => x.pkgName).join("`, `")}\`, adding module${resolvedModules.length > 1 ? "s" : ""}...`);
		await addModules(resolvedModules, {
			...ctx.args,
			cwd
		}, projectPkg);
		if (!ctx.args.skipInstall) await runCommand(prepare_default, Object.entries(ctx.args).filter(([k]) => k in cwdArgs || k in logLevelArgs).map(([k, v]) => `--${k}=${v}`));
	}
});
async function addModules(modules, { skipInstall, skipConfig, cwd, dev }, projectPkg) {
	if (!skipInstall) {
		const installedModules = [];
		const notInstalledModules = [];
		const dependencies = new Set([...Object.keys(projectPkg.dependencies || {}), ...Object.keys(projectPkg.devDependencies || {})]);
		for (const module of modules) if (dependencies.has(module.pkgName)) installedModules.push(module);
		else notInstalledModules.push(module);
		if (installedModules.length > 0) {
			const installedModulesList = installedModules.map((module) => module.pkgName).join("`, `");
			const are = installedModules.length > 1 ? "are" : "is";
			logger.info(`\`${installedModulesList}\` ${are} already installed`);
		}
		if (notInstalledModules.length > 0) {
			const isDev = Boolean(projectPkg.devDependencies?.nuxt) || dev;
			const notInstalledModulesList = notInstalledModules.map((module) => module.pkg).join("`, `");
			const dependency = notInstalledModules.length > 1 ? "dependencies" : "dependency";
			const a = notInstalledModules.length > 1 ? "" : " a";
			logger.info(`Installing \`${notInstalledModulesList}\` as${a}${isDev ? " development" : ""} ${dependency}`);
			const packageManager = await detectPackageManager(cwd);
			if (await addDependency(notInstalledModules.map((module) => module.pkg), {
				cwd,
				dev: isDev,
				installPeerDependencies: true,
				packageManager,
				workspace: packageManager?.name === "pnpm" && existsSync(resolve$1(cwd, "pnpm-workspace.yaml"))
			}).then(() => true).catch((error) => {
				logger.error(error);
				const failedModulesList = notInstalledModules.map((module) => colors.cyan(module.pkg)).join("`, `");
				const s = notInstalledModules.length > 1 ? "s" : "";
				return logger.prompt(`Install failed for \`${failedModulesList}\`. Do you want to continue adding the module${s} to ${colors.cyan("nuxt.config")}?`, {
					type: "confirm",
					initial: false,
					cancel: "default"
				});
			}) !== true) return;
		}
	}
	if (!skipConfig) await updateConfig({
		cwd,
		configFile: "nuxt.config",
		async onCreate() {
			logger.info(`Creating \`nuxt.config.ts\``);
			return getDefaultNuxtConfig();
		},
		async onUpdate(config) {
			if (!config.modules) config.modules = [];
			for (const resolved of modules) {
				if (config.modules.includes(resolved.pkgName)) {
					logger.info(`\`${resolved.pkgName}\` is already in the \`modules\``);
					continue;
				}
				logger.info(`Adding \`${resolved.pkgName}\` to the \`modules\``);
				config.modules.push(resolved.pkgName);
			}
		}
	}).catch((error) => {
		logger.error(`Failed to update \`nuxt.config\`: ${error.message}`);
		logger.error(`Please manually add \`${modules.map((module) => module.pkgName).join("`, `")}\` to the \`modules\` in \`nuxt.config.ts\``);
		return null;
	});
}
function getDefaultNuxtConfig() {
	return `
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: []
})`;
}
const packageRegex = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?([a-z0-9-~][a-z0-9-._~]*)(@[^@]+)?$/;
async function resolveModule(moduleName, cwd) {
	let pkgName = moduleName;
	let pkgVersion;
	const reMatch = moduleName.match(packageRegex);
	if (reMatch) {
		if (reMatch[3]) {
			pkgName = `${reMatch[1] || ""}${reMatch[2] || ""}`;
			pkgVersion = reMatch[3].slice(1);
		}
	} else {
		logger.error(`Invalid package name \`${pkgName}\`.`);
		return false;
	}
	const matchedModule = (await fetchModules().catch((err) => {
		logger.warn(`Cannot search in the Nuxt Modules database: ${err}`);
		return [];
	})).find((module) => module.name === moduleName || pkgVersion && module.name === pkgName || module.npm === pkgName || module.aliases?.includes(pkgName));
	if (matchedModule?.npm) pkgName = matchedModule.npm;
	if (matchedModule && matchedModule.compatibility.nuxt) {
		const nuxtVersion = await getNuxtVersion(cwd);
		if (!checkNuxtCompatibility(matchedModule, nuxtVersion)) {
			logger.warn(`The module \`${pkgName}\` is not compatible with Nuxt \`${nuxtVersion}\` (requires \`${matchedModule.compatibility.nuxt}\`)`);
			if (!await logger.prompt("Do you want to continue installing incompatible version?", {
				type: "confirm",
				initial: false,
				cancel: "default"
			})) return false;
		}
		const versionMap = matchedModule.compatibility.versionMap;
		if (versionMap) {
			for (const [_nuxtVersion, _moduleVersion] of Object.entries(versionMap)) if ((0, import_semver.satisfies)(nuxtVersion, _nuxtVersion)) {
				if (!pkgVersion) pkgVersion = _moduleVersion;
				else {
					logger.warn(`Recommended version of \`${pkgName}\` for Nuxt \`${nuxtVersion}\` is \`${_moduleVersion}\` but you have requested \`${pkgVersion}\``);
					pkgVersion = await logger.prompt("Choose a version:", {
						type: "select",
						options: [_moduleVersion, pkgVersion],
						cancel: "undefined"
					});
					if (!pkgVersion) return false;
				}
				break;
			}
		}
	}
	let version = pkgVersion || "latest";
	const meta = await detectNpmRegistry(pkgName.startsWith("@") ? pkgName.split("/")[0] : null);
	const headers = {};
	if (meta.authToken) headers.Authorization = `Bearer ${meta.authToken}`;
	const pkgDetails = await $fetch(joinURL(meta.registry, `${pkgName}`), { headers });
	if (pkgDetails["dist-tags"]?.[version]) version = pkgDetails["dist-tags"][version];
	else version = Object.keys(pkgDetails.versions)?.findLast((v) => (0, import_semver.satisfies)(v, version)) || version;
	const pkg = pkgDetails.versions[version];
	const pkgDependencies = Object.assign(pkg.dependencies || {}, pkg.devDependencies || {});
	if (!pkgDependencies.nuxt && !pkgDependencies["nuxt-edge"] && !pkgDependencies["@nuxt/kit"]) {
		logger.warn(`It seems that \`${pkgName}\` is not a Nuxt module.`);
		if (!await logger.prompt(`Do you want to continue installing ${colors.cyan(pkgName)} anyway?`, {
			type: "confirm",
			initial: false,
			cancel: "default"
		})) return false;
	}
	return {
		nuxtModule: matchedModule,
		pkg: `${pkgName}@${version}`,
		pkgName,
		pkgVersion: version
	};
}
function getNpmrcPaths() {
	const userNpmrcPath = join(homedir(), ".npmrc");
	return [join(process.cwd(), ".npmrc"), userNpmrcPath];
}
async function getAuthToken(registry) {
	const paths = getNpmrcPaths();
	const authTokenRegex = new RegExp(`^//${registry.replace(/^https?:\/\//, "").replace(/\/$/, "")}/:_authToken=(.+)$`, "m");
	for (const npmrcPath of paths) {
		let fd;
		try {
			fd = await fs$1.promises.open(npmrcPath, "r");
			if (await fd.stat().then((r) => r.isFile())) {
				const authTokenMatch = (await fd.readFile("utf-8")).match(authTokenRegex)?.[1];
				if (authTokenMatch) return authTokenMatch.trim();
			}
		} catch {} finally {
			await fd?.close();
		}
	}
	return null;
}
async function detectNpmRegistry(scope) {
	const registry = await getRegistry(scope);
	return {
		registry,
		authToken: await getAuthToken(registry)
	};
}
async function getRegistry(scope) {
	if (process.env.COREPACK_NPM_REGISTRY) return process.env.COREPACK_NPM_REGISTRY;
	const registry = await getRegistryFromFile(getNpmrcPaths(), scope);
	if (registry) process.env.COREPACK_NPM_REGISTRY = registry;
	return registry || "https://registry.npmjs.org";
}
async function getRegistryFromFile(paths, scope) {
	for (const npmrcPath of paths) {
		let fd;
		try {
			fd = await fs$1.promises.open(npmrcPath, "r");
			if (await fd.stat().then((r) => r.isFile())) {
				const registry = getRegistryFromContent(await fd.readFile("utf-8"), scope);
				if (registry) return registry;
			}
		} catch {} finally {
			await fd?.close();
		}
	}
	return null;
}

//#endregion
export { add_default as t };