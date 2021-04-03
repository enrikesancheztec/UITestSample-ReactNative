import React from 'react';
import { View, SafeAreaView, Text, Alert } from 'react-native';
import MainView from './views/MainView'

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView>
    <View>
        <MainView/>
    </View>
  </SafeAreaView>
);

export default App;