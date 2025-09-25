var typed= new typed(" .text",{
    Strings:["java","js"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};
