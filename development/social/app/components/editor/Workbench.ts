
import Styling from './definitions/Styling';
import Group from './elements/Group';
import type Bubble from './model/Bubble';
import type Model from './model/Model';
import SpeechBubble from './model/SpeechBubble';
import BubbleSelection from './toolkit/BubbleSelection';
import MainActions from './toolkit/MainActions';
import CameraDialog from './utils/CameraDialog';
import FileDialog from './utils/FileDialog';
import InputDialog from './utils/InputDialog';

const POINTER_X_RATIO = 0.15;
const POINTER_Y_RATIO = 1.5;

export default class Workbench extends Group
{
    #model: Model;
    mainActions: MainActions;
    #selection: BubbleSelection;

    constructor(model: Model)
    {
        super();

        this.#model = model;

        this.mainActions = new MainActions({
            selectImage: this.#selectImage.bind(this),
            takePicture: this.#takePicture.bind(this),
            addSpeechBubble: this.#addSpeechBubble.bind(this)
        });

        this.#selection = new BubbleSelection({
            editBubble: this.#editBubble.bind(this),
            deleteBubble: this.#deleteBubble.bind(this)
        });

        this.addElement(model);
        this.addElement(this.mainActions);

        this.#bindHandlers();
    }

    async setBackgroundImage(file: File): Promise<void>
    {
        const source = URL.createObjectURL(file);

        this.#model.background.loadImage(source);
    }

    hideToolkit(): void
    {
        this.removeElement(this.mainActions);
        this.#deselectBubble();
    }

    showToolkit(): void
    {
        this.addElement(this.mainActions);
    }

    #bindHandlers(): void
    {
        this.#model.background.releaseHandler = this.#deselectBubble.bind(this);
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

    async #takePicture(): Promise<void>
    {
        const source = await CameraDialog.open(this.area.width, this.area.height);

        if (source === undefined)
        {
            return;
        }

        this.#model.background.loadImage(source);
    }

    async #addSpeechBubble(): Promise<void>
    {
        const bubble = this.#createSpeechBubble();

        this.#model.addSpeechBubble(bubble);

        this.#selectBubble(bubble);
    }

    #createSpeechBubble(): SpeechBubble
    {
        const width = Styling.BUBBLE_INITIAL_WIDTH;
        const height = Styling.BUBBLE_INITIAL_HEIGHT;

        const positionX = (this.area.width - width) / 2;
        const positionY = (this.area.height - height) / 2;

        const pointerX = positionX + width * POINTER_X_RATIO;
        const pointerY = positionY + height * POINTER_Y_RATIO;

        const bubble = new SpeechBubble();
        bubble.setSize(width, height);
        bubble.setPosition(positionX, positionY);
        bubble.setPointer(pointerX, pointerY);
        bubble.pressHandler = () => this.#selectBubble(bubble);

        return bubble;
    }

    async #editBubble(bubble: Bubble): Promise<void>
    {
        const text = await InputDialog.open(bubble.text);

        bubble.setText(text);
    }

    async #deleteBubble(bubble: Bubble): Promise<void>
    {
        this.#model.removeSpeechBubble(bubble as SpeechBubble);

        this.#deselectBubble();
    }

    async #selectBubble(bubble: Bubble): Promise<void>
    {
        this.#deselectBubble();

        this.#selection.bubble = bubble;

        this.addElement(this.#selection);
    }

    async #deselectBubble(): Promise<void>
    {
        this.removeElement(this.#selection);
    }
}
