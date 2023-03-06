const task3Element = document.getElementById("task-3");

function greet() {
  alert("random message");
}

function greetTwo(userName) {
  alert("Hi " + userName);
}

task3Element.addEventListener("click", greet);
greetTwo("john");

function three(one, two, three) {
  const combined = one + two + three;
  return combined;
}

const combinedString = three("Hi ", "There ", "!");
alert(combinedString);
