
import TenantMiddleware from './middlewares/TenantMiddleware';

const tenantPath = 'domain/tenant/getByOriginConverted';

export default new TenantMiddleware(tenantPath);
