import "./dist-D6bEcHI0.mjs";
import "./utils-4hBt2ln3.mjs";
import { t as defineCommand } from "./dist-BGwS-Kdh.mjs";
import { i as c } from "./dist-KRhCJXtj.mjs";
import { a as legacyRootDirArgs, i as extendsArgs, n as dotEnvArgs, o as logLevelArgs, t as cwdArgs } from "./_shared-CoPxtaYg.mjs";
import { t as resolveModulePath } from "./dist-Co27RTKx.mjs";
import { c as resolve } from "./pathe.M-eThtNZ-KQ2nQL0i.mjs";
import { t as loadKit } from "./kit-DG9dDPei.mjs";
import { r as readTSConfig } from "./dist-DlZYgmvt.mjs";
import { r as ve } from "./main-DRK_9yHg.mjs";
import process from "node:process";

//#region src/commands/typecheck.ts
var typecheck_default = defineCommand({
	meta: {
		name: "typecheck",
		description: "Runs `vue-tsc` to check types throughout your app."
	},
	args: {
		...cwdArgs,
		...logLevelArgs,
		...dotEnvArgs,
		...extendsArgs,
		...legacyRootDirArgs
	},
	async run(ctx) {
		process.env.NODE_ENV = process.env.NODE_ENV || "production";
		const cwd = resolve(ctx.args.cwd || ctx.args.rootDir);
		const [supportsProjects, resolvedTypeScript, resolvedVueTsc] = await Promise.all([
			readTSConfig(cwd).then((r) => !!r.references?.length),
			resolveModulePath("typescript", { try: true }),
			resolveModulePath("vue-tsc/bin/vue-tsc.js", { try: true }),
			writeTypes(cwd, ctx.args.dotenv, ctx.args.logLevel, {
				...ctx.data?.overrides,
				...ctx.args.extends && { extends: ctx.args.extends }
			})
		]);
		const typeCheckArgs = supportsProjects ? ["-b", "--noEmit"] : ["--noEmit"];
		if (resolvedTypeScript && resolvedVueTsc) return await ve(resolvedVueTsc, typeCheckArgs, {
			throwOnError: true,
			nodeOptions: {
				stdio: "inherit",
				cwd
			}
		});
		if (c) {
			await ve("bun", [
				"install",
				"typescript",
				"vue-tsc",
				"--global",
				"--silent"
			], {
				throwOnError: true,
				nodeOptions: {
					stdio: "inherit",
					cwd
				}
			});
			return await ve("bunx", ["vue-tsc", ...typeCheckArgs], {
				throwOnError: true,
				nodeOptions: {
					stdio: "inherit",
					cwd
				}
			});
		}
		await ve("npx", [
			"-p",
			"vue-tsc",
			"-p",
			"typescript",
			"vue-tsc",
			...typeCheckArgs
		], {
			throwOnError: true,
			nodeOptions: {
				stdio: "inherit",
				cwd
			}
		});
	}
});
async function writeTypes(cwd, dotenv, logLevel, overrides) {
	const { loadNuxt, buildNuxt, writeTypes: writeTypes$1 } = await loadKit(cwd);
	const nuxt = await loadNuxt({
		cwd,
		dotenv: {
			cwd,
			fileName: dotenv
		},
		overrides: {
			_prepare: true,
			logLevel,
			...overrides
		}
	});
	await writeTypes$1(nuxt);
	await buildNuxt(nuxt);
	await nuxt.close();
}

//#endregion
export { typecheck_default as default };