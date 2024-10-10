<template>
    <div class="send-header">
        <span class="send-header__title">
            ДЯКУЄМО ЗА ВІДПОВІДІ!
        </span>
        <span class="send-header__subtitle">
            ЗАЛИШТЕ СВОЇ ДАНІ ДЛЯ ЗВ'ЯЗКУ
        </span>
        <div class="send-header__description">
            <span class="send-header__description-attention">
                ВАЖЛИВО:
            </span>
            <span>
                ПЕРЕВІРТЕ ПРАВИЛЬНІСТЬ НОМЕРУ ТЕЛЕФОНУ
            </span>
        </div>
        <div class="send-header__name-input-container">
            <input
                v-model="name"
                :maxlength="MAX_INPUT_NAME_LENGTH"
                type="text"
                id="name"
                autocomplete="off"
                placeholder="ВАШЕ ІМ'Я"
                class="send-header__name-input"
            />
            <span
                v-if="maxInputLength"
                class="send-header__name-input-error"
            >
                Максимальна кількисть символів: 40
            </span>
        </div>
        <div class="send-header__phone-input-container">
            <VueTelInput
                v-model="phone"
                :default-country="'ua'"
                :only-countries="['ua']"
                :input-options="inputOptions"
                :dropdown-options="dropDownOptions"
                @input="onInput"
                class="send-header__phone-input"
            />
            <span
                v-if="isPhoneInvalid"
                class="send-header__phone-input-error"
            >
                Невалідний номер телефону!
            </span>
        </div>
        <button
            :disabled="isBtnDisabled"
            class="send_header__btn"
            @click="handleContinue"
        >
            ВІДПРАВИТИ
        </button>
    </div>
</template>

<script>
import {
    ref,
    computed,
    defineComponent
} from 'vue';

import { VueTelInput } from 'vue-tel-input';

import './SendForm.scss';
import 'vue-tel-input/vue-tel-input.css';

const MAX_INPUT_NAME_LENGTH = 40;
const NUMBER_COUNT = 12;

export default defineComponent({
    name: 'SendForm',
    components: {
        VueTelInput
    },
    emits: {
        handleSendForm: null
    },
    setup(_, { emit }) {
        const name = ref('')
        const phone = ref('')
        const isPhoneInvalid = ref(false)

        function handleContinue() {
            const params = {
                userName: name.value,
                userPhone: phone.value
            }
            emit('handleSendForm', params)
        }

        const maxInputLength = computed(() => name.value.length >= MAX_INPUT_NAME_LENGTH)
        const isBtnDisabled = computed(() => isPhoneInvalid.value
            || maxInputLength.value
            || name.value.length < 3
            || phone.value.length < NUMBER_COUNT
        )

        const inputOptions = {
            type: 'tel',
            placeholder: '00 00 0000'
        }

        const dropDownOptions = {
            disabled: true,
            showDialCodeInSelection: true
        }

        function onInput() {
            const isNumericOrSpace = /^[\d\s]*$/.test(phone.value);

            const spaceCount = (phone.value.match(/\s/g) || []).length;

            isPhoneInvalid.value =
                phone.value.length > NUMBER_COUNT ||
                !isNumericOrSpace ||
                spaceCount > 5;
        }

        return {
            MAX_INPUT_NAME_LENGTH,
            name,
            phone,
            inputOptions,
            dropDownOptions,
            maxInputLength,
            isBtnDisabled,
            isPhoneInvalid,
            onInput,
            handleContinue
        };
    }
});
</script>

