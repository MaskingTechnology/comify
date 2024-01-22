
import { DatabaseError } from '../../integrations/database/module.js';
import findByNickName from './findByNickName';
import searchByStartNickName from './searchByStartNickName';

export default async function generateNickname(nickname: string): Promise<string>
{
    const strippedName: string = nickname.trim();
    const noSpacesNickName: string = strippedName.replace(' ', '');
    const cleanNickName: string = noSpacesNickName.replace('_', '');
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

    const oldNumber = parseInt(foundNickName.substring(cleanNickName.length));
    const newNumber = oldNumber + 1;

    if (newNumber === 1000)
    {
        throw new DatabaseError('Too many similar nicknames');
    }

    const stringNumber = newNumber.toString().padStart(3, '0');

    return `${cleanNickName}_${stringNumber}`;
}
