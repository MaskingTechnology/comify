
import Group from '../elements/Group';
import Background from './Background';
import Intro from './Intro';
import Outro from './Outro';
import SpeechBubble from './SpeechBubble';

export default class Model extends Group
{
    #background: Background;
    #intro: Intro;
    #outro: Outro;
    #speechBubbles: Group;

    constructor()
    {
        super();

        this.#background = new Background();
        this.#intro = new Intro();
        this.#outro = new Outro();
        this.#speechBubbles = new Group();

        this.addElement(this.#background);
        this.addElement(this.#intro);
        this.addElement(this.#outro);
        this.addElement(this.#speechBubbles);
    }

    get background() { return this.#background; }

    get intro() { return this.#intro; }

    get outro() { return this.#outro; }

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
