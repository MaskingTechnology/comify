
import React from 'react';

type ViewProps = {
    error: unknown;
};

type Props = {
    element: React.ComponentType<ViewProps>;
    children: React.ReactNode;
};

export type State = {
    error: unknown;
};

export default class Component extends React.Component<Props, State>
{
    #promiseHandler = (event: PromiseRejectionEvent) =>
    {
        this.setState({ error: event.reason });

        event.preventDefault();
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

    componentDidMount(): void
    {
        window.addEventListener('unhandledrejection', this.#promiseHandler);
    }

    componentWillUnmount(): void
    {
        window.removeEventListener('unhandledrejection', this.#promiseHandler);
    }

    render(): React.ReactNode
    {
        if (this.state.error !== undefined)
        {
            const Element = this.props.element;

            return <Element error={this.state.error} />;
        }

        return this.props.children;
    }
}
