
import validator, { ValidationSchema } from '../../../integrations/validation/module';

const TEN_B = 10;
const FIVE_MB = 1024 * 1024 * 5;

const schema: ValidationSchema = {
    mimeType:
    {
        message: 'Invalid mime type',
        STRING:
        {
            required: true,
            pattern: 'image/(jpeg|png|gif)'
        }
    },
    size:
    {
        message: 'Invalid size',
        NUMBER:
        {
            required: true,
            minValue: TEN_B,
            maxValue: FIVE_MB
        }
    }
};

export default async function validate(mimeType: string, size: number): Promise<void>
{
    validator.validate({ mimeType, size }, schema);
}
