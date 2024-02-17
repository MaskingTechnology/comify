
import Model from './Model';
import Renderer from './Renderer';
import Button from './elements/Button';
import Element from './elements/Element';
import SpeechBubble from './elements/SpeechBubble';
import FileDialog from './utils/FileDialog';
import ImageLoader from './utils/ImageLoader';

const BACKGROUND_COLOR = 'white';

const COMIC_WIDTH = 960;
const COMIC_HEIGHT = 540;

export default class Editor
{
    #canvas: HTMLCanvasElement;
    #model: Model;
    #renderer: Renderer;

    #pressed = false;

    #pressHandler = this.#handlePress.bind(this);
    #moveHandler = this.#handleMove.bind(this);
    #releaseHandler = this.#handleRelease.bind(this);
    #dragoverHandler = this.#handleDragOver.bind(this);
    #dropHandler = this.#handleDrop.bind(this);

    constructor(canvas: HTMLCanvasElement, model = new Model())
    {
        this.#canvas = canvas;
        this.#model = model;
        this.#renderer = new Renderer(canvas, model);

        this.#initCanvas();
        this.#initModel();
    }

    start(): void
    {
        this.#renderer.start();
        this.#bindEvents();
    }

    stop(): void
    {
        this.#renderer.stop();
        this.#unbindEvents();
    }

    #initCanvas(): void
    {
        this.#canvas.style.backgroundColor = BACKGROUND_COLOR;
        this.#canvas.style.width = '100%';

        this.#canvas.width = COMIC_WIDTH;
        this.#canvas.height = COMIC_HEIGHT;
    }

    #initModel(): void
    {
        const selectImage = new Button();
        selectImage.setPosition(40, 480);
        selectImage.releaseHandler = () => this.#selectImage();

        const addBubble = new Button();
        addBubble.setPosition(90, 480);
        addBubble.releaseHandler = () => this.#addSpeechBubble();

        this.#model.addButton(selectImage);
        this.#model.addButton(addBubble);
    }

    #bindEvents(): void
    {
        this.#canvas.addEventListener('mousedown', this.#pressHandler);
        this.#canvas.addEventListener('mousemove', this.#moveHandler);
        this.#canvas.addEventListener('mouseup', this.#releaseHandler);
        this.#canvas.addEventListener('dragover', this.#dragoverHandler);
        this.#canvas.addEventListener('drop', this.#dropHandler);
    }

    #unbindEvents(): void
    {
        this.#canvas.removeEventListener('mousedown', this.#pressHandler);
        this.#canvas.removeEventListener('mousemove', this.#moveHandler);
        this.#canvas.removeEventListener('mouseup', this.#releaseHandler);
        this.#canvas.removeEventListener('dragover', this.#dragoverHandler);
        this.#canvas.removeEventListener('drop', this.#dropHandler);
    }

    #handlePress(event: MouseEvent): void
    {
        event.preventDefault();

        this.#pressed = true;

        const element = this.#getSelectedElement(event);
        const handler = element?.pressHandler;

        if (handler !== undefined)
        {
            handler();
        }
    }

    #handleMove(event: MouseEvent): void
    {
        event.preventDefault();

        if (this.#pressed === false)
        {
            return;
        }

        const element = this.#getSelectedElement(event);
        const handler = element?.dragHandler;

        if (handler !== undefined)
        {
            handler();
        }
    }

    #handleRelease(event: MouseEvent): void
    {
        event.preventDefault();

        this.#pressed = false;

        const element = this.#getSelectedElement(event);
        const handler = element?.releaseHandler;

        if (handler !== undefined)
        {
            handler();
        }
    }

    #handleDragOver(event: DragEvent): void
    {
        event.preventDefault();
    }

    #handleDrop(event: DragEvent): void
    {
        event.preventDefault();

        const files = event.dataTransfer?.files;

        if (files === undefined || files.length === 0)
        {
            return;
        }

        this.#setBackgroundImage(files[0]);
    }

    #getSelectedElement(event: MouseEvent): Element | undefined
    {
        const target = event.target as HTMLCanvasElement;
        const rect = target.getBoundingClientRect();

        const canvasX = event.clientX - rect.left;
        const canvasY = event.clientY - rect.top;

        const modelX = canvasX * (target.width / rect.width);
        const modelY = canvasY * (target.height / rect.height);

        return this.#model.getElementAt(modelX, modelY);
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

    #addSpeechBubble(): void
    {
        const bubble = new SpeechBubble();
        bubble.setPosition(100, 100);
        bubble.setSize(200, 100);
        bubble.setPointer(100, 0);
        bubble.releaseHandler = () => console.log('bubble clicked');

        this.#model.addSpeechBubble(bubble);
    }
}
