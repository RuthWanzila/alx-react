import { schema } from 'normalizr';

const notificationSchema = new schema.Entity('notifications');

export const notificationsNormalizer = (data) => normalize(data, [notificationSchema]);
