
import { ImageData } from '~/image';

import { type Record, type Comic } from '../definitions';

export default function (record: Record, image: ImageData): Comic
{
    const { structure } = record;

    return { structure, image };
}
