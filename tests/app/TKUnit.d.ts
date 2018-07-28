export interface TestInfoEntry {
    testFunc: () => void;
    instance: Object;
    isTest: boolean;
    testName: string;
    isPassed: boolean;
    errorMessage: string;
    testTimeout: number;
    duration: number;
}
export declare function time(): number;
export declare function write(message: string, type?: number): void;
export interface TestFailure {
    moduleName: string;
    testName: string;
    errorMessage: string;
}
export interface TestModuleRunResult {
    name: string;
    count: number;
    succeeded: number;
    failed: Array<TestFailure>;
}
export declare function runTests(tests: Array<TestInfoEntry>, recursiveIndex: any): void;
export declare function assert(test: any, message?: string): void;
export declare function assertTrue(test: boolean, message?: string): void;
export declare function assertFalse(test: boolean, message?: string): void;
export declare function assertNotEqual(actual: any, expected: any, message?: string): void;
export declare function assertEqual<T extends {
    equals?(arg: T): boolean;
} | any>(actual: T, expected: T, message?: string): void;
export declare function assertDeepEqual(actual: any, expected: any, message?: string, path?: any[]): void;
export declare function assertDeepSuperset(actual: any, expected: any, path?: any[]): void;
export declare function assertNull(actual: any, message?: string): void;
export declare function assertNotNull(actual: any, message?: string): void;
export declare function areClose(actual: number, expected: number, delta: number): boolean;
export declare function assertAreClose(actual: number, expected: number, delta: number, message?: string): void;
export declare function arrayAssert(actual: Array<any>, expected: Array<any>, message?: string): void;
export declare function assertThrows(testFunc: () => void, assertMessage?: string, expectedMessage?: string): void;
export declare function wait(seconds: number): void;
export declare function waitUntilReady(isReady: () => boolean, timeoutSec?: number, shouldThrow?: boolean): void;
//# sourceMappingURL=TKUnit.d.ts.map