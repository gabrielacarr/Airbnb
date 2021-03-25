import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';

const Post = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri:
            'https://a0.muscache.com/im/pictures/miso/Hosting-36908284/original/30fb92c2-e4df-479d-912a-c63de33415e0.jpeg?im_w=480',
        }}
      />
      {/* Bed and Bedroom */}

      {/* Type description */}

      {/* Old and New price */}

      {/* Total price */}
    </View>
  );
};

export default Post;
