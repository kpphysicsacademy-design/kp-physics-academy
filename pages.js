/* SkillUp Central Page Registry */
window.SkillUpPages = {
  main: [
    "index.html",
    "skillup-home.html",
    "learn.html",
    "practice.html",
    "compete.html",
    "question-bank.html",
    "leaderboard.html",
    "profile.html"
  ],
  compete: ["compete.html"],
  redirects: {
    "league.html": "compete.html#leagues",
    "challenge.html": "compete.html#challenges"
  },
  system: [
    "routes.js",
    "navigation.js",
    "common.css",
    "pages.js",
    "link-audit.js"
  ]
};

window.isSkillUpPageRegistered = function(path) {
  const clean = String(path || "").split("?")[0].split("#")[0];
  return Object.values(window.SkillUpPages)
    .filter(Array.isArray)
    .flat()
    .includes(clean) || Object.prototype.hasOwnProperty.call(window.SkillUpPages.redirects, clean);
};

window.getSkillUpRedirect = function(path) {
  const clean = String(path || "").split("?")[0].split("#")[0];
  return window.SkillUpPages.redirects[clean] || null;
};