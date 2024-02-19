
import Renderer from './Renderer';
import Worksheet from './Worksheet.js';
import InputEvents from './definitions/InputEvents';
import ModelEvents from './definitions/ModelEvents';
import Model from './model/Model';
import EventManager from './utils/EventManager';
import FileDialog from './utils/FileDialog';
import ImageLoader from './utils/ImageLoader';
import InputManager from './utils/InputManager';

const BACKGROUND_COLOR = 'white';

const COMIC_WIDTH = 960;
const COMIC_HEIGHT = 540;

export default class Editor
{
    #worksheet: Worksheet;
    #renderer: Renderer;
    #inputManager: InputManager;

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
        canvas.style.backgroundColor = BACKGROUND_COLOR;
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
        EventManager.listen(ModelEvents.ADD_SPEECH_BUBBLE, this.#addSpeechBubble.bind(this));
    }

    #unbindEvents(): void
    {
        EventManager.clear();
    }

    #handlePressed(x: number, y: number): void
    {
        this.#worksheet.press(x, y);
    }

    #handleDragged(x: number, y: number): void
    {
        this.#worksheet.drag(x, y);
    }

    #handleReleased(x: number, y: number): void
    {
        this.#worksheet.release(x, y);
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
}
