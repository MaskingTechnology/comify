
import Renderer from './Renderer';
import Workbench from './Workbench';
import type Element from './elements/Element';
import Model from './model/Model';
import InputManager from './utils/InputManager';

const COMIC_WIDTH = 960;
const COMIC_HEIGHT = 540;

export default class Editor
{
    #workbench: Workbench;
    #renderer: Renderer;
    #inputManager: InputManager;

    #selectedElement?: Element;

    constructor(canvas: HTMLCanvasElement, model = new Model())
    {
        this.#workbench = new Workbench(model);
        this.#renderer = new Renderer(canvas, this.#workbench);
        this.#inputManager = new InputManager(canvas, {
            press: this.#handlePress.bind(this),
            drag: this.#handleDrag.bind(this),
            release: this.#handleRelease.bind(this),
            drop: this.#handleDrop.bind(this)
        });

        this.#workbench.setSize(COMIC_WIDTH, COMIC_HEIGHT);

        this.#initCanvas(canvas);
    }

    start(): void
    {
        this.#renderer.start();
        this.#inputManager.bind();
    }

    stop(): void
    {
        this.#renderer.stop();
        this.#inputManager.unbind();
    }

    export(): string
    {
        this.#workbench.hideToolkit();

        const data = this.#renderer.capture();

        this.#workbench.showToolkit();

        return data;
    }

    #initCanvas(canvas: HTMLCanvasElement): void
    {
        canvas.style.width = '100%';
        canvas.width = COMIC_WIDTH;
        canvas.height = COMIC_HEIGHT;
    }

    #handlePress(x: number, y: number): void
    {
        this.#selectedElement = this.#workbench.getElementAt(x, y);

        if (this.#selectedElement !== undefined)
        {
            this.#selectedElement.press(x, y);
        }
    }

    #handleDrag(deltaX: number, deltaY: number): void
    {
        if (this.#selectedElement !== undefined)
        {
            this.#selectedElement.drag(deltaX, deltaY);
        }
    }

    #handleRelease(x: number, y: number): void
    {
        if (this.#selectedElement !== undefined)
        {
            this.#selectedElement.release(x, y);
        }

        this.#selectedElement = undefined;
    }

    #handleDrop(files?: FileList): void
    {
        if (files === undefined || files.length === 0)
        {
            return;
        }

        const file = files[0];

        if (file.type.startsWith('image/'))
        {
            this.#workbench.setBackgroundImage(file);
        }
    }
}
