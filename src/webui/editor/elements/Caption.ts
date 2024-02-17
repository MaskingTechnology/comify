
import Element from './Element';

export default abstract class Caption extends Element
{
    #text: string;

    constructor(text: string)
    {
        super();
        this.#text = text;
    }

    get text() { return this.#text; }

    set text(value: string)
    {
        this.#text = value;

        this.makeDirty();
    }
}
