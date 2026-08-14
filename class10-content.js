const CLASS10 = {
  title: 'Class 10 Physics',
  subtitle: 'Concept-by-concept mastery — learn one idea, master it, then move to the next.',
  chapters: [
    {
      name: 'Light — Reflection and Refraction',
      concepts: [
        ['Reflection of light','Reflection is the bouncing back of light from a surface. The incident ray, reflected ray and normal lie in the same plane, and the angle of incidence equals the angle of reflection.','A ray striking a plane mirror at 30° to the normal is reflected at 30° to the normal.','mirror'],
        ['Spherical mirrors','Spherical mirrors are parts of spherical surfaces. A concave mirror reflects from its inner surface, while a convex mirror reflects from its outer surface.','A shaving mirror is commonly concave because it can produce a magnified upright image for a suitable object position.','spherical'],
        ['Terms of spherical mirrors','Important terms include pole, centre of curvature, radius of curvature, principal axis, principal focus and focal length.','For a spherical mirror, the focal length is half the radius of curvature: f = R/2.','mirrorTerms'],
        ['Ray diagrams for mirrors','Principal rays help locate images: a ray parallel to the principal axis reflects through the focus of a concave mirror; a ray through the focus reflects parallel to the axis.','Draw two principal rays from an object to find the position and nature of its image.','rayMirror'],
        ['Mirror formula','The mirror formula relates object distance, image distance and focal length: 1/f = 1/v + 1/u, using the Cartesian sign convention.','If u and f are known, the formula can be rearranged to calculate v.','formula'],
        ['Magnification by mirrors','Magnification is the ratio of image height to object height. For mirrors, m = hᵢ/hₒ = -v/u.','A negative magnification indicates an inverted image.','magnification'],
        ['Refraction of light','Refraction is the change in direction of light when it passes obliquely from one transparent medium to another because its speed changes.','A pencil partly immersed in water appears bent at the water surface.','refraction'],
        ['Laws of refraction','The incident ray, refracted ray and normal are coplanar. Snell’s law states sin i / sin r = constant for a given pair of media.','Light entering glass from air bends towards the normal because it travels more slowly in glass.','snell'],
        ['Refractive index','Refractive index measures how much a medium slows light relative to vacuum: n = c/v.','A medium with a larger refractive index has a lower speed of light in it.','index'],
        ['Refraction through a glass slab','A ray through a parallel-sided glass slab emerges parallel to the incident ray but is laterally displaced.','The emergent ray is parallel to the incident ray, although its path is shifted sideways.','slab'],
        ['Lenses','A convex lens is converging and a concave lens is diverging. Their action depends on the shape and refractive index of the lens.','A convex lens can form a real or virtual image depending on object position.','lens'],
        ['Lens formula and magnification','For a thin lens, 1/f = 1/v - 1/u. Magnification is m = hᵢ/hₒ = v/u under the Cartesian sign convention.','Use the sign convention carefully before substituting numerical values.','lensFormula'],
        ['Power of a lens','Power indicates the converging or diverging ability of a lens: P = 1/f when f is in metres. Its SI unit is dioptre (D).','A lens with f = +0.50 m has power +2 D.','powerLens']
      ]
    },
    {
      name: 'The Human Eye and the Colourful World',
      concepts: [
        ['Structure of the human eye','The cornea, iris, pupil, eye lens, ciliary muscles, retina and optic nerve work together to form vision.','The retina acts as the light-sensitive screen on which the image is formed.','eye'],
        ['Accommodation of the eye','Accommodation is the ability of the eye lens to change its focal length so that nearby and distant objects can be focused on the retina.','Ciliary muscles change the curvature of the lens during accommodation.','accommodation'],
        ['Near point and far point','For a normal adult eye, the near point is about 25 cm and the far point is effectively at infinity.','Reading material is normally held at a comfortable distance near the normal near point.','nearFar'],
        ['Myopia','Myopia, or short-sightedness, makes distant objects appear blurred. It is corrected using a suitable concave lens.','A concave lens diverges incoming rays so the eye can focus them on the retina.','myopia'],
        ['Hypermetropia','Hypermetropia, or long-sightedness, makes nearby objects difficult to see clearly. It is corrected using a suitable convex lens.','A convex lens converges rays before they enter the eye.','hypermetropia'],
        ['Presbyopia','Presbyopia is an age-related reduction in accommodation. It may be corrected with appropriate convex or bifocal/progressive lenses depending on the visual needs.','A person may need reading correction even when distance vision is relatively good.','presbyopia'],
        ['Prism and dispersion','A prism deviates light. White light can split into its component colours because different wavelengths are refracted by different amounts.','The familiar sequence of visible colours is often remembered as VIBGYOR.','prism'],
        ['Atmospheric refraction','Light bends while passing through layers of air with different optical densities. This produces effects such as twinkling of stars and apparent shifts in celestial objects.','Stars appear to twinkle because their light is continuously refracted by moving atmospheric layers.','atmosphere'],
        ['Scattering of light','Small particles in the atmosphere scatter shorter wavelengths more strongly than longer wavelengths.','The sky appears blue mainly because blue light is scattered strongly by the atmosphere.','scattering']
      ]
    },
    {
      name: 'Electricity',
      concepts: [
        ['Electric current','Electric current is the rate of flow of electric charge: I = Q/t. The SI unit is ampere (A).','If 10 C of charge flows in 2 s, the current is 5 A.','current'],
        ['Potential difference','Potential difference between two points is the work done per unit charge: V = W/Q. Its SI unit is volt (V).','A 6 V potential difference means 6 J of work is done per coulomb of charge transferred.','voltage'],
        ['Ohm’s law','At constant temperature, the current through a conductor is directly proportional to the potential difference across it: V = IR.','For a 4 Ω resistor connected to 12 V, the current is 3 A.','ohm'],
        ['Resistance','Resistance opposes the flow of charge. It depends on the material, length, cross-sectional area and temperature.','A longer wire of the same material and thickness generally has greater resistance.','resistance'],
        ['Resistivity','Resistivity is a material property given by ρ = RA/l. Its SI unit is Ω m.','Two wires of the same material have the same resistivity at the same temperature even if their dimensions differ.','resistivity'],
        ['Series combination of resistors','In series, the same current flows through each resistor and the equivalent resistance is R = R₁ + R₂ + ...','Three resistors of 2 Ω, 3 Ω and 5 Ω in series have an equivalent resistance of 10 Ω.','series'],
        ['Parallel combination of resistors','In parallel, the potential difference across each branch is the same and 1/R = 1/R₁ + 1/R₂ + ...','Household circuits use parallel connections so appliances can operate independently.','parallel'],
        ['Heating effect of current','Electrical energy can be converted into heat. Joule’s law gives H = I²Rt for a resistor under suitable constant-current conditions.','Electric heaters and irons use the heating effect of current.','heating'],
        ['Electric power','Electric power is the rate of electrical energy consumption: P = VI = I²R = V²/R. Its SI unit is watt.','A 220 V appliance drawing 2 A has power 440 W.','power'],
        ['Electrical energy and commercial unit','Electrical energy consumed is E = Pt. Electricity bills commonly use kilowatt-hour (kWh).','1 kWh is the energy used by a 1 kW device operating for 1 hour.','energy']
      ]
    },
    {
      name: 'Magnetic Effects of Electric Current',
      concepts: [
        ['Magnetic field','A magnetic field is the region where a magnetic pole or moving charge/current experiences magnetic effects.','The field around a bar magnet can be represented by magnetic field lines.','field'],
        ['Magnetic field lines','Magnetic field lines form closed curves. Outside a bar magnet they are conventionally directed from north to south, and they do not intersect.','Closer field lines indicate a stronger magnetic field.','fieldLines'],
        ['Field due to a current-carrying conductor','An electric current produces a magnetic field around a conductor. The direction can be found using the right-hand thumb rule.','Increasing current generally increases the magnetic field around the conductor.','wireField'],
        ['Right-hand thumb rule','If the right-hand thumb points in the direction of conventional current, the curled fingers show the direction of the magnetic field around the conductor.','Use the rule to determine whether the field circles clockwise or anticlockwise when viewed from one end.','rightHand'],
        ['Solenoid','A solenoid is a coil of many turns of insulated wire. When current flows, it produces a magnetic field similar to that of a bar magnet.','A soft-iron core can make a solenoid much more effective as an electromagnet.','solenoid'],
        ['Force on a current-carrying conductor','A current-carrying conductor placed in a magnetic field experiences a force. The direction depends on current and magnetic field directions.','This effect is the operating principle behind an electric motor.','forceWire'],
        ['Fleming’s left-hand rule','Stretch the thumb, forefinger and middle finger of the left hand mutually perpendicular. Forefinger shows field, middle finger current and thumb force/motion.','The rule helps determine the direction of motion of a motor conductor.','flemingLeft'],
        ['Electric motor','An electric motor converts electrical energy into mechanical energy using the force on a current-carrying coil in a magnetic field.','The split-ring commutator reverses current every half-turn to maintain rotation.','motor'],
        ['Electromagnetic induction','A changing magnetic flux through a conductor can induce an emf/current. This is electromagnetic induction.','Moving a magnet relative to a coil can produce an induced current.','induction'],
        ['Fleming’s right-hand rule','Stretch the thumb, forefinger and middle finger of the right hand mutually perpendicular. Thumb gives motion, forefinger field and middle finger induced current.','It is useful for determining the direction of induced current in a generator.','flemingRight'],
        ['Electric generator','A generator converts mechanical energy into electrical energy through electromagnetic induction.','An AC generator uses a slip-ring arrangement to obtain alternating current.','generator'],
        ['Domestic electric circuits','Domestic wiring uses parallel connections and includes live, neutral and earth wires, fuses/MCBs and proper earthing for safety.','A fuse protects a circuit by melting when excessive current flows.','domestic']
      ]
    },
    {
      name: 'Sources of Energy',
      concepts: [
        ['What is a good source of energy?','A useful energy source should provide a large amount of energy per unit mass or volume, be convenient to store and transport, and have manageable environmental impact.','A practical source balances energy output, cost, availability and environmental effects.','source'],
        ['Renewable and non-renewable sources','Renewable sources are replenished naturally on a human timescale, while non-renewable sources are limited and take very long periods to form.','Solar and wind are renewable; coal and petroleum are non-renewable.','renewable'],
        ['Fossil fuels','Coal, petroleum and natural gas are fossil fuels formed over geological timescales. Their combustion releases energy but also produces pollutants and greenhouse gases.','Thermal power stations commonly burn fossil fuels to generate electricity.','fossil'],
        ['Thermal power plant','A thermal power plant uses heat from fuel combustion to produce steam, which drives turbines connected to generators.','Energy changes include chemical → thermal → mechanical → electrical.','thermalPlant'],
        ['Hydroelectric energy','Stored gravitational potential energy of water can be converted into electrical energy using turbines and generators.','A dam stores water at height, providing energy for the turbine.','hydro'],
        ['Solar energy','Solar radiation can be converted into useful heat or electricity. Solar cells convert light energy directly into electrical energy.','Solar cookers use solar radiation mainly as a heat source.','solar'],
        ['Wind energy','Moving air has kinetic energy that can drive turbine blades connected to generators.','Wind farms are most effective in locations with suitable sustained wind speeds.','wind'],
        ['Biomass and biogas','Biomass is organic material used as fuel. Biogas can be produced by anaerobic decomposition of organic matter and contains a high proportion of methane.','Biogas plants can use animal dung and other biodegradable waste.','biogas'],
        ['Geothermal and ocean energy','Geothermal energy uses heat from inside Earth. Ocean energy can use tides, waves or temperature differences.','These sources are renewable but their use depends strongly on suitable locations.','geoOcean'],
        ['Nuclear energy','Nuclear energy can be released through nuclear fission. It can produce large amounts of energy but requires careful management of radioactive materials and waste.','In a nuclear reactor, controlled fission releases heat that can ultimately be used to generate electricity.','nuclear'],
        ['Environmental impact and sustainable choices','Every energy source has advantages, limitations and environmental consequences. Sustainable energy planning considers efficiency, pollution, resource availability and long-term needs.','Reducing unnecessary energy use is often the simplest first step toward sustainability.','sustainability']
      ]
    }
  ]
};

