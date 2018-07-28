export * from "./utils-common";
export declare module layout {
    function makeMeasureSpec(size: number, mode: number): number;
    function getDisplayDensity(): number;
    function toDevicePixels(value: number): number;
    function toDeviceIndependentPixels(value: number): number;
    function measureNativeView(nativeView: any, width: number, widthMode: number, height: number, heightMode: number): {
        width: number;
        height: number;
    };
}
export declare module ios {
    function getter<T>(_this: any, property: T | {
        (): T;
    }): T;
    module collections {
        function jsArrayToNSArray(str: string[]): NSArray<any>;
        function nsArrayToJSArray(a: NSArray<any>): Array<Object>;
    }
    function isLandscape(): boolean;
    var MajorVersion: number;
    function openFile(filePath: string): boolean;
    function getCurrentAppPath(): string;
    function joinPaths(...paths: string[]): string;
    function getVisibleViewController(rootViewController: UIViewController): UIViewController;
}
export declare function GC(): void;
export declare function openUrl(location: string): boolean;
//# sourceMappingURL=utils.ios.d.ts.map