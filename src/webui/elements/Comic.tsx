
import React from 'react';

export type ComicProps = {
    source: string;
};

export default function Comic(props: ComicProps)
{
    return <img src={props.source} />;
}
