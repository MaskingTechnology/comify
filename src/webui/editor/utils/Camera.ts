
const CAPTURE_IMAGE_TYPE = 'image/jpeg';

export default class Camera
{
    #video: HTMLVideoElement;

    constructor(video: HTMLVideoElement)
    {
        this.#video = video;
    }

    static isAvailable(): boolean
    {
        return 'mediaDevices' in navigator
            && 'getUserMedia' in navigator.mediaDevices;
    }

    static async hasPermission(): Promise<boolean>
    {
        if ('permissions' in navigator)
        {
            // @ts-expect-error The `name` property does not contain the value 'camera'
            const result = await navigator.permissions.query({ name: 'camera' });

            return result.state === 'granted';
        }

        return true;
    }

    static async canBeUsed(): Promise<boolean>
    {
        return this.isAvailable()
            && this.hasPermission();
    }

    async start(): Promise<void>
    {
        const constraints = {
            width: this.#video.width,
            height: this.#video.height,
            aspectRatio: this.#video.width / this.#video.height,
            resizeMode: 'crop-and-scale',
            facingMode: 'user'
        };

        this.#video.srcObject = await navigator.mediaDevices.getUserMedia({ video: constraints, audio: false });
    }

    stop(): void
    {
        const stream = this.#video.srcObject as MediaStream;

        stream.getTracks().forEach((track) => track.stop());
    }

    capture(): string
    {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        canvas.width = this.#video.videoWidth;
        canvas.height = this.#video.videoHeight;

        context.imageSmoothingEnabled = true;
        context.drawImage(this.#video, 0, 0, this.#video.videoWidth, this.#video.videoHeight);

        return canvas.toDataURL(CAPTURE_IMAGE_TYPE);
    }
}
