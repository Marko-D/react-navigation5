import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";

interface RoutesProps {}

const Stack = createStackNavigator();

function Login() {
	return (
		<View style={{
			flex: 1,
			alignItems: "center",
			justifyContent: "center"
		}}>
			<Text>I am login screen</Text>
		</View>
	);
}

export const Routes: React.FC<RoutesProps> = ({}) => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
