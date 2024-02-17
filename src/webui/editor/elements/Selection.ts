
import Element from './Element';

export default class Selection extends Element
{
    renderElement(context: CanvasRenderingContext2D): void
    {
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.strokeRect(this.area.x, this.area.y, this.area.width, this.area.height);
    }
}
