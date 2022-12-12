document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');

  form.addEventListener("submit", (event)=>{
     event.preventDefault();
     let input = document.getElementById('new-task-description').value;
      append(input);
      form.reset();
  })
   
})


const append = (input) => {
  let displayer = document.getElementById("tasks");
  let li = document.createElement("li");
  li.className += " " + "mt-3";
  li.textContent = input
  let row = displayer.appendChild(li)


  let btn = document.createElement("button");
  btn.className += " " + "btn btn-xm btn-danger ml-5";
  btn.textContent = "X";
  row.appendChild(btn)

  btn.onclick = () => (delete_(li)) ;
  
}

const delete_ = (li) => {
   li.remove();
} 

