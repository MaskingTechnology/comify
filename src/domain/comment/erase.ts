
import eraseData from './repository/erase';

export default async function erase(id: string): Promise<void>
{
    return eraseData(id);
}
