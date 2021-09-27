canvas = document.getElementById("canvasmain");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var OGW = 1920;
var OGH = 844;

console.log(canvas);

var LogBox = canvas.getContext('2d');
LogBox.strokeStyle = "#FFFFFF";
LogBox.lineWidth = 1;
var LoginInputUser = canvas.getContext('2d');
LoginInputUser.strokeStyle = "#FFFFFF";
LoginInputUser.lineWidth = 3;
var LoginInputPass = canvas.getContext('2d');
LoginInputPass.strokeStyle = "#FFFFFF";
LoginInputPass.lineWidth = 3;
var LoginAcceptButton = canvas.getContext('2d');
LoginAcceptButton.strokeStyle = "#FFFFFF";

var LoadingUpAnimation = canvas.getContext('2d');
var Login_ButtonText = canvas.getContext('2d');
var Login_LOGOWHITECont = canvas.getContext('2d');
var Login_LOGOWHITE = {
    'source': null,
    'current': 0,
    'total_frames': 40,
    'width': 600,
    'height': 600
};
var Login_LOGOWHITEimg = new Image();
Login_LOGOWHITEimg.onload = function () { // Triggered when image has finished loading.
  Login_LOGOWHITE.source = Login_LOGOWHITEimg;  // we set the image source for our object.
};
Login_LOGOWHITEimg.src = "./img/OohYea.png";
var LoginLogoText = canvas.getContext('2d');
var LoginLogoText_Data = {
    'source': null,
    'current': 0,
    'total_frames': 2,
    'width': 1200,
    'height': 350
};
var LoginLogoText_img = new Image();
 LoginLogoText_img .onload = function () { // Triggered when image has finished loading.
  LoginLogoText_Data.source = LoginLogoText_img;  // we set the image source for our object.
};
 LoginLogoText_img.src = "./img/DSU.png";
 var LoginUsernameText = canvas.getContext('2d');
 var LoginUsernameText_Data = {
     'source': null,
     'current': 0,
     'total_frames': 15,
     'width': 1200,
     'height': 115
 };
 var LoginUsernameText_img = new Image();
  LoginUsernameText_img .onload = function () { // Triggered when image has finished loading.
   LoginUsernameText_Data.source = LoginUsernameText_img;  // we set the image source for our object.
 };
  LoginUsernameText_img.src = "./img/username.png";

  var LoginButtonText = canvas.getContext('2d');
   var LoginButtonText_Data = {
       'source': null,
       'current': 0,
       'total_frames': 7,
       'width': 1200,
       'height': 450
   };
   var LoginButtonText_img = new Image();
    LoginButtonText_img .onload = function () { // Triggered when image has finished loading.
     LoginButtonText_Data.source = LoginButtonText_img;  // we set the image source for our object.
   };
    LoginButtonText_img.src = "./img/Login.png";

  var LoginPasswordText = canvas.getContext('2d');
  var LoginPasswordText_Data = {
      'source': null,
      'current': 0,
      'total_frames': 9,
      'width': 1200,
      'height': 115
  };
  var LoginPasswordText_img = new Image();
   LoginPasswordText_img .onload = function () { // Triggered when image has finished loading.
    LoginPasswordText_Data.source = LoginPasswordText_img;  // we set the image source for our object.
  };
   LoginPasswordText_img.src = "./img/password.png";

   var UserLogo = canvas.getContext('2d');
   var UserLogo_Data = {
       'source': null,
       'current': 0,
       'total_frames': 1,
       'width': 12000,
       'height': 4000
   };
   var UserLogo_img = new Image();
    UserLogo_img .onload = function () { // Triggered when image has finished loading.
     UserLogo_Data.source = UserLogo_img;  // we set the image source for our object.
   };
    UserLogo_img.src = "./img/UserLogo.png";


var LoginBlockX = -0.3;
var LoginBlockWidth = 0.15;
var LoginBlockHeight = 0.02 ;

var LoginUserWidth = -0.01;
var LoginUserHeight = 0.04;

var LoginPassWidth = -0.01;
var LoginPassHeight = 0.04;

var LoginAButtonWidth = -0.01;
var LoginAButtonHeight = 0.08;

