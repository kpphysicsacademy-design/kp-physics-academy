// SkillUp - Firebase Web App Configuration
// Firebase project: Skill Up (skill-up-j6olyb)
export const firebaseConfig = {
  apiKey: "AIzaSyDCwf3HNlGMRltXXtUgf_jMh6jY36D9f8",
  authDomain: "skill-up-j6olyb.firebaseapp.com",
  projectId: "skill-up-j6olyb",
  storageBucket: "skill-up-j6olyb.firebasestorage.app",
  messagingSenderId: "112776254896",
  appId: "1:112776254896:web:7f10fde74fdf1a063a7275",
  measurementId: "G-LPLJSBNEH4"
};

// SkillUp path visual override: hide the center guide line on the learning path only.
if (location.pathname.endsWith('/physics-dashboard.html')) {
  const style = document.createElement('style');
  style.textContent = '.road:before{display:none!important}';
  document.head.appendChild(style);
}
