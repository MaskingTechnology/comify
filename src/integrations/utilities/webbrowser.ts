
export function getQueryParameter(name: string): string | undefined
{
    const queryParameters = new URLSearchParams(globalThis.location?.search);

    return queryParameters.get(name) ?? undefined;
}

export function setCookie(key: string, value: string): void
{
    const documentCookie = document.cookie;

    if (documentCookie.split('; ').some(cookie => cookie.startsWith(`${key}=`)))
    {
        return;
    }

    const cookie = `${key}=${value}; path=/; SameSite=Strict;`;

    document.cookie = cookie;
}
