
type Position = { x: number, y: number; deltaX: number, deltaY: number; };

type Handler = {
    press: (x: number, y: number) => void;
    drag: (deltaX: number, deltaY: number) => void;
    release: (x: number, y: number) => void;
    drop: (files?: FileList) => void;
};

type InputEvent = MouseEvent | TouchEvent;
type InputPosition = { clientX: number, clientY: number; };

const pressEventName = 'ontouchstart' in globalThis ? 'touchstart' : 'mousedown';
const moveEventName = 'ontouchmove' in globalThis ? 'touchmove' : 'mousemove';
const releaseEventName = 'ontouchend' in globalThis ? 'touchend' : 'mouseup';
const dragOverEventName = 'dragover';
const dropEventName = 'drop';

export default class InputManager
{
    readonly #canvas: HTMLCanvasElement;
    readonly #handler: Handler;

    #currentPosition: Position;
    #pressed: boolean;

    readonly #pressHandler = this.#handlePress.bind(this);
    readonly #moveHandler = this.#handleMove.bind(this);
    readonly #releaseHandler = this.#handleRelease.bind(this);
    readonly #dragOverHandler = this.#handleDragOver.bind(this);
    readonly #dropHandler = this.#handleDrop.bind(this);

    constructor(canvas: HTMLCanvasElement, handler: Handler)
    {
        this.#canvas = canvas;
        this.#handler = handler;

        this.#currentPosition = { x: 0, y: 0, deltaX: 0, deltaY: 0 };
        this.#pressed = false;
    }

    bind(): void
    {
        this.#canvas.addEventListener(pressEventName, this.#pressHandler);
        this.#canvas.addEventListener(moveEventName, this.#moveHandler);
        this.#canvas.addEventListener(releaseEventName, this.#releaseHandler);
        this.#canvas.addEventListener(dragOverEventName, this.#dragOverHandler);
        this.#canvas.addEventListener(dropEventName, this.#dropHandler);
    }

    unbind(): void
    {
        this.#canvas.removeEventListener(pressEventName, this.#pressHandler);
        this.#canvas.removeEventListener(moveEventName, this.#moveHandler);
        this.#canvas.removeEventListener(releaseEventName, this.#releaseHandler);
        this.#canvas.removeEventListener(dragOverEventName, this.#dragOverHandler);
        this.#canvas.removeEventListener(dropEventName, this.#dropHandler);
    }

    #handlePress(event: InputEvent): void
    {
        event.preventDefault();

        this.#pressed = true;

        const { x, y } = this.#extractPosition(event);

        this.#handler.press(x, y);
    }

    #handleMove(event: InputEvent): void
    {
        event.preventDefault();

        if (this.#pressed === false)
        {
            return;
        }

        const { deltaX, deltaY } = this.#extractPosition(event);

        this.#handler.drag(deltaX, deltaY);
    }

    #handleRelease(event: InputEvent): void
    {
        event.preventDefault();

        this.#pressed = false;

        const { x, y } = this.#extractPosition(event);

        this.#handler.release(x, y);
    }

    #handleDragOver(event: DragEvent): void
    {
        event.preventDefault();
    }

    #handleDrop(event: DragEvent): void
    {
        event.preventDefault();

        const files = event.dataTransfer?.files;

        this.#handler.drop(files);
    }

    #extractPosition(event: InputEvent): Position
    {
        const target = event.target as HTMLCanvasElement;
        const rect = target.getBoundingClientRect();

        const input = this.#extractInputPosition(event);

        const canvasX = input.clientX - rect.left;
        const canvasY = input.clientY - rect.top;

        const x = canvasX * (target.width / rect.width);
        const y = canvasY * (target.height / rect.height);

        const deltaX = x - this.#currentPosition.x;
        const deltaY = y - this.#currentPosition.y;

        this.#currentPosition = { x, y, deltaX, deltaY };

        return this.#currentPosition;
    }

    #extractInputPosition(event: InputEvent): InputPosition
    {
        if (globalThis.TouchEvent !== undefined && event instanceof globalThis.TouchEvent)
        {
            const touch = event.touches[0];

            if (touch === undefined)
            {
                return { clientX: this.#currentPosition.x, clientY: this.#currentPosition.y };
            }

            return touch;
        }

        return event as MouseEvent;
    }
}
