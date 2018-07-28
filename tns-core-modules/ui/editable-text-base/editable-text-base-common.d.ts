import { EditableTextBase as EditableTextBaseDefinition, KeyboardType, ReturnKeyType, UpdateTextTrigger, AutocapitalizationType } from ".";
import { TextBase, Property, CssProperty, Style, Color } from "../text-base";
export * from "../text-base";
export declare abstract class EditableTextBase extends TextBase implements EditableTextBaseDefinition {
    static blurEvent: string;
    static focusEvent: string;
    keyboardType: KeyboardType;
    returnKeyType: ReturnKeyType;
    updateTextTrigger: UpdateTextTrigger;
    autocapitalizationType: AutocapitalizationType;
    editable: boolean;
    autocorrect: boolean;
    hint: string;
    maxLength: number;
    abstract dismissSoftInput(): any;
    abstract _setInputType(inputType: number): void;
}
export declare const placeholderColorProperty: CssProperty<Style, Color>;
export declare const keyboardTypeProperty: Property<EditableTextBase, KeyboardType>;
export declare const returnKeyTypeProperty: Property<EditableTextBase, ReturnKeyType>;
export declare const editableProperty: Property<EditableTextBase, boolean>;
export declare const updateTextTriggerProperty: Property<EditableTextBase, UpdateTextTrigger>;
export declare const autocapitalizationTypeProperty: Property<EditableTextBase, AutocapitalizationType>;
export declare const autocorrectProperty: Property<EditableTextBase, boolean>;
export declare const hintProperty: Property<EditableTextBase, string>;
export declare const maxLengthProperty: Property<EditableTextBase, number>;
//# sourceMappingURL=editable-text-base-common.d.ts.map