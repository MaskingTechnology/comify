
export function getQueryParameter(name: string): string | undefined
{
    const queryParameters = new URLSearchParams(globalThis.location?.search);

    return queryParameters.get(name) ?? undefined;
}
