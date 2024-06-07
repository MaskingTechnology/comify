
import { ValidationError } from '^/integrations/runtime/module';

export default class InvalidDataURL extends ValidationError
{
    constructor()
    {
        const messages = new Map().set('dataUrl', 'Invalid data URL');

        super(messages);
    }
}
