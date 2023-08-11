function userInput(event){
  event.preventDefault();
  const questionJava = document.getElementById("java").value;
  const questionCSharp = document.getElementById("c#").value;
  console.log(questionCSharp);
  
  let result;
  if (questionJava === "yes" && questionCSharp === "no") {
  result = "Javascript!"
  console.log(result);
  } else if (questionJava === "no" && questionCSharp === "yes") {
  result = "C#" 
  console.log(result);
  }
}

window.addEventListener("load", function(){
  document.getElementById("question").addEventListener("submit", userInput);
  console.log(userInput);
});