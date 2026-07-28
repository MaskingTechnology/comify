
import type { Record, ImageData } from '../definitions';

export default function toImageData(records: Record[], filesMap: Map<string, Buffer>): Map<string, ImageData>
{
    const map = new Map();

    records.forEach(record =>
    {
        const buffer = filesMap.get(record.storageKey);

        if (buffer === undefined) return;

        const content = buffer.toString('base64');

        const dataUrl = `data:${record.mimeType};base64,${content}`;

        map.set(record.id, { dataUrl });
    });

    return map;
}
