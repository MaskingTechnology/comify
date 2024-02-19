
import ModelEvents from '../definitions/ModelEvents';
import Button from '../elements/Button';
import Group from '../elements/Group';
import Bubble from '../model/Bubble';
import EventManager from '../utils/EventManager';

export default class BubbleSelection extends Group
{
    #bubble: Bubble;

    constructor(bubble: Bubble)
    {
        super();

        this.#bubble = bubble;

        this.setPosition(bubble.area.x, bubble.area.y);
        this.setSize(bubble.area.width, bubble.area.height);
        this.dragHandler = this.#dragBubble;

        this.#addButtons();
    }

    renderElement(context: CanvasRenderingContext2D): void
    {
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.strokeRect(this.area.x, this.area.y, this.area.width, this.area.height);
    }

    #addButtons(): void
    {
        const deleteButton = new Button();
        deleteButton.releaseHandler = this.#deleteBubble;
        deleteButton.setPosition(
            this.area.x - (deleteButton.area.width / 2),
            this.area.y - (deleteButton.area.height / 2)
        );

        const editButton = new Button();
        editButton.releaseHandler = this.#editBubble;
        editButton.setPosition(
            this.area.x + (this.area.width / 2) - (editButton.area.width / 2),
            this.area.y - (editButton.area.height / 2)
        );

        const resizeButton = new Button();
        resizeButton.dragHandler = this.#resizeBubble;
        resizeButton.setPosition(
            this.area.x + this.area.width - (resizeButton.area.width / 2),
            this.area.y + this.area.height - (resizeButton.area.height / 2)
        );

        this.addElement(deleteButton);
        this.addElement(editButton);
        this.addElement(resizeButton);
    }

    #dragBubble(x: number, y: number): void
    {
        this.move(x, y);
        this.#bubble.move(x, y);
    }

    #resizeBubble(x: number, y: number): void
    {
        console.log('Resize bubble');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    #editBubble(x: number, y: number): void
    {
        EventManager.dispatch(ModelEvents.EDIT_SPEECH_BUBBLE, this.#bubble);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    #deleteBubble(x: number, y: number): void
    {
        EventManager.dispatch(ModelEvents.DELETE_SPEECH_BUBBLE, this.#bubble);
    }
}
