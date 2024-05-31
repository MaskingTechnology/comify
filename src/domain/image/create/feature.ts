
import save from '../save/feature';
import validate from '../validate/feature';
import convertDataUrl from './convertDataUrl';

export default async function feature(type: string, dataUrl: string): Promise<string>
{
    const image = await convertDataUrl(dataUrl);

    validate(image);

    return save(type, image);
}
