
import { Identity } from '../../integrations/authentication/module';

export default async function login(identity: Identity): Promise<void>
{
    console.log('login', identity);
}
