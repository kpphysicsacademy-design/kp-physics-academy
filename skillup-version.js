/* SkillUp UI version control
   Increment this value whenever shared UI, footer, routing or syllabus assets change.
*/
window.SKILLUP_VERSION = '20260825.1';
window.SKILLUP_BUILD = '2026-08-25';

window.skillUpUrl = function(path, params) {
  const url = new URL(path, window.location.href);
  url.searchParams.set('v', window.SKILLUP_VERSION);
  if (params) Object.keys(params).forEach(k => url.searchParams.set(k, params[k]));
  return url.pathname + '?' + url.searchParams.toString();
};

document.addEventListener('DOMContentLoaded', function () {
  document.documentElement.dataset.skillupVersion = window.SKILLUP_VERSION;
  document.querySelectorAll('[data-skillup-version]').forEach(function (el) {
    el.textContent = window.SKILLUP_VERSION;
  });
});
