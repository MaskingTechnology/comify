
import Styling from '../definitions/Styling';
import Group from '../elements/Group';
import ImageElement from '../elements/ImageElement';
import Bubble from '../model/Bubble';

type Handler = {
    editBubble: (bubble: Bubble) => void;
    deleteBubble: (bubble: Bubble) => void;
};

const BUTTON_SIZE = 35;

export default class BubbleSelection extends Group
{
    #bubble?: Bubble;
    #handler: Handler;

    #deleteImageElement: ImageElement;
    #editImageElement: ImageElement;
    #resizeImageElement: ImageElement;
    #pointerImageElement: ImageElement;

    constructor(handler: Handler)
    {
        super();

        this.#handler = handler;

        this.#deleteImageElement = new ImageElement();
        this.#deleteImageElement.loadImage(Styling.ICON_DELETE);
        this.#deleteImageElement.setSize(BUTTON_SIZE, BUTTON_SIZE);
        this.#deleteImageElement.releaseHandler = this.#deleteBubble.bind(this);

        this.#editImageElement = new ImageElement();
        this.#editImageElement.loadImage(Styling.ICON_EDIT);
        this.#editImageElement.setSize(BUTTON_SIZE, BUTTON_SIZE);
        this.#editImageElement.releaseHandler = this.#editBubble.bind(this);

        this.#resizeImageElement = new ImageElement();
        this.#resizeImageElement.loadImage(Styling.ICON_RESIZE);
        this.#resizeImageElement.setSize(BUTTON_SIZE, BUTTON_SIZE);
        this.#resizeImageElement.dragHandler = this.#resizeBubble.bind(this);

        this.#pointerImageElement = new ImageElement();
        this.#pointerImageElement.loadImage(Styling.ICON_MOVE);
        this.#pointerImageElement.setSize(BUTTON_SIZE, BUTTON_SIZE);
        this.#pointerImageElement.dragHandler = this.#movePointer.bind(this);

        this.addElement(this.#deleteImageElement);
        this.addElement(this.#editImageElement);
        this.addElement(this.#resizeImageElement);
        this.addElement(this.#pointerImageElement);
    }

    get bubble() { return this.#bubble as Bubble; }

    set bubble(bubble: Bubble)
    {
        this.#bubble = bubble;

        this.setPosition(bubble.area.x, bubble.area.y);
        this.setSize(bubble.area.width, bubble.area.height);

        this.dragHandler = this.#dragBubble.bind(this);
        this.#bubble.dragHandler = this.#dragBubble.bind(this);

        this.#updateImageElementPositions();
    }

    render(context: CanvasRenderingContext2D): void
    {
        context.shadowColor = Styling.SHADOW_COLOR;
        context.shadowBlur = Styling.SHADOW_BLUR;

        super.render(context);

        context.shadowColor = 'transparent';
        context.shadowBlur = 0;
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
        this.#updateImageElementPositions();
    }

    #movePointer(deltaX: number, deltaY: number): void
    {
        this.bubble.movePointer(deltaX, deltaY);
        this.#updateImageElementPositions();
    }

    #editBubble(): void
    {
        this.#handler.editBubble(this.bubble);
    }

    #deleteBubble(): void
    {
        this.#handler.deleteBubble(this.bubble);
    }

    #updateImageElementPositions(): void
    {
        this.#deleteImageElement.setPosition(
            this.area.x - (this.#deleteImageElement.area.width / 2),
            this.area.y - (this.#deleteImageElement.area.height / 2)
        );

        this.#editImageElement.setPosition(
            this.area.x + this.area.width - (this.#editImageElement.area.width / 2),
            this.area.y - (this.#editImageElement.area.height / 2)
        );

        this.#resizeImageElement.setPosition(
            this.area.x + this.area.width - (this.#resizeImageElement.area.width / 2),
            this.area.y + this.area.height - (this.#resizeImageElement.area.height / 2)
        );

        this.#pointerImageElement.setPosition(
            this.bubble.pointer.x - (this.#pointerImageElement.area.width / 2),
            this.bubble.pointer.y - (this.#pointerImageElement.area.height / 2)
        );
    }
}
