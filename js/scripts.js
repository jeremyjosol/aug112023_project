function userInput(event){
  event.preventDefault();
  const questionJava = document.getElementById("java").value;
  const questionJava2 = document.getElementById("java2").value;
  const questionCSharp = document.getElementById("c#").value;
  const questionPython = document.getElementById("python").value; 
  console.log(questionCSharp);
  
  let result;
  if (questionJava === "Yes" && questionJava === "Yes" && questionCSharp === "No" && questionPython === "Curly braces") {
  result = "Javascript!"
  console.log(result);
  } else if (questionJava === "No" && questionJava2 === "No" && questionCSharp === "Yes" && questionPython === "Indentation") {
  result = "C#, but possibly look into Python" 
  console.log(result);
  } else if (questionJava === "No" && questionJava2 === "No" && questionCSharp === "No" && questionPython === "Curly braces") {
  result = "You should try Javascript."
  } else if (questionJava === "Yes" && questionJava2 === "Yes" && questionCSharp === "Yes" && questionPython === "Curly braces") {
  result = "You should try Javascript AND C#. Check out Epicodus!"
  } else if (questionJava === "No" && questionJava2 === "Yes" && questionCSharp === "Yes" && questionPython === "Curly braces") {
  result = "You should try Javascript AND C#. Check out Epicodus!"
  } else if (questionJava === "Yes" && questionJava2 === "No" && questionCSharp === "Yes" && questionPython === "Curly braces") {
  result = "You should try Javascript AND C#. Check out Epicodus!"
  }
  document.getElementById("result").innerText = result;

}

window.addEventListener("load", function(){
  document.getElementById("question").addEventListener("submit", userInput);
  console.log(userInput);
});