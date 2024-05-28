
import Requester from '^/domain/authentication/Requester';

import getById from '../getById/feature';

export default async function feature(requester: Requester): Promise<ReturnType<typeof getById>>
{
    return getById(requester.id);
}
