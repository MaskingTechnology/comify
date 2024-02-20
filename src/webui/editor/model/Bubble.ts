
import Element from '../elements/Element';
import { type Point } from '../utils/Geometry';

export default abstract class Bubble extends Element
{
    #pointer: Point = { x: 0, y: 0 };

    get pointer() { return this.#pointer; }

    setPointer(x: number, y: number): void
    {
        this.#pointer.x = x;
        this.#pointer.y = y;

        this.makeDirty();
    }

    move(deltaX: number, deltaY: number): void
    {
        super.move(deltaX, deltaY);
        this.movePointer(deltaX, deltaY);
    }

    movePointer(deltaX: number, deltaY: number): void
    {
        this.#pointer.x += deltaX;
        this.#pointer.y += deltaY;

        this.makeDirty();
    }
}
