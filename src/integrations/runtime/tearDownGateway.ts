
import identityProvider from '^/integrations/authentication/module';

if (identityProvider.connected) await identityProvider.disconnect();
