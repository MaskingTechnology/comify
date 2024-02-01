
import { TooManySimilarNickNames } from './errors';
import retrieveByNickName from './data/retrieveByNickName';
import retrieveByStartNickName from './data/retrieveByStartNickName';

export default async function generateNickname(nickname: string): Promise<string>
{
    const strippedName: string = nickname.trim();
    const noSpacesNickName: string = strippedName.replaceAll(' ', '');
    const cleanNickName: string = noSpacesNickName.replaceAll('_', '');

    const existingData = await retrieveByNickName(cleanNickName);

    if (existingData === undefined)
    {
        return cleanNickName;
    }

    const foundData = await retrieveByStartNickName(`${existingData.nickName}_`);

    if (foundData === undefined)
    {
        return `${existingData.nickName}_001`;
    }

    const oldNumber = parseInt(foundData.nickName.substring(cleanNickName.length + 1));
    const newNumber = oldNumber + 1;

    if (newNumber === 1000)
    {
        throw new TooManySimilarNickNames();
    }

    const stringNumber = newNumber.toString().padStart(3, '0');

    return `${cleanNickName}_${stringNumber}`;
}
