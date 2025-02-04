$(document).ready(() => {
  /*
  This function will take the IP or domain passed by the user
  and together with the geo.ipify website API will search for
  this IP and show it on a map with the help of leaftlesjs
  */
  searchLocation();

  $("#btnSearch").on("click", () => {
    if ($("#inptSearch").val() === "") {
      // if the user has not filled in the search field
      showAlert("verifique seu campo de pesquisa e tente novamente");
      return;
    }

    const search = $("#inptSearch").val();
    searchLocation(search);
  });

  $("#inptSearch").on("keypress", (e) => {
    if (e.which === 13) {
      if ($("#inptSearch").val() === "") {
        showAlert("verifique seu campo de pesquisa e tente novamente");
        return;
      }

      const search = $("#inptSearch").val();
      searchLocation(search);
    }
  });
});

function showAlert(message) {
  if ($("#alert").length) {
    return;
  }
  $("body").append(
    `<div class="alert alert-warning alert-custom" id="alert">${message}</div>`
  );

  setTimeout(() => {
    $("#alert").fadeOut();
  }, 3000);

  setTimeout(() => {
    $("#alert").remove();
  }, 3500);
}
