
export interface Sanitizer
{
    sanitize(input: Record<string, unknown>): Record<string, unknown>;
}
