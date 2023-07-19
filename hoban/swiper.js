
//   <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 2000, // 3초마다 자동으로 넘어감
    disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
  }
});