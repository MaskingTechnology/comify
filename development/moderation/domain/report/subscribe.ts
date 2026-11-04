
import { EVENT_NAME } from '@comify/common/domain/report/added/definitions';
import { EVENT_TOPIC, type EventData } from '@comify/common/domain/report/definitions';
import eventBroker from '@comify/common/integrations/events';
import { type Reason } from '@comify/moderation/domain/report';

import create from './create';

export default async function subscribe(): Promise<void>
{
    return eventBroker.subscribe<EventData>({ topic: EVENT_TOPIC, name: EVENT_NAME, handler: onReportAdded });
}

async function onReportAdded(data: EventData): Promise<void>
{
    await create({ principalId: data.principalId, tenantId: data.tenantId }, { postId: data.postId, reason: data.reason as Reason, remark: data.remark });
}
