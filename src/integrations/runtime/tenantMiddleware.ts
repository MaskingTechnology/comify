
import { TENANT_BY_ORIGIN_PATH } from '^/domain/definitions';

import TenantMiddleware from './middlewares/TenantMiddleware';

const tenantPath = TENANT_BY_ORIGIN_PATH;

export default new TenantMiddleware(tenantPath);
