/*************************************************************************************

This file is the entry point for the chosen database implementation.
Its intend is to decouple the actual implementation from the database module file.

The content of this file is for development purposes and will not be used at runtime.
This file will be overridden by Jitar at runtime level. Depending on the context the
MongoDB or Mock implementation be provided.

*************************************************************************************/

export { default } from './implementations/mongodb.js';
