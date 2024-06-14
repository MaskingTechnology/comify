
export default function getScrollContainer(element: HTMLElement): HTMLElement | undefined
{
    let parent = element.parentElement;

    while (parent)
    {
        if (parent.scrollHeight > parent.clientHeight)
        {
            return parent;
        }

        parent = parent.parentElement;
    }

    return undefined;
}
