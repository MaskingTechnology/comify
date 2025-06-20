
import { type Identity } from '^/integrations/authentication';
import { NotFound } from '^/integrations/runtime';

import getCreatorByEmail from '^/domain/creator/getByEmail';
import registerCreator from '^/domain/creator/register';
import getTenantByOrigin from '^/domain/tenant/getByOrigin';

import type { Requester } from '../types';

const MULTI_TENANT_MODE = process.env.MULTI_TENANT_MODE === 'true';

export default async function login(identity: Identity, origin: string): Promise<Requester>
{
    let tenantId: string | undefined;

    if (MULTI_TENANT_MODE)
    {
        const tenant = await getTenantByOrigin(origin);
        tenantId = tenant?.id;

        if (tenantId === undefined)
        {
            throw new NotFound(`Tenant not found for origin: ${origin}`);
        }
    }

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
        tenantId: loggedInCreator.tenantId
    };
}
