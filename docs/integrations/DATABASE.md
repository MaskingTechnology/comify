
# Database | Comify docs

## Introduction

The database integration provides a universal interaction layer with an actual data storage solution.

This integration is based on simple CRUD operations and purposely does NOT support relational querying.

## Implementations

Currently, there are two implementations:

* **Memory** - non-persistent in memory storage (used for testing).
* **MongoDB** - persistent document storage (used in production).

## Configuration

The used implementation needs to be configured in the `.env` file.

```env
DATABASE_IMPLEMENTATION="mongodb" # (memory | mongodb)
```

In case of MongoDB, additional configuration is required.

```env
MONGODB_CONNECTION_STRING="mongodb://development:development@localhost:27017"
MONGODB_DATABASE_NAME="comify"
```

## How to use

An instance of the configured implementation can be imported for performing database operations.

```ts
import database from '^/integrations/database';

// Perform operations with the database instance
```

### Operations

```ts
import database, { RecordData, RecordQuery, RecordSort, SortDirections } from '^/integrations/database';

// Open connection
await database.connect();

// Close connection
await database.disconnect();

// INSERT INTO items (name, quantity) VALUES (?, ?)
const id: string = await database.createRecord('items', { name: 'Popcorn', quantity: 3 });

// SELECT * FROM items WHERE id = ?
// Throws RecordNotFound if not found
const record: RecordData = await database.readRecord('items', id);

// SELECT name FROM items WHERE id = ?
const record: RecordData = await database.readRecord('items', id, ['name']);

// SELECT * FROM items WHERE id = ? LIMIT 1 OFFSET 0
const records: RecordData | undefined = await database.findRecord('items', { id });

// SELECT * FROM items
const records: RecordData[] = await database.searchRecords('items', {});

// SELECT name FROM items
const records: RecordData[] = await database.searchRecords('items', {}, ['name']);

// UPDATE items SET name = ? WHERE id = ?
// Throws RecordNotFound if not found
await database.updateRecord('items', item.id, { 'name': item.name });

// DELETE FROM items WHERE id = ?
// Throws RecordNotFound if not found
await database.deleteRecord('items', item.id);

// SELECT * FROM items WHERE name LIKE "%?%" ORDER BY name ASC LIMIT ? OFFSET ?
const query: RecordQuery = { name: { CONTAINS: name }};
const sort: RecordSort = { name: SortDirections.ASCENDING };
const records: RecordData[] = await database.searchRecords('items', query, undefined, sort, limit, offset);

// SELECT name FROM items WHERE name LIKE "?%" OR name LIKE "%?" ORDER BY name ASC, quantity DESC LIMIT ? OFFSET ?;
const query: RecordQuery = { OR: [ { name: { STARTS_WITH: name } }, { name: { ENDS_WITH: name } } ] };
const sort: RecordSort = { name: SortDirections.ASCENDING, quantity: SortDirections.DESCENDING };
const records: RecordData[] = await database.searchRecords('items', query, ['name'], sort, limit, offset);
```

### Query options

A basic query has the following structure.

```ts
const query: RecordQuery = { fieldName1: { OPERATOR: value }, fieldName2: { OPERATOR: value }, ...  }
```

The following operators are supported: `EQUALS`, `NOT_EQUALS`, `LESS_THAN`, `LESS_THAN_OR_EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUALS`, `IN`, `NOT_IN`, `CONTAINS`, `STARTS_WITH`, `ENDS_WITH`

Multiple queries can be grouped using the logical operators: `AND`, `OR`.

```ts
const andQuery: RecordQuery = { AND: [ query1, query2, ...]  }
const orQuery: RecordQuery = { OR: [ query1, query2, ...]  }
```

### Sort options

A basic query has the following structure.

```ts
const sort: RecordSort = { fieldName1: DIRECTION, fieldName2: DIRECTION, ... };
```

The following directions are supported: `ASCENDING`, `DESCENDING`. Both are defined in the `SortDirections` enum.

```ts
const sort: RecordSort = { fieldName1: SortDirections.ASCENDING, fieldName2: SortDirections.DESCENDING, ... };
```

The sort will be performed in the configured order.
