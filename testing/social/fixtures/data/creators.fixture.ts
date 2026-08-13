
import { type Record as CreatorRecord } from '@comify/social/domain/creator';

import { TENANTS } from './tenants.fixture';

export const CREATOR_RECORDS: Record<string, CreatorRecord> = {
    ALICE: { id: 'ca2bb85c-390e-46db-83bd-992f59c8d8f9', fullName: 'Alice Anderson', nickname: 'alicea', email: 'alice@example.com', tenantId: TENANTS.ABCD.id, joinedAt: new Date(2024, 5, 23).toISOString() },
    BOB: { id: 'b19af935-0713-43f7-ad33-ac0765b1cf23', fullName: 'Bob Baker', nickname: 'bobthegreat', email: 'bob@example.com', tenantId: TENANTS.ABCD.id, joinedAt: new Date(2024, 5, 24).toISOString() },
    CHARLIE: { id: '813e5587-d822-4568-85fa-f9e092c82792', fullName: 'Charlie Castillo', nickname: 'charliecastillo', email: 'charlie@example.com', tenantId: TENANTS.ABCD.id, joinedAt: new Date(2024, 6, 6).toISOString() },
    DAVID: { id: '38be2a77-59f4-482d-b77e-7e69c7d8a1c4', fullName: 'David Diaz', nickname: 'diazdavid', email: 'david@example.com', tenantId: TENANTS.ABCD.id, joinedAt: new Date(2024, 7, 15).toISOString() },
    EVE: { id: 'e4436c29-ef16-40f9-a3af-7b26725d2256', fullName: 'Eve Edwards', nickname: 'sundayeve', email: 'eve@example.com', tenantId: TENANTS.EFGH.id, joinedAt: new Date(2024, 4, 15).toISOString() },
    FELIX: { id: '1956b2f9-7797-4453-b5e9-1e679f97371d', fullName: 'Felix Fischer', nickname: 'felixer', email: 'felix@example.com', tenantId: TENANTS.EFGH.id, joinedAt: new Date(2024, 5, 8).toISOString() },
    GEORGE: { id: '0cb5c89b-3c29-49e9-b7e8-a31b2ff2746c', fullName: 'George Gomez', nickname: 'gogogomez', email: 'george@example.com', tenantId: TENANTS.EFGH.id, joinedAt: new Date(2024, 5, 10).toISOString() },
    HENRY: { id: 'b0c5d0ba-a360-4da3-bf46-f459ae528251', fullName: 'Henry Higgins', nickname: 'henryhiggens', email: 'henry@example.com', tenantId: TENANTS.EFGH.id, joinedAt: new Date(2024, 7, 11).toISOString() },
} as const;

export type CREATOR_RECORDS = typeof CREATOR_RECORDS[keyof typeof CREATOR_RECORDS];
