export declare const RESOURCE_PREFIX = "res://";
export declare const FILE_PREFIX = "file:///";
export declare function escapeRegexSymbols(source: string): string;
export declare function convertString(value: any): any;
export declare module layout {
    const UNSPECIFIED: number;
    const EXACTLY: number;
    const AT_MOST: number;
    const MEASURED_HEIGHT_STATE_SHIFT = 16;
    const MEASURED_STATE_TOO_SMALL = 16777216;
    const MEASURED_STATE_MASK = 4278190080;
    const MEASURED_SIZE_MASK = 16777215;
    function getMode(mode: number): string;
    function getMeasureSpecMode(spec: number): number;
    function getMeasureSpecSize(spec: number): number;
    function measureSpecToString(measureSpec: number): string;
    function round(value: number): number;
}
export declare function isFileOrResourcePath(path: string): boolean;
export declare function isDataURI(uri: string): boolean;
export declare function mergeSort(arr: any, compareFunc: any): any;
export declare function merge(left: any, right: any, compareFunc: any): any[];
export declare function hasDuplicates(arr: Array<any>): boolean;
export declare function eliminateDuplicates(arr: Array<any>): Array<any>;
//# sourceMappingURL=utils-common.d.ts.map