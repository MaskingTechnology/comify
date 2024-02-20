
import BubbleSelection from './components/BubbleSelection';
import ButtonBar from './components/ButtonBar';
import Group from './elements/Group';
import type Bubble from './model/Bubble';
import type Model from './model/Model';
import SpeechBubble from './model/SpeechBubble';
import FileDialog from './utils/FileDialog';
import ImageLoader from './utils/ImageLoader';
import InputDialog from './utils/InputDialog';

export default class Workbench extends Group
{
    #model: Model;
    #selection: BubbleSelection;

    constructor(model: Model)
    {
        super();

        this.#model = model;

        this.#selection = new BubbleSelection({
            editBubble: this.#editBubble.bind(this),
            deleteBubble: this.#deleteBubble.bind(this)
        });

        const buttonBar = new ButtonBar({
            selectImage: this.#selectImage.bind(this),
            addSpeechBubble: this.#addSpeechBubble.bind(this)
        });

        this.addElement(model);
        this.addElement(buttonBar);

        this.#bindHandlers();
    }

    async #selectImage(): Promise<void>
    {
        const file = await FileDialog.open();

        if (file === undefined)
        {
            return;
        }

        this.#setBackgroundImage(file);
    }

    async #setBackgroundImage(file: File): Promise<void>
    {
        const source = URL.createObjectURL(file);
        const image = await ImageLoader.load(source);

        this.#model.background.setImage(image);
    }

    #addSpeechBubble()
    {
        const bubble = new SpeechBubble();
        bubble.setPosition(100, 100);
        bubble.setSize(200, 100);
        bubble.setPointer(200, 300);
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

        this.#deselectBubble(0, 0);
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

    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    #editOutro(x: number, y: number): void
    {

    }

    #selectBubble(bubble: Bubble): void
    {
        this.#deselectBubble(0, 0);

        this.#selection.bubble = bubble;

        this.addElement(this.#selection);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    #deselectBubble(x: number, y: number): void
    {
        this.removeElement(this.#selection);
    }
}
