
import { type TenantId } from '@comify/common/domain/tenant';

import formatNickname from '../../_formatNickname';
import { MAX_NICKNAME_NUMBER, type Nickname } from '../../definitions';

import retrieveByNickname from './retrieveByNickname';
import retrieveByStartNickname from './retrieveByStartNickname';
import TooManySimilarNicknames from './TooManySimilarNicknames';

export default async function (tenantId: TenantId, nickname: Nickname): Promise<string>
{
    const formattedNickname = formatNickname(nickname);

    const existingRecord = await retrieveByNickname(tenantId, formattedNickname);

    if (existingRecord === undefined)
    {
        return formattedNickname;
    }

    const foundRecord = await retrieveByStartNickname(tenantId, `${existingRecord.nickname}_`);

    if (foundRecord === undefined)
    {
        return `${existingRecord.nickname}_001`;
    }

    const oldNumber = parseInt(foundRecord.nickname.substring(formattedNickname.length + 1));
    const newNumber = oldNumber + 1;

    if (newNumber === MAX_NICKNAME_NUMBER)
    {
        throw new TooManySimilarNicknames();
    }

    const stringNumber = newNumber.toString().padStart(3, '0');

    return `${formattedNickname}_${stringNumber}`;
}

export { TooManySimilarNicknames };
