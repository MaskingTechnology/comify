
import Image from './views/Image';
import Creator from './views/Creator';
import Comic from './views/Comic';
import Post from './views/Post';

const portrait = new Image('https://masking.tech/images/peter.jpg');

const image = new Image('https://live.staticflickr.com/7420/11306783734_227ae366a3.jpg');
const comic = new Comic('0', image);

export const creators = [
    new Creator('0', 'Peter van Vliet', 'peterrrr', portrait, new Date(), 0, 0, 0),
    new Creator('1', 'Bas Meeuwissen', 'bassie', portrait, new Date(), 0, 0, 0),
    new Creator('2', 'John Meeuwssen', 'herehecomes', portrait, new Date(), 0, 0, 0)
];

export const posts = [
    new Post('0', new Date(), creators[0], comic, 0, 0),
    new Post('1', new Date(), creators[1], comic, 0, 0),
];
