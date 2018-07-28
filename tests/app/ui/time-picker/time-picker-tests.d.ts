import * as testModule from "../../ui-test";
import * as timePickerModule from "tns-core-modules/ui/time-picker";
export declare class TimePickerTest extends testModule.UITest<timePickerModule.TimePicker> {
    create(): timePickerModule.TimePicker;
    test_recycling(): void;
    test_DummyForCodeSnippet(): void;
    private setUpTimePicker;
    test_set_color(): void;
    test_WhenCreated_MinuteIntervalIs1(): void;
    test_WhenCreated_HourIsCurrentHour(): void;
    test_WhenCreated_MinHourIs0(): void;
    test_WhenCreated_MaxHourIs23(): void;
    test_WhenCreated_MinuteIsCurrentMinute(): void;
    test_WhenCreated_MinMinuteIs0(): void;
    test_WhenCreated_MaxMinuteIs59(): void;
    testMinuteIntervalThrowExceptionWhenLessThan1(): void;
    testMinuteIntervalThrowExceptionWhenGreaterThan30(): void;
    testMinuteIntervalThrowExceptionWhenNotFold60(): void;
    testHourThrowExceptionWhenLessThanMinHour(): void;
    testMinHourThrowExceptionWhenHourLessThanMinHour(): void;
    testHourThrowExceptionWhenGreaterThanMaxHour(): void;
    testMaxHourThrowExceptionWhenHourGreaterThanMaxHour(): void;
    testMinuteThrowExceptionWhenLessThanMinMinute(): void;
    testMinMinuteThrowExceptionWhenMinuteLessThanMinMinute(): void;
    testMinuteThrowExceptionWhenGreaterThanMaxMinute(): void;
    testMaxMinuteThrowExceptionWhenMinuteGreaterThanMaxMinute(): void;
    testHourFromLocalToNative(): void;
    testMinuteFromLocalToNative(): void;
    testHourFromNativeToLocal(): void;
    testMinuteFromNativeToLocal(): void;
    testHourAndMinuteFromNativeToLocal(): void;
    testSetHourMinute_BeforeLoaded(): void;
    testTimeSetHourMinute_BeforeLoaded(): void;
    testSetHourMinute_AfterLoaded(): void;
    testTimeSetHourMinute_AfterLoaded(): void;
    testSetTimeChangesHourAndMinute(): void;
}
export declare function createTestCase(): TimePickerTest;
//# sourceMappingURL=time-picker-tests.d.ts.map