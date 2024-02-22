
import Workbench from './Workbench';

const CAPTURE_IMAGE_TYPE = 'image/jpeg';

export default class Renderer
{
    #context: CanvasRenderingContext2D;
    #workbench: Workbench;
    #running: boolean;

    constructor(canvas: HTMLCanvasElement, workbench: Workbench)
    {
        this.#context = canvas.getContext('2d') as CanvasRenderingContext2D;
        this.#workbench = workbench;
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

    capture(): string
    {
        this.stop();

        this.#workbench.render(this.#context);

        const image = this.#toDataURL();

        this.start();

        return image;
    }

    #render()
    {
        if (this.#running === false)
        {
            return;
        }

        if (this.#workbench.dirty)
        {
            this.#workbench.render(this.#context);
        }

        window.requestAnimationFrame(() =>
        {
            this.#render();
        });
    }

    #toDataURL(): string
    {
        return this.#context.canvas.toDataURL(CAPTURE_IMAGE_TYPE);
    }
}
