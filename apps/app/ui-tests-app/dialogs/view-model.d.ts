import * as observable from "tns-core-modules/data/observable";
export declare class SettingsViewModel extends observable.Observable {
    name: string;
    actionName(args: observable.EventData): void;
    alertName(args: observable.EventData): void;
    confirmName(args: observable.EventData): void;
    loginName(args: observable.EventData): void;
    promptText(args: observable.EventData): void;
    promptPass(args: observable.EventData): void;
    promptEmail(args: observable.EventData): void;
}
export declare var settingsViewModel: SettingsViewModel;
//# sourceMappingURL=view-model.d.ts.map