
import Geometry, { type Area } from '../utils/Geometry';

type ActionHandler = (x: number, y: number) => void;

export default abstract class Element
{
    #area: Area = { x: 0, y: 0, width: 0, height: 0 };
    #dirty = true;

    pressHandler?: ActionHandler;
    dragHandler?: ActionHandler;
    releaseHandler?: ActionHandler;

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

    move(x: number, y: number): void
    {
        this.setPosition(this.#area.x + x, this.#area.y + y);
    }

    resize(width: number, height: number): void
    {
        this.setSize(this.#area.width + width, this.#area.height + height);
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

    press(x: number, y: number): boolean
    {
        return this.#execute(x, y, this.pressHandler);
    }

    drag(x: number, y: number): boolean
    {
        return this.#execute(x, y, this.dragHandler);
    }

    release(x: number, y: number): boolean
    {
        return this.#execute(x, y, this.releaseHandler);
    }

    #execute(x: number, y: number, handler?: ActionHandler): boolean
    {
        if (this.hit(x, y) === false)
        {
            return false;
        }

        if (handler !== undefined)
        {
            handler(x, y);
        }

        return true;
    }

    abstract renderElement(context: CanvasRenderingContext2D): void;
}
