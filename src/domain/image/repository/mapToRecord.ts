
import { type RecordData } from '^/integrations/database/module';

import type ImageData from '../data/ImageData';

export default function mapToRecord(data: ImageData): RecordData
{
    return {
        id: data.id,
        storageKey: data.storageKey,
        filename: data.filename,
        mimeType: data.mimeType,
        size: data.size
    };
}
