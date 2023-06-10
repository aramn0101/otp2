const firebaseConfig = {
  apiKey: "AIzaSyBjoOgVcuBxqIJLWl_Rgp9y8woxIGf8jjQ",
  authDomain: "phoneotp-1ae30.firebaseapp.com",
  databaseURL: "https://phoneotp-1ae30-default-rtdb.firebaseio.com",
  projectId: "phoneotp-1ae30",
  storageBucket: "phoneotp-1ae30.appspot.com",
  messagingSenderId: "260001980169",
  appId: "1:260001980169:web:b84a13bb833e7523a93dd8",
  measurementId: "G-J32LV9Z4VZ",
};

firebase.initializeApp(firebaseConfig);

render();
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}
/*
function phoneAuth() {
  var number = "+91" + document.getElementById("number").value;

  firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      document.getElementById("sender").style.display = "none";
      document.getElementById("verifier").style.display = "block";
    })
    .catch(function (error) {
      alert(error.message);
    });
}

function codeverify() {
  var code = document.getElementById("verificationcode").value;
  coderesult
    .confirm(code)
    .then(function () {
      document.getElementById("p-conf")[0].style.display = "block";
      document.getElementById("n-conf")[0].style.display = "none";
    })
    .catch(function () {
      document.getElementById("p-conf")[0].style.display = "none";
      document.getElementById("n-conf")[0].style.display = "block";
    });
}
*/

function phoneAuth() {
  var number = "+91" + document.getElementById("number").value;
  var number1 = "+91" + document.getElementById("number").value;
  var ref = firebase.database().ref().push();
  var key = ref.key;
  firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      console.log(coderesult);
      firebase
        .database()
        .ref("Number/" + key)
        .set({
          number: number1,
        });
      alert("meassge sent");
    })
    .catch(function (error) {
      alert(error.message);
    });
}
function codeverify() {
  var code = document.getElementById("verifiycode").value;
  coderesult
    .confirm(code)
    .then(function (result) {
      var user = result.user;
      console.log(user);
      alert("Successfully registered");
    })
    .catch(function (error) {
      if (error) {
        alert("invaild otp");
      }
    });
}

/*
render();
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}
*/
/*
function login1() {
  var st = (document.getElementById("form").style.display = "none");
  if (st) {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "block";
    document.getElementById("you").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("recaptcha-container").style.display = "block";
  } else {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form1").style.display = "none";
    document.getElementById("recaptcha-container").style.display = "none";
  }
}

render();
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-containern"
  );
  recaptchaVerifier.render();
}
function number() {
  var st = (document.getElementById("form2").style.display = "none");
  if (st) {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "block";
  } else {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "none";
  }
  var number = "+91" + document.getElementById("numberotp").value;
  var number1 = "+91" + document.getElementById("numberotp").value;
  var user = document.getElementById("username").value;
  var ref = firebase.database().ref().push();
  var key = ref.key;

  firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      console.log(coderesult);
      firebase
        .database()
        .ref("Number/" + key)
        .set({
          user: user,
          number: number1,
        });
      alert("meassge sent");
    })
    .catch(function (error) {
      alert(error.message);
    });
}

function ganrate() {
  var code = document.getElementById("otp").value;
  coderesult
    .confirm(code)
    .then(function (result) {
      var user = result.user;
      console.log(user);
      alert("Successfully registered");
    })
    .catch(function (error) {
      if (error) {
        alert("invaild otp");
      }
    });
}
*/
