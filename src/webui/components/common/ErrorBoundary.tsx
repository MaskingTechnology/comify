
import React from 'react';

type ViewProps = {
    error: unknown;
};

export type Props = {
    view: React.ComponentType<ViewProps>;
    children: React.ReactNode;
};

export type State = {
    error: unknown;
};

export default class Component extends React.Component<Props, State>
{
    #promiseHandler = (event: PromiseRejectionEvent) =>
    {
        event.preventDefault();

        this.setState({ error: event.reason });
    };

    constructor(props: Props)
    {
        super(props);

        this.state = { error: undefined };
    }

    static getDerivedStateFromError(error: unknown): State
    {
        return { error };
    }

    componentDidMount()
    {
        window.addEventListener('unhandledrejection', this.#promiseHandler);
    }

    componentWillUnmount()
    {
        window.removeEventListener('unhandledrejection', this.#promiseHandler);
    }

    render(): React.ReactNode
    {
        if (this.state.error !== undefined)
        {
            const View = this.props.view;

            return <View error={this.state.error} />;
        }

        return this.props.children;
    }
}
