
import identityProvider from './module';

if (identityProvider.connected)
{
    await identityProvider.disconnect();
}
