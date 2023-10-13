import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHRR3hmaWGnKRU1flnUvukPsjQ6KFG2iKkQ&usqp=CAU' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Tabanyag</Text>
      <Text style={styles.bio}>
    Bachelor of Science in Information Technology
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  username: {
    color: '#777',
    fontSize: 16,
    marginTop: 5,
  },
  bio: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: 'center',
  },
});

export default ProfileScreen;
