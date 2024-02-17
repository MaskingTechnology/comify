
import Element from './Element';

export default abstract class Caption extends Element
{
    #text?: string;

    get text() { return this.#text; }

    setText(value: string)
    {
        this.#text = value;

        this.makeDirty();
    }
}
