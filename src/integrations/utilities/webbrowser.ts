
export function getQueryParameter(name: string): string | undefined
{
    const queryParameters = new URLSearchParams(globalThis.location?.search);

    return queryParameters.get(name) ?? undefined;
}

export function setCookie(key: string, value: string): void
{
    const cookie = `${key}=${value}`;

    document.cookie = cookie;
}
