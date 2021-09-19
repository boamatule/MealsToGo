import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../../features/map/screens/map.screen";
import { SettingsScreen } from "../../../features/settings/screens/settings.screen";
import { CheckoutScreen } from "../../../features/checkout/screens/checkout.screens";

import { RestaurantsContextProvider } from "../../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../../services/location/location.context";
import { FavouritesContextProvider } from "../../../services/favourites/favourites.context";
import { CartContextProvider } from "../../../services/cart/cart.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Checkout: "md-cart",
  Settings: "md-settings",
  Map: "md-map",
  Favourites: "md-heart",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <CartContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Checkout" component={CheckoutScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </CartContextProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
