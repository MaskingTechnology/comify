
import ConnectionManager from '@theshelf/connection';
import EventBroker, { MemoryDriver } from '@theshelf/events';
import { KafkaDriver } from '@theshelf/events-driver-kafka';

import { shelfLogger } from '^/integrations/logging';

function setUpMemory(): MemoryDriver
{
    return new MemoryDriver();
}

function setUpKafka(): KafkaDriver
{
    return new KafkaDriver({
        brokers: [process.env.KAFKA_BROKER ?? ''],
        groupId: process.env.KAFKA_GROUP_ID ?? '',
        clientId: process.env.KAFKA_CLIENT_ID ?? ''
    });
}

export const driver = process.env.EVENT_BROKER_DRIVER === 'kafka'
    ? setUpKafka()
    : setUpMemory();

const eventBroker = new EventBroker(driver, shelfLogger);

const connectionManager = new ConnectionManager({
    name: 'Event broker',
    connectable: eventBroker
}, shelfLogger);

export { eventBroker as default, connectionManager };
