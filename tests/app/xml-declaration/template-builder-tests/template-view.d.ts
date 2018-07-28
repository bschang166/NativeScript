import { Property } from "tns-core-modules/ui/core/properties";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base";
export declare module knownTemplates {
    var template: string;
}
export declare class TemplateView extends LayoutBase {
    template: string;
    static testEvent: string;
    parseTemplate(): void;
}
export declare const templateProperty: Property<TemplateView, string>;
//# sourceMappingURL=template-view.d.ts.map