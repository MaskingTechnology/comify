
import Styling from '../definitions/Styling';
import Group from '../elements/Group';
import ImageElement from '../elements/ImageElement';

type Handler = {
    selectImage: () => void;
    addSpeechBubble: () => void;
};

export default class Buttons extends Group
{
    #handler: Handler;

    constructor(handler: Handler)
    {
        super();

        this.#handler = handler;

        this.#initButtons();
    }

    render(context: CanvasRenderingContext2D): void
    {
        context.shadowColor = Styling.SHADOW_COLOR;
        context.shadowBlur = Styling.SHADOW_BLUR;

        super.render(context);

        context.shadowColor = 'transparent';
        context.shadowBlur = 0;
    }

    #initButtons(): void
    {
        const addBubble = new ImageElement();
        addBubble.loadImage(Styling.ICON_ADD_SPEECH_BUBBLE);
        addBubble.setSize(60, 70);
        addBubble.setPosition(880, 20);
        addBubble.releaseHandler = this.#handler.addSpeechBubble;

        const selectImage = new ImageElement();
        selectImage.loadImage(Styling.ICON_SELECT_IMAGE);
        selectImage.setSize(70, 60);
        selectImage.setPosition(20, 460);
        selectImage.releaseHandler = this.#handler.selectImage;

        this.addElement(selectImage);
        this.addElement(addBubble);
    }
}
