import * as transition from "tns-core-modules/ui/transition";
export declare class CustomTransition extends transition.Transition {
    constructor(duration: number, curve: any);
    animateIOSTransition(containerView: UIView, fromView: UIView, toView: UIView, operation: UINavigationControllerOperation, completion: (finished: boolean) => void): void;
}
//# sourceMappingURL=custom-transition.ios.d.ts.map