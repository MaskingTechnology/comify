
export default class relationAlreadyExists extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'relation already exists');
    }
}
