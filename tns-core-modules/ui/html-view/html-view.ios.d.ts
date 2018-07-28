import { HtmlViewBase } from "./html-view-common";
export * from "./html-view-common";
export declare class HtmlView extends HtmlViewBase {
    nativeViewProtected: UITextView;
    constructor();
    readonly ios: UITextView;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
}
//# sourceMappingURL=html-view.ios.d.ts.map