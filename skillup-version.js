/* SkillUp UI version control */
window.SKILLUP_VERSION = '20260824.5';
window.skillUpUrl = function(path, params) {
  const url = new URL(path, window.location.href);
  url.searchParams.set('v', window.SKILLUP_VERSION);
  if (params) Object.keys(params).forEach(k => url.searchParams.set(k, params[k]));
  return url.pathname + '?' + url.searchParams.toString();
};
