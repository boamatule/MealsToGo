import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const CheckoutStack = createStackNavigator();

import { CheckoutScreen } from "../../features/checkout/screens/checkout.screens";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen.";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";

export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator headerShown="false">
    <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
    <CheckoutStack.Screen
      name="CheckoutSuccess"
      component={CheckoutSuccessScreen}
    />
    <CheckoutStack.Screen
      name="CheckoutError"
      component={CheckoutErrorScreen}
    />
  </CheckoutStack.Navigator>
);
