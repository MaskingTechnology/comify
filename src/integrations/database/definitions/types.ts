
import { QueryOperators, SortDirections } from './constants';

export type RecordType = string;
export type RecordId = string;

export type RecordField = string;
export type RecordValue = unknown;
export type RecordData = Record<RecordField, RecordValue>;

export type QueryOperator = keyof typeof QueryOperators;
export type QueryExpression = Partial<Record<QueryOperator, RecordValue>>;
export type QuerySingleExpressionStatement = Record<RecordField, QueryExpression>;
export type QueryMultiExpressionStatement = Partial<Record<'AND' | 'OR', QuerySingleExpressionStatement[]>>;
export type QuerySingleStatement = QuerySingleExpressionStatement | QueryMultiExpressionStatement;
export type QueryMultiStatement = Partial<Record<'AND' | 'OR', QuerySingleStatement[]>>;
export type QueryStatement = QuerySingleStatement | QueryMultiStatement;
export type RecordQuery = QueryStatement;

export type RecordDirection = keyof typeof SortDirections;
export type RecordSort = Record<RecordField, string>;