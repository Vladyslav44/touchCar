<template>
    <div
        class="segment-control"
        :class="themeClass"
    >
        <label
            v-for="item in options"
            :key="item.label"
            class="segment-control__item"
        >
            <input
                v-model="localValue"
                :value="item.value"
                :name="name"
                type="radio"
                class="segment-control__input"
            >
            <div
                v-if="item.icon"
                class="segment-control__icon-block"
            >
                <img
                    :src="item.icon"
                    alt="img"
                    class="segment-control__img"
                />
            </div>
            <div class="segment-control__label">
                {{ item.label }}
            </div>
        </label>
    </div>
</template>

<script lang="ts">

import {
    computed,
    defineComponent
} from 'vue';

import './SegmentControl.scss';
import { generateId } from '../../services/utils-services.js';

export default defineComponent({
    name: 'SegmentControl',
    props: {
        modelValue: {
            type: null,
            default: null
        },
        name: {
            type: String,
            default: generateId()
        },
        options: {
            type: Array,
            required: true
        },
        theme: {
            type: String,
            required: true
        }
    },
    emits: {
        'update:modelValue': null
    },
    setup(props, { emit }) {
        const themeClass = computed(() => `segment-control--${props.theme}`);

        const localValue = computed({
            get() {
                return props.modelValue;
            },
            set(value) {
                emit('update:modelValue', value);
            }
        });

        return {
            themeClass,
            localValue
        };
    }
});
</script>
