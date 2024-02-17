
import Background from './elements/Background';
import Button from './elements/Button';
import Element from './elements/Element';
import Intro from './elements/Intro';
import Outro from './elements/Outro';
import SpeechBubble from './elements/SpeechBubble';

export default class Model
{
    #background: Background;
    #speechBubbles: SpeechBubble[];
    #intro: Intro;
    #outro: Outro;
    #buttons: Button[];

    #elements: Element[];

    constructor()
    {
        this.#background = new Background();
        this.#speechBubbles = [];
        this.#intro = new Intro('');
        this.#outro = new Outro('');
        this.#buttons = [];

        this.#elements = [this.#background, this.#intro, this.#outro];
    }

    get background() { return this.#background; }

    get speechBubbles() { return this.#speechBubbles; }

    get elements() { return this.#elements; }

    get dirty() { return this.#elements.some(element => element.dirty); }

    addSpeechBubble(bubble: SpeechBubble)
    {
        this.#speechBubbles.push(bubble);

        this.#update();
    }

    removeSpeechBubble(bubble: SpeechBubble)
    {
        const index = this.#speechBubbles.indexOf(bubble);

        if (index === -1)
        {
            return;
        }

        this.#speechBubbles.splice(index, 1);

        this.#update();
    }

    addButton(button: Button): void
    {
        this.#buttons.push(button);

        this.#update();
    }

    removeButton(button: Button): void
    {
        const index = this.#buttons.indexOf(button);

        if (index === -1)
        {
            return;
        }

        this.#buttons.splice(index, 1);

        this.#update();
    }

    getElementAt(x: number, y: number): Element | undefined
    {
        const reversedElements = this.#elements.toReversed();

        return reversedElements.find(element => element.hit(x, y));
    }

    render(context: CanvasRenderingContext2D): void
    {
        this.#elements.forEach(element => element.render(context));
    }

    #update(): void
    {
        this.#elements = [
            this.#background,
            ...this.#speechBubbles,
            this.#intro,
            this.#outro,
            ...this.#buttons
        ];
    }
}
