const {locations: locationsMock} = require("./geocode.mock");
const url = require("url");
const functions = require("firebase-functions");

<<<<<<< HEAD
module.exports.geocodeRequest = (request, response, client) => {
  const {city, mock} = url.parse(request.url, true).query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    return response.json(locationMock);
  }

=======

module.exports.geocodeRequest = (request, response, client) => {
  const {city, mock} = url.parse(request.url, true).query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    return response.json(locationMock);
  }

>>>>>>> ErrorManagment
  client
      .geocode({
        params: {
          address: city,
          key: functions.config().google.key,
        },
        timeout: 1000,
      })
      .then((res) => {
        return response.json(res.data);
<<<<<<< HEAD
      })
      .catch((e) => {
=======
      }).catch((e) => {
>>>>>>> ErrorManagment
        response.status(400);
        return response.send(e.response.data.error_message);
      });
};
