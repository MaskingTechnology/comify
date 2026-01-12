
import identityProvider from './identityProvider';

if (identityProvider.connected)
{
    await identityProvider.disconnect();
}
