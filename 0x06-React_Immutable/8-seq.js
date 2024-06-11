const Immutable = require('immutable');

export function printBestStudents(grades) {
  const bestStudents = Immutable.fromJS(grades)
    .filter((student) => student.get('score') >= 70)
    .map((student) => ({
      [student.get('id')]: {
        score: student.get('score'),
        firstName: student.get('firstName')[0].toUpperCase() + student.get('firstName').slice(1),
        lastName: student.get('lastName')[0].toUpperCase() + student.get('lastName').slice(1),
      },
    }));

  console.log(bestStudents.toJS());
}
