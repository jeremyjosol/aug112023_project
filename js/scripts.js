function userInput(event){
  event.preventDefault();
  const questionJava = document.getElementById("java").value;
  const questionJava2 = document.getElementById("java2").value;
  const questionCSharp = document.getElementById("c#").value;
  const questionPython = document.getElementById("python").value; 
  const questionRuby = document.getElementById("ruby").value;
  console.log(questionCSharp);
  
  let result;
  if (questionJava, questionJava2 === "Yes" && questionCSharp === "No" && questionPython === "Curly braces" && questionRuby === "Kyogre") {
  result = "Javascript! Pokemon Sapphire is fun."
  console.log(result);
  } else if (questionJava, questionJava2 === "No" && questionCSharp === "Yes" && questionPython === "Indentation" && questionRuby === "Kyogre") {
  result = "C#! Python could have potential for you in the future. Pokemon Sapphire is fun!"  
  console.log(result);
  } else if (questionJava === "Yes" && questionJava2, questionCSharp === "No" && questionPython === "Curly braces" && questionRuby === "Groudon") {
  result = "Javascript! Team Groudon!"
  } else if (questionJava === "Yes" && questionJava2, questionCSharp === "No" && questionPython === "Curly braces" && questionRuby === "Kyogre") {
  result = "Javascript! Team Kyogre!"
  } else if (questionJava, questionJava2, questionCSharp === "No" && questionPython === "Curly braces" && questionRuby === "Kyogre") { 
  result = "There's many different languages you can learn with curly braces. Kyogre!!!"
  } else if (questionJava, questionJava2 === "Yes" && questionCSharp === "No" && questionPython === "Indentation" && questionRuby === "Kyogre") {
  result = "Javascript! Python could have some potential in the future too. Kyogre is awesome. :)"
  } else if (questionJava, questionJava2, questionCSharp === "No" && questionPython === "Indentation" && questionRuby === "Kyogre") {
  result = "Python. Kyogre!!!"
  } else if (questionJava, questionJava2, questionCSharp === "Yes" && questionPython === "Curly braces" && questionRuby === "Kyogre") {
  result = "You should try Javascript AND C#. Check out Epicodus and Pokemon Sapphire!"
  } else if (questionJava, questionJava2, questionCSharp === "Yes" && questionPython === "Curly braces" && questionRuby === "Groudon") {
  result = "You should try Javascript AND C#. Check out Epicodus! Pokemon Ruby is fun too."
  } else if (questionJava, questionCSharp === "Yes" && questionJava2 === "No" && questionPython === "Curly braces") {
  result = "You should try Javascript AND C#. Check out Epicodus!"
  } else if (questionJava, questionCSharp === "Yes" && questionJava2 === "No" && questionPython === "Indentation" && questionRuby === "Groudon") {
  result = "You should try Javascript AND C#. Depending on what you master, it could be worth it to check out Python in the future."
  } else if (questionJava, questionJava2 === "Yes" && questionCSharp === "No" && questionPython === "Indentation" && questionRuby === "Groudon") {
  result = "Javascript! Depending on what you master, it could be worth it to check out Python in the future. Team Groudon!"
  } else if (questionJava, questionCSharp === "No" && questionJava2 === "Yes" && questionPython === "Curly braces" && questionRuby === "Kyogre") {
  result = "Javascript! Depending on what you master, it could be worth it to check out Python in the future. And Kyogre."
  } else if (questionJava === "No" && questionJava2 === "No" && questionCSharp === "No" && questionPython === "Indentation" && questionRuby === "Groudon") {
  result = "Python! Groudon!"  
  } else if (questionJava === "No" && questionJava2 === "No" && questionCSharp === "No" && questionPython === "Curly braces" && questionRuby === "Groudon") {
  result = "So, you want to learn Ruby... I didn't think you would make it this far..."
  } else if (questionJava === "No" && questionJava2 === "No" && questionCSharp === "Yes" && questionPython === "Curly braces" && questionRuby === "Groudon") {
  result = "C#! Pokemon Ruby is fun too."
  } else if (questionJava === "No" && questionJava2 === "No" && questionCSharp === "Yes" && questionPython === "Curly braces" && questionRuby === "Kyogre") {
  result = "C#! Pokemon Sapphire is fun!"
  } else if (questionJava === "No" && questionJava2 === "No" && questionCSharp === "Yes" && questionPython === "Indentation" && questionRuby === "Groudon") {
  result = "C#! Python could have potential for you in the future. Pokemon Ruby is fun too!"
  } else if (questionJava === "Yes" && questionJava2 === "Yes" && questionCSharp === "Yes" && questionPython === "Curly braces" && questionRuby === "Groudon") {
    result = "Javascript! Think about trying the Epicodus course to learn Javascript/C#. Pokemon Ruby is fun too!"
  } else if (questionJava === "No" && questionJava2 === "Yes" && questionCSharp === "No" && questionPython === "Indentation" && questionRuby === "Groudon") {
    result = "Python! Pokemon Ruby is fun too!"
  } else if (questionJava === "No" && questionJava2 === "Yes" && questionCSharp === "No" && questionPython === "Indentation" && questionRuby === "Kyogre") {
    result = "Python! Pokemon Sapphire is fun!"
  } else if (questionJava === "No" && questionJava2, questionCSharp === "Yes" && questionPython === "Indentation" && questionRuby === "Kyogre") {
    result = "Python! Team Kyogre :D"
  } else if (questionJava === "No" && questionJava2, questionCSharp === "Yes" && questionPython === "Indentation" && questionRuby === "Groudon") {
    result = "Python! Team Groudon :D"
  } else if (questionJava, questionJava2, questionCSharp === "Yes" && questionPython === "Indentation" && questionRuby === "Kyogre") {
    result = "Fullstack! Try learning Javascript first. Then think about C# and Python in the future."
  } else if (questionJava === "Yes" && questionJava2, questionCSharp === "No" && questionPython === "Curly braces" && questionRuby === "Groudon") {
    result = "Javascript! Team Groudon!";
  }
    document.getElementById("result").innerText = result;
}
window.addEventListener("load", function(){
  document.getElementById("question").addEventListener("submit", userInput);
  console.log(userInput);
});