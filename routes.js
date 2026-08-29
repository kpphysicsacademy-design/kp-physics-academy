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

/* Named routes for challenge destinations */
window.SkillUpRoutes.challengeDaily = "challenge.html";
window.SkillUpRoutes.challengeConcepts = "challenge-concepts.html";
window.SkillUpRoutes.challengeTimed = "challenge.html?mode=timed";

/* Helper: navigate using the central route map */
window.goToSkillUp = function(routeName) {
  const route = window.SkillUpRoutes[routeName];
  if (!route) {
    console.warn("Unknown SkillUp route:", routeName);
    return;
  }
  window.location.href = route;
};