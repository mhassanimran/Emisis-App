import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./Screens/Welcome";
import Home from "./Screens/Home";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import Sos from "./Screens/Sos";
import { NavigationContainer } from '@react-navigation/native';
import Locate from './Screens/Locate';
import UserLocate from './Screens/UserLocate';
import { useEffect } from 'react';
import PickupRoute from './Screens/PickupRoute';
import Searching from './Screens/Searching';

const Stack = createNativeStackNavigator();

function StackNavigation(props) {

    const screenOptions = {
        headerShown: false,
    };
    const transitionConfig = {
        animation: "spring",
        config: {
            stiffness: 500,
            damping: 50,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };


    useEffect(() => {

    }, [props.initRoute])


    return (
        <NavigationContainer
            initialRouteName={props.initRoute}
            screenOptions={{
                ...screenOptions,
                transitionSpec: {
                    open: transitionConfig,
                    close: transitionConfig,
                },
            }}
        >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SOS" component={Sos} />
                <Stack.Screen name="Locate" component={Locate} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UserLocation" component={UserLocate} />
                <Stack.Screen name="PickupRoute" component={PickupRoute} />
                <Stack.Screen name="Searching" component={Searching} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StackNavigation

