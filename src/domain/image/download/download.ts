
import save from '../save/save';
import validate from '../validate/validate';
import downloadImage from './downloadImage';
import getMetaData from './getMetaData';

export default async function download(type: string, imageUrl: string): Promise<string>
{
    const metaData = await getMetaData(imageUrl);

    validate(metaData);

    const buffer = await downloadImage(imageUrl);

    const image = { ...metaData, buffer };

    return save(type, image);
}
