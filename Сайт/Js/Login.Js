
var form = document.querySelector("form");
var list = document.getelementById("uli");
var userInput = document.getElementById("user - todo");
console.log(form);

form.addEventilstener("submit", function(event){
event.preventDefault();
var li = document.creteElemnet("li);
ku.textContent = userInpu t.value;
li.style.clor = 'red';|
list.appendChild(li);
});
