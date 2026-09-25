
import { type Record as ComicRecord } from '@comify/social/domain/post.comic';

import { IMAGE_RECORDS } from './images.fixture';

export const COMIC_RECORDS: Record<string, ComicRecord> = {
    FIRST: { id: 'd3454804-f254-427d-8b4f-7405f4d741cb', imageId: IMAGE_RECORDS.COMIC.id }
} as const;

export type COMIC_RECORDS = typeof COMIC_RECORDS[keyof typeof COMIC_RECORDS];
