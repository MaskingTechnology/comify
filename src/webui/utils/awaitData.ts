
type GetData<T> = () => Promise<T>;
type SetData<T> = (data: T) => void;
type Cancel = () => void;

export default function awaitData<T>(getData: GetData<T>, setData: SetData<T>): Cancel
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
