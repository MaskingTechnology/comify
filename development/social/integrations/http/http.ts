
import Http, { MappedDriver, FetchDriver } from '@theshelf/http';

import { shelfLogger } from '^/integrations/logging';

export const driver = process.env.HTTP_DRIVER === 'fetch'
    ? new FetchDriver()
    : new MappedDriver();

export default new Http(driver, shelfLogger);
