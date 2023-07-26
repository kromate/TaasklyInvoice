import { gsap } from 'gsap'

export const useSlideUpAnimation = () => {
    const beforeEnter = (el:any) => {
	el.style.opacity = 0
	el.style.transform = 'translateY(100px)'
}
const enter = (el:any, done:any) => {
	gsap.to(el, {
		opacity: 1,
		y: 0,
		duration: 0.5,
		onComplete: done,
		delay: el.dataset.index * 0.1
	})
}

    return { beforeEnter, enter }
}
