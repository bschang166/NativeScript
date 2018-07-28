import { Device as DeviceDefinition, ScreenMetrics as ScreenMetricsDefinition } from ".";
export declare module platformNames {
    const android = "Android";
    const ios = "iOS";
}
class Device implements DeviceDefinition {
    private _model;
    private _osVersion;
    private _sdkVersion;
    private _deviceType;
    private _language;
    private _region;
    readonly manufacturer: string;
    readonly os: string;
    readonly osVersion: string;
    readonly model: string;
    readonly sdkVersion: string;
    readonly deviceType: "Phone" | "Tablet";
    readonly uuid: string;
    readonly language: string;
    readonly region: string;
}
class MainScreen implements ScreenMetricsDefinition {
    private _screen;
    private readonly screen;
    readonly widthPixels: number;
    readonly heightPixels: number;
    readonly scale: number;
    readonly widthDIPs: number;
    readonly heightDIPs: number;
}
export declare const device: Device;
export declare module screen {
    const mainScreen: MainScreen;
}
export declare const isIOS: boolean;
export {};
//# sourceMappingURL=platform.ios.d.ts.map