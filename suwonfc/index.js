// 이미지 롤링 애니메이션 함수 호출
rollImages();

function rollImages() {
    const rolling = document.querySelector('.rolling');
    const images = rolling.querySelectorAll('img');
    const imageWidth = images[0].clientWidth; // 이미지의 너비를 가져옵니다.
    const rollCount = 7; // 7개씩 이어지도록 설정

    // 롤링 애니메이션 재귀 함수
    function animateRolling() {
        requestAnimationFrame(() => {
            rolling.style.transition = "none"; // 애니메이션 잠시 끄기
            rolling.style.transform = "translateX(0)"; // 이미지 롤링 초기 위치로 이동
            for (let i = 0; i < rollCount; i++) {
                const firstImage = images[i];
                rolling.appendChild(firstImage.cloneNode(true)); // 이미지를 복사하여 롤링 컨테이너의 마지막에 추가합니다.
            }
            for (let i = 0; i < rollCount; i++) {
                const firstImage = images[0];
                rolling.removeChild(firstImage); // 첫 번째 이미지를 롤링 컨테이너에서 제거합니다.
            }
            // 롤링 애니메이션 다시 시작
            setTimeout(animateRolling, 1000); // 이미지를 빠르게 추가하기 위해 딜레이를 10ms로 설정
        });
    }

    animateRolling(); // 애니메이션 시작
}

var swiper = new Swiper(".mySwiper", {
    loop: true, // 슬라이드 루프 설정
    autoplay: {
        delay: 2500, // 이미지 간 자동 넘김 딜레이 시간 (3초로 설정)
        disableOnInteraction: false, // 사용자 상호작용 시에도 자동 재생 유지
    },
    speed: 1000, // 슬라이드 전환 속도를 1초로 설정 (부드러운 전환을 위해 값을 조정)
});

/////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    // .youtube 요소 내부의 슬라이드만 선택하여 Swiper 객체를 생성합니다.
    var youtubeSwiper = new Swiper(".youtube .mySwiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 150000, 
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        allowTouchMove: true, // 터치 이벤트 허용
        allowMouseEvents: true, // 마우스 이벤트 허용 (추가)
    });

    var secondSwiper = new Swiper(".youtube .secondswiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 150000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        allowTouchMove: true, // 터치 이벤트 허용
        allowMouseEvents: true, // 마우스 이벤트 허용 (추가)
    });
});

  

document.addEventListener("DOMContentLoaded", function () {
    // 페이지 로딩이 완료되면 미리 로딩할 동영상 iframe을 가져옵니다.
    var iframeToPreload = document.querySelectorAll(".youtube iframe[loading='lazy']");
    // 미리 로딩할 동영상 iframe에 src 속성을 설정하여 사전에 로딩합니다.
    iframeToPreload.forEach(function (iframe) {
        iframe.src = iframe.dataset.src;
    });
});

let startPoint = 0;
let endPoint = 0;

// //////////////////////////////////////////

 // 스와이퍼 슬라이드 변경 시 배경색 변경하는 자바스크립트 코드
    document.addEventListener('DOMContentLoaded', function() {
      const swiper = new Swiper('.mySwiper', {
        // 여기에 스와이퍼 설정 옵션을 추가하세요
        // 필요한 경우 스와이퍼 동작을 커스터마이즈할 수 있습니다.
      });

      const swiperWrapper = document.querySelector('.swiper-wrapper');
      const backgroundColors = ['#FFC0CB', '#FFFF00', '#00FF00']; // 각 슬라이드에 적용할 배경색을 배열로 설정합니다.

      swiper.on('slideChange', function() {
        const activeSlideIndex = swiper.realIndex;
        if (activeSlideIndex >= 0 && activeSlideIndex < backgroundColors.length) {
          swiperWrapper.style.backgroundColor = backgroundColors[activeSlideIndex];
        }
      });
    });



    gsap.registerPlugin(MotionPathPlugin);


///////////////////////////////




////////////////////////// 
