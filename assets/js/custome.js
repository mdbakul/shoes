function funcutio(small) {
  let mainimg = document.querySelector("#mainimg");
  mainimg.src = small.src;
}

document.querySelector(".bar i").addEventListener("click", function () {
  let final = document.querySelector(".fa-bars");
  final.classList.toggle("fa-times");
  final.classList.toggle("active");
  let navbar = document.querySelector(".nav-inner ul");

  //   let width = screen.width;
  if (screen.width < 992) {
    navbar.classList.toggle("main_active");
  } else if (screen.width >= 992) {
    navbar.classList.remove("main_active");
  }
});
