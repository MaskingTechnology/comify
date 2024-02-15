
import { RecordData } from '../../../integrations/database/module';
import ImageData from './ImageData';

export default function createData(record: RecordData): ImageData
{
    return new ImageData(
        record.id as string,
        record.storageKey as string,
        record.fileName as string,
        record.mimeType as string,
        record.size as number
    );
}
