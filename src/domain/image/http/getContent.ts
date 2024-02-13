
export default async function getContent(imageUrl: string): Promise<Buffer>
{
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();

    return Buffer.from(arrayBuffer);
}
