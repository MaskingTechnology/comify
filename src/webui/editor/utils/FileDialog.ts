
const input = document.createElement('input');
input.type = 'file';
input.accept = 'image/*';

export default class FileDialog
{
    static open(): Promise<File | undefined>
    {
        return new Promise((resolve) =>
        {
            input.onchange = () =>
            {
                const file = this.#getSelectedFile();

                resolve(file);
            };

            input.click();
        });
    }

    static #getSelectedFile(): File | undefined
    {
        const files = input.files;

        if (files === null || files.length === 0)
        {
            return;
        }

        return files[0];
    }
}
