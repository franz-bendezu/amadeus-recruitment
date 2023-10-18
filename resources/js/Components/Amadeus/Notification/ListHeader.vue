<template>
    <div class="notification-header">
        <div class="notification-header-content">
            <div class="notification-header-title my-1">Notificaciones</div>
            <div class="notification-header-filter ml-3">
                <Dropdown
                    align="left"
                    width="48"
                    container-classes="border border-gray-300 rounded-md"
                    content-classes="my-0"
                >
                    <template #trigger>
                        <button
                            class="notification-header-filter-button text-xs"
                        >
                            <div class="text-gray-400">
                                {{ modelSync?.value || "Todos" }}
                            </div>
                            <i class="fa-light fa-chevron-down text-gray-400" />
                        </button>
                    </template>

                    <template #content>
                        <ul class="list-group">
                            <li
                                class="list-group-item text-xs py-1"
                                v-for="model in modelOptions"
                                :key="model.key"
                            >
                                <button
                                    class="dropdown-item"
                                    @click="selectModel(model)"
                                >
                                    {{ model.value }}
                                </button>
                            </li>
                        </ul>
                    </template>
                </Dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, PropType } from "vue";
import Dropdown from "@/Components/Amadeus/AmadeusDropdown.vue";
import { NOTIFICATION_MODELS } from "@/constants/notification.constant";
import { IBaseOption } from "@/interfaces/option.interface";

const props = defineProps({
    modelValue: {
        type: Object as PropType<IBaseOption>,
        required: true,
    },
});
const emit = defineEmits(["update:modelValue"]);
const modelOptions = computed(() => {
    return [
        {
            key: "",
            value: "Todo",
        },
    ].concat(
        Object.entries(NOTIFICATION_MODELS).map(([key, value]) => ({
            key,
            value,
        }))
    );
});
const modelSync = computed({
    get() {
        return props.modelValue;
    },
    set(value: IBaseOption) {
        emit("update:modelValue", value);
    },
});

const selectModel = (model: IBaseOption) => {
    modelSync.value = model;
};
</script>

<style scoped>
.notification-list .notification-header {
    gap: 94px;
    padding: 12px 16px;
    align-self: stretch;
    width: 100%;
    display: flex;
    align-items: flex-start;
    position: relative;
    flex: 0 0 auto;
}

.notification-list .notification-header-content {
    height: 21px;
    position: relative;
    flex: 1;
    flex-grow: 1;
}

.notification-list .notification-header-title {
    position: relative;
    font-weight: 500;
    color: #222038;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
}

.notification-list .notification-header-filter {
    display: inline-flex;
    align-items: flex-start;
    position: absolute;
    top: 1px;
    left: 94px;
}

.notification-list .notification-header-filter-button {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    position: relative;
    flex: 0 0 auto;
}

.notification-list .header-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 8px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
}
</style>
