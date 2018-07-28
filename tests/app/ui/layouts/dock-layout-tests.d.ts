import { DockLayout } from "tns-core-modules/ui/layouts/dock-layout";
import * as testModule from "../../ui-test";
export declare class DockLayoutTest extends testModule.UITest<DockLayout> {
    create(): DockLayout;
    test_recycling(): void;
    test_item_recycling(): void;
    test_stretchLastChild_DefaultValue(): void;
    test_dock_DefaultValue(): void;
    test_setInvalidDock_Throws(): void;
    test_dock_left(): void;
    test_dock_right(): void;
    test_dock_top(): void;
    test_dock_button(): void;
    test_dock_left_stretched(): void;
    test_dock_left_top_righ_bottom_fill(): void;
    test_padding(): void;
    test_codesnippets(): void;
    test_percent_children_support(): void;
    test_percent_support_nativeLayoutParams_are_correct(): void;
}
export declare function createTestCase(): DockLayoutTest;
//# sourceMappingURL=dock-layout-tests.d.ts.map