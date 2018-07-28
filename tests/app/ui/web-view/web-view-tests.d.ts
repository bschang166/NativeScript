import * as testModule from "../../ui-test";
import * as webViewModule from "tns-core-modules/ui/web-view";
export declare class WebViewTest extends testModule.UITest<webViewModule.WebView> {
    create(): webViewModule.WebView;
    testLoadExistingUrl(done: any): void;
    testLoadLocalFile(done: any): void;
    testLoadLocalFileWithSpaceInPath(done: any): void;
    testLoadHTMLString(done: any): void;
    testLoadUpperCaseSrc(done: any): void;
}
export declare function createTestCase(): WebViewTest;
//# sourceMappingURL=web-view-tests.d.ts.map