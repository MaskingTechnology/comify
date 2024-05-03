
import Geometry, { type Area } from '../utils/Geometry';

type PressHandler = (x: number, y: number) => void;
type DragHandler = (deltaX: number, deltaY: number) => void;
type ReleaseHandler = (x: number, y: number) => Promise<void>;

export default abstract class Element
{
    #area: Area = { x: 0, y: 0, width: 0, height: 0 };
    #dirty = true;

    pressHandler?: PressHandler;
    dragHandler?: DragHandler;
    releaseHandler?: ReleaseHandler;

    get area() { return this.#area; }

    get center() { return Geometry.getCenterPoint(this.#area); }

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
        this.area.x += x;
        this.area.y += y;

        this.makeDirty();
    }

    resize(width: number, height: number): void
    {
        this.area.width += width;
        this.area.height += height;

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

    press(x: number, y: number): void
    {
        if (this.pressHandler === undefined)
        {
            return;
        }

        this.pressHandler(x, y);
    }

    drag(deltaX: number, deltaY: number): void
    {
        if (this.dragHandler === undefined)
        {
            return;
        }

        this.dragHandler(deltaX, deltaY);
    }

    release(x: number, y: number): void
    {
        if (this.releaseHandler === undefined)
        {
            return;
        }

        this.releaseHandler(x, y);
    }

    abstract renderElement(context: CanvasRenderingContext2D): void;
}
