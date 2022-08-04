//Video hover
let playIcon = document.querySelector('.play-icon')
let video_hover = document.querySelector('.video-hover')
playIcon.addEventListener('click', function () {
  video_hover.classList.add('d-none')
})

setInterval(() => {
  let time = new Date()
  let hour = document.querySelector('.hour').textContent = time.getHours();
  let min = document.querySelector('.min').textContent = time.getMinutes();
  let sec = document.querySelector('.sec').textContent = time.getSeconds();
  if (hour < 10 && hour >= 0) {
    let sec = document.querySelector('.hour').textContent = '0' + time.getHours();
  }
  if (min < 10 && sec >= 0) {
    let min = document.querySelector('.min').textContent = '0' + time.getMinutes();
  }
  if (sec < 10 && sec >= 0) {
    let sec = document.querySelector('.sec').textContent = '0' + time.getSeconds();
  }
}, 1000);
let day = new Date().getDay() + 1;
let date = new Date().getDate();
switch (day) {
  case 1:
    document.querySelector('.day').textContent = 'Sunday'
    break;
  case 2:
    document.querySelector('.day').textContent = 'Monthday'
    break;
  case 3:
    document.querySelector('.day').textContent = 'Tuesday'
    break;
  case 4:
    document.querySelector('.day').textContent = 'Wednesday'
    break;
  case 5:
    document.querySelector('.day').textContent = 'Thursday'
    break;
  case 6:
    document.querySelector('.day').textContent = 'Friday'
    break;
  case 7:
    document.querySelector('.day').textContent = 'Saturday'
    break;
  default:
    break;
}


// Resend Posts
let reItem = document.querySelectorAll('.resend .row .col-12');
let prev = document.querySelector('.resend .prev');
let next = document.querySelector('.resend .next');
let u = 1;
next.addEventListener('click', function () {
  reItem[u].classList.remove('resend-active')
  u++;
  if (u >= reItem.length) {
    u = 0
  }
  reItem[u].classList.add('resend-active')
})

prev.addEventListener('click', function () {
  reItem[u].classList.remove('resend-active')
  u--;
  if (u < 0) {
    u = reItem.length - 1
  }
  reItem[u].classList.add('resend-active')
})