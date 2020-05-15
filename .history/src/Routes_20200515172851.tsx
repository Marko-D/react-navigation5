import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";

interface RoutesProps {}

const Stack = createStackNavigator();

function Login () {
    return (
        <View>
            <Text>I am login screen</Text>
        </View>
    )
}

export const Routes: React.FC<RoutesProps> = ({}) => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login"  component={}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
