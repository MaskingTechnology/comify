
import { type Validation } from '@theshelf/validation';

import { type BaseRecord } from '../definitions';

export type Record = BaseRecord & {
    readonly tenantId: string;
    readonly postId: string;
    readonly reporterId: string;
    readonly reason: string;
    readonly remark?: string;
    readonly reviewed: boolean;
    readonly createdAt: string;
};

export const Reasons = {
    SCAM_FRAUD_OR_SPAM: 'scam-fraud-or-spam',
    INAPPROPRIATE_CONTENT: 'inappropriate-content'
} as const;

type ReasonKeys = keyof typeof Reasons;

export type Reason = typeof Reasons[ReasonKeys];

export type Remark = string;

export const RECORD_TYPE = 'report';
export const REMARK_MAX_LENGTH = 1000;

export const reasonValidation: Validation = {
    message: 'Value is missing or not a valid reason',
    required: true,
    ENUM: { values: Object.values(Reasons) }
};

export const remarkValidation: Validation = {
    message: 'Value is too long',
    required: false,
    STRING: { maxLength: REMARK_MAX_LENGTH }
};
