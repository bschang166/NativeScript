import * as testModule from "../../ui-test";
import * as wrapLayoutModule from "tns-core-modules/ui/layouts/wrap-layout";
export declare class WrapLayoutTest extends testModule.UITest<wrapLayoutModule.WrapLayout> {
    create(): wrapLayoutModule.WrapLayout;
    test_StackLayout_recycling(): void;
    testItemWidhtItemHeight(): void;
    testPaddingReduceAvailableSize(): void;
    testHorizontalOrientation(): void;
    testVerticalOrientation(): void;
    testChangeOrientation(): void;
    testItemWidth(): void;
    testChangeItemWidth(): void;
    testItemWidthLargerThanTheAvailableWidth(): void;
    testItemHeight(): void;
    testChangeItemHeight(): void;
    testItemHeightLargerThanTheAvailableHeight(): void;
    testPaddingLeftAndTop(): void;
    testPaddingRight(): void;
    testPaddingBottom(): void;
    test_percent_children_support(): void;
    test_percent_support_nativeLayoutParams_are_correct(): void;
}
export declare function createTestCase(): WrapLayoutTest;
//# sourceMappingURL=wrap-layout-tests.d.ts.map