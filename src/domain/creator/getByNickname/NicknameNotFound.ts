
export default class NicknameNotFound extends Error
{
    constructor(nickname: string)
    {
        super(`No creator for nickname: ${nickname}`);
    }
}
