<template>
    <div class="main-form">
        <div class="main-form__container">
            <img
                :src="logo"
                alt="Car Logo"
                class="main-form__logo"
            >
            <div class="main-form__progress-container">
                <div
                    class="main-form__progress-bar"
                    :style="{ width: progressBarWidth + '%' }"
                >

                </div>
            </div>
            <span class="main-form__title">
                {{ mainTitle }}
            </span>
                <SegmentControl
                    v-if="step === 1"
                    v-model="carType"
                    :options="typeOfCarItems"
                    @update:modelValue="handleSetValue"
                />
                <SegmentControl
                    v-if="step === 2"
                    v-model="engineType"
                    :options="engineTypeItems"
                    class="main-form__engine-type"
                    @update:modelValue="handleSetValue"
                />
                <SegmentControl
                    v-if="step === 3"
                    v-model="carBudget"
                    :options="carBudgetItems"
                    class="main-form__car-budget"
                    @update:modelValue="handleSetValue"
                />
                <SegmentControl
                    v-if="step === 4"
                    v-model="presentType"
                    :options="presentTypeItems"
                    class="main-form__present-type"
                    @update:modelValue="handleSetValue"
                />
                <div v-if="step === 5">
                    <p>Тип машины: {{ carType }}</p>
                    <p>Тип двигателя: {{ engineType }}</p>
                    <p>Цена: {{ carBudget }}</p>
                    <p>Подарок: {{ presentType }}</p>
                </div>
            <button
                v-if="step > 1"
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
    reactive,
    defineComponent, computed
} from 'vue';

import './MainForm.scss';

import logo from '../../assets/touch-car-logo.svg';

import sedan from '../../assets/cars/sedan.png';
import minivan from '../../assets/cars/minivan.png';
import crossover from '../../assets/cars/crossover.png';
import offRaider from '../../assets/cars/offRaider.png';
import universal from '../../assets/cars/universal.png';
import hatchback from '../../assets/cars/hatchback.png';

import gas from '../../assets/engine/gas.png';
import petrol from '../../assets/engine/petrol.png';
import diesel from '../../assets/engine/diesel.png';
import hybrid from '../../assets/engine/hybrid.png';
import electric from '../../assets/engine/electric.png';

import SegmentControl from "../SegmentControl/SegmentControl.vue";

export default defineComponent({
    name: 'MainForm',
    components: {
        SegmentControl
    },
    setup() {
        const step = ref(1);

        const carType = ref();
        const carBudget = ref();
        const presentType = ref();
        const engineType = ref();

        const progressBarWidth = computed(() => (step.value / 5) * 100);

        const mainTitle = computed(() => {
            const TITLES_MAP = {
                1: 'ОБЕРІТЬ ТИП КУЗОВА',
                2: 'ВИД ПАЛИВА',
                3: 'БЮДЖЕТ НА АВТО',
                4: 'ОБЕРІТЬ ПОДАРУНОК'
            }

            return TITLES_MAP[step.value];
        })

        const typeOfCarItems = [
            { value: 'sedan', label: 'СЕДАН', icon: sedan },
            { value: 'hatchback', label: 'ХЕТЧБЕК', icon: hatchback },
            { value: 'universal', label: 'УНІВЕРСАЛ', icon: universal },
            { value: 'crossover', label: 'КРОСОВЕР', icon: crossover },
            { value: 'minivan', label: 'МІНІВЕН', icon: minivan },
            { value: 'offRaider', label: 'ПОЗАШЛЯХОВИК', icon: offRaider },
            { value: 'undecided', label: 'НЕ ВИЗНАЧИВСЯ/НЕ ВАЖЛИВО' }
        ];

        const engineTypeItems = [
            { value: 'petrol', label: 'БЕНЗИНОВЫЙ', icon: petrol },
            { value: 'diesel', label: 'ДИЗЕЛЬНЫЙ', icon: diesel },
            { value: 'electric', label: 'ЭЛЕКТРИЧЕСКИЙ', icon: electric },
            { value: 'hybrid', label: 'ГИБРИДНЫЙ', icon: hybrid },
            { value: 'gas', label: 'ГАЗ', icon: gas },
            { value: 'undecided', label: 'НЕ ОПРЕДЕЛИЛСЯ' }
        ];

        const carBudgetItems = [
            { value: '<10000', label: 'ДО 10000$' },
            { value: '15000', label: '10000 - 15000$' },
            { value: '20000', label: '15000 - 20000$' },
            { value: '25000', label: '20000 - 25000$' },
            { value: '25000>', label: '25000$' }
        ];

        const presentTypeItems = [
            { value: 'interior-cleaning', label: 'ХІМЧІСТКА САЛОНУ' },
            { value: 'polishing', label: 'КОСМЕТИЧНЕ ПАЛІРУВАННЯ' },
            { value: 'full-tank', label: 'ПОВНИЙ БАК БЕНЗИНУ' },
            { value: 'tinting', label: 'ТОНУВАННЯ АВТО' },
            { value: 'fluids-filters', label: 'ЗАМІНА РІДИН ТА ФІЛЬТРІВ' }
        ];

        function handleSetValue() {
            step.value++
        }

        function handlePrevStep() {
            switch (step.value) {
                case 5:
                    presentType.value = null; // Очистка подарка
                    break;
                case 4:
                    carBudget.value = null; // Очистка бюджета
                    break;
                case 3:
                    engineType.value = null; // Очистка типа двигателя
                    break;
                case 2:
                    carType.value = null; // Очистка типа машины
                    break;
            }
            step.value--;
        }


        return {
            logo,
            progressBarWidth,
            mainTitle,
            step,
            engineType,
            presentType,
            carBudget,
            presentTypeItems,
            carBudgetItems,
            typeOfCarItems,
            engineTypeItems,
            carType,
            handlePrevStep,
            handleSetValue
        };
    }
});
</script>
