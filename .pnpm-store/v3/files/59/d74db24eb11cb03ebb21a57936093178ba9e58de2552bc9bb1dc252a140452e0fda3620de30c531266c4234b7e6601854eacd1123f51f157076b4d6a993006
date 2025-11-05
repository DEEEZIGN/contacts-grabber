import "./dist-D6bEcHI0.mjs";
import "./utils-4hBt2ln3.mjs";
import { t as defineCommand } from "./dist-BGwS-Kdh.mjs";
import { a as legacyRootDirArgs, t as cwdArgs } from "./_shared-CoPxtaYg.mjs";
import { t as logger } from "./logger-BLLcWqPD.mjs";
import { c as resolve } from "./pathe.M-eThtNZ-KQ2nQL0i.mjs";
import { r as ve } from "./main-DRK_9yHg.mjs";
import process from "node:process";

//#region src/commands/devtools.ts
var devtools_default = defineCommand({
	meta: {
		name: "devtools",
		description: "Enable or disable devtools in a Nuxt project"
	},
	args: {
		...cwdArgs,
		command: {
			type: "positional",
			description: "Command to run",
			valueHint: "enable|disable"
		},
		...legacyRootDirArgs
	},
	async run(ctx) {
		const cwd = resolve(ctx.args.cwd || ctx.args.rootDir);
		if (!["enable", "disable"].includes(ctx.args.command)) {
			logger.error(`Unknown command \`${ctx.args.command}\`.`);
			process.exit(1);
		}
		await ve("npx", [
			"@nuxt/devtools-wizard@latest",
			ctx.args.command,
			cwd
		], {
			throwOnError: true,
			nodeOptions: {
				stdio: "inherit",
				cwd
			}
		});
	}
});

//#endregion
export { devtools_default as default };