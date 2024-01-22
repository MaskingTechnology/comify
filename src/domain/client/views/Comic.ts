
import Image from './Image';

export default class Comic
{
    #id: string;
    #image: Image;

    constructor(id: string, image: Image)
    {
        this.#id = id;
        this.#image = image;
    }

    get id() { return this.#id; }

    get image() { return this.#image; }
}
