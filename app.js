// console.log("hello technocast")
// let loggedInUser = {};
// const renderUserProfile = function(){
//     db.collection("users").get().then(data =>{
//         console.log(data)
//     })
// }

// renderUserProfile()

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWmO2DuIgTpL9zrrHxsMgLgy6PB5BJ7dA",
  authDomain: "technocast-6f85d.firebaseapp.com",
  projectId: "technocast-6f85d",
  storageBucket: "technocast-6f85d.appspot.com",
  messagingSenderId: "35407673188",
  appId: "1:35407673188:web:9d312a785ca31ae22d6c71",
  measurementId: "G-L0B31D6MZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPassword = document.querySelector("#signUpPassword");
const signUp = document.querySelector("#signup");
const Logout = document.querySelector("#signout");
const signIn = document.querySelector("#signin");

const navbar = document.querySelector("#navbar");
const form = document.querySelector("#form");
navbar.style.display = "none";
console.log("d");

const userSignup = async () => {
  const registerEmail = signUpEmail.value;
  const registerPassword = signUpPassword.value;
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("account created");
    })
    .catch((err) => {
      const errorcode = err.code;
      const errorMsg = err.message;
      alert(errorcode);
    });
};

const userSignIn = async () => {
  const loginEmail = email.value;
  const loginPassword = password.value;
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    
      alert("Logged in successfully");
    })
    .catch((err) => {
      const errorcode = err.code;
      const errorMsg = err.message;
      alert(errorcode);
    });
};

const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  });
};
console.log(auth);

// const userSignOut = async () => {
//   await signOut(auth);

// };
checkAuthState();
// Logout.addEventListener("click", userSignOut);
signUp.addEventListener("click", userSignup);
signIn.addEventListener("click", userSignIn);
