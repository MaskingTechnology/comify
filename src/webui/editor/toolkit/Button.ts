
import Styling from '../definitions/Styling';
import ImageElement from '../elements/ImageElement';

export default class Button extends ImageElement
{
    render(context: CanvasRenderingContext2D): void
    {
        context.shadowColor = Styling.SHADOW_COLOR;
        context.shadowBlur = Styling.SHADOW_BLUR;

        super.render(context);

        context.shadowColor = 'transparent';
        context.shadowBlur = 0;
    }
}