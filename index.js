const questions = document.querySelectorAll(".q");

questions.forEach(question => {
    question.addEventListener("click", () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        answer.classList.toggle('show');
        const icon = question.firstElementChild;
        icon.classList.toggle('fa-angle-up');
        icon.classList.toggle('fa-angle-down');
    });
});

