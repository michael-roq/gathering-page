let ul = document.querySelectorAll("ul");

let parentAboutDiv = document.querySelector(".parent-about-div");

let duration = 2000;

let parentHappeningsDiv = document.querySelector(".parent-happenings-div");

let parentTeamDiv = document.querySelector(".parent-team-div");

let initialLi1 = document.querySelector(".init-li-1");

let initialLi2 = document.querySelector(".init-li-2");

let initialLi3 = document.querySelector(".init-li-3");

let li = document.querySelector("li");

let dropLi1 = document.querySelectorAll('.drop-li-1');
let dropLi2 = document.querySelectorAll('.drop-li-2');
let dropLi3 = document.querySelectorAll('.drop-li-3');

let list = document.querySelectorAll('.list');

let allDropLis = document.querySelector('dropLi1', 'dropLi2', 'dropLi3');


for(let i = 0; i < dropLi1.length; i++) {
  dropLi1[i].style.display = 'none';
};

for(let i = 0; i < dropLi2.length; i++) {
  dropLi2[i].style.display = 'none';
};

for(let i = 0; i < dropLi3.length; i++) {
  dropLi3[i].style.display = 'none';
};


//Helpful site for using jQuery to make delay on dropdown. (Since delay or duration won't work on display: none or display: block) 


for(let i = 0; i < dropLi1.length; i++) {
  initialLi1.addEventListener("mouseover", function () {
    if(dropLi1[i].style.display = "none") {
      dropLi1[i].style.display = "inherit";
    };
  });
};


for(let i = 0; i < dropLi1.length; i++) {
  parentAboutDiv.addEventListener("mouseleave", function () {
    if (dropLi1[i].style.display = "inherit") {
      dropLi1[i].style.display = "none";
    };
  });
};

for(let i = 0; i < dropLi1[i]; i++) {
  dropLi1[i].style.transitionProperty = 'all';
  dropLi1[i].style.transitionDelay = '500ms, 0ms';
};
//I could grab the asterics to the js to affect all things directly from here if this doesn't work.
/*
initialLi1.style.transitionProperty = 'all';
initialLi1.style.transitionDelay = '500ms, 0ms';

ul.style.transitionProperty = 'all';
ul.style.transitionDelay = '500ms, 0ms';

parentTeamDiv.style.transitionProperty = 'all';
parentTeamDiv.style.transitionDelay = '500ms, 0ms';

list.style.transitionProperty = 'all';
list.style.transitionDelay = '500ms, 0ms';
*/
/*--------------------*/

for(let i = 0; i < dropLi2.length; i++) {
  initialLi2.addEventListener("mouseover", function () {
    if(dropLi2[i].style.display = "none") { 
      dropLi2[i].style.display = "inherit";
    };
  });
  
};

for(let i = 0; i < dropLi2.length; i++) {
  parentHappeningsDiv.addEventListener("mouseleave", function () {
    if (dropLi2[i].style.display = "inherit") {
      dropLi2[i].style.display = "none";
    };
  });
};

/*--------------------*/

for(let i = 0; i < dropLi3.length; i++) {
  initialLi3.addEventListener("mouseover", function () {
    if(dropLi3[i].style.display = "none") { 
      dropLi3[i].style.display = "inherit";
    };
  });
};

for(let i = 0; i < dropLi3.length; i++) {
  parentTeamDiv.addEventListener("mouseleave", function () {
    if (dropLi3[i].style.display = "inherit") {
      dropLi3[i].style.display = "none";
    };
  });
};   



/* -------------------------------------------------------- */

var j = 0;

var images = [];  

var time = 3000;


images[0] = './img/work-day.jpg'; //TG Workday

images[1] = './img/guys-chatting.jpeg'; //Guys Chatting

images[2] = './img/worship-team.jpeg'; // Worship Team

images[3] = './img/outside.jpeg'; //Tg Micah work day
  
images[4] = './img/rock-wall.jpeg'; // Kids Rock wall
  
images[5] = './img/worship2.jpeg'; // People worshiping
  
images[6] = './img/kid-with-bike.jpeg'; // Kid with bike
  
images[7] = './img/corey.jpeg';  // Corey Speaking

images[8] = './img/worship.jpeg'; //Worship Congr.
  
images[9] = './img/praying-for-rach.jpeg'; // Praying for Rach
  
images[10] = './img/childrens-church.jpeg'; // Teaching kids
  
images[11] = './img/girls.jpeg'; // TG girls
  
images[12] = './img/foyer-hang.jpeg'; //foyer hang
  
images[13] = './img/kids-worship.jpeg'; //TG kids/fam
  
images[14] = './img/coffee-social.jpeg'; //Coffee social
  
images[15] = './img/baby-addy.jpeg'; //Addy & Baby
  

function changeImg() {
  document.slide.src = images[j];
  if(j < images.length - 1) {                           
    j++;
    
  } else {
    
    j = 0;
  };

setTimeout("changeImg()", time) 

}; 

window.onload = changeImg;