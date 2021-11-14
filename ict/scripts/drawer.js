var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
var accsub = document.getElementsByClassName("sub-accordion");
var i;

for (i = 0; i < accsub.length; i++) {
  accsub[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var panelsub = document.getElementsByClassName("panel");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    if (panelsub.style.maxHeight) {
      panelsub.style.maxHeight = null;
    } else {
      panelsub.style.maxHeight = panelsub.scrollHeight+panelsub.scrollHeight + "px";
    }
  });
}
