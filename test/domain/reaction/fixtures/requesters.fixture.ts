
import johnDoe from '^/domain/authentication/johnDoe';
import Requester from '^/domain/authentication/Requester';

export const REQUESTERS =
{
    OWNER: johnDoe,
    VIEWER: new Requester('1', 'Some Other', 'someOther')
};
