<template>
    <div class="main-form">
        <div class="main-form__container">
            <div class="main-form__container-header">
                <img
                    :src="mainCar"
                    alt="main-car"
                    class="main-form__car"
                />
                <img
                    :src="logo"
                    alt="car-logo"
                    class="main-form__logo"
                />
                <div class="main-form__progress-container">
                    <div
                        class="main-form__progress-bar"
                        :style="{ width: progressBarWidth + '%' }"
                    />
                </div>
                <span class="main-form__title">
                {{ title }}
                </span>
            </div>
            <SegmentControl
                v-if="isShowMainStepsBlock"
                v-model="valueOfStep"
                :theme="componentThemeByStep"
                :options="options"
                @update:modelValue="handleSetValue"
            />
            <div v-if="isShowForm">
                <SendForm
                    @handleSendForm="handleSendForm"
                />
            </div>
            <div
                v-if="isShowConclusion"
                class="main-form__conclusion"
            >
                <span class="main-form__conclusion-title">
                    ВАШУ ЗАЯВКУ ПРИЙНЯТО!
                </span>
                <span class="main-form__conclusion-subtitle">
                    НАШ МЕНЕДЖЕР ЗВ'ЯЖЕТЬСЯ З ВАМИ НАЙБЛИЖЧИМ ЧАСОМ
                </span>
            </div>
            <button
                v-if="isShowBackBtn"
                @click="handlePrevStep"
                class="main-form__back-btn"
            >
                Назад
            </button>
        </div>
    </div>
</template>

<script>
import {
    ref,
    computed,
    defineComponent
} from 'vue';

import './MainForm.scss';

import mainCar from '../../assets/main-car.png';
import logo from '../../assets/touch-car-logo.svg';

import SendForm from "../SendForm/SendForm.vue";
import SegmentControl from "../SegmentControl/SegmentControl.vue";
import {
    THEME_MAP,
    TITLES_MAP,
    OPTIONS_MAP,
    CAR_BUDGET_ITEMS,
    TYPE_OF_CAR_ITEMS,
    ENGINE_TYPE_ITEMS,
    PRESENT_TYPE_ITEMS
} from "./form-constants";

export default defineComponent({
    name: 'MainForm',
    components: {
        SendForm,
        SegmentControl
    },
    setup() {
        const currentStep = ref(1);

        const carType = ref();
        const carBudget = ref();
        const presentType = ref();
        const engineType = ref();

        const progressBarWidth = computed(() => (currentStep.value / 6) * 100);
        const isShowMainStepsBlock = computed(() => ![5, 6].includes(currentStep.value));
        const isShowBackBtn = computed(() => currentStep.value > 1);
        const isShowForm = computed(() => currentStep.value === 5);
        const isShowConclusion = computed(() => currentStep.value === 6);

        const title = computed(() => TITLES_MAP[currentStep.value])
        const options = computed(() => OPTIONS_MAP[currentStep.value])

        const componentThemeByStep = computed(() => THEME_MAP[currentStep.value])

        const valueOfStep = computed({
            get() {
                const TYPE_VALUE_MAP = {
                    1: carType.value,
                    2: engineType.value,
                    3: carBudget.value,
                    4: presentType.value
                };
                return TYPE_VALUE_MAP[currentStep.value];
            },
            set(value) {
                const TYPE_SETTER_MAP = {
                    1: () => carType.value = value,
                    2: () => engineType.value = value,
                    3: () => carBudget.value = value,
                    4: () => presentType.value = value
                };

                TYPE_SETTER_MAP[currentStep.value]?.();
            }
        });

        function handleSetValue() {
            currentStep.value++
        }

        function handleSendForm(params) {
            const selectedCarType = TYPE_OF_CAR_ITEMS.find(item => item.value === carType.value).label;
            const carEngineType = ENGINE_TYPE_ITEMS.find(item => item.value === engineType.value).label;
            const carBudgetType = CAR_BUDGET_ITEMS.find(item => item.value === carBudget.value).label;
            const presentTypeForCar = PRESENT_TYPE_ITEMS.find(item => item.value === presentType.value).label;

            const message = `
*Нове замовлення на автомобіль!*

*Тип кузова:* ${selectedCarType}
*Тип пального:* ${carEngineType}
*Бюджет:* ${carBudgetType}
*Подарунок:* ${presentTypeForCar}

*Контактна інформація:*
*Ім'я:* ${params.userName}
*Телефон:* ${params.userPhone}
`;

            sendMessageToTelegram(message);
        }

        function sendMessageToTelegram(message) {
            const botToken = '7601493897:AAGeRor1YMuuvSUk1ZV_o_f6s0haJE44o4k';
            const chatIds = ['284774765', '422631602', '367093977']; // Массив chat_id

            chatIds.forEach(chatId => {
                fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'Markdown',
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(`Message sent successfully to ${chatId}`, data);
                        // handleSetValue(); // Вызов функции после отправки
                    })
                    .catch((error) => {
                        console.error(`Error sending message to ${chatId}:`, error);
                    });
            });
            handleSetValue();
        }


        function handlePrevStep() {
            const stepClearActions = {
                5: () => presentType.value = undefined,
                4: () => carBudget.value = undefined,
                3: () => engineType.value = undefined,
                2: () => carType.value = undefined
            };

            stepClearActions[currentStep.value]?.();
            currentStep.value--;
        }

        return {
            carType,
            carBudget,
            presentType,
            engineType,
            logo,
            title,
            mainCar,
            options,
            isShowForm,
            currentStep,
            valueOfStep,
            isShowBackBtn,
            isShowConclusion,
            progressBarWidth,
            isShowMainStepsBlock,
            componentThemeByStep,
            handlePrevStep,
            handleSetValue,
            handleSendForm
        };
    }
});
</script>
