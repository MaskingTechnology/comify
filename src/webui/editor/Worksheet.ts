
import ButtonBar from './components/ButtonBar';
import Group from './elements/Group';
import type Model from './model/Model';
import SpeechBubble from './model/SpeechBubble.js';

export default class Worksheet extends Group
{
    #model: Model;

    constructor(model: Model)
    {
        super();

        this.#model = model;

        const buttonBar = new ButtonBar();

        this.addElement(model);
        this.addElement(buttonBar);
    }

    setBackgroundImage(image: HTMLImageElement)
    {
        this.#model.setBackgroundImage(image);
    }

    addSpeechBubble()
    {
        const bubble = new SpeechBubble();
        bubble.setPosition(100, 100);
        bubble.setSize(200, 100);
        bubble.setPointer(100, 0);
        bubble.releaseHandler = () => console.log('bubble clicked');

        this.#model.addSpeechBubble(bubble);
    }
}
