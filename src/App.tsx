

import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { appStyles } from './config/theme/app-theme';

export default function App() {
  return (
    <View style={ appStyles.background }>
      <StatusBar barStyle={ 'light-content' } backgroundColor={ 'black' } />
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create( {

} );
