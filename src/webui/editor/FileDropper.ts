
type FileHandler = (file: File) => void;

export default class FileDropper
{
    #element: HTMLElement;
    #handler: FileHandler;

    #dragoverHandler = (event: DragEvent) => { event.preventDefault(); };
    #dropHandler = (event: DragEvent) => { event.preventDefault(); this.#handleDrop(event); };

    constructor(element: HTMLElement, handler: FileHandler)
    {
        this.#element = element;
        this.#handler = handler;
    }

    bind(): void
    {
        this.#element.addEventListener('dragover', this.#dragoverHandler);
        this.#element.addEventListener('drop', this.#dropHandler);
    }

    unbind(): void
    {
        this.#element.removeEventListener('dragover', this.#dragoverHandler);
        this.#element.removeEventListener('drop', this.#dropHandler);
    }

    #handleDrop(event: DragEvent): void
    {
        const files = event.dataTransfer?.files;

        if (files === undefined || files.length === 0)
        {
            return;
        }

        this.#handler(files[0]);
    }
}
