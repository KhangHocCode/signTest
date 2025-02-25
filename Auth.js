// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSih373lLhe4lTSvgt13-CsiNb_nwK3Qw",
  authDomain: "signinsignup-cc7c7.firebaseapp.com",
  projectId: "signinsignup-cc7c7",
  storageBucket: "signinsignup-cc7c7.firebasestorage.app",
  messagingSenderId: "964057298293",
  appId: "1:964057298293:web:2a41ff87119118deb68f3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function () {
  const signUpButton = document.getElementById('btn-signup');
  const signInButton = document.getElementById('btn-signin');

  signUpButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid), {
          email: email,
          password: password
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });

  signInButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Redirect or perform other actions
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors here
      });
  });
});