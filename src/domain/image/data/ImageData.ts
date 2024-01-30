
export default class ImageData
{
    #id: string;
    #storageKey: string;
    #fileName: string;
    #mimeType: string;
    #size: number;

    constructor(id: string, storageKey: string, fileName: string, mimeType: string, size: number)
    {
        this.#id = id;
        this.#storageKey = storageKey;
        this.#fileName = fileName;
        this.#mimeType = mimeType;
        this.#size = size;
    }

    get id() { return this.#id; }

    get storageKey() { return this.#storageKey; }

    get fileName() { return this.#fileName; }

    get mimeType() { return this.#mimeType; }

    get size() { return this.#size; }
}
