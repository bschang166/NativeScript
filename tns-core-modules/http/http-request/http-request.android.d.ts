import * as http from "../../http";
export declare enum HttpResponseEncoding {
    UTF8 = 0,
    GBK = 1
}
export declare function request(options: http.HttpRequestOptions): Promise<http.HttpResponse>;
export declare function addHeader(headers: http.Headers, key: string, value: string): void;
//# sourceMappingURL=http-request.android.d.ts.map