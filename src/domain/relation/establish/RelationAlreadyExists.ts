
export default class RelationAlreadyExists extends Error
{
    constructor(message?: string)
    {
        super(message ?? 'Relation already exists');
    }
}
