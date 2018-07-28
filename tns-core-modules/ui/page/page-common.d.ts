import { Page as PageDefinition, NavigatedData, ShownModallyData } from ".";
import { ContentView, View, Property, CssProperty, Color, Style, EventData } from "../content-view";
import { Frame } from "../frame";
import { ActionBar } from "../action-bar";
import { KeyframeAnimationInfo } from "../animation/keyframe-animation";
export * from "../content-view";
export declare class PageBase extends ContentView implements PageDefinition {
    static navigatingToEvent: string;
    static navigatedToEvent: string;
    static navigatingFromEvent: string;
    static navigatedFromEvent: string;
    private _navigationContext;
    private _actionBar;
    _frame: Frame;
    actionBarHidden: boolean;
    enableSwipeBackNavigation: boolean;
    backgroundSpanUnderStatusBar: boolean;
    hasActionBar: boolean;
    readonly navigationContext: any;
    actionBar: ActionBar;
    statusBarStyle: "light" | "dark";
    androidStatusBarBackground: Color;
    readonly page: PageDefinition;
    _addChildFromBuilder(name: string, value: any): void;
    getKeyframeAnimationWithName(animationName: string): KeyframeAnimationInfo;
    readonly frame: Frame;
    private createNavigatedData;
    onNavigatingTo(context: any, isBackNavigation: boolean, bindingContext?: any): void;
    onNavigatedTo(isBackNavigation: boolean): void;
    onNavigatingFrom(isBackNavigation: boolean): void;
    onNavigatedFrom(isBackNavigation: boolean): void;
    eachChildView(callback: (child: View) => boolean): void;
    readonly _childrenCount: number;
}
export interface PageBase {
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): void;
    on(event: "navigatingTo", callback: (args: NavigatedData) => void, thisArg?: any): void;
    on(event: "navigatedTo", callback: (args: NavigatedData) => void, thisArg?: any): void;
    on(event: "navigatingFrom", callback: (args: NavigatedData) => void, thisArg?: any): void;
    on(event: "navigatedFrom", callback: (args: NavigatedData) => void, thisArg?: any): void;
    on(event: "showingModally", callback: (args: ShownModallyData) => void, thisArg?: any): void;
    on(event: "shownModally", callback: (args: ShownModallyData) => void, thisArg?: any): any;
}
export declare const actionBarHiddenProperty: Property<PageBase, boolean>;
export declare const backgroundSpanUnderStatusBarProperty: Property<PageBase, boolean>;
export declare const enableSwipeBackNavigationProperty: Property<PageBase, boolean>;
export declare const statusBarStyleProperty: CssProperty<Style, "light" | "dark">;
export declare const androidStatusBarBackgroundProperty: CssProperty<Style, Color>;
//# sourceMappingURL=page-common.d.ts.map