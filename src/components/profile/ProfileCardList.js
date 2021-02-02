import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ProfileCard from './ProfileCard';
import usersList from '../../data/users';

export default function ProfileCardList(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = usersList();
    setUsers(users);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          users.map((item, index) => (
            <ProfileCard
              key={index}
              user={item}
              navigation={props.navigation}
            />
          ))
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
    backgroundColor: '#0b1521',
    alignItems: 'center'
  },
});
