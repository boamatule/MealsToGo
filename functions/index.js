const functions = require("firebase-functions");
const {geocodeRequest} = require("./geocode");
const {placesRequest} = require("./places");
const {payRequest} = require("./pay");

const {Client} = require("@googlemaps/google-maps-services-js");
<<<<<<< HEAD
const stripeClient = require("stripe")(functions.config().stripe.key);
const googleClient = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});

exports.pay = functions.https.onRequest((request, response) => {
  payRequest(request, response, stripeClient);
=======

const client = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client );
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
>>>>>>> ErrorManagment
});
