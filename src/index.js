// import functions into index file
import { changeRoute } from "./route.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);

// function changeRoute() {
//   let hashTag = window.location.hash;
//   let pageID = hashTag.replace("#", "");
//   console.log(hashTag + " " + pageID);

//   if (pageID != "") {
//     $.get(`pages/${pageID}.html`, function (data) {
//       console.log("data " + data);
//       $("#app").html(data);
//     }).fail(function () {
//       console.log(pageID, "page not found");
//       alert(pageID + " page not found.");
//     });
//   } else {
//     $.get(`pages/login.html`, function (data) {
//       console.log("data " + data);
//       $("#app").html(data);
//     }).fail(function () {
//       alert(pageID + " page not found.");
//     });
//   }
// }

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function initListeners() {
  // Hamburger Menu
  // Using Jquery
  $(".hamburger-menu").on("click", function () {
    $(this).toggleClass("open");
  });
}

$(document).ready(function () {
  initURLListener();
  initListeners();
});
