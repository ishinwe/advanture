// script.js
document.getElementById('menu-toggle').addEventListener('click', function() {
    const slideMenu = document.getElementById('slide-menu');
    if (slideMenu.style.left === '0px') {
        slideMenu.style.left = '-250px';
    } else {
        slideMenu.style.left = '0px';
    }
});

// Adding moving object dynamically
const movingObject = document.createElement('div');
movingObject.className = 'moving-object';
document.body.appendChild(movingObject);
