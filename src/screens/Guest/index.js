import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

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
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={{color: 'grey'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20}}>{adults}</Text>

          {/* + */}
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={{color: 'grey'}}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Row Two: Children */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{fontWeight: 'bold'}}>Children</Text>
          <Text style={{color: 'grey'}}>Ages 2-12</Text>
        </View>
        {/* Buttons with given value  */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', fontSize: 15}}>
          {/* - */}
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}>
            <Text style={{color: 'grey'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20}}>{children}</Text>

          {/* + */}
          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}>
            <Text style={{color: 'grey'}}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Row Three: Infants */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: 'grey'}}>Under 2</Text>
        </View>
        {/* Buttons with given value  */}
        <View
          style={{flexDirection: 'row', alignItems: 'center', fontSize: 15}}>
          {/* - */}
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={{color: 'grey'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20}}>{infants}</Text>

          {/* + */}
          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text style={{color: 'grey'}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default GuestScreen;
