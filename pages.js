/* SkillUp Central Page Registry */
window.SkillUpPages = {
  main: [
    "index.html",
    "skillup-home.html",
    "learn.html",
    "practice.html",
    "compete.html",
    "profile.html"
  ],
  compete: [
    "compete.html"
  ],
  system: [
    "routes.js",
    "navigation.js",
    "common.css",
    "pages.js",
    "link-audit.js"
  ]
};

/* Check whether a registered page exists in the central registry */
window.isSkillUpPageRegistered = function(path) {
  return Object.values(window.SkillUpPages)
    .filter(Array.isArray)
    .flat()
    .includes(path);
};