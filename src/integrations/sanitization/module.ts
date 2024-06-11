/*********************************************************************************************************
 * 
 * # INTRODUCTION
 * 
 * This module is responsible for sanitizing the input data. It is used to sanitize the input data before
 * it is used in the application. This module is used to prevent XSS attacks.
 * 
 * # IMPLEMENTATION
 * 
 * The implementation is kept very simple and lightweight for now. The interface defines a single method
 * for sanitizing the input data object. Only the first level of the object is sanitized. The nested objects
 * are not sanitized, as we don't need them for now.
 */

export { default } from './implementation.js';
