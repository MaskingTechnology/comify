
import Styling from '../definitions/Styling';
import Group from '../elements/Group';
import Button from './Button';

type Handler = {
    selectImage: () => void;
    addSpeechBubble: () => void;
};

export default class MainActions extends Group
{
    #handler: Handler;

    constructor(handler: Handler)
    {
        super();

        this.#handler = handler;

        this.#initButtons();
    }

    #initButtons(): void
    {
        const addBubble = new Button();
        addBubble.loadImage(Styling.ICON_ADD_SPEECH_BUBBLE);
        addBubble.setSize(60, 70);
        addBubble.setPosition(880, 20);
        addBubble.releaseHandler = this.#handler.addSpeechBubble;

        const selectImage = new Button();
        selectImage.loadImage(Styling.ICON_SELECT_IMAGE);
        selectImage.setSize(70, 60);
        selectImage.setPosition(20, 460);
        selectImage.releaseHandler = this.#handler.selectImage;

        this.addElement(selectImage);
        this.addElement(addBubble);
    }
}
