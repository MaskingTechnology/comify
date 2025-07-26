
import cleanNickname from '../cleanNickname';
import TooManySimilarNicknames from './TooManySimilarNicknames';
import retrieveByNickname from './retrieveByNickname';
import retrieveByStartNickname from './retrieveByStartNickname';

const MAX_NICKNAME_NUMBER = 1000;

export default async function generateNickname(tenantId: string, nickname: string): Promise<string>
{
    const cleanedNickname = cleanNickname(nickname);

    const existingData = await retrieveByNickname(tenantId, cleanedNickname);

    if (existingData === undefined)
    {
        return cleanedNickname;
    }

    const foundData = await retrieveByStartNickname(tenantId, `${existingData.nickname}_`);

    if (foundData === undefined)
    {
        return `${existingData.nickname}_001`;
    }

    const oldNumber = parseInt(foundData.nickname.substring(cleanedNickname.length + 1));
    const newNumber = oldNumber + 1;

    if (newNumber === MAX_NICKNAME_NUMBER)
    {
        throw new TooManySimilarNicknames();
    }

    const stringNumber = newNumber.toString().padStart(3, '0');

    return `${cleanedNickname}_${stringNumber}`;
}
