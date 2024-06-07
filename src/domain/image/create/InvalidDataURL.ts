
export default class InvalidDataURL extends Error
{
    constructor()
    {
        super('Value is not a valid data URL');
    }
}
