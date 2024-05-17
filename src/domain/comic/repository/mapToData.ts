
import { type RecordData } from '^/integrations/database/module';

import ComicData from '../data/ComicData';

export default function mapToData(record: RecordData): ComicData
{
    return new ComicData(
        record.id as string,
        record.imageId as string,
        record.structure as string
    );
}
