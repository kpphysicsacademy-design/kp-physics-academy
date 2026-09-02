/* SkillUp Mastery Engine: every missed question repeats until 100% mastery. */
window.SkillUpMasteryPractice=class{
 constructor({questions,onRender,onAnswer,onComplete,skillFor}){
  this.questions=questions;this.onRender=onRender;this.onAnswer=onAnswer;this.onComplete=onComplete;
  this.skillFor=skillFor||(()=> 'Core skill');this.reset();
 }
 reset(){this.round=1;this.queue=this.questions.map((_,i)=>i);this.index=0;this.mastered=new Set();this.wrong=[];this.stats=new Map();this.totalWrong=0;this.firstCorrect=0}
 current(){return this.questions[this.queue[this.index]]}
 answer(selected){
  const id=this.queue[this.index],q=this.questions[id],correct=selected===q[5],skill=this.skillFor(q);
  const s=this.stats.get(skill)||{correct:0,wrong:0};if(correct){s.correct++;if(this.round===1)this.firstCorrect++;this.mastered.add(id)}
  else{s.wrong++;this.totalWrong++;if(!this.wrong.includes(id))this.wrong.push(id)}
  this.stats.set(skill,s);this.onAnswer?.({correct,question:q,mastered:this.mastered.size,total:this.questions.length,round:this.round});return correct;
 }
 next(){
  if(this.index<this.queue.length-1){this.index++;this.onRender?.(this.current(),this.state());return false}
  if(this.wrong.length){this.queue=[...this.wrong];this.wrong=[];this.index=0;this.round++;this.onRender?.(this.current(),this.state());return false}
  this.onComplete?.(this.summary());return true;
 }
 state(){return{round:this.round,mastered:this.mastered.size,total:this.questions.length,index:this.index,queueLength:this.queue.length,progress:this.mastered.size/this.questions.length}}
 summary(){return{mastery:100,mastered:this.mastered.size,total:this.questions.length,rounds:this.round,firstPassAccuracy:Math.round(this.firstCorrect/this.questions.length*100),totalWrong:this.totalWrong,skills:[...this.stats.entries()].map(([skill,s])=>({skill,...s,rate:Math.round(s.correct/(s.correct+s.wrong)*100)})).sort((a,b)=>a.rate-b.rate)}}
}