import React, { createContext, useContext } from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { CartContext } from "../../../services/cart/cart.context";

import { CreditCardInput } from "../component/credit-card.component";

export const CheckoutScreen = () => {
  const { cart } = useContext(CartContext);
  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <CreditCardInput />
    </SafeArea>
  );
};
