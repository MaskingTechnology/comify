
import { type Tenant } from '@comify/common/domain/tenant';

export const TENANTS: Record<string, Tenant> = {
    ABCD: { id: 'ABCD', origin: 'https://abcd.example.com' },
    EFGH: { id: 'EFGH', origin: 'https://efgh.example.com' }
} as const;

export type TENANTS = typeof TENANTS[keyof typeof TENANTS];
