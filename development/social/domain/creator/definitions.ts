
import type { Validation } from '@theshelf/validation';

import { type Identifier } from '@comify/common/primitives/identifier';

import { type Metrics } from '~/creator.metrics';
import { type ImageData } from '~/image';

import { type BaseRecord } from '../definitions';

export type Record = BaseRecord &
{
    readonly tenantId: string;
    readonly fullName: string;
    readonly nickname: string;
    readonly email: string;
    readonly portraitId?: string;
    readonly joinedAt: string;
};

export type FullName = string;
export type Nickname = string;
export type Email = string;

export type Creator = {
    readonly id: Identifier;
    readonly fullName: FullName;
    readonly nickname: Nickname;
    readonly portrait?: ImageData;
    readonly joinedAt: Date;
    readonly metrics: Metrics;
};

export const RECORD_TYPE = 'creator';
export const IMAGE_TYPE = 'portrait';

export const NICKNAME_STRING_PATTERN = '^[a-z0-9_]+$';
export const NICKNAME_MAX_LENGTH = 20;
export const FULL_NAME_MAX_LENGTH = 200;

export const fullNameValidation: Validation = {
    message: 'Value is empty or too long',
    STRING: {
        required: true,
        maxLength: FULL_NAME_MAX_LENGTH
    }
};
