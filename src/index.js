// import functions into index file
import { changePage } from "./model.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"; // look for the auth folder
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAauj-zBAp9ewpyD6J7IGH5zjJPaQjRWSI",
  authDomain: "n315-pi.firebaseapp.com",
  projectId: "n315-pi",
  storageBucket: "n315-pi.appspot.com",
  messagingSenderId: "301611833853",
  appId: "1:301611833853:web:2fc92b7326a5fab7d9e194",
  measurementId: "G-FWVH83GF36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// function initURLListener() {
//   $(window).on("hashchange", changeRoute);
//   changeRoute();
// }

function initListeners() {
  // Hamburger Menu
  // Using Jquery
  $(".hamburger-menu").on("click", function () {
    $(this).toggleClass("open");
  });

  $("footer").on("click", function () {
    console.log($(".signinBTN"));
    console.log("Hello");
  });
}

export function addFormListener() {
  console.log("Form Listen");
  $(".signinBTN").on("click", function () {
    console.log($(".signinBTN"));
    console.log("Hello");
  });

  // Login / Sign
  // Create Account
  $(".signinBTN").on("click", function (e) {
    e.preventDefault();
    console.log("Sign In");
    console.log($("signinBTN"));

    // Variables for inputs
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let email = $("#email_Reg").val();
    let pword = $("#pword_Reg").val();

    createUserWithEmailAndPassword(auth, email, pword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert("Error: " + errorMessage);
      });
    //   Print to Console name
    console.log("Name: " + fName + " " + lName);
  });

  // Login
  $(".loginBTN").on("click", function (e) {
    e.preventDefault();
    console.log("Sign In");
    let email = $("#email").val();
    let pword = $("#pword").val();

    signInWithEmailAndPassword(auth, email, pword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert("Error Message " + errorMessage);
      });
    console.log("Logged In");
  });
}

$(document).ready(function () {
  // $(window).on("hashchange", changePage);
  changePage("login");
  initListeners();
});
