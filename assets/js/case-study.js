(()=>{
document.querySelectorAll('[data-roll]').forEach(el=>{const t=el.textContent;el.setAttribute('aria-label',t);el.textContent='';const w=document.createElement('span');w.className='roll';w.setAttribute('aria-hidden','true');
 [...t].forEach((c,i)=>{const l=document.createElement('span');l.className='rl';l.style.setProperty('--i',i);const s=c===' '?'&nbsp;':c;l.innerHTML=`<span class="ra">${s}</span><span class="rb">${s}</span>`;w.appendChild(l)});el.appendChild(w);el.classList.add('rw')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-revealed');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('[data-reveal]').forEach(e=>io.observe(e));
const box=document.getElementById('embed'),fr=box.querySelector('iframe');
const ok=()=>box.classList.add('ready');fr.addEventListener('load',ok);setTimeout(ok,8000);
document.getElementById('fs').addEventListener('click',()=>{const f=box.requestFullscreen||box.webkitRequestFullscreen;if(f)f.call(box);else window.open(fr.src,'_blank','noopener')});
})();
