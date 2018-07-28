import * as inspectorCommandTypes from "./InspectorBackendCommands.ios";
export declare class Request {
    private _networkDomainDebugger;
    private _requestID;
    private _resourceType;
    private _data;
    private _mimeType;
    constructor(_networkDomainDebugger: NetworkDomainDebugger, _requestID: string);
    mimeType: string;
    readonly requestID: string;
    readonly hasTextContent: boolean;
    data: any;
    resourceType: string;
    responseReceived(response: inspectorCommandTypes.NetworkDomain.Response): void;
    loadingFinished(): void;
    requestWillBeSent(request: inspectorCommandTypes.NetworkDomain.Request): void;
}
export declare class NetworkDomainDebugger implements inspectorCommandTypes.NetworkDomain.NetworkDomainDispatcher {
    private _enabled;
    events: inspectorCommandTypes.NetworkDomain.NetworkFrontend;
    constructor();
    readonly enabled: boolean;
    enable(): void;
    disable(): void;
    setExtraHTTPHeaders(params: inspectorCommandTypes.NetworkDomain.SetExtraHTTPHeadersMethodArguments): void;
    getResponseBody(params: inspectorCommandTypes.NetworkDomain.GetResponseBodyMethodArguments): {
        body: string;
        base64Encoded: boolean;
    };
    canClearBrowserCache(): {
        result: boolean;
    };
    clearBrowserCache(): void;
    canClearBrowserCookies(): {
        result: boolean;
    };
    clearBrowserCookies(): void;
    setCacheDisabled(params: inspectorCommandTypes.NetworkDomain.SetCacheDisabledMethodArguments): void;
    loadResource(params: inspectorCommandTypes.NetworkDomain.LoadResourceMethodArguments): {
        content: string;
        mimeType: string;
        status: number;
    };
    static idSequence: number;
    create(): Request;
}
export declare class RuntimeDomainDebugger {
    constructor();
    compileScript(): {
        scriptId?: string;
        exceptionDetails?: Object;
    };
}
//# sourceMappingURL=webinspector-network.ios.d.ts.map