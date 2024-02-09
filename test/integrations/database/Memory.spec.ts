
import { describe, expect, it } from 'vitest';
import
{
    FIRST_PIZZA,
    ID,
    IDS,
    INVALID_ID,
    PIZZAS,
    QUERY_RESULTS,
    RECORD_TYPE_FRUIT,
    RECORD_TYPE_PIZZA,
    RecordData,
    RecordNotFound, RecordNotUpdated,
    RecordSort,
    SEARCH_QUERIES,
    SortDirections,
    UPDATE_COUNTRY,
    database
} from './_fixtures/Memory.fixture';

describe('implementations/MemoryDb', () =>
{
    describe('.readRecord', () =>
    {
        it('should give all fields when no fields are specified', async () =>
        {
            const result = await database.readRecord(RECORD_TYPE_PIZZA, IDS.MARGHERITA);

            expect(result).toEqual(expect.objectContaining(PIZZAS.MARGHERITA));
        });

        it('should only give the fields specified', async () =>
        {
            const fields: string[] = [ID, 'folded'];
            const result = await database.readRecord(RECORD_TYPE_PIZZA, IDS.MARGHERITA, fields);

            expect(Object.keys(result).length).toBe(2);
            expect(result?.id).toBe(IDS.MARGHERITA);
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
        it('should delete the record', async () =>
        {
            await database.deleteRecord(RECORD_TYPE_FRUIT, IDS.APPLE);
            const result = database.readRecord(RECORD_TYPE_FRUIT, IDS.APPLE);

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
            const updateData: RecordData = { country: UPDATE_COUNTRY };
            await database.updateRecord(RECORD_TYPE_FRUIT, IDS.PEAR, updateData);
            const result = await database.readRecord(RECORD_TYPE_FRUIT, IDS.PEAR);

            expect(result?.country).toBe(UPDATE_COUNTRY);
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
            const result = await database.findRecord(RECORD_TYPE_PIZZA, SEARCH_QUERIES.EMPTY_QUERY);

            expect(result).toEqual(expect.objectContaining(FIRST_PIZZA));
        });

        it('should find no record', async () =>
        {
            const result = await database.findRecord(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_NO_RECORD_QUERY);

            expect(result).toBe(undefined);
        });
    });

    describe('.searchRecords', () =>
    {
        it('should find records based on EQUAL condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_EQUAL_CONDITION);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_EQUAL);
        });

        it('should find records based on NOT EQUAL condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_NOT_EQUAL_CONDITION);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_NOT_EQUAL);
        });

        it('should find records based on LESS THAN condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_LESS_THAN_CONDITION);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.VEGETARIO));
        });

        it('should find records based on LESS THAN OR EQUAL condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_LESS_THAN_OR_EQUAL_CONDITION);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_LESS_THAN_OR_EQUAL);
        });

        it('should find records based on GREATER THAN condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_GREATER_THAN_CONDITION);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.PEPPERONI));
        });

        it('should find records based on GREATER THAN OR EQUAL condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_GREATER_THAN_OR_EQUAL_CONDITION);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_GREATER_THAN_OR_EQUAL);
        });

        it('should find records based on IN condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_IN_CONDITION);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_IN_CONDITION);
        });

        it('should find records based on NOT IN condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_NOT_IN_CONDITION);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.PEPPERONI));
        });

        it('should find records based on CONTAINS condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_CONTAINS_CONDITION);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.MARGHERITA));
        });

        it('should find records based on STARTS_WITH condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_STARTS_WITH_CONDITION);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.HAWAI));
        });

        it('should find records based on ENDS_WITH condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_ENDS_WITH_CODITION);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.CALZONE));
        });

        it('should find records based on AND condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_AND_CONDITION);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.HAWAI));
        });

        it('should find records based on OR condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_OR_CONDITION);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_OR_CONDITION);
        });

        it('should find records based on AND with nested OR condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_AND_WITH_NESTED_OR_CONDITION);

            expect(result.length).toBe(1);
            expect(result[0]).toEqual(expect.objectContaining(PIZZAS.CALZONE));
        });

        it('should find records based on OR with nested AND condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_OR_WITH_NESTED_AND_CONDITION);

            expect(result.length).toBe(2);
            expect(result).toMatchObject(QUERY_RESULTS.BASED_ON_OR_WITH_NESTED_AND);

        });

        it('should find no records that match the AND condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_NO_RECORDS_BASED_ON_AND_CONDITION);

            expect(result[0]).toBe(undefined);
        });

        it('should find no records that match the OR condition', async () =>
        {
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_NO_RECORDS_BASED_ON_OR_CONDITION);

            expect(result[0]).toBe(undefined);
        });

        it('should find records by using all parameters', async () =>
        {
            const fields: string[] = ['name', 'size'];
            const sort: RecordSort = { 'name': SortDirections.DESCENDING };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.FIND_BASED_ON_USING_ALL_SEARCH_PARAMETERS, fields, sort, 1, 1);

            expect(result.length).toBe(1);
            expect(result[0].name).toEqual('Margherita');
            expect(result[0].size).toEqual(15);
        });
    });

    describe('.sortRecords', () =>
    {
        it('should sort records ascending', async () =>
        {
            const sort: RecordSort = { 'name': SortDirections.ASCENDING };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.EMPTY_QUERY, undefined, sort);

            expect(result.length).toBe(5);
            expect(result).toMatchObject(QUERY_RESULTS.SORTED_ASCENDING);
        });

        it('should sort the records descending', async () =>
        {
            const sort: RecordSort = { 'size': SortDirections.DESCENDING };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.EMPTY_QUERY, undefined, sort);

            expect(result.length).toBe(5);
            expect(result).toMatchObject(QUERY_RESULTS.SORTED_DESCENDING);
        });

        it('should sort the records by multiple fields same direction', async () =>
        {
            const sort: RecordSort = { 'size': SortDirections.DESCENDING, 'name': SortDirections.DESCENDING };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.EMPTY_QUERY, undefined, sort);

            expect(result.length).toBe(5);
            expect(result).toMatchObject(QUERY_RESULTS.SORTED_BY_MULTIPLE_FIELDS_SAME_DIRECTION);
        });

        it('should sort the records by multiple fields different direction', async () =>
        {
            const sort: RecordSort = { 'size': SortDirections.DESCENDING, 'name': SortDirections.ASCENDING };
            const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.EMPTY_QUERY, undefined, sort);

            expect(result.length).toBe(5);
            expect(result).toMatchObject(QUERY_RESULTS.SORTED_BY_MULTIPLE_FIELDS_DIFFERENT_DIRECTION);
        });

        describe('.limitNumberOfRecords', () =>
        {
            it('should limit the result', async () =>
            {
                const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.EMPTY_QUERY, undefined, undefined, 2);

                expect(result.length).toBe(2);
                expect(result).toMatchObject(QUERY_RESULTS.LIMITED_BY_NUMBER);
            });

            it('should give the result starting an offset', async () =>
            {
                const result = await database.searchRecords(RECORD_TYPE_PIZZA, SEARCH_QUERIES.EMPTY_QUERY, undefined, undefined, undefined, 2);

                expect(result.length).toBe(3);
                expect(result).toMatchObject(QUERY_RESULTS.LIMITED_BY_OFFSET);
            });
        });
    });
});
