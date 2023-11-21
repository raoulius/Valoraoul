import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppNavigator from './AppNavigator';
import SplashScreen from './pages/SplashScreen';

export default function App() {
  const [isSplash, setIsSplash] = React.useState(true);

  React.useEffect(() => {
    
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isSplash ? <SplashScreen /> : <AppNavigator />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
