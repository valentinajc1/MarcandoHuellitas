const btnSignIn = document.getElementById("logearse"),
    btnSignUp = document.getElementById("registrarsee"),
    containerFormRegister = document.querySelector(".register"),
    containerFormLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    containerFormRegister.classList.add("hide");
    containerFormLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    containerFormLogin.classList.add("hide");
    containerFormRegister.classList.remove("hide")
})