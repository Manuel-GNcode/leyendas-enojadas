const $btnRules = document.getElementById('btn-rules');
const $btnMenu = document.getElementById('btn-menu');
const $slideMenu = document.getElementById('slide-menu');
const $navA =document.querySelectorAll('.nav-a');

$btnRules.addEventListener('click', ()=>{
  const enlace = document.createElement("a");
  enlace.href = "/docs/instrucciones_leyendas_enojadas.pdf";
  enlace.download = "instrucciones_leyendas_enojadas.pdf";
  enlace.click();
})

let menuHide = true;
const tweenMenu = gsap.to($slideMenu, {
  xPercent: -100,
  duration: 0.4,
  paused: true,
})

$btnMenu.addEventListener('click', ()=>{
  if (menuHide) tweenMenu.restart();
  else tweenMenu.reverse();
  menuHide = !menuHide;
})
$navA.forEach(element => {
  element.addEventListener('click', ()=>{
    tweenMenu.reverse();
    menuHide = !menuHide;
  })
});