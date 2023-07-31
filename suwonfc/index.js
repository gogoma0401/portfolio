const custom_cursor = document.getElementById("custom_cursor");
const custom_cursor_icon = custom_cursor.querySelector(".custom-cursor-icon");

// 각 섹션에 대한 커서 아이콘 텍스트를 저장하는 객체
const sectionIcons = {
    'ourbusiness': 'VIEW MORE',
    'inner_club': 'DRAG',
    'youtube': 'PLAY',
    'news': 'CLICK'
};

function custom_mousemove(e) {
    var custom_cursor_width = custom_cursor.offsetWidth * 0.5;
    var custom_cursor_height = custom_cursor.offsetHeight * 0.5;
    var custom_cursor_x = e.clientX - custom_cursor_width;
    var custom_cursor_y = e.clientY - custom_cursor_height;
    var custom_cursor_pos = `translate(${custom_cursor_x}px, ${custom_cursor_y}px)`;
    custom_cursor.style.transform = custom_cursor_pos;
}

document.addEventListener('mousemove', custom_mousemove);

function custom_show_cursor(e) {
    const sectionClass = e.target.closest('section').classList[0]; // 해당 섹션의 클래스 이름 가져오기
    custom_cursor_icon.textContent = sectionIcons[sectionClass]; // 해당 섹션의 커서 아이콘 텍스트로 변경
    custom_cursor.classList.remove('custom_cursor_hidden');
    custom_cursor.classList.add('custom_cursor_visible');
}

function custom_hide_cursor(e) {
    custom_cursor.classList.remove('custom_cursor_visible');
    custom_cursor.classList.add('custom_cursor_hidden');
}

function custom_hover_cursor(e) {
    custom_cursor.classList.add('custom_cursor_hover');
}

function custom_unhover_cursor(e) {
    custom_cursor.classList.remove('custom_cursor_hover');
}

document.querySelector('.ourbusiness').addEventListener('mouseenter', custom_show_cursor);
document.querySelector('.ourbusiness').addEventListener('mouseleave', custom_hide_cursor);

document.querySelector('.inner_club').addEventListener('mouseenter', custom_show_cursor);
document.querySelector('.inner_club').addEventListener('mouseleave', custom_hide_cursor);

document.querySelector('.youtube').addEventListener('mouseenter', custom_show_cursor);
document.querySelector('.youtube').addEventListener('mouseleave', custom_hide_cursor);

document.querySelector('.news').addEventListener('mouseenter', custom_show_cursor);
document.querySelector('.news').addEventListener('mouseleave', custom_hide_cursor);

// .big 섹션 외에는 커스텀 커서가 보이지 않도록 이벤트 리스너 추가
document.querySelectorAll('a, input, button, .mycustomclass').forEach(item => {
    if (!item.closest('.big')) {
        item.addEventListener('mouseenter', custom_hover_cursor);
        item.addEventListener('mouseleave', custom_unhover_cursor);
    }
})

// 동영상 요소를 선택하고 이벤트 리스너 등록
function addVideoEventListeners() {
    const videoElements = document.querySelectorAll('.youtube iframe');
    videoElements.forEach(videoElement => {
        videoElement.addEventListener('mouseenter', function (e) {
            e.target.style.pointerEvents = 'none'; // 동영상 요소 위에서 커서 이벤트 무시
        });
        videoElement.addEventListener('mouseleave', function (e) {
            e.target.style.pointerEvents = 'auto'; // 동영상 요소에서 커서 이벤트 다시 활성화
        });
    });
}

// Add video event listeners
addVideoEventListeners();

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
            
            }
            // 롤링 애니메이션 다시 시작
            setTimeout(animateRolling, 6000); // 딜레이 값을 2초로 변경하여 느리게 롤링되도록 설정
        });
    }

    animateRolling(); // 애니메이션 시작
}




var swiper = new Swiper(".inner_cont .mySwiper", {
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

