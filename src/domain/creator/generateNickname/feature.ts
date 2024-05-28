
import getByNickname from '../getByNickname/feature';

import TooManySimilarNicknames from './TooManySimilarNicknames';
import retrieveByStartNickname from './retrieveByStartNickname';

export default async function generateNickname(nickname: string): Promise<string>
{
    const strippedName: string = nickname.trim();
    const noSpacesNickname: string = strippedName.replaceAll(' ', '');
    const cleanNickname: string = noSpacesNickname.replaceAll('_', '');

    const existingData = await getByNickname(cleanNickname);

    if (existingData === undefined)
    {
        return cleanNickname;
    }

    const foundData = await retrieveByStartNickname(`${existingData.nickname}_`);

    if (foundData === undefined)
    {
        return `${existingData.nickname}_001`;
    }

    const oldNumber = parseInt(foundData.nickname.substring(cleanNickname.length + 1));
    const newNumber = oldNumber + 1;

    if (newNumber === 1000)
    {
        throw new TooManySimilarNicknames();
    }

    const stringNumber = newNumber.toString().padStart(3, '0');

    return `${cleanNickname}_${stringNumber}`;
}
