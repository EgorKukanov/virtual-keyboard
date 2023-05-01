let input = document.querySelector('.text');
let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shiftLeft = document.querySelector('.shift_left');
let shiftRight = document.querySelector('.shift_right');
let ctrlLeft = document.querySelector('.ctrl_left');
let ctrlRight = document.querySelector('.ctrl_right');
let altLeft = document.querySelector('.alt_left');
let altRight = document.querySelector('.alt_right');
let capsLockKey = document.querySelector('.caps_lock_key');
let keyboard = document.querySelector('.keyboard');
let arrowUp = document.querySelector('.arrow_up');
let arrowLeft = document.querySelector('.arrow_left');
let arrowDown = document.querySelector('.arrow_down');
let arrowRight = document.querySelector('.arrow_right');
let delKey = document.querySelector('.del_key');

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

addEventListener('keydown', function (element) {
    for (let i = 0; i < keys.length; i++) {
        if (element.key == keys[i].getAttribute('keyname') || element.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if (element.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if (element.code == 'ShiftLeft') {
            shiftRight.classList.remove('active')
        }
        if (element.code == 'ShiftRight') {
            shiftLeft.classList.remove('active')
        }
        if (element.code == 'ControlLeft') {
            ctrlLeft.classList.add('active')
        }
        if (element.code == 'ControlRight') {
            ctrlRight.classList.add('active')
        }
        if (element.code == 'AltLeft') {
            altRight.classList.remove('active')
        }
        if (element.code == 'AltRight') {
            altLeft.classList.remove('active')
        }
        if (element.code == 'CapsLock') {
            capsLockKey.classList.add('active');
        }
        if (element.code == 'ArrowUp') {
            arrowUp.classList.add('active')
        }
        if (element.code == 'ArrowLeft') {
            arrowLeft.classList.add('active')
        }
        if (element.code == 'ArrowDown') {
            arrowDown.classList.add('active')
        }
        if (element.code == 'ArrowRight') {
            arrowRight.classList.add('active')
        }
        if (element.code == 'Delete' || element.code == 'NumpadDecimal') {
            delKey.classList.add('active')
        }
    }
})

addEventListener('keyup', function (element) {
    for (let i = 0; i < keys.length; i++) {
        if (element.key == keys[i].getAttribute('keyname') || element.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if (element.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if (element.code == 'CapsLock') {
            capsLockKey.classList.remove('active');
        }
        if (element.code == 'ShiftLeft') {
            shiftRight.classList.remove('active')
            shiftRight.classList.remove('remove')
        }
        if (element.code == 'ShiftRight') {
            shiftLeft.classList.remove('active')
            shiftLeft.classList.remove('remove')
        }
        if (element.code == 'ControlLeft') {
            ctrlLeft.classList.remove('active')
            ctrlLeft.classList.remove('remove')
        }
        if (element.code == 'ControlRight') {
            ctrlRight.classList.remove('active')
            ctrlRight.classList.remove('remove')
        }
        if (element.code == 'AltLeft') {
            altRight.classList.remove('active')
            altRight.classList.remove('remove')
        }
        if (element.code == 'AltRight') {
            altLeft.classList.remove('active')
            altLeft.classList.remove('remove')
        }
        if (element.code == 'ArrowUp') {
            arrowUp.classList.remove('active')
            arrowUp.classList.remove('remove')
        }
        if (element.code == 'ArrowLeft') {
            arrowLeft.classList.remove('active')
            arrowLeft.classList.remove('remove')
        }
        if (element.code == 'ArrowDown') {
            arrowDown.classList.remove('active')
            arrowDown.classList.remove('remove')
        }
        if (element.code == 'ArrowRight') {
            arrowRight.classList.remove('active')
            arrowRight.classList.remove('remove')
        }
        if (element.code == 'Delete' || element.code == 'NumpadDecimal') {
            delKey.classList.remove('active')
            delKey.classList.remove('remove')
        }
    }
})

