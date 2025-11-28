
import { BadRequest } from '^/integrations/runtime/';

export default class NicknameAlreadyExists extends BadRequest
{
    constructor(nickname: string)
    {
        super(`Nickname '${nickname}' already exists`);
    }
}
