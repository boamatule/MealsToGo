import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51Ja15lCinXW9R0Bo2G7PudKJ89qf2PqWIvPtZDmH8LKlcCAmtEeTq4whYcrLBIpYnyBYTcbR3Rym75fBDpUkP9dg00Io7yyJvd"
);

export const cardTokenRequest = ({ card }) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
