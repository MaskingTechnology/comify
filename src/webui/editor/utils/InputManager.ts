
type Position = { x: number, y: number; deltaX: number, deltaY: number; };

type Handler = {
    press: (x: number, y: number) => void;
    drag: (deltaX: number, deltaY: number) => void;
    release: (x: number, y: number) => void;
    drop: (files?: FileList) => void;
};

export default class InputManager
{
    #canvas: HTMLCanvasElement;
    #handler: Handler;

    #currentPosition: Position;
    #pressed: boolean;

    #pressHandler = this.#handlePress.bind(this);
    #moveHandler = this.#handleMove.bind(this);
    #releaseHandler = this.#handleRelease.bind(this);
    #dragoverHandler = this.#handleDragOver.bind(this);
    #dropHandler = this.#handleDrop.bind(this);

    constructor(canvas: HTMLCanvasElement, handler: Handler)
    {
        this.#canvas = canvas;
        this.#handler = handler;

        this.#currentPosition = { x: 0, y: 0, deltaX: 0, deltaY: 0 };
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

        this.#handler.press(x, y);
    }

    #handleMove(event: MouseEvent): void
    {
        event.preventDefault();

        if (this.#pressed === false)
        {
            return;
        }

        const { deltaX, deltaY } = this.#extractPosition(event);

        this.#handler.drag(deltaX, deltaY);
    }

    #handleRelease(event: MouseEvent): void
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

    #extractPosition(event: MouseEvent): Position
    {
        const target = event.target as HTMLCanvasElement;
        const rect = target.getBoundingClientRect();

        const canvasX = event.clientX - rect.left;
        const canvasY = event.clientY - rect.top;

        const x = canvasX * (target.width / rect.width);
        const y = canvasY * (target.height / rect.height);

        const deltaX = x - this.#currentPosition.x;
        const deltaY = y - this.#currentPosition.y;

        this.#currentPosition = { x, y, deltaX, deltaY };

        return this.#currentPosition;
    }
}
