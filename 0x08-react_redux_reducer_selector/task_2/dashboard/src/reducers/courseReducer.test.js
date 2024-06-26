import courseReducer from './courseReducer';
import * as actionTypes from './courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS action', () => {
    const courses = [
      {
        id: 1,
        name: 'ES6',
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        credit: 40
      }
    ];

    expect(
      courseReducer([], {
        type: actionTypes.FETCH_COURSE_SUCCESS,
        data: courses
      })
    ).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ]);
  });

  it('should handle SELECT_COURSE action', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    expect(
      courseReducer(initialState, {
        type: actionTypes.SELECT_COURSE,
        index: 1
      })
    ).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ]);
  });

  it('should handle UNSELECT_COURSE action', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    expect(
      courseReducer(initialState, {
        type: actionTypes.UNSELECT_COURSE,
        index: 1
      })
    ).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ]);
  });
});
