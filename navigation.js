/* SkillUp Central Navigation System */
(function () {
  function route(name) {
    return (window.SkillUpRoutes && window.SkillUpRoutes[name]) || "#";
  }
  function detectActive() {
    const page=(location.pathname.split("/").pop()||"index.html").toLowerCase();
    if(page==="index.html"||page==="skillup-home.html") return "home";
    if(page==="learn.html") return "learn";
    if(page==="practice.html") return "practice";
    if(page==="league.html"||page==="challenge.html"||page==="challenge-concepts.html") return "compete";
    if(page==="profile.html") return "profile";
    return "";
  }
  window.renderSkillUpNavigation=function(active){
    document.querySelectorAll(".skillup-bottom-nav").forEach(n=>n.remove());
    const nav=document.createElement("nav");
    nav.className="skillup-bottom-nav";
    nav.setAttribute("aria-label","SkillUp main navigation");
    nav.innerHTML=`
      <a href="${route("home")}" class="${active==="home"?"active":""}"><span>🏠</span>Home</a>
      <a href="${route("learn")}" class="${active==="learn"?"active":""}"><span>📚</span>Learn</a>
      <a href="${route("practice")}" class="${active==="practice"?"active":""}"><span>🎯</span>Practice</a>
      <a href="${route("compete")}" class="${active==="compete"?"active":""}"><span>⚡</span>Compete</a>
      <a href="${route("profile")}" class="${active==="profile"?"active":""}"><span>👤</span>Profile</a>`;
    document.body.appendChild(nav);
  };
  function install(){
    if(!window.SkillUpRoutes)return;
    document.querySelectorAll("nav.bottom, nav.bottom-nav, nav.skillup-bottom-nav").forEach(n=>{if(!n.classList.contains("skillup-bottom-nav"))n.remove();});
    window.renderSkillUpNavigation(detectActive());
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",install);else install();
})();