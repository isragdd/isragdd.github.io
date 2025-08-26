import { animate } from 'https://cdn.skypack.dev/animejs'

const card = document.getElementById("")

animate('.subtitle', {
  opacity: [0, 1],
  translateY: [-20, 0],
  duration: 1000,
  delay: 500,
  easing: 'out(3)'
})

animate('.card', {
  opacity: [0, 1],
  translateY: [50, 0],
  delay: (el, i) => 800 + i * 300,
  duration: 1000,
  easing: 'out(3)',
  loop: false
})

animate('footer', {
  opacity: [0, 1],
  duration: 1500,
  delay: 2000,
  easing: 'out(3)'
})
