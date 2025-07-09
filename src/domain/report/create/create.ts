
import type { Reason } from '../types';
import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function create(postId: string, reason: Reason, remark: string | undefined = undefined): Promise<string>
{
    const newData = createData(postId, reason, remark);

    validateData(newData);

    return insertData(newData);
}
