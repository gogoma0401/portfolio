const won = document.querySelector('.won');
const items = +getComputedStyle(won).getPropertyValue('--items');
let index = 0;
let intervalId;
let isMoving = true;

function startMovement() {
  const step = 360 / items;
  won.style.setProperty('--rotation', `${(step * index) * -1}deg`)
  index = (index + 1) % items;
}

function toggleMovement() {
  if (isMoving) {
    clearInterval(intervalId);
    isMoving = false;
  } else {
    startMovement();
    intervalId = setInterval(startMovement, 1600);
    isMoving = true;
  }
}

// 웹사이트가 로드되면 이미지를 움직이기 시작
window.addEventListener('load', () => {
  startMovement();
  intervalId = setInterval(startMovement, 1600);
});

// 이미지 클릭 이벤트를 .won 요소에 연결
document.querySelector('.won').addEventListener("click", toggleMovement);