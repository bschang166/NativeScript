import { TextView as TextViewDefinition } from ".";
import { EditableTextBase } from "../editable-text-base";
export * from "../editable-text-base";
export declare class TextView extends EditableTextBase implements TextViewDefinition {
    private _ios;
    private _delegate;
    private _isShowingHint;
    _isEditing: boolean;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    readonly ios: UITextView;
    _refreshHintState(hint: string, text: string): void;
    private _refreshColor;
    showHint(hint: string): void;
    showText(): void;
}
//# sourceMappingURL=text-view.ios.d.ts.map