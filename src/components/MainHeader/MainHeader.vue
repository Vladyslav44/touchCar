<template>
    <div class="main-header">
        <ContactsNavigation />
        <img
            :src="logo"
            alt="Car Logo"
            class="main-header__logo"
        >
        <div class="main-header__address">
            МИХАЙЛА БОЙЧУКА, 41, KYIV, UKRAINE
        </div>
        <div class="main-header__title">
            <span>
                ПРИДБАЙ АВТО  З США
            </span>
            <span class="main-header__title-sale">
                З ВИГОДОЮ В 40%
            </span>
        </div>
        <div class="main-header__description">
            ОБЕРИ АВТО ЗА КІЛЬКОМА КРИТЕРІЯМИ ТА ОТРИМАЙ ПРОФЕЙСІЙНУ КОНСУЛЬТАЦІЮ І ПОДАРУНОК
        </div>
        <button
            class="main-header__button"
            @click="handleClick"
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
    emits: {
        clickBuyAuto: null
    },
    setup(_, { emit }) {
        function handleClick() {
            /**
             * Emitted when the button has been clicked.
             */
            emit('clickBuyAuto')
        }

        return {
            logo,
            handleClick
        };
    }
});
</script>

