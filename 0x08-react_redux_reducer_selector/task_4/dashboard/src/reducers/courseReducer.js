import Immutable from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActions';
import { coursesNormalizer } from '../schema/courses';

const initialState = Immutable.Map();

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(coursesNormalizer(action.data).entities.courses);
    case SELECT_COURSE:
      return state.setIn(['selected', action.courseId], true);
    case UNSELECT_COURSE:
      return state.setIn(['selected', action.courseId], false);
    default:
      return state;
  }
}
