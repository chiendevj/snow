const container = document.getElementById('container');
const btnAdd = document.querySelector('.btn-add');
const count = Math.floor(Math.random() * 10) + 1;
const arrayFilter = [0, 1, 2, 3, 4, 5];
const arraySizeSnow = [10, 15, 20, 25, 30, 35, 40];
const btnPause = document.querySelector('.btn-pause');

// When click the button
btnAdd.addEventListener('click', function () {
    const div = document.createElement('div');
    let filer = arrayFilter[(Math.floor(Math.random() * (arrayFilter.length)))];
    div.innerHTML = '<div class="flower-snow" style="filter: blur(' + filer + 'px)"></div>';
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let sizeSnow = arraySizeSnow[(Math.floor(Math.random() * (arraySizeSnow.length)))];
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.backdropFilter = filer + 'px';
    div.style.height = sizeSnow * 2 + 'px';
    div.style.width = sizeSnow + 'px';

    container.append(div);
});

// Add first when open website
for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    let filer = arrayFilter[(Math.floor(Math.random() * (arrayFilter.length)))];
    div.innerHTML = '<div class="flower-snow" style="filter: blur(' + filer + 'px)"></div>';
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let sizeSnow = arraySizeSnow[(Math.floor(Math.random() * (arraySizeSnow.length)))];
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.backdropFilter = filer + 'px';
    div.style.height = sizeSnow * 2 + 'px';
    div.style.width = sizeSnow + 'px';

    container.append(div);
}

let temp = 0;
btnPause.addEventListener('click', function () {
    let arraySnow = document.querySelectorAll('.snow');
    if (temp == 0) {
        arraySnow.forEach(element => {
            element.style.animationIterationCount='unset';
        });
        temp = 1;
    }
    else {
        arraySnow.forEach(element => {
            element.style.animationIterationCount='infinite';
        });
        temp = 0;
    }


});