let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [

{
question:"What is HTML?",
answer:"Hyper Text Markup Language"
},

{
question:"What is CSS?",
answer:"Cascading Style Sheets"
},

{
question:"What is JavaScript?",
answer:"Programming language used for web development"
}

];

let current = 0;

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const showBtn = document.getElementById("showBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("counter");

function save(){

localStorage.setItem("flashcards",JSON.stringify(flashcards));

}

function display(){

question.innerText = flashcards[current].question;

answer.innerText = flashcards[current].answer;

answer.classList.add("hidden");

showBtn.innerText="Show Answer";

counter.innerText=`${current+1} / ${flashcards.length}`;

}

display();

showBtn.onclick=function(){

if(answer.classList.contains("hidden")){

answer.classList.remove("hidden");

showBtn.innerText="Hide Answer";

}

else{

answer.classList.add("hidden");

showBtn.innerText="Show Answer";

}

}

nextBtn.onclick=function(){

current++;

if(current>=flashcards.length){

current=0;

}

display();

}

prevBtn.onclick=function(){

current--;

if(current<0){

current=flashcards.length-1;

}

display();

}

document.getElementById("addBtn").onclick=function(){

const q=document.getElementById("newQuestion").value;

const a=document.getElementById("newAnswer").value;

if(q==""||a==""){

alert("Enter Question and Answer");

return;

}

flashcards.push({

question:q,

answer:a

});

save();

document.getElementById("newQuestion").value="";

document.getElementById("newAnswer").value="";

current=flashcards.length-1;

display();

}

document.getElementById("deleteBtn").onclick=function(){

if(flashcards.length==1){

alert("Cannot delete last flashcard");

return;

}

flashcards.splice(current,1);

if(current>=flashcards.length){

current=flashcards.length-1;

}

save();

display();

}

document.getElementById("editBtn").onclick=function(){

let q=prompt("Edit Question",flashcards[current].question);

if(q==null) return;

let a=prompt("Edit Answer",flashcards[current].answer);

if(a==null) return;

flashcards[current].question=q;

flashcards[current].answer=a;

save();

display();

}