<template>
    <!-- click.stop prevent to close on click -->
    <div @click.stop="() => {}" class="notification-list">
        <div class="notification-container">
            <div class="notification-header">
                <div class="notification-header-content">
                    <div class="notification-header-title my-1">
                        Notifications
                    </div>
                    <div class="filter ml-3">
                        <Dropdown
                            align="left"
                            width="48"
                            container-classes="border border-gray-300 rounded-md"
                            content-classes="my-0"
                        >
                            <template #trigger>
                                <button class="filter-button text-xs">
                                    <div class="text-gray-400">
                                        {{ modelFilter?.value || "Todos" }}
                                    </div>
                                    <i
                                        class="fa-light fa-chevron-down text-gray-400"
                                    />
                                </button>
                            </template>

                            <template #content>
                                <ul class="list-group">
                                    <li
                                        class="list-group-item text-xs py-1"
                                        v-for="model in uniqueModelNames"
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
            <div class="notification-items">
                <NotificationListEmpty
                    v-if="filteredNotifications.length === 0"
                />
                <NotificationListItem
                    v-for="notification in filteredNotifications"
                    :key="notification.id"
                    :user="notification.user"
                    :action="notification.action"
                    :subject="notification.over"
                    :message="notification.description"
                    :date="notification.datetime"
                    :model="notification.model_name"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref, toRefs } from "vue";
import NotificationListItem from "@/Components/Amadeus/Notification/ListItem.vue";
import Dropdown from "@/Components/Amadeus/AmadeusDropdown.vue";
import NotificationListEmpty from "@/Components/Amadeus/Notification/ListEmpty.vue";
import { INotification } from "@/interfaces/notification.interface";
import { NOTIFICATION_MODELS } from "@/constants/notification.constant";

const props = defineProps({
    notifications: {
        type: Array as PropType<INotification[]>,
        required: true,
    },
});
const { notifications } = toRefs(props);
const uniqueModelNames = computed(() => {
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

const modelFilter = ref<{ key: string; value: string } | null>(null);
const selectModel = (model: { key: string; value: string }) => {
    modelFilter.value = model;
};

const filteredNotifications = computed(() => {
    if (!modelFilter.value?.key) {
        return notifications.value;
    } else {
        return notifications.value.filter(
            (notification) => notification.model_name === modelFilter.value.key
        );
    }
});
</script>

<style scoped>
.notification-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    gap: 17px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 5px 15px #00000033;
    max-height: 80vh;
    overflow-y: auto;
}

.notification-list .notification-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    flex: 0 0 auto;
}

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

.notification-list .filter {
    display: inline-flex;
    align-items: flex-start;
    position: absolute;
    top: 1px;
    left: 94px;
}

.notification-list .filter-button {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    position: relative;
    flex: 0 0 auto;
}

.notification-list .all {
    position: relative;
    width: 44px;
    margin-top: -1px;
    font-weight: 500;
    color: #9ea0aa;
    font-size: 12px;
    text-align: right;
    letter-spacing: 0;
    line-height: 20px;
}

.notification-list .notification-items {
    flex-direction: column;
    width: 100%;
    gap: 1px;
    display: flex;
    align-items: flex-start;
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
