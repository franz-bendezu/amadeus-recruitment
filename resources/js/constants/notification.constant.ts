import { NotificationAction, NotificationModel } from "../interfaces/notification.interface";

export const NOTIFICATION_ACTIONS:Record<NotificationAction, string> = {
    'commented': 'comentó',
    'shared': 'compartió'
};

export const NOTIFICATION_MODELS:Record<NotificationModel, string> = {
    'califications': 'Calificaciones',
    'events': 'Eventos',
    'opportunities': 'Oportunidades',
};
