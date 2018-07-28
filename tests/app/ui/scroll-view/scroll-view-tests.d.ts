import { UITest } from "../../ui-test";
import { ScrollView } from "tns-core-modules/ui/scroll-view";
declare class ScrollLayoutTest extends UITest<ScrollView> {
    create(): ScrollView;
    test_snippets(): void;
    test_default_TNS_values(): void;
    test_vertical_oriantation_creates_correct_native_view(): void;
    test_horizontal_oriantation_creates_correct_native_view(): void;
    test_scrollableHeight_vertical_orientation_when_content_is_small(): void;
    test_scrollableHeight_vertical_orientation_when_content_is_big(): void;
    test_scrollableWidth_horizontal_orientation_when_content_is_small(): void;
    test_scrollableWidth_horizontal_orientation_when_content_is_big(): void;
    test_scrollToVerticalOffset_no_animation(): void;
    test_scrollToVerticalOffset_with_animation(): void;
    test_scrollToHorizontalOffset_no_animation(): void;
    test_scrollToHorizontalOffset_with_animation(): void;
    test_scrollView_persistsState_vertical(): void;
    test_scrollView_persistsState_horizontal(): void;
    test_scrollView_vertical_raised_scroll_event(): void;
    test_scrollView_horizontal_raised_scroll_event(): void;
    test_scrollView_vertical_raised_scroll_event_after_loaded(): void;
    test_scrollView_horizontal_raised_scroll_event_after_loaded(): void;
    test_scrollView_horizontal_can_set_indicator_state(): void;
    test_scrollView_vertical_can_set_indicator_state(): void;
}
export declare function createTestCase(): ScrollLayoutTest;
export {};
//# sourceMappingURL=scroll-view-tests.d.ts.map