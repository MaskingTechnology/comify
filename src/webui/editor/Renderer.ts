
import Model from './Model';

export default class Renderer
{
    #canvas: HTMLCanvasElement;
    #context: CanvasRenderingContext2D;
    #model: Model;
    #running: boolean;

    constructor(canvas: HTMLCanvasElement, model: Model)
    {
        this.#canvas = canvas;
        this.#context = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.#model = model;
        this.#running = false;

        this.#context.imageSmoothingEnabled = false;
    }

    start(): void
    {
        this.#running = true;
        this.#render();
    }

    stop(): void
    {
        this.#running = false;
    }

    #render()
    {
        if (this.#running === false)
        {
            return;
        }

        if (this.#model.dirty)
        {
            this.#model.makeClean();

            this.#renderModel();
        }

        window.requestAnimationFrame(() =>
        {
            this.#render();
        });
    }

    #renderModel(): void
    {
        this.#clearCanvas();

        if (this.#model.image !== undefined)
        {
            this.#renderImage(this.#model.image);
        }
    }

    #clearCanvas(): void
    {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    #renderImage(image: HTMLImageElement): void
    {
        const widthRation = this.#canvas.width / image.width;
        const heightRation = this.#canvas.height / image.height;
        // const ratio = Math.min(widthRation, heightRation); // Fit image inside canvas
        const ratio = Math.max(widthRation, heightRation); // Fill canvas with image

        const sx = 0;
        const sy = 0;
        const sWidth = image.width;
        const sHeight = image.height;

        const dx = (this.#canvas.width - image.width * ratio) / 2;
        const dy = (this.#canvas.height - image.height * ratio) / 2;
        const dWidth = image.width * ratio;
        const dHeight = image.height * ratio;

        this.#context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
}
