
import Styling from '../definitions/Styling';
import Group from '../elements/Group';
import Button from './Button';

type Handler = {
    selectImage: () => Promise<void>;
    takePicture: () => Promise<void>;
    addSpeechBubble: () => Promise<void>;
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
        addBubble.setSize(70, 80);
        addBubble.setPosition(870, 20);
        addBubble.releaseHandler = this.#handler.addSpeechBubble;

        const selectImage = new Button();
        selectImage.loadImage(Styling.ICON_SELECT_IMAGE);
        selectImage.setSize(70, 60);
        selectImage.setPosition(20, 460);
        selectImage.releaseHandler = this.#handler.selectImage;

        const takePicture = new Button();
        takePicture.loadImage(Styling.ICON_TAKE_PICTURE);
        takePicture.setSize(70, 60);
        takePicture.setPosition(110, 460);
        takePicture.releaseHandler = this.#handler.takePicture;

        this.addElement(selectImage);
        this.addElement(takePicture);
        this.addElement(addBubble);
    }
}
