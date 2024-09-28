<template>
    <div class="segment-control">
        <label
            v-for="item in localOptions"
            :key="item.label"
            :class="item.selectedClass"
            class="segment-control__item"
        >
            <input
                v-model="localValue"
                :value="item.value"
                :name="name"
                type="radio"
                class="segment-control__input"
            >
            <img
                v-if="item.icon"
                :src="item.icon"
                alt="img"
                class="segment-control__img"
            >
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
        }
    },
    emits: {
        'update:modelValue': null
    },
    setup(props, { emit }) {
        const localOptions = computed(() => {
            return props.options.map(item => {
                const isChecked = item.value === props.modelValue;
                return {
                    ...item,
                    isChecked,
                    selectedClass: isChecked ? 'segment-control__item--selected' : null
                };
            });
        });

        const localValue = computed({
            get() {
                return props.modelValue;
            },
            set(value: boolean | string | null) {
                /**
                 * Emit on change input value
                 * @property { String | Boolean | Null } value
                 */
                console.log(value)
                emit('update:modelValue', value);
            }
        });

        return {
            localValue,
            localOptions
        };
    }
});
</script>
