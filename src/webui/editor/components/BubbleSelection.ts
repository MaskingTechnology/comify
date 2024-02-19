
import ModelEvents from '../definitions/ModelEvents';
import Button from '../elements/Button';
import Group from '../elements/Group';
import Bubble from '../model/Bubble';
import EventManager from '../utils/EventManager';

export default class BubbleSelection extends Group
{
    #bubble: Bubble;

    #deleteButton: Button;
    #editButton: Button;
    #resizeButton: Button;
    #pointerButton: Button;

    constructor(bubble: Bubble)
    {
        super();

        this.#bubble = bubble;

        this.#deleteButton = new Button();
        this.#deleteButton.releaseHandler = this.#deleteBubble.bind(this);

        this.#editButton = new Button();
        this.#editButton.releaseHandler = this.#editBubble.bind(this);

        this.#resizeButton = new Button();
        this.#resizeButton.dragHandler = this.#resizeBubble.bind(this);

        this.#pointerButton = new Button();
        this.#pointerButton.dragHandler = this.#movePointer.bind(this);

        this.setPosition(bubble.area.x, bubble.area.y);
        this.setSize(bubble.area.width, bubble.area.height);
        this.dragHandler = this.#dragBubble.bind(this);

        this.#updateButtonPositions();

        this.addElement(this.#deleteButton);
        this.addElement(this.#editButton);
        this.addElement(this.#resizeButton);
        this.addElement(this.#pointerButton);
    }

    #dragBubble(deltaX: number, deltaY: number): void
    {
        this.move(deltaX, deltaY);
        this.#bubble.move(deltaX, deltaY);
    }

    #resizeBubble(deltaX: number, deltaY: number): void
    {
        this.resize(deltaX, deltaY);
        this.#bubble.resize(deltaX, deltaY);
        this.#updateButtonPositions();
    }

    #movePointer(deltaX: number, deltaY: number): void
    {
        this.#bubble.movePointer(deltaX, deltaY);
        this.#updateButtonPositions();
    }

    #editBubble(): void
    {
        EventManager.dispatch(ModelEvents.EDIT_BUBBLE, this.#bubble);
    }

    #deleteBubble(): void
    {
        EventManager.dispatch(ModelEvents.DELETE_BUBBLE, this.#bubble);
    }

    #updateButtonPositions(): void
    {
        this.#deleteButton.setPosition(
            this.area.x - (this.#deleteButton.area.width / 2),
            this.area.y - (this.#deleteButton.area.height / 2)
        );

        this.#editButton.setPosition(
            this.area.x + this.area.width - (this.#editButton.area.width / 2),
            this.area.y - (this.#editButton.area.height / 2)
        );

        this.#resizeButton.setPosition(
            this.area.x + this.area.width - (this.#resizeButton.area.width / 2),
            this.area.y + this.area.height - (this.#resizeButton.area.height / 2)
        );

        this.#pointerButton.setPosition(
            this.#bubble.pointer.x - (this.#pointerButton.area.width / 2),
            this.#bubble.pointer.y - (this.#pointerButton.area.height / 2)
        );
    }
}
