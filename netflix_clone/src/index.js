let faq_container = document.getElementsByClassName("FAQ_display ");

for (let i = 0; i < faq_container.length; i++) {
  faq_container[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }
    let paragraph = this.nextElementSibling;
    if (paragraph.style.maxHeight) {
      paragraph.style.maxHeight = null;
    } else {
      paragraph.style.maxHeight = paragraph.scrollHeight + "px";
    }
  });
}
