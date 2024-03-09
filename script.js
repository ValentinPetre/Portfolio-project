// interacting with the skill list 

let skillList = document.getElementsByClassName("skill");
let logos = document.getElementsByClassName("logo");
let lines = document.getElementsByClassName("line");
const pop = (event1, event2) => {
  event1.style.height = '4rem';
  event2.style.display = 'block';
}
const back = (event1, event2) => {
  event1.style.height = '3rem';
  event2.style.display = 'none';
}

for (let i = 0; i < skillList.length; i++){
  skillList[i].onmouseover = function () { 
    pop(logos[i], lines[i]);
  }
  skillList[i].onmouseout = function () {
    back(logos[i], lines[i]);
  }
}

// interacting with contact page

let contacts = document.getElementsByClassName('options');
let values = document.getElementsByClassName('hiden');
const show = event => event.style.display = 'block';
for (let i = 0; i < contacts.length; i++){
  contacts[i].onclick = function(){
    show(values[i]);
  }
}

// interacting with projects page

let projectImg = document.getElementsByTagName('figure');
let exit = document.getElementsByTagName('figcaption');

// 2 functions: 1 to enlarge the project screenshos  and 1 to reduce back to original size
const large  = event => {
  event.style.position = 'absolute';
  event.style.width = '100%';
  event.style.height = '52rem';
  event.style.zIndex = '2';
}
const unLarge = event => {
  event.style.position = '';
  event.style.width = '';
  event.style.height = '';
  event.style.zIndex = '';
  
}

// enlarging the screenshots
for (let i = 0; i < projectImg.length; i++){
   projectImg[i].onclick = function () {
    large(projectImg[i]);
    exit[i].style.display = 'block';
    // when one screenshot is enlarged the rest of Main section doesn't show
    for (let j = 0; j < projectImg.length; j++){
      if (j != i ) {
       document.getElementsByClassName('project')[j].style.display = 'none';
      }
    }
   }
}

// reducing back using 'Escape' key
const keyPress = event =>{
  let key = event.key;
  if (key === 'Escape'){
    for (let i = 0; i < projectImg.length; i++){
      unLarge(projectImg[i]);
      exit[i].style.display = 'none';
      // when the screenshot is reduced back show all Main section 
      for (let j = 0; j < projectImg.length; j++){
        if (j != i ) {
         document.getElementsByClassName('project')[j].style.display = '';
        }
      }
    }
  }
}

document.onkeydown = keyPress;

