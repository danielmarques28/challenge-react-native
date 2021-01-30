import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  const [text, setText] = useState('');

  useEffect(() => {

  }, []);

  return (
    <View styles={styles.container}>
      <Text>Home</Text>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
