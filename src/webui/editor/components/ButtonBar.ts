
import Styling from '../definitions/Styling';
import Button from '../elements/Button';
import Group from '../elements/Group';

type Handler = {
    selectImage: () => void;
    addSpeechBubble: () => void;
};

export default class ButtonBar extends Group
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
        const selectImage = new Button();
        selectImage.loadImage(Styling.ICON_SELECT_IMAGE);
        selectImage.setSize(45, 35);
        selectImage.setPosition(40, 480);
        selectImage.releaseHandler = this.#handler.selectImage;

        const addBubble = new Button();
        addBubble.loadImage(Styling.ICON_ADD_SPEECH_BUBBLE);
        addBubble.setSize(45, 35);
        addBubble.setPosition(110, 480);
        addBubble.releaseHandler = this.#handler.addSpeechBubble;

        this.addElement(selectImage);
        this.addElement(addBubble);
    }
}
