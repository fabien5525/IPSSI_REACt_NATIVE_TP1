import Livres from "./app/LivresScreen";
import Categories from "./app/CategoriesScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-book-circle "
                : "ios-book-circle-outline";
            } else {
              iconName = focused ? "ios-folder" : "ios-folder-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Livres" component={Livres} />
        <Tab.Screen name="Catégories" component={Categories} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
