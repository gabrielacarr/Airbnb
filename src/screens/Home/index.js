import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search btn pressed')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you traveling?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/airbnb.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near </Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore btn pressed')}>
          <Text style={styles.buttonText}>Explore nearby</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
