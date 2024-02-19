function addToDo() {
  let input = document.getElementById("inputfield");
  let liste = document.getElementById("toDoList-container");
  let toDoItem = document.createElement("li");
  let btn = document.createElement("button");
  btn.innerText = "Löschen";
  btn.setAttribute("onclick", "delToDo(this)");

  toDoItem.innerText = input.value;
  toDoItem.appendChild(btn);
  liste.appendChild(toDoItem); 

  input.value = ""; 
  save();

}

function delToDo(del) {
   del.parentElement.remove(); 
  save(); 
}
function save() {
  let liste = document.getElementById("toDoList-container"); 
  localStorage.setItem("ToDoListe", liste.innerHTML); 
}
function read() {
  let liste = document.getElementById("toDoList-container"); 
  liste.innerHTML = localStorage.getItem("ToDoListe"); 
}
read();
