
import validator from '@comify/common/integrations/validation';

import { type MetaData, filenameValidation, mimeTypeValidation, sizeValidation } from '../definitions';

import InvalidImage from './InvalidImage';

export default function (data: MetaData): void
{
    const result = validator.validate<MetaData>(data, {
        filename: filenameValidation,
        mimeType: mimeTypeValidation,
        size: sizeValidation
    });

    if (result.invalid)
    {
        throw new InvalidImage(result.messages);
    }
}

export { InvalidImage };
