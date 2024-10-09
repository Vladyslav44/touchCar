<template>
    <div class="contacts-navigation">
        <a
            v-for="item in navigationItems"
            :href="item.href"
            target="_blank"
            class="contacts-navigation_link">
            <img
                :src="item.iconName"
                :alt="item.alt"
                class="contacts-navigation_item"
            >
        </a>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import tiktokLogo from '../../assets/tiktok.svg';
import facebookLogo from '../../assets/facebook.svg';
import instagramLogo from '../../assets/instagram.svg';
import telephoneLogo from '../../assets/telephone.svg';

import './ContactsNavigation.scss';

export default defineComponent({
    name: 'ContactsNavigation',
    setup() {
        const navigationItems = [
            {
                iconName: instagramLogo,
                href: 'https://www.instagram.com/_touchcar_/profilecard/?igsh=ejV4NmJqOXFlMzU4',
                alt: 'instagram-image'
            },
            {
                iconName: tiktokLogo,
                href: 'https://www.tiktok.com/@_touchcar_?_t=8qOqA44qEk9&_r=1',
                alt: 'tiktok-image'
            },
            {
                iconName: facebookLogo,
                href: 'https://www.facebook.com/touchcarkyiv',
                alt: 'facebook-image'
            },
            {
                iconName: telephoneLogo,
                href: 'tel:+380633529474',
                alt: 'telephone-image'
            }
        ]
        return {
            navigationItems,
        };
    }
});
</script>

