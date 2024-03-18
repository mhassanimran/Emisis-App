import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import StackNavigation from './StackNavigation';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';


function App() {

  // const [userData, setUserData] = useState({});
  const [initRoute, setInitRoute] = React.useState("");

  React.useEffect(() => {

    (async () => {
      try {
        const value = await AsyncStorage.getItem("userdata");
        const data = JSON.parse(value);
        console.log(data);
        if (data !== null) {
          setInitRoute("Home");
        } else {
          setInitRoute("Welcome");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [initRoute]);

  console.log(initRoute, "heree")


  if (initRoute !== "") {
    return <StackNavigation initRoute={initRoute} />
  }
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};