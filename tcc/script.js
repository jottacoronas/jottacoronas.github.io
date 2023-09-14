
window.addEventListener("scroll", function(){
    let navbar = document.querySelector('.navbar')
    navbar.classList.toggle('roll',window.scrollY > 0)
})