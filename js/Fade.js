var canvas = document.getElementById("canvasmain");
var Fade_Context = canvas.getContext('2d');
Fade_Context.strokeStyle = '#FFFFF';
window.innerWidth;
window.innerHeight;
var Fade_Data = {
    'source': null,
    'current': 0,
    'total_frames': 100,
    'width': 1,
    'height': 1
};
var Fade_img = new Image();
 Fade_img .onload = function () { // Triggered when image has finished loading.
  Fade_Data.source = Fade_img;  // we set the image source for our object.
};
 Fade_img.src = "./img/FadeToBlackGrad.png";

 function FadeFunc() {
   setTimeout(function () {
     Fade_Context.drawImage(Fade_Data.source, Fade_Data.current * Fade_Data.width, 0, Fade_Data.width, Fade_Data.height, 0, 0, window.innerWidth, window.innerHeight);
     if (Fade_Data.current < 99) {
       Fade_Data.current++;
       FadeFunc();
     } else {
       if (Fade_Data.current >= 99) {
         Fade_Context.clearRect(0, 0, window.innerWidth, window.innerHeight);
         Fade_Context.drawImage(Fade_Data.source, Fade_Data.current * Fade_Data.width, 0, Fade_Data.width, Fade_Data.height, 0, 0, window.innerWidth, window.innerHeight);
       }
     }
   },10);
 }
