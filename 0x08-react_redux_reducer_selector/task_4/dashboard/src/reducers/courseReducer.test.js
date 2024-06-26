import Immutable from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActions';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(Immutable.Map());
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const initialState = Immutable.Map();
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'Course 1' },
        { id: 2, name: 'Course 2' },
      ],
    };
    const expectedState = Immutable.Map({
      1: { id: 1, name: 'Course 1' },
      2: { id: 2, name: 'Course 2' },
    });
    expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = Immutable.Map({
      1: { id: 1, name: 'Course 1' },
      2: { id: 2, name: 'Course 2' },
    });
    const action = {
      type: SELECT_COURSE,
      courseId: 1,
    };
    const expectedState = Immutable.Map({
      1: { id: 1, name: 'Course 1' },
      2: { id: 2, name: 'Course 2' },
      selected: { 1: true },
    });
    expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = Immutable.Map({
      1: { id: 1, name: 'Course 1' },
      2: { id: 2, name: 'Course 2' },
      selected: { 1: true },
    });
    const action = {
      type: UNSELECT_COURSE,
      courseId: 1,
    };
    const expectedState = Immutable.Map({
      1: { id: 1, name: 'Course 1' },
      2: { id: 2, name: 'Course 2' },
      selected: { 1: false },
    });
    expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });
});
