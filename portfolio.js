const jump=document.querySelector('#page-jump');
jump.addEventListener('change',()=>{location.hash=jump.value;});
const sections=[...document.querySelectorAll('[id^="page-"]')].filter(e=>e.id!=='page-jump');
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting)jump.value=e.target.id;}},{rootMargin:'-10% 0px -65% 0px'});sections.forEach(e=>observer.observe(e));
const dialog=document.querySelector('#slide-dialog');
document.querySelectorAll('[data-slide]').forEach(b=>b.addEventListener('click',()=>{
 const n=b.dataset.slide;document.querySelector('#slide-dialog-title').textContent=`원본 슬라이드 ${n} / 25`;
 const img=document.querySelector('#slide-large');img.src=`slide-${n}.webp`;img.alt=b.querySelector('img').alt;
 document.querySelector('#slide-original').href=img.src;dialog.showModal();
}));
document.querySelector('#slide-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
