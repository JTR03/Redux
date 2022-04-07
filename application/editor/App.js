import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider,} from "react-redux";
import { Store } from "./Redux/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/Home";
import Tasks from "./screens/Tasks";

const AppWrap = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Tasks") {
              iconName = focused ? "home" : "home-outline";
              size = focused ? 25 : 20;
            } else if (route.name === "Add") {
              iconName = focused ? "add" : "add-circle";
              size = focused ? 25 : 20;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Tasks" component={Home} />
        <Tab.Screen name="Add" component={Tasks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default AppWrap;
