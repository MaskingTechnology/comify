
import ImageData from './ImageData';

export default class Image extends ImageData
{
    #dataUrl: string;

    constructor(data: ImageData, dataUrl: string)
    {
        super(data.id, data.storageKey, data.fileName, data.mimeType, data.size);

        this.#dataUrl = dataUrl;
    }

    get dataUrl() { return this.#dataUrl; }
}
