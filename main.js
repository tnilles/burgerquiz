let ketchup = document.getElementById('ketchup');
let mayo = document.getElementById('mayo');

let ketchupPoints = document.getElementById('ketchup-points');
let mayoPoints = document.getElementById('mayo-points');

let points = {ketchup: 0, mayo: 0};

ketchup.addEventListener('click', e => addPoint('ketchup'));
mayo.addEventListener('click', e => addPoint('mayo'));

function addPoint(team) {
    points[team]++;
    renderPoints();
}

function renderPoints() {
    ketchupPoints.innerHTML = points.ketchup;
    mayoPoints.innerHTML = points.mayo;
}
