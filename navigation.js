/* SkillUp Central Navigation System */
(function () {
  function route(name) {
    return (window.SkillUpRoutes && window.SkillUpRoutes[name]) || "#";
  }

  window.renderSkillUpNavigation = function (active) {
    const nav = document.createElement("nav");
    nav.className = "skillup-bottom-nav";
    nav.innerHTML = `
      <a href="${route("home")}" class="${active === "home" ? "active" : ""}"><span>🏠</span>Home</a>
      <a href="${route("learn")}" class="${active === "learn" ? "active" : ""}"><span>📚</span>Learn</a>
      <a href="${route("practice")}" class="${active === "practice" ? "active" : ""}"><span>🎯</span>Practice</a>
      <a href="${route("league")}" class="${active === "league" ? "active" : ""}"><span>🏆</span>League</a>
      <a href="${route("profile")}" class="${active === "profile" ? "active" : ""}"><span>👤</span>Profile</a>
    `;
    document.body.appendChild(nav);
  };
})();