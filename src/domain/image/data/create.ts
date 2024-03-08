
import database from '../../../integrations/database/module';
import { RECORD_TYPE } from '../definitions/constants';
import ImageData from './ImageData';

export default async function create(storageKey: string, filename: string, mimeType: string, size: number): Promise<ImageData>
{
    const imageId = await database.createRecord(RECORD_TYPE, { storageKey, filename, mimeType, size });

    return new ImageData(imageId, storageKey, filename, mimeType, size);
}
