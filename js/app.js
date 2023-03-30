const buttonElement = document.querySelectorAll('.faq-toggle');
const faqElement = document.querySelector('.faq');

buttonElement.forEach(button => {
    button.addEventListener('click', () =>{
        button.parentNode.classList.toggle('active');
    });
});