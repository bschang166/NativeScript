import { Device as DeviceDefinition, ScreenMetrics as ScreenMetricsDefinition } from ".";
export declare module platformNames {
    const android = "Android";
    const ios = "iOS";
}
class Device implements DeviceDefinition {
    private _manufacturer;
    private _model;
    private _osVersion;
    private _sdkVersion;
    private _deviceType;
    private _uuid;
    private _language;
    private _region;
    readonly os: string;
    readonly manufacturer: string;
    readonly osVersion: string;
    readonly model: string;
    readonly sdkVersion: string;
    readonly deviceType: "Phone" | "Tablet";
    readonly uuid: string;
    readonly language: string;
    readonly region: string;
}
class MainScreen implements ScreenMetricsDefinition {
    private _metrics;
    private cssChanged;
    private initMetrics;
    private readonly metrics;
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
export declare const isAndroid: boolean;
export {};
//# sourceMappingURL=platform.android.d.ts.map