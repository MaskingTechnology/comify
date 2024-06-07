
import { ValidationError } from '^/integrations/runtime/module';

export default class NicknameAlreadyExists extends ValidationError
{
    constructor(nickname: string)
    {
        const messages = new Map().set('nickname', `Nickname '${nickname}' already exists`);

        super(messages);
    }
}
