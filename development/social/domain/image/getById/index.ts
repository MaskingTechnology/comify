
import { type Identifier } from '@comify/common/primitives/identifier';

import { type ImageData } from '../definitions';

import createDataUrl from './createDataUrl';
import retrieveFile from './retrieveFile';
import retrieveRecord from './retrieveRecord';

export default async function (id: Identifier): Promise<ImageData>
{
    const record = await retrieveRecord(id);

    const file = await retrieveFile(record.storageKey);

    const dataUrl = createDataUrl(file, record.mimeType);

    return { dataUrl };
}
