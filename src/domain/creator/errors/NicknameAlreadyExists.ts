
export default class NicknameAlreadyExists extends Error
{
    constructor(nickname: string)
    {
        super(`nickname already exists ${nickname}`);
    }
}
