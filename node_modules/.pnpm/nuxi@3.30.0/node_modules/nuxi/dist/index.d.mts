import { ArgsDef, CommandDef } from "citty";

//#region src/main.d.ts
declare const main: CommandDef<any>;
declare const runMain: () => Promise<void>;
//#endregion
//#region src/run.d.ts
declare function runCommand<T extends ArgsDef = ArgsDef>(command: CommandDef<T>, argv?: string[], data?: {
  overrides?: Record<string, any>;
}): Promise<{
  result: unknown;
}>;
//#endregion
export { main, runCommand, runMain };