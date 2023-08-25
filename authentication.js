  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import {getAuth, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
  import "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
  import "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyCwW3vMFeocyeV5JcjKCktPNa0Mkr9dpkY",
    authDomain: "authentication-35262.firebaseapp.com",
    projectId: "authentication-35262",
    storageBucket: "authentication-35262.appspot.com",
    messagingSenderId: "63312855594",
    appId: "1:63312855594:web:1c8586f51f0958dc217953"
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const auth = getAuth(app)

  let submit = document.querySelector("#submit");
  let mail = document.querySelector('.email');



  submit.addEventListener('click', resetPassword);

  function resetPassword(){
    
    submit.style.backgroundColor = "#eaeaea";
    submit.style.color = "#555";
    const email = mail.value;

    const reset = sendPasswordResetEmail(auth, email)
    .then((userCredential) => {
        alert("Password reset email sent!");
        const user = userCredential.user;
            console.log(user);
        // ..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}