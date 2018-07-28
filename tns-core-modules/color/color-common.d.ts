import * as definition from ".";
export declare class Color implements definition.Color {
    private _argb;
    private _name;
    constructor(color: number);
    constructor(color: string);
    constructor(a: number, r: number, g: number, b: number);
    readonly a: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly argb: number;
    readonly hex: string;
    readonly name: string;
    readonly ios: UIColor;
    readonly android: number;
    _argbFromString(hex: string): number;
    equals(value: definition.Color): boolean;
    static equals(value1: definition.Color, value2: definition.Color): boolean;
    static isValid(value: any): boolean;
    private _componentToHex;
    private _normalizeHex;
    toString(): string;
}
//# sourceMappingURL=color-common.d.ts.map