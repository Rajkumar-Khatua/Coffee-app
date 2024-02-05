import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import Favorites from "../screens/Favorites";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import { COLORS } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => {
          <BlurView
            intensity={80}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "transparent",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              overflow: "hidden",
            }}
          />;
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="cart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="heart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="list"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.primaryBlackRGBA,
    height: 50,
    position: "absolute",
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
