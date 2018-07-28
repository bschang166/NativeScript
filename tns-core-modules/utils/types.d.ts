export declare function isString(value: any): boolean;
export declare function isNumber(value: any): boolean;
export declare function isBoolean(value: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function isUndefined(value: any): boolean;
export declare function isDefined(value: any): boolean;
export declare function isNullOrUndefined(value: any): boolean;
export declare function verifyCallback(value: any): void;
export declare function getClass(object: Object): string;
export declare function getClassInfo(object: Object): ClassInfo;
export declare function getBaseClasses(object: any): Array<string>;
export declare class ClassInfo {
    private _typeCosntructor;
    private _name;
    private _baseClassInfo;
    constructor(typeCosntructor: Function);
    readonly name: string;
    readonly baseClassInfo: ClassInfo;
    private static _getBase;
}
export declare function toUIString(obj: any): string;
//# sourceMappingURL=types.d.ts.map