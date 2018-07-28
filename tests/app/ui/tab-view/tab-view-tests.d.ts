import { UITest } from "../../ui-test";
import * as tabViewModule from "tns-core-modules/ui/tab-view";
export declare class TabViewTest extends UITest<tabViewModule.TabView> {
    create(): tabViewModule.TabView;
    test_recycling(): void;
    _createItems(count: number): Array<tabViewModule.TabViewItem>;
    tearDown(): void;
    waitUntilSelectedItemIsFullyLoaded(): boolean;
    testWhenTabViewIsCreatedItemsAreUndefined: () => void;
    testWhenTabViewIsCreatedSelectedIndexIsUndefined: () => void;
    testWhenSettingItemsToNonEmptyArrayTheSameAmountOfNativeTabsIsCreated: () => void;
    testWhenSettingItemsToEmptyArrayZeroNativeTabsAreCreated: () => void;
    testSelectedIndexBecomesZeroWhenItemsBoundToNonEmptyArray: () => void;
    testSelectedIndexBecomesUndefinedWhenItemsBoundToEmptyArray: () => void;
    testSelectedIndexBecomesUndefinedWhenItemsSetToUndefined: () => void;
    testSelectedIndexBecomesUndefinedWhenItemsSetToNull: () => void;
    testItemsIsResolvedCorrectlyIfSetBeforeViewIsLoaded: () => void;
    testSelectedIndexIsResolvedCorrectlyIfSetBeforeViewIsLoaded: () => void;
    testBindingToTabEntryWithUndefinedViewShouldThrow: () => void;
    testBindingToTabEntryWithNullViewShouldThrow: () => void;
    testWhenSelectingATabNativelySelectedIndexIsUpdatedProperly: () => void;
    testWhenSelectingATabNativelySelectedIndexChangedEventIsRaised: () => void;
    testWhenSettingSelectedIndexProgramaticallySelectedIndexChangedEventIsRaised: () => void;
    test_FontIsReappliedWhenTabItemsChange: () => void;
}
export declare function createTestCase(): TabViewTest;
//# sourceMappingURL=tab-view-tests.d.ts.map