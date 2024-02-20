
import Colors from '../definitions/Colors';
import Geometry, { Area, Point } from '../utils/Geometry';
import Bubble from './Bubble';

type Shape = {
    area: Area;
    baseLeft: Point;
    baseRight: Point;
    pointer: Point;
};

const BUBBLE_RADIUS = 10;
const BUBBLE_POINTER_RATIO = 0.3;

export default class SpeechBubble extends Bubble
{
    renderElement(context: CanvasRenderingContext2D): void
    {
        const shape = this.#createShape();
        const shadowShape = this.#createShadowShape(shape);

        this.#renderShape(shadowShape, Colors.SHADOW, context);
        this.#renderShape(shape, Colors.BUBBLE, context);
    }

    #createShape(): Shape
    {
        const area = this.area;
        const center = this.center;
        const angle = Geometry.calculateAngle(center, this.pointer);

        const pointer = this.pointer;
        const bubbleSize = (area.width + area.height) / 2;

        const baseSize = Math.round(bubbleSize * BUBBLE_POINTER_RATIO);
        const baseOffset = Math.round(baseSize / 2);
        const baseLeft = Geometry.rotateAndTranslatePoint({ x: -baseOffset, y: 0 }, center, angle);
        const baseRight = Geometry.rotateAndTranslatePoint({ x: baseOffset, y: 0 }, center, angle);

        return { area, baseLeft, baseRight, pointer };
    }

    #createShadowShape(shape: Shape): Shape
    {
        const area = { ...shape.area };
        area.x += 5;
        area.y += 5;

        const baseLeft = { ...shape.baseLeft };
        baseLeft.x += 5;
        baseLeft.y += 5;

        const baseRight = { ...shape.baseRight };
        baseRight.x += 5;
        baseRight.y += 5;

        const pointer = { ...shape.pointer };

        return { area, baseLeft, baseRight, pointer };
    }

    #renderShape(shape: Shape, color: string, context: CanvasRenderingContext2D): void
    {
        context.fillStyle = color;

        context.beginPath();
        context.roundRect(shape.area.x, shape.area.y, shape.area.width, shape.area.height, BUBBLE_RADIUS);
        context.moveTo(Math.round(shape.baseLeft.x), Math.round(shape.baseLeft.y));
        context.lineTo(Math.round(shape.baseRight.x), Math.round(shape.baseRight.y));
        context.lineTo(Math.round(shape.pointer.x), Math.round(shape.pointer.y));
        context.closePath();
        context.fill();
    }
}
