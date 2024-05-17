
import type ImageView from '^/domain/image/view/ImageView';

export default class ComicView
{
    #id: string;
    #image: ImageView;

    constructor(id: string, image: ImageView)
    {
        this.#id = id;
        this.#image = image;
    }

    get id() { return this.#id; }

    get image() { return this.#image; }
}
