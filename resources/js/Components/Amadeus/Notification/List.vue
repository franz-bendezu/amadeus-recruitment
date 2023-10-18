<template>
    <!-- click.stop prevent to close on click -->
    <div @click.stop="() => {}" class="notification-list">
        <div class="notification-container">
            <NotificationListHeader
                v-model="modelFilter"
            ></NotificationListHeader>
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
import NotificationListHeader from "@/Components/Amadeus/Notification/ListHeader.vue";
import NotificationListEmpty from "@/Components/Amadeus/Notification/ListEmpty.vue";
import { INotification } from "@/interfaces/notification.interface";
import { IBaseOption } from "@/interfaces/option.interface";

const props = defineProps({
    notifications: {
        type: [Array, null] as PropType<INotification[]>,
        required: true,
    },
});
const { notifications } = toRefs(props);

const modelFilter = ref<IBaseOption | null>(null);

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

.notification-list .notification-items {
    flex-direction: column;
    width: 100%;
    gap: 1px;
    display: flex;
    align-items: flex-start;
    position: relative;
    flex: 0 0 auto;
}
</style>
