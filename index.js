/*타이핑스크립트*/

const content = "끈기와 책임감으로, \n 사회적가치를 \n 창출하는 \n 웹 퍼블리셔!";
const text = document.querySelector(".text");
let i = 0;

function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)
/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/
const imageElements1 = document.querySelectorAll('.image0, .image5, .image10, .image15');
const projectElement1 = document.querySelector('.project2');

imageElements1.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {
    projectElement1.style.display = 'block';
    hideOtherProjects('.project2');
  });
});

const imageElements2 = document.querySelectorAll('.image1, .image6, .image11, .image16');
const projectElement2 = document.querySelector('.project3');

imageElements2.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {
    projectElement2.style.display = 'block';
    hideOtherProjects('.project3');
  });
});

const imageElements3 = document.querySelectorAll('.image2, .image7, .image12, .image17');
const projectElement3 = document.querySelector('.project4');

imageElements3.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {
    projectElement3.style.display = 'block';
    hideOtherProjects('.project4');
  });
});

const imageElements4 = document.querySelectorAll('.image3, .image8, .image13, .image18');
const projectElement4 = document.querySelector('.project5');

imageElements4.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {

    projectElement4.style.display = 'block';
    hideOtherProjects('.project5');
  });
});

const imageElements5 = document.querySelectorAll('.image4, .image9, .image14, .image19');
const projectElement5 = document.querySelector('.project1');

imageElements5.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {
    projectElement5.style.display = 'block';
    hideOtherProjects('.project1');
  });
});

function hideOtherProjects(currentProjectSelector) {
  const allProjects = document.querySelectorAll('.project');

  allProjects.forEach((project) => {
    if (project !== document.querySelector(currentProjectSelector)) {
      project.style.display = 'none';
    }
  });
}

function hideAllProjects() {
  const allProjects = document.querySelectorAll('.project');

  allProjects.forEach((project) => {
    project.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  hideAllProjects();
});



/*******날짜 시간******/
 /*
    toLocaleDateString(), toLocaleTimeString(), toLocaleString() 함수
    브라우저에 설정된 국가에서 사용되는 날짜, 시간 표현 형식으로 날짜와 시간을 보여줌

    document.write(today.toLocaleDateString('en-US')); 월/일/연도 순서로
    */

    const date = document.querySelector('.date span');
    const hours = document.querySelector('.hours span');
    const minutes = document.querySelector('.minutes span');
    const seconds = document.querySelector('.seconds span');
    const now = new Date();

    // 재귀함수 방법
    function updateTime() {
      const now = new Date();
      date.textContent = String(now.getDate()).padStart(2, "0");
      hours.textContent = String(now.getHours()).padStart(2, "0");
      minutes.textContent = String(now.getMinutes()).padStart(2, "0");
      seconds.textContent = String(now.getSeconds()).padStart(2, "0");

      setTimeout(updateTime, 1000);// setInterval()을 이용하는 것보다 메모리 측면에서 효율적
    }
    updateTime();
