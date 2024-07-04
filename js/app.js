// OffCanvas Menu Trigger

$('.offcanvas__trigger-wrap').click(function () {
  $('.offcanvas__overlay,.offcanvas__wrap,.offcanvas__trigger').addClass('active');
});

$('.offcanvas__close-btn,.offcanvas__overlay,.form__trigger').click(function () {
  $('.offcanvas__overlay,.offcanvas__wrap,.offcanvas__trigger,.form__wrapper').removeClass('active');
});

// Form Trigger

$('.form__trigger').click(function () {
  $('.form__wrapper,.offcanvas__overlay').addClass('active');
});

$('.form__close').click(function () {
  $('.form__wrapper,.offcanvas__overlay').removeClass('active');
  return false;
});

// Theme Changer

function myTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

let timeNow = myTime(new Date());

let dates = new Date();
let hours = dates.getHours();

// All variables

let light = document.querySelector('.theme__light');
let dark = document.querySelector('.theme__dark');
let theme = document.querySelector('#theme');
let btn = document.querySelectorAll('.theme__btn');

// Auto theme change

function theme__changer() {
  'use strict';
  if (hours > 18 || hours < 7) {
    theme.setAttribute('href', 'css/dark.css');
    btn.forEach(btn2 => btn2.classList.remove('active'));
    dark.classList.add('active');
  } else if (hours => 7 && hours < 18) {
    theme.removeAttribute('href', 'css/dark.css');
  }
}

theme__changer();

//  Theme Button

dark.addEventListener('click', function () {
  'use strict';
  theme.setAttribute('href', 'css/dark.css');
});

light.addEventListener('click', function () {
  'use strict';
  theme.removeAttribute('href', 'css/dark.css');
});

btn.forEach(btn_theme => {
  btn_theme.addEventListener('click', function () {
    btn.forEach(btn2 => btn2.classList.remove('active'));
    this.classList.add('active');
  });
});

// Sticky Bar
// WayPoints

$('#service').waypoint(function (direction) {
  if (direction === 'down') {
    $('.sticky').addClass('active');
  } else {
    $('.sticky').removeClass('active');
  }
});

// Portfolio Mixitup
// var mixer = mixitup('.portfolio__wrap');

var mixer = mixitup('.portfolio__wrap', {
  animation: {
    queueLimit: 5,
  },
});

// Magnefic Popup

$(document).ready(function () {
  $('.image-link').magnificPopup({
    type: 'image',
  });
});

// Wow JS

new WOW().init();

// OwlCarousel

$('.review__carousel').owlCarousel({
  items: 1,
  loop: true,
  nav: false,
  dots: true,
});

// Skill Bar(Barfiller)
// WayPoints

$('#service').waypoint(function () {
  $('#bar6').barfiller({
    barColor: '#1769FF',
  });
  $('#bar1').barfiller({
    barColor: '#1769FF',
  });
  $('#bar2').barfiller({
    barColor: '#1769FF',
  });
  $('#bar3').barfiller({
    barColor: '#1769FF',
  });
  $('#bar4').barfiller({
    barColor: '#1769FF',
  });
  $('#bar5').barfiller({
    barColor: '#1769FF',
  });
});

// Animated Typing

// new TypeIt('#simpleUsage', {
//   strings: 'Development ',
//   speed: 100,
//   waitUntilVisible: true,
//   startDelay: 1000,
//   loop: true,
//   cursorChar: ['_'],
// })

//   .pause(2000)
//   .delete(12, { speed: 890, delay: 4000 })
//   .type('Photoshop ', { delay: 700 })
//   .pause(2000)
//   .go();

//    Inspect Block
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    console.log('You cannot inspect Element');
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
};
