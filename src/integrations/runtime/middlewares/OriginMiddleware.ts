
import type { Middleware, NextHandler, Request, Response } from 'jitar';

import { setCookie } from '^/integrations/utilities/webbrowser';

const ORIGIN_HEADER = 'X-Comify-Origin';

export default class OriginMiddleware implements Middleware
{
    constructor()
    {
        const origin = document.location.origin;

        setCookie(ORIGIN_HEADER, origin);
    }

    handle(request: Request, next: NextHandler): Promise<Response>
    {
        return next();
    }
}
