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
          <Text style={{color: 'grey'}}>Ages 13 or above</Text>
        </View>
        {/* Buttons with given value  */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', fontSize: 15}}>
          {/* - */}
          <Pressable
            onPress={() => console.console.warn((data: '-clicked'))}
            style={styles.button}>
            <Text style={{color: 'grey'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20}}>0</Text>

          {/* + */}
          <Pressable
            onPress={() => console.console.warn((data: '+clicked'))}
            style={styles.button}>
            <Text style={{color: 'grey'}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default GuestScreen;
