
import
{
    seedCreators,
    seedCreatorMetrics,
    seedImages as seedImagesDatabase,
    seedNotifications,
    seedComics,
    seedComments,
    seedPosts,
    seedPostMetrics,
    seedRatings,
    seedRelations
} from './database.fixture';

import { seedImages as seedImagesStorage } from './storage.fixture';

export async function seedImages(): Promise<void>
{
    await Promise.all([
        seedImagesDatabase(),
        seedImagesStorage()
    ]);
}

export async function fullySeedCreators(): Promise<void>
{
    await Promise.all([
        seedCreators(),
        seedCreatorMetrics(),
        seedRelations()
    ]);
}

export async function fullySeedPosts(): Promise<void>
{
    await Promise.all([
        fullySeedCreators(),
        seedImages(),
        seedComics(),
        seedComments(),
        seedPosts(),
        seedPostMetrics(),
        seedRatings()
    ]);
}

export async function fullySeedNotifications(): Promise<void>
{
    await Promise.all([
        fullySeedPosts(),
        seedNotifications()
    ]);
}

export
{
    seedCreators,
    seedCreatorMetrics,
    seedNotifications,
    seedComics,
    seedComments,
    seedPosts,
    seedPostMetrics,
    seedRatings,
    seedRelations
};