
import Image from '../image/Image';

import ComicData from './ComicData';

export default class Comic extends ComicData
{
    #image: Image;

    constructor(data: ComicData, image: Image)
    {
        super(data.id, data.imageId, data.structure);

        this.#image = image;
    }

    get image() { return this.#image; }
}
