import { Placeholder as PlaceholderDefinition, CreateViewEventData } from ".";
import { View, EventData } from "../core/view";
export declare class Placeholder extends View implements PlaceholderDefinition {
    static creatingViewEvent: string;
    createNativeView(): globalAndroid.view.View;
}
export interface Placeholder {
    on(eventNames: string, callback: (args: EventData) => void): any;
    on(event: "creatingView", callback: (args: CreateViewEventData) => void): any;
}
//# sourceMappingURL=placeholder.android.d.ts.map