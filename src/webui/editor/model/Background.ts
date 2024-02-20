
import Colors from '../definitions/Colors';
import Element from '../elements/Element';

export default class Background extends Element
{
    #image?: HTMLImageElement;

    get image() { return this.#image; }

    setImage(image: HTMLImageElement | undefined)
    {
        if (this.#image === image)
        {
            return;
        }

        this.#image = image;

        this.makeDirty();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hit(x: number, y: number): boolean
    {
        return true;
    }

    renderElement(context: CanvasRenderingContext2D): void
    {
        this.#image === undefined
            ? this.#renderBackground(context)
            : this.#renderImage(context);
    }

    #renderBackground(context: CanvasRenderingContext2D): void
    {
        context.fillStyle = Colors.BACKGROUND;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }

    #renderImage(context: CanvasRenderingContext2D): void
    {
        const image = this.#image ?? new Image();
        const canvas = context.canvas;

        const widthRatio = canvas.width / image.width;
        const heightRatio = canvas.height / image.height;
        // const ratio = Math.min(widthRatio, heightRatio); // Fit image inside canvas
        const ratio = Math.max(widthRatio, heightRatio); // Fill canvas with image

        const sx = 0;
        const sy = 0;
        const sWidth = image.width;
        const sHeight = image.height;

        const dx = Math.round((canvas.width - image.width * ratio) / 2);
        const dy = Math.round((canvas.height - image.height * ratio) / 2);
        const dWidth = Math.round(image.width * ratio);
        const dHeight = Math.round(image.height * ratio);

        context.imageSmoothingEnabled = false;
        context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
}
