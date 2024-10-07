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
                    @handleSendForm="handleSetValue"
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
    defineComponent, watch
} from 'vue';

import './MainForm.scss';

import mainCar from '../../assets/main-car.png';
import logo from '../../assets/touch-car-logo.svg';

import SendForm from "../SendForm/SendForm.vue";
import SegmentControl from "../SegmentControl/SegmentControl.vue";
import {
    THEME_MAP,
    TITLES_MAP,
    OPTIONS_MAP
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

        watch(currentStep, () => {
            console.log(carType.value, 'carType');
            console.log(carBudget.value, 'carBudget');
            console.log(engineType.value, 'engineType');
            console.log(presentType.value, 'presentType');
        })

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
            handleSetValue
        };
    }
});
</script>
