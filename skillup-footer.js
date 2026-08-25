/* SkillUp Global Footer — one footer for Home, Learn, Practice, League and Profile */
(function(){
  const file = location.pathname.split('/').pop().toLowerCase();
  const subjectMap = {
    'physics-learn.html':'physics',
    'chemistry-learn.html':'chemistry',
    'botany-learn.html':'botany',
    'zoology-learn.html':'zoology',
    'maths-learn.html':'maths'
  };
  const subject = subjectMap[file] || new URLSearchParams(location.search).get('subject') || 'physics';
  const learnPage = subjectMap[file] ? file : 'learn.html';
  const nav = document.querySelector('.bottom');
  if(!nav) return;

  nav.className = 'bottom skillup-global-footer';
  nav.innerHTML = `
    <a data-page="home" href="skillup-home.html"><span>🏠</span><b>Home</b></a>
    <a data-page="learn" href="${learnPage}"><span>🧭</span><b>Learn</b></a>
    <a data-page="practice" href="practice.html?subject=${encodeURIComponent(subject)}"><span>🎯</span><b>Practice</b></a>
    <a data-page="league" href="league.html?subject=${encodeURIComponent(subject)}"><span>🏆</span><b>League</b></a>
    <a data-page="profile" href="profile.html"><span>👤</span><b>Profile</b></a>`;

  let active = 'home';
  if(subjectMap[file]) active = 'learn';
  else if(file === 'practice.html' || file === 'question-bank.html') active = 'practice';
  else if(file === 'league.html' || file === 'challenge-concepts.html') active = 'league';
  else if(file === 'profile.html') active = 'profile';
  nav.querySelector(`[data-page="${active}"]`)?.classList.add('active');

  const style = document.createElement('style');
  style.textContent = `
    .skillup-global-footer{position:fixed!important;bottom:0!important;left:50%!important;right:auto!important;transform:translateX(-50%)!important;width:min(900px,100%)!important;height:48px!important;background:rgba(255,255,255,.98)!important;border-top:1px solid #e2e7ef!important;display:flex!important;z-index:9999!important;box-shadow:0 -4px 14px rgba(23,32,51,.08)!important}
    .skillup-global-footer a{flex:1!important;text-align:center!important;text-decoration:none!important;color:#667085!important;font-size:7px!important;font-weight:900!important;padding:4px 2px 2px!important;line-height:1!important;min-width:0!important}
    .skillup-global-footer a span{display:block!important;font-size:16px!important;height:18px!important;margin:0 0 1px!important}
    .skillup-global-footer a b{font-size:7px!important;font-weight:900!important}
    .skillup-global-footer a.active{color:#7652d9!important}
    @media(max-width:560px){.skillup-global-footer{height:47px!important}.skillup-global-footer a{font-size:6px!important;padding-top:3px!important}.skillup-global-footer a span{font-size:15px!important;height:17px!important}.skillup-global-footer a b{font-size:6px!important}}
  `;
  document.head.appendChild(style);
})();
