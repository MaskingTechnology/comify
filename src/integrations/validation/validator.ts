
import Validator from '@theshelf/validation';
import { ZodDriver } from '@theshelf/validation-driver-zod';

import { shelfLogger } from '^/integrations/logging';

export const driver = new ZodDriver();

export default new Validator(driver, shelfLogger);
