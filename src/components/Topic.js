import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Topic = (props) => {
  return (
    <View style={styles.topic}>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <Text>
        {props.content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topic: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Topic;
