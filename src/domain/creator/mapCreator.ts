
import { RecordData } from '../../integrations/database/module';
import Creator from './Creator';

export default function mapCreator(record: RecordData): Creator
{
    return new Creator(
        record.id as string,
        record.fullName as string,
        record.nickName as string,
        record.email as string,
        record.portrait as string
    );
}
