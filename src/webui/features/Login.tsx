
import { doLogin } from '^/webui/hooks';

export default function Feature()
{
    doLogin();

    return <>Redirecting...</>;
}
