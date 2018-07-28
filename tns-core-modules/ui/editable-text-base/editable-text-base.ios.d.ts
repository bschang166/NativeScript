import { EditableTextBase as EditableTextBaseCommon, FormattedString } from "./editable-text-base-common";
export * from "./editable-text-base-common";
export declare abstract class EditableTextBase extends EditableTextBaseCommon {
    nativeViewProtected: UITextField | UITextView;
    dismissSoftInput(): void;
}
export declare function _updateCharactersInRangeReplacementString(formattedText: FormattedString, rangeLocation: number, rangeLength: number, replacementString: string): void;
//# sourceMappingURL=editable-text-base.ios.d.ts.map