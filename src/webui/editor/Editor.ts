
import FileDropper from './FileDropper';
import FileSelector from './FileSelector';
import ImageLoader from './ImageLoader';
import Model from './Model';
import Renderer from './Renderer';

const BACKGROUND_COLOR = 'white';

const COMIC_WIDTH = 960;
const COMIC_HEIGHT = 540;

export default class Editor
{
    #model: Model;
    #renderer: Renderer;
    #fileDropper: FileDropper;
    #fileSelector: FileSelector;

    constructor(canvas: HTMLCanvasElement, model = new Model())
    {
        this.#model = model;

        this.#renderer = new Renderer(canvas, model);

        this.#fileDropper = new FileDropper(canvas, this.#handleUpload.bind(this));
        this.#fileSelector = new FileSelector(canvas, this.#handleUpload.bind(this));

        this.#initCanvas(canvas);
    }

    start(): void
    {
        this.#renderer.start();
        this.#fileDropper.bind();
        this.#fileSelector.bind();
    }

    stop(): void
    {
        this.#renderer.stop();
        this.#fileDropper.unbind();
        this.#fileSelector.unbind();
    }

    #initCanvas(canvas: HTMLCanvasElement): void
    {
        canvas.style.backgroundColor = BACKGROUND_COLOR;
        canvas.style.width = '100%';

        canvas.width = COMIC_WIDTH;
        canvas.height = COMIC_HEIGHT;
    }

    async #handleUpload(file: File): Promise<void>
    {
        const source = URL.createObjectURL(file);
        const image = await ImageLoader.load(source);

        this.#model.setImage(image);
    }
}
