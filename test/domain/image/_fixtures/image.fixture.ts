
import johnDoe from '^/domain/authentication/johnDoe';
import create from '^/domain/image/create';
import download from '^/domain/image/download';
import ImageNotDownloaded from '^/domain/image/errors/ImageNotDownloaded';
import InvalidDataURL from '^/domain/image/errors/InvalidDataURL';
import InvalidImage from '^/domain/image/errors/InvalidImage';
import database from '^/integrations/database/module';
import fileStorage from '^/integrations/filestorage/module';

const IMAGE_URLS =
{
    VALID: 'https://masking.tech/images/peter.jpg',
    NONEXISTING: 'https://masking.tech/images/nonexisting.jpg'
};

const DATA_URLS =
{
    VALID: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh',
    INVALID_FORMAT: 'invalid',
    INVALID_TYPE: 'data:image/tiff;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh',
    INVALID_SIZE: 'data:image/png;base64,123'
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

export
{
    DATA_URLS, IMAGE_URLS,
    ImageNotDownloaded, InvalidDataURL, InvalidImage,
    create, createDatabase, createFileStorage, download, johnDoe
};
