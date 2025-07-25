
import Element from '../elements/Element';
import type { Point } from '../utils/Geometry';

export default abstract class Bubble extends Element
{
    #pointer: Point = { x: 0, y: 0 };
    #text = '';

    get pointer() { return this.#pointer; }

    get text() { return this.#text; }

    setPointer(x: number, y: number): void
    {
        this.#pointer.x = x;
        this.#pointer.y = y;

        this.makeDirty();
    }

    setText(text: string): void
    {
        this.#text = text;

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
