
export default class InputDialog
{
    static readonly #dialog = this.#createDialog();

    static async open(text: string): Promise<string>
    {
        return new Promise((resolve) =>
        {
            const input = this.#dialog.querySelector('textarea') as HTMLTextAreaElement;
            input.value = text;

            this.#dialog.onclose = () =>
            {
                this.#dialog.onclose = null;

                document.body.removeChild(this.#dialog);

                const result = this.#dialog.returnValue === 'confirm'
                    ? input.value
                    : text;

                resolve(result);
            };

            document.body.appendChild(this.#dialog);

            this.#dialog.showModal();
        });
    }

    static #createDialog(): HTMLDialogElement
    {
        const dialog = document.createElement('dialog');
        dialog.style.border = '0';
        dialog.style.padding = '0';

        dialog.innerHTML = `<div class="ds">
            <div class="border type-normal size-large">
                <div class="panel type-normal padding-medium">
                    <form class="form" method="dialog">
                        <div class="column gap-medium">
                            <textarea class="textarea size-medium"></textarea>
                            <div class="row gap-small align-x-right">
                                <button class="button type-secondary size-small" value="cancel">Cancel</button>
                                <button class="button type-primary size-small" value="confirm">Confirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;

        return dialog;
    }
}
