
import ImageData from '../image/data/ImageData';
import download from '../image/download';
//import check from '../image/check';
//import save from '../image/save';
//import generateKey from '../image/data/generateKey';
import { IMAGE_TYPE } from './data/constants';

export default async function generatePortrait(pictureUrl: string): Promise<ImageData>
{
    // check image: ImageData

    // download the picture from external source: Buffer

    // generate the storage key: string

    // if the ImageData doesn't exist, save the buffer: Promise<void>

    // return the ImageData: ImageData

    return download(pictureUrl, IMAGE_TYPE);
}

// If the above implementation starts to look a lot like an Image 'manager', then it should be
// stored over there
