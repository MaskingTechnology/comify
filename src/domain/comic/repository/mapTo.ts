
import { type RecordData } from '^/integrations/database/module';

import type ComicData from '../data/ComicData';

export default function mapTo(data: ComicData): RecordData
{
    return {
        id: data.id,
        imageId: data.imageId,
        structure: data.structure,
    };
}
