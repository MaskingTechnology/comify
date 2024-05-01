
import { doLogin } from '^/webui/hooks/module';

export default function Feature()
{
    doLogin();

    return <>Redirecting...</>;
}
