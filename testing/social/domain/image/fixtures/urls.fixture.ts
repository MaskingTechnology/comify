
export const URLS: Record<string, URL> =
{
    VALID: new URL('http://localhost/image.jpg'),
    INVALID_DATA: new URL('http://localhost/invalid.jpg'),
    INVALID_TYPE: new URL('http://localhost/invalid-type.jpg'),
    INVALID_SIZE: new URL('http://localhost/invalid-size.jpg'),
    NONEXISTING: new URL('http://localhost/nonexisting.jpg')
};
