import { PromptResult, LoginResult } from ".";
export * from "./dialogs-common";
export declare function alert(arg: any): Promise<void>;
export declare function confirm(arg: any): Promise<boolean>;
export declare function prompt(arg: any): Promise<PromptResult>;
export declare function login(): Promise<LoginResult>;
export declare function action(): Promise<string>;
//# sourceMappingURL=dialogs.ios.d.ts.map