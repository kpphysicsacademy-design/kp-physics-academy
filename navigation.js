/* SkillUp Central Navigation System */
(function(){
 const icons={home:'🏠',learn:'🧭',practice:'🎯',compete:'🏆',profile:'👤'};
 function route(name){
  const fallback={home:"skillup-home.html",learn:"learn.html",practice:"practice.html",compete:"compete.html",profile:"profile.html"};
  return (window.SkillUpRoutes&&window.SkillUpRoutes[name])||fallback[name]||"#";
 }
 function detectActive(){const p=(location.pathname.split("/").pop()||"index.html").toLowerCase();if(p==="index.html"||p==="skillup-home.html")return"home";if(p==="learn.html"||/-learn\.html$/i.test(p)||/-path\.html$/i.test(p)||/full-path\.html$/i.test(p)||/neet-path\.html$/i.test(p)||/jee-path\.html$/i.test(p))return"learn";if(p==="practice.html")return"practice";if(["compete.html","league.html","challenge.html","challenge-concepts.html"].includes(p))return"compete";if(p==="profile.html")return"profile";return"";}
 window.renderSkillUpNavigation=function(active){document.querySelectorAll(".skillup-bottom-nav").forEach(n=>n.remove());const nav=document.createElement("nav");nav.className="skillup-bottom-nav";nav.setAttribute("aria-label","SkillUp main navigation");const items=[["home","Home"],["learn","Learn"],["practice","Practice"],["compete","League"],["profile","Profile"]];nav.innerHTML=items.map(([k,label])=>'<a href="'+route(k)+'" class="'+(active===k?"active":"")+'"><span class="skillup-nav-icon" aria-hidden="true">'+icons[k]+'</span><span>'+label+'</span></a>').join("");document.body.appendChild(nav);};
 function install(){
  if(!document.getElementById("skillup-nav-style")){
   const s=document.createElement("style");s.id="skillup-nav-style";s.textContent=`
   .skillup-bottom-nav{position:fixed;left:0;right:0;bottom:0;height:68px;background:#fff;border-top:1px solid #e7ebf2;display:flex;align-items:center;justify-content:space-around;z-index:9999;padding:6px 4px calc(6px + env(safe-area-inset-bottom,0px));box-shadow:0 -4px 18px rgba(23,32,51,.06)}
   .skillup-bottom-nav a{min-width:60px;flex:1;text-decoration:none;color:#6b7280;font-size:11px;font-weight:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;line-height:1}
   .skillup-nav-icon{font-size:22px;line-height:1;display:grid;place-items:center}
   .skillup-bottom-nav a.active{color:#16a34a;transform:translateY(-2px);filter:saturate(1.1);text-shadow:0 1px 0 rgba(0,0,0,.03)}
   body{padding-bottom:76px!important}
   `;document.head.appendChild(s);
  }
  document.querySelectorAll("nav.bottom,nav.bottom-nav,nav.skillup-bottom-nav").forEach(n=>{if(!n.classList.contains("skillup-bottom-nav"))n.remove();});
  window.renderSkillUpNavigation(detectActive());
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();