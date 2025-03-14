
/* eslint sonarjs/redundant-type-aliases: "off" */

import type { FieldTypes } from './constants';

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
    validations?: Partial<Validation>;
};

export type BooleanProperties = DefaultProperties;
export type DateProperties = DefaultProperties;
export type UUIDProperties = DefaultProperties;
export type EmailProperties = DefaultProperties;

export type URLProperties = DefaultProperties & {
    protocols?: string[];
};

export type Message = {
    message: string;
};

export type ValidationTypes = {
    STRING: StringProperties;
    NUMBER: NumberProperties;
    BOOLEAN: BooleanProperties;
    DATE: DateProperties;
    UUID: UUIDProperties;
    EMAIL: EmailProperties;
    ARRAY: ArrayProperties;
    URL: URLProperties;
};

export type Validation = Partial<ValidationTypes | Message>;

export type ValidationSchema = Record<string, Validation>;
