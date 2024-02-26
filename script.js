let skillList = document.getElementsByClassName('skill');
const pop = i => {
    skillList[i].children[0].style.height = '5rem';
    skillList[i].children[1].style.display = 'block';
}
const back = i => {
    skillList[i].children[0].style.height = '3rem';
    skillList[i].children[1].style.display = 'none';
}
skillList[0].onmouseover = pop(0);
skillList[0].onmouseout = back(0);

document.getElementsByTagName("button").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}