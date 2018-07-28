import * as testModule from "../../ui-test";
import * as datePickerModule from "tns-core-modules/ui/date-picker";
export declare function test_recycling(): void;
export declare class DatePickerTest extends testModule.UITest<datePickerModule.DatePicker> {
    create(): datePickerModule.DatePicker;
    private setUpDatePicker;
    test_DummyForCodeSnippet(): void;
    test_set_color(): void;
    test_WhenCreated_YearIsCurrentYear(): void;
    test_WhenCreated_MonthIsCurrentMonth(): void;
    test_WhenCreated_DayIsCurrentDay(): void;
    test_WhenCreated_NativeYearIsCurrentYear(): void;
    test_WhenCreated_NativeMonthIsCurrentMonth(): void;
    test_WhenCreated_NativeDayIsCurrentDay(): void;
    testYearFromLocalToNative(): void;
    testMonthFromLocalToNative(): void;
    testDayFromLocalToNative(): void;
    test_DateIsSetCorrectlyWhenDayIsSet(): void;
    test_DateIsSetCorrectlyWhenMonthIsSet(): void;
    test_DateIsSetCorrectlyWhenYearIsSet(): void;
    testMaxDateFromLocalToNative(): void;
    testMinDateFromLocalToNative(): void;
    testYearFromNativeToLocal(): void;
    testMonthFromNativeToLocal(): void;
    testYearMonthDayFromNativeToLocal(): void;
    testDayFromNativeToLocal(): void;
    test_DateFromNativeToLocalWithDay(): void;
    test_DateFromNativeToLocalWithMonth(): void;
    test_DateFromNativeToLocalWithYear(): void;
    test_DateFromNativeToLocalWithAll(): void;
    testSetYearMonthDay_BeforeLoaded(): void;
    testSetYearMonthDay_AfterLoaded(): void;
}
export declare function createTestCase(): DatePickerTest;
//# sourceMappingURL=date-picker-tests.d.ts.map