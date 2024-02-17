
import Model from './Model';

export default class Renderer
{
    #context: CanvasRenderingContext2D;
    #model: Model;
    #running: boolean;

    constructor(canvas: HTMLCanvasElement, model: Model)
    {
        this.#context = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.#model = model;
        this.#running = false;
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
            this.#model.render(this.#context);
        }

        window.requestAnimationFrame(() =>
        {
            this.#render();
        });
    }
}
