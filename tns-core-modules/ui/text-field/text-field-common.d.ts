import { TextField as TextFieldDefinition } from ".";
import { EditableTextBase, Property } from "../editable-text-base";
export * from "../editable-text-base";
export declare class TextFieldBase extends EditableTextBase implements TextFieldDefinition {
    static returnPressEvent: string;
    secure: boolean;
}
export declare const secureProperty: Property<TextFieldBase, boolean>;
//# sourceMappingURL=text-field-common.d.ts.map