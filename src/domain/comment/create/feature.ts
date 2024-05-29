
import type { DataModel } from '../types';

import createData from './createData';
import insertData from './insertData';

export default async function feature(message: string): Promise<DataModel>
{
    const data = createData(message);

    await insertData(data);

    return data;
}
