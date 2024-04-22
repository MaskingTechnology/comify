
export interface Http
{
    get(url: string, headers?: Record<string, string>): Promise<Response>;

    post(url: string, body: unknown, headers?: Record<string, string>): Promise<Response>;

    put(url: string, body: unknown, headers?: Record<string, string>): Promise<Response>;

    patch(url: string, body: unknown, headers?: Record<string, string>): Promise<Response>;

    delete(url: string, headers?: Record<string, string>): Promise<Response>;

    head(url: string, headers?: Record<string, string>): Promise<Response>;
}
