export declare class FileSystemAccess {
    private _pathSeparator;
    getLastModified(path: string): Date;
    getFileSize(path: string): number;
    getParent(path: string, onError?: (error: any) => any): {
        path: string;
        name: string;
    };
    getFile(path: string, onError?: (error: any) => any): {
        path: string;
        name: string;
        extension: string;
    };
    getFolder(path: string, onError?: (error: any) => any): {
        path: string;
        name: string;
    };
    eachEntity(path: string, onEntity: (file: {
        path: string;
        name: string;
        extension: string;
    }) => boolean, onError?: (error: any) => any): void;
    getEntities(path: string, onError?: (error: any) => any): Array<{
        path: string;
        name: string;
        extension: string;
    }>;
    fileExists(path: string): boolean;
    folderExists(path: string): boolean;
    deleteFile(path: string, onError?: (error: any) => any): void;
    deleteFolder(path: string, onError?: (error: any) => any): void;
    emptyFolder(path: string, onError?: (error: any) => any): void;
    rename(path: string, newPath: string, onError?: (error: any) => any): void;
    getDocumentsFolderPath(): string;
    getLogicalRootPath(): string;
    getTempFolderPath(): string;
    getCurrentAppPath(): string;
    read(path: string, onError?: (error: any) => any): any;
    write(path: string, bytes: native.Array<number>, onError?: (error: any) => any): void;
    readText(path: string, onError?: (error: any) => any, encoding?: any): string;
    private static _removeUtf8Bom;
    writeText(path: string, content: string, onError?: (error: any) => any, encoding?: any): void;
    private deleteFolderContent;
    private ensureFile;
    private getFileExtension;
    private enumEntities;
    getPathSeparator(): string;
    normalizePath(path: string): string;
    joinPath(left: string, right: string): string;
    joinPaths(paths: string[]): string;
}
//# sourceMappingURL=file-system-access.android.d.ts.map