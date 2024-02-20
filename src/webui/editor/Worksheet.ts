
import BubbleSelection from './components/BubbleSelection';
import ButtonBar from './components/ButtonBar';
import ModelEvents from './definitions/ModelEvents';
import Group from './elements/Group';
import type Bubble from './model/Bubble';
import type Model from './model/Model';
import SpeechBubble from './model/SpeechBubble';
import EventManager from './utils/EventManager';

export default class Worksheet extends Group
{
    #model: Model;
    #selection?: BubbleSelection;

    constructor(model: Model)
    {
        super();

        this.#model = model;

        const buttonBar = new ButtonBar();

        this.addElement(model);
        this.addElement(buttonBar);

        this.#bindHandlers();
    }

    setBackgroundImage(image: HTMLImageElement)
    {
        this.#model.background.setImage(image);
    }

    addSpeechBubble()
    {
        const bubble = new SpeechBubble();
        bubble.setPosition(100, 100);
        bubble.setSize(200, 100);
        bubble.setPointer(200, 300);
        bubble.pressHandler = () => this.#selectBubble(bubble);

        this.#model.addSpeechBubble(bubble);
    }

    #bindHandlers(): void
    {
        this.#model.background.releaseHandler = this.#deselectBubble.bind(this);
        this.#model.intro.releaseHandler = this.#editIntro.bind(this);
        this.#model.outro.releaseHandler = this.#editOutro.bind(this);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    #editIntro(x: number, y: number): void
    {
        EventManager.dispatch(ModelEvents.EDIT_INTRO);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    #editOutro(x: number, y: number): void
    {
        EventManager.dispatch(ModelEvents.EDIT_OUTRO);
    }

    #selectBubble(bubble: Bubble): void
    {
        this.#deselectBubble(0, 0);

        this.#selection = new BubbleSelection(bubble);
        this.addElement(this.#selection);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    #deselectBubble(x: number, y: number): void
    {
        if (this.#selection === undefined)
        {
            return;
        }

        this.removeElement(this.#selection);
        this.#selection = undefined;
    }
}
