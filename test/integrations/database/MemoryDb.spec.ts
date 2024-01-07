
import { describe, expect, it } from 'vitest';

import { 
    database,
    RECORD_TYPE_PIZZA, RECORD_TYPE_FRUIT, INVALID_PIZZA_NAME, INVALID_ID, UPDATE_DATA,
    PIZZAS, IDS, FIRST_PIZZA, QUERY_RESULTS,
    SortDirections, RecordNotFound, RecordNotUpdated, RecordData, RecordQuery, RecordSort
} from './_fixtures/MemoryDb.fixture';
import { ID } from '../../../src/integrations/database/definitions/constants';

describe('implementations/MemoryDb', () =>
{
    describe('.readRecord', () =>
    {
        it('should give all fields when no fields are specified', async () =>
        {
            const result = await database.readRecord(RECORD_TYPE_PIZZA, IDS.MARGHERITAID);

            expect(result).toEqual(expect.objectContaining(PIZZAS.MARGHERITA));
        });

        it('should only give the fields specified', async () =>
        {
            const result = await database.readRecord(RECORD_TYPE_PIZZA, IDS.MARGHERITAID, [ ID, 'folded' ]);

            expect(Object.keys(result).length).toBe(2);
            expect(result?.id).toBe(IDS.MARGHERITAID);
            expect(result?.folded).toBe(false);
        });

        it('should throw an error when a record is not found', async () =>
        {
            const result = database.readRecord(RECORD_TYPE_PIZZA, INVALID_ID);

            expect(result).rejects.toStrictEqual(new RecordNotFound());
        });
     });

    describe('.deleteRecord', () =>
    {
        it('should delete the record', async() =>
        {
            await database.deleteRecord(RECORD_TYPE_FRUIT, IDS.APPLEID);
            const result = database.readRecord(RECORD_TYPE_FRUIT, IDS.APPLEID);

            expect(result).rejects.toStrictEqual(new RecordNotFound());   
        });

        it('should throw an error when the record cannot be deleted', async () =>
        {
            const result = database.deleteRecord(RECORD_TYPE_PIZZA, INVALID_ID);

            expect(result).rejects.toStrictEqual(new RecordNotFound());
        });
    });

    describe('.updateRecord', () =>
    {
        it('should update the record', async () =>
        {
            const updateData: RecordData = { country: UPDATE_DATA };
            await database.updateRecord(RECORD_TYPE_FRUIT, IDS.PEERID , updateData);
            const result = await database.readRecord(RECORD_TYPE_FRUIT, IDS.PEERID);

            expect(result?.country).toBe(UPDATE_DATA);
        });

        it('should throw an error when record cannot be updated', async () =>
        {
            const result = database.updateRecord(RECORD_TYPE_FRUIT, INVALID_ID, {});

            expect(result).rejects.toStrictEqual(new RecordNotUpdated());
        });
    });
    
    describe('.findRecord', () =>
    {
        it('should give only the first record found', async () =>
        {
            const query: RecordQuery = { };
            const result = await database.findRecord(RECORD_TYPE_PIZZA, query);

            expect(result).toEqual(expect.objectContaining(FIRST_PIZZA));
        });

        it('should find no record', async () =>
        {
            const query: RecordQuery = { name: { EQUALS: INVALID_PIZZA_NAME } }; 
            const result = await database.findRecord(RECORD_TYPE_PIZZA, query);

            expect(result).toBe(undefined);
        });
    });

    describe('.searchRecords', () =>
    {
        it('should find records based on EQUAL condition', async () =>
        {
            const query: RecordQuery = { size: { EQUALS: 20 } };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_EQUAL);
        });

        it('should find records based on NOT EQUAL condition', async () =>
        {
            const query: RecordQuery = { folded: { NOT_EQUALS: false }};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_NOT_EQUAL);
        });

        it('should find records based on LESS THAN condition', async () =>
        {
            const query: RecordQuery = { price: { LESS_THAN: 10 }};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.VEGETARIO));
        });

        it('should find records based on LESS THAN OR EQUAL condition', async () =>
        {
            const query: RecordQuery = { price: { LESS_THAN_OR_EQUALS: 10 }};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_LESS_THAN_OR_EQUAL);
        });

        it('should find records based on GREATER THAN condition', async () =>
        {
            const query: RecordQuery = { price: { GREATER_THAN: 12 }};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.PEPPERONI));
        });

        it('should find records based on GREATER THAN OR EQUAL condition', async () =>
        {
            const query: RecordQuery = { price: { GREATER_THAN_OR_EQUALS: 12 }};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_GREATER_THAN_OR_EQUAL);
        });

        it('should find records based on IN condition', async () =>
        {
            const query: RecordQuery = { size: { IN: [ 16, 20, 25 ]}};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_IN_CONDITION);
        });

        it('should find records based on NOT IN condition', async () =>
        {
            const query: RecordQuery = { size: { NOT_IN: [ 15, 16, 20, 30 ]}};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.PEPPERONI));
        });

        it('should find records based on CONTAINS condition', async () =>
        {
            const query: RecordQuery = { name: { CONTAINS: 'her' }};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.MARGHERITA));
        });

        it('should find records based on STARTS_WITH condition', async () =>
        {
            const query: RecordQuery = { name: { STARTS_WITH: 'Ha' }};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.HAWAI));
        });

        it('should find records based on ENDS_WITH condition', async () =>
        {
            const query: RecordQuery = { name: { ENDS_WITH: 'one' }};
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.CALZONE));
        });

        it('should find records based on AND condition', async () =>
        {
            const query: RecordQuery = 
            {
                'AND':
                [
                    { 
                        'name': { EQUALS: PIZZAS.HAWAI.name },
                        'size': { NOT_EQUALS: 30 }                                                
                    }
                ]
            };

            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.HAWAI));
        });

        it('should find records based on OR condition', async () =>
        {
            const query: RecordQuery = 
            {
                'OR':
                [
                    { 'name': { EQUALS: PIZZAS.VEGETARIO.name } }, 
                    { 'size': { EQUALS: 18 } }
                ]
            };

            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);
 
            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_OR_CONDITION);
        });

        it('should find records based on AND with nested OR condition', async () =>
        {
            const query: RecordQuery = 
            {
                'AND':
                [
                    { 'name': { EQUALS: PIZZAS.CALZONE.name }},
                    {
                        'OR':
                        [
                            { 'size': { EQUALS: 2 }},
                            { 'folded': { EQUALS: true }}
                        ]
                    }
                ]
            };
            
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.CALZONE));
        });

        it('should find records based on OR with nested AND condition', async () =>
        {
            const query: RecordQuery =
            {
                'OR': 
                [
                    { 'size': { EQUALS: 18 }},
                    {
                        'AND': 
                        [
                            { 'folded': { EQUALS: false }},
                            { 'price': { GREATER_THAN: 11 }},
                            { 'price': { LESS_THAN: 13 }}
                        ]
                    }
                ]
            };

            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_OR_WITH_NESTED_AND);

        });

        it('should find no records that match the AND condition', async () =>
        {
            const query: RecordQuery = 
            {
                'AND':
                [
                    {
                        'name': { EQUALS: PIZZAS.HAWAI.name },
                        'size': { NOT_EQUALS: 20 }
                    }
                ]
            };

            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);

            expect(result[0]).toBe(undefined);
        });

        it('should find no records that match the OR condition', async () =>
        {
            const query: RecordQuery = 
            {
                'OR':
                [
                    { 'name': { EQUALS: INVALID_PIZZA_NAME } }, 
                    { 'size': { EQUALS: 21 } }
                ]
            };

            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query);
 
            expect(result[0]).toBe(undefined);
        });
    });

    describe('.sortRecords', () =>
    {
        it('should sort records ascending', async () =>
        {
            const query: RecordQuery = { };
            const sort: RecordSort = { 'name': SortDirections.ASCENDING };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query, undefined, sort);

            expect(result.length).toBe(5);
            expect(result).toMatchObject(QUERY_RESULTS.SORTED_ASCENDING);
        });

        it('should sort the records descending', async () =>
        {
            const query: RecordQuery = { };
            const sort: RecordSort = { 'size': SortDirections.DESCENDING };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query, undefined, sort);
            
            expect(result.length).toBe(5);
            expect(result).toMatchObject(QUERY_RESULTS.SORTED_DESCENDING);
        });

        it('should sort the records by multiple fields same direction', async () =>
        {
            const query: RecordQuery = { };
            const sort: RecordSort = { 'size': SortDirections.DESCENDING, 'name': SortDirections.DESCENDING };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query, undefined, sort );

            expect(result.length).toBe(5);
            expect(result).toMatchObject(QUERY_RESULTS.SORTED_BY_MULTIPLE_FIELDS_SAME_DIRECTION);
        });    

        it('should sort the records by multiple fields different direction', async () =>
        {
            const query: RecordQuery = { };
            const sort: RecordSort = { 'size': SortDirections.DESCENDING, 'name': SortDirections.ASCENDING };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, query, undefined, sort );

            expect(result.length).toBe(5);
            expect(result).toMatchObject(QUERY_RESULTS.SORTED_BY_MULTIPLE_FIELDS_DIFFERENT_DIRECTION);
        });

        describe('.limitNumberOfRecords', () =>
        {
            it('should limit the result', async () =>
            {
                const query: RecordQuery = { };
                const result = await database.searchRecords(RECORD_TYPE_PIZZA, query, undefined, undefined, 2);
                
                expect(result.length).toBe(2);
                expect(result).toMatchObject(QUERY_RESULTS.LIMITED_BY_NUMBER);
                expect(result[1]).toEqual(expect.objectContaining(PIZZAS.CALZONE));
            });
    
            it('should give the result starting an offset', async () =>
            {
                const query: RecordQuery = { };
                const result = await database.searchRecords(RECORD_TYPE_PIZZA, query, undefined, undefined, undefined, 2);
                
                expect(result.length).toBe(3);
                expect(result).toMatchObject(QUERY_RESULTS.LIMITED_BY_OFFSET);
            });
        });
    });
});
