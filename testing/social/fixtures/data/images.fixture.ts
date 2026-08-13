
import { type ImageDataUrl, Record as ImageRecord } from '@comify/social/domain/image';

export const IMAGE_STORAGE_KEYS: Record<string, string> = {
    PROFILE: 'profile/1',
    COMIC: 'comic/1'
} as const;

export const IMAGE_DATA_URLS: Record<string, ImageDataUrl> = {
    PROFILE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh',
    COMIC: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
} as const;

export const IMAGES: Record<string, Buffer> = {
    PROFILE: Buffer.from(IMAGE_DATA_URLS.PROFILE, 'base64'),
    COMIC: Buffer.from(IMAGE_DATA_URLS.COMIC, 'base64')
} as const;

export const IMAGE_RECORDS: Record<string, ImageRecord> = {
    PROFILE: { id: 'da371360-6d2a-470a-925a-2cf766c65aa1', storageKey: IMAGE_STORAGE_KEYS.PROFILE, filename: 'first_profile.png', mimeType: 'image/png', size: 0 },
    COMIC: { id: '40037489-392f-4888-9500-96040eeac238', storageKey: IMAGE_STORAGE_KEYS.COMIC, filename: 'first_comic.png', mimeType: 'image/png', size: 0 }
} as const;

export type IMAGE_STORAGE_KEYS = typeof IMAGE_STORAGE_KEYS[keyof typeof IMAGE_STORAGE_KEYS];
export type IMAGE_DATA_URLS = typeof IMAGE_DATA_URLS[keyof typeof IMAGE_DATA_URLS];
export type IMAGES = typeof IMAGES[keyof typeof IMAGES];
export type IMAGE_RECORDS = typeof IMAGE_RECORDS[keyof typeof IMAGE_RECORDS];
