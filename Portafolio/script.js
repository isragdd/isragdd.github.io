import { animate } from 'https://cdn.skypack.dev/animejs'
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card')
  
  // Animate subtitle
  animate('.subtitle', {
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 1000,
    delay: 500,
    easing: 'out(3)'
  })
  
  // Animate background gradient
  function rnd(min, max){return Math.random()*(max-min)+min}
  animate('body', {
    '--c1': ['#18000c','#2a0015','#1f0030','#18000c'],
    '--c2': ['#0e001b','#1a0033','#120029','#0e001b'],
    '--c3': ['#001529','#002045','#00183a','#001529'],
    '--d1': rnd(-360,360),
    duration:4000,
    easing:'inOutQuad',
    loop:true,
    alternate:true
  })
  
  // Card hover animation
  cards.forEach(card=>{
    card.addEventListener('mouseover',()=>{animate(card,{scale:1.02,rotate:'0.3deg',easing:'outQuad',duration:100})})
    card.addEventListener('mouseout',()=>{animate(card,{scale:1,rotate:'0deg',easing:'out(3)',duration:100})})
  })
  
  // Confetti for li clicks
  const confettiCount = 200
  const confettiDefaults = {origin:{y:1.2}}
  function fireConfetti(particleRatio,options){
    confetti({...confettiDefaults,...options,particleCount:Math.floor(confettiCount*particleRatio)})
  }
  document.querySelectorAll('li').forEach(li=>{
    li.addEventListener('click',()=>{fireConfetti(0.25,{spread:26,startVelocity:55})})
  })
  
  // Animate cards on load
  animate('.card',{
    opacity:[0,1],
    translateY:[50,0],
    delay:(el,i)=>800+i*300,
    duration:1000,
    easing:'out(3)',
    loop:false
  })
  
  // Animate footer
  animate('footer',{
    opacity:[0,1],
    duration:1500,
    delay:2000,
    easing:'out(3)'
  })

  // Counter animation logic
  function animateCounter(el,target,duration=2000,isDecimal=false,isCoffee=false){
    const startValue = 0
    const startTime = performance.now()
    function updateCounter(now){
      const elapsed = now-startTime
      const progress = Math.min(elapsed/duration,1)
      const easeProgress = 1-Math.pow(1-progress,3)
      if(isCoffee){
        if(progress<0.7){
          el.textContent = Math.floor(easeProgress*999999/0.7).toLocaleString()
        } else {
          const fadeProgress=(progress-0.7)/0.3
          const smoothFade=fadeProgress*fadeProgress*(3-2*fadeProgress)
          el.style.opacity=1-smoothFade*0.3
          el.style.transform=`scale(${1+smoothFade*0.1})`
          if(fadeProgress>0.5 && el.textContent!=='∞'){
            el.textContent='∞'
            el.style.opacity=smoothFade*0.7+0.3
          }
          if(fadeProgress>=0.8){el.style.opacity=1;el.style.transform='scale(1)'}
        }
      } else {
        const currentValue = startValue + (target-startValue)*easeProgress
        if(isDecimal){
          el.textContent = progress>=0.95?target.toString():currentValue.toFixed(2)
        } else {
          el.textContent=Math.floor(currentValue)
        }
      }
      if(progress<1)requestAnimationFrame(updateCounter)
    }
    requestAnimationFrame(updateCounter)
  }

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.querySelectorAll('.stat-number').forEach((el,i)=>{
          const target=el.dataset.target
          const type=el.dataset.type
          const hasDecimals=el.dataset.decimals==='true'
          setTimeout(()=>{
            if(type==='coffee'){animateCounter(el,null,4000,false,true)}
            else if(type==='years'){animateCounter(el,parseFloat(target),2500,true)}
            else{animateCounter(el,parseInt(target),2000)}
          },i*200)
        })
        observer.unobserve(entry.target)
      }
    })
  },{threshold:0.5})

  const statsSection=document.querySelector('.contact-stats')
  if(statsSection)observer.observe(statsSection)
})

window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Modal logic for project cards
    const cards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalImages = document.getElementById('modalImages');
    const modalClose = document.getElementById('modalClose');
    
    cards.forEach(card => {
      card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modalImages.innerHTML = '';
        
        (card.dataset.images || '').split(',').forEach(img => {
          if(img.trim()) {
            const image = document.createElement('img');
            image.src = img.trim();
            image.alt = card.dataset.title + ' image';
            modalImages.appendChild(image);
          }
        });
        
        modal.classList.add('active');
      });
    });

    function closeModal() {
      modal.classList.add('slide-out');
      modal.querySelector('.modal-content').addEventListener('animationend', () => {
        modal.classList.remove('active', 'slide-out');
      }, { once: true });
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', e => { 
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
