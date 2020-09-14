const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HPvZoL2x9r6gzcA7sOdqQMINevmWO9PkVdv8qc7IyvwTmthBm1lCE0dXjc8H50p2neaTJhI6uplYZjyRDXuOPPz00k4bIITQb"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
        description:"stripe integration testing"
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);
//+  functions[api]: http function initialized (http://localhost:5001/clone-56259/us-central1/api).
// sk_test_51HPvZoL2x9r6gzcA7sOdqQMINevmWO9PkVdv8qc7IyvwTmthBm1lCE0dXjc8H50p2neaTJhI6uplYZjyRDXuOPPz00k4bIITQb