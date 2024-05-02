
import johnDoe from '^/domain/authentication/johnDoe';
import create from '^/domain/image/create';
import download from '^/domain/image/download';
import ImageNotDownloaded from '^/domain/image/errors/ImageNotDownloaded';
import InvalidDataURL from '^/domain/image/errors/InvalidDataURL';
import InvalidImage from '^/domain/image/errors/InvalidImage';
import database from '^/integrations/database/module';
import fileStorage from '^/integrations/filestorage/module';
import httpClient from '^/integrations/http/module';

const IMAGE_URLS =
{
    VALID: 'http://localhost/image.jpg',
    INVALID_DATA: 'http://localhost/invalid.jpg',
    INVALID_TYPE: 'http://localhost/invalid-type.jpg',
    INVALID_SIZE: 'http://localhost/invalid-size.jpg',
    NONEXISTING: 'http://localhost/nonexisting.jpg',
};

const DATA_URLS =
{
    VALID: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh',
    INVALID_FORMAT: 'invalid',
    INVALID_TYPE: 'data:image/tiff;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh',
    INVALID_SIZE: 'data:image/png;base64,123'
};

const RESPONSES =
{
    VALID: new Response(DATA_URLS.VALID, { status: 200, headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '95' } }),
    INVALID_TYPE: new Response(DATA_URLS.INVALID_TYPE, { status: 200, headers: { 'Content-Type': 'image/tiff', 'Content-Length': '96' } }),
    INVALID_SIZE: new Response(DATA_URLS.INVALID_SIZE, { status: 200, headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '5242881' } }),
    NONEXISTING: new Response(null, { status: 404 })
};

async function createDatabase()
{
    if (database.connected)
    {
        await database.disconnect();
    }

    await database.connect();
}

async function createFileStorage()
{
    if (fileStorage.connected)
    {
        await fileStorage.disconnect();
    }

    await fileStorage.connect();

    return fileStorage;
}

httpClient.setCache('HEAD', IMAGE_URLS.VALID, RESPONSES.VALID);
httpClient.setCache('GET', IMAGE_URLS.VALID, RESPONSES.VALID);
httpClient.setCache('HEAD', IMAGE_URLS.INVALID_TYPE, RESPONSES.INVALID_TYPE);
httpClient.setCache('HEAD', IMAGE_URLS.INVALID_SIZE, RESPONSES.INVALID_SIZE);
httpClient.setCache('HEAD', IMAGE_URLS.NONEXISTING, RESPONSES.NONEXISTING);

export
{
    DATA_URLS, IMAGE_URLS,
    ImageNotDownloaded, InvalidDataURL, InvalidImage,
    create, createDatabase, createFileStorage, download, johnDoe
};
