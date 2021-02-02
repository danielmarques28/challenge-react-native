import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { normalizeDate } from '../../helpers';

export default function ProfileCard(props) {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        props.navigation.navigate('Profile', { user: props.user });
      }}
    >
      <ImageBackground
        source={require('../../assets/images/background-card.jpg')}
        style={styles.containerPhoto}
        imageStyle={styles.imageStyle}
      >
        <Image
          style={styles.image}
          source={{ uri: props.user.avatar }}
        />
      </ImageBackground>

      <View style={styles.containerInfo}>
        <View>
          <Text style={styles.title}>{props.user.name}</Text>
        </View>

        <View style={styles.containerInfo}>
          <View style={styles.containerData}>
            <Icon
              style={styles.icon}
              name="phone"
              size={20}
              color="white"
            />
            <Text style={styles.text}>
              {props.user.phone}
            </Text>
          </View>

          <View style={styles.containerData}>
            <Icon
              style={styles.icon}
              name="event"
              size={20}
              color="white"
            />
            <Text style={styles.text}>
              {normalizeDate(props.user.birth)}
            </Text>
          </View>

          <View style={styles.containerData}>
            <Icon
              style={styles.icon}
              name="work"
              size={20}
              color="white"
            />
            <Text style={styles.text}>
              {props.user.office}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    color: 'white'
  },
  container: {
    flex: 1,
    minWidth: '92%',
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#1e3046',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
  },
  containerInfo: {
    padding: 10,
  },
  icon: {
    marginRight: 5
  },
  containerData: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  containerPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  imageStyle: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  }
});
