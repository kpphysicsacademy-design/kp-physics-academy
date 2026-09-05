/* SkillUp Central Navigation System */
(function(){
 const icons={home:'🏠',profile:'👤'};
 function route(name){
  const fallback={home:"skillup-home.html",learn:"learn.html",practice:"practice.html",compete:"compete.html",profile:"profile.html"};
  let target=(window.SkillUpRoutes&&window.SkillUpRoutes[name])||fallback[name]||"#";
  const subject=new URLSearchParams(location.search).get("subject");
  if(subject && !/[?&]subject=/.test(target) && ["home","learn","practice","compete"].includes(name)) target+=(target.includes("?")?"&":"?")+"subject="+encodeURIComponent(subject);
  return target;
 }
 function detectActive(){const p=(location.pathname.split("/").pop()||"index.html").toLowerCase();if(p==="index.html"||p==="skillup-home.html")return"home";if(p==="practice.html")return"practice";if(["compete.html","league.html","challenge.html","challenge-concepts.html"].includes(p))return"compete";if(p==="profile.html")return"profile";if(p==="learn.html"||/-learn\.html$/i.test(p)||/-path\.html$/i.test(p)||/full-path\.html$/i.test(p)||/neet-path\.html$/i.test(p)||/jee-path\.html$/i.test(p))return"learn";return"";}
 window.renderSkillUpNavigation=function(active){document.querySelectorAll(".skillup-bottom-nav").forEach(n=>n.remove());const nav=document.createElement("nav");nav.className="skillup-bottom-nav";nav.setAttribute("aria-label","SkillUp main navigation");const items=[["home","Home"],["learn","Learn"],["practice","Practice"],["compete","League"],["profile","Profile"]];nav.innerHTML=items.map(([k,label])=>'<a href="'+route(k)+'" class="'+(active===k?"active":"")+'">'+(k==="learn"||k==="practice"||k==="compete"?'':'<span class="skillup-nav-icon" aria-hidden="true">'+icons[k]+'</span>')+'<span>'+label+'</span></a>').join("");document.body.appendChild(nav);};
 function install(){if(!document.getElementById("skillup-nav-style")){const s=document.createElement("style");s.id="skillup-nav-style";s.textContent=`
 .skillup-bottom-nav{position:fixed!important;left:0!important;right:0!important;bottom:0!important;height:64px!important;box-sizing:border-box!important;background:#fff!important;border-top:1px solid #e7ebf2!important;display:flex!important;align-items:center!important;justify-content:space-around!important;z-index:9999!important;padding:5px 8px calc(5px + env(safe-area-inset-bottom,0px))!important;box-shadow:0 -5px 20px rgba(23,32,51,.08)!important}
 .skillup-bottom-nav a{min-width:0!important;flex:1 1 20%!important;max-width:20%!important;height:52px!important;border-radius:14px!important;text-decoration:none!important;color:#667085!important;font-size:11px!important;font-weight:800!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:3px!important;line-height:1!important;padding:3px 2px!important;margin:0!important;transition:background .15s ease,color .15s ease,transform .15s ease!important}
 .skillup-bottom-nav a>span:not(.skillup-nav-icon){font-size:11px!important;font-weight:800!important;line-height:1.1!important;margin:0!important;padding:0!important;white-space:nowrap!important}
 .skillup-nav-icon{font-size:20px!important;line-height:1!important;width:22px!important;height:22px!important;display:grid!important;place-items:center!important}
 .skillup-bottom-nav a.active{color:#16a34a!important;background:#eaf8e6!important;transform:translateY(-1px)!important}
 body{padding-bottom:72px!important}
 @media(max-width:420px){.skillup-bottom-nav{padding-left:4px!important;padding-right:4px!important}.skillup-bottom-nav a{height:50px!important;border-radius:12px!important}.skillup-bottom-nav a>span:not(.skillup-nav-icon){font-size:10px!important}.skillup-nav-icon{font-size:19px!important}}
 `;document.head.appendChild(s);}document.querySelectorAll("nav.bottom,nav.bottom-nav,nav.nav,nav.skillup-bottom-nav,.bottom-nav,.skillup-nav").forEach(n=>{if(!n.classList.contains("skillup-bottom-nav"))n.remove();});window.renderSkillUpNavigation(detectActive());}
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();