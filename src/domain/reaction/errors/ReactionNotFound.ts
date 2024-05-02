
export default class ReactionNotFound extends Error
{
    constructor()
    {
        super('Reaction not found');
    }
}
