const box = document.querySelector('.box');
const boxDragZone = document.querySelector('.box-controls-drag');
const boxExpandButton = document.querySelector('.box-controls-expand');
const mouseY = document.getElementById('mouseY');
const mouseX = document.getElementById('mouseX');
const boxOffsetTop = document.getElementById('boxOffsetTop');
const boxOffsetLeft = document.getElementById('boxOffsetLeft');
let isBoxMoved = false;
let isExpanded = false;
let boxPosY = 0, boxPosX = 0, boxNewPosY = 0, boxNewPosX = 0;

boxExpandButton.addEventListener('click', () => {
    updateBoxStyle();
});

// 

boxDragZone.addEventListener('mousedown', e => {
    boxPosY = e.clientY;
    boxPosX = e.clientX;

    box.style.transition = 'none';
    document.addEventListener('mousemove', moveTheBox);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveTheBox);
        box.style.transition = '300ms';
    });
});


// 

function updateBoxStyle() {
    if (isExpanded === false) {
        box.style.width = '100%';
        box.style.height = '100vh';
        box.style.top = '0';
        box.style.left = '0';
        box.style.border = '0';
        box.style.borderRadius = '0';

        isExpanded = true;
    } else {
        console.log();

        box.style.width = '500px';
        box.style.height = '350px';
        box.style.top = isBoxMoved === true ? boxPosY + 'px' : '150px';
        box.style.left = isBoxMoved === true ? boxPosX + 'px' : '150px';
        box.style.border = '1px solid rgba(255,255,255,0.05)';
        box.style.borderRadius = '0.5rem';
        
        isExpanded = false;
    };
};

// MOVE THE BOX

function moveTheBox(e) {
    boxNewPosY = boxPosY - e.clientY;
    boxNewPosX = boxPosX - e.clientX;

    boxPosY = e.clientY;
    boxPosX = e.clientX;

    box.style.top = (box.offsetTop - boxNewPosY) + 'px';
    box.style.left = (box.offsetLeft - boxNewPosX) + 'px';

    //
    boxOffsetTop.textContent = box.offsetTop;
    boxOffsetLeft.textContent = box.offsetLeft;

    isBoxMoved = true;
};

window.addEventListener('mousemove', e => {
    mouseY.textContent = e.clientY;
    mouseX.textContent = e.clientX;
});