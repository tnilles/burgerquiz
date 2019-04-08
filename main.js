let ketchup = document.getElementById('ketchup');
let mayo = document.getElementById('mayo');

let ketchupPoints = document.getElementById('ketchup-points');
let mayoPoints = document.getElementById('mayo-points');

let decrementKetchupBtn = document.getElementById('decrement-ketchup-btn');
let decrementMayoBtn = document.getElementById('decrement-mayo-btn');

let resetscore = document.getElementById('resetscore');

let points = {ketchup: 0, mayo: 0};

ketchupPoints.addEventListener('click', e => addPoint('ketchup'));
mayoPoints.addEventListener('click', e => addPoint('mayo'));

decrementKetchupBtn.addEventListener('click', e => removePoint('ketchup'));
decrementMayoBtn.addEventListener('click', e => removePoint('mayo'));

resetscore.addEventListener('click', e => resetPoints());

function addPoint(team) {
    points[team]++;
    renderPoints();
}

function removePoint(team) {
    if (points[team] == 0) return;
    points[team]--;
    renderPoints();
}

function resetPoints() {
    points = {ketchup: 0, mayo: 0};
    renderPoints();
}

function renderPoints() {
    ketchupPoints.innerHTML = '';
    mayoPoints.innerHTML = '';

    if (points.ketchup >= 10) {
        addNumberTo(Math.floor(points.ketchup / 10), ketchupPoints);
    }

    addNumberTo(points.ketchup % 10, ketchupPoints);

    if (points.mayo >= 10) {
        addNumberTo(Math.floor(points.mayo / 10), mayoPoints);
    }

    addNumberTo(points.mayo % 10, mayoPoints);
}

function addNumberTo(num, container) {
    let span = document.createElement('span');
    span.classList.add('num');
    span.innerHTML = num;
    container.appendChild(span);
}


// FULLSCREEN

let isFullscreen = false;
let fullscreenZone = document.getElementById('fullscreen');

fullscreenZone.addEventListener('click', e => switchFullscreen());

let elem = document.documentElement;

function switchFullscreen() {
    if (isFullscreen) {
        closeFullscreen();
    } else {
        openFullscreen();
    }

    isFullscreen = !isFullscreen;
}

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
