
import createDataUrl from './createDataUrl';
import getFile from './getFile';

export type Data = {
    readonly storageKey: string;
    readonly mimeType: string;
};

export type Result = {
    readonly dataUrl: string;
};

export default async function createView(data: Data): Promise<Result>
{
    const file = await getFile(data.storageKey);

    const dataUrl = createDataUrl(file, data.mimeType);

    return { dataUrl };
}
