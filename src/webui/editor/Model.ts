
import { type Area, type Vector } from './Geometry';

export type Bubble = Area & Vector & {
    text: string;
};

export default class Model
{
    #image?: HTMLImageElement;
    #speechBubbles: Bubble[];
    #dirty: boolean;

    constructor()
    {
        this.#speechBubbles = [];
        this.#dirty = true;
    }

    get image() { return this.#image; }

    get speechBubbles() { return this.#speechBubbles; }

    get dirty() { return this.#dirty; }

    makeClean()
    {
        this.#dirty = false;
    }

    setImage(image: HTMLImageElement)
    {
        this.#image = image;
        this.#dirty = true;
    }

    addSpeechBubble(bubble: Bubble)
    {
        this.#speechBubbles.push(bubble);
        this.#dirty = true;
    }
}
