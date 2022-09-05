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
  
  img$$.className="merienda"
  tamagochi.eat +=10;
  tamagochi.exercise-=10
  eat$$.textContent = tamagochi.eat;
  sleep$$.textContent = tamagochi.sleep;
  exercise$$.textContent = tamagochi.exercise;
 if(tamagochi.eat <=0||tamagochi.exercise<=0 ||tamagochi.sleep<=0){
    img$$.classList.remove("merienda");
    img$$.classList.add("falta");
}
 }

 const correr=() =>{
  img$$.className="ejercicio"
  tamagochi.eat -=10;
  tamagochi.sleep +=10;
  tamagochi.exercise+=10
  eat$$.textContent = tamagochi.eat;
  sleep$$.textContent = tamagochi.sleep;
  exercise$$.textContent = tamagochi.exercise;
if(tamagochi.eat <=0||tamagochi.exercise<=0 ||tamagochi.sleep<=0){
    img$$.classList.remove("ejercicio");
    img$$.classList.add("falta");
}
 }

 const dormir=() =>{
  img$$.className="descansar"
  tamagochi.eat +=10;
  tamagochi.sleep -=10;
  tamagochi.exercise-=10
  eat$$.textContent = tamagochi.eat;
  sleep$$.textContent = tamagochi.sleep;
  exercise$$.textContent = tamagochi.exercise;
if(tamagochi.eat <=0||tamagochi.exercise<=0 ||tamagochi.sleep<=0){
    img$$.classList.remove("descansar");
    img$$.classList.add("falta");
}
 }

