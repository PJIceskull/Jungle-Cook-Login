import { addFormListener } from "./index.js";

export function changePage(pageName) {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);

  $(".login-Form .signin-Form div").off("click", "**");
  $(".login-Form .signin-Form .signinBTN").off("click", "**");

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
      console.log("data: " + pageID);
      $("#app").html(data);
      // Set Listerners on other pages

      // Set Listeners if on login.html page
      if (pageID == "login") {
        $.get(`pages/${pageID}.html`, function (data) {
          $("#app").html(data);
          addFormListener();
        });
      }
    }).fail(function (error) {
      console.log("Error: ", error);
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      // console.log("data " + data);
      console.log(pageID);
      $("#app").html(data);
    }).fail(function (error) {
      console.log("Error: ", error);
    });
  }
}

// function changeRoute() {
//   let hashTag = window.location.hash;
//   let pageID = hashTag.replace("#", "");
//   //   console.log(hashTag + ' ' + pageID);

//   if (pageID != "") {
//     $.get(`pages/pageID/pageID.html`, function (data) {
//       console.log("data " + data);
//       $("#app").html(data);
//     });
//   } else {
//     $.get(`pages/home/home.html`, function (data) {
//       console.log("data " + data);
//       $("#app").html(data);
//     });
//   }
// }
