
import type { Session } from './types';

export interface IdentityProvider
{
    get connected(): boolean;

    connect(): Promise<void>;

    disconnect(): Promise<void>;

    getLoginUrl(origin: string): Promise<string>;

    login(origin: string, data: Record<string, unknown>): Promise<Session>;

    refresh(session: Session): Promise<Session>;

    logout(session: Session): Promise<void>;
}
