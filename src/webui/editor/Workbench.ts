
import Styling from './definitions/Styling';
import Group from './elements/Group';
import type Bubble from './model/Bubble';
import type Model from './model/Model';
import SpeechBubble from './model/SpeechBubble';
import BubbleSelection from './toolkit/BubbleSelection';
import Buttons from './toolkit/Buttons';
import FileDialog from './utils/FileDialog';
import InputDialog from './utils/InputDialog';

export default class Workbench extends Group
{
    #model: Model;
    #buttons: Buttons;
    #selection: BubbleSelection;

    constructor(model: Model)
    {
        super();

        this.#model = model;

        this.#buttons = new Buttons({
            selectImage: this.#selectImage.bind(this),
            addSpeechBubble: this.#addSpeechBubble.bind(this)
        });

        this.#selection = new BubbleSelection({
            editBubble: this.#editBubble.bind(this),
            deleteBubble: this.#deleteBubble.bind(this)
        });

        this.addElement(model);
        this.addElement(this.#buttons);

        this.#bindHandlers();
    }

    async setBackgroundImage(file: File): Promise<void>
    {
        const source = URL.createObjectURL(file);

        this.#model.background.loadImage(source);
    }

    hideToolkit(): void
    {
        this.removeElement(this.#buttons);
        this.#deselectBubble();
    }

    showToolkit(): void
    {
        this.addElement(this.#buttons);
    }

    #bindHandlers(): void
    {
        this.#model.background.releaseHandler = this.#deselectBubble.bind(this);
        this.#model.intro.releaseHandler = this.#editIntro.bind(this);
        this.#model.outro.releaseHandler = this.#editOutro.bind(this);
    }

    async #selectImage(): Promise<void>
    {
        const file = await FileDialog.open();

        if (file === undefined)
        {
            return;
        }

        this.setBackgroundImage(file);
    }

    #addSpeechBubble()
    {
        const width = Styling.BUBBLE_INITIAL_WIDTH;
        const height = Styling.BUBBLE_INITIAL_HEIGHT;

        const positionX = (this.area.width - width) / 2;
        const positionY = (this.area.height - height) / 2;

        const pointerX = positionX + width / 2;
        const pointerY = positionY + height * 2;

        const bubble = new SpeechBubble();
        bubble.setSize(width, height);
        bubble.setPosition(positionX, positionY);
        bubble.setPointer(pointerX, pointerY);
        bubble.pressHandler = () => this.#selectBubble(bubble);

        this.#model.addSpeechBubble(bubble);
    }

    async #editBubble(bubble: Bubble): Promise<void>
    {
        const text = await InputDialog.open(bubble.text);

        bubble.setText(text);
    }

    #deleteBubble(bubble: Bubble): void
    {
        this.#model.removeSpeechBubble(bubble as SpeechBubble);

        this.#deselectBubble();
    }

    #editIntro(): void
    {

    }

    #editOutro(): void
    {

    }

    #selectBubble(bubble: Bubble): void
    {
        this.#deselectBubble();

        this.#selection.bubble = bubble;

        this.addElement(this.#selection);
    }

    #deselectBubble(): void
    {
        this.removeElement(this.#selection);
    }
}
