
export const URLS: Record<string, URL> =
{
    VALID: new URL('http://localhost/image.jpg'),
    INVALID_DATA: new URL('http://localhost/invalid.jpg'),
    INVALID_TYPE: new URL('http://localhost/invalid-type.jpg'),
    INVALID_SIZE: new URL('http://localhost/invalid-size.jpg'),
    NONEXISTING: new URL('http://localhost/nonexisting.jpg')
};

export const DATA_URLS: Record<string, string> =
{
    VALID: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh',
    INVALID_FORMAT: 'invalid',
    INVALID_TYPE: 'data:image/tiff;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh',
    INVALID_SIZE: 'data:image/png;base64,123'
};

export const RESPONSES: Record<string, Response> =
{
    VALID: new Response(DATA_URLS.VALID, { status: 200, headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '95' } }),
    INVALID_TYPE: new Response(DATA_URLS.INVALID_TYPE, { status: 200, headers: { 'Content-Type': 'image/tiff', 'Content-Length': '96' } }),
    INVALID_SIZE: new Response(DATA_URLS.INVALID_SIZE, { status: 200, headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '5242881' } }),
    NONEXISTING: new Response(null, { status: 404 })
};