var LOGOWhiteProportion = 1;
var LoginLogoTextProportion = 1;
var LoginUsernameTextProportion = 1;
var LoginPasswordTextProportion = 1;
var LoginButtonTextProportion = 1;
var UserLogoProportion = 1;

var LoginBackground = ["#331b60", "black"];
var LoginBackground_Index = 0;
var buttontextdelay = 75;

var UserLogoLoaded = false;

function LoginBackgroundFunc() {
  setTimeout(function () {
  	document.body.style.cssText = "background-color: " + LoginBackground[LoginBackground_Index];
  	LoginBackground_Index++;
  	if (LoginBackground_Index == undefined || LoginBackground_Index >= LoginBackground_Index.length) {
  		LoginBackground_Index = 0;
  	}
  }, 1000);
}
function LoginBlockMove() {
  var LoginBlockMove_Exists = true;
  if (LoginBlockWidth < (0.35)) {
    requestAnimationFrame(LoginBlockMove);
    }
  LogBox.clearRect(0, 0, innerWidth, innerHeight);
  LogBox.strokeRect(canvas.width*LoginBlockX, canvas.height*.15, canvas.width*LoginBlockWidth, canvas.height*LoginBlockHeight);
  if (LoginBlockX < (0.5 - 0.35/2)) {
    LoginBlockX += 0.025;
  } else {
    if (LoginBlockWidth < (0.35)) {
      LoginBlockWidth += 0.025;
      LoginBlockHeight += 0.085;
      }
    }
}
function LoginUserBox() {
  var LoginInputUser_Exists = true;
  if (LoginUserWidth < (.31)) {
    requestAnimationFrame(LoginUserBox);
  }
  LoginInputUser.clearRect(canvas.width*(0.33), canvas.height*.39, canvas.width*.33, canvas.height*0.06);
  LoginInputUser.strokeRect(canvas.width*0.345, canvas.height*.4, canvas.width*LoginUserWidth, canvas.height*LoginUserHeight);
    if (LoginUserWidth < (.31)) {
      LoginUserWidth += 0.01;
    }
    else {
      return;
    }
  }
function LoginPassBox() {
  var LoginInputPass_Exists = true;
  if (LoginPassWidth < (0.31)) {
    requestAnimationFrame(LoginPassBox);
  }
  LoginInputUser.clearRect(canvas.width*(0.33), canvas.height*.59, canvas.width*.33, canvas.height*0.06);
  LoginInputPass.strokeRect(canvas.width*0.345, canvas.height*.6, canvas.width*LoginPassWidth, canvas.height*LoginPassHeight);
    if (LoginPassWidth < (0.31)) {
      LoginPassWidth += 0.01;
    }
    else {
      return;
    }
  }
function LoginAcceptButtonFunc() {
    var LoginAcceptButton_Exists = true;
    if (LoginAButtonWidth < (0.08)) {
      requestAnimationFrame(LoginAcceptButtonFunc);
    }
    LoginAcceptButton.clearRect(canvas.width*0.44, canvas.height*.705, canvas.width*(LoginAButtonWidth+0.03), canvas.height*(LoginAButtonHeight+0.02));
    LoginAcceptButton.strokeRect(canvas.width*0.46, canvas.height*.715, canvas.width*LoginAButtonWidth, canvas.height*LoginAButtonHeight);
      if (LoginAButtonWidth <= (0.08)) {
        LoginAButtonWidth += 0.01;
      }
    }
