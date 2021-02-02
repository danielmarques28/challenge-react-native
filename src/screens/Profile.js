import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground } from 'react-native';
import ProfileInfo from '../components/profile/ProfileInfo';
import { normalizeDate } from '../helpers';

export default function Profile({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#90c6f2"
      />

      <ScrollView>
        <ImageBackground
          source={require('../assets/images/background.jpg')}
          style={styles.containerPhoto}
        >
          <Image
            style={styles.image}
            source={{ uri: user.avatar }}
          />

          <View style={styles.userName}>
            <Text style={styles.title}>{user.nickname}</Text>
          </View>
        </ImageBackground>

        <View style={styles.containerDescription}>
          <ProfileInfo
            icon={'contact-page'}
            label={'Full Name'}
            value={user.name}
          />
          <ProfileInfo
            icon={'event'}
            label={'Birthday'}
            value={normalizeDate(user.birth)}
          />
          <ProfileInfo
            icon={'phone'}
            label={'Phone'}
            value={user.phone}
          />
          <ProfileInfo
            icon={'wc'}
            label={'Gender'}
            value={user.gender}
          />
          <ProfileInfo
            icon={'location-on'}
            label={'Address'}
            value={user.address}
          />
          <ProfileInfo
            icon={'work'}
            label={'Office'}
            value={user.office}
          />
          <ProfileInfo
            icon={'phone-in-talk'}
            label={'Telegram'}
            value={`@${user.telegram}`}
          />
          <ProfileInfo
            icon={'camera-alt'}
            label={'Instagram'}
            value={`@${user.instagram}`}
          />
          <ProfileInfo
            icon={'tag'}
            label={'Twitter'}
            value={`@${user.twitter}`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#0b1521'
  },
  containerPhoto: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  containerDescription: {
    flex: 0.55,
    margin: 20
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 1000
  },
  userName: {
    marginTop: 20,
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  }
});
