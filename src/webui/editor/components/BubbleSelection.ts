
// import ModelEvents from '../definitions/ModelEvents';
import Button from '../elements/Button';
import Group from '../elements/Group';
import Bubble from '../model/Bubble';
// import EventManager from '../utils/EventManager';

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
        this.#editButton = new Button();
        this.#resizeButton = new Button();
        this.#pointerButton = new Button();

        this.setPosition(bubble.area.x, bubble.area.y);
        this.setSize(bubble.area.width, bubble.area.height);
        this.dragHandler = this.#dragBubble.bind(this);

        this.#initButtons();

        this.addElement(this.#deleteButton);
        this.addElement(this.#editButton);
        this.addElement(this.#resizeButton);
        this.addElement(this.#pointerButton);
    }

    #initButtons(): void
    {
        this.#deleteButton.releaseHandler = this.#deleteBubble.bind(this);
        this.#deleteButton.setPosition(
            this.area.x - (this.#deleteButton.area.width / 2),
            this.area.y - (this.#deleteButton.area.height / 2)
        );

        this.#editButton.releaseHandler = this.#editBubble.bind(this);
        this.#editButton.setPosition(
            this.area.x + this.area.width - (this.#editButton.area.width / 2),
            this.area.y - (this.#editButton.area.height / 2)
        );

        this.#resizeButton.dragHandler = this.#resizeBubble.bind(this);
        this.#resizeButton.setPosition(
            this.area.x + this.area.width - (this.#resizeButton.area.width / 2),
            this.area.y + this.area.height - (this.#resizeButton.area.height / 2)
        );

        this.#pointerButton.dragHandler = this.#movePointer.bind(this);
        this.#pointerButton.setPosition(
            this.#bubble.pointerPosition.x - (this.#pointerButton.area.width / 2),
            this.#bubble.pointerPosition.y - (this.#pointerButton.area.height / 2)
        );
    }

    #dragBubble(deltaX: number, deltaY: number): void
    {
        this.move(deltaX, deltaY);
        this.#bubble.move(deltaX, deltaY);
    }

    #resizeBubble(deltaX: number, deltaY: number): void
    {
        this.area.width += deltaX;
        this.area.height += deltaY;

        this.#editButton.move(deltaX, 0);
        this.#resizeButton.move(deltaX, deltaY);

        const pointerPosition = this.#bubble.pointerPosition;
        const pointerX = pointerPosition.x - (this.#pointerButton.area.width / 2);
        const pointerY = pointerPosition.y - (this.#pointerButton.area.height / 2);
        this.#pointerButton.setPosition(pointerX, pointerY);

        this.#bubble.resize(deltaX, deltaY);
    }

    #editBubble(): void
    {
        console.log('Edit bubble');
        // EventManager.dispatch(ModelEvents.EDIT_BUBBLE, this.#bubble);
    }

    #deleteBubble(): void
    {
        console.log('Delete bubble');
        // EventManager.dispatch(ModelEvents.DELETE_BUBBLE, this.#bubble);
    }

    #movePointer(): void
    {
        console.log('Move pointer');
    }
}
