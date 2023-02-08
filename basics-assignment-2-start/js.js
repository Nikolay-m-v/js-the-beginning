const task3Element = document.getElementById("task-3");

function myAlert() {
  alert("blank alert");
}

function alertTwo(userName) {
  alert("hi " + userName);
}

myAlert();
alertTwo("William");

task3Element.addEventListener("click", myAlert);

function combine(william, nick, mitak) {
  const combined = william + nick + mitak;
  return combined;
}

const combinedString = combine("William ", "Nick ", "Mitak ");
alert(combinedString);
