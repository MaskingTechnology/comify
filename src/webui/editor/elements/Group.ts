
import Element from './Element';

export default class Group extends Element
{
    #elements: Element[];

    constructor(elements: Element[] = [])
    {
        super();

        this.#elements = elements;
    }

    get dirty() { return this.#elements.some(element => element.dirty) || super.dirty; }

    get #reversedElements() { return this.#elements.toReversed(); }

    addElement(element: Element)
    {
        this.#elements.push(element);
        this.makeDirty();
    }

    removeElement(element: Element)
    {
        const index = this.#elements.indexOf(element);

        if (index === -1)
        {
            return;
        }

        this.#elements.splice(index, 1);
        this.makeDirty();
    }

    getElementAt(x: number, y: number): Element | undefined
    {
        for (const element of this.#reversedElements)
        {
            if (element instanceof Group)
            {
                const subElement = element.getElementAt(x, y);

                if (subElement !== undefined)
                {
                    return subElement;
                }

                continue;
            }

            if (element.hit(x, y))
            {
                return element;
            }
        }

        if (super.hit(x, y))
        {
            return this;
        }

        return undefined;
    }

    setPosition(x: number, y: number): void
    {
        this.move(x - this.area.x, y - this.area.y);
    }

    setSize(width: number, height: number): void
    {
        this.resize(width - this.area.width, height - this.area.height);
    }

    move(x: number, y: number): void
    {
        this.#elements.forEach(element => element.move(x, y));
        super.move(x, y);
    }

    resize(width: number, height: number): void
    {
        this.#elements.forEach(element => element.resize(width, height));
        super.resize(width, height);
    }

    render(context: CanvasRenderingContext2D)
    {
        super.render(context);
        this.#elements.forEach(element => element.render(context));
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderElement(context: CanvasRenderingContext2D): void
    {
        // Nothing to do here
    }

    hit(x: number, y: number): boolean
    {
        return this.#reversedElements.some(element => element.hit(x, y))
            || super.hit(x, y);
    }
}
