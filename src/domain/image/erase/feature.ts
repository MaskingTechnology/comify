
import eraseData from './eraseData';

export default async function feature(dataId: string): Promise<void>
{
    return eraseData(dataId);
}
