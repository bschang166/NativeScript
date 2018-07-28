import { SearchBar as SearchBarDefinition } from ".";
import { View, Property, Color } from "../core/view";
export * from "../core/view";
export declare abstract class SearchBarBase extends View implements SearchBarDefinition {
    static submitEvent: string;
    static clearEvent: string;
    text: string;
    hint: string;
    textFieldBackgroundColor: Color;
    textFieldHintColor: Color;
    abstract dismissSoftInput(): any;
}
export declare const textProperty: Property<SearchBarBase, string>;
export declare const hintProperty: Property<SearchBarBase, string>;
export declare const textFieldHintColorProperty: Property<SearchBarBase, Color>;
export declare const textFieldBackgroundColorProperty: Property<SearchBarBase, Color>;
//# sourceMappingURL=search-bar-common.d.ts.map