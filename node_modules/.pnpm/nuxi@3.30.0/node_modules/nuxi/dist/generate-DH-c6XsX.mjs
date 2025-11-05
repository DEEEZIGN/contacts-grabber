import "./dist-D6bEcHI0.mjs";
import "./utils-4hBt2ln3.mjs";
import { t as defineCommand } from "./dist-BGwS-Kdh.mjs";
import { a as legacyRootDirArgs, i as extendsArgs, n as dotEnvArgs, o as logLevelArgs, r as envNameArgs, t as cwdArgs } from "./_shared-CoPxtaYg.mjs";
import "./logger-BLLcWqPD.mjs";
import "./dist-Co27RTKx.mjs";
import "./pathe.M-eThtNZ-KQ2nQL0i.mjs";
import "./kit-DG9dDPei.mjs";
import "./banner-CdxSVUKK.mjs";
import "./fs-B3CNiWYf.mjs";
import "./env-DWML--tE.mjs";
import { t as build_default } from "./build-DvmERLqW.mjs";

//#region src/commands/generate.ts
var generate_default = defineCommand({
	meta: {
		name: "generate",
		description: "Build Nuxt and prerender all routes"
	},
	args: {
		...cwdArgs,
		...logLevelArgs,
		preset: {
			type: "string",
			description: "Nitro server preset"
		},
		...dotEnvArgs,
		...envNameArgs,
		...extendsArgs,
		...legacyRootDirArgs
	},
	async run(ctx) {
		ctx.args.prerender = true;
		await build_default.run(ctx);
	}
});

//#endregion
export { generate_default as default };