
import createDataUrl from './createDataUrl';
import retrieveData from './retrieveData';
import retrieveFile from './retrieveFile';

export type Result = {
    readonly dataUrl: string;
};

export default async function feature(id: string): Promise<Result>
{
    const data = await retrieveData(id);
    const file = await retrieveFile(data.storageKey);

    const dataUrl = createDataUrl(file, data.mimeType);

    return { dataUrl };
}
