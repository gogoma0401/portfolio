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
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let prevScrollY = 0; // 이전 스크롤 위치를 저장하는 변수
let isScrolling = false;
let animationStarted = false; // 애니메이션 시작 여부를 저장하는 변수
let animationFinished = false; // 애니메이션 종료 여부를 저장하는 변수

function handleScroll() {
    if (!animationStarted) {
        animationStarted = true;
        scrollAnimation();
    }
    isScrolling = true;
}

// 초기 호출
handleScroll();

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', handleScroll);

function scrollAnimation() {
    if (isScrolling) {
        const contentElements = document.querySelectorAll('.big .content span');
        const scrollPosition = window.scrollY;

        contentElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollPosition;
            const elementBottom = elementTop + rect.height;

            // 스크롤 위치가 요소의 상단과 하단 사이에 있는지 확인
            if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
                const scrollPercentage = (scrollPosition - elementTop) / (elementBottom - elementTop);
                // 움직일 거리 설정 (예시로 -40px을 기준으로 움직임)
                const moveDistance = -40 + (scrollPercentage * 300); // 애니메이션 최대 이동 거리를 300px로 설정

                // 요소에 움직임 적용
                element.style.transform = `translateX(${moveDistance}px)`;
                element.style.opacity = '1';
            } else {
                // 스크롤 역방향일 때, 원래 위치로 돌아가게 처리
                if (scrollPosition < prevScrollY && scrollPosition >= elementTop) {
                    element.style.transform = 'translateX(-10px)';
                    element.style.opacity = '0';
                }
            }
        });

        // 이전 스크롤 위치 갱신
        prevScrollY = scrollPosition;
        isScrolling = false;
    }

    // 애니메이션 종료 여부 확인 후 다음 리페인트 이전에 다시 함수 호출
    if (!animationFinished) {
        requestAnimationFrame(scrollAnimation);
    }
}