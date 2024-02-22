
import Group from '../elements/Group';
import Background from './Background';
import SpeechBubble from './SpeechBubble';

export default class Model extends Group
{
    #background: Background;
    #speechBubbles: Group;

    constructor()
    {
        super();

        this.#background = new Background();
        this.#speechBubbles = new Group();

        this.addElement(this.#background);
        this.addElement(this.#speechBubbles);
    }

    get background() { return this.#background; }

    get speechBubbles() { return this.#speechBubbles; }

    addSpeechBubble(bubble: SpeechBubble)
    {
        this.#speechBubbles.addElement(bubble);
    }

    removeSpeechBubble(bubble: SpeechBubble)
    {
        this.#speechBubbles.removeElement(bubble);
    }
}
