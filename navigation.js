/* SkillUp Central Navigation System */
(function(){
 const icons={home:'🏠',practice:'🎯',compete:'🏆',profile:'👤'};
 function route(name){
  const fallback={home:"skillup-home.html",practice:"practice.html",compete:"compete.html",profile:"profile.html"};
  let target=(window.SkillUpRoutes&&window.SkillUpRoutes[name])||fallback[name]||"#";
  const subject=new URLSearchParams(location.search).get("subject");
  if(subject && !/[?&]subject=/.test(target) && ["home","practice","compete"].includes(name)) target+=(target.includes("?")?"&":"?")+"subject="+encodeURIComponent(subject);
  return target;
 }
 function detectActive(){
  const p=(location.pathname.split("/").pop()||"index.html").toLowerCase();
  if(p==="index.html"||p==="skillup-home.html")return"home";
  if(p==="practice.html")return"practice";
  if(["compete.html","league.html","challenge.html","challenge-concepts.html"].includes(p))return"compete";
  if(p==="profile.html")return"profile";
  return"";
 }
 window.renderSkillUpNavigation=function(active){
  document.querySelectorAll(".skillup-bottom-nav").forEach(n=>n.remove());
  const nav=document.createElement("nav");nav.className="skillup-bottom-nav";nav.setAttribute("aria-label","SkillUp main navigation");
  const items=[["home","Home"],["practice","Practice"],["compete","League"],["profile","Profile"]];
  nav.innerHTML=items.map(([k,label])=>'<a href="'+route(k)+'" class="'+(active===k?"active":"")+'" aria-label="'+label+'" title="'+label+'"><span class="skillup-nav-icon" aria-hidden="true">'+icons[k]+'</span></a>').join("");
  document.body.appendChild(nav);
 };
 function addBotanyPracticeButtons(){
  if((location.pathname.split('/').pop()||'').toLowerCase()!=='botany-full-path.html')return;
  if(!document.querySelector('.node-card'))return;
  if(!document.getElementById('botany-duolingo-style')){
   const s=document.createElement('style');s.id='botany-duolingo-style';s.textContent=`
    .botany-practice-btn{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;margin-top:9px;padding:8px 10px;border-radius:10px;background:#20a447;color:#fff;text-decoration:none;font-size:9px;font-weight:950;box-shadow:0 3px 0 #16853b;transition:.15s ease}
    .botany-practice-btn:hover{transform:translateY(-2px);box-shadow:0 5px 0 #16853b}
    .botany-practice-btn:active{transform:translateY(1px);box-shadow:0 2px 0 #16853b}
    .botany-practice-label{letter-spacing:.2px}
    @media(max-width:720px){.botany-practice-btn{font-size:8px;padding:7px 8px}}
   `;document.head.appendChild(s);
  }
  document.querySelectorAll('.node-card').forEach(card=>{
   if(card.querySelector('.botany-practice-btn'))return;
   const h=card.querySelector('h3');if(!h)return;
   const title=h.textContent.replace(/^\S+\s+/,'').trim();if(!title)return;
   const a=document.createElement('a');a.className='botany-practice-btn';a.href='question-bank.html?subject=botany&topic='+encodeURIComponent(title);a.innerHTML='<span>🎯</span><span class="botany-practice-label">PRACTICE QUESTIONS</span>';
   a.addEventListener('click',e=>e.stopPropagation());
   card.appendChild(a);
  });
 }
 function install(){
  if(!document.getElementById("skillup-nav-style")){
   const s=document.createElement("style");s.id="skillup-nav-style";s.textContent=`
   .skillup-bottom-nav{position:fixed!important;left:0!important;right:0!important;bottom:0!important;height:64px!important;box-sizing:border-box!important;background:#fff!important;border-top:1px solid #e7ebf2!important;display:flex!important;align-items:center!important;justify-content:space-around!important;z-index:9999!important;padding:5px 8px calc(5px + env(safe-area-inset-bottom,0px))!important;box-shadow:0 -5px 20px rgba(23,32,51,.08)!important}
   .skillup-bottom-nav a{min-width:0!important;flex:1 1 25%!important;max-width:25%!important;height:52px!important;border-radius:14px!important;text-decoration:none!important;color:#667085!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:3px 2px!important;margin:0!important;transition:background .15s ease,color .15s ease,transform .15s ease!important}
   .skillup-nav-icon{font-size:22px!important;line-height:1!important;width:30px!important;height:30px!important;display:grid!important;place-items:center!important}
   .skillup-bottom-nav a.active{color:#16a34a!important;background:#eaf8e6!important;transform:translateY(-1px)!important}
   body{padding-bottom:72px!important}
   @media(max-width:420px){.skillup-bottom-nav{padding-left:4px!important;padding-right:4px!important}.skillup-bottom-nav a{height:50px!important;border-radius:12px!important}.skillup-nav-icon{font-size:21px!important}}
   `;document.head.appendChild(s);
  }
  document.querySelectorAll("nav.bottom,nav.bottom-nav,nav.nav,nav.skillup-bottom-nav,.bottom-nav,.skillup-nav").forEach(n=>{if(!n.classList.contains("skillup-bottom-nav"))n.remove();});
  window.renderSkillUpNavigation(detectActive());
  addBotanyPracticeButtons();
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();