export declare class XMLHttpRequest {
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
    LOADING: number;
    DONE: number;
    onload: () => void;
    onerror: (any: any) => void;
    private _options;
    private _readyState;
    private _status;
    private _response;
    private _responseTextReader;
    private _headers;
    private _errorFlag;
    private _responseType;
    onreadystatechange: Function;
    constructor();
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    abort(): void;
    send(data?: any): void;
    private _loadResponse;
    private _addToStringOnResponse;
    private textTypes;
    private isTextContentType;
    private _setResponseType;
    private _listeners;
    addEventListener(eventName: string, handler: Function): void;
    removeEventListener(eventName: string, toDetach: Function): void;
    private emitEvent;
    setRequestHeader(header: string, value: string): void;
    getAllResponseHeaders(): string;
    getResponseHeader(header: string): string;
    overrideMimeType(mime: string): void;
    readonly readyState: number;
    responseType: string;
    private _setReadyState;
    readonly responseText: string;
    readonly response: any;
    readonly status: number;
    readonly statusText: string;
}
export declare class FormData {
    private _data;
    constructor();
    append(name: string, value: any): void;
    toString(): string;
}
//# sourceMappingURL=xhr.d.ts.map