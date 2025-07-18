
import logger from '^/integrations/logging';

import create from '../create';
import { FULL_NAME_MAX_LENGTH } from '../definitions';
import erase from '../erase';
import generateNickname from '../generateNickname';
import type { DataModel } from '../types';
import downloadPortrait from './downloadPortrait';
import publish from './publish';

export default async function register(fullName: string, nickname: string, email: string, portraitUrl: string | undefined = undefined, tenantId: string | undefined = undefined): Promise<DataModel>
{
    let data;

    try
    {
        const truncatedFullName = fullName.substring(0, FULL_NAME_MAX_LENGTH);
        const generatedNickname = await generateNickname(nickname, tenantId);

        const portraitId = portraitUrl !== undefined
            ? await downloadPortrait(portraitUrl)
            : undefined;

        data = await create(truncatedFullName, generatedNickname, email, portraitId, tenantId);

        await publish(data.id);

        return data;
    }
    catch (error)
    {
        logger.logError('Failed to register creator', error);

        if (data !== undefined)
        {
            erase(data.id);
        }

        throw error;
    }
}
