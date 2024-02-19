
import Element from '../elements/Element';
import Geometry, { type Direction, type Point, type Vector } from '../utils/Geometry';

const BUBBLE_COLOR = '#dddddd';

export default abstract class Bubble extends Element
{
    #pointer: Vector = { magnitude: 0, angle: 0 };

    get pointer() { return this.#pointer; }

    get pointerPosition(): Point
    {
        const area = this.area;
        const pointer = this.pointer;
        const center = Geometry.getCenterPoint(area);

        return Geometry.rotateAndTranslatePoint({ x: 0, y: pointer.magnitude }, center, pointer.angle);
    }

    get pointerDirection(): Direction
    {
        return Geometry.getPointDirection(this.pointerPosition, this.area);
    }

    setPointer(magnitude: number, angle: number): void
    {
        this.#pointer.magnitude = magnitude;
        this.#pointer.angle = angle;

        this.makeDirty();
    }

    renderElement(context: CanvasRenderingContext2D): void
    {
        context.fillStyle = BUBBLE_COLOR;

        this.renderPointer(context);
        this.renderBubble(context);
    }

    abstract renderPointer(context: CanvasRenderingContext2D): void;

    abstract renderBubble(context: CanvasRenderingContext2D): void;
}
