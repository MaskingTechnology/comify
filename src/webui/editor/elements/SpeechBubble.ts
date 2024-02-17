
import Geometry, { type Vector } from '../utils/Geometry';
import Element from './Element';

const BUBBLE_COLOR = '#dddddd';
const BUBBLE_RADIUS = 10;
const BUBBLE_POINTER_RATIO = 0.2;

export default class SpeechBubble extends Element
{
    #pointer: Vector = { magnitude: 0, angle: 0 };

    setPointer(magnitude: number, angle: number): void
    {
        this.#pointer.magnitude = magnitude;
        this.#pointer.angle = angle;

        this.makeDirty();
    }

    renderElement(context: CanvasRenderingContext2D): void
    {
        context.fillStyle = BUBBLE_COLOR;

        this.#renderPointer(context);
        this.#renderBubble(context);
    }

    #renderPointer(context: CanvasRenderingContext2D): void
    {
        const area = this.area;
        const pointer = this.#pointer;
        const center = Geometry.getCenterPoint(area);

        const pointerEnd = Geometry.rotateAndTranslatePoint({ x: 0, y: pointer.magnitude }, center, pointer.angle);
        const pointerDirection = Geometry.getPointDirection(pointerEnd, area);

        const bubbleSize = pointerDirection === 'vertical' ? area.width : area.height;

        const baseSize = bubbleSize * BUBBLE_POINTER_RATIO;
        const baseOffset = baseSize / 2;
        const baseLeft = Geometry.rotateAndTranslatePoint({ x: -baseOffset, y: 0 }, center, pointer.angle);
        const baseRight = Geometry.rotateAndTranslatePoint({ x: baseOffset, y: 0 }, center, pointer.angle);

        context.beginPath();
        context.moveTo(baseLeft.x, baseLeft.y);
        context.lineTo(baseRight.x, baseRight.y);
        context.lineTo(pointerEnd.x, pointerEnd.y);
        context.closePath();
        context.fill();
    }

    #renderBubble(context: CanvasRenderingContext2D): void
    {
        const area = this.area;

        context.beginPath();
        context.roundRect(area.x, area.y, area.width, area.height, BUBBLE_RADIUS);
        context.fill();
    }
}
