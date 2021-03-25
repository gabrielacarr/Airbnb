import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      {/* Search Bar Component */}

      <ImageBackground
        source={require('../../../assets/images/airbnb.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near </Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore btn pressed')}>
          <Text> Explores nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
