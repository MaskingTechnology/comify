
export default class EventManager
{
    static #listeners: { [key: string]: Function[]; } = {};

    static listen(event: string, listener: Function)
    {
        if (this.#listeners[event] === undefined)
        {
            this.#listeners[event] = [];
        }

        this.#listeners[event].push(listener);
    }

    static remove(event: string, listener: Function)
    {
        if (!this.#listeners[event])
        {
            return;
        }

        const index = this.#listeners[event].indexOf(listener);

        if (index === -1)
        {
            return;
        }

        this.#listeners[event].splice(index, 1);
    }

    static dispatch(event: string, ...args: unknown[])
    {
        if (this.#listeners[event] === undefined)
        {
            return;
        }

        for (const listener of this.#listeners[event])
        {
            listener(...args);
        }
    }

    static clear()
    {
        this.#listeners = {};
    }
}
