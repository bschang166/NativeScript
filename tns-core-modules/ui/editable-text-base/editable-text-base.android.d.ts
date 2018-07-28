/// <reference types="node" />
import { EditableTextBase as EditableTextBaseCommon } from "./editable-text-base-common";
export * from "./editable-text-base-common";
export declare let dismissKeyboardTimeoutId: NodeJS.Timer;
export declare let dismissKeyboardOwner: WeakRef<EditableTextBase>;
export declare abstract class EditableTextBase extends EditableTextBaseCommon {
    _dirtyTextAccumulator: string;
    nativeViewProtected: android.widget.EditText;
    private _keyListenerCache;
    private _inputType;
    _changeFromCode: boolean;
    abstract _configureEditText(editText: android.widget.EditText): void;
    _onReturnPress(): void;
    createNativeView(): globalAndroid.widget.EditText;
    initNativeView(): void;
    disposeNativeView(): void;
    resetNativeView(): void;
    onUnloaded(): void;
    dismissSoftInput(): void;
    focus(): boolean;
    _setInputType(inputType: number): void;
}
//# sourceMappingURL=editable-text-base.android.d.ts.map