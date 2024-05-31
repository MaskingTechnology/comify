
export default class NicknameAlreadyExists extends Error
{
    constructor(nickname: string)
    {
        super(`Nickname already exists '${nickname}'`);
    }
}
