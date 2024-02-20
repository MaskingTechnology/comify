
import Renderer from './Renderer';
import Worksheet from './Worksheet.js';
import InputEvents from './definitions/InputEvents';
import ModelEvents from './definitions/ModelEvents';
import Element from './elements/Element';
import Model from './model/Model';
import EventManager from './utils/EventManager';
import FileDialog from './utils/FileDialog';
import ImageLoader from './utils/ImageLoader';
import InputDialog from './utils/InputDialog';
import InputManager from './utils/InputManager';

const COMIC_WIDTH = 960;
const COMIC_HEIGHT = 540;

export default class Editor
{
    #worksheet: Worksheet;
    #renderer: Renderer;
    #inputManager: InputManager;

    #selectedElement?: Element;

    constructor(canvas: HTMLCanvasElement, model = new Model())
    {
        this.#worksheet = new Worksheet(model);
        this.#renderer = new Renderer(canvas, this.#worksheet);
        this.#inputManager = new InputManager(canvas);

        this.#initCanvas(canvas);
    }

    start(): void
    {
        this.#renderer.start();
        this.#inputManager.bind();
        this.#bindEvents();
    }

    stop(): void
    {
        this.#renderer.stop();
        this.#inputManager.unbind();
        this.#unbindEvents();
    }

    #initCanvas(canvas: HTMLCanvasElement): void
    {
        canvas.style.width = '100%';

        canvas.width = COMIC_WIDTH;
        canvas.height = COMIC_HEIGHT;
    }

    #bindEvents(): void
    {
        EventManager.listen(InputEvents.PRESSED, this.#handlePressed.bind(this));
        EventManager.listen(InputEvents.DRAGGED, this.#handleDragged.bind(this));
        EventManager.listen(InputEvents.RELEASED, this.#handleReleased.bind(this));
        EventManager.listen(InputEvents.DROPPED, this.#handleDropped.bind(this));

        EventManager.listen(ModelEvents.SELECT_IMAGE, this.#selectImage.bind(this));
        EventManager.listen(ModelEvents.ADD_BUBBLE, this.#addSpeechBubble.bind(this));
        EventManager.listen(ModelEvents.EDIT_BUBBLE, this.#editSpeechBubble.bind(this));
    }

    #unbindEvents(): void
    {
        EventManager.clear();
    }

    #handlePressed(x: number, y: number): void
    {
        this.#selectedElement = this.#worksheet.getElementAt(x, y);

        if (this.#selectedElement !== undefined)
        {
            this.#selectedElement.press(x, y);
        }
    }

    #handleDragged(deltaX: number, deltaY: number): void
    {
        if (this.#selectedElement !== undefined)
        {
            this.#selectedElement.drag(deltaX, deltaY);
        }
    }

    #handleReleased(x: number, y: number): void
    {
        if (this.#selectedElement !== undefined)
        {
            this.#selectedElement.release(x, y);
        }

        this.#selectedElement = undefined;
    }

    #handleDropped(files?: File[]): void
    {
        if (files === undefined || files.length === 0)
        {
            return;
        }

        const file = files[0];

        if (file.type.startsWith('image/'))
        {
            this.#setBackgroundImage(file);
        }
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

        this.#worksheet.setBackgroundImage(image);
    }

    #addSpeechBubble(): void
    {
        this.#worksheet.addSpeechBubble();
    }

    async #editSpeechBubble(): Promise<void>
    {
        const text = await InputDialog.open('Edit speech bubble');
        console.log(text);
    }
}
