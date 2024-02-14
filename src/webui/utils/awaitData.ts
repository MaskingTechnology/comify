
export default function awaitData<T>(getData: () => Promise<T>, setData: (data: T) => void): () => void
{
    let cancelled = false;

    const loadData = async () =>
    {
        const data = await getData();

        if (cancelled) return;

        setData(data);
    };

    const cancel = () =>
    {
        cancelled = true;
    };

    loadData();

    return cancel;
}
