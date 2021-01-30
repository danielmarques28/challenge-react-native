import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Profile() {
  const [text, setText] = useState('');

  useEffect(() => {

  }, []);

  return (
    <View styles={styles.container}>
      <Text>Profile</Text>
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
