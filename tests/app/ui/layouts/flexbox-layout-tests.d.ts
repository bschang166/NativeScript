export declare namespace FlexDirection {
    const ROW: "row";
    const ROW_REVERSE: "row-reverse";
    const COLUMN: "column";
    const COLUMN_REVERSE: "column-reverse";
}
export declare namespace FlexWrap {
    const NOWRAP: "nowrap";
    const WRAP: "wrap";
    const WRAP_REVERSE: "wrap-reverse";
}
export declare namespace JustifyContent {
    const FLEX_START: "flex-start";
    const FLEX_END: "flex-end";
    const CENTER: "center";
    const SPACE_BETWEEN: "space-between";
    const SPACE_AROUND: "space-around";
}
export declare namespace AlignItems {
    const FLEX_START: "flex-start";
    const FLEX_END: "flex-end";
    const CENTER: "center";
    const BASELINE: "baseline";
    const STRETCH: "stretch";
}
export declare namespace AlignContent {
    const FLEX_START: "flex-start";
    const FLEX_END: "flex-end";
    const CENTER: "center";
    const SPACE_BETWEEN: "space-between";
    const SPACE_AROUND: "space-around";
    const STRETCH: "stretch";
}
export declare namespace AlignSelf {
    const AUTO: "auto";
    const FLEX_START: "flex-start";
    const FLEX_END: "flex-end";
    const CENTER: "center";
    const BASELINE: "baseline";
    const STRETCH: "stretch";
}
export declare function testFlexboxPage(): void;
export declare function test_recycling(): void;
export declare function test_item_recycling(): void;
export declare const testFlexWrap_wrap: () => void;
export declare const testFlexWrap_nowrap: () => void;
export declare const testFlexWrap_wrap_reverse: () => void;
export declare const testFlexWrap_wrap_flexDirection_column: () => void;
export declare const testFlexWrap_nowrap_flexDirection_column: () => void;
export declare const testFlexWrap_wrap_reverse_flexDirection_column: () => void;
export declare const testFlexItem_match_parent: () => void;
export declare const testFlexItem_match_parent_flexDirection_column: () => void;
export declare const testFlexboxLayout_wrapContent: () => void;
export declare const testFlexboxLayout_wrapped_with_ScrollView: () => void;
export declare const testFlexboxLayout_wrapped_with_HorizontalScrollView: () => void;
export declare const testJustifyContent_flexStart: () => void;
export declare const testJustifyContent_flexStart_withParentPadding: () => void;
export declare const testJustifyContent_flexEnd: () => void;
export declare const testJustifyContent_flexEnd_withParentPadding: () => void;
export declare const testJustifyContent_center: () => void;
export declare const testJustifyContent_center_withParentPadding: () => void;
export declare const testJustifyContent_spaceBetween: () => void;
export declare const testJustifyContent_spaceBetween_withPadding: () => void;
export declare const testJustifyContent_spaceAround: () => void;
export declare const testJustifyContent_spaceAround_withPadding: () => void;
export declare const testJustifyContent_flexStart_flexDirection_column: () => void;
export declare const testJustifyContent_flexEnd_flexDirection_column: () => void;
export declare const testJustifyContent_center_flexDirection_column: () => void;
export declare const testJustifyContent_spaceBetween_flexDirection_column: () => void;
export declare const testJustifyContent_spaceBetween_flexDirection_column_withPadding: () => void;
export declare const testJustifyContent_spaceAround_flexDirection_column: () => void;
export declare const testJustifyContent_spaceAround_flexDirection_column_withPadding: () => void;
export declare const testFlexGrow_withExactParentLength: () => void;
export declare const testFlexGrow_withExactParentLength_flexDirection_column: () => void;
export declare const testFlexGrow_including_view_gone: () => void;
export declare const testAlignContent_stretch: () => void;
export declare const testAlignContent_flexStart: () => void;
export declare const testAlignContent_flexEnd: () => void;
export declare const testAlignContent_flexEnd_parentPadding: () => void;
export declare const testAlignContent_flexEnd_parentPadding_column: () => void;
export declare const testAlignContent_center: () => void;
export declare const testAlignContent_spaceBetween: () => void;
export declare const testAlignContent_spaceBetween_withPadding: () => void;
export declare const testAlignContent_spaceAround: () => void;
export declare const testAlignContent_stretch_parentWrapContent: () => void;
export declare const testAlignContent_stretch_flexDirection_column: () => void;
export declare const testAlignContent_flexStart_flexDirection_column: () => void;
export declare const testAlignContent_flexEnd_flexDirection_column: () => void;
export declare const testAlignContent_center_flexDirection_column: () => void;
export declare const testAlignContent_spaceBetween_flexDirection_column: () => void;
export declare const testAlignContent_spaceAround_flexDirection_column: () => void;
export declare const testAlignContent_stretch_parentWrapContent_flexDirection_column: () => void;
export declare const testAlignItems_stretch: () => void;
export declare const testAlignSelf_stretch: () => void;
export declare const testAlignSelf_stretch_flexDirection_column: () => void;
export declare const testAlignItems_flexStart: () => void;
export declare const testAlignItems_flexEnd: () => void;
export declare const testAlignItems_flexEnd_parentPadding: () => void;
export declare const testAlignItems_flexEnd_parentPadding_column: () => void;
export declare const testAlignItems_center: () => void;
export declare const testAlignItems_flexEnd_wrapReverse: () => void;
export declare const testAlignItems_center_wrapReverse: () => void;
export declare const testAlignItems_flexStart_flexDirection_column: () => void;
export declare const testAlignItems_flexEnd_flexDirection_column: () => void;
export declare const testAlignItems_center_flexDirection_column: () => void;
export declare const testAlignItems_flexEnd_wrapReverse_flexDirection_column: () => void;
export declare const testAlignItems_center_wrapReverse_flexDirection_column: () => void;
export declare const testAlignItems_baseline: () => void;
export declare const testAlignItems_baseline_wrapReverse: () => void;
export declare const testFlexDirection_row_reverse: () => void;
export declare const testFlexDirection_column_reverse: () => void;
export declare const testFlexBasisPercent_wrap: () => void;
export declare const testFlexBasisPercent_nowrap: () => void;
export declare const testFlexBasisPercent_wrap_flexDirection_column: () => void;
export declare const testFlexBasisPercent_nowrap_flexDirection_column: () => void;
export declare const testMinWidth_initial_width_less_than_minWidth: () => void;
export declare const testMinWidth_works_as_lower_bound_shrink_to: () => void;
export declare const testMinHeight_initial_height_less_than_minHeight: () => void;
export declare const testMinHeight_works_as_lower_bound_shrink_to: () => void;
export declare const testView_visibility_gone: () => void;
export declare const testView_visibility_gone_first_item_in_flex_line_horizontal: () => void;
export declare const testView_visibility_gone_first_item_in_flex_line_vertical: () => void;
export declare const testWrapBefore: () => void;
export declare const testWrapBefore2: () => void;
export declare const testWrapBefore_nowrap: () => void;
export declare const testWrap_parentPadding_horizontal: () => void;
export declare const testWrap_parentPadding_vertical: () => void;
export declare const testWrap_childMargin_horizontal: () => void;
export declare const testFirstItemLarge_horizontal: () => void;
export declare const testFirstItemLarge_vertical: () => void;
export declare const testWrap_childMargin_vertical: () => void;
export declare const testFlexboxLayout_does_not_crash_with_proxy_view_container: () => void;
//# sourceMappingURL=flexbox-layout-tests.d.ts.map