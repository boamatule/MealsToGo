import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51Ja15lCinXW9R0Bo2G7PudKJ89qf2PqWIvPtZDmH8LKlcCAmtEeTq4whYcrLBIpYnyBYTcbR3Rym75fBDpUkP9dg00Io7yyJvd"
);

export const cardTokenRequest = ({ card }) => stripe.createToken({ card });
