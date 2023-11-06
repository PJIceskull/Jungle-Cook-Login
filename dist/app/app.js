function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    }).fail(function () {
      console.log(pageID, "page not found");
      alert(pageID + " page not found.");
    });
  } else {
    $.get(`pages/login.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    }).fail(function () {
      alert(pageID + " page not found.");
    });
  }
}

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