function LoginFlashButtonFunc() {
  LoginAcceptButton.fillRect(canvas.width*0.46, canvas.height*0.715, canvas.width*0.08, canvas.height*0.08);
  setTimeout(function () {
    LoginAcceptButton.clearRect(0, 0, canvas.width, canvas.height);

  },250);
}
function LoginWhiteLogo() {
  if (Login_LOGOWHITE.current < 39) {
  requestAnimationFrame(LoginWhiteLogo);
  }

  Login_LOGOWHITECont.clearRect(canvas.width*0.33, canvas.height*.17, 844*LOGOWhiteProportion*0.15, 844*LOGOWhiteProportion*0.15);

  if ((canvas.width/OGW)<=(canvas.height/OGH)) {
    LOGOWhiteProportion = (canvas.width/OGW);
  } else {
    if ((canvas.width/OGW)>(canvas.height/OGH)) {
      LOGOWhiteProportion = (canvas.height/OGH);
    }
  }
  Login_LOGOWHITECont.drawImage(Login_LOGOWHITE.source, Login_LOGOWHITE.current * Login_LOGOWHITE.width, 0, Login_LOGOWHITE.width, Login_LOGOWHITE.height, canvas.width*0.33, canvas.height*.17, 844*LOGOWhiteProportion*0.15, 844*LOGOWhiteProportion*0.15);
  if (Login_LOGOWHITE.current < 39) {
    Login_LOGOWHITE.current = (Login_LOGOWHITE.current + 1);
  } else {
    if (Login_LOGOWHITE.current == 39) {
      Login_LOGOWHITE.current = 39;
    }
  }
}
function LoginLogoTextFunc() {
  if ((canvas.width/OGW)<=(canvas.height/OGH)) {
    LoginLogoTextProportion = (canvas.width/OGW);
  } else {
    if ((canvas.width/OGW)>(canvas.height/OGH)) {
      LoginLogoTextProportion = (canvas.height/OGH);
    }
  }

  setTimeout(function () {
    LoginLogoText.clearRect(canvas.width*.4, canvas.height*.17, 1200*LoginLogoTextProportion*.36, 350*LoginLogoTextProportion*.36);
    LoginLogoText.drawImage(LoginLogoText_Data.source, LoginLogoText_Data.current * LoginLogoText_Data.width, 0, LoginLogoText_Data.width, LoginLogoText_Data.height, canvas.width*.4, canvas.height*.17, 1200*LoginLogoTextProportion*.36, 350*LoginLogoTextProportion*.36);
    if (LoginLogoText_Data.current < 2) {
      LoginLogoText_Data.current++;
      LoginLogoTextFunc();
    } else {
      if (LoginLogoText_Data.current >= 2) {
      }
    }
  },150);
}
function LoginUsernameTextFunc() {
  if ((canvas.width/OGW)<=(canvas.height/OGH)) {
    LoginUsernameTextProportion = (canvas.width/OGW);
  } else {
    if ((canvas.width/OGW)>(canvas.height/OGH)) {
      LoginUsernameTextProportion = (canvas.height/OGH);
    }
  }

  setTimeout(function () {
    LoginUsernameText.clearRect(canvas.width*0.35, canvas.height*.41, 1200*LoginUsernameTextProportion*.22, 115*LoginUsernameTextProportion*.22);
    LoginUsernameText.drawImage(LoginUsernameText_Data.source, LoginUsernameText_Data.current * LoginUsernameText_Data.width, 0, LoginUsernameText_Data.width, LoginUsernameText_Data.height, canvas.width*0.35, canvas.height*.41, 1200*LoginUsernameTextProportion*.22, 115*LoginUsernameTextProportion*.22);
    if (LoginUsernameText_Data.current < 14) {
      LoginUsernameText_Data.current++;
      LoginUsernameTextFunc();
    } else {
      if (LoginUsernameText_Data.current >= 14) {
      }
    }
  },50);
}
function LoginPasswordTextFunc() {
  if ((canvas.width/OGW)<=(canvas.height/OGH)) {
    LoginPasswordTextProportion = (canvas.width/OGW);
  } else {
    if ((canvas.width/OGW)>(canvas.height/OGH)) {
      LoginPasswordTextProportion = (canvas.height/OGH);
    }
  }

  setTimeout(function () {
    LoginPasswordText.clearRect(canvas.width*0.35, canvas.height*.608, 1200*LoginPasswordTextProportion*.22, 115*LoginPasswordTextProportion*.22);
    LoginPasswordText.drawImage(LoginPasswordText_Data.source, LoginPasswordText_Data.current * LoginPasswordText_Data.width, 0, LoginPasswordText_Data.width, LoginPasswordText_Data.height, canvas.width*0.35, canvas.height*.608, 1200*LoginPasswordTextProportion*.22, 115*LoginPasswordTextProportion*.22);
    if (LoginPasswordText_Data.current < 8) {
      LoginPasswordText_Data.current++;
      LoginPasswordTextFunc();
    } else {
      if (LoginPasswordText_Data.current >= 8) {
      }
    }
  },50);
}
function LoginButtonTextFunc() {
  LoginAcceptButton.fillStyle = "white";

  if ((LoginButtonText_Data.height/LoginButtonText_Data.width)*0.08*canvas.width <= 0.08*canvas.height) {
    var buttonimage_height = (LoginButtonText_Data.height/LoginButtonText_Data.width)*0.07*canvas.width;
    var buttonimage_width = 0.07*canvas.width;
    var buttonimage_heightproportion = buttonimage_height/canvas.height;
    var buttonimage_widthproportion = buttonimage_width/canvas.width;
  } else {
    if ((LoginButtonText_Data.width/LoginButtonText_Data.height)*0.08*canvas.height <= 0.08*canvas.width) {
      var buttonimage_height = 0.07*canvas.height;
      var buttonimage_width = (LoginButtonText_Data.width/LoginButtonText_Data.height)*0.07*canvas.height;
      var buttonimage_heightproportion = buttonimage_height/canvas.height;
      var buttonimage_widthproportion = buttonimage_width/canvas.width;
    }
  }

  setTimeout(function () {
    LoginButtonText.clearRect(canvas.width*(0.5-(buttonimage_widthproportion/2)), canvas.height*(0.715+0.04-(buttonimage_heightproportion/2)), buttonimage_width, buttonimage_height);
    LoginButtonText.drawImage(LoginButtonText_Data.source, LoginButtonText_Data.current * LoginButtonText_Data.width, 0, LoginButtonText_Data.width, LoginButtonText_Data.height, canvas.width*(0.5-(buttonimage_widthproportion/2)), canvas.height*(0.715+0.04-(buttonimage_heightproportion/2)), buttonimage_width, buttonimage_height);
    if (LoginButtonText_Data.current < 4) {
      LoginButtonText_Data.current++;
      LoginButtonTextFunc();
    } else {
      if (LoginButtonText_Data.current = 4) {
      }
    }
  },buttontextdelay);
}

