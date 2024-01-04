import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Courses } from './Data';
import { fontLoad } from './Fonts';
const Course = ({ navigation }) => {
  const [fontIsLoad, setfontIsLoad] = useState(false)
  
  useEffect(() => {
    const LoadFonts = async () => {
      const fontslibrary = await fontLoad();
      setfontIsLoad(fontslibrary)
    }
    LoadFonts()
  }, []);

  if (!fontIsLoad) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4c5dab" />
      </View>
    );
  }

  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.imgStyle}
              source={item.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.mainHeader}>
            {item.title}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("Student")}>
              <Text style={styles.txtbtn}>
                Course Details
              </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    )
  }
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,

  },
  imgContainer: {
    display: 'flex',
  },
  imgStyle: {
    width:'100%',
    height: undefined,
    aspectRatio: 16/9,
    borderRadius: 10,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: 'uppercase',
    paddingVertical: 15,
    textAlign: 'center',
    fontFamily: 'medium',
  },
  description: {
    fontSize: 16,
    fontFamily: 'medium',
    paddingBottom: 20,
    lineHeight: 20,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtbtn: {
    fontSize: 18,
    color: "#eee",
    fontFamily: 'medium',
  },
})

export default Course

