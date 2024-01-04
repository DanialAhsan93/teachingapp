import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <ScrollView>

      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>Reactify Teaching App</Text>
        <Text style={styles.paraStyle}>I am a full stack developer</Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }}
            resizemode="cover" />
        </View>

        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>
            About me
          </Text>
          <Text style={[styles.paraStyle, styles.paraabout]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et
            dolore magna.Sed do eiusmod tempor incididunt ut labore et
            dolore magna

          </Text>
        </View>
        <Text style={styles.mainHeader}>
          Follow me on Social Network
        </Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.pinterest.com/login/")}
          >
            <Image
              style={styles.iconStyle}
              source={require('../../assets/images/pinterest.png')}
              resizemode="cover"
            />

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.youtube.com/")}
          >
            <Image
              style={styles.iconStyle}
              source={require('../../assets/images/youtube.png')}
              resizemode="cover"
            />

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.whatsapp.com/")}
          >
            <Image
              style={styles.iconStyle}
              source={require('../../assets/images/whatsapp.png')}
              resizemode="cover"
            />

          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.instagram.com/")}
          >
            <Image
              style={styles.iconStyle}
              source={require('../../assets/images/instagram.png')}
              resizemode="cover"
            />

          </TouchableOpacity>
          

        </View>
      </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  imgContainer: {
    display: 'flex',
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    // height: undefined,
    // aspectRatio: 16 / 9,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontFamily: 'regular',
    paddingBottom: 20,
    marginTop: 50,
    lineHeight: 30,
  },
  paraStyle: {
    fontSize: 16,
    color: '#707070',
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#fff',
    fontFamily: 'regular',
    marginVertical: 15,
    alignSelf: 'center',
    lineHeight: 30,
  },
  paraabout: {
    color: '#fff',
  },
  menuContainer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent:"space-evenly",
    marginBottom:50,
  },
})

export default About

