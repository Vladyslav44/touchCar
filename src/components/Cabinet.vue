<template>
    <MainHeader
        @clickBuyAuto="handleClick"
    />
    <MainForm />
</template>

<script>

import {
    defineComponent
} from "vue";

import MainForm from "./MainForm/MainForm.vue";
import MainHeader from "./MainHeader/MainHeader.vue";

export default defineComponent({
    name: 'Cabinet',
    components: {
        MainForm,
        MainHeader
    },
    setup() {

        function handleClick() {
            window.scrollTo({
                top: window.scrollY + 500, // edit it and do better, scroll to block MainForm
                behavior: 'smooth'
            });
        }

        return {
            handleClick
        };
    }
});
</script>

