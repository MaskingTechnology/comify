
export default class ImageImport
{
    #filename: string;
    #mimeType: string;
    #size: number;
    #data: Buffer;

    constructor(filename: string, mimeType: string, size: number, data: Buffer)
    {
        this.#filename = filename;
        this.#mimeType = mimeType;
        this.#size = size;
        this.#data = data;
    }

    get filename() { return this.#filename; }

    get mimeType() { return this.#mimeType; }

    get size() { return this.#size; }

    get data() { return this.#data; }
}
