<template>
    <!-- click.stop prevent to close on click -->
    <div @click.stop="() => {}" class="notification-list">
        <div class="notification-container">
            <div class="notification-header">
                <div class="notification-header-content">
                    <div class="notification-header-title">Notifications</div>
                    <div class="filter ml-3">
                        <button class="filter-button text-xs">
                            <div class="text-gray-400">Todo</div>
                            <i class="fa-light fa-chevron-down text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="notification-items">
            
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { INotification } from "@/interfaces/notification.interface";

defineProps({
    notifications: {
        type: Array as PropType<INotification[]>,
        required: true,
    },
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
