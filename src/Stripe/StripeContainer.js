import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51MRpkyDCzxgwcS6yNDKafOMGvO8xR1GgLj4OwbVk5xWQueTiI2CKJUrDFcgNCT5BHqv7brtfJ3PUP1Yp3L1Q3l3P00sPGgSCBe";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;