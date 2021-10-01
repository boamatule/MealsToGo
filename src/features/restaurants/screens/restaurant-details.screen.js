import React, { useState, useContext } from "react";
import { List, Divider } from "react-native-paper";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { OrderButton } from "../components/restaurant-list.styles";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Chingu's snack" />
            <Divider />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <Divider />

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Burger w/ Fries à La Bella" />
            <Divider />
            <List.Item title="Vegan Steak" />
            <Divider />

            <List.Item title="Steak Sandwich" />
            <Divider />
          </List.Accordion>
          <Divider />

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Cassic Swedish Meat Balls" />
            <Divider />

            <List.Item title="Baked Mushroom" />
            <Divider />

            <List.Item title="Kings Duck" />
            <Divider />
          </List.Accordion>
          <Divider />

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Caipirinha" />
            <Divider />

            <List.Item title="La Cosa Nostra" />
            <Divider />

            <List.Item title="Tøyen Cola" />
            <Divider />

            <List.Item title="Fanta Ananas" />
            <Divider />

            <List.Item title="Cuban Link" />
            <Divider />

            <List.Item title="Ghost La Favela" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          ORDER SPECIAL ONLY 12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
