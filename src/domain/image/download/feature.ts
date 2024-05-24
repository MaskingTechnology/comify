
import save, { type Result } from '../save/feature';
import validate from '../validate/feature';
import downloadImage from './downloadImage';
import getMetaData from './getMetaData';

export default async function feature(type: string, imageUrl: string): Promise<Result>
{
    const metaData = await getMetaData(imageUrl);

    validate(metaData);

    const buffer = await downloadImage(imageUrl);

    const image = { ...metaData, buffer };

    return save(type, image);
}
