
import { RecordData } from '../../../integrations/database/module';

import CreatorData from './CreatorData';

export default function createData(record: RecordData): CreatorData
{
    return new CreatorData(
        record.id as string,
        record.fullName as string,
        record.nickName as string,
        record.email as string,
        record.portrait as string
    );
}
