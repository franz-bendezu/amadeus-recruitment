<template>
    <div class="notification-card">
        <div class="notification-card-header">
            <div class="header-content">
                <div class="avatar">
                    <div class="avatar-container">
                        <img
                            :src="user.photo_url"
                            alt="avatar"
                            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        />
                    </div>
                </div>
                <div class="subject">
                    <div class="subject-content">
                        <span class="bold-text"> {{ fullName }} </span>&nbsp;
                        <span> {{ actionName }} </span>&nbsp;
                        <span class="bold-text"> {{ subject }} </span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="message" class="notification-message">
            <div class="notification-message-content">
                <div class="rectangle"></div>
                <div class="notification-message-text">{{ message }}</div>
            </div>
        </div>
        <div class="notification-card-footer">
            <div class="info-bar">
                <div class="title">{{ formattedDate }}</div>
                <div class="separator"></div>
                <div class="timestamp">{{ modelName }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IUser } from "@/interfaces/user.interface";
import {
    NOTIFICATION_ACTIONS,
    NOTIFICATION_MODELS,
} from "@/constants/notification.constant";
import { PropType, computed, toRefs } from "vue";
import {
    NotificationModel,
    NotificationAction,
} from "@/interfaces/notification.interface";
import { formatDateTime } from "@/utils/datetime";

const props = defineProps({
    user: {
        type: Object as PropType<IUser>,
        required: true,
    },
    action: {
        type: String as PropType<NotificationAction>,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String as PropType<string | undefined>,
        default: undefined,
    },
    date: {
        type: String,
        required: true,
    },
    model: {
        type: String as PropType<NotificationModel>,
        required: true,
    },
});

const { user, model, action, date } = toRefs(props);
const fullName = computed(() => {
    return `${user.value.name} ${user.value.surname}`;
});
const modelName = computed(() => {
    return NOTIFICATION_MODELS[model.value];
});

const actionName = computed(() => {
    return NOTIFICATION_ACTIONS[action.value];
});

const formattedDate = computed(() => formatDateTime(date.value));
</script>

<style scoped>
.notification-card {
    display: flex;
    width: 100%;
    gap: 8px;
    padding: 12px 0px;
    box-shadow: 0px 1px 0px #e4e8ee;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    flex: 0 0 auto;
}

.notification-card:hover {
    background-color: #eefeff;
}

.notification-card .notification-card-content {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    flex: 0 0 auto;
}

.notification-card .header-content {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 0px 16px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
}

.notification-card .avatar {
    align-items: flex-start;
    display: inline-flex;
    position: relative;
    flex: 0 0 auto;
}

.notification-card .avatar-container {
    align-items: center;
    gap: 6.67px;
    display: inline-flex;
    position: relative;
    flex: 0 0 auto;
}

.notification-card .subject {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    flex: 1;
    flex-grow: 1;
}

.notification-card .subject-content {
    position: relative;
    flex: 1;
    margin-top: -1px;
    font-weight: 400;
    color: #222038;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;
}

.notification-card .bold-text {
    font-weight: 600;
}

.notification-card .notification-message {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 16px 0px 64px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
    margin: 0px 0px 16px 0px;
}

.notification-card .notification-card-header {
    padding: 8px 0px;
}

.notification-card .notification-message-content {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    position: relative;
    flex: 1;
    flex-grow: 1;
}

.notification-card .rectangle {
    position: relative;
    align-self: stretch;
    width: 4px;
    background-color: #dddee1;
    border-radius: 2px;
}

.notification-card .notification-message-text {
    position: relative;
    flex: 1;
    margin-top: -1px;
    font-weight: 500;
    color: #222038;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;
}

.notification-card .notification-card-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    padding: 0px 0px 0px 64px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
}

.notification-card .info-bar {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 3.86px;
    position: relative;
    flex: 0 0 auto;
}

.notification-card .title {
    color: #212121;
    position: relative;
    width: fit-content;
    margin-top: -0.64px;
    font-family: "Roboto-Regular", Helvetica;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.1px;
    line-height: normal;
}

.notification-card .separator {
    position: relative;
    width: 2.89px;
    height: 2.89px;
    background-color: #45464f;
    border-radius: 1.45px;
}

.notification-card .timestamp {
    position: relative;
    width: fit-content;
    margin-top: -0.64px;
    font-family: "Roboto-Regular", Helvetica;
    font-weight: 400;
    color: #7c7c7c;
    font-size: 12px;
    letter-spacing: 0;
    line-height: normal;
}
</style>
