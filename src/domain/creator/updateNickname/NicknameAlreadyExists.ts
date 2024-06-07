
import { BadRequest } from '^/integrations/runtime/module';

export default class NicknameAlreadyExists extends BadRequest
{
    constructor(nickname: string)
    {
        super(`Nickname '${nickname}' already exists`);
    }
}
