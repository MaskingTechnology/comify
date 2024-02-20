
import Styling from '../definitions/Styling';
import Geometry, { Area, Point } from '../utils/Geometry';
import TextProcessor from '../utils/TextProcessor';
import Bubble from './Bubble';

type Shape = {
    balloon: Area;
    baseLeft: Point;
    baseRight: Point;
    pointer: Point;
};

export default class SpeechBubble extends Bubble
{
    renderElement(context: CanvasRenderingContext2D): void
    {
        const shape = this.#createShape();

        if (Styling.BUBBLE_SHADOW_ENABLED)
        {
            const shadowShape = this.#createShadowShape(shape);

            this.#renderShape(shadowShape, Styling.SHADOW_COLOR, context);
        }

        this.#renderShape(shape, Styling.BUBBLE_COLOR, context);
        this.#renderText(context);
    }

    #createShape(): Shape
    {
        const balloon = {
            x: Math.round(this.area.x),
            y: Math.round(this.area.y),
            width: Math.round(this.area.width),
            height: Math.round(this.area.height),
        };

        const center = this.center;
        const angle = Geometry.calculateAngle(center, this.pointer);

        const pointer = this.pointer;
        const bubbleSize = (balloon.width + balloon.height) / 2;

        const baseSize = Math.round(bubbleSize * Styling.BUBBLE_POINTER_RATIO);
        const baseOffset = Math.round(baseSize / 2);
        const baseLeft = Geometry.rotateAndTranslatePoint({ x: -baseOffset, y: 0 }, center, angle);
        const baseRight = Geometry.rotateAndTranslatePoint({ x: baseOffset, y: 0 }, center, angle);

        baseLeft.x = Math.round(baseLeft.x);
        baseLeft.y = Math.round(baseLeft.y);
        baseRight.x = Math.round(baseRight.x);
        baseRight.y = Math.round(baseRight.y);

        return { balloon, baseLeft, baseRight, pointer };
    }

    #createShadowShape(shape: Shape): Shape
    {
        const offset = { x: 0, y: Styling.BUBBLE_SHADOW_MAGNITUDE };
        const { x: offsetX, y: offsetY } = Geometry.rotatePoint(offset, Styling.BUBBLE_SHADOW_ANGLE);

        const balloon = { ...shape.balloon };
        balloon.x += offsetX;
        balloon.y += offsetY;

        const baseLeft = { ...shape.baseLeft };
        baseLeft.x += offsetX;
        baseLeft.y += offsetY;

        const baseRight = { ...shape.baseRight };
        baseRight.x += offsetX;
        baseRight.y += offsetY;

        const pointer = shape.pointer;

        return { balloon, baseLeft, baseRight, pointer };
    }

    #renderShape(shape: Shape, color: string, context: CanvasRenderingContext2D): void
    {
        context.fillStyle = color;

        context.beginPath();

        context.moveTo(shape.baseLeft.x, shape.baseLeft.y);
        context.lineTo(shape.baseRight.x, shape.baseRight.y);
        context.lineTo(shape.pointer.x, shape.pointer.y);

        context.roundRect(
            shape.balloon.x,
            shape.balloon.y,
            shape.balloon.width,
            shape.balloon.height,
            Styling.BUBBLE_RADIUS
        );

        context.closePath();
        context.fill();
    }

    #renderText(context: CanvasRenderingContext2D): void
    {
        context.textAlign = 'center';
        context.textBaseline = 'top';
        context.fillStyle = Styling.BUBBLE_TEXT_COLOR;
        context.font = Styling.BUBBLE_TEXT_FONT;

        const textHeight = context.measureText('M').width;
        const lineHeight = textHeight * Styling.BUBBLE_LINE_HEIGHT_RATIO;
        const lineSpacing = lineHeight - textHeight;

        const textArea = {
            x: this.area.x,
            y: this.area.y,
            width: this.area.width * Styling.BUBBLE_TEXT_AREA_RATIO,
            height: this.area.height * Styling.BUBBLE_TEXT_AREA_RATIO
        };

        const lines = TextProcessor.finInArea(this.text, lineHeight, textArea, context);
        const totalHeight = textHeight * lines.length + (lines.length - 1) * lineSpacing;

        const x = Math.round(this.center.x);
        const y = Math.round(this.center.y - totalHeight / 2);

        lines.forEach((line, index) =>
        {
            context.fillText(line, x, y + lineHeight * index);
        });
    }
}
