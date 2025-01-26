const box = document.querySelector('.box');
const boxDragZone = document.querySelector('.box-controls-drag');
const boxExpandButton = document.querySelector('.box-controls-expand');
const mouseY = document.getElementById('mouseY');
const mouseX = document.getElementById('mouseX');
const boxOffsetTop = document.getElementById('boxOffsetTop');
const boxOffsetLeft = document.getElementById('boxOffsetLeft');
let posX = 0, posY = 0, newPosX = 0, newPosY = 0;

// MOUSE Y AND MOUSE X
window.addEventListener('mousemove', e => {
    mouseY.textContent = e.clientY;;
    mouseX.textContent = e.clientX;;
});

// DRAG AN ELEMENT
boxDragZone.addEventListener('mousedown', e => {
    posX = e.clientX;
    posY = e.clientY;

    box.style.transition = 'none';
    document.addEventListener('mousemove', moveTheBox);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveTheBox);
        box.style.transition = '300ms';
    });
});

function moveTheBox(e) {
    newPosY = e.clientY - posY;
    newPosX = e.clientX - posX;

    box.style.top = (newPosY + e.clientY) + 'px';
    box.style.left = (newPosX + e.clientX) + 'px';
};

// BOX EXPAND

function boxExpand(e) { 
    box.classList.toggle('box-js');
};

// INITIALIZING BUTTONS
boxExpandButton.addEventListener('click', boxExpand);