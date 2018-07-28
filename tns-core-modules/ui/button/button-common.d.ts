import { Button as ButtonDefinition } from ".";
import { TextBase } from "../text-base";
export * from "../text-base";
export declare abstract class ButtonBase extends TextBase implements ButtonDefinition {
    static tapEvent: string;
    textWrap: boolean;
}
//# sourceMappingURL=button-common.d.ts.map