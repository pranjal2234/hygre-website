const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');

menuBtn.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',open);
});

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}));

document.getElementById('year').textContent=new Date().getFullYear();

function setupSlider(trackSelector, dotSelector, prevSelector, nextSelector){
  const track=document.querySelector(trackSelector);
  const slides=Array.from(track.children);
  const dots=document.querySelector(dotSelector);
  const prev=document.querySelector(prevSelector);
  const next=document.querySelector(nextSelector);

  if(!slides.length) return;

  let current=0;

  slides.forEach((_,i)=>{
    const dot=document.createElement('button');
    dot.className='dot'+(i===0?' active':'');
    dot.setAttribute('aria-label',`Go to item ${i+1}`);
    dot.addEventListener('click',()=>go(i));
    dots.appendChild(dot);
  });

  const update=()=>{
    track.style.transform=`translateX(-${current*100}%)`;
    dots.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===current));
  };

  const go=(index)=>{
    current=(index+slides.length)%slides.length;
    update();
  };

  prev.addEventListener('click',()=>go(current-1));
  next.addEventListener('click',()=>go(current+1));

  let startX=0;
  track.addEventListener('touchstart',e=>startX=e.touches[0].clientX,{passive:true});
  track.addEventListener('touchend',e=>{
    const distance=startX-e.changedTouches[0].clientX;
    if(Math.abs(distance)>50) go(current+(distance>0?1:-1));
  });
}

setupSlider('.photo-track','.photo-dots','.photo-prev','.photo-next');

const videos=[
  'videos/Dji_0714_compressed.mp4',
  'videos/system-demo.mp4'
];

const videoTrack=document.getElementById('videoTrack');
videos.forEach(src=>{
  const slide=document.createElement('div');
  slide.className='video-slide';
  slide.innerHTML=`<video controls preload="metadata"><source src="${src}" type="video/mp4">Your browser does not support video.</video>`;
  videoTrack.appendChild(slide);
});

setupSlider('.video-track','.video-dots','.video-prev','.video-next');
