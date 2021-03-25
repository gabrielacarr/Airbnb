import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';

const GuestScreen = () => {
  return (
    <View>
      {/* Row One Adults */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text>Ages 13 or above</Text>
        </View>
        {/* Buttons with given value  */}
        <View>
          {/* - */}
          <Pressable
            onPress={() => console.console.warn((data: '-clicked'))}
            style={styles.button}>
            <Text>-</Text>
          </Pressable>
          <Text>0</Text>

          {/* + */}
          <Pressable
            onPress={() => console.console.warn((data: '+clicked'))}
            style={styles.button}>
            <Text>+</Text>
          </Pressable>
          <Text>0</Text>
        </View>
      </View>
    </View>
  );
};
export default GuestScreen;
