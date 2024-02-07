
import React, { useState, useEffect } from 'react';

import type PostView from '../../domain/post/view/PostView';

import { Column } from '../designsystem/module';

import { PostPanelGrid } from '../components/module';

export default function Feature()
{
    const [posts, setPosts] = useState<PostView[]>([]);

    const getPosts = async () =>
    {
        const posts: PostView[] = [];
        setPosts(posts);
    };

    useEffect(() => { getPosts(); }, []);

    return <Column gap='small' alignX='stretch'>
        <PostPanelGrid posts={posts} />
    </Column>;
}
