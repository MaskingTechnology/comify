
import { SortDirections, ID } from '../../../../src/integrations/database/definitions/constants';
import { RecordNotFound, RecordNotUpdated } from '../../../../src/integrations/database/definitions/errors';
import { RecordData, RecordQuery, RecordSort } from '../../../../src/integrations/database/definitions/types';
import MemoryDb from '../../../../src/integrations/database/implementations/MemoryDb.js';

const RECORD_TYPE_PIZZA = 'pizza'; 
const RECORD_TYPE_FRUIT = 'fruit';
const INVALID_ID = '12345678';
const UPDATE_COUNTRY = 'France';

const database = new MemoryDb();

await database.connect('', 'test');

const apple: RecordData = { name: 'Apple', country: 'Belgium', sprayed: false }; 
const appleId = await database.createRecord(RECORD_TYPE_FRUIT, apple);

const peer: RecordData = { name: 'Pear', country: 'Netherlands', sprayed: true };
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
    MARGHERITA: margheritaId,
    APPLE: appleId,
    PEAR: peerId
};

const FIRST_PIZZA = PIZZAS.MARGHERITA;

const SEARCH_QUERIES: Record<string, RecordQuery> = {
    EMPTY_QUERY: { },
    FIND_NO_RECORD_QUERY: { name: { EQUALS: 'Romanos' } },
    FIND_BASED_ON_EQUAL_CONDITION: { size: { EQUALS: 20 } },
    FIND_BASED_ON_NOT_EQUAL_CONDITION: { folded: { NOT_EQUALS: false } },
    FIND_BASED_ON_LESS_THAN_CONDITION: { price: { LESS_THAN: 10 } },
    FIND_BASED_ON_LESS_THAN_OR_EQUAL_CONDITION: { price: { LESS_THAN_OR_EQUALS: 10 } },
    FIND_BASED_ON_GREATER_THAN_CONDITION: { price: { GREATER_THAN: 12 } },
    FIND_BASED_ON_GREATER_THAN_OR_EQUAL_CONDITION: { price: { GREATER_THAN_OR_EQUALS: 12 } },
    FIND_BASED_ON_IN_CONDITION: { size: { IN: [ 16, 20, 25 ] } },
    FIND_BASED_ON_NOT_IN_CONDITION: { size: { NOT_IN: [ 15, 16, 20, 30 ] } },
    FIND_BASED_ON_CONTAINS_CONDITION: { name: { CONTAINS: 'her' } },
    FIND_BASED_ON_STARTS_WITH_CONDITION: { name: { STARTS_WITH: 'Ha' } },
    FIND_BASED_ON_ENDS_WITH_CODITION: { name: { ENDS_WITH: 'one' } },
    FIND_BASED_ON_AND_CONDITION: {
        'AND':
        [
            { 
                'name': { EQUALS: PIZZAS.HAWAI.name },
                'size': { NOT_EQUALS: 30 }                                                
            }
        ]
    },
    FIND_BASED_ON_OR_CONDITION: {
        'OR':
        [
            { 'name': { EQUALS: PIZZAS.VEGETARIO.name } }, 
            { 'size': { EQUALS: 18 } }
        ]
    },
    FIND_BASED_ON_AND_WITH_NESTED_OR_CONDITION: {
        'AND':
        [
            { 'name': { EQUALS: PIZZAS.CALZONE.name } },
            {
                'OR':
                [
                    { 'size': { EQUALS: 2 } },
                    { 'folded': { EQUALS: true } }
                ]
            }
        ]
    },
    FIND_BASED_ON_OR_WITH_NESTED_AND_CONDITION: {
        'OR': 
        [
            { 'size': { EQUALS: 18 } },
            {
                'AND': 
                [
                    { 'folded': { EQUALS: false } },
                    { 'price': { GREATER_THAN: 11 } },
                    { 'price': { LESS_THAN: 13 } }
                ]
            }
        ]
    },
    FIND_NO_RECORDS_BASED_ON_AND_CONDITION: {
        'AND':
        [
            {
                'name': { EQUALS: PIZZAS.HAWAI.name },
                'size': { NOT_EQUALS: 20 }
            }
        ]
    },
    FIND_NO_RECORDS_BASED_ON_OR_CONDITION: {
        'OR':
        [
            { 'name': { EQUALS: 'Romanos' } }, 
            { 'size': { EQUALS: 21 } }
        ]
    },
    FIND_BASED_ON_USING_ALL_SEARCH_PARAMETERS: { folded: { EQUALS: false } },

}

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
    RECORD_TYPE_PIZZA, RECORD_TYPE_FRUIT, INVALID_ID, UPDATE_COUNTRY,
    PIZZAS, IDS, ID, FIRST_PIZZA, QUERY_RESULTS, SEARCH_QUERIES,
    SortDirections, RecordNotFound, RecordNotUpdated, RecordData, RecordQuery, RecordSort
};
