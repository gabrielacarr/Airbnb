import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      {/* Search Bar Component */}

      <ImageBackground
        source={require('../../../assets/images/airbnb.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near </Text>

        {/* Button */}
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
