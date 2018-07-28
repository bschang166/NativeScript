import { Observable } from "tns-core-modules/ui/layouts/layout-base";
export declare class ViewModelBase extends Observable {
    onAlignments(args: {
        eventName: string;
        object: any;
    }): void;
    onCollapse(args: {
        eventName: string;
        object: any;
    }): void;
    onVisibile(args: {
        eventName: string;
        object: any;
    }): void;
    onPaddings(args: {
        eventName: string;
        object: any;
    }): void;
    protected setWidthHeight(child: any, width: any, height: any): void;
    protected setMinWidthHeight(child: any, minWidth: any, minHeight: any): void;
    protected setMargins(child: any, marginLeft: any, marginTop: any, marginRight: any, marginBottom: any): void;
    protected setPaddings(child: any, paddingLeft: any, paddingTop: any, paddingRight: any, paddingBottom: any): void;
    protected setAllPositioningProperties(child: any): void;
    protected toggleVisibility(child: any): void;
}
//# sourceMappingURL=myview-base.d.ts.map