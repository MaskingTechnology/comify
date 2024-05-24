
import createView, { type Result } from '../aggregate/feature';
import retrieveData from './retrieve';

export default async function feature(id: string): Promise<Result>
{
    const data = await retrieveData(id);

    return createView(data);
}
