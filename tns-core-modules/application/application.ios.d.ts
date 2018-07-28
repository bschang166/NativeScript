export * from "./application-common";
import { View } from "../ui/core/view";
import { NavigationEntry } from "../ui/frame";
export declare function getMainEntry(): NavigationEntry;
export declare function getRootView(): View;
export declare function start(entry?: string | NavigationEntry): void;
export declare function run(entry?: string | NavigationEntry): void;
export declare function _resetRootView(entry?: NavigationEntry | string): void;
export declare function getNativeApplication(): UIApplication;
//# sourceMappingURL=application.ios.d.ts.map