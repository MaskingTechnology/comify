
import { ZodError, ZodIssue, z } from 'zod';

import { Validation } from '../../definitions/interfaces';
import { Message, ValidationSchema, Validations } from '../../definitions/types';
import { FieldTypes } from '../../definitions/constants';
import { UnknownValidator, InvalidObject } from '../../definitions/errors.js';

const MAX_EMAIL_LENGTH = 320;

export default class Zod implements Validation
{
    #validations: Map<string, Function> = new Map();

    constructor()
    {
        this.#validations.set(FieldTypes.STRING, (value: Validations['STRING']) => this.#validateString(value));
        this.#validations.set(FieldTypes.NUMBER, (value: Validations['NUMBER']) => this.#validateNumber(value));
        this.#validations.set(FieldTypes.BOOLEAN, (value: Validations['BOOLEAN']) => this.#validateBoolean(value));
        this.#validations.set(FieldTypes.DATE, (value: Validations['DATE']) => this.#validateDate(value));
        this.#validations.set(FieldTypes.UUID, (value: Validations['UUID']) => this.#validateUuid(value));
        this.#validations.set(FieldTypes.EMAIL, (value: Validations['EMAIL']) => this.#validateEmail(value));
        this.#validations.set(FieldTypes.ARRAY, (value: Validations['ARRAY']) => this.#validateArray(value));
    }

    validate(data: unknown, schema: ValidationSchema): void
    {
        const result = Object.entries(schema)
            .reduce((partialSchema, [key, value]) => 
            {
                const fieldValidation = this.#getValidation(value);

                return partialSchema.extend({ [key]: fieldValidation });
            },
                z.object({})
            ).strict();

        try
        {
            result.parse(data);
        }
        catch (error: unknown)
        {
            if (error instanceof ZodError)
            {
                const issues = error.issues;

                const messages = this.#getMessages(issues, schema);

                throw new InvalidObject(messages);
            }

            throw error;
        }
    }

    #getValidation(schema: Partial<Validations | Message>): z.ZodType<unknown, z.ZodTypeDef>
    {
        for (const [key, validation] of Object.entries(schema))
        {
            if (key === 'message') continue;

            const validator = this.#validations.get(key.toLocaleLowerCase());

            if (validator === undefined)
            {
                throw new UnknownValidator(key);
            }

            return validator(validation);
        }

        return z.never();
    }

    #validateString(value: Validations['STRING'])
    {
        let validation = z.string();

        if (value.minLength !== undefined) validation = validation.min(value.minLength);
        if (value.maxLength !== undefined) validation = validation.max(value.maxLength);
        if (value.pattern !== undefined) validation = validation.regex(new RegExp(value.pattern));

        return value.required
            ? validation
            : validation.optional();
    }

    #validateNumber(value: Validations['NUMBER'])
    {
        let validation = z.number();

        if (value.minValue !== undefined) validation = validation.min(value.minValue);
        if (value.maxValue !== undefined) validation = validation.max(value.maxValue);

        return value.required
            ? validation
            : validation.optional();
    }

    #validateBoolean(value: Validations['BOOLEAN'])
    {
        return value.required
            ? z.boolean()
            : z.boolean().optional();
    }

    #validateDate(value: Validations['DATE'])
    {
        return value.required
            ? z.date()
            : z.date().optional();
    }

    #validateUuid(value: Validations['UUID'])
    {
        return value.required
            ? z.string().uuid()
            : z.string().uuid().optional();
    }

    #validateEmail(value: Validations['EMAIL'])
    {
        return value.required
            ? z.string().email().max(MAX_EMAIL_LENGTH)
            : z.string().email().max(MAX_EMAIL_LENGTH).optional();
    }

    #validateArray(value: Validations['ARRAY'])
    {
        let validation = z.array(this.#getValidation(value.validations));

        if (value.minLength !== undefined) validation = validation.min(value.minLength);
        if (value.maxLength !== undefined) validation = validation.max(value.maxLength);

        return value.required
            ? validation
            : validation.optional();
    }

    #getMessages(issues: ZodIssue[], scheme: ValidationSchema)
    {
        const messages = new Map<string, string>();

        for (const issue of issues)
        {
            const field = issue.code === 'unrecognized_keys'
                ? issue.keys.join(', ')
                : String(issue.path[0]);

            const message = this.#getMessageByField(field, scheme);

            messages.set(field, message);
        }

        return messages;
    }

    #getMessageByField(path: string, scheme: ValidationSchema)
    {
        const field = scheme[path] as Message;

        if (field === undefined)
        {
            return 'Unrecognized field(s)';
        }

        return field.message ?? 'Invalid field';
    }
}
