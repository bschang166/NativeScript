import { HtmlView as HtmlViewDefinition } from ".";
import { View, Property } from "../core/view";
export * from "../core/view";
export declare class HtmlViewBase extends View implements HtmlViewDefinition {
    html: string;
}
export declare const htmlProperty: Property<HtmlViewBase, string>;
//# sourceMappingURL=html-view-common.d.ts.map