
import React from 'react';

import
{
    Avatar, Button, Column, Image,
    Paragraph
} from '../designsystem/module';

import
{
    CreatorPanel, CreatorCard, PostLarge, PostSmall, NotificationPanel,
    Identity, Navigation, NavigationItem, Logo, Reaction, Comment
} from '../components/module';

import iconImage from '../../assets/icon.svg';
import Authenticated from '../layouts/authenticated/Authenticated.js';

export default function HomePage()
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

    const textComment = <Reaction
        avatar={avatarMedium}
        username='Peter van Vliet'
        responded={new Date('1984-03-01')}
        button={<Button text='Following' type='disabled' />}
        likes={0}
        reaction={<Comment text='Comments cannot only be a comic, but can also contain text.' />}
    />;

    const comicComment = <Reaction
        avatar={avatarMedium}
        username='Peter van Vliet'
        responded={new Date('1984-01-01')}
        button={<Button text='Following' type='disabled' />}
        likes={0}
        reaction={<Image width='533px' source='https://www.geluksroute.nu/storage/app/uploads/public/632/5d7/f3e/thumb_14184_600_600_0_0_auto.jpeg' />}
    />;

    const main = <Column gap='medium' align='justify'>
        {card}
        {profileCard}
        {notification}
        {comic}
        {postSmall}
        {textComment}
        {comicComment}
    </Column>;

    const sidebar = <Column gap='large' align='top'>
        <Logo />
        <Navigation>
            <NavigationItem icon={<Image source={iconImage} width='13px' />} text='Diamond' to='/diamond' />
            <NavigationItem icon={<Image source={iconImage} width='13px' />} text='Profile' to='/profile' />
            <NavigationItem icon={<Image source={iconImage} width='13px' />} text='Home' to='/' />
            <NavigationItem icon={<Image source={iconImage} width='13px' />} text='Error' to='/error' />
        </Navigation>
        <Identity
            avatar={avatarMedium}
            username='Peter van Vliet'
            nickname='ErrorA'
        />
    </Column>;

    return <Authenticated main={main} aside={sidebar} />;
}
