import { createSelector } from 'reselect';

const getNotificationState = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [getNotificationState],
  (notifications) => notifications.filterType
);

export const getNotifications = createSelector(
  [getNotificationState],
  (notifications) => notifications.messages
);

export const getUnreadNotifications = createSelector(
  [getNotificationState],
  (notifications) => notifications.messages.filter((message) => !message.read)
);
