
export default class CreatorNotFound extends Error
{
    constructor(nickname: string)
    {
        super(`No creator for nickname: ${nickname}`);
    }
}
