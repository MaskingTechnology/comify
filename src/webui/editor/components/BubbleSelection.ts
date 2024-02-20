
import Button from '../elements/Button';
import Group from '../elements/Group';
import Bubble from '../model/Bubble';

type Handler = {
    editBubble: (bubble: Bubble) => void;
    deleteBubble: (bubble: Bubble) => void;
};

export default class BubbleSelection extends Group
{
    #bubble?: Bubble;
    #handler: Handler;

    #deleteButton: Button;
    #editButton: Button;
    #resizeButton: Button;
    #pointerButton: Button;

    constructor(handler: Handler)
    {
        super();

        this.#handler = handler;

        this.#deleteButton = new Button();
        this.#deleteButton.releaseHandler = this.#deleteBubble.bind(this);

        this.#editButton = new Button();
        this.#editButton.releaseHandler = this.#editBubble.bind(this);

        this.#resizeButton = new Button();
        this.#resizeButton.dragHandler = this.#resizeBubble.bind(this);

        this.#pointerButton = new Button();
        this.#pointerButton.dragHandler = this.#movePointer.bind(this);

        this.addElement(this.#deleteButton);
        this.addElement(this.#editButton);
        this.addElement(this.#resizeButton);
        this.addElement(this.#pointerButton);
    }

    get bubble() { return this.#bubble as Bubble; }

    set bubble(bubble: Bubble)
    {
        this.#bubble = bubble;

        this.setPosition(bubble.area.x, bubble.area.y);
        this.setSize(bubble.area.width, bubble.area.height);

        this.dragHandler = this.#dragBubble.bind(this);
        this.#bubble.dragHandler = this.#dragBubble.bind(this);

        this.#updateButtonPositions();
    }

    #dragBubble(deltaX: number, deltaY: number): void
    {
        this.move(deltaX, deltaY);
        this.#bubble?.move(deltaX, deltaY);
    }

    #resizeBubble(deltaX: number, deltaY: number): void
    {
        this.resize(deltaX, deltaY);
        this.bubble.resize(deltaX, deltaY);
        this.#updateButtonPositions();
    }

    #movePointer(deltaX: number, deltaY: number): void
    {
        this.bubble.movePointer(deltaX, deltaY);
        this.#updateButtonPositions();
    }

    #editBubble(): void
    {
        this.#handler.editBubble(this.bubble);
    }

    #deleteBubble(): void
    {
        this.#handler.deleteBubble(this.bubble);
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
            this.bubble.pointer.x - (this.#pointerButton.area.width / 2),
            this.bubble.pointer.y - (this.#pointerButton.area.height / 2)
        );
    }
}
