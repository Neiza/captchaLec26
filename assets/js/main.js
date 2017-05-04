var code = document.getElementById("code");
var verification =  document.getElementById("verificatiion");
var newCaptcha = document.getElementById("newCaptcha");
var verificateCaptcha = document.getElementById("verificateCaptcha");


function captcha(n){
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmonpqrstuvwxyz´";
  var captchaValue = "";
  for (var i=0; i<n; i++){
      rang = Math.floor(Math.random()*characters.length);
      captchaValue += characters.substr(rang,1);
  }
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return code.value = captchaValue;
         code.style.color = color;
}

function verification(){
  if (code.value == verification.value){
    window.location = "captcha.html";
  }
}


window.addEventListener('load',captcha);
newCaptcha.addEventListener('click',captcha);
