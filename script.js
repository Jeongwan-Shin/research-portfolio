const scenes = [["Night", "밤길 소방도로 · 갓길 주차", "Night · Parked cars on a narrow street", "주차된 차량이 늘어선 좁은 야간 도로에서의 관측과 주행 추론을 확인합니다."], ["Snow", "눈길 · 인터섹션", "Snow · Intersection", "눈길 교차로에서 카메라와 레이더 관측, 주행 궤적을 함께 살펴봅니다."], ["Night", "밤길 · 고속 주행", "Night · High-speed driving", "야간 고속 주행 장면에서 물리적 관측과 예측 궤적을 확인합니다."], ["Snow", "눈길 · 다른 차량 진입", "Snow · Vehicle merging in", "눈길에서 다른 차량이 진입하는 상호작용을 살펴봅니다."], ["Interaction", "무단횡단", "Jaywalking pedestrian", "도로를 횡단하는 보행자가 포함된 장면의 관측과 주행 추론입니다."], ["Rain", "빗길 · 인터섹션 진입", "Rain · Entering an intersection", "비가 내리는 환경에서 교차로로 진입하는 주행 장면입니다."], ["Snow", "눈 내리는 날 · 정차 차량 피하기", "Snowfall · Avoiding stopped vehicles", "눈이 내리는 도로에서 정차 차량을 피해 진행하는 장면입니다."], ["Interaction", "정차 차량 확인", "Detecting a stopped vehicle", "도로의 정차 차량을 관측하고 예측 궤적을 생성하는 장면입니다."]];
const player=document.querySelector('#player');
if(player){
 const status=document.querySelector('#video-status');
 const buttons=[...document.querySelectorAll('[data-scene]')];
 function choose(n,play=false){
  const s=scenes[n-1],id=String(n).padStart(2,'0');
  player.pause();player.src=`scene-${id}.mp4`;player.poster=`scene-${id}.jpg`;player.setAttribute('aria-label',s[1]);player.load();
  document.querySelector('#scene-number').textContent=`SCENE ${id} / 08`;
  document.querySelector('#scene-title').textContent=s[1];document.querySelector('#scene-description').textContent=s[3];
  document.querySelector('#video-download').href=`scene-${id}.mp4`;
  buttons.forEach(b=>{const active=Number(b.dataset.scene)===n;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  history.replaceState(null,'',`${location.pathname}${location.search}#scene-${id}`);status.textContent='재생 버튼으로 영상을 재생할 수 있습니다.';
  if(play)player.play().catch(()=>{status.textContent='플레이어의 재생 버튼을 눌러 주세요.';});
 }
 buttons.forEach(b=>b.addEventListener('click',()=>choose(Number(b.dataset.scene),true)));
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  buttons.forEach(x=>x.hidden=b.dataset.filter!=='All'&&x.dataset.category!==b.dataset.filter);
 }));
 document.querySelector('#fullscreen').addEventListener('click',async()=>{try{if(player.requestFullscreen)await player.requestFullscreen();else if(player.webkitEnterFullscreen)player.webkitEnterFullscreen();else status.textContent='플레이어의 전체 화면 버튼을 이용해 주세요.';}catch{status.textContent='플레이어의 전체 화면 버튼을 이용해 주세요.';}});
 player.addEventListener('error',()=>{status.textContent='영상을 불러오지 못했습니다. 다운로드 링크를 이용하거나 다시 시도해 주세요.';});
 player.addEventListener('playing',()=>{status.textContent='재생 중 · 다른 장면을 선택하면 영상이 전환됩니다.';});
 const match=location.hash.match(/^#scene-0([1-8])$/);if(match){choose(Number(match[1]));document.querySelector('#videos')?.scrollIntoView();}
 const videoNav=document.querySelector('nav a[href="qualitative.html"]');if(videoNav)videoNav.setAttribute('aria-current','page');
}
