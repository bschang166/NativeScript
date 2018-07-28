import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import * as testModule from "../../ui-test";
export declare class StackLayoutTest extends testModule.UITest<StackLayout> {
    private rootLayout;
    private btn1;
    private btn2;
    create(): StackLayout;
    test_StackLayout_recycling(): void;
    test_orientation_DefaultValue(): void;
    test_SetWrongOrientation_ShouldThrowError(): void;
    test_Orientation_Change(): void;
    test_ShouldMeasureWith_AtMost_OnVertical(): void;
    test_ShouldMeasureWith_AtMost_OnHorizontal(): void;
    test_DesiredSize_Vertical(): void;
    test_DesiredSize_Horizontal(): void;
    test_Padding_Vertical(): void;
    test_Padding_Horizontal(): void;
    private assertChildTexts;
    test_insertChildAtPosition(): void;
    test_getChildIndex(): void;
    test_codesnippets(): void;
    private setup_percent;
    test_percent_support_vertical(): void;
    test_percent_support_horizontal(): void;
    test_percent_support_nativeLayoutParams_are_correct(): void;
}
export declare function createTestCase(): StackLayoutTest;
//# sourceMappingURL=stack-layout-tests.d.ts.map