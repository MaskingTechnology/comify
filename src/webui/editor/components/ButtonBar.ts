
import ModelEvents from '../definitions/ModelEvents';
import Button from '../elements/Button';
import Group from '../elements/Group';
import EventManager from '../utils/EventManager';

export default class ButtonBar extends Group
{
    constructor()
    {
        super();

        this.#initButtons();
    }

    #initButtons(): void
    {
        const selectImage = new Button();
        selectImage.setPosition(40, 480);
        selectImage.releaseHandler = this.#selectImage.bind(this);

        const addBubble = new Button();
        addBubble.setPosition(90, 480);
        addBubble.releaseHandler = this.#addSpeechBubble.bind(this);

        this.addElement(selectImage);
        this.addElement(addBubble);
    }

    #selectImage(): void
    {
        EventManager.dispatch(ModelEvents.SELECT_IMAGE);
    }

    #addSpeechBubble(): void
    {
        EventManager.dispatch(ModelEvents.ADD_BUBBLE);
    }
}
