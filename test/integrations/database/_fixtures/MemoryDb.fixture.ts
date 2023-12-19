
import { SortDirections } from '../../../../src/integrations/database/definitions/constants';
import { RecordNotFound, RecordNotUpdated } from '../../../../src/integrations/database/definitions/errors';
import { RecordData, RecordQuery, RecordSort } from '../../../../src/integrations/database/definitions/types';
import MemoryDb from '../../../../src/integrations/database/implementations/MemoryDb.js';

const RECORD_TYPE_PIZZA = 'pizza'; 
const RECORD_TYPE_FRUIT = 'fruit';

const database = new MemoryDb();

await database.connect('', 'test');

const margherita: RecordData = { name: 'Margherita', size: 15, price: 12.00, folded: false };
const margheritaId = await database.createRecord(RECORD_TYPE_PIZZA,  margherita);

const apple: RecordData = { name: 'Appel', land: 'Belgie', bespoten: false }; 
const appleId = await database.createRecord(RECORD_TYPE_FRUIT, apple);

const peer: RecordData = { name: 'Peer', land: 'Nederland', bespoten: true };
const peerId = await database.createRecord(RECORD_TYPE_FRUIT, peer);

const calzone: RecordData = { name: 'Calzone', size: 20, price: 11.00, folded: true };
await database.createRecord(RECORD_TYPE_PIZZA, calzone);

const pepperoni: RecordData = { name: 'Pepperoni', size: 18, price: 13.50, folded: false };
await database.createRecord(RECORD_TYPE_PIZZA, pepperoni);

const vegetario: RecordData = { name: 'Vegetario', size: 30, price: 8.50, folded: true };
await database.createRecord(RECORD_TYPE_PIZZA, vegetario);

const hawai: RecordData = { name: 'Hawai', size: 20, price: 10.00, folded: false };
await database.createRecord(RECORD_TYPE_PIZZA, hawai);

export {
    database,
    RECORD_TYPE_PIZZA, RECORD_TYPE_FRUIT,
    margherita, calzone, pepperoni, vegetario, hawai, margheritaId, peerId, appleId,
    SortDirections, RecordNotFound, RecordNotUpdated, RecordData, RecordQuery, RecordSort
};
