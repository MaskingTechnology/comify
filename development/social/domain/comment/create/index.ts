
import { type CreateData } from './definitions';
import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function run(data: CreateData): Promise<string>
{
    validate(data);

    const record = createRecord(data.message);

    return persist(record);
}

export { default as InvalidComment } from './InvalidComment';
