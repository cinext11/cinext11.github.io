var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*----------------------------------------------*/
function f1and(){
 var cc=document.getElementById("and1");
  if(cc.innerText ==="1")
    cc.innerHTML="0";
  else if(cc.innerText ==="0")
    cc.innerHTML="1";
  f3and();
}

function f2and(){
  var cc=document.getElementById("and2");
   if(cc.innerText ==="1")
     cc.innerHTML="0";
   else if(cc.innerText ==="0")
     cc.innerHTML="1";
     f3and();
 }

 function f3and(){
  if(document.getElementById("and1").innerText==="1" && document.getElementById("and2").innerText==="1")
    document.getElementById("and3").innerHTML="1";
  else
  document.getElementById("and3").innerHTML="0";
 }


 function f1or(){
  var cc=document.getElementById("or1");
   if(cc.innerText ==="1")
     cc.innerHTML="0";
   else if(cc.innerText ==="0")
     cc.innerHTML="1";
   f3or();
 }
  
 function f2or(){
   var cc=document.getElementById("or2");
    if(cc.innerText ==="1")
      cc.innerHTML="0";
    else if(cc.innerText ==="0")
      cc.innerHTML="1";
      f3or();
  }
 
  function f3or(){
   if(document.getElementById("or1").innerText==="1" || document.getElementById("or2").innerText==="1")
     document.getElementById("or3").innerHTML="1";
   else
   document.getElementById("or3").innerHTML="0";
  }