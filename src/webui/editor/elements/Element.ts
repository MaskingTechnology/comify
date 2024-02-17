
import Geometry, { type Area } from '../utils/Geometry';

export default abstract class Element
{
    #area: Area = { x: 0, y: 0, width: 0, height: 0 };
    #dirty = true;

    pressHandler?: () => void;
    dragHandler?: () => void;
    releaseHandler?: () => void;

    get area() { return this.#area; }

    get dirty() { return this.#dirty; }

    get clean() { return !this.#dirty; }

    makeDirty() { this.#dirty = true; }

    makeClean() { this.#dirty = false; }

    setPosition(x: number, y: number): void
    {
        this.#area.x = x;
        this.#area.y = y;

        this.makeDirty();
    }

    setSize(width: number, height: number): void
    {
        this.#area.width = width;
        this.#area.height = height;

        this.makeDirty();
    }

    render(context: CanvasRenderingContext2D)
    {
        this.renderElement(context);
        this.makeClean();
    }

    hit(x: number, y: number): boolean
    {
        return Geometry.pointInArea({ x, y }, this.#area);
    }

    press(): void
    {
        this.#execute(this.pressHandler);
    }

    drag(): void
    {
        this.#execute(this.dragHandler);
    }

    release(): void
    {
        this.#execute(this.releaseHandler);
    }

    #execute(handler?: () => void): void
    {
        if (handler === undefined)
        {
            return;
        }

        handler();
    }

    abstract renderElement(context: CanvasRenderingContext2D): void;
}
