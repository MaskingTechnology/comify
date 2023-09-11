
export default class Comic 
{
    #id: string;
    #parentId: string;
    #imageId: string;
    #structure: string;

    constructor( id: string, parentId: string, imageId: string, structure: string)
    {
        this.#id = id;
        this.#parentId = parentId;
        this.#imageId = imageId;
        this.#structure = structure;
    }

    get id() { return this.#id;  }

    get parentId() { return this.#parentId; }

    get imageId() { return this.#imageId; }

    get structure() { return this.#structure; }
}
