
import React from 'react';

import type CreatorView from '../../../domain/creator/view/CreatorView';

import { ApplicationSidebar, ErrorCatcher } from '../../components/module';
import { ApplicationLayout } from '../../layouts/module';
import ErrorHandler from '../../features/ErrorHandler';

import { useAppContext } from '../../AppContext';

export type Props = {
    children: React.ReactNode;
};

export default function Template({ children }: Props)
{
    const context = useAppContext();
    const identity = context.identity as CreatorView;

    const main = <ErrorCatcher view={ErrorHandler}>{children}</ErrorCatcher>;
    const sidebar = <ApplicationSidebar identity={identity} />;

    return <ApplicationLayout main={main} aside={sidebar} />;
}