const visualSVG = {
  mirror:`<svg viewBox="0 0 500 180"><line x1="250" y1="20" x2="250" y2="160" stroke="currentColor" stroke-width="6"/><line x1="30" y1="90" x2="470" y2="90" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/><line x1="80" y1="40" x2="250" y2="90" stroke="#1687ff" stroke-width="4"/><line x1="250" y1="90" x2="80" y2="140" stroke="#1687ff" stroke-width="4"/><text x="260" y="35">Normal</text><text x="65" y="35">Incident ray</text><text x="65" y="155">Reflected ray</text></svg>`,
  lens:`<svg viewBox="0 0 500 180"><path d="M250 20 Q190 90 250 160 Q310 90 250 20" fill="none" stroke="currentColor" stroke-width="6"/><line x1="30" y1="90" x2="470" y2="90" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/><line x1="40" y1="55" x2="250" y2="55" stroke="#1687ff" stroke-width="4"/><line x1="250" y1="55" x2="390" y2="90" stroke="#1687ff" stroke-width="4"/><text x="260" y="35">Convex lens</text></svg>`,
  current:`<svg viewBox="0 0 500 180"><line x1="60" y1="90" x2="440" y2="90" stroke="currentColor" stroke-width="8"/><polygon points="440,90 410,72 410,108" fill="#1687ff"/><circle cx="150" cy="90" r="32" fill="none" stroke="currentColor" stroke-width="5"/><text x="125" y="96">R</text><text x="190" y="45">Current I</text><text x="300" y="125">Conventional current →</text></svg>`,
  field:`<svg viewBox="0 0 500 180"><circle cx="250" cy="90" r="28" fill="none" stroke="currentColor" stroke-width="5"/><path d="M180 90 C180 35 320 35 320 90 C320 145 180 145 180 90" fill="none" stroke="#1687ff" stroke-width="3"/><path d="M130 90 C130 5 370 5 370 90 C370 175 130 175 130 90" fill="none" stroke="#1687ff" stroke-width="3"/><text x="220" y="96">I</text></svg>`,
  eye:`<svg viewBox="0 0 500 180"><path d="M55 90 Q250 10 445 90 Q250 170 55 90Z" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="250" cy="90" r="38" fill="none" stroke="#1687ff" stroke-width="5"/><circle cx="250" cy="90" r="12" fill="currentColor"/><line x1="390" y1="45" x2="390" y2="135" stroke="currentColor" stroke-width="5"/><text x="315" y="35">Lens</text><text x="365" y="160">Retina</text></svg>`,
  energy:`<svg viewBox="0 0 500 180"><circle cx="100" cy="90" r="45" fill="none" stroke="#1687ff" stroke-width="6"/><path d="M150 90 H330" stroke="currentColor" stroke-width="5"/><polygon points="330,90 305,75 305,105" fill="currentColor"/><rect x="340" y="55" width="80" height="70" fill="none" stroke="currentColor" stroke-width="5"/><text x="73" y="97">SUN</text><text x="348" y="95">USEFUL</text></svg>`
};

