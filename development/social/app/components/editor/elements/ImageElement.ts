
import Element from './Element';

type Mode = 'fill' | 'fit';

export default class ImageElement extends Element
{
    #image?: HTMLImageElement;
    #mode: Mode;

    constructor()
    {
        super();

        this.#mode = 'fit';
    }

    get image() { return this.#image; }

    loadImage(source: string): void
    {
        const image = new Image();
        image.src = source;

        this.setImage(image);
    }

    setImage(image: HTMLImageElement): void
    {
        this.#image = image;
        this.#image.onload = () =>
        {
            this.makeDirty();
        };
    }

    clearImage(): void
    {
        this.#image = undefined;

        this.makeDirty();
    }

    setMode(mode: Mode): void
    {
        this.#mode = mode;

        this.makeDirty();
    }

    renderElement(context: CanvasRenderingContext2D): void
    {
        if (this.#image === undefined)
        {
            return;
        }

        const image = this.#image;
        const area = this.area;

        const widthRatio = area.width / image.width;
        const heightRatio = area.height / image.height;

        const ratio = this.#mode === 'fill'
            ? Math.max(widthRatio, heightRatio)
            : Math.min(widthRatio, heightRatio);

        const imageWidth = image.width * ratio;
        const imageHeight = image.height * ratio;

        const sx = Math.max(0, (imageWidth - area.width) / 2 / ratio);
        const sy = Math.max(0, (imageHeight - area.height) / 2 / ratio);
        const sWidth = image.width - sx * 2;
        const sHeight = image.height - sy * 2;

        const dx = (area.width - imageWidth) / 2;
        const dy = (area.height - imageHeight) / 2;
        const dWidth = area.width - dx * 2;
        const dHeight = area.height - dy * 2;

        context.imageSmoothingEnabled = true;

        context.drawImage(
            image,
            Math.round(sx),
            Math.round(sy),
            Math.round(sWidth),
            Math.round(sHeight),
            Math.round(area.x + dx),
            Math.round(area.y + dy),
            Math.round(dWidth),
            Math.round(dHeight)
        );
    }
}
