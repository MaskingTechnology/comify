
import ImageData from './image/data/ImageData';
import CreatorData from './creator/data/CreatorData';
import ComicData from './comic/data/ComicData';
import PostData from './post/data/PostData';
import NotificationData from './notification/data/NotificationData';

const creators = new Map<string, CreatorData>();
creators.set('0', new CreatorData('0', 'Peter van Vliet', 'peterrrr', 'peter@masking.tech', '0', new Date(), 0, 0, 0));
creators.set('1', new CreatorData('1', 'Bas Meeuwissen', 'bassie', 'bas@masking.tech', '0', new Date(), 0, 0, 0));
creators.set('2', new CreatorData('2', 'John Meeuwssen', 'herehecomes', 'john@masking.tech', '0', new Date(), 0, 0, 0));

const images = new Map<string, ImageData>();
images.set('0', new ImageData('0', 'https://masking.tech/images/peter.jpg', 'image/jpeg', 100));
images.set('1', new ImageData('1', 'https://live.staticflickr.com/7420/11306783734_227ae366a3.jpg', 'image/jpeg', 100));

const comics = new Map<string, ComicData>();
comics.set('0', new ComicData('0', '1', '',));

const posts = new Map<string, PostData>();
posts.set('0', new PostData('0', '0', '0', new Date(), 0, 0));
posts.set('1', new PostData('1', '1', '0', new Date(), 0, 0));

const notifications = new Map<string, NotificationData>();
notifications.set('0', new NotificationData('0', 'started-following', '1', '0', undefined, undefined, new Date()));
notifications.set('1', new NotificationData('1', 'rated-post', '1', '0', '0', undefined, new Date()));

export { creators, images, comics, posts, notifications };
