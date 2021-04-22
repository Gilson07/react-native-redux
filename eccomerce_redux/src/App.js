import React from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/Stack';
import Store from './store/index';

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#01070a" />
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Routes />
        </View>
      </NavigationContainer>
    </Provider>
  )
};

export default App;