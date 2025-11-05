import { o as __toDynamicImportESM } from "./chunk-DxYZOojV.mjs";
import { t as consola } from "./dist-D6bEcHI0.mjs";
import "./utils-4hBt2ln3.mjs";
import { r as runMain$1, t as defineCommand } from "./dist-BGwS-Kdh.mjs";
import { a as p } from "./dist-KRhCJXtj.mjs";
import { n as name, r as version, t as description } from "./package-DOSBMWU1.mjs";
import { t as cwdArgs } from "./_shared-CoPxtaYg.mjs";
import { t as logger } from "./logger-BLLcWqPD.mjs";
import { t as runCommand } from "./run-54qpUrpD.mjs";
import { builtinModules, createRequire } from "node:module";
import nodeCrypto from "node:crypto";
import { resolve } from "node:path";
import process from "node:process";

//#region src/commands/index.ts
const _rDefault = (r) => r.default || r;
const commands = {
	add: () => import("./add-C6G3JV5N.mjs").then(_rDefault),
	analyze: () => import("./analyze-BCPvoDfM.mjs").then(_rDefault),
	build: () => import("./build-kg5QL-Lw.mjs").then(_rDefault),
	cleanup: () => import("./cleanup-Cw1jcO31.mjs").then(_rDefault),
	_dev: () => import("./dev-child-7RQQtnLF.mjs").then(_rDefault),
	dev: () => import("./dev-30n1rEOi.mjs").then(_rDefault),
	devtools: () => import("./devtools-tXipQqL6.mjs").then(_rDefault),
	generate: () => import("./generate-DH-c6XsX.mjs").then(_rDefault),
	info: () => import("./info-CHhFwg5m.mjs").then(_rDefault),
	init: () => import("./init-Nj2Rydlx.mjs").then(_rDefault),
	module: () => import("./module-jIXFhrSo.mjs").then(_rDefault),
	prepare: () => import("./prepare-Ca7IToFv.mjs").then(_rDefault),
	preview: () => import("./preview-CY86qEW6.mjs").then(_rDefault),
	start: () => import("./preview-CY86qEW6.mjs").then(_rDefault),
	test: () => import("./test-DTN89keI.mjs").then(_rDefault),
	typecheck: () => import("./typecheck-CJiXOWrJ.mjs").then(_rDefault),
	upgrade: () => import("./upgrade-C1Gacrcd.mjs").then(_rDefault)
};

//#endregion
//#region src/utils/console.ts
function wrapReporter(reporter) {
	return { log(logObj, ctx) {
		if (!logObj.args || !logObj.args.length) return;
		const msg = logObj.args[0];
		if (typeof msg === "string" && !process.env.DEBUG) {
			if (msg.startsWith("[Vue Router warn]: No match found for location with path")) return;
			if (msg.includes("ExperimentalWarning: The Fetch API is an experimental feature")) return;
			if (msg.startsWith("Sourcemap") && msg.includes("node_modules")) return;
		}
		return reporter.log(logObj, ctx);
	} };
}
function setupGlobalConsole(opts = {}) {
	consola.options.reporters = consola.options.reporters.map(wrapReporter);
	if (opts.dev) consola.wrapAll();
	else consola.wrapConsole();
	process.on("unhandledRejection", (err) => consola.error("[unhandledRejection]", err));
	process.on("uncaughtException", (err) => consola.error("[uncaughtException]", err));
}

//#endregion
//#region src/utils/engines.ts
async function checkEngines() {
	const satisfies = await import("./satisfies-D6dVPQDt.mjs").then(__toDynamicImportESM(1)).then((r) => r.default || r);
	const currentNode = process.versions.node;
	const nodeRange = ">= 18.0.0";
	if (!satisfies(currentNode, nodeRange)) logger.warn(`Current version of Node.js (\`${currentNode}\`) is unsupported and might cause issues.\n       Please upgrade to a compatible version \`${nodeRange}\`.`);
}

//#endregion
//#region src/main.ts
if (!globalThis.crypto) globalThis.crypto = nodeCrypto.webcrypto;
if (!process.getBuiltinModule) {
	const _require = createRequire(import.meta.url);
	process.getBuiltinModule = (name$1) => {
		if (name$1.startsWith("node:") || builtinModules.includes(name$1)) return _require.resolve(name$1);
	};
}
const _main = defineCommand({
	meta: {
		name: name.endsWith("nightly") ? name : "nuxi",
		version,
		description
	},
	args: {
		...cwdArgs,
		command: {
			type: "positional",
			required: false
		}
	},
	subCommands: commands,
	async setup(ctx) {
		const command = ctx.args._[0];
		logger.debug(`Running \`nuxt ${command}\` command`);
		setupGlobalConsole({ dev: command === "dev" });
		let backgroundTasks;
		if (command !== "_dev" && p !== "stackblitz") backgroundTasks = Promise.all([checkEngines()]).catch((err) => logger.error(err));
		if (command === "init") await backgroundTasks;
		if (ctx.args.command && !(ctx.args.command in commands)) {
			const cwd = resolve(ctx.args.cwd);
			try {
				const { x } = await import("./main-BK_-2jer.mjs");
				await x(`nuxt-${ctx.args.command}`, ctx.rawArgs.slice(1), {
					nodeOptions: {
						stdio: "inherit",
						cwd
					},
					throwOnError: true
				});
			} catch (err) {
				if (err instanceof Error && "code" in err && err.code === "ENOENT") return;
			}
			process.exit();
		}
	}
});
const main = _main;
const runMain = () => runMain$1(main);

//#endregion
export { main, runCommand, runMain };