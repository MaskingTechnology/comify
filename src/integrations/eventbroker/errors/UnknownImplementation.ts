
import EventBrokerError from './EventBrokerError';

export default class UnknownImplementation extends EventBrokerError
{
    constructor(name: string)
    {
        super(`Unknown event broker implementation: ${name}`);
    }
}
