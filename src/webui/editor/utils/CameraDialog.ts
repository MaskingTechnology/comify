
export default class CameraDialog
{
    static #dialog = this.#createDialog();

    static async open(width: number, height: number): Promise<string | undefined>
    {
        this.#dialog.style.maxWidth = `${width}px`;

        const video = this.#getVideo(width, height);

        await this.#createStream(video);

        return new Promise((resolve) =>
        {
            video.play();

            this.#dialog.onclose = () =>
            {
                this.#dialog.onclose = null;

                const image = this.#dialog.returnValue === 'confirm'
                    ? this.#capture(video)
                    : undefined;

                this.#stopStream(video);

                document.body.removeChild(this.#dialog);

                resolve(image);
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
                            <video></video>
                            <div class="ds-row ds-row-gap-small ds-row-align-x-right">
                                <button class="ds-button ds-button-secondary ds-button-size-small" value="cancel">Cancel</button>
                                <button class="ds-button ds-button-primary ds-button-size-small" value="confirm">Capture</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;

        return dialog;
    }

    static #getVideo(width: number, height: number): HTMLVideoElement
    {
        const video = this.#dialog.querySelector('video') as HTMLVideoElement;

        video.style.width = '100%';
        video.style.height = 'auto';
        video.width = width;
        video.height = height;

        return video;
    }

    static async #createStream(video: HTMLVideoElement): Promise<void>
    {
        const constraints = {
            width: video.width,
            height: video.height,
            resizeMode: 'crop-and-scale',
            facingMode: 'user'
        };

        const stream = await navigator.mediaDevices.getUserMedia({ video: constraints, audio: false });

        video.srcObject = stream;
    }

    static #stopStream(video: HTMLVideoElement): void
    {
        const stream = video.srcObject as MediaStream;

        stream.getTracks().forEach((track) => track.stop());
    }

    static #capture(video: HTMLVideoElement): string
    {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        canvas.width = video.width;
        canvas.height = video.height;

        console.log(canvas.width, canvas.height);

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        return canvas.toDataURL('image/jpeg');
    }
}
