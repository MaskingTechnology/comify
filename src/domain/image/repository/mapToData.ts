
import { type RecordData } from '^/integrations/database/module';

import ImageData from '../data/ImageData';

export default function mapToData(record: RecordData): ImageData
{
    return new ImageData(
        record.id as string,
        record.storageKey as string,
        record.filename as string,
        record.mimeType as string,
        record.size as number
    );
}
