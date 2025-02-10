
import identityProvider from '^/integrations/authentication';

if (identityProvider.connected) await identityProvider.disconnect();
