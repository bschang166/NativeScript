import { WebViewBase } from "./web-view-common";
export * from "./web-view-common";
export declare class WebView extends WebViewBase {
    private _ios;
    private _delegate;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    readonly ios: WKWebView;
    stopLoading(): void;
    _loadUrl(src: string): void;
    _loadData(content: string): void;
    readonly canGoBack: boolean;
    readonly canGoForward: boolean;
    goBack(): void;
    goForward(): void;
    reload(): void;
}
//# sourceMappingURL=web-view.ios.d.ts.map