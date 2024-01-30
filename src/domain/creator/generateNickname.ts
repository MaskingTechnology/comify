
import { TooManySimilarNickNames } from './errors';
import findByNickName from './findByNickName';
import searchByStartNickName from './searchByStartNickName';

export default async function generateNickname(nickname: string): Promise<string>
{
    const strippedName: string = nickname.trim();
    const noSpacesNickName: string = strippedName.replaceAll(' ', '');
    const cleanNickName: string = noSpacesNickName.replaceAll('_', '');

    const record = await findByNickName(cleanNickName);

    if (record === undefined)
    {
        return cleanNickName;
    }

    const foundNickName = await searchByStartNickName(`${record.nickName}_`);

    if (foundNickName === undefined)
    {
        return `${record.nickName}_001`;
    }

    const oldNumber = parseInt(foundNickName.substring(cleanNickName.length + 1));
    const newNumber = oldNumber + 1;

    if (newNumber === 1000)
    {
        throw new TooManySimilarNickNames();
    }

    const stringNumber = newNumber.toString().padStart(3, '0');

    return `${cleanNickName}_${stringNumber}`;
}
