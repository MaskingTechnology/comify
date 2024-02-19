
import Geometry from '../utils/Geometry';
import Bubble from './Bubble';

const BUBBLE_RADIUS = 10;
const BUBBLE_POINTER_RATIO = 0.3;

export default class SpeechBubble extends Bubble
{
    renderPointer(context: CanvasRenderingContext2D): void
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

        context.beginPath();
        context.moveTo(Math.round(baseLeft.x), Math.round(baseLeft.y));
        context.lineTo(Math.round(baseRight.x), Math.round(baseRight.y));
        context.lineTo(Math.round(pointer.x), Math.round(pointer.y));
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
