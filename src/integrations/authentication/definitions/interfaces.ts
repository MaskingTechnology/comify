
import { Session } from './types';

export interface IdentityProvider
{
    get connected(): boolean;

    connect(): Promise<void>;

    disconnect(): Promise<void>;

    getLoginUrl(): Promise<string>;

    login(data: Record<string, unknown>): Promise<Session>;

    refresh(session: Session): Promise<Session>;

    logout(session: Session): Promise<void>;
}
