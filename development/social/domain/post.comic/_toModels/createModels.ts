
import type { Identifier } from '@comify/common/primitives/identifier';

import { type ImageData } from '~/image';

import type { Record, Comic } from '../definitions';
import { logger } from '../integrations';

export default function (records: Record[], imageMap: Map<Identifier, ImageData>): Map<Identifier, Comic>
{
    const map = new Map();

    records.forEach(record =>
    {
        const image = imageMap.get(record.imageId);

        if (image === undefined) return logger.warn(`Image data for comic with id ${record.id} not found`);

        map.set(record.id, { image });
    });

    return map;
}