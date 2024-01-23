
export default class ImageView
{
    #dataUrl: string;

    constructor(dataUrl: string)
    {
        this.#dataUrl = dataUrl;
    }

    get dataUrl() { return this.#dataUrl; }
}
