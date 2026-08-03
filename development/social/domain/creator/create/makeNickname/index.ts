
import type { TenantId } from '@comify/common/domain/tenant';

import type { Nickname } from '../../definitions';
import cleanNickname from '../../_cleanNickname';

import TooManySimilarNicknames from './TooManySimilarNicknames';
import retrieveByNickname from './retrieveByNickname';
import retrieveByStartNickname from './retrieveByStartNickname';

import { MAX_NICKNAME_NUMBER } from '../definitions';

export default async function (tenantId: TenantId, nickname: Nickname): Promise<string>
{
    const cleanedNickname = cleanNickname(nickname);

    const existingRecord = await retrieveByNickname(tenantId, cleanedNickname);

    if (existingRecord === undefined)
    {
        return cleanedNickname;
    }

    const foundRecord = await retrieveByStartNickname(tenantId, `${existingRecord.nickname}_`);

    if (foundRecord === undefined)
    {
        return `${existingRecord.nickname}_001`;
    }

    const oldNumber = parseInt(foundRecord.nickname.substring(cleanedNickname.length + 1));
    const newNumber = oldNumber + 1;

    if (newNumber === MAX_NICKNAME_NUMBER)
    {
        throw new TooManySimilarNicknames();
    }

    const stringNumber = newNumber.toString().padStart(3, '0');

    return `${cleanedNickname}_${stringNumber}`;
}
