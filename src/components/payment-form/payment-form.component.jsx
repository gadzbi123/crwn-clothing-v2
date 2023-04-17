import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from "./payment-form.styles";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const cartTotal = useSelector(selectCartTotal);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsPaymentLoading(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name: currentUser?.displayName ?? "Guest" },
      },
    });

    setIsPaymentLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      alert("payment successful");
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={submitHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isPaymentLoading}
          buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Pay now!
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
