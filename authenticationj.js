//variables
let title = document.querySelector('#title');
let names = document.querySelector('#nameField');
let number = document.querySelector('#numField');
let forgot = document.querySelector('#forgot');
let signup = document.querySelector('#signupBtn');
let signin = document.querySelector('#signinBtn');
let input = document.querySelector('.input-grp');
let errors = document.querySelector('.error-msg')
let pass = document.querySelector('.pas');
let pass1 = document.querySelector('.cp');
let mail = document.querySelector('.email');
let btnField = document.querySelector('#btn-field');

//var count = 0;
//var counts = 0;
//events



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
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

signin.addEventListener('click', signIn);
signup.addEventListener('click', signUp);



function signIn(e){
    e.preventDefault()

    names.style.maxHeight = "0";
    number.style.maxHeight = "0";
    pass1.style.display = "none";
    pass.style.height = "2px";
    mail.style.height = "2px";
   // btnField.style.marginTop = '0';
    title.innerHTML = "Sign In";
    signup.classList.add("disable");
    signin.classList.remove("disable");
    
    const email = mail.value;
    const password = pass.value;

    const pro = signInWithEmailAndPassword(auth,email, password)
        .then((userCredential)=> {
            alert("signin successful");
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
            // ..
        });


}

function signUp(e){
    e.preventDefault()

    names.style.maxHeight = "60px";
    number.style.maxHeight = "60px";
    pass1.style.display = "block"
    title.innerHTML = "Sign Up";
    signup.classList.remove("disable");
    signin.classList.add("disable");

    if (pass.value !== pass1.value) {
        alert("passwords do not match");
        return;
    } else if(pass.value.length !== 8) {
        errors.style.display = "block";
    } else{
        const email = mail.value;
        const password = pass.value;
        //const displayName = names.value

        const promise = createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential)=> {
            alert("signup successful");
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
            // ..
        });
    }
    
}








