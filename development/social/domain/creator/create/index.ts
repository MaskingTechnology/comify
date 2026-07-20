
import { type Tenant } from '@comify/common/domain/tenant';
import logger from '@comify/common/integrations/logging';

import createRecord from './createRecord';
import { type CreateData } from './definitions';
import erase from './erase';
import makeFullName from './makeFullName';
import makeNickname from './makeNickname';
import makePortrait from './makePortrait';
import persist from './persist';
import publish from './publish';
import validate from './validate';

export default async function run(tenant: Tenant, data: CreateData): Promise<string>
{
    validate(data);

    const fullName = makeFullName(data.fullName);
    const nickname = await makeNickname(tenant.id, data.nickname);
    const email = data.email;
    const portraitId = await makePortrait(data.portraitUrl);

    const record = createRecord(tenant.id, fullName, nickname, email, portraitId);

    await persist(record);

    try
    {
        await publish(record.id);

        return record.id;
    }
    catch (error)
    {
        logger.error('Failed to register creator', error);

        erase(record.id);

        throw error;
    }
}

export { default as subscribe } from './subscribe';
