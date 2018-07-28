import { Color } from "../../color";
import { Page } from "../page";
export declare const STRING = "string";
export declare const PROMPT = "Prompt";
export declare const CONFIRM = "Confirm";
export declare const ALERT = "Alert";
export declare const LOGIN = "Login";
export declare const OK = "OK";
export declare const CANCEL = "Cancel";
export declare module inputType {
    const text: string;
    const password: string;
    const email: string;
}
export declare function getCurrentPage(): Page;
export declare function getButtonColors(): {
    color: Color;
    backgroundColor: Color;
};
export declare function getLabelColor(): Color;
export declare function getTextFieldColor(): Color;
export declare function isDialogOptions(arg: any): boolean;
//# sourceMappingURL=dialogs-common.d.ts.map