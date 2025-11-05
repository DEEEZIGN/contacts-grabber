import { t as defineCommand } from "./dist-BGwS-Kdh.mjs";
import { a as legacyRootDirArgs, i as extendsArgs, n as dotEnvArgs, o as logLevelArgs, r as envNameArgs, t as cwdArgs } from "./_shared-CoPxtaYg.mjs";
import { t as logger } from "./logger-BLLcWqPD.mjs";
import { c as resolve, s as relative } from "./pathe.M-eThtNZ-KQ2nQL0i.mjs";
import { t as loadKit } from "./kit-DG9dDPei.mjs";
import { t as clearBuildDir } from "./fs-B3CNiWYf.mjs";
import process from "node:process";

//#region src/commands/prepare.ts
var prepare_default = defineCommand({
	meta: {
		name: "prepare",
		description: "Prepare Nuxt for development/build"
	},
	args: {
		...dotEnvArgs,
		...cwdArgs,
		...logLevelArgs,
		...envNameArgs,
		...extendsArgs,
		...legacyRootDirArgs
	},
	async run(ctx) {
		process.env.NODE_ENV = process.env.NODE_ENV || "production";
		const cwd = resolve(ctx.args.cwd || ctx.args.rootDir);
		const { loadNuxt, buildNuxt, writeTypes } = await loadKit(cwd);
		const nuxt = await loadNuxt({
			cwd,
			dotenv: {
				cwd,
				fileName: ctx.args.dotenv
			},
			envName: ctx.args.envName,
			overrides: {
				_prepare: true,
				logLevel: ctx.args.logLevel,
				...ctx.args.extends && { extends: ctx.args.extends },
				...ctx.data?.overrides
			}
		});
		await clearBuildDir(nuxt.options.buildDir);
		await buildNuxt(nuxt);
		await writeTypes(nuxt);
		logger.success("Types generated in", relative(process.cwd(), nuxt.options.buildDir));
	}
});

//#endregion
export { prepare_default as t };