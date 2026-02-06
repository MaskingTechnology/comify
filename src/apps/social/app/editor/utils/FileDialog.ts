
export default class FileDialog
{
    static open(): Promise<File | undefined>
    {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = false;

        return new Promise((resolve, reject) =>
        {
            input.onchange = () =>
            {
                const file = this.#getSelectedFile(input);

                resolve(file);
            };

            input.oncancel = () => { resolve(undefined); };
            input.onabort = () => { resolve(undefined); };

            input.oninvalid = () => { reject(undefined); };
            input.onerror = () => { reject(undefined); };

            input.click();
        });
    }

    static #getSelectedFile(input: HTMLInputElement): File | undefined
    {
        const files = input.files;

        if (files === null || files.length === 0)
        {
            return;
        }

        return files[0];
    }
}
