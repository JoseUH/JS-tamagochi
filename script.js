const game$$ = document.querySelector(".game");
const img$$ = document.querySelector(".normal");
const sleep$$ = document.querySelector(".sleep");
const exercise$$ = document.querySelector(".exercise");
const eat$$ = document.querySelector(".eat");
const button$$ = document.querySelectorAll(".button");

let tamagochi={
   sleep : 50,
   exercise : 50,
   eat : 50
}
eat$$.textContent = tamagochi.eat;
sleep$$.textContent = tamagochi.sleep;
exercise$$.textContent = tamagochi.exercise;

const comer=() =>{
  if ((img$$.classList = "normal")) {
    img$$.classList.remove("normal");
    img$$.classList.add("merienda");
  }
  if ((img$$.classList = "ejercicio")) {
    img$$.classList.remove("ejercicio");
    img$$.classList.add("merienda");
  }
  if ((img$$.classList = "descansar")) {
    img$$.classList.remove("descansar");
    img$$.classList.add("merienda");
  }
  if(tamagochi.eat <=0||tamagochi.exercise<=0 ||tamagochi.sleep<=0){
    img$$.classList.remove("merienda");
    img$$.classList.add("falta");
}
  
  tamagochi.eat +=10;
  tamagochi.exercise-=10
  eat$$.textContent = tamagochi.eat;
  sleep$$.textContent = tamagochi.sleep;
  exercise$$.textContent = tamagochi.exercise;

 }

 const correr=() =>{
  if ((img$$.classList = "normal")) {
    img$$.classList.remove("normal");
    img$$.classList.add("ejercicio");
  }
  if ((img$$.classList = "merienda")) {
    img$$.classList.remove("merienda");
    img$$.classList.add("ejercicio");
  }
  if ((img$$.classList = "descansar")) {
    img$$.classList.remove("descansar");
    img$$.classList.add("ejercicio");
  }
  if(tamagochi.eat <=0||tamagochi.exercise<=0 ||tamagochi.sleep<=0){
    img$$.classList.remove("ejercicio");
    img$$.classList.add("falta");
}

  tamagochi.eat -=10;
  tamagochi.sleep +=10;
  tamagochi.exercise+=10
  eat$$.textContent = tamagochi.eat;
  sleep$$.textContent = tamagochi.sleep;
  exercise$$.textContent = tamagochi.exercise;

 }

 const dormir=() =>{
  if ((img$$.classList = "normal")) {
    img$$.classList.remove("normal");
    img$$.classList.add("descansar");
  }
  if ((img$$.classList = "ejercicio")) {
    img$$.classList.remove("ejercicio");
    img$$.classList.add("descansar");
  }
  if ((img$$.classList = "merienda")) {
    img$$.classList.remove("merienda");
    img$$.classList.add("descansar");
  }
  if(tamagochi.eat <=0||tamagochi.exercise<=0 ||tamagochi.sleep<=0){
    img$$.classList.remove("descansar");
    img$$.classList.add("falta");
}

  tamagochi.eat +=10;
  tamagochi.sleep -=10;
  tamagochi.exercise-=10
  eat$$.textContent = tamagochi.eat;
  sleep$$.textContent = tamagochi.sleep;
  exercise$$.textContent = tamagochi.exercise;

 }

