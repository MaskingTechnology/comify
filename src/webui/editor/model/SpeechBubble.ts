
import Geometry from '../utils/Geometry';
import Bubble from './Bubble';

const BUBBLE_RADIUS = 10;
const BUBBLE_POINTER_RATIO = 0.2;

export default class SpeechBubble extends Bubble
{
    renderPointer(context: CanvasRenderingContext2D): void
    {
        const area = this.area;
        const center = Geometry.getCenterPoint(area);

        const pointer = this.pointer;
        const pointerEnd = this.pointerPosition;
        const pointerDirection = this.pointerDirection;

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

    renderBubble(context: CanvasRenderingContext2D): void
    {
        const area = this.area;

        context.beginPath();
        context.roundRect(area.x, area.y, area.width, area.height, BUBBLE_RADIUS);
        context.fill();
    }
}
