
import Validator, {ZodDriver } from '@theshelf/validation';

export const driver = new ZodDriver();

export default new Validator(driver);
