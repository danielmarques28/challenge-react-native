import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import ProfileCardList from '../components/profile/ProfileCardList';

export default function Home({ navigation }) {
  const [text, setText] = useState('');

  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#0b1521"
      />

      <ProfileCardList
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0b1521'
  },
});
