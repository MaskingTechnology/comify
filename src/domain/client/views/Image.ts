
export default class Image
{
    #dataUrl: string;

    constructor(dataUrl: string)
    {
        this.#dataUrl = dataUrl;
    }

    get dataUrl() { return this.#dataUrl; }
}
