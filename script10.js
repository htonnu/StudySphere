var btnContainer = document.getElementsByClassName("menu");

var btns = btnContainer[0].getElementsByClassName("button");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = btnContainer[0].getElementsByClassName("active");
    if (current.length > 0) {
      current[0].classList.remove("active");
    }
    this.classList.add("active");
  });
}