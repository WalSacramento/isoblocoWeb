function handleClickMenu() {
  let menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('show');
}

let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})