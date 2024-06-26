import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should change the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should change the isNotificationDrawerVisible property when the action HIDE_NOTIFICATION_DRAWER is passed', () => {
    expect(uiReducer({ isNotificationDrawerVisible: true }, { type: HIDE_NOTIFICATION_DRAWER })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should change the isUserLoggedIn property when the action LOGIN_SUCCESS is passed', () => {
    expect(uiReducer(undefined, { type: LOGIN_SUCCESS, user: { name: 'John Doe' } })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { name: 'John Doe' },
    });
  });

  it('should change the isUserLoggedIn property when the action LOGIN_FAILURE is passed', () => {
    expect(uiReducer(undefined, { type: LOGIN_FAILURE })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should change the isUserLoggedIn and user properties when the action LOGOUT is passed', () => {
    expect(uiReducer({ isUserLoggedIn: true, user: { name: 'John Doe' } }, { type: LOGOUT })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });
});
