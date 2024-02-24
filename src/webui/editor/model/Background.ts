
import Styling from '../definitions/Styling';
import Image from '../elements/ImageElement';

export default class Background extends Image
{
    constructor()
    {
        super();

        this.setMode('fill');
        this.loadImage(Styling.BACKGROUND_IMAGE);
    }

    renderElement(context: CanvasRenderingContext2D): void
    {
        const canvas = context.canvas;
        this.area.width = canvas.width;
        this.area.height = canvas.height;

        super.renderElement(context);
    }
}
