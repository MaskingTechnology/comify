
export default class Renderer
{
    #canvas: HTMLCanvasElement;
    #context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement)
    {
        this.#canvas = canvas;
        this.#context = canvas.getContext("2d");
    }

    render(comic: Comic)
    {

    }

    #renderImage(image: Image)
    {
        const img = new HTMLImageElement();
        img.src = image.source;
        img.onload = () =>
        {
            this.#context.drawImage(img, 0, 0);
        };
    }

    #renderIntro(intro: Intro)
    {
        this.#context.fillText(intro.text, 0, 0);
    }

    #renderOutro(outro: Outro)
    {
        this.#context.fillText(outro.text, 0, 0);
    }

    #renderSpeechBubble(speechBubble: SpeechBubble)
    {
        this.#context.beginPath();
        this.#context.moveTo(0, 0);
        this.#context.lineTo(0, 100);
        this.#context.lineTo(100, 100);
        this.#context.lineTo(100, 0);
        this.#context.lineTo(0, 0);
        this.#context.stroke();
    }
}
