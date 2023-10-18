import { IUser } from "./user.interface";
export type NotificationAction = "commented" | "shared";
export type NotificationModel = "califications" | "events";

export interface INotification {
    id: number;
    user: IUser;
    action: NotificationAction;
    over: string;
    description?: string;
    datetime: string;
    model_name: NotificationModel;
}
