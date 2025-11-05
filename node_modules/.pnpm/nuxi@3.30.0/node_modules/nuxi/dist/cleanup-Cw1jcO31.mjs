import "./dist-D6bEcHI0.mjs";
import "./utils-4hBt2ln3.mjs";
import { t as defineCommand } from "./dist-BGwS-Kdh.mjs";
import { a as legacyRootDirArgs, t as cwdArgs } from "./_shared-CoPxtaYg.mjs";
import "./logger-BLLcWqPD.mjs";
import "./dist-Co27RTKx.mjs";
import { c as resolve } from "./pathe.M-eThtNZ-KQ2nQL0i.mjs";
import { t as loadKit } from "./kit-DG9dDPei.mjs";
import "./fs-B3CNiWYf.mjs";
import { t as cleanupNuxtDirs } from "./nuxt-DW9Z-pIV.mjs";

//#region src/commands/cleanup.ts
var cleanup_default = defineCommand({
	meta: {
		name: "cleanup",
		description: "Clean up generated Nuxt files and caches"
	},
	args: {
		...cwdArgs,
		...legacyRootDirArgs
	},
	async run(ctx) {
		const cwd = resolve(ctx.args.cwd || ctx.args.rootDir);
		const { loadNuxtConfig } = await loadKit(cwd);
		const nuxtOptions = await loadNuxtConfig({
			cwd,
			overrides: { dev: true }
		});
		await cleanupNuxtDirs(nuxtOptions.rootDir, nuxtOptions.buildDir);
	}
});

//#endregion
export { cleanup_default as default };