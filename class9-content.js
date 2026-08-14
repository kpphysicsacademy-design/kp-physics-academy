const CLASS9_CONTENT = [
  {
    title:'Motion',
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Velocity_time_graph.svg',
    imageAlt:'Velocity time graph',
    imageCredit:'Wikimedia Commons',
    topics:[
      ['Rest and motion','An object is at rest or in motion depending on whether its position changes with time relative to a chosen reference point.','A passenger sitting in a moving bus is at rest relative to the bus but in motion relative to a person on the road.'],
      ['Distance','Distance is the total length of the actual path travelled by an object. It is a scalar quantity and is always non-negative.','If a student walks 3 m east and then 4 m west, the total distance is 7 m.'],
      ['Displacement','Displacement is the shortest directed distance from the initial position to the final position. It is a vector quantity.','After walking 3 m east and 4 m west, the displacement is 1 m west.'],
      ['Uniform and non-uniform motion','In uniform motion an object covers equal distances in equal intervals of time. In non-uniform motion its speed or direction changes.','A car travelling steadily at 20 m/s shows uniform motion along a straight road.'],
      ['Speed','Speed is the distance travelled per unit time: speed = distance/time. Its SI unit is metre per second (m/s).','A cyclist covering 120 m in 10 s has an average speed of 12 m/s.'],
      ['Velocity','Velocity is displacement per unit time and includes direction. Average velocity = displacement/time.','A runner who completes a circular track and returns to the start has zero average velocity for the complete trip.'],
      ['Acceleration','Acceleration is the rate of change of velocity with time: a = (v-u)/t. Its SI unit is m/s².','If velocity changes from 5 m/s to 15 m/s in 2 s, acceleration is 5 m/s².'],
      ['Equations of motion','For uniformly accelerated straight-line motion: v = u + at, s = ut + ½at², and v² − u² = 2as.','A body starting from rest with acceleration 2 m/s² travels 16 m in 4 s.'],
      ['Distance-time graph','The slope of a distance-time graph represents speed. A straight line with constant slope represents uniform speed.','A steeper distance-time graph represents greater speed.'],
      ['Velocity-time graph','The slope of a velocity-time graph represents acceleration, while the area under the graph represents displacement.','A horizontal velocity-time line represents constant velocity and zero acceleration.'],
      ['Uniform circular motion','In uniform circular motion the speed may remain constant while the direction of velocity continuously changes, so the motion is accelerated.','A stone tied to a string and rotated at constant speed undergoes uniform circular motion.']
    ]
  },
  {
    title:'Force and Laws of Motion',
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Newton_Cradle_5_balls.gif',
    imageAlt:'Newton cradle demonstrating momentum transfer',
    imageCredit:'Wikimedia Commons',
    topics:[
      ['Force','Force is a push or pull that can change the state of motion, direction or shape of an object.','Pushing a stationary trolley can make it move.'],
      ['Balanced and unbalanced forces','Balanced forces have zero net force and do not change the state of motion. Unbalanced forces produce acceleration.','Equal opposite pulls on a box can leave it stationary.'],
      ['Newton’s first law','An object remains at rest or in uniform straight-line motion unless acted upon by an external unbalanced force.','Passengers jerk forward when a moving bus stops suddenly because their bodies tend to continue moving.'],
      ['Inertia','Inertia is the tendency of an object to resist a change in its state of rest or motion. Greater mass means greater inertia.','Dust comes out of a carpet when the carpet is beaten because the dust tends to remain at rest.'],
      ['Newton’s second law','The rate of change of momentum is proportional to the applied force and occurs in its direction. For constant mass, F = ma.','A 2 kg body accelerating at 3 m/s² experiences a net force of 6 N.'],
      ['Momentum','Momentum is the product of mass and velocity: p = mv. It is a vector quantity and its SI unit is kg m/s.','A 4 kg object moving at 5 m/s has momentum 20 kg m/s.'],
      ['Newton’s third law','For every action there is an equal and opposite reaction. The two forces act on different bodies.','When you push the ground backward while walking, the ground pushes you forward.'],
      ['Conservation of momentum','When the net external force on a system is zero, total momentum remains constant.','In a collision, momentum before collision equals momentum after collision for an isolated system.'],
      ['Impulse','Impulse equals force multiplied by the time for which it acts and equals the change in momentum: J = FΔt = Δp.','Airbags increase the stopping time during a crash and reduce the average force on a passenger.']
    ]
  },
  {
    title:'Gravitation',
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Newton_Cannon.svg',
    imageAlt:'Newton cannon thought experiment',
    imageCredit:'Wikimedia Commons',
    topics:[
      ['Universal law of gravitation','Every two masses attract each other with a force proportional to the product of their masses and inversely proportional to the square of their separation: F = Gm₁m₂/r².','Increasing the distance between two masses reduces their gravitational attraction.'],
      ['Gravitational constant','G is the universal gravitational constant appearing in Newton’s law of gravitation. Its SI unit is N m²/kg².','The value of G is the same throughout the universe, within the framework of Newtonian gravitation.'],
      ['Free fall','Free fall is motion under the influence of gravity alone, when air resistance and other forces are neglected.','A stone released from a height undergoes free fall before air resistance becomes significant.'],
      ['Acceleration due to gravity','Near Earth’s surface, freely falling bodies have acceleration g, approximately 9.8 m/s², directed downward.','For a freely falling body from rest, its speed increases by about 9.8 m/s every second in the ideal model.'],
      ['Mass and weight','Mass is the amount of matter and remains essentially constant. Weight is the gravitational force on a body: W = mg.','A 10 kg object has a weight of about 98 N on Earth when g = 9.8 m/s².'],
      ['Thrust and pressure','Thrust is force acting normally on a surface. Pressure is thrust per unit area: P = F/A. Its SI unit is pascal.','A sharp nail produces greater pressure than a blunt nail for the same force because its area is smaller.'],
      ['Pressure in fluids','Pressure in a fluid increases with depth because the deeper point supports a greater column of fluid.','Water pressure is greater near the bottom of a tank than near the surface.'],
      ['Buoyancy','A fluid exerts an upward force on an immersed object. This upward force is called buoyant force or upthrust.','A stone feels lighter when held under water because of the upward buoyant force.'],
      ['Archimedes’ principle','An immersed body experiences an upward force equal to the weight of the fluid displaced by the body.','The principle explains why a large steel ship can float by displacing enough water.'],
      ['Relative density','Relative density is the ratio of the density of a substance to the density of water at the specified reference conditions. It has no unit.','A substance with relative density less than 1 can float in water under suitable conditions.']
    ]
  },
  {
    title:'Work and Energy',
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pendulum.svg',
    imageAlt:'Pendulum showing energy conversion',
    imageCredit:'Wikimedia Commons',
    topics:[
      ['Work','Work is done when a force causes displacement in its direction. For a constant force in the same direction, W = Fs.','A 10 N force moving an object 3 m in the force direction does 30 J of work.'],
      ['Zero work','Work is zero when there is no displacement or when the force is perpendicular to displacement.','The centripetal force in uniform circular motion does no work because it is perpendicular to instantaneous displacement.'],
      ['Kinetic energy','Kinetic energy is the energy possessed by an object because of its motion: KE = ½mv².','A 2 kg object moving at 4 m/s has kinetic energy 16 J.'],
      ['Potential energy','Gravitational potential energy near Earth’s surface is energy due to height: PE = mgh.','Lifting a 2 kg object through 5 m increases its gravitational potential energy by about 98 J.'],
      ['Law of conservation of energy','Energy can neither be created nor destroyed; it can be transformed from one form to another while total energy is conserved.','In a falling object, gravitational potential energy is converted into kinetic energy.'],
      ['Mechanical energy','Mechanical energy is the sum of kinetic and potential energies. In an ideal system without dissipative forces, it remains constant.','A swinging pendulum continuously exchanges kinetic and potential energy.'],
      ['Power','Power is the rate at which work is done: P = W/t. Its SI unit is watt.','If 600 J of work is done in 10 s, the power is 60 W.'],
      ['Commercial unit of energy','Electrical energy used in homes is commonly measured in kilowatt-hour (kWh). One kWh equals 3.6 × 10⁶ J.','Using a 1 kW appliance for 2 hours consumes 2 kWh of electrical energy.'],
      ['Numerical problem strategy','For numerical problems, identify the known quantities, choose the correct equation, keep units consistent, substitute values and check the final unit.','For a body with m = 2 kg and v = 5 m/s, use KE = ½mv² to obtain 25 J.']
    ]
  },
  {
    title:'Sound',
    image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sound_wave.svg',
    imageAlt:'Sound wave representation',
    imageCredit:'Wikimedia Commons',
    topics:[
      ['Production of sound','Sound is produced by vibrating objects. The vibration causes disturbances in the surrounding medium.','A tuning fork produces sound when its prongs vibrate.'],
      ['Propagation of sound','Sound is a mechanical wave and needs a material medium such as a solid, liquid or gas to travel. It cannot travel through vacuum.','Astronauts cannot hear each other directly through space without communication equipment.'],
      ['Longitudinal waves','In air, sound travels mainly as a longitudinal wave containing compressions and rarefactions.','A vibrating loudspeaker creates alternating regions of higher and lower pressure in air.'],
      ['Characteristics of sound','Amplitude, frequency and waveform are physical properties of a sound wave. Amplitude is related to loudness and frequency is related to pitch.','A larger amplitude generally produces a louder sound, while a higher frequency produces a higher pitch.'],
      ['Frequency and time period','Frequency is the number of oscillations per second, measured in hertz. Time period is the time for one oscillation: T = 1/f.','A 200 Hz sound has a time period of 0.005 s.'],
      ['Speed of sound','The speed of sound depends on the medium and its conditions. It is generally fastest in solids, slower in liquids and slowest in gases.','Sound travels faster through steel than through air.'],
      ['Reflection of sound','Sound can reflect from hard surfaces. The reflected sound obeys the basic law that angle of incidence equals angle of reflection.','A large wall can reflect a shout back toward the speaker.'],
      ['Echo','An echo is a distinct repetition of sound caused by reflection from a distant surface when the reflected sound reaches the ear after a sufficient time gap.','Clapping near a large cliff can produce an audible echo.'],
      ['Reverberation','Reverberation is the persistence of sound due to repeated reflections in an enclosed space. Excessive reverberation can reduce clarity.','Auditoriums use sound-absorbing materials to control reverberation.'],
      ['Ultrasound','Ultrasound consists of sound waves with frequencies above the upper limit of human hearing, generally above 20 kHz.','Ultrasound is used in medical imaging and industrial testing.'],
      ['Applications of ultrasound','Ultrasound can be used for medical imaging, cleaning delicate objects, detecting cracks and measuring distances.','Ultrasonography uses reflected ultrasound waves to form images of internal body structures.'],
      ['Human ear','The human ear collects sound, converts vibrations into signals and sends information to the brain for hearing.','The eardrum vibrates when sound waves reach it.']
    ]
  }
];

