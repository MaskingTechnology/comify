
import identityProvider, { Session } from '../../integrations/authentication/module';

export default async function login(code: string, iss: string, session_state: string): Promise<Session>
{
    return identityProvider.login({ code, iss, session_state });
}
