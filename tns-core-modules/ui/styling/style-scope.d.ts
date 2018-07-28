import { ViewBase } from "../core/view-base";
import { RuleSet, SelectorCore, SelectorsMatch, ChangeMap, Node } from "./css-selector";
import * as applicationCommon from "../../application/application-common";
import * as kam from "../animation/keyframe-animation";
export declare function mergeCssSelectors(): void;
export declare const loadAppCSS: (args: applicationCommon.LoadAppCSSEventData) => void;
export declare class CssState {
    private view;
    static emptyChangeMap: Readonly<ChangeMap<ViewBase>>;
    static emptyPropertyBag: Readonly<{}>;
    static emptyAnimationArray: ReadonlyArray<kam.KeyframeAnimation>;
    static emptyMatch: Readonly<SelectorsMatch<ViewBase>>;
    _onDynamicStateChangeHandler: () => void;
    _appliedChangeMap: Readonly<ChangeMap<ViewBase>>;
    _appliedPropertyValues: Readonly<{}>;
    _appliedAnimations: ReadonlyArray<kam.KeyframeAnimation>;
    _match: SelectorsMatch<ViewBase>;
    _matchInvalid: boolean;
    _playsKeyframeAnimations: boolean;
    constructor(view: ViewBase);
    onChange(): void;
    onLoaded(): void;
    onUnloaded(): void;
    private updateMatch;
    private updateDynamicState;
    private playKeyframeAnimations;
    private stopKeyframeAnimations;
    private setPropertyValues;
    private subscribeForDynamicUpdates;
    private unsubscribeFromDynamicUpdates;
    toString(): string;
}
export declare class StyleScope {
    private _selectors;
    private _css;
    private _mergedCssSelectors;
    private _localCssSelectors;
    private _localCssSelectorVersion;
    private _localCssSelectorsAppliedVersion;
    private _applicationCssSelectorsAppliedVersion;
    private _keyframes;
    css: string;
    addCss(cssString: string, cssFileName?: string): void;
    addCssFile(cssFileName: string): void;
    private setCss;
    private appendCss;
    getKeyframeAnimationWithName(animationName: string): kam.KeyframeAnimationInfo;
    ensureSelectors(): number;
    private _createSelectors;
    matchSelectors(view: ViewBase): SelectorsMatch<ViewBase>;
    query(node: Node): SelectorCore[];
    private _getSelectorsVersion;
    private _applyKeyframesOnSelectors;
    getAnimations(ruleset: RuleSet): kam.KeyframeAnimationInfo[];
}
export declare function resolveFileNameFromUrl(url: string, appDirectory: string, fileExists: (name: string) => boolean, importSource?: string): string;
export declare const applyInlineStyle: (view: ViewBase, styleStr: string) => void;
//# sourceMappingURL=style-scope.d.ts.map