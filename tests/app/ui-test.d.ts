import { Page } from "tns-core-modules/ui/page";
import { View } from "tns-core-modules/ui/core/view";
import * as trace from "tns-core-modules/trace";
export declare class UITest<T extends View> implements trace.TraceWriter {
    private _testPage;
    private _testView;
    private _errorMessage;
    readonly errorMessage: string;
    readonly testPage: Page;
    readonly testView: T;
    waitUntilTestElementIsLoaded(timeoutSec?: number): void;
    waitUntilTestElementLayoutIsValid(timeoutSec?: number): void;
    create(): T;
    setUpModule(): void;
    tearDownModule(): void;
    setUp(): void;
    tearDown(): void;
    write(message: any, category: string, type?: number): void;
}
export declare function createTestCase(): UITest<View>;
//# sourceMappingURL=ui-test.d.ts.map