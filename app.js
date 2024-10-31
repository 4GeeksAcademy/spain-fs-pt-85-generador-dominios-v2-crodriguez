window.onload = function() {
  
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  let var1 = Math.floor(Math.random() * (who.length - 1));
  let var2 = Math.floor(Math.random() * (action.length - 1));
  let var3 = Math.floor(Math.random() * (what.length - 1 ));
  let var4 = Math.floor(Math.random() * (when.length - 1));
  document.querySelector("#excuse").innerHTML = who[var1] + action[var2] + what[var3] + when[var4];
}         