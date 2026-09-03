/* SkillUp Central Quiz Engine v2 */
window.SkillUpQuizEngine=(function(){
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function injectStyles(){
 if(document.getElementById('skillup-quiz-engine-styles'))return;
 const s=document.createElement('style');s.id='skillup-quiz-engine-styles';
 s.textContent=
 .quiz-card,.quiz-result{background:#fff;border:2px solid #e5e5e5;border-bottom:7px solid #d9d9d9;border-radius:24px;padding:24px;margin:16px 0;color:#4b4b4b;box-shadow:0 3px 0 rgba(0,0,0,.02)}
 .quiz-progress{height:16px;background:#e5e5e5;border-radius:999px;overflow:hidden;margin:0 0 24px}
 .quiz-progress div{height:100%;background:#58cc02;border-radius:999px;transition:width .3s ease}
 .quiz-card>b{display:inline-block;color:#777;font-size:14px;letter-spacing:.8px;margin-bottom:16px;font-weight:900}
 .quiz-card h2{font-size:30px;line-height:1.3;margin:6px 0 26px;color:#3c3c3c;font-weight:900}
 .quiz-options{display:grid;gap:13px}
 .quiz-options button{width:100%;background:#fff;border:2px solid #e5e5e5;border-bottom:5px solid #d8d8d8;border-radius:16px;padding:17px 18px;text-align:left;font-size:17px;font-weight:800;color:#4b4b4b;cursor:pointer;transition:transform .12s ease,background .15s ease,border .15s ease}
 .quiz-options button:active{transform:translateY(3px);border-bottom-width:2px}
 .quiz-options button:hover:not(:disabled){border-color:#84d64b;background:#f7ffef}
 .quiz-options button.correct{border-color:#58cc02!important;border-bottom-color:#46a302!important;background:#dfffd0!important;color:#2f7d00!important}
 .quiz-options button.wrong{border-color:#ff4b4b!important;border-bottom-color:#d93636!important;background:#ffe2e2!important;color:#b42b2b!important}
 .quiz-options button:disabled{cursor:default}
 .quiz-feedback{margin-top:20px;border-radius:18px;padding:18px;line-height:1.6;font-weight:700;background:#f1faeb;color:#426c25;border:2px solid #d6f0c7}
 .quiz-next,.quiz-retry{width:100%;margin-top:15px;background:#58cc02;color:#fff;border:0;border-bottom:5px solid #46a302;border-radius:15px;padding:15px 18px;font-size:16px;font-weight:900;letter-spacing:.3px;cursor:pointer;text-transform:uppercase}
 .quiz-next:active,.quiz-retry:active{transform:translateY(3px);border-bottom-width:2px}
 .quiz-result{text-align:center;padding:30px 20px}.quiz-result h1{font-size:32px;margin:4px 0 12px;font-weight:900}.quiz-result h2{font-size:24px}.wrong-review{text-align:left;background:#fff7f7;border:2px solid #ffd5d5;border-bottom:4px solid #ffc4c4;border-radius:16px;padding:16px;margin:13px 0;line-height:1.6}
 @media(max-width:520px){.quiz-card,.quiz-result{padding:22px 16px;border-radius:22px;margin:14px 0}.quiz-card h2{font-size:27px}.quiz-options button{font-size:16px;padding:16px}.quiz-feedback{font-size:15px;padding:16px}.quiz-next,.quiz-retry{padding:15px;font-size:15px}}
`;document.head.appendChild(s);
}
function render(root,questions,onDone){
 injectStyles();let i=0,score=0,wrong=[];
 function draw(){
  if(i>=questions.length)return finish();
  const q=questions[i],opts=shuffle(q.options.map((text,index)=>({text,index}))),pct=Math.round((i/questions.length)*100);
  root.innerHTML='<div class="quiz-card"><div class="quiz-progress"><div style="width:'+pct+'%"></div></div><b>QUESTION '+(i+1)+' OF '+questions.length+'</b><h2>'+q.question+'</h2><div class="quiz-options">'+opts.map((o,n)=>'<button data-i="'+o.index+'">'+String.fromCharCode(65+n)+'. '+o.text+'</button>').join('')+'</div><div class="quiz-feedback" hidden></div></div>';
  root.querySelectorAll('.quiz-options button').forEach(b=>b.onclick=()=>{
   const selected=+b.dataset.i,correct=q.answer,buttons=root.querySelectorAll('.quiz-options button'),fb=root.querySelector('.quiz-feedback');fb.hidden=false;
   buttons.forEach(x=>{x.disabled=true;if(+x.dataset.i===correct)x.classList.add('correct')});
   if(selected===correct){score++;fb.innerHTML='🎉 <b>CORRECT!</b><br>📘 '+(q.explanation||'Review this NCERT concept to strengthen your understanding.')}
   else{b.classList.add('wrong');wrong.push({question:q.question,selected:q.options[selected],correct:q.options[correct],explanation:q.explanation||''});fb.innerHTML='❌ <b>INCORRECT</b><br>✅ Correct answer: <b>'+q.options[correct]+'</b><br>📘 '+(q.explanation||'Review this NCERT concept carefully.')}
   fb.innerHTML+='<button class="quiz-next">'+(i===questions.length-1?'FINISH →':'NEXT →')+'</button>';root.querySelector('.quiz-next').onclick=()=>{i++;draw()};
  });
 }
 function finish(){
  const pct=Math.round(score/questions.length*100);
  root.innerHTML='<div class="quiz-result"><h1>'+ (pct===100?'🏆 PERFECT SCORE!':'🎯 TEST COMPLETE')+'</h1><h2>'+score+' / '+questions.length+' • '+pct+'%</h2>'+ (pct===100?'<p>🎉 <b>100% CORRECT ANSWERS</b> — Excellent mastery!</p>':'<p>Keep learning and improve your score.</p>')+(wrong.length?'<h3>📝 REVIEW WRONG ANSWERS</h3>'+wrong.map(x=>'<div class="wrong-review"><b>❌ '+x.question+'</b><br>❌ Your answer: '+x.selected+'<br>✅ Correct answer: '+x.correct+(x.explanation?'<br>📘 '+x.explanation:'')+'</div>').join(''):'')+'<button class="quiz-retry">🔄 RETRY TEST</button></div>';
  root.querySelector('.quiz-retry').onclick=()=>{i=0;score=0;wrong=[];draw()};if(onDone)onDone({score,pct,wrong});
 }
 draw();
}
return {render};
})();