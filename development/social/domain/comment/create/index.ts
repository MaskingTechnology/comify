
import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function run(message: string): Promise<string>
{
    const record = createRecord(message);

    validate(record);

    return persist(record);
}

export { default as InvalidComment } from './InvalidComment';
