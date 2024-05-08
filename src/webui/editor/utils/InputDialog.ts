
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
            <div class="ds-border ds-border-normal ds-border-size-large">
                <div class="ds-panel ds-panel-normal ds-panel-padding-medium">
                    <form class="ds-form" method="dialog">
                        <div class="ds-column ds-column-gap-medium">
                            <textarea class="ds-textarea ds-textarea-size-medium"></textarea>
                            <div class="ds-row ds-row-gap-small ds-row-align-x-right">
                                <button class="ds-button ds-button-secondary ds-button-size-small" value="cancel">Cancel</button>
                                <button class="ds-button ds-button-primary ds-button-size-small" value="confirm">Confirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;

        return dialog;
    }
}
