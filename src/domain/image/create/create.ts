
import save from '../save/save';
import validate from '../validate/validate';
import convertDataUrl from './convertDataUrl';

export default async function create(type: string, dataUrl: string): Promise<string>
{
    const image = await convertDataUrl(dataUrl);

    validate(image);

    return save(type, image);
}
