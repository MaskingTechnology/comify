
import eraseData from './eraseData';

export default async function feature(id: string): Promise<void>
{
    return eraseData(id);
}
