import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      notifications: {
        filterType: 'all',
        messages: [
          { id: 1, message: 'Notification 1', read: false },
          { id: 2, message: 'Notification 2', read: true },
          { id: 3, message: 'Notification 3', read: false }
        ]
      }
    };
  });

  describe('filterTypeSelected', () => {
    it('should return the selected filter type', () => {
      expect(filterTypeSelected(state)).toBe('all');
    });
  });

  describe('getNotifications', () => {
    it('should return the list of notifications in a Map format', () => {
      const notifications = getNotifications(state);
      expect(notifications).toEqual(state.notifications.messages);
    });
  });

  describe('getUnreadNotifications', () => {
    it('should return the list of unread notifications in a Map format', () => {
      const unreadNotifications = getUnreadNotifications(state);
      expect(unreadNotifications).toEqual([
        { id: 1, message: 'Notification 1', read: false },
        { id: 3, message: 'Notification 3', read: false }
      ]);
    });
  });
});
