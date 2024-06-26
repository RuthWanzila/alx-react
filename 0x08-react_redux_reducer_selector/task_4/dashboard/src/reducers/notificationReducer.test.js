import Immutable from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActions';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(
      Immutable.Map({
        data: Immutable.Map(),
        filter: 'ALL',
      })
    );
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const initialState = Immutable.Map({
      data: Immutable.Map(),
      filter: 'ALL',
    });
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' },
      ],
    };
    const expectedState = Immutable.Map({
      data: Immutable.Map({
        1: { id: 1, type: 'default', value: 'Notification 1', isRead: false },
        2: { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
      }),
      filter: 'ALL',
    });
    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = Immutable.Map({
      data: Immutable.Map({
        1: { id: 1, type: 'default', value: 'Notification 1', isRead: false },
        2: { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
      }),
      filter: 'ALL',
    });
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'urgent',
    };
    const expectedState = Immutable.Map({
      data: Immutable.Map({
        1: { id: 1, type: 'default', value: 'Notification 1', isRead: false },
        2: { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
      }),
      filter: 'urgent',
    });
    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Immutable.Map({
      data: Immutable.Map({
        1: { id: 1, type: 'default', value: 'Notification 1', isRead: false },
        2: { id: 2, type: 'urgent', value: 'Notification 2', isRead: false },
      }),
      filter: 'ALL',
    });
    const action = {
