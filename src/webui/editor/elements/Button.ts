
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
        const x = Math.round(this.area.x);
        const y = Math.round(this.area.y);
        const width = Math.round(this.area.width);
        const height = Math.round(this.area.height);

        context.fillStyle = 'blue';
        context.fillRect(x, y, width, height);
    }
}
