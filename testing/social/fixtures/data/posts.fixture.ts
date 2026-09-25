
import { type Record as PostRecord } from '@comify/social/domain/post';

import { CREATOR_RECORDS } from './creators.fixture';
import { COMIC_RECORDS } from './post.comics.fixture';
import { COMMENT_RECORDS } from './post.comments.fixture';
import { TENANTS } from './tenants.fixture';

export const POST_RECORDS: Record<string, PostRecord> = {
    FIRST: { id: '1bb1e91f-8da2-49cd-a2bf-61d1681bc227', creatorId: CREATOR_RECORDS.ALICE.id, comicId: COMIC_RECORDS.FIRST.id, tenantId: TENANTS.ABCD.id, createdAt: new Date(2024, 5, 23).toISOString(), deleted: false },
    SECOND: { id: '727ed500-a3ce-4b6c-983f-d47953edb672', creatorId: CREATOR_RECORDS.ALICE.id, comicId: COMIC_RECORDS.FIRST.id, tenantId: TENANTS.ABCD.id, createdAt: new Date(2024, 6, 26).toISOString(), deleted: false },
    THIRD: { id: '2ea013e1-fde8-4478-8d5c-2355f41b5156', creatorId: CREATOR_RECORDS.CHARLIE.id, comicId: COMIC_RECORDS.FIRST.id, tenantId: TENANTS.ABCD.id, createdAt: new Date(2024, 7, 8).toISOString(), deleted: false },
    FOURTH: { id: '7ef27ada-cef7-4415-bd04-030030b01e87', creatorId: CREATOR_RECORDS.DAVID.id, comicId: COMIC_RECORDS.FIRST.id, tenantId: TENANTS.ABCD.id, createdAt: new Date(2024, 7, 12).toISOString(), deleted: false },
    FIFTH: { id: '74e5419d-e013-4973-8557-f38250892e70', creatorId: CREATOR_RECORDS.EVE.id, comicId: COMIC_RECORDS.FIRST.id, tenantId: TENANTS.EFGH.id, createdAt: new Date(2024, 5, 2).toISOString(), deleted: false },
    SIXTH: { id: 'f3fb342b-3b45-497c-9bbf-adad3725cfed', creatorId: CREATOR_RECORDS.FELIX.id, comicId: COMIC_RECORDS.FIRST.id, tenantId: TENANTS.EFGH.id, createdAt: new Date(2024, 5, 8).toISOString(), deleted: false },
    SEVENTH: { id: 'e7e259c7-58d2-431a-bfb7-90533139ddea', creatorId: CREATOR_RECORDS.GEORGE.id, comicId: COMIC_RECORDS.FIRST.id, tenantId: TENANTS.EFGH.id, createdAt: new Date(2024, 7, 15).toISOString(), deleted: false },
    DELETED: { id: '78c23cb9-d1a8-4252-98ca-ee5bcb7d01b1', creatorId: CREATOR_RECORDS.HENRY.id, comicId: COMIC_RECORDS.FIRST.id, tenantId: TENANTS.EFGH.id, createdAt: new Date(2024, 8, 3).toISOString(), deleted: true }
} as const;

export const REACTION_RECORDS: Record<string, PostRecord> = {
    COMIC: { id: '2f7acff8-f7de-4ef2-bebd-1081685321e0', parentId: POST_RECORDS.FIRST.id, creatorId: CREATOR_RECORDS.BOB.id, comicId: COMIC_RECORDS.FIRST.id, tenantId: TENANTS.ABCD.id, createdAt: new Date(2024, 5, 24).toISOString(), deleted: false },
    COMMENT: { id: '8804ca7d-3ab0-412c-9428-e0e3e7158147', parentId: POST_RECORDS.FIRST.id, creatorId: CREATOR_RECORDS.CHARLIE.id, commentId: COMMENT_RECORDS.FIRST.id, tenantId: TENANTS.ABCD.id, createdAt: new Date(2024, 6, 7).toISOString(), deleted: false },
    DELETED: { id: 'ebfa47d9-58c3-49ea-a5f9-7709d143e490', parentId: POST_RECORDS.FIFTH.id, creatorId: CREATOR_RECORDS.GEORGE.id, commentId: COMMENT_RECORDS.FIRST.id, tenantId: TENANTS.EFGH.id, createdAt: new Date(2024, 7, 18).toISOString(), deleted: true }
} as const;

export type POST_RECORDS = typeof POST_RECORDS[keyof typeof POST_RECORDS];
export type REACTION_RECORDS = typeof REACTION_RECORDS[keyof typeof REACTION_RECORDS];
