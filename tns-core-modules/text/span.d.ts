import { Color } from "../color";
import { Span as SpanDefinition } from "./span";
import { ViewBase } from "../ui/core/view";
import { FontStyle, FontWeight } from "../ui/styling/font";
import { TextDecoration } from "../ui/text-base";
export declare class Span extends ViewBase implements SpanDefinition {
    private _text;
    fontFamily: string;
    fontSize: number;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textDecoration: TextDecoration;
    color: Color;
    backgroundColor: Color;
    text: string;
    _setTextInternal(value: string): void;
}
//# sourceMappingURL=span.d.ts.map