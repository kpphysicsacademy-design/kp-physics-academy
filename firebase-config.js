// SkillUp - Firebase Web App Configuration
// Firebase project: Skill Up (skill-up-j6olyb)
export const firebaseConfig = {
  apiKey: "AIzaSyDxhe7pyJ_YsivZD76EVgQrhnGJT4F_yzQ",
  authDomain: "skill-up-j6olyb.firebaseapp.com",
  projectId: "skill-up-j6olyb",
  storageBucket: "skill-up-j6olyb.firebasestorage.app",
  messagingSenderId: "112776254896",
  appId: "1:112776254896:web:7f10fde74fdf1a063a7275",
  measurementId: "G-LPLJSBNEH4"
};

// SkillUp scientific visual layer.
// Lightweight, non-interactive effects: stars, formulas, glows and orbital motion.
if (!document.getElementById('skillup-science-bg')) {
  const style = document.createElement('style');
  style.id = 'skillup-science-style';
  style.textContent = `
    #skillup-science-bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;background:
      radial-gradient(circle at 12% 18%,rgba(38,140,255,.16),transparent 24%),
      radial-gradient(circle at 86% 78%,rgba(139,92,246,.14),transparent 25%),
      radial-gradient(circle at 50% 110%,rgba(92,225,255,.10),transparent 34%)}
    #skillup-science-bg:before{content:"";position:absolute;inset:-30%;opacity:.55;background:
      radial-gradient(circle,#fff 0 1px,transparent 1.7px) 0 0/120px 120px,
      radial-gradient(circle,#5ce1ff 0 1px,transparent 1.8px) 45px 70px/180px 180px,
      radial-gradient(circle,#8b5cf6 0 1px,transparent 1.8px) 20px 35px/240px 240px;animation:skillupStars 42s linear infinite}
    #skillup-science-bg:after{content:"⚛   E = mc²   F = ma   Δx   λ   π   Σ   ∫   H₂O   DNA   🧪   🧬";position:absolute;left:-10%;right:-10%;top:18%;font-size:clamp(16px,2vw,28px);font-weight:800;letter-spacing:12px;white-space:nowrap;color:rgba(38,140,255,.08);transform:rotate(-7deg);animation:skillupFormula 22s ease-in-out infinite alternate}
    #skillup-science-bg~*{position:relative;z-index:1}
    .skillup-orbit{position:absolute;border:1px solid rgba(92,225,255,.13);border-radius:50%;box-shadow:0 0 35px rgba(38,140,255,.08);animation:skillupOrbit 18s linear infinite}
    .skillup-orbit.one{width:360px;height:140px;left:-70px;top:22%;transform:rotate(25deg)}
    .skillup-orbit.two{width:300px;height:110px;right:-70px;bottom:18%;transform:rotate(-28deg);animation-duration:24s;animation-direction:reverse}
    .skillup-orbit.three{width:190px;height:190px;left:50%;top:50%;margin:-95px;opacity:.35;animation-duration:30s}
    .skillup-orbit i{position:absolute;width:7px;height:7px;border-radius:50%;background:#5ce1ff;box-shadow:0 0 14px #5ce1ff;left:50%;top:-4px}
    @keyframes skillupStars{from{transform:translate3d(0,0,0) rotate(0)}to{transform:translate3d(70px,45px,0) rotate(8deg)}}
    @keyframes skillupFormula{from{transform:translateX(-3%) rotate(-7deg)}to{transform:translateX(8%) rotate(-4deg)}}
    @keyframes skillupOrbit{from{rotate:0deg}to{rotate:360deg}}
    @media(prefers-reduced-motion:reduce){#skillup-science-bg:before,#skillup-science-bg:after,.skillup-orbit{animation:none!important}}
  `;
  document.head.appendChild(style);
  const bg = document.createElement('div');
  bg.id = 'skillup-science-bg';
  bg.innerHTML = '<div class="skillup-orbit one"><i></i></div><div class="skillup-orbit two"><i></i></div><div class="skillup-orbit three"><i></i></div>';
  document.body.prepend(bg);
}

// SkillUp path visual override: hide the center guide line on the learning path only.
if (location.pathname.endsWith('/physics-dashboard.html')) {
  const style = document.createElement('style');
  style.textContent = '.road:before{display:none!important}';
  document.head.appendChild(style);
}
