// SkillUp - Firebase Web App Configuration
// Firebase project: Skill Up (skill-up-j6olyb)
export const firebaseConfig = {
  apiKey: "AIzaSyDjCCKECq2UyOQhRg7oIW3tIpk86Ab1FJs",
  authDomain: "skill-up-j6olyb.firebaseapp.com",
  projectId: "skill-up-j6olyb",
  storageBucket: "skill-up-j6olyb.firebasestorage.app",
  messagingSenderId: "112776254896",
  appId: "1:112776254896:web:7f10fde74fdf1a063a7275",
  measurementId: "G-LPLJSBNEH4"
};

// SkillUp subject-aware scientific background.
if (!document.getElementById('skillup-subject-bg')) {
  const style = document.createElement('style');
  style.id = 'skillup-subject-style';
  style.textContent = `
    #skillup-subject-bg{position:fixed;inset:0;z-index:-10;pointer-events:none;overflow:hidden;background:radial-gradient(circle at 15% 20%,rgba(139,92,246,.16),transparent 30%),radial-gradient(circle at 85% 75%,rgba(168,85,247,.13),transparent 30%),linear-gradient(135deg,#090516,#120821 50%,#05030d);transition:background 700ms ease}
    #skillup-subject-bg:before{content:"";position:absolute;inset:-20%;background:radial-gradient(circle,rgba(216,180,254,.8) 0 1px,transparent 1.7px) 0 0/95px 95px,radial-gradient(circle,rgba(167,139,250,.7) 0 1px,transparent 1.8px) 35px 55px/150px 150px;opacity:.3;animation:chemStars 35s linear infinite}
    #skillup-subject-bg:after{content:"H₂O   CO₂   NaCl   NH₃   CH₄   HCl   pH   ΔH   →   ⇌   ⚛   🧪";position:absolute;left:-15%;right:-15%;top:20%;white-space:nowrap;font-size:clamp(18px,2.5vw,32px);font-weight:800;letter-spacing:10px;color:rgba(216,180,254,.10);transform:rotate(-7deg);animation:chemFormula 20s ease-in-out infinite alternate}
    .chem-orbit{position:absolute;border:1px solid rgba(196,181,253,.16);border-radius:50%;box-shadow:0 0 35px rgba(168,85,247,.12);animation:chemOrbit 22s linear infinite}
    .chem-orbit.one{width:330px;height:150px;left:-80px;top:25%;transform:rotate(25deg)}
    .chem-orbit.two{width:280px;height:130px;right:-70px;bottom:20%;transform:rotate(-30deg);animation-direction:reverse;animation-duration:27s}
    .chem-orbit.three{width:170px;height:170px;left:50%;top:52%;margin:-85px;opacity:.3;animation-duration:32s}
    .chem-orbit i{position:absolute;width:7px;height:7px;border-radius:50%;background:#c084fc;box-shadow:0 0 15px #c084fc;left:50%;top:-4px}
    @keyframes chemStars{from{transform:translate(0,0)}to{transform:translate(60px,40px)}}
    @keyframes chemFormula{from{transform:translateX(-3%) rotate(-7deg)}to{transform:translateX(8%) rotate(-4deg)}}
    @keyframes chemOrbit{from{rotate:0deg}to{rotate:360deg}}
    @media(prefers-reduced-motion:reduce){#skillup-subject-bg:before,#skillup-subject-bg:after,.chem-orbit{animation:none!important}}
  `;
  document.head.appendChild(style);
  const bg=document.createElement('div');
  bg.id='skillup-subject-bg';
  bg.innerHTML='<div class="chem-orbit one"><i></i></div><div class="chem-orbit two"><i></i></div><div class="chem-orbit three"><i></i></div>';
  document.body.prepend(bg);
}

// Change the scientific background when the dashboard subject changes.
document.addEventListener('DOMContentLoaded',()=>{
  const select=document.getElementById('subjectSelect');
  const bg=document.getElementById('skillup-subject-bg');
  if(!select||!bg)return;
  const update=()=>{
    const s=select.value;
    if(s==='chemistry'){
      bg.style.background='radial-gradient(circle at 15% 20%,rgba(168,85,247,.20),transparent 30%),radial-gradient(circle at 85% 75%,rgba(192,132,252,.16),transparent 30%),linear-gradient(135deg,#090516,#160822 50%,#05030d)';
    }else if(s==='physics'){
      bg.style.background='radial-gradient(circle at 15% 20%,rgba(38,140,255,.18),transparent 30%),radial-gradient(circle at 85% 75%,rgba(92,225,255,.13),transparent 30%),linear-gradient(135deg,#020611,#07152b 50%,#020611)';
    }else{
      bg.style.background='radial-gradient(circle at 15% 20%,rgba(139,92,246,.14),transparent 30%),radial-gradient(circle at 85% 75%,rgba(92,225,255,.10),transparent 30%),linear-gradient(135deg,#050611,#0b1020 50%,#020611)';
    }
  };
  update();
  select.addEventListener('change',update);
});

// Keep the learning-path center guide hidden.
if (location.pathname.endsWith('/physics-dashboard.html')) {
  const style=document.createElement('style');
  style.textContent='.road:before{display:none!important}';
  document.head.appendChild(style);
}
