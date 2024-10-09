<template>
    <div class="main-header">
        <ContactsNavigation />
        <img
            :src="logo"
            alt="Car Logo"
            class="main-header__logo"
        >
        <span class="main-header__address">
            МИХАЙЛА БОЙЧУКА, 41, KYIV, UKRAINE
        </span>
        <div class="main-header__title">
            <span>
                ПРИДБАЙ АВТО  З США
            </span>
            <span class="main-header__title-sale">
                З ВИГОДОЮ В 40%
            </span>
        </div>
        <span class="main-header__description">
            ОБЕРИ АВТО ЗА КІЛЬКОМА КРИТЕРІЯМИ ТА ОТРИМАЙ ПРОФЕЙСІЙНУ КОНСУЛЬТАЦІЮ І ПОДАРУНОК
        </span>
        <button
            class="main-header__button"
            @click="handleClickBuyCar"
        >
            ПІДІБРАТИ АВТО
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

import './MainHeader.scss';
import logo from '../../assets/touch-car-logo.svg';
import ContactsNavigation from "../ContactsNavigation/ContactsNavigation.vue";

export default defineComponent({
    name: 'MainHeader',
    components: {
        ContactsNavigation
    },
    setup() {
        function handleClickBuyCar() {
            const scrollOffset = window.innerWidth < 580 ? 60 : 0;

            window.scrollTo({
                top: document.body.scrollHeight - window.innerHeight - scrollOffset,
                behavior: 'smooth'
            });
        }

        return {
            logo,
            handleClickBuyCar
        };
    }
});
</script>

