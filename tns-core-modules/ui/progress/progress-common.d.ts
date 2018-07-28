import { Progress as ProgressDefinition } from ".";
import { View, Property, CoercibleProperty } from "../core/view";
export * from "../core/view";
export declare class ProgressBase extends View implements ProgressDefinition {
    value: number;
    maxValue: number;
}
export declare const valueProperty: CoercibleProperty<ProgressBase, number>;
export declare const maxValueProperty: Property<ProgressBase, number>;
//# sourceMappingURL=progress-common.d.ts.map