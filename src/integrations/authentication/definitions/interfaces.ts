
import { Identity } from './types.js';

export interface IdentityProvider
{
    get connected(): boolean;

    connect(configuration?: unknown): Promise<void>;

    disconnect(): Promise<void>;

    getLoginUrl(): Promise<string>;

    login(data: unknown): Promise<Identity>;
}
