import { LayoutBaseCommon, View } from "./layout-base-common";
export * from "./layout-base-common";
export declare class LayoutBase extends LayoutBaseCommon {
    nativeViewProtected: UIView;
    addChild(child: View): void;
    insertChild(child: View, atIndex: number): void;
    removeChild(child: View): void;
    _setNativeClipToBounds(): void;
}
//# sourceMappingURL=layout-base.ios.d.ts.map