let currentChapter=0,currentTopic=0;
const STORE='kp9_mastered';
function totalTopics(){return CLASS9_CONTENT.reduce((n,c)=>n+c.topics.length,0)}
function mastered(){return JSON.parse(localStorage.getItem(STORE)||'{}')}
function addMasteryStyles(){
 if(document.getElementById('masteryStyles'))return;
 const s=document.createElement('style');s.id='masteryStyles';s.textContent=`
 .progress-wrap{background:#fff;border:1px solid #dfe7f1;border-radius:14px;padding:16px 18px;margin:0 0 24px;box-shadow:0 5px 18px #0b19300c}.progress-wrap>div:first-child{display:flex;justify-content:space-between;gap:15px;margin-bottom:10px}.progress-wrap span{color:#1687ff;font-weight:700}.progress{height:9px;background:#e8eef6;border-radius:99px;overflow:hidden}.progress>div{height:100%;width:0;background:#1687ff;border-radius:99px;transition:width .3s}.choose-title{margin:24px 0 14px}.chapter-choices{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:24px}.chapter-choice{border:1px solid #dfe7f1;background:#fff;border-radius:13px;padding:15px;text-align:left;display:grid;grid-template-columns:44px 1fr auto;gap:4px 12px;align-items:center;cursor:pointer;color:#0b1930}.chapter-choice:hover,.chapter-choice.active{border-color:#1687ff;box-shadow:0 4px 14px #1687ff18}.chapter-choice>span{grid-row:1/3;width:44px;height:44px;border-radius:11px;background:#edf5ff;color:#1687ff;display:grid;place-items:center;font-weight:800}.chapter-choice b{font-size:15px}.chapter-choice small{color:#78869a}.lesson-card{background:#fff;border:1px solid #dfe7f1;border-radius:16px;box-shadow:0 5px 18px #0b19300c;padding:24px}.lesson-head{display:flex;justify-content:space-between;gap:18px;align-items:flex-start;border-bottom:1px solid #edf1f5;padding-bottom:16px}.chapter-tag{font-size:12px;color:#1687ff;font-weight:800}.lesson-head h2{margin:7px 0 0;font-size:25px}.master-status{padding:8px 12px;border-radius:99px;background:#eef5ff;color:#1687ff;font-weight:800;font-size:12px;white-space:nowrap}.master-status.done{background:#eaf8ee;color:#16803c}.lesson-grid{display:grid;grid-template-columns:1fr .8fr;gap:26px;align-items:center;padding:24px 0}.lesson-grid h3{margin:0 0 10px;color:#1687ff}.lesson-grid p{color:#526176;line-height:1.75;font-size:16px}.lesson-grid figure{margin:0;background:#f7faff;border:1px solid #e2eaf4;border-radius:14px;padding:10px}.lesson-grid img{width:100%;height:230px;object-fit:contain;background:#fff;border-radius:10px;display:block}.lesson-grid figcaption{font-size:11px;color:#78869a;text-align:center;padding:8px 3px 2px}.example{background:#f8fbff;border:1px solid #e1eaf5;border-radius:10px;padding:13px;margin:14px 0;color:#43546a;line-height:1.6}.key-point{background:#f5f9ff;border-left:4px solid #1687ff;padding:12px;border-radius:8px;color:#43546a;line-height:1.5}.lesson-actions{display:flex;gap:12px;flex-wrap:wrap;border-top:1px solid #edf1f5;padding-top:18px}.lesson-actions button,.practice{border:0;border-radius:9px;padding:11px 15px;background:#0b1930;color:#fff;font-weight:700;cursor:pointer;text-decoration:none}.practice{display:inline-block;background:#1687ff}.lesson-actions button:hover,.practice:hover,.navigation button:hover{opacity:.9}.navigation{display:flex;justify-content:space-between;gap:12px;margin-top:20px}.navigation button{border:0;border-radius:9px;padding:11px 15px;background:#1687ff;color:#fff;font-weight:700;cursor:pointer}.navigation button:disabled{opacity:.45;cursor:not-allowed}.navigation .next{margin-left:auto}@media(max-width:800px){.chapter-choices{grid-template-columns:1fr}.lesson-grid{grid-template-columns:1fr}.lesson-head{display:block}.master-status{display:inline-block;margin-top:12px}.navigation{display:grid}.navigation .next{margin-left:0}}
 `;document.head.appendChild(s);
}
function renderClass9Content(){
 const root=document.getElementById('curriculum');if(!root)return;
 addMasteryStyles();document.title='KP Physics Academy | Class 9 Physics Mastery';
 root.innerHTML=`<div class="top"><a href="index.html">← Back to Home</a><a href="question-bank.html">Question Bank →</a></div><h1>Class 9 <span>Physics</span></h1><p class="intro">Master Physics one concept at a time. Learn the idea, study the example, practice it, mark it mastered, then move to the next concept.</p><div class="progress-wrap"><div><strong>Mastery Progress</strong><span id="progressLabel"></span></div><div class="progress"><div id="progressBar"></div></div></div><h2 class="choose-title">Choose a Chapter</h2><div class="chapter-choices">${CLASS9_CONTENT.map((c,i)=>`<button class="chapter-choice ${i===currentChapter?'active':''}" onclick="openChapter(${i})"><span>${String(i+1).padStart(2,'0')}</span><b>${c.title}</b><small>${c.topics.length} concepts</small></button>`).join('')}</div><div id="lesson"></div>`;renderLesson();
}
function renderLesson(){
 const c=CLASS9_CONTENT[currentChapter],t=c.topics[currentTopic],done=mastered()[currentChapter+'-'+currentTopic];
 document.getElementById('lesson').innerHTML=`<div class="lesson-card"><div class="lesson-head"><div><span class="chapter-tag">Chapter ${currentChapter+1} • ${c.title}</span><h2>Concept ${currentTopic+1}: ${t[0]}</h2></div><span class="master-status ${done?'done':''}">${done?'✓ Mastered':'Current Concept'}</span></div><div class="lesson-grid"><div><h3>Learn this concept</h3><p>${t[1]}</p><div class="example"><strong>Example:</strong> ${t[2]}</div><div class="key-point"><strong>Mastery rule:</strong> Understand the concept, solve related questions, and then move forward. You can switch chapters whenever you want.</div></div><figure><img src="${c.image}" alt="${c.imageAlt}" loading="lazy"><figcaption>${c.imageCredit}</figcaption></figure></div><div class="lesson-actions"><a class="practice" href="question-bank.html?class=9&chapter=${encodeURIComponent(c.title)}&topic=${encodeURIComponent(t[0])}">Practice this concept →</a><button onclick="markMastered()">${done?'✓ Concept Mastered':'Mark Concept Mastered'}</button></div><div class="navigation"><button onclick="previousConcept()" ${currentTopic===0?'disabled':''}>← Previous concept</button><button class="next" onclick="nextConcept()">${currentTopic<c.topics.length-1?'Next concept →':'Chapter complete — choose another chapter →'}</button></div></div>`;updateProgress();
}
function openChapter(i){currentChapter=i;currentTopic=0;renderClass9Content();setTimeout(()=>document.getElementById('lesson')?.scrollIntoView({behavior:'smooth',block:'start'}),50)}
function markMastered(){const d=mastered();d[currentChapter+'-'+currentTopic]=true;localStorage.setItem(STORE,JSON.stringify(d));renderLesson()}
function nextConcept(){if(currentTopic<CLASS9_CONTENT[currentChapter].topics.length-1){currentTopic++;renderLesson();window.scrollTo({top:260,behavior:'smooth'})}else{document.querySelector('.choose-title')?.scrollIntoView({behavior:'smooth'})}}
function previousConcept(){if(currentTopic>0){currentTopic--;renderLesson();window.scrollTo({top:260,behavior:'smooth'})}}
function updateProgress(){const n=Object.keys(mastered()).length;const label=document.getElementById('progressLabel'),bar=document.getElementById('progressBar');if(label)label.textContent=` ${n} of ${totalTopics()} concepts mastered`;if(bar)bar.style.width=(n/totalTopics()*100)+'%'}
renderClass9Content();
