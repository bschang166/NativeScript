import { TextView as TextViewDefinition } from ".";
import { EditableTextBase } from "../editable-text-base";
export * from "../text-base";
export declare class TextView extends EditableTextBase implements TextViewDefinition {
    _configureEditText(editText: android.widget.EditText): void;
    resetNativeView(): void;
}
//# sourceMappingURL=text-view.android.d.ts.map