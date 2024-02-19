
import InputEvents from '../definitions/InputEvents';
import EventManager from './EventManager';
import { Point } from './Geometry';

export default class InputManager
{
    #canvas: HTMLCanvasElement;
    #pressed: boolean;

    #pressHandler = this.#handlePress.bind(this);
    #moveHandler = this.#handleMove.bind(this);
    #releaseHandler = this.#handleRelease.bind(this);
    #dragoverHandler = this.#handleDragOver.bind(this);
    #dropHandler = this.#handleDrop.bind(this);

    constructor(canvas: HTMLCanvasElement)
    {
        this.#canvas = canvas;
        this.#pressed = false;
    }

    bind(): void
    {
        this.#canvas.addEventListener('mousedown', this.#pressHandler);
        this.#canvas.addEventListener('mousemove', this.#moveHandler);
        this.#canvas.addEventListener('mouseup', this.#releaseHandler);
        this.#canvas.addEventListener('dragover', this.#dragoverHandler);
        this.#canvas.addEventListener('drop', this.#dropHandler);
    }

    unbind(): void
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

        const { x, y } = this.#extractPosition(event);

        EventManager.dispatch(InputEvents.PRESSED, x, y);
    }

    #handleMove(event: MouseEvent): void
    {
        event.preventDefault();

        if (this.#pressed === false)
        {
            return;
        }

        const { x, y } = this.#extractPosition(event);

        EventManager.dispatch(InputEvents.DRAGGED, x, y);
    }

    #handleRelease(event: MouseEvent): void
    {
        event.preventDefault();

        this.#pressed = false;

        const { x, y } = this.#extractPosition(event);

        EventManager.dispatch(InputEvents.RELEASED, x, y);
    }

    #handleDragOver(event: DragEvent): void
    {
        event.preventDefault();
    }

    #handleDrop(event: DragEvent): void
    {
        const files = event.dataTransfer?.files;

        EventManager.dispatch(InputEvents.DROPPED, files);
    }

    #extractPosition(event: MouseEvent): Point
    {
        const target = event.target as HTMLCanvasElement;
        const rect = target.getBoundingClientRect();

        const canvasX = event.clientX - rect.left;
        const canvasY = event.clientY - rect.top;

        const modelX = canvasX * (target.width / rect.width);
        const modelY = canvasY * (target.height / rect.height);

        return { x: modelX, y: modelY };
    }
}
