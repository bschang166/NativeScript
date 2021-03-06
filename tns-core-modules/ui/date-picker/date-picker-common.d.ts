import { DatePicker as DatePickerDefinition } from ".";
import { View, Property } from "../core/view";
export * from "../core/view";
export declare class DatePickerBase extends View implements DatePickerDefinition {
    year: number;
    month: number;
    day: number;
    maxDate: Date;
    minDate: Date;
    date: Date;
}
export declare const yearProperty: Property<DatePickerBase, number>;
export declare const monthProperty: Property<DatePickerBase, number>;
export declare const dayProperty: Property<DatePickerBase, number>;
export declare const maxDateProperty: Property<DatePickerBase, Date>;
export declare const minDateProperty: Property<DatePickerBase, Date>;
export declare const dateProperty: Property<DatePickerBase, Date>;
//# sourceMappingURL=date-picker-common.d.ts.map