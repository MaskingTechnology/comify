
import validator from '@comify/common/integrations/validation';

import { dataUrlValidation, structureValidation } from '../definitions';

import { type CreateData } from './definitions';
import InvalidComic from './InvalidComic';

export default function (data: CreateData): void
{
    const result = validator.validate(data, {
        imageDataUrl: dataUrlValidation,
        structure: structureValidation
    });

    if (result.invalid)
    {
        throw new InvalidComic(result.messages);
    }
}
