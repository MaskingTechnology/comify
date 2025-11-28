
import { NotFound } from '^/integrations/runtime/';

export default class NicknameNotFound extends NotFound
{
    constructor(nickname: string)
    {
        super(`No creator for nickname: ${nickname}`);
    }
}
