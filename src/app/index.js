function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  switch (pageID) {
    case "":
      console.log("hello");
      break;
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
});
