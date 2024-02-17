
export default class ImageLoader
{
    static load(source: string): Promise<HTMLImageElement>
    {
        return new Promise((resolve, reject) =>
        {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = source;
        });
    }
}
