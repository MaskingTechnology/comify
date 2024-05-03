
import { DATA } from './data.fixture';

export const RESPONSES =
{
    VALID: new Response(DATA.VALID, { status: 200, headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '95' } }),
    INVALID_TYPE: new Response(DATA.INVALID_TYPE, { status: 200, headers: { 'Content-Type': 'image/tiff', 'Content-Length': '96' } }),
    INVALID_SIZE: new Response(DATA.INVALID_SIZE, { status: 200, headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '5242881' } }),
    NONEXISTING: new Response(null, { status: 404 })
};
