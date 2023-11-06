export function changeRoute() {
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
      //   console.log("data " + data);
      $("#app").html(data);
    }).fail(function () {
      alert(pageID + " page not found.");
    });
  }
}
