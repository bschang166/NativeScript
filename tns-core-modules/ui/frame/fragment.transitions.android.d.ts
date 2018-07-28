/// <reference path="transition-definitions.android.d.ts" />
import { NavigationTransition, BackstackEntry } from "../frame";
import { Transition } from "../transition/transition";
interface ExpandedAnimator extends android.animation.Animator {
    entry: ExpandedEntry;
    transitionType?: string;
}
interface ExpandedTransitionListener extends android.transition.Transition.TransitionListener {
    entry: ExpandedEntry;
    transition: android.transition.Transition;
}
interface ExpandedEntry extends BackstackEntry {
    enterTransitionListener: ExpandedTransitionListener;
    exitTransitionListener: ExpandedTransitionListener;
    reenterTransitionListener: ExpandedTransitionListener;
    returnTransitionListener: ExpandedTransitionListener;
    enterAnimator: ExpandedAnimator;
    exitAnimator: ExpandedAnimator;
    popEnterAnimator: ExpandedAnimator;
    popExitAnimator: ExpandedAnimator;
    defaultEnterAnimator: ExpandedAnimator;
    defaultExitAnimator: ExpandedAnimator;
    transition: Transition;
    transitionName: string;
    frameId: number;
}
export declare const waitingQueue: Map<number, Set<ExpandedEntry>>;
export declare const completedEntries: Map<number, ExpandedEntry>;
export declare function _setAndroidFragmentTransitions(animated: boolean, navigationTransition: NavigationTransition, currentEntry: ExpandedEntry, newEntry: ExpandedEntry, fragmentTransaction: android.app.FragmentTransaction, manager: android.app.FragmentManager, frameId: number): void;
export declare function _onFragmentCreateAnimator(entry: ExpandedEntry, fragment: android.app.Fragment, nextAnim: number, enter: boolean): android.animation.Animator;
export declare function _getAnimatedEntries(frameId: number): Set<BackstackEntry>;
export declare function _updateTransitions(entry: ExpandedEntry): void;
export declare function _reverseTransitions(previousEntry: ExpandedEntry, currentEntry: ExpandedEntry): boolean;
export declare function _clearFragment(entry: ExpandedEntry): void;
export declare function _clearEntry(entry: ExpandedEntry): void;
export {};
//# sourceMappingURL=fragment.transitions.android.d.ts.map