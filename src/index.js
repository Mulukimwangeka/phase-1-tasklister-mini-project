document.addEventListener("DOMContentLoaded", () => {
  // your code here
 document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault();
  const newItem = document.getElementById("new-task-description").value 
  console.log(newItem);
  buildtask(newItem);

 })
  
});
function buildtask (task){
const li =document.createElement("li")
li.textContent =task

const button =document.createElement("button")
button.addEventListener('click',handledelete);
button.textContent = 'X';

li.appendChild(button)
const theList =document.querySelector('#tasks')
theList.appendChild(li)
}

function handledelete(e){
  e.target.parentNode.remove();
}