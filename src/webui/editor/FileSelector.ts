
type FileHandler = (file: File) => void;

export default class FileSelector
{
    #element: HTMLElement;
    #handler: FileHandler;
    #input: HTMLInputElement;

    #clickHandler = () => { this.#input.click(); };

    constructor(element: HTMLElement, handler: (file: File) => void)
    {
        this.#element = element;
        this.#handler = handler;

        this.#input = document.createElement('input');
        this.#input.type = 'file';
        this.#input.accept = 'image/*';
        this.#input.onchange = () =>
        {
            this.#handleChange();
        };
    }

    bind(): void
    {
        this.#element.addEventListener('click', this.#clickHandler);
    }

    unbind(): void
    {
        this.#element.removeEventListener('click', this.#clickHandler);
    }

    #handleChange(): void
    {
        const files = this.#input.files;

        if (files === null || files.length === 0)
        {
            return;
        }

        this.#handler(files[0]);
    }
}
