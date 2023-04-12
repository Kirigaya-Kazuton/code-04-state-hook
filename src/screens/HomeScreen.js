import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';


function HomeScreen({navigation}) {
  return (
    <View>
      <Button 
        title='Vai para Topics' 
        onPress={() => navigation.navigate('Topics')}
      />
      <TouchableOpacity>
        <Text>TouchableOpacity Teste!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default HomeScreen;
