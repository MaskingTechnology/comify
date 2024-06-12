
const CAPTURE_IMAGE_TYPE = 'image/jpeg';

export default class CameraDialog
{
    static readonly #dialog = this.#createDialog();

    static async open(width: number, height: number): Promise<string | undefined>
    {
        this.#dialog.style.maxWidth = `${width}px`;

        const video = this.#getVideo(width, height);

        await this.#startStream(video);

        return new Promise((resolve) =>
        {
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
            <div class="border type-normal size-large">
                <div class="panel type-normal padding-medium">
                    <form class="form" method="dialog">
                        <div class="column gap-medium">
                            <video></video>
                            <div class="row gap-small align-x-right">
                                <button class="button type-secondary size-small" value="cancel">Cancel</button>
                                <button class="button type-primary size-small" value="confirm">Capture</button>
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
        video.style.objectFit = 'cover';
        video.style.aspectRatio = `${width} / ${height}`;

        video.width = width;
        video.height = height;
        video.autoplay = true;

        return video;
    }

    static async #startStream(video: HTMLVideoElement): Promise<void>
    {
        const constraints = {
            width: video.width,
            height: video.height,
            aspectRatio: video.width / video.height,
            resizeMode: 'crop-and-scale',
            facingMode: 'user'
        };

        video.srcObject = await navigator.mediaDevices.getUserMedia({ video: constraints, audio: false });
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

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.imageSmoothingEnabled = true;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

        return canvas.toDataURL(CAPTURE_IMAGE_TYPE);
    }
}
