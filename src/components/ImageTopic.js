import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Topic from './Topic';

const ImageTopic = ({ title, content, image }) => {
  return (
    <View>
      <Topic
        title={title}
        content={content}
      />
      <Image
        source={image}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
  }
});

export default ImageTopic;
