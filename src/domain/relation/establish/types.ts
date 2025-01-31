
import { Publication, Subscription } from '^/integrations/eventbroker';

import { DataModel } from '../types';

export type ValidationModel = Pick<DataModel, 'followerId' | 'followingId'>;

export type EstablishedEventData = {
    followerId: string;
    followingId: string;
};

export type EstablishedPublication = Publication<EstablishedEventData>;
export type EstablishedSubscription = Subscription<EstablishedEventData>;

export type EstablishedEventHandler = (followerId: string, followingId: string) => void;
