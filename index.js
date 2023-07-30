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

/*스와이프*/
const projectElements = document.querySelectorAll('.project');
hideAllProjects();

function hideAllProjects() {
  projectElements.forEach((project) => {
    project.style.display = 'none';
  });
}

function showProject(projectElement) {
  projectElement.style.display = 'block';
  hideOtherProjects(projectElement);
}

function hideOtherProjects(currentProjectElement) {
  projectElements.forEach((project) => {
    if (project !== currentProjectElement) {
      project.style.display = 'none';
    }
  });
}

const imageElements1 = document.querySelectorAll('.image1, .image6, .image11, .image16');
const projectElement1 = document.querySelector('.project1');

imageElements1.forEach((imageElement) => {
  imageElement.addEventListener('mouseenter', () => {
    showProject(projectElement1);
  });
});

const imageElements2 = document.querySelectorAll('.image2, .image7, .image12, .image17');
const projectElement2 = document.querySelector('.project2');

imageElements2.forEach((imageElement) => {
  imageElement.addEventListener('mouseenter', () => {
    showProject(projectElement2);
  });
});

const imageElements3 = document.querySelectorAll('.image3, .image8, .image13, .image18');
const projectElement3 = document.querySelector('.project3');

imageElements3.forEach((imageElement) => {
  imageElement.addEventListener('mouseenter', () => {
    showProject(projectElement3);
  });
});

const imageElements4 = document.querySelectorAll('.image4, .image9, .image14, .image19');
const projectElement4 = document.querySelector('.project4');

imageElements4.forEach((imageElement) => {
  imageElement.addEventListener('mouseenter', () => {
    showProject(projectElement4);
  });
});

const imageElements5 = document.querySelectorAll('.image5, .image10, .image15, .image20');
const projectElement5 = document.querySelector('.project5');

imageElements5.forEach((imageElement) => {
  imageElement.addEventListener('mouseenter', () => {
    showProject(projectElement5);
  });
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


  // 이벤트 리스너를 등록하여 이미지를 클릭하면 해당 이미지의 링크로 이동하도록 합니다.
  const imageElements = document.querySelectorAll('.won .image');

imageElements.forEach((imageElement) => {
  imageElement.addEventListener('click', () => {
    const linkElement = imageElement.querySelector('a');
    if (linkElement) {
      const link = linkElement.getAttribute('href');
      if (link) {
        window.location.href = link;
      }
    }
  });
});