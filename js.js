 var open = document.getElementById("open");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var drop = document.getElementById("drop");
function myFunction (){
    if( drop.style.height == 0 || div2.style.width == "25px"){
        open1();
    }else if(drop.style.height == "350px" || div2.style.width == 0){
        close();
    }
}
    function open1(){
    var pos1 = 5;
    var angle1 = 0;
    var id1 = setInterval(frame1, 100);
    function frame1(){
    if(pos1 == 10 || angle1 == 45) {
        clearInterval(id1);
    }else {
        pos1++;
        angle1 +=9;
        div1.style.top = pos1 + "px";
        div1.style.transform = 'rotate( '+angle1+'deg)';
         }
    }
    var pos3 = 15;
    var angle3 = 0;
    var id3 = setInterval(frame3, 100);
    function frame3(){
    if(pos3 == 10 || angle3 == -45) {
        clearInterval(id3);
    }else {
        pos3--;
        angle3 -=9;
        div3.style.top = pos3 + "px";
        div3.style.transform = 'rotate( '+angle3+'deg)';
         }
    }
    var width2 = 25;
    var id2 = setInterval(frame2, 100);
    function frame2 (){
        if(width2 == 0){
            clearInterval(id2);
        } else{
            width2 -= 5;
            div2.style.width = width2 + "px";
        }
    }
   
 var height4 = 0;
    var id4 = setInterval(frame4, 10);
    function frame4 (){
        if(height4 == 350){
            clearInterval(id4);
        } else{
            height4 += 7;
            drop.style.height = height4 + "px";
        }
    }
    }
 
    function close(){     
    var pos1 = 10;
    var angle1 = 45;
    var id1 = setInterval(frame1, 100);
    function frame1(){
    if(pos1 == 5 || angle1 == 0) {
        clearInterval(id1);
    }else {
        pos1--;
        angle1 -= 9;
        div1.style.top = pos1 + "px";
        div1.style.transform = 'rotate( '+angle1+'deg)';
         }
    }
    var pos3 = 10;
    var angle3 = -45;
    var id3 = setInterval(frame3, 100);
    function frame3(){
    if(pos3 == 15 || angle3 == 0) {
        clearInterval(id3);
    }else {
        pos3++;
        angle3 +=9;
        div3.style.top = pos3 + "px";
        div3.style.transform = 'rotate( '+angle3+'deg)';
         }
    }
    var width2 = 0;
    var id2 = setInterval(frame2, 100);
    function frame2 (){
        if(width2 == 25){
            clearInterval(id2);
        } else{
            width2 += 5;
            div2.style.width = width2 + "px";
        }
    }
   
 var height4 = 350;
    var id4 = setInterval(frame4, 10);
    function frame4 (){
        if(height4 == 0){
            clearInterval(id4);
        } else{
            height4 -= 7;
            drop.style.height = height4 + "px";
        }
    }
}
 function myFu(x) {
  if (x.matches && drop.style.height == "350px") { // If media query matches
      close1();
  } 
}
var x = window.matchMedia("(min-width: 900px)");
myFu(x); // Call listener function at run time
x.addListener(myFu); // Attach listener function on state changes 
 function myFu(x) {
  if (x.matches && drop.style.height == "350px") { // If media query matches
      close1();
  } 
}
var x = window.matchMedia("(max-width: 300px)");
myFu(x); // Call listener function at run time
x.addListener(myFu);
   function close1(){     
    var pos1 = 10;
    var angle1 = 45;
    var id1 = setInterval(frame1, 10);
    function frame1(){
    if(pos1 == 5 || angle1 == 0) {
        clearInterval(id1);
    }else {
        pos1--;
        angle1 -= 9;
        div1.style.top = pos1 + "px";
        div1.style.transform = 'rotate( '+angle1+'deg)';
         }
    }
    var pos3 = 10;
    var angle3 = -45;
    var id3 = setInterval(frame3, 10);
    function frame3(){
    if(pos3 == 15 || angle3 == 0) {
        clearInterval(id3);
    }else {
        pos3++;
        angle3 +=9;
        div3.style.top = pos3 + "px";
        div3.style.transform = 'rotate( '+angle3+'deg)';
         }
    }
    var width2 = 0;
    var id2 = setInterval(frame2, 10);
    function frame2 (){
        if(width2 == 25){
            clearInterval(id2);
        } else{
            width2 += 5;
            div2.style.width = width2 + "px";
        }
    }
   
 var height4 = 350;
    var id4 = setInterval(frame4, 1);
    function frame4 (){
        if(height4 == 0){
            clearInterval(id4);
        } else{
            height4 -= 7;
            drop.style.height = height4 + "px";
        }
    }
}
 let y1 = 0;
let x1 = 0;
let left = document.querySelector('.block-left');
let right = document.querySelector('.block-right');
let anime = document.querySelector('.anime');

document.querySelector('.container').onmousewheel = function(event){
   if(event.deltaY > 0) {
       y1 = y1 + 10;
       x1 = x1 + 2;
   } else {
        y1 = y1 - 10;
        x1 = x1 - 2;
   }
    left.style.top = - y1 +'px';
    right.style.top = - y1 +'px';
    anime.style.right = x1 + 'px';
      
}
 