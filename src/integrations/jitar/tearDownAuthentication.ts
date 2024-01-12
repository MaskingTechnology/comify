
import identityProvider from '../authentication/module';

if (identityProvider.connected)
{
    await identityProvider.disconnect();
}
