import React from "react";
import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { Text, Button } from "react-native";
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from "./AuthParamList";

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation }: AuthNavProps<"Login">) {
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

function Register({ navigation, route }: AuthNavProps<"Register">) {
	return (
		<Center>
			<Text>I am register screen {route.name}</Text>
			<Button
				title="go to login"
				onPress={() => {
					navigation.navigate("Login");
					// navigation.goBack();
				}}
			/>
		</Center>
	);
}

export const Routes: React.FC<RoutesProps> = ({}) => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				// screenOptions={{
				// 	header: () => null,
				// }}
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen
					name="Register"
					component={Register}
					// options={{
					// headerTitle: "Sign Up"
					// 	header: () => null
					// }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
