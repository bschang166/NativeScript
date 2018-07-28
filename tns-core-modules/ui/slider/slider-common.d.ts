import { Slider as SliderDefinition } from ".";
import { View, Property, CoercibleProperty } from "../core/view";
export * from "../core/view";
export declare class SliderBase extends View implements SliderDefinition {
    value: number;
    minValue: number;
    maxValue: number;
}
export declare const valueProperty: CoercibleProperty<SliderBase, number>;
export declare const minValueProperty: Property<SliderBase, number>;
export declare const maxValueProperty: CoercibleProperty<SliderBase, number>;
//# sourceMappingURL=slider-common.d.ts.map