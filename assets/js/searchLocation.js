function searchLocation(value = "") {
  const key = ipOrDomain(value);
  let parameter = `&${key}=${value}`;

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_JNhUXOwDuSelP60Km5MUn5PPklkjY${parameter}`;

  $.ajax({
    url,
    type: "GET",
    typeData: "json",
    success: (data) => {
      showInfo(data);
      showMap(data.location.lat, data.location.lng);
    },
    error: (error) => {
      const erro = error.responseJSON.messages
      const message = `solictação falhou: ${erro}`;

      showAlert(message);
      searchLocation();
    },
  });
}

// shows on the screen the information received by the geo.apify website API
function showInfo(data) {
  $("#ipAddress").html(data.ip);
  $("#location").html(`${data.location.region}, ${data.location.country}`);
  $("#timezone").html(`UTC ${data.location.timezone}`);
  $("#isp").html(data.isp);
}

// checks if the value passed in the search input was an IP or a domain of a website
function ipOrDomain(value) {
  const regExp = new RegExp("[a-zA-Z]");

  return regExp.test(value) ? "domain" : "ipAddress";
}
