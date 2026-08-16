const areas=[
{icon:'⚙️',name:'Mechanics',desc:'Motion, forces, energy and rotation',concepts:['Units & Measurements','Error & Experimental Analysis','Vectors','Kinematics','Relative Motion','Projectile Motion',"Newton's Laws",'Friction','Circular Motion','Work-Energy Theorem','Potential Energy','Power','Centre of Mass','Momentum','Collisions','Rotational Kinematics','Torque','Angular Momentum','Moment of Inertia','Rolling Motion','Gravitation','Satellites','Escape Velocity']},
{icon:'💧',name:'Properties of Matter',desc:'Fluids, solids and material behaviour',concepts:['Elasticity','Fluid Pressure','Buoyancy','Continuity Equation','Bernoulli Equation','Viscosity','Surface Tension']},
{icon:'🌡️',name:'Thermal Physics',desc:'Heat, thermodynamics and kinetic theory',concepts:['Thermal Expansion','Calorimetry','Heat Transfer','Kinetic Theory','Thermodynamic Processes','First Law','Second Law','Entropy','Heat Engines','Refrigerators']},
{icon:'〰️',name:'Oscillations & Waves',desc:'SHM, waves and sound',concepts:['SHM','Energy in SHM','Springs','Pendulum','Wave Motion','Superposition','Standing Waves','Sound Waves','Doppler Effect']},
{icon:'⚡',name:'Electrostatics',desc:'Charge, field, potential and capacitors',concepts:["Coulomb's Law",'Electric Field','Electric Flux',"Gauss's Law",'Electric Potential','Potential Energy','Capacitors','Dielectrics','Capacitor Combinations','Energy Stored in Capacitor']},
{icon:'🔋',name:'Current Electricity',desc:'Circuits, cells and electrical networks',concepts:['Current & Drift Velocity','Resistance','Resistivity','Temperature Dependence of Resistance',"Kirchhoff's Laws",'Wheatstone Bridge','Meter Bridge','Potentiometer','Cells & Batteries']},
{icon:'🧲',name:'Magnetism',desc:'Magnetic fields and moving charges',concepts:['Lorentz Force','Biot-Savart Law',"Ampere's Law",'Motion in Magnetic Field','Cyclotron','Magnetic Dipole',"Earth's Magnetism",'Moving Coil Galvanometer']},
{icon:'🔄',name:'EMI & AC',desc:'Electromagnetic induction and alternating current',concepts:["Faraday's Law","Lenz's Law",'Motional EMF','Self Inductance','Mutual Inductance','AC Circuits','RMS Values','LCR Circuits','Resonance','Transformers']},
{icon:'🔭',name:'Optics',desc:'Ray optics, wave optics and instruments',concepts:['Reflection','Mirrors','Refraction','Total Internal Reflection','Lenses','Lens Combinations','Optical Instruments','Prism','Interference',"Young's Double Slit",'Diffraction','Polarisation']},
{icon:'⚛️',name:'Modern Physics',desc:'Atoms, nuclei, dual nature and semiconductors',concepts:['Photoelectric Effect','de Broglie Waves','Bohr Model','Hydrogen Spectrum','Nuclear Physics','Radioactivity','Binding Energy','Nuclear Reactions','Fission & Fusion','Semiconductors','Diodes','Transistors','Logic Gates']}
];
const exceptions={
'First Law':'first-law-thermodynamics-path.html','Second Law':'second-law-thermodynamics-path.html','Potential Energy':'potential-energy-path.html',"Coulomb's Law":'coulombs-law-path.html',"Gauss's Law":'gauss-law-path.html',"Kirchhoff's Laws":'kirchhoffs-laws-path.html',"Ampere's Law":'ampere-law-path.html',"Faraday's Law":'faradays-law-path.html',"Lenz's Law":'lenzs-law-path.html',"Earth's Magnetism":'earths-magnetism-path.html',"Young's Double Slit":'youngs-double-slit-path.html'};
const unbuilt=new Set(['Polarisation','Photoelectric Effect','de Broglie Waves','Bohr Model','Hydrogen Spectrum','Nuclear Physics','Radioactivity','Binding Energy','Nuclear Reactions','Fission & Fusion','Semiconductors','Diodes','Transistors','Logic Gates']);
function slug(name){return name.toLowerCase().replace(/&/g,'and').replace(/'/g,'').replace(/de broglie waves/,'de-broglie-waves').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'-path.html'}
const saved=JSON.parse(localStorage.getItem('kpPhysicsAppProgress')||'{}');
document.getElementById('xp').textContent=saved.xp||0;
document.getElementById('streak').textContent=saved.streak||0;
document.getElementById('hearts').textContent=saved.hearts??5;
const path=document.getElementById('physicsPath');
let number=0;
areas.forEach((area,ai)=>{
 const section=document.createElement('section'); section.className='area';
 section.innerHTML=`<div class="area-head"><div class="area-icon">${area.icon}</div><div><h2>${area.name}</h2><p>${area.desc}</p><small>${area.concepts.length} concepts</small></div></div><div class="area-path"></div>`;
 const list=section.querySelector('.area-path');
 area.concepts.forEach((name,ci)=>{
  number++;
  const key=`concept${number}`; const done=!!saved[key]; const locked=number>1&&!saved[`concept${number-1}`];
  const href=exceptions[name]||(!unbuilt.has(name)?slug(name):`jee-physics-lesson-shuffled.html?id=${number}`);
  const el=document.createElement('article'); el.className=`lesson-node ${locked?'locked':''} ${done?'done':''}`;
  el.innerHTML=`<button class="node ${locked?'lock':''}" aria-label="${name}">${locked?'🔒':done?'✓':area.icon}</button><a class="lesson-card" href="${locked?'#':href}"><span class="lesson-number">Q${number}</span><strong>${name}</strong><small>${done?'COMPLETED':locked?'LOCKED':unbuilt.has(name)?'COMING SOON':'START LESSON'}</small></a>`;
  el.querySelector('.node').addEventListener('click',e=>{e.preventDefault();if(locked)alert('Complete the previous lesson to unlock this step.');});
  el.querySelector('.lesson-card').addEventListener('click',e=>{if(locked)e.preventDefault();});
  list.appendChild(el);
 });
 const total=area.concepts.length, doneCount=area.concepts.filter((_,i)=>saved[`concept${areas.slice(0,ai).reduce((s,a)=>s+a.concepts.length,0)+i+1}`]).length;
 section.querySelector('.area-head small').textContent=`${doneCount}/${total} mastered`;
 path.appendChild(section);
});
