
import logger from '@comify/common/integrations/logging';

import create from '../_create';
import { FULL_NAME_MAX_LENGTH } from '../definitions';
import erase from '../_delete';
import generateNickname from '../_generateNickname';
import type { Record } from '../definitions';

import downloadPortrait from './downloadPortrait';
import publish from './publish';

export default async function run(tenantId: string, fullName: string, nickname: string, email: string, portraitUrl: string | undefined = undefined): Promise<Record>
{
    let record;

    try
    {
        const truncatedFullName = fullName.substring(0, FULL_NAME_MAX_LENGTH);
        const generatedNickname = await generateNickname(tenantId, nickname);

        const portraitId = portraitUrl !== undefined
            ? await downloadPortrait(portraitUrl)
            : undefined;

        record = await create(tenantId, truncatedFullName, generatedNickname, email, portraitId);

        await publish(record.id);

        return record;
    }
    catch (error)
    {
        logger.error('Failed to register creator', error);

        if (record !== undefined)
        {
            erase(record.id);
        }

        throw error;
    }
}

export { default as subscribe } from './subscribe';
