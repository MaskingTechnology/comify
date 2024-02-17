
import Element from './Element';

export default class Button extends Element
{
    constructor()
    {
        super();

        this.setSize(30, 30);
    }

    renderElement(context: CanvasRenderingContext2D): void
    {
        context.fillStyle = 'blue';
        context.fillRect(this.area.x, this.area.y, this.area.width, this.area.height);
    }
}
