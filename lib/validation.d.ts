import AJV from "ajv";
import { ObjectMapping } from "./es-types";
export declare function translateObjectMapping(mapping: ObjectMapping): Record<string, unknown>;
interface SyncValidationFunction extends AJV.ValidateFunction {
    (data: Record<string, unknown>): boolean;
    $async?: undefined;
}
export declare function getValidatorForMapping(mappings: ObjectMapping): SyncValidationFunction;
export {};
