import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles.js';

const DestinationSearchScreen = props => {
  return (
    <View>
      {/* Input Component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you traveling?"
      />
      {/* List of Destinations */}
    </View>
  );
};

export default DestinationSearchScreen;
