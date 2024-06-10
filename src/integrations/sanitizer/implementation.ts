
import { Sanitizer } from './definitions/interfaces.js';
import UnknownImplementation from './errors/UnknownImplementation.js';
import createSanitizeHtml from './implementations/sanitize-html/create.js';

const implementations = new Map<string, () => Sanitizer>([
    ['sanitize-html', createSanitizeHtml],
]);

const DEFAULT_SANITIZER_IMPLEMENTATION = 'sanitize-html';

const implementationName = process.env.SANITIZER_IMPLEMENTATION ?? DEFAULT_SANITIZER_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
