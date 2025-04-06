
import { setCookie } from '^/integrations/utilities/webbrowser';
import type { Middleware, NextHandler, Request, Response } from 'jitar';

const hostHeader = 'x-comify-host';

export default class TenantMiddleware implements Middleware
{
    constructor()
    {
        const clientHost = document.location.host;

        setCookie(hostHeader, clientHost);
    }

    handle(request: Request, next: NextHandler): Promise<Response>
    {
        return next();
    }
}
