
export default class image
{
    #storageKey: string;
    #fileName: string;
    #mimeType: string;
    #size: number;

    constructor(storageKey: string, fileName: string, mimeType: string, size: number)
    {
        this.#storageKey = storageKey;
        this.#fileName = fileName;
        this.#mimeType = mimeType;
        this.#size = size;
    }

    get storageKey() { return this.#storageKey; }

    get fileName() { return this.#fileName; }

    get mimeType() {return this.#mimeType; }

    get size() { return this.#size; }
}
