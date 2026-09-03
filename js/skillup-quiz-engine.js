/* SkillUp Central Quiz Engine v1 */
window.SkillUpQuizEngine=(function(){
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function render(root,questions,onDone){
 let i=0,score=0,wrong=[];
 function draw(){
  if(i>=questions.length)return finish();
  const q=questions[i], opts=shuffle(q.options.map((x,n)=>({text:x,index:n})));
  root.innerHTML='<div class="quiz-card"><div class="quiz-progress"><div style="width:'+((i/questions.length)*100)+'%"></div></div><b>QUESTION '+(i+1)+' OF '+questions.length+'</b><h2>'+q.question+'</h2><div class="quiz-options">'+opts.map(o=>'<button data-i="'+o.index+'">'+o.text+'</button>').join('')+'</div><div class="quiz-feedback"></div></div>';
  root.querySelectorAll('.quiz-options button').forEach(b=>b.onclick=()=>{
   const selected=+b.dataset.i, correct=q.answer, buttons=root.querySelectorAll('.quiz-options button');
   buttons.forEach(x=>{x.disabled=true;if(+x.dataset.i===correct)x.classList.add('correct')});
   const fb=root.querySelector('.quiz-feedback');
   if(selected===correct){score++;fb.innerHTML='🎉 <b>CORRECT!</b><br>📘 '+(q.explanation||'Review this NCERT concept to strengthen your understanding.') }
   else {b.classList.add('wrong');wrong.push({question:q.question,correct:q.options[correct],explanation:q.explanation||''});fb.innerHTML='❌ <b>INCORRECT</b><br>✅ Correct answer: <b>'+q.options[correct]+'</b><br>📘 '+(q.explanation||'Review this NCERT concept carefully.') }
   fb.innerHTML+='<button class="quiz-next">NEXT →</button>';root.querySelector('.quiz-next').onclick=()=>{i++;draw()};
  });
 }
 function finish(){
  const pct=Math.round(score/questions.length*100);
  root.innerHTML='<div class="quiz-result"><h1>'+ (pct===100?'🏆 PERFECT SCORE!':'🎯 TEST COMPLETE')+'</h1><h2>'+score+' / '+questions.length+' • '+pct+'%</h2>'+ (pct===100?'<p>🎉 100% CORRECT ANSWERS — Excellent mastery!</p>':'<p>Keep learning and improve your score.</p>') + (wrong.length?'<h3>📝 REVIEW WRONG ANSWERS</h3>'+wrong.map(x=>'<div class="wrong-review"><b>❌ '+x.question+'</b><br>✅ '+x.correct+'<br>📘 '+x.explanation+'</div>').join(''):'')+'<button class="quiz-retry">🔄 RETRY TEST</button></div>';
  root.querySelector('.quiz-retry').onclick=()=>{i=0;score=0;wrong=[];draw()}; if(onDone)onDone({score,pct,wrong});
 }
 draw();
}
return {render};
})();