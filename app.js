const units=[
 {icon:'⚙️',name:'Mechanics',desc:'Motion, forces, energy and rotation',progress:0},
 {icon:'💧',name:'Properties of Matter',desc:'Fluids, solids and material behaviour',progress:0},
 {icon:'🌡️',name:'Thermal Physics',desc:'Heat, thermodynamics and kinetic theory',progress:0},
 {icon:'〰️',name:'Oscillations & Waves',desc:'SHM, waves and sound',progress:0},
 {icon:'⚡',name:'Electrostatics',desc:'Charge, field, potential and capacitors',progress:0},
 {icon:'🔋',name:'Current Electricity',desc:'Circuits, cells and electrical networks',progress:0},
 {icon:'🧲',name:'Magnetism',desc:'Magnetic fields and moving charges',progress:0},
 {icon:'🔄',name:'EMI & AC',desc:'Electromagnetic induction and alternating current',progress:0},
 {icon:'🔭',name:'Optics',desc:'Ray optics, wave optics and instruments',progress:0},
 {icon:'⚛️',name:'Modern Physics',desc:'Atoms, nuclei, dual nature and semiconductors',progress:0}
];
const saved=JSON.parse(localStorage.getItem('kpPhysicsAppProgress')||'{}');
document.getElementById('xp').textContent=saved.xp||0;
document.getElementById('streak').textContent=saved.streak||0;
document.getElementById('hearts').textContent=saved.hearts??5;
const path=document.getElementById('physicsPath');
units.forEach((u,i)=>{
 const locked=i>0 && !saved[`unit${i-1}`];
 const el=document.createElement('article');
 el.className=`unit ${locked?'locked':''}`;
 el.innerHTML=`<div class="node">${locked?'🔒':u.icon}</div><div class="unit-card"><h2>${u.name}</h2><p>${u.desc}</p><div class="progress"><span style="width:${u.progress}%"></span></div></div>`;
 el.addEventListener('click',()=>{
   if(locked){alert('Complete the previous unit to unlock this Physics path.');return;}
   if(u.name==='Mechanics'){window.location.href='chapter.html';return;}
   alert(`${u.name} path is ready for lessons.`);
 });
 path.appendChild(el);
});
