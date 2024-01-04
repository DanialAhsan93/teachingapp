import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Course')}>
        <Image
          style={styles.menuIcon}
          source={{ uri: "https://img.icons8.com/color/48/knowledge-sharing.png" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Student')}>
       <Image
          style={styles.menuIcon}
          source={{ uri: "https://img.icons8.com/color/48/man_reading_a_book.png" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('About')}>
        <Image
          style={styles.menuIcon}
          source={{ uri: "https://img.icons8.com/nolan/64/about.png" }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')}>
       <Image
          style={styles.menuIcon}
          source={{ uri: "https://img.icons8.com/color/48/contact-card.png" }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  menuIcon: {
    width: '100%',
    height: 40,
    aspectRatio: 1,
  },
})
export default Menu

