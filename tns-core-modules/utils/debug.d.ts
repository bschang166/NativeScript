export declare var debug: boolean;
export declare class Source {
    private _uri;
    private _line;
    private _column;
    private static _source;
    constructor(uri: string, line: number, column: number);
    readonly uri: string;
    readonly line: number;
    readonly column: number;
    toString(): string;
    static get(object: any): Source;
    static set(object: any, src: Source): void;
}
export declare class ScopeError extends Error {
    constructor(inner: Error, message?: string);
}
export declare class SourceError extends ScopeError {
    constructor(child: Error, source: Source, message?: string);
}
//# sourceMappingURL=debug.d.ts.map