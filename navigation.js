/* SkillUp Central Navigation System */
(function(){
 const icons={
  home:'<svg class="nav-home" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>',
  learn:'<svg class="nav-learn" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.5A3.5 3.5 0 0 1 8 4h8a4 4 0 0 1 4 4v12H8a4 4 0 0 0-4 1V4.5Z"/><path d="M8 4v17"/></svg>',
  practice:'<svg class="nav-practice" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m18 6 3-3"/></svg>',
  compete:'<svg class="nav-compete" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8v4a4 4 0 0 1-8 0V3Z"/><path d="M10 11h4v5l3 2H7l3-2v-5Z"/><path d="M5 3v2a4 4 0 0 0 3 3.9M19 3v2a4 4 0 0 1-3 3.9"/></svg>',
  profile:'<svg class="nav-profile" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>'
 };
 function route(name){
  const fallback={home:"skillup-home.html",learn:"learn.html",practice:"practice.html",compete:"compete.html",profile:"profile.html"};
  return (window.SkillUpRoutes&&window.SkillUpRoutes[name])||fallback[name]||"#";
 }
 function detectActive(){const p=(location.pathname.split("/").pop()||"index.html").toLowerCase();if(p==="index.html"||p==="skillup-home.html")return"home";if(p==="learn.html"||/-learn\.html$/i.test(p)||/-path\.html$/i.test(p)||/full-path\.html$/i.test(p)||/neet-path\.html$/i.test(p)||/jee-path\.html$/i.test(p))return"learn";if(p==="practice.html")return"practice";if(["compete.html","league.html","challenge.html","challenge-concepts.html"].includes(p))return"compete";if(p==="profile.html")return"profile";return"";}
 window.renderSkillUpNavigation=function(active){document.querySelectorAll(".skillup-bottom-nav").forEach(n=>n.remove());const nav=document.createElement("nav");nav.className="skillup-bottom-nav";nav.setAttribute("aria-label","SkillUp main navigation");const items=[["home","Home"],["learn","Learn"],["practice","Practice"],["compete","Compete"],["profile","Profile"]];nav.innerHTML=items.map(([k,label])=>'<a href="'+route(k)+'" class="'+(active===k?"active":"")+'"><span class="skillup-icon skillup-nav-icon">'+icons[k]+'</span>'+label+'</a>').join("");document.body.appendChild(nav);};
 function install(){
  if(!document.getElementById("skillup-nav-style")){
   const s=document.createElement("style");s.id="skillup-nav-style";s.textContent=`
   .skillup-bottom-nav{position:fixed;left:0;right:0;bottom:0;height:64px;background:#fff;border-top:1px solid #e7ebf2;display:flex;align-items:center;justify-content:space-around;z-index:9999;padding:4px 6px calc(4px + env(safe-area-inset-bottom,0px));box-shadow:0 -4px 18px rgba(23,32,51,.06)}
   .skillup-bottom-nav a{min-width:58px;flex:1;text-decoration:none;color:#6b7280;font-size:9px;font-weight:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;line-height:1}
   .skillup-nav-icon{width:22px;height:22px;display:grid;place-items:center}.skillup-nav-icon svg{width:21px;height:21px;stroke:currentColor;fill:none}
   .skillup-bottom-nav a:nth-child(1){color:#f59e0b}.skillup-bottom-nav a:nth-child(2){color:#6366f1}.skillup-bottom-nav a:nth-child(3){color:#10b981}.skillup-bottom-nav a:nth-child(4){color:#d97706}.skillup-bottom-nav a:nth-child(5){color:#ec4899}
   .skillup-bottom-nav a.active{transform:translateY(-2px);filter:saturate(1.2);text-shadow:0 1px 0 rgba(0,0,0,.03)}body{padding-bottom:76px!important}
   `;document.head.appendChild(s);
  }
  document.querySelectorAll("nav.bottom,nav.bottom-nav,nav.skillup-bottom-nav").forEach(n=>{if(!n.classList.contains("skillup-bottom-nav"))n.remove();});
  window.renderSkillUpNavigation(detectActive());
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();