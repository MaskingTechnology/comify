
import { SortDirections } from '../../../../src/integrations/database/definitions/constants';
import { RecordNotFound, RecordNotUpdated } from '../../../../src/integrations/database/definitions/errors';
import { RecordData, RecordQuery, RecordSort } from '../../../../src/integrations/database/definitions/types';
import MemoryDb from '../../../../src/integrations/database/implementations/MemoryDb.js';

const RECORD_TYPE_PIZZA = 'pizza'; 
const RECORD_TYPE_FRUIT = 'fruit';
const INVALID_ID = '12345678';
const UPDATE_DATA = 'Frankrijk';
const INVALID_PIZZA_NAME  = 'Romanos';

const database = new MemoryDb();

await database.connect('', 'test');

const apple: RecordData = { name: 'Appel', country: 'Belgie', sprayed: false }; 
const appleId = await database.createRecord(RECORD_TYPE_FRUIT, apple);

const peer: RecordData = { name: 'Peer', country: 'Nederland', sprayed: true };
const peerId = await database.createRecord(RECORD_TYPE_FRUIT, peer);

const margherita: RecordData = { name: 'Margherita', size: 15, price: 12.00, folded: false };
const margheritaId = await database.createRecord(RECORD_TYPE_PIZZA,  margherita);

const calzone: RecordData = { name: 'Calzone', size: 20, price: 11.00, folded: true };
await database.createRecord(RECORD_TYPE_PIZZA, calzone);

const pepperoni: RecordData = { name: 'Pepperoni', size: 18, price: 13.50, folded: false };
await database.createRecord(RECORD_TYPE_PIZZA, pepperoni);

const vegetario: RecordData = { name: 'Vegetario', size: 30, price: 8.50, folded: true };
await database.createRecord(RECORD_TYPE_PIZZA, vegetario);

const hawai: RecordData = { name: 'Hawai', size: 20, price: 10.00, folded: false };
await database.createRecord(RECORD_TYPE_PIZZA, hawai);

const PIZZAS = {
    MARGHERITA: margherita,
    CALZONE: calzone,
    PEPPERONI: pepperoni,
    VEGETARIO: vegetario,
    HAWAI: hawai
};

const IDS = {
    MARGHERITAID: margheritaId,
    APPLEID: appleId,
    PEERID: peerId
};

const FIRST_PIZZA = PIZZAS.MARGHERITA;

const QUERY_RESULTS = {
    BASED_ON_EQUAL: [calzone, hawai],
    BASED_ON_NOT_EQUAL: [calzone, vegetario],
    BASED_ON_LESS_THAN_OR_EQUAL: [vegetario, hawai],
    BASED_ON_GREATER_THAN_OR_EQUAL: [margherita, pepperoni],
    BASED_ON_IN_CONDITION: [calzone, hawai],
    BASED_ON_OR_CONDITION: [pepperoni, vegetario],
    BASED_ON_OR_WITH_NESTED_AND: [margherita, pepperoni],
    SORTED_ASCENDING: [calzone, hawai, margherita, pepperoni, vegetario],
    SORTED_DESCENDING: [vegetario, calzone, hawai, pepperoni, margherita],
    SORTED_BY_MULTIPLE_FIELDS_SAME_DIRECTION: [vegetario, hawai, calzone, pepperoni, margherita],
    SORTED_BY_MULTIPLE_FIELDS_DIFFERENT_DIRECTION: [vegetario, calzone, hawai, pepperoni, margherita],
    LIMITED_BY_NUMBER: [margherita, calzone],
    LIMITED_BY_OFFSET: [pepperoni, vegetario, hawai]
};

export {
    database,
    RECORD_TYPE_PIZZA, RECORD_TYPE_FRUIT, INVALID_ID, UPDATE_DATA,
    PIZZAS, IDS, INVALID_PIZZA_NAME, FIRST_PIZZA, QUERY_RESULTS,
    SortDirections, RecordNotFound, RecordNotUpdated, RecordData, RecordQuery, RecordSort
};
