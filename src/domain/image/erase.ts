
import eraseImage from './repository/eraseData';

export default async function erase(id: string): Promise<void>
{
    return eraseImage(id);
}
