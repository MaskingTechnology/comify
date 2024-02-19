
import Worksheet from './Worksheet';

export default class Renderer
{
    #context: CanvasRenderingContext2D;
    #worksheet: Worksheet;
    #running: boolean;

    constructor(canvas: HTMLCanvasElement, worksheet: Worksheet)
    {
        this.#context = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.#worksheet = worksheet;
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

        if (this.#worksheet.dirty)
        {
            this.#worksheet.render(this.#context);
        }

        window.requestAnimationFrame(() =>
        {
            this.#render();
        });
    }
}
