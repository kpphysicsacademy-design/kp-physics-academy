/* SkillUp Central Route System */
window.SkillUpRoutes = {
  home: "index.html",
  learn: "learn.html",
  practice: "practice.html",
  challenge: "challenge.html",
  league: "league.html",
  profile: "profile.html",
  login: "login.html"
};

/* Helper: navigate using the central route map */
window.goToSkillUp = function(routeName) {
  const route = window.SkillUpRoutes[routeName];
  if (!route) {
    console.warn("Unknown SkillUp route:", routeName);
    return;
  }
  window.location.href = route;
};