/* SkillUp Central Page Registry */
window.SkillUpPages = {
  main: [
    "index.html",
    "skillup-home.html",
    "learn.html",
    "practice.html",
    "league.html",
    "profile.html"
  ],
  compete: [
    "league.html",
    "challenge.html",
    "challenge-concepts.html"
  ],
  system: [
    "routes.js",
    "navigation.js",
    "common.css",
    "pages.js"
  ]
};

/* Check whether a registered page exists in the central registry */
window.isSkillUpPageRegistered = function(path) {
  return Object.values(window.SkillUpPages)
    .filter(Array.isArray)
    .flat()
    .includes(path);
};