// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// // SmoothScroll
// ScrollSmoother.create({
// 	wrapper: '.wrapper',
// 	content: '.content',
// 	smooth: 1.5
// })

// Navbar colors


// Swiper
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Animation
document.addEventListener('DOMContentLoaded', () => {
	const socialIcons = document.querySelectorAll('.card-area a');

	socialIcons.forEach(icon => {
			icon.addEventListener('mouseenter', () => {
					icon.classList.add('icon-hover');
			});

			icon.addEventListener('mouseleave', () => {
					icon.classList.remove('icon-hover');
			});
	});
});

