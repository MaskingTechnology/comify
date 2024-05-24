
export default function createDataUrl(buffer: Buffer, mimeType: string): string
{
    const content = buffer.toString('base64');

    return `data:${mimeType};base64,${content}`;
}
