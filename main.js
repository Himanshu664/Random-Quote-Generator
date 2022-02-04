let btn = document.getElementById("btn");
let output = document.getElementById("quote");
let quotes = [
  "We grow fearless when we do the things we fear.",
  "And, when you want something, all the universe conspires in helping you to achieve it.",
  "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
  "You can't be great if you don't feel great. Make exceptional health your number one priority.",
  "Impossible is just an opinion.",
  "The secret of getting ahead is getting started.",
  "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.",
];
btn.addEventListener("click", function () {
  var Quote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = Quote;
});
