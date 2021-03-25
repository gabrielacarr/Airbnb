import React from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      {/* Search Bar Component */}

      <ImageBackground
        source={require('../../../assets/images/airbnb.jpg')}
        style={styles.image}>
        {/* Title */}

        {/* Button */}
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
