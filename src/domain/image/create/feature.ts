
import save, { type Result } from '../save/feature';
import validate from '../validate/feature';
import convertDataUrl from './convertDataUrl';

export default async function feature(type: string, dataUrl: string): Promise<Result>
{
    const image = await convertDataUrl(dataUrl);

    validate(image);

    return save(type, image);
}
