const won = document.querySelector('.won');
const items = +getComputedStyle(won).getPropertyValue('--items');
let index = 0;

setInterval(() => {
  const step = 360 / items;
  won.style.setProperty('--rotation', `${(step * index) * -1}deg`)
  index = index + 1;
}, 1600);