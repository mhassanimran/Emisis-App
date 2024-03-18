import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sos from './Screens/Sos';
import Locate from './Screens/Locate';
import UserLocate from './Screens/UserLocate';
import Welcome from './Screens/Welcome';
import PickupRoute from './Screens/PickupRoute';
import Searching from './Screens/Searching';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="Welcome" component={Welcome} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="SOS" component={Sos} />
            <Tab.Screen name="Locate" component={Locate} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Signup" component={Signup} />
            <Tab.Screen name="UserLocation" component={UserLocate} />
            <Tab.Screen name="PickupRoute" component={PickupRoute} />
            <Tab.Screen name="Searching" component={Searching} />
        </Tab.Navigator>
    );
}

export default TabNavigator