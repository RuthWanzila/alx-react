import Immutable from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActions';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Immutable.Map({
  data: Immutable.Map(),
  filter: 'ALL',
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(notificationsNormalizer(action.data).entities.notifications);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case MARK_AS_READ:
      return state.setIn(['data', action.index, 'isRead'], true);
    default:
      return state;
  }
}
