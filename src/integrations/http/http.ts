
import Http, { FetchDriver } from '@theshelf/http';

const driver = new FetchDriver();

export default new Http(driver);
