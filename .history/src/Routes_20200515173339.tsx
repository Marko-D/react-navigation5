import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Center } from "./Center";

interface RoutesProps {}

const Stack = createStackNavigator();

function Login() {
	return (
		<Center>
			<Text>I am login screen</Text>
		</Center>
	);
}

function Register() {
	return (
		<Center>
			<Text>I am register screen</Text>
		</Center>
	);
}


export const Routes: React.FC<RoutesProps> = ({}) => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Register">
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
