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
export declare module ad {
    function getApplicationContext(): globalAndroid.content.Context;
    function getApplication(): globalAndroid.app.Application;
    function getResources(): globalAndroid.content.res.Resources;
    function getInputMethodManager(): android.view.inputmethod.InputMethodManager;
    function showSoftInput(nativeView: android.view.View): void;
    function dismissSoftInput(nativeView?: android.view.View): void;
    module collections {
        function stringArrayToStringSet(str: string[]): java.util.HashSet<string>;
        function stringSetToStringArray(stringSet: any): string[];
    }
    module resources {
        function getDrawableId(name: any): number;
        function getStringId(name: any): number;
        function getId(name: string): number;
        function getPalleteColor(name: string, context: android.content.Context): number;
        function getPaletteColor(name: string, context: android.content.Context): number;
    }
}
export declare function GC(): void;
export declare function openUrl(location: string): boolean;
//# sourceMappingURL=utils.android.d.ts.map