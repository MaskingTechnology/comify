
import { beforeEach, describe, expect, it } from 'vitest';

import eventBroker from '^/integrations/eventbroker';

import { createSubscription, EVENT_BROKERS, EVENTS } from './fixtures';

beforeEach(async () =>
{
    await EVENT_BROKERS.empty();
});

describe('integrations/eventbroker/implementation', () =>
{
    describe('publish and subscribe', () =>
    {
        it('should publish to multiple subscribers', async () =>
        {
            const subscription1 = createSubscription(EVENTS.FIRST_CREATED);
            const subscription2 = createSubscription(EVENTS.FIRST_CREATED);

            await eventBroker.publish(EVENTS.FIRST_CREATED);

            const [data1, data2] = await Promise.all([subscription1, subscription2]);

            expect(data1).toStrictEqual(EVENTS.FIRST_CREATED.data);
            expect(data2).toStrictEqual(EVENTS.FIRST_CREATED.data);
        });

        it('should publish to different channels', async () =>
        {
            const firstSubscription = createSubscription(EVENTS.FIRST_CREATED);
            const secondSubscription = createSubscription(EVENTS.SECOND_CREATED);

            await eventBroker.publish(EVENTS.FIRST_CREATED);
            await eventBroker.publish(EVENTS.SECOND_CREATED);

            const [firstData, secondData] = await Promise.all([firstSubscription, secondSubscription]);

            expect(firstData).toStrictEqual(EVENTS.FIRST_CREATED.data);
            expect(secondData).toStrictEqual(EVENTS.SECOND_CREATED.data);
        });
    });
});
