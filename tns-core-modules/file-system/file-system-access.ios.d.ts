export declare class FileSystemAccess {
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
    getExistingFolder(path: string, onError?: (error: any) => any): {
        path: string;
        name: string;
    };
    eachEntity(path: string, onEntity: (file: {
        path: string;
        name: string;
        extension: string;
    }) => any, onError?: (error: any) => any): void;
    getEntities(path: string, onError?: (error: any) => any): Array<{
        path: string;
        name: string;
        extension: string;
    }>;
    fileExists(path: string): boolean;
    folderExists(path: string): boolean;
    private exists;
    concatPath(left: string, right: string): string;
    deleteFile(path: string, onError?: (error: any) => any): void;
    deleteFolder(path: string, onError?: (error: any) => any): void;
    emptyFolder(path: string, onError?: (error: any) => any): void;
    rename(path: string, newPath: string, onError?: (error: any) => any): void;
    getLogicalRootPath(): string;
    getDocumentsFolderPath(): string;
    getTempFolderPath(): string;
    getCurrentAppPath(): string;
    readText(path: string, onError?: (error: any) => any, encoding?: any): string;
    read(path: string, onError?: (error: any) => any): NSData;
    writeText(path: string, content: string, onError?: (error: any) => any, encoding?: any): void;
    write(path: string, content: NSData, onError?: (error: any) => any): void;
    private getKnownPath;
    private getFileExtension;
    private deleteEntity;
    private enumEntities;
    getPathSeparator(): string;
    normalizePath(path: string): string;
    joinPath(left: string, right: string): string;
    joinPaths(paths: string[]): string;
}
//# sourceMappingURL=file-system-access.ios.d.ts.map