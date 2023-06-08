// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// theme
const body = document.querySelector("body"),
modeToggle = document.querySelector(".dark-light");

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    // js code to keep user selected mode even page refresh or file reopen
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});


// animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true,
})
sr.reveal(`.profile__border, .profile__name`)
sr.reveal(`
    .profile__social,
    .profile_profession, 
    .profile__info-group,
    .profile__buttons,
    .projects__card,
    .skills__area`, { delay: 300, origin: 'bottom' })