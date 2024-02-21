
import BubbleSelection from './components/BubbleSelection';
import ButtonBar from './components/ButtonBar';
import Group from './elements/Group';
import type Bubble from './model/Bubble';
import type Model from './model/Model';
import SpeechBubble from './model/SpeechBubble';
import FileDialog from './utils/FileDialog';
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

    async setBackgroundImage(file: File): Promise<void>
    {
        const source = URL.createObjectURL(file);

        this.#model.background.loadImage(source);
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
