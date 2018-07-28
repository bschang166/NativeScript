import { FormattedString as FormattedStringDefinition } from "./formatted-string";
import { Span } from "./span";
import { ObservableArray } from "../data/observable-array";
import { ViewBase, AddArrayFromBuilder, AddChildFromBuilder } from "../ui/core/view";
import { Color } from "../color";
import { FontStyle, FontWeight } from "../ui/styling/font";
import { TextDecoration } from "../ui/text-base";
export { Span };
export declare module knownCollections {
    const spans = "spans";
}
export declare class FormattedString extends ViewBase implements FormattedStringDefinition, AddArrayFromBuilder, AddChildFromBuilder {
    private _spans;
    constructor();
    fontFamily: string;
    fontSize: number;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textDecoration: TextDecoration;
    color: Color;
    backgroundColor: Color;
    readonly spans: ObservableArray<Span>;
    toString(): string;
    _addArrayFromBuilder(name: string, value: Array<any>): void;
    _addChildFromBuilder(name: string, value: any): void;
    private onSpansCollectionChanged;
    private addPropertyChangeHandler;
    private removePropertyChangeHandler;
    private onPropertyChange;
    eachChild(callback: (child: ViewBase) => boolean): void;
}
//# sourceMappingURL=formatted-string.d.ts.map