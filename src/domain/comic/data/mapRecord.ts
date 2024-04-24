
import { RecordData } from '^/integrations/database/module';

import ComicData from './ComicData';

export default function mapRecord(record: RecordData): ComicData
{
    return new ComicData(
        record.id as string,
        record.imageId as string,
        record.structure as string
    );
}