function UserLogoMoveFunc() {
  function UserLogoLoop() {
    if (UserLogo_YPOS <= 0.5) {
      setTimeout(function () {
        UserLogo.clearRect(0,0,canvas.width,canvas.height);
        UserLogo.drawImage(UserLogo_Data.source,canvas.width*0.5-(UserLogo_Data.width * UserLogoProportion/2),canvas.height*UserLogo_YPOS-(UserLogo_Data.height * UserLogoProportion/2),UserLogoWidth,UserLogoHeight);
        UserLogo_YPOS += 0.01;
        UserLogoLoop();
      },5);
    } else {
      UserLogoLoaded = true;
    }
  }
  UserLogoLoop();
}

UserLogoAnimSpeed = 0.00005;

function UserLogoGrow() {
  if (UserLogoProportion < 0.051 && UserLogoLoaded) {
    UserLogoProportion += UserLogoAnimSpeed;
    UserLogo.clearRect(0,0,canvas.width,canvas.height);
    UserLogo.drawImage(UserLogo_Data.source,canvas.width*0.5-(UserLogo_Data.width * UserLogoProportion/2),canvas.height*UserLogo_YPOS-(UserLogo_Data.height * UserLogoProportion/2),UserLogo_Data.width * UserLogoProportion,UserLogo_Data.height * UserLogoProportion);
    requestAnimationFrame(UserLogoGrow);
  }
}

function UserLogoShrink() {
  if (UserLogoProportion > 0.05 && UserLogoLoaded) {
    UserLogoProportion -= UserLogoAnimSpeed;
    UserLogo.clearRect(0,0,canvas.width,canvas.height);
    UserLogo.drawImage(UserLogo_Data.source,canvas.width*0.5-(UserLogo_Data.width * UserLogoProportion/2),canvas.height*UserLogo_YPOS-(UserLogo_Data.height * UserLogoProportion/2),UserLogo_Data.width * UserLogoProportion,UserLogo_Data.height * UserLogoProportion);
    requestAnimationFrame(UserLogoShrink);
  }
}





var initialdelay = 3000;
UserLogoProportion = 0.05;
var UserLogoWidth = UserLogo_Data.width * UserLogoProportion;
var UserLogoHeight = UserLogo_Data.height * UserLogoProportion;
var UserLogo_YPOS = -0.5;
