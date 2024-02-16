
export default class Model
{
    #image?: HTMLImageElement;
    #dirty: boolean;

    constructor()
    {
        this.#dirty = false;
    }

    get image() { return this.#image; }

    get dirty() { return this.#dirty; }

    makeClean()
    {
        this.#dirty = false;
    }

    setImage(image: HTMLImageElement)
    {
        this.#image = image;
        this.#dirty = true;
    }
}
