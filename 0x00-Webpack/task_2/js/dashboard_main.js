import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Paragraph element: Holberton Dashboard
$('body').prepend('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');

// Paragraph element: Dashboard data for the students
$('body').append('<p>Dashboard data for the students</p>');

// Button element with the text Click here to get started
$('body').append('<button>Click here to get started</button>');

// Paragraph element with id='count'
$('body').append('<p id="count"></p>');

// Paragraph element: Copyright - Holberton School
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
