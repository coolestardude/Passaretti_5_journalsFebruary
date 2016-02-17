var magic = Math.floor((Math.random() * 100));

var guesses = 0;

var guess = prompt("Im thinking of a number 0-99...");
document.write("Nope. ");


while (magic != guess){
 if (guess < magic){
  guess = prompt("Nope. Too low. Try again.");
  guesses += 1 ;
  document.write("Too low.");
} else if (guess > magic){
  guess = prompt("Nope. Too high. Try again.");
  document.write("Too high.");
  guesses += 1 ;
} else {
   document.write("This is impossible unless you're awesome like Wes"); 
 }
}
  guesses += 1;

document.write("<br><br>Wow! Nice! It WAS in fact " + guess + "!");
document.write("<br>That only took you " + guesses + " tries! Can you get it faster next time?");
