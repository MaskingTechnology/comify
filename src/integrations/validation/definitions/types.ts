
import { FieldTypes } from './constants';

export type ValidationType = keyof typeof FieldTypes;

type DefaultProperties = {
    required: boolean;
};

export type StringProperties = DefaultProperties & {
    minLength?: number,
    maxLength?: number;
    pattern?: string;
};

export type NumberProperties = DefaultProperties & {
    minValue?: number,
    maxValue?: number;
};

export type ArrayProperties = DefaultProperties & {
    minLength?: number;
    maxLength?: number;
    validations?: Partial<Validations>;
};

export type BooleanProperties = DefaultProperties;
export type DateProperties = DefaultProperties;
export type UUIDProperties = DefaultProperties;
export type EmailProperties = DefaultProperties;

export type Message = {
    message: string;
};

export type Validations = {
    STRING: StringProperties;
    NUMBER: NumberProperties;
    BOOLEAN: BooleanProperties;
    DATE: DateProperties;
    UUID: UUIDProperties;
    EMAIL: EmailProperties;
    ARRAY: ArrayProperties;
};

export type ValidationSchema = Record<string, Partial<Validations | Message>>;
