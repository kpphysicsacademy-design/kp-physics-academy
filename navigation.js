/* SkillUp Central Navigation System */
(function(){
 const icons={
  home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>',
  learn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.5A3.5 3.5 0 0 1 8 4h8a4 4 0 0 1 4 4v12H8a4 4 0 0 0-4 1V4.5Z"/><path d="M8 4v17"/></svg>',
  practice:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m18 6 3-3"/></svg>',
  compete:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8v4a4 4 0 0 1-8 0V3Z"/><path d="M10 11h4v5l3 2H7l3-2v-5Z"/><path d="M5 3v2a4 4 0 0 0 3 3.9M19 3v2a4 4 0 0 1-3 3.9"/></svg>',
  profile:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>'
 };
 function route(name){return(window.SkillUpRoutes&&window.SkillUpRoutes[name])||"#";}
 function detectActive(){const p=(location.pathname.split("/").pop()||"index.html").toLowerCase();if(p==="index.html"||p==="skillup-home.html")return"home";if(p==="learn.html")return"learn";if(p==="practice.html")return"practice";if(["compete.html","league.html","challenge.html","challenge-concepts.html"].includes(p))return"compete";if(p==="profile.html")return"profile";return"";}
 window.renderSkillUpNavigation=function(active){document.querySelectorAll(".skillup-bottom-nav").forEach(n=>n.remove());const nav=document.createElement("nav");nav.className="skillup-bottom-nav";nav.setAttribute("aria-label","SkillUp main navigation");const items=[["home","Home"],["learn","Learn"],["practice","Practice"],["compete","Compete"],["profile","Profile"]];nav.innerHTML=items.map(([k,label])=>'<a href="'+route(k)+'" class="'+(active===k?"active":"")+'"><span class="skillup-icon skillup-nav-icon">'+icons[k]+'</span>'+label+'</a>').join("");document.body.appendChild(nav);};
 function install(){if(!window.SkillUpRoutes)return;document.querySelectorAll("nav.bottom,nav.bottom-nav,nav.skillup-bottom-nav").forEach(n=>{if(!n.classList.contains("skillup-bottom-nav"))n.remove();});window.renderSkillUpNavigation(detectActive());}
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();