
import Http, { FetchDriver } from '@theshelf/http';

export const driver = new FetchDriver();

export default new Http(driver);
