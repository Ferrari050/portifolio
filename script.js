openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  menu.style.right = menu.offsetWidth * -1 + "px";
  setTimeout(() => {
    menu.style.opacity = "1";
    menu.style.right = "0";
    openMenu.style.display = "none";
  }, 10);
});

closeMenu.addEventListener("click", () => {
  menu.style.opacity = "0";
  menu.style.right = menu.offsetWidth * -1 + "px";
  setTimeout(() => {
    menu.removeAttribute("style");
    openMenu.removeAttribute("style");
  }, 200);
});

const buttonDarkMode = document.getElementById("darkMode");
buttonDarkMode.addEventListener("click", () => {
  const asideColor = document.getElementById("aside");
  const mainColor = document.getElementById("mainContainer");
  const footerColor = document.getElementById("footer");
  if (asideColor.classList.contains("darkMode")) {
    asideColor.classList.remove("darkMode");
    mainColor.classList.remove("darkMode");
    footerColor.classList.remove("darkMode");
  } else {
    asideColor.classList.add("darkMode");
    mainColor.classList.add("darkMode");
    footerColor.classList.add("darkMode");
  }
});

const buttonEnglishMode = document.getElementById("englishMode");
buttonEnglishMode.addEventListener("click", () => {
  const textContentTitleEducation = document.getElementById("idCurriculum");
  const contact = document.getElementById("contact");
  const mainProjects = document.getElementById("mainProjects");
  const tictactoe = document.getElementById("tictactoe");
  const calculator = document.getElementById("calculator");
  const welcome = document.getElementById("welcome");
  const idCurriculo = document.getElementById("idCurriculo");
  if (textContentTitleEducation.classList.contains("english")) {
    textContentTitleEducation.classList.remove("english");
    location.reload();
  } else {
    textContentTitleEducation.classList.add("english");
    idCurriculum.innerText = "curriculum";
    textContentTitleEducation.innerText =
      "Hello World! My name is João Vitor Mendes Ferrari, I was born in 2002. And, since So, my passion for technology is only increasing! I study various areas of technology, such as: Computer networks,development, IOT, network and application security, among others... I'm a determined and focused person, I have passion and ease inlearn new things, especially in my area. Recently, I discovered the part of all of those, that I most identify, which is web programming. I've been studying for a while, taking courses on the platform Alura and, mainly, I have been doing some projects by myself. I'm looking forward to my first opportunity to become a front-end developer and consolidate knowledge and grow professionally.";
    mainProjects.innerText = "Main Projects : ";
    tictactoe.innerText = "Tic tac Toe";
    calculator.innerText = "Calculator";
    buttonDarkMode.innerText = "Dark Mode";
    welcome.innerText = "Welcome!";
    contact.innerText = "Contact : ";
    idCurriculo.innerText = "Curriculum";
  }
});
