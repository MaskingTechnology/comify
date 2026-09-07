
import { type Tenant } from '@comify/common/domain/tenant';
import { type Identifier } from '@comify/common/primitives/identifier';

import { logger } from '../integrations';

import createRecord from './createRecord';
import { type CreateData } from './definitions';
import makeFullName from './makeFullName';
import makeNickname from './makeNickname';
import makePortrait from './makePortrait';
import persist from './persist';
import publish from './publish';
import remove from './remove';
import validate from './validate';

export default async function (tenant: Tenant, data: CreateData): Promise<Identifier>
{
    validate(data);

    const fullName = makeFullName(data.fullName);
    const nickname = await makeNickname(tenant.id, data.nickname);
    const email = data.email;
    const portraitId = await makePortrait(data.portraitUrl);

    const record = createRecord(tenant.id, fullName, nickname, email, portraitId);

    const id = await persist(record);

    try
    {
        await publish(tenant.id, record.id);

        return record.id;
    }
    catch (error)
    {
        logger.error('Failed to create creator', error);

        remove(id);

        throw error;
    }
}

export { type CreateData } from './definitions';
