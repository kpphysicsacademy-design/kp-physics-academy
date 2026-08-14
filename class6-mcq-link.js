// Changes the Class 6 concept practice button to the dedicated concept MCQ page.
function updateClass6MCQLink(){
  const link=document.querySelector('#lesson a.practice');
  if(!link)return;
  const params=new URLSearchParams(location.search);
  const chapter=document.querySelector('#lesson .chapter-tag')?.textContent?.replace(/^Chapter\s+\d+\s+•\s*/,'')||'';
  const topic=document.querySelector('#lesson h2')?.textContent?.replace(/^Concept\s+\d+:\s*/,'')||'';
  if(chapter&&topic){
    link.href='class6-quiz.html?chapter='+encodeURIComponent(chapter)+'&topic='+encodeURIComponent(topic);
    link.textContent='Open Concept MCQs →';
  }
}
const originalRenderLesson=window.renderLesson;
if(typeof originalRenderLesson==='function'){
  window.renderLesson=function(){originalRenderLesson();setTimeout(updateClass6MCQLink,0)};
}
new MutationObserver(updateClass6MCQLink).observe(document.getElementById('curriculum'),{childList:true,subtree:true});
setTimeout(updateClass6MCQLink,50);