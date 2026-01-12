
import Validator, {ZodDriver } from '@theshelf/validation';

const driver = new ZodDriver();

export default new Validator(driver);
