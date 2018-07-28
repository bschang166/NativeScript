import { ColorStop } from "./gradient";
import * as parser from "../../css/parser";
export declare class LinearGradient {
    angle: number;
    colorStops: ColorStop[];
    static parse(value: parser.LinearGradient): LinearGradient;
    static equals(first: LinearGradient, second: LinearGradient): boolean;
}
//# sourceMappingURL=linear-gradient.d.ts.map