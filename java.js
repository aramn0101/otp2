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
