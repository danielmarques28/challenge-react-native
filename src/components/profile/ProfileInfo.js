import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileInfo(props) {
  return (
    <View style={styles.container}>
      <View>
        <Icon
          style={styles.icon}
          name={props.icon}
          size={35}
          color="white"
        />
      </View>

      <View>
        <View style={styles.containerLabel}>
          <Text style={styles.label}>{props.label}</Text>
        </View>
        <View style={styles.containerValue}>
          <Text style={styles.value}>{props.value}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  containerLabel: {
    marginBottom: 8
  },
  icon: {
    marginTop: 8,
    marginRight: 10
  },
  label: {
    color: '#838a94'
  },
  containerValue: {
    marginBottom: 20
  },
  value: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  }
});
