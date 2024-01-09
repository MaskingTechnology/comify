
import identityProvider from '../../integrations/authentication/module';

export default async function getLoginUrl(): Promise<string>
{
    return identityProvider.getLoginUrl();
}
