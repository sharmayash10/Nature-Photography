menuicon = document.querySelector('.menu-icon');
navbar = document.querySelector(".navbar");
logo = document.querySelector(".logo");
navlist = document.querySelector(".nav-list");

menuicon.addEventListener('click', ()=>{
    navbar.classList.toggle('resp-height');
    logo.classList.toggle('resp-visibility');
    navlist.classList.toggle('resp-visibility');
})

function validateForm() {
    let x = document.forms["contact-form"]["first-name"].value;
    let y = document.forms["contact-form"]["last-name"].value;
    let z = document.forms["contact-form"]["Email"].value;
    if (x | y | z == "") {
      alert("Entries must be filled out");
      return false;
    }
  }