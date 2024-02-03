
import { FieldTypes } from './constants';

export type ValidationType = keyof typeof FieldTypes;

type Properties = {
    required: boolean;
};

export type StringProperties = Properties & {
    minLength?: number,
    maxLength?: number;
    pattern?: string;
};

export type NumberProperties = Properties & {
    minValue?: number,
    maxValue?: number;
};

export type BooleanProperties = Properties & {

};

export type DateProperties = Properties & {

};

export type UUIDProperties = Properties & {

};

export type EmailProperties = Properties & {

};

export type ArrayProperties = Properties & {
    minLength?: number;
    maxLength?: number;
    validations: Partial<Validations>;
};

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
