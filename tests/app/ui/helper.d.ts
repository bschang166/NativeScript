import * as frame from "tns-core-modules/ui/frame";
import { ViewBase, View } from "tns-core-modules/ui/core/view";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Button } from "tns-core-modules/ui/button";
import { ActionBar } from "tns-core-modules/ui/action-bar";
import { Color } from "tns-core-modules/color";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
import { FormattedString } from "tns-core-modules/text/formatted-string";
export declare var ASYNC: number;
export declare var MEMORY_ASYNC: number;
export declare function getColor(uiColor: UIColor): Color;
export declare function clearPage(): void;
export declare function do_PageTest(test: (views: [Page, View, View, View, ActionBar]) => void, content: View, secondView: View, thirdView: View): void;
export declare function do_PageTest_WithButton(test: (views: [Page, Button, ActionBar]) => void): void;
export declare function do_PageTest_WithStackLayout_AndButton(test: (views: [Page, StackLayout, Button, ActionBar]) => void): void;
export declare function buildUIAndRunTest<T extends View>(controlToTest: T, testFunction: (views: [T, Page]) => void, pageCss?: any): void;
export declare function buildUIWithWeakRefAndInteract<T extends View>(createFunc: () => T, interactWithViewFunc?: (view: T) => void, done?: any): void;
export declare function navigateToModuleAndRunTest(moduleName: any, context: any, testFunction: any): void;
export declare function navigate(pageFactory: () => Page, navigationContext?: any): Page;
export declare function navigateWithHistory(pageFactory: () => Page, navigationContext?: any): Page;
export declare function navigateToModule(moduleName: string, context?: any): Page;
export declare function getCurrentPage(): Page;
export declare function getClearCurrentPage(): Page;
export declare function waitUntilNavigatedTo(page: Page, action: Function): void;
export declare function waitUntilNavigatedFrom(action: Function): void;
export declare function waitUntilLayoutReady(view: View): void;
export declare function navigateWithEntry(entry: frame.NavigationEntry): Page;
export declare function goBack(): void;
export declare function assertAreClose(actual: number, expected: number, message: string): void;
export declare function assertViewColor(testView: View, hexColor: string): void;
export declare function assertViewBackgroundColor(testView: ViewBase, hexColor: string): void;
export declare function assertTabSelectedTabTextColor(testView: ViewBase, hexColor: string): void;
export declare function forceGC(): void;
export declare function _generateFormattedString(): FormattedString;
export declare function nativeView_recycling_test(createNew: () => View, createLayout?: () => LayoutBase, nativeGetters?: Map<string, (view: any) => any>, customSetters?: Map<string, any>): void;
//# sourceMappingURL=helper.d.ts.map