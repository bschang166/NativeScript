import { TextTransform } from "./text-base";
import { TextBaseCommon, FormattedString, Span } from "./text-base-common";
export * from "./text-base-common";
export declare class TextBase extends TextBaseCommon {
    nativeViewProtected: UITextField | UITextView | UILabel | UIButton;
    _setNativeText(reset?: boolean): void;
    setFormattedTextDecorationAndTransform(): void;
    setTextDecorationAndTransform(): void;
    createNSMutableAttributedString(formattedString: FormattedString): NSMutableAttributedString;
    createMutableStringForSpan(span: Span, text: string): NSMutableAttributedString;
}
export declare function getTransformedText(text: string, textTransform: TextTransform): string;
//# sourceMappingURL=text-base.ios.d.ts.map