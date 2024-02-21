
import Styling from '../definitions/Styling';
import Image from '../elements/ImageElement';

export default class Background extends Image
{
    constructor()
    {
        super();

        this.setMode('fill');
    }

    renderElement(context: CanvasRenderingContext2D): void
    {
        const canvas = context.canvas;
        this.area.width = canvas.width;
        this.area.height = canvas.height;

        this.#renderBackground(context);

        this.image === undefined
            ? this.#renderInstructions(context)
            : super.renderElement(context);
    }

    #renderBackground(context: CanvasRenderingContext2D): void
    {
        context.fillStyle = Styling.BACKGROUND_COLOR;
        context.fillRect(0, 0, this.area.width, this.area.height);
    }

    #renderInstructions(context: CanvasRenderingContext2D): void
    {

    }
}