function conceptVisual(kind){
  const key = ['mirror','spherical','mirrorTerms','rayMirror','formula','magnification'].includes(kind)?'mirror':
    ['refraction','snell','index','slab','lens','lensFormula','powerLens'].includes(kind)?'lens':
    ['eye','accommodation','nearFar','myopia','hypermetropia','presbyopia','prism','atmosphere','scattering'].includes(kind)?'eye':
    ['current','voltage','ohm','resistance','resistivity','series','parallel','heating','power','energy'].includes(kind)?'current':
    ['field','fieldLines','wireField','rightHand','solenoid','forceWire','flemingLeft','motor','induction','flemingRight','generator','domestic'].includes(kind)?'field':'energy';
  return visualSVG[key];
}

function renderClass10(){
  const root=document.getElementById('mastery');
  if(!root)return;
  let chapterIndex=0, conceptIndex=0;
  const stateKey='kp-class10-mastery';
  const mastered=JSON.parse(localStorage.getItem(stateKey)||'{}');

  function total(){return CLASS10.chapters.reduce((n,c)=>n+c.concepts.length,0)}
  function flatIndex(){let n=conceptIndex;for(let i=0;i<chapterIndex;i++)n+=CLASS10.chapters[i].concepts.length;return n}
  function render(){
    const ch=CLASS10.chapters[chapterIndex], c=ch.concepts[conceptIndex], global=flatIndex()+1;
    const done=!!mastered[`${chapterIndex}-${conceptIndex}`];
    const progress=Math.round((Object.keys(mastered).length/total())*100);
    root.innerHTML=`<div class="top"><a href="index.html">← Back to Home</a><a href="question-bank.html?class=10">Question Bank →</a></div>
    <h1>Class 10 <span>Physics</span></h1><p class="intro">${CLASS10.subtitle}</p>
    <div class="progress"><div><strong>${Object.keys(mastered).length} / ${total()}</strong> concepts mastered</div><div class="bar"><i style="width:${progress}%"></i></div></div>
    <div class="chapter-tabs">${CLASS10.chapters.map((x,i)=>`<button class="${i===chapterIndex?'active':''}" data-ch="${i}">${i+1}. ${x.name}</button>`).join('')}</div>
    <section class="concept-card"><div class="meta"><span>Chapter ${chapterIndex+1}</span><span>Concept ${conceptIndex+1} of ${ch.concepts.length}</span><span>Overall ${global} / ${total()}</span></div>
    <h2>${c[0]}</h2><div class="learning-grid"><div><h3>Understand the concept</h3><p>${c[1]}</p><h3>Example</h3><p>${c[2]}</p></div><div class="visual"><div class="visual-box">${conceptVisual(c[3])}</div><small>Concept visual — use the diagram to connect the idea with the explanation.</small></div></div>
    <div class="mastery ${done?'done':''}"><button id="masterBtn">${done?'✓ Concept Mastered':'Mark Concept as Mastered'}</button><span>${done?'You can move to the next concept.':'Master this concept before moving ahead.'}</span></div>
    <div class="actions"><button id="prev" ${global===1?'disabled':''}>← Previous</button><a href="question-bank.html?class=10&chapter=${encodeURIComponent(ch.name)}&topic=${encodeURIComponent(c[0])}">Practice Questions →</a><button id="next" ${global===total()?'disabled':''}>Next Concept →</button></div></section>`;
    root.querySelectorAll('[data-ch]').forEach(b=>b.onclick=()=>{chapterIndex=Number(b.dataset.ch);conceptIndex=0;render();});
    root.querySelector('#masterBtn').onclick=()=>{mastered[`${chapterIndex}-${conceptIndex}`]=true;localStorage.setItem(stateKey,JSON.stringify(mastered));render();};
    root.querySelector('#prev').onclick=()=>{if(conceptIndex>0)conceptIndex--;else if(chapterIndex>0){chapterIndex--;conceptIndex=CLASS10.chapters[chapterIndex].concepts.length-1;}render();window.scrollTo({top:0,behavior:'smooth'});};
    root.querySelector('#next').onclick=()=>{if(conceptIndex<ch.concepts.length-1)conceptIndex++;else if(chapterIndex<CLASS10.chapters.length-1){chapterIndex++;conceptIndex=0;}render();window.scrollTo({top:0,behavior:'smooth'});};
  }
  render();
}
renderClass10();