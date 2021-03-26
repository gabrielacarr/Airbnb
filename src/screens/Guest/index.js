import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
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
            onPress={() => setAdults(adults - 1)}
            style={styles.button}>
            <Text style={{color: 'grey'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20}}>{adults}</Text>

          {/* + */}
          <Pressable
            onPress={() => console.warn({data: '+clicked'})}
            style={styles.button}>
            <Text style={{color: 'grey'}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default GuestScreen;
