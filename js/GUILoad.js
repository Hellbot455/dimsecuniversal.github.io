var canvas = document.getElementById("canvasmain");

function GUIIconRefresh() {
  for (let i3 = 0; i3 <= 4; i3++) {
    r = rects[i3];
      GUILoadContext.clearRect(canvas.width*((i3+1)/6)-(canvas.width/12),0,canvas.width/6,canvas.height);
      GUILoadContext.drawImage(GUIImageLoc[i3],canvas.width*((i3+1)/6)-((canvas.width/6)*GUIImageScale/2),canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2),(canvas.width/6)*GUIImageScale,(1400/1000)*(canvas.width/6)*GUIImageScale);
  }
}


var GUIModeStatus = false;

var GUILoadContext = canvas.getContext('2d');
GUILoadContext.strokeStyle = "#FFFFFF";
var GUIImageLoc1 = new Image(),
GUIImageLoc2 = new Image(),
GUIImageLoc3 = new Image(),
GUIImageLoc4 = new Image(),
GUIImageLoc5 = new Image();
GUIImageLoc1.src = './img/GUI/Dossiers.png';
GUIImageLoc2.src = './img/GUI/Reports.png';
GUIImageLoc3.src = './img/GUI/Gallery.png';
GUIImageLoc4.src = './img/GUI/Technical Documents.png';
GUIImageLoc5.src = './img/GUI/CLASSIFIED.png';

var GUIDatabaseVerImg = new Image();
GUIDatabaseVerImg.src = './img/GUI/DatabaseVer.png';
var GUIDatabaseVerProportion = 0.02;

let GUIImageLoc = [GUIImageLoc1,GUIImageLoc2,GUIImageLoc3,GUIImageLoc4,GUIImageLoc5];

let GUIImageYLoop = [1.5 , 1.5 , 1.5 , 1.5 , 1.5];
var i1 = 1;
var GUIImageLoadAnimStatus = false;
var GUIImageScale = 0.75;
var GUIImageYLoopSpeed = 0.01;
function GUIImageLoadAnimFunc() {
  GUIModeStatus = true;
  if (i1 < 6) {
    GUILoadContext.drawImage(GUIImageLoc[i1-1],canvas.width*(i1/6)-((canvas.width/6)*GUIImageScale/2),canvas.height*(GUIImageYLoop[i1-1])-((1400/1000)*(canvas.width/6)*GUIImageScale/2),(canvas.width/6)*GUIImageScale,(1400/1000)*(canvas.width/6)*GUIImageScale);
    GUIImageLoadAnimLoopFunc();
    function GUIImageLoadAnimLoopFunc() {
      if (canvas.width >= canvas.height) {
        GUIImageYLoopSpeed = 0.01;
      } else {
        GUIImageYLoopSpeed = 0.05;
      }
      if (GUIImageYLoop[i1-1] > 0.5) {
        setTimeout( function () {
          GUIImageYLoop[i1-1] -= GUIImageYLoopSpeed;
          GUILoadContext.clearRect(canvas.width*(i1/6)-(canvas.width/12),0,canvas.width/6,canvas.height);
          GUILoadContext.drawImage(GUIImageLoc[i1-1],canvas.width*(i1/6)-((canvas.width/6)*GUIImageScale/2),canvas.height*GUIImageYLoop[i1-1]-((1400/1000)*(canvas.width/6)*GUIImageScale/2),(canvas.width/6)*GUIImageScale,(1400/1000)*(canvas.width/6)*GUIImageScale);
          GUIImageLoadAnimLoopFunc();
        },1);
      } else {
        i1++;
        GUIImageLoadAnimFunc();
      }
    }
  } else {
    GUIImageLoadAnimStatus = true;
    GUIIconRefresh();
  }
}

var rects = [{x: canvas.width*(1/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale},
        {x: canvas.width*(2/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale},
        {x: canvas.width*(3/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale},
        {x: canvas.width*(4/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale},
        {x: canvas.width*(5/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale}
    ], r;

function ReEvalRects() {

  rects = [{x: canvas.width*(1/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale},
          {x: canvas.width*(2/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale},
          {x: canvas.width*(3/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale},
          {x: canvas.width*(4/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale},
          {x: canvas.width*(5/6)-((canvas.width/6)*GUIImageScale/2), y: canvas.height*0.5-((1400/1000)*(canvas.width/6)*GUIImageScale/2), w: (canvas.width/6)*GUIImageScale, h: (1400/1000)*(canvas.width/6)*GUIImageScale}
      ]

}

function GUIDrawVersion() {
  GUILoadContext.clearRect(canvas.width-7400*GUIDatabaseVerProportion,0,7400*GUIDatabaseVerProportion,400*GUIDatabaseVerProportion);
  GUILoadContext.drawImage(GUIDatabaseVerImg,canvas.width-7400*GUIDatabaseVerProportion,0,7400*GUIDatabaseVerProportion,400*GUIDatabaseVerProportion);
  requestAnimationFrame(GUIDrawVersion);
}
