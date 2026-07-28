
export default function (buffer: Buffer, mimeType: string): string
{
    const content = buffer.toString('base64');

    return `record:${mimeType};base64,${content}`;
}
