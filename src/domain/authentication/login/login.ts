
import { type Identity } from '^/integrations/authentication';

import getCreatorByEmail from '^/domain/creator/getByEmail';
import registerCreator from '^/domain/creator/register';
import getTenantByOrigin from '^/domain/tenant/getByOrigin';

import type { Requester } from '../types';

const MULTI_TENANT_MODE = process.env.MULTI_TENANT_MODE === 'true';

export default async function login(identity: Identity, origin: string): Promise<Requester>
{
    const tenant = await getTenantByOrigin(origin);
    const tenantId = tenant?.id;

    const existingCreator = await getCreatorByEmail(identity.email, tenantId);

    const loggedInCreator = existingCreator ?? await registerCreator(
        identity.name,
        identity.nickname ?? identity.name,
        identity.email,
        identity.picture,
        tenantId
    );

    return {
        id: loggedInCreator.id,
        fullName: loggedInCreator.fullName,
        nickname: loggedInCreator.nickname,
        tenantId,
    };
}
