let textbox = document.querySelector("#textbox");
let char = document.querySelector(".char");
let wordcount = document.querySelector(".word");

textbox.addEventListener("input", function () {
  let charcter = this.value;
  char.textContent = charcter.length;
  let word = charcter.split(" ");
  let clinist = word.filter(function (elm) {
    return elm != "";
  });
  wordcount.textContent = clinist.length;
});
