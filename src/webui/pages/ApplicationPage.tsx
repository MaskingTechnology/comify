
import React from 'react';

import
{
    Avatar, Button, Column, Image,
    Paragraph
} from '../designsystem/module';

import
{
    ApplicationSidebar,
    CreatorPanel, CreatorCard, PostLarge, PostSmall, NotificationPanel,
    ReactionPanel, Comment
} from '../components/module';

import { ApplicationLayout } from '../layouts/module';

const navigation = [
    { icon: '/assets/icon1.svg', title: 'Timeline', to: '/' },
    { icon: '/assets/icon2.svg', title: 'Explore', to: '/explore' },
    { icon: '/assets/icon3.svg', title: 'Notifications', to: '/notifications' },
    { icon: '/assets/icon4.svg', title: 'Create', to: '/create' },
    { icon: '/assets/icon5.svg', title: 'Profile', to: '/profile' }
];

export default function AuthenticatedPage()
{
    const avatarLarge = <Avatar source='https://masking.tech/images/peter.jpg' size='large' />;
    const avatarMedium = <Avatar source='https://masking.tech/images/peter.jpg' size='medium' />;
    const avatarSmall = <Avatar source='https://masking.tech/images/peter.jpg' size='small' />;

    const card = <CreatorPanel
        avatar={avatarLarge}
        button={<Button text='Follow' />}
        username='Peter van Vliet'
        nickname='ErrorA'
        comics={417}
        followers={4032}
        following={276}
    />;

    const profileCard = <CreatorCard
        avatar={avatarLarge}
        button={<Button text='Edit' />}
        username='Peter van Vliet'
        nickname='ErrorA'
        joined={new Date()}
    />;

    const comic = <PostLarge
        avatar={avatarSmall}
        username='Peter van Vliet'
        responded={new Date('1984-01-01')}
        button={<Button text='Following' type='disabled' />}
        image='https://pbs.twimg.com/media/BYP9VB1CIAAP57m?format=jpg&name=small'
        likes={7}
        comments={2}
    />;

    const message = <Paragraph>Started following you. Hit the Follow button to follow back.</Paragraph>;
    const notification = <NotificationPanel
        avatar={avatarSmall}
        username='Peter van Vliet'
        responded={new Date('1984-05-01')}
        button={<Button text='Following' type='disabled' />}
        message={message}
    />;

    const postSmall = <PostSmall
        responded={new Date('1984-07-01')}
        button={<Button text='Following' type='disabled' />}
        source='https://pbs.twimg.com/media/BYP9VB1CIAAP57m?format=jpg&name=small'
        likes={7456}
        comments={2}
    />;

    const textComment = <ReactionPanel
        avatar={avatarMedium}
        username='Peter van Vliet'
        responded={new Date('1984-03-01')}
        button={<Button text='Following' type='disabled' />}
        likes={0}
        reaction={<Comment text='Comments cannot only be a comic, but can also contain text.' />}
    />;

    const comicComment = <ReactionPanel
        avatar={avatarMedium}
        username='Peter van Vliet'
        responded={new Date('1984-01-01')}
        button={<Button text='Following' type='disabled' />}
        likes={0}
        reaction={<Image width='533px' source='https://www.geluksroute.nu/storage/app/uploads/public/632/5d7/f3e/thumb_14184_600_600_0_0_auto.jpeg' />}
    />;

    const main = <Column gap='medium'>
        {card}
        {profileCard}
        {notification}
        {comic}
        {postSmall}
        {textComment}
        {comicComment}
    </Column>;

    const sidebar = <ApplicationSidebar navigation={navigation} />;

    return <ApplicationLayout main={main} aside={sidebar} />;
}
