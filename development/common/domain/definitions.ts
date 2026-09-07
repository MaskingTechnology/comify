
import { type EventHandler as BaseEventHandler } from '@theshelf/events';

import { type TenantId } from '^/domain/tenant';
import { type ContextId } from '^/primitives/context';
import { type Identifier } from '^/primitives/identifier';

export { type BaseEventHandler };

export type BaseEventData = {
    readonly contextId: ContextId;
    readonly tenantId: TenantId;
    readonly principalId: Identifier;
};

export type BaseRecord = {
    readonly id: Identifier;
};
