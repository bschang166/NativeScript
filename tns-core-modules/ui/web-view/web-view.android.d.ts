import { WebViewBase } from "./web-view-common";
export * from "./web-view-common";
export declare class WebView extends WebViewBase {
    nativeViewProtected: android.webkit.WebView;
    createNativeView(): globalAndroid.webkit.WebView;
    initNativeView(): void;
    disposeNativeView(): void;
    _loadUrl(src: string): void;
    _loadData(src: string): void;
    readonly canGoBack: boolean;
    stopLoading(): void;
    readonly canGoForward: boolean;
    goBack(): void;
    goForward(): void;
    reload(): void;
}
//# sourceMappingURL=web-view.android.d.ts.map