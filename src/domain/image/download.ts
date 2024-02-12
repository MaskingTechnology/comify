

export default async function download(picture: string): Promise<Buffer>
{
    const response = await fetch(picture);
    const arrayBuffer = await response.arrayBuffer();

    return Buffer.from(arrayBuffer);
}
