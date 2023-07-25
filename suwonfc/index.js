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

////////////////////////////////////
 function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        let prevScrollY = 0;
        let isScrolling = false;
        let animationStarted = false;
        let animationFinished = false;

        const contentElements = document.querySelectorAll('.big .content span.animation');

        function handleScroll() {
            if (!animationStarted) {
                animationStarted = true;
                scrollAnimation();
            }
            isScrolling = true;
        }

        function scrollAnimation() {
            if (isScrolling) {
                const scrollPosition = window.scrollY;

                contentElements.forEach(element => {
                    const animationDuration = parseFloat(window.getComputedStyle(element).animationDuration) * 1000;
                    const elementOffsetTop = element.offsetTop;
                    const scrollDistance = Math.abs(scrollPosition - elementOffsetTop);

                    if (scrollDistance <= window.innerHeight / 2) {
                        if (scrollPosition > prevScrollY) {
                            element.classList.add('active');
                        } else {
                            element.classList.remove('active');
                        }
                    } else {
                        element.classList.remove('active');
                    }

                    setTimeout(() => {
                        element.style.opacity = '';
                    }, animationDuration);
                });

                prevScrollY = scrollPosition;
                isScrolling = false;
                requestAnimationFrame(scrollAnimation);
            }
        }

        window.addEventListener('scroll', handleScroll);