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
  for (i = 0; i < who.length; i++) {
    let var1 = Math.floor(Math.random() * who.length);
    for (j = 0; j < action.length; j++) {
        let var2 = Math.floor(Math.random() * action.length)
        for (k = 0; k < what.length; k++) {
            let var3 = Math.floor(Math.random() * what.length);
            for (l = 0; l < when.length; l++) {
                let var4 = Math.floor(Math.random() * when.length);
                document.querySelector("#excuse").innerHTML = who[var1] + action[var2] + what[var3] + when[var4];
            }
        }
    }
    
  }
  
}