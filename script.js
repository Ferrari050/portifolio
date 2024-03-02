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
console.log(buttons);
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
  const textContentTitleEducation = document.getElementById("titleEducation");
  const formacaoFaculdade = document.getElementById("formacao");
  const jobExperience = document.getElementById("experience");
  const experienceHcfmb = document.getElementById("hcfmb");
  const experienceIsc = document.getElementById("isc");
  const experienceFatec = document.getElementById("fatec");
  const courses = document.getElementById("courses");
  const toeic = document.getElementById("toeic");
  const contact = document.getElementById("contact");
  const mainProjects = document.getElementById("mainProjects");
  const tictactoe = document.getElementById("tictactoe");
  const calculator = document.getElementById("calculator");
  if (textContentTitleEducation.classList.contains("english")) {
    textContentTitleEducation.classList.remove("english");
    location.reload();
  } else {
    textContentTitleEducation.classList.add("english");
    textContentTitleEducation.innerText = "Academic Area";
    formacaoFaculdade.innerText =
      "Graduated in Computer Networks from Fatec de Bauru";
    jobExperience.innerText = "Job Experience :";
    experienceHcfmb.innerText =
      "Junior systems analyst at Hospital das Clínicas de Botucatu (Since 08/23)";
    experienceIsc.innerText =
      "Information systems programmer at I.S.C. Tecnologia (07/22 => 03/23)";
    experienceFatec.innerText = "Intern at Fatec Bauru (04/22 => 07/22)";
    courses.innerText = "Courses : ";
	toeic.innerText = "TOEIC Mastertest (advanced english level)";
	contact.innerText = "Contact : ";
	mainProjects.innerText = "Main Projects : ";
	tictactoe.innerText = "Tic tac Toe";
	calculator.innerText = "Calculator";
	buttonDarkMode.innerText = "Dark Mode";
}
});
