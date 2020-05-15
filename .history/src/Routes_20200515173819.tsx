import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { Center } from "./Center";

interface RoutesProps {}

const Stack = createStackNavigator();

function Login({ navigation }) {
	return (
		<Center>
			<Text>I am login screen</Text>
			<Button
				title="go to register"
				onPress={() => {
					navigation.navigate("Register");
				}}
			/>
		</Center>
	);
}

function Register({ navigation }) {
	return (
		<Center>
			<Text>I am register screen</Text>
			<Button
				title="go to login"
				onPress={() => {
					navigation.navigate("Login");
				}}
			/>
		</Center>
	);
}

export const Routes: React.FC<RoutesProps> = ({}) => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
