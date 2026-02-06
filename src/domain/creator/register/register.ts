
import logger from '^/integrations/logging';

import create from '../create';
import { FULL_NAME_MAX_LENGTH } from '../definitions';
import erase from '../erase';
import generateNickname from '../generateNickname';
import type { DataModel } from '../types';
import downloadPortrait from './downloadPortrait';
import publish from './publish';

export default async function register(tenantId: string, fullName: string, nickname: string, email: string, portraitUrl: string | undefined = undefined): Promise<DataModel>
{
    let data;

    try
    {
        const truncatedFullName = fullName.substring(0, FULL_NAME_MAX_LENGTH);
        const generatedNickname = await generateNickname(tenantId, nickname);

        const portraitId = portraitUrl !== undefined
            ? await downloadPortrait(portraitUrl)
            : undefined;

        data = await create(tenantId, truncatedFullName, generatedNickname, email, portraitId);

        await publish(data.id);

        return data;
    }
    catch (error)
    {
        logger.error('Failed to register creator', error);

        if (data !== undefined)
        {
            erase(data.id);
        }

        throw error;
    }
}
