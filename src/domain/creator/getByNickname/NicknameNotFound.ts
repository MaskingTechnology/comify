
import { NotFoundError } from '^/integrations/runtime/module';

export default class NicknameNotFound extends NotFoundError
{
    constructor(nickname: string)
    {
        super(`No creator for nickname: ${nickname}`);
    }
}
