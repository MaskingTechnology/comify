
export default class ComicData
{
    #id: string;
    #imageId: string;
    #structure?: string;

    constructor(id: string, imageId: string, structure?: string)
    {
        this.#id = id;
        this.#imageId = imageId;
        this.#structure = structure;
    }

    get id() { return this.#id; }

    get imageId() { return this.#imageId; }

    get structure() { return this.#structure; }
}
