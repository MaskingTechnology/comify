
import { Sanitizer } from './definitions/interfaces.js';
import UnknownImplementation from './errors/UnknownImplementation.js';
import createSanitizeHtml from './implementations/sanitize-html/create.js';

const implementations = new Map<string, () => Sanitizer>([
    ['sanitize-html', createSanitizeHtml],
]);

const DEFAULT_SANITIZATION_IMPLEMENTATION = 'sanitize-html';

const implementationName = process.env.SANITIZATION_IMPLEMENTATION ?? DEFAULT_SANITIZATION_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
