
import Model from './Model';

import Geometry from './Geometry';
import { type Bubble } from './Model';

const BUBBLE_COLOR = 'white';
const BUBBLE_RADIUS = 10;
const BUBBLE_POINTER_RATIO = 0.2;

export default class Renderer
{
    #canvas: HTMLCanvasElement;
    #context: CanvasRenderingContext2D;
    #model: Model;
    #running: boolean;

    constructor(canvas: HTMLCanvasElement, model: Model)
    {
        this.#canvas = canvas;
        this.#context = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.#model = model;
        this.#running = false;
    }

    start(): void
    {
        this.#running = true;
        this.#render();
    }

    stop(): void
    {
        this.#running = false;
    }

    #render()
    {
        if (this.#running === false)
        {
            return;
        }

        if (this.#model.dirty)
        {
            this.#model.makeClean();

            this.#renderModel();
        }

        window.requestAnimationFrame(() =>
        {
            this.#render();
        });
    }

    #renderModel(): void
    {
        this.#clearCanvas();

        if (this.#model.image !== undefined)
        {
            this.#renderImage(this.#model.image);
        }

        this.#renderSpeechBubbles(this.#model.speechBubbles);
    }

    #clearCanvas(): void
    {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    #renderImage(image: HTMLImageElement): void
    {
        const widthRatio = this.#canvas.width / image.width;
        const heightRatio = this.#canvas.height / image.height;
        // const ratio = Math.min(widthRatio, heightRatio); // Fit image inside canvas
        const ratio = Math.max(widthRatio, heightRatio); // Fill canvas with image

        const sx = 0;
        const sy = 0;
        const sWidth = image.width;
        const sHeight = image.height;

        const dx = (this.#canvas.width - image.width * ratio) / 2;
        const dy = (this.#canvas.height - image.height * ratio) / 2;
        const dWidth = image.width * ratio;
        const dHeight = image.height * ratio;

        this.#context.imageSmoothingEnabled = false;
        this.#context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

    #renderSpeechBubbles(bubbles: Bubble[]): void
    {
        this.#context.fillStyle = BUBBLE_COLOR;

        for (const bubble of bubbles)
        {
            this.#renderPointer(bubble);
            this.#renderBubble(bubble);
        }
    }

    #renderPointer(bubble: Bubble): void
    {
        const center = Geometry.getCenterPoint(bubble);

        const pointerEnd = Geometry.rotateAndTranslatePoint({ x: 0, y: bubble.magnitude }, center, bubble.angle);
        const pointerDirection = Geometry.getPointDirection(pointerEnd, bubble);

        const bubbleSize = pointerDirection === 'vertical' ? bubble.width : bubble.height;

        const baseSize = bubbleSize * BUBBLE_POINTER_RATIO;
        const baseOffset = baseSize / 2;
        const baseLeft = Geometry.rotateAndTranslatePoint({ x: -baseOffset, y: 0 }, center, bubble.angle);
        const baseRight = Geometry.rotateAndTranslatePoint({ x: baseOffset, y: 0 }, center, bubble.angle);

        this.#context.beginPath();
        this.#context.moveTo(baseLeft.x, baseLeft.y);
        this.#context.lineTo(baseRight.x, baseRight.y);
        this.#context.lineTo(pointerEnd.x, pointerEnd.y);
        this.#context.closePath();
        this.#context.fill();
    }

    #renderBubble(bubble: Bubble): void
    {
        this.#context.beginPath();
        this.#context.roundRect(bubble.x, bubble.y, bubble.width, bubble.height, BUBBLE_RADIUS);
        this.#context.fill();
    }
}
