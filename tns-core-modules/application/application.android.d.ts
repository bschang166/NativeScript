import { AndroidActivityBundleEventData, AndroidActivityEventData, AndroidApplication as AndroidApplicationDefinition, AndroidActivityResultEventData, AndroidActivityBackPressedEventData, AndroidActivityRequestPermissionsEventData } from ".";
import { Observable } from "./application-common";
export * from "./application-common";
import { NavigationEntry, View } from "../ui/frame";
export declare class AndroidApplication extends Observable implements AndroidApplicationDefinition {
    static activityCreatedEvent: string;
    static activityDestroyedEvent: string;
    static activityStartedEvent: string;
    static activityPausedEvent: string;
    static activityResumedEvent: string;
    static activityStoppedEvent: string;
    static saveActivityStateEvent: string;
    static activityResultEvent: string;
    static activityBackPressedEvent: string;
    static activityRequestPermissionsEvent: string;
    paused: boolean;
    nativeApp: android.app.Application;
    context: android.content.Context;
    foregroundActivity: android.app.Activity;
    startActivity: android.app.Activity;
    packageName: string;
    private callbacks;
    readonly currentContext: android.content.Context;
    init(nativeApp: android.app.Application): void;
    private _registeredReceivers;
    private _pendingReceiverRegistrations;
    private _registerPendingReceivers;
    registerBroadcastReceiver(intentFilter: string, onReceiveCallback: (context: android.content.Context, intent: android.content.Intent) => void): void;
    unregisterBroadcastReceiver(intentFilter: string): void;
}
export interface AndroidApplication {
    on(eventNames: string, callback: (data: AndroidActivityEventData) => void, thisArg?: any): any;
    on(event: "activityCreated", callback: (args: AndroidActivityBundleEventData) => void, thisArg?: any): any;
    on(event: "activityDestroyed", callback: (args: AndroidActivityEventData) => void, thisArg?: any): any;
    on(event: "activityStarted", callback: (args: AndroidActivityEventData) => void, thisArg?: any): any;
    on(event: "activityPaused", callback: (args: AndroidActivityEventData) => void, thisArg?: any): any;
    on(event: "activityResumed", callback: (args: AndroidActivityEventData) => void, thisArg?: any): any;
    on(event: "activityStopped", callback: (args: AndroidActivityEventData) => void, thisArg?: any): any;
    on(event: "saveActivityState", callback: (args: AndroidActivityBundleEventData) => void, thisArg?: any): any;
    on(event: "activityResult", callback: (args: AndroidActivityResultEventData) => void, thisArg?: any): any;
    on(event: "activityBackPressed", callback: (args: AndroidActivityBackPressedEventData) => void, thisArg?: any): any;
    on(event: "activityRequestPermissions", callback: (args: AndroidActivityRequestPermissionsEventData) => void, thisArg?: any): any;
}
export declare function start(entry?: NavigationEntry | string): void;
export declare function shouldCreateRootFrame(): boolean;
export declare function run(entry?: NavigationEntry | string): void;
export declare function _resetRootView(entry?: NavigationEntry | string): void;
export declare function getMainEntry(): NavigationEntry;
export declare function getRootView(): View;
export declare function getNativeApplication(): android.app.Application;
//# sourceMappingURL=application.android.d.ts.map