
export default class ImageData
{
    #id: string;
    #storageKey: string;
    #filename: string;
    #mimeType: string;
    #size: number;

    constructor(id: string, storageKey: string, filename: string, mimeType: string, size: number)
    {
        this.#id = id;
        this.#storageKey = storageKey;
        this.#filename = filename;
        this.#mimeType = mimeType;
        this.#size = size;
    }

    get id() { return this.#id; }

    get storageKey() { return this.#storageKey; }

    get filename() { return this.#filename; }

    get mimeType() { return this.#mimeType; }

    get size() { return this.#size; }
}
