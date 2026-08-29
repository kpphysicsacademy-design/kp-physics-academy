/* SkillUp Central Route System */
window.SkillUpRoutes = {
  home: "index.html",
  learn: "learn.html",
  practice: "practice.html",
  compete: "compete.html",
  challenge: "compete.html#challenges",
  league: "compete.html#leagues",
  profile: "profile.html",
  login: "login.html"
};

window.goToSkillUp = function(routeName) {
  const route = window.SkillUpRoutes[routeName];
  if (!route) return console.warn("Unknown SkillUp route:", routeName);
  window.location.href = route;
};