import React from "react"
import {Text,View,StyleSheet,TouchableOpacity,Image} from "react-native"
import FirstPage from "./GetApi/FirstPage"
import SecondPage from "./GetApi/SecondPage"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


const App=()=>{
return(
    <View>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="FirstPage" component={FirstPage}/>
      <Stack.Screen name="SecondPage" component={SecondPage}/>
    </Stack.Navigator>
    </NavigationContainer>
    </View>
)
}
export default App