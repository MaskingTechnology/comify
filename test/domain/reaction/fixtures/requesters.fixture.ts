
import { requester } from '^/domain/authentication';

export const REQUESTERS =
{
    OWNER: requester,
    VIEWER: { id: '1', fullName: 'Some Other', nickname: 'someOther' }
};
