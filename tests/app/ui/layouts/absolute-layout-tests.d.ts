import * as testModule from "../../ui-test";
import * as absoluteLayoutModule from "tns-core-modules/ui/layouts/absolute-layout";
export declare class AbsoluteLayoutTest extends testModule.UITest<absoluteLayoutModule.AbsoluteLayout> {
    create(): absoluteLayoutModule.AbsoluteLayout;
    test_recycling(): void;
    test_item_recycling(): void;
    snippet(): void;
    testAll(): void;
    test_padding(): void;
    test_percent_children_support(): void;
    test_percent_support_nativeLayoutParams_are_correct(): void;
}
export declare function createTestCase(): AbsoluteLayoutTest;
//# sourceMappingURL=absolute-layout-tests.d.ts.map