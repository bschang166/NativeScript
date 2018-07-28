import { GridLayout as GridLayoutDefinition, ItemSpec as ItemSpecDefinition } from ".";
import { LayoutBase, View, Observable, Property } from "../layout-base";
export * from "../layout-base";
export declare class ItemSpec extends Observable implements ItemSpecDefinition {
    private _value;
    private _unitType;
    constructor();
    owner: GridLayoutBase;
    index: number;
    _actualLength: number;
    static create(value: number, type: GridUnitType): ItemSpec;
    readonly actualLength: number;
    static equals(value1: ItemSpec, value2: ItemSpec): boolean;
    readonly gridUnitType: GridUnitType;
    readonly isAbsolute: boolean;
    readonly isAuto: boolean;
    readonly isStar: boolean;
    readonly value: number;
}
export declare class GridLayoutBase extends LayoutBase implements GridLayoutDefinition {
    private _rows;
    private _cols;
    static getColumn(element: View): number;
    static setColumn(element: View, value: number): void;
    static getColumnSpan(element: View): number;
    static setColumnSpan(element: View, value: number): void;
    static getRow(element: View): number;
    static setRow(element: View, value: number): void;
    static getRowSpan(element: View): number;
    static setRowSpan(element: View, value: number): void;
    addRow(itemSpec: ItemSpec): void;
    addColumn(itemSpec: ItemSpec): void;
    removeRow(itemSpec: ItemSpec): void;
    removeColumn(itemSpec: ItemSpec): void;
    removeColumns(): void;
    removeRows(): void;
    onRowChanged(element: View, oldValue: number, newValue: number): void;
    onRowSpanChanged(element: View, oldValue: number, newValue: number): void;
    onColumnChanged(element: View, oldValue: number, newValue: number): void;
    onColumnSpanChanged(element: View, oldValue: number, newValue: number): void;
    _onRowAdded(itemSpec: ItemSpec): void;
    _onColumnAdded(itemSpec: ItemSpec): void;
    _onRowRemoved(itemSpec: ItemSpec, index: number): void;
    _onColumnRemoved(itemSpec: ItemSpec, index: number): void;
    getColumns(): Array<ItemSpec>;
    getRows(): Array<ItemSpec>;
    protected readonly columnsInternal: Array<ItemSpec>;
    protected readonly rowsInternal: Array<ItemSpec>;
    protected invalidate(): void;
    rows: string;
    columns: string;
}
export declare const columnProperty: Property<View, number>;
export declare const columnSpanProperty: Property<View, number>;
export declare const rowProperty: Property<View, number>;
export declare const rowSpanProperty: Property<View, number>;
export declare type GridUnitType = "pixel" | "star" | "auto";
export declare namespace GridUnitType {
    const PIXEL: "pixel";
    const STAR: "star";
    const AUTO: "auto";
    const isValid: (value: any) => value is import("tns-core-modules/ui/layouts/grid-layout/grid-layout").GridUnitType;
    const parse: (value: any) => import("tns-core-modules/ui/layouts/grid-layout/grid-layout").GridUnitType;
}
//# sourceMappingURL=grid-layout-common.d.ts.map