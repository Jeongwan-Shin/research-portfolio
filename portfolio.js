function connectTabs(selector,attribute,prefix){
 const buttons=[...document.querySelectorAll(selector)];
 function activate(button){buttons.forEach(b=>{const active=b===button;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;document.getElementById(prefix+b.dataset[attribute]).hidden=!active;});}
 buttons.forEach((b,i)=>{b.addEventListener('click',()=>activate(b));b.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%buttons.length;else if(e.key==='ArrowLeft')n=(i+buttons.length-1)%buttons.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=buttons.length-1;else return;e.preventDefault();activate(buttons[n]);buttons[n].focus();});});
}
connectTabs('[data-panel]','panel','panel-');connectTabs('[data-result]','result','result-');
const dialog=document.querySelector('#figure-dialog');
document.querySelectorAll('[data-figure]').forEach(b=>b.addEventListener('click',()=>{const img=document.querySelector('#figure-image');img.src=b.dataset.figure;img.alt=b.dataset.caption;document.querySelector('#figure-title').textContent=b.dataset.caption;document.querySelector('#figure-original').href=b.dataset.figure;dialog.showModal();}));
document.querySelector('#figure-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
const aliases={'page-01':'main','page-02':'about','page-03':'research','page-04':'raphy','page-05':'motivation','page-06':'motivation','page-07':'motivation','page-08':'method','page-09':'method','page-10':'method','page-11':'method','page-12':'method','page-13':'method','page-14':'method','page-15':'training','page-16':'training','page-17':'training','page-18':'results','page-19':'results','page-20':'results','page-21':'qualitative','page-22':'simulation','page-23':'simulation','page-24':'simulation','page-25':'contact'};
if(aliases[location.hash.slice(1)])location.hash=aliases[location.hash.slice(1)];
