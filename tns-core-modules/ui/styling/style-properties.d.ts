import { Style, CssProperty, CssAnimationProperty, InheritedCssProperty } from "../core/properties";
import { TransformFunctionsInfo } from "../animation/animation";
import { dip, px, percent } from "../core/view";
import { Color } from "../../color";
import { Font, FontStyle, FontWeight } from "../../ui/styling/font";
import { Background } from "../../ui/styling/background";
import { LinearGradient } from "./linear-gradient";
export declare type LengthDipUnit = {
    readonly unit: "dip";
    readonly value: dip;
};
export declare type LengthPxUnit = {
    readonly unit: "px";
    readonly value: px;
};
export declare type LengthPercentUnit = {
    readonly unit: "%";
    readonly value: percent;
};
export declare type Length = "auto" | dip | LengthDipUnit | LengthPxUnit;
export declare type PercentLength = "auto" | dip | LengthDipUnit | LengthPxUnit | LengthPercentUnit;
export declare namespace PercentLength {
    function parse(fromValue: string | Length): PercentLength;
    const equals: {
        (a: PercentLength, b: PercentLength): boolean;
    };
    const toDevicePixels: {
        (length: PercentLength, auto: number, parentAvailableWidth: number): number;
    };
    const convertToString: {
        (length: PercentLength): string;
    };
}
export declare namespace Length {
    function parse(fromValue: string | Length): Length;
    const equals: {
        (a: Length, b: Length): boolean;
    };
    const toDevicePixels: {
        (length: Length, auto?: number): number;
    };
    const convertToString: {
        (length: Length): string;
    };
}
export declare const zeroLength: Length;
export declare const minWidthProperty: CssProperty<Style, Length>;
export declare const minHeightProperty: CssProperty<Style, Length>;
export declare const widthProperty: CssProperty<Style, PercentLength>;
export declare const heightProperty: CssProperty<Style, PercentLength>;
export declare const marginLeftProperty: CssProperty<Style, PercentLength>;
export declare const marginRightProperty: CssProperty<Style, PercentLength>;
export declare const marginTopProperty: CssProperty<Style, PercentLength>;
export declare const marginBottomProperty: CssProperty<Style, PercentLength>;
export declare const paddingLeftProperty: CssProperty<Style, Length>;
export declare const paddingRightProperty: CssProperty<Style, Length>;
export declare const paddingTopProperty: CssProperty<Style, Length>;
export declare const paddingBottomProperty: CssProperty<Style, Length>;
export declare type HorizontalAlignment = "left" | "center" | "right" | "stretch";
export declare namespace HorizontalAlignment {
    const LEFT: "left";
    const CENTER: "center";
    const RIGHT: "right";
    const STRETCH: "stretch";
    const isValid: (value: any) => value is HorizontalAlignment;
    const parse: (value: any) => HorizontalAlignment;
}
export declare const horizontalAlignmentProperty: CssProperty<Style, HorizontalAlignment>;
export declare type VerticalAlignment = "top" | "middle" | "bottom" | "stretch";
export declare namespace VerticalAlignment {
    const TOP: "top";
    const MIDDLE: "middle";
    const BOTTOM: "bottom";
    const STRETCH: "stretch";
    const isValid: (value: any) => value is VerticalAlignment;
    const parse: (value: string) => VerticalAlignment;
}
export declare const verticalAlignmentProperty: CssProperty<Style, VerticalAlignment>;
export declare const rotateProperty: CssAnimationProperty<Style, number>;
export declare const scaleXProperty: CssAnimationProperty<Style, number>;
export declare const scaleYProperty: CssAnimationProperty<Style, number>;
export declare const translateXProperty: CssAnimationProperty<Style, number>;
export declare const translateYProperty: CssAnimationProperty<Style, number>;
export declare function transformConverter(text: string): TransformFunctionsInfo;
export declare const backgroundInternalProperty: CssProperty<Style, Background>;
export declare const backgroundImageProperty: CssProperty<Style, string | LinearGradient>;
export declare const backgroundColorProperty: CssAnimationProperty<Style, Color>;
export declare type BackgroundRepeat = "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
export declare namespace BackgroundRepeat {
    const REPEAT: "repeat";
    const REPEAT_X: "repeat-x";
    const REPEAT_Y: "repeat-y";
    const NO_REPEAT: "no-repeat";
    const isValid: (value: any) => value is BackgroundRepeat;
    const parse: (value: any) => BackgroundRepeat;
}
export declare const backgroundRepeatProperty: CssProperty<Style, BackgroundRepeat>;
export declare const backgroundSizeProperty: CssProperty<Style, string>;
export declare const backgroundPositionProperty: CssProperty<Style, string>;
export declare const borderTopColorProperty: CssProperty<Style, Color>;
export declare const borderRightColorProperty: CssProperty<Style, Color>;
export declare const borderBottomColorProperty: CssProperty<Style, Color>;
export declare const borderLeftColorProperty: CssProperty<Style, Color>;
export declare const borderTopWidthProperty: CssProperty<Style, Length>;
export declare const borderRightWidthProperty: CssProperty<Style, Length>;
export declare const borderBottomWidthProperty: CssProperty<Style, Length>;
export declare const borderLeftWidthProperty: CssProperty<Style, Length>;
export declare const borderTopLeftRadiusProperty: CssProperty<Style, Length>;
export declare const borderTopRightRadiusProperty: CssProperty<Style, Length>;
export declare const borderBottomRightRadiusProperty: CssProperty<Style, Length>;
export declare const borderBottomLeftRadiusProperty: CssProperty<Style, Length>;
export declare const clipPathProperty: CssProperty<Style, string>;
export declare const zIndexProperty: CssProperty<Style, number>;
export declare const opacityProperty: CssAnimationProperty<Style, number>;
export declare const colorProperty: InheritedCssProperty<Style, Color>;
export declare const fontInternalProperty: CssProperty<Style, Font>;
export declare const fontFamilyProperty: InheritedCssProperty<Style, string>;
export declare const fontSizeProperty: InheritedCssProperty<Style, number>;
export declare const fontStyleProperty: InheritedCssProperty<Style, FontStyle>;
export declare const fontWeightProperty: InheritedCssProperty<Style, FontWeight>;
export declare type Visibility = "visible" | "hidden" | "collapse";
export declare namespace Visibility {
    const VISIBLE: "visible";
    const HIDDEN: "hidden";
    const COLLAPSE: "collapse";
    const isValid: (value: any) => value is Visibility;
    const parse: (value: string) => Visibility;
}
export declare const visibilityProperty: CssProperty<Style, Visibility>;
//# sourceMappingURL=style-properties.d.ts.map