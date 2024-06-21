
import { ComponentType, Component as ReactComponent, ReactNode } from 'react';

type ViewProps = {
    error: unknown;
};

type Props = {
    readonly element: ComponentType<ViewProps>;
    readonly children: ReactNode;
};

export type State = {
    error: unknown;
};

export default class Component extends ReactComponent<Props, State>
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

    render(): ReactNode
    {
        if (this.state.error !== undefined)
        {
            const Element = this.props.element;

            return <Element error={this.state.error} />;
        }

        return this.props.children;
    }
}
