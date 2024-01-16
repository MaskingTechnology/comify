/*************************************************************************************

# INTRODUCTION

This module provides a consistent interface for the domain layer to interact with the database layer.
It's designed as a lightweight wrapper around the database implementation, which is currently MongoDB.

# EXAMPLES OF USAGE

```ts
import {
    RecordQuery, RecordSort, SortDirections,
    createRecord, readRecord, updateRecord, deleteRecord, findRecord, searchRecords
} from 'path/to/integrations/database/module';

// INSERT INTO items (name, quantity) VALUES (?, ?)
const id = await createRecord(ITEM_COLLECTION, { 'name': name, 'quantity': quantity });

// SELECT * FROM items WHERE id = ?
const record = await readRecord(ITEM_COLLECTION, id);

// SELECT * FROM items
const records = await searchRecords(ITEM_COLLECTION, {});

// SELECT id FROM items
const records = await searchRecords(ITEM_COLLECTION, {}, ['id']);

// UPDATE items SET name = ? WHERE id = ?
await updateRecord(ITEM_COLLECTION, item.id, { 'name': name });

// DELETE FROM items WHERE id = ?
await deleteRecord(ITEM_COLLECTION, item.id);

// SELECT * FROM items WHERE name LIKE "%?%" ORDER BY name ASC LIMIT ? OFFSET ?
const query: RecordQuery = { 'name': { CONTAINS: name }};
const sort: RecordSort = { 'name': SortDirections.ASCENDING };
const records = await searchRecords(ITEM_COLLECTION, query, undefined, sort, limit, offset);

// SELECT * FROM items WHERE name LIKE "?%" OR name LIKE "%?" ORDER BY name ASC, quantity DESC LIMIT ? OFFSET ?;
const query: RecordQuery = { OR: [ { 'name': { STARTS_WITH: name } }, { 'name': { ENDS_WITH: name } } ] };
const sort: RecordSort = { 'name': SortDirections.ASCENDING, 'quantity': SortDirections.DESCENDING };
const records = await searchRecords(ITEM_COLLECTION, query, undefined, sort, limit, offset);
```

*************************************************************************************/

export * from './definitions/constants.js';
export * from './definitions/types.js';
export * from './definitions/errors.js';

export { default } from './implementation.js';
