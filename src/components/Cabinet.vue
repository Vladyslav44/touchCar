<template>
    <MainHeader />
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
    }
});
</script>

