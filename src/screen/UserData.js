import { StyleSheet, Text, View, FlatList, ViewBase, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import { fontLoad } from './Fonts';

const UserData = () => {
  const [IsLoaded, setIsLoaded] = useState(true)
  const [realData, setrealData] = useState([])
  const [fontIsLoad, setfontIsLoad] = useState(false)
  const getData = async () => {
    try {
      const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
      const studentData = await response.json();
      setrealData(studentData)
      setIsLoaded(false)
    } catch (error) {
      console.log('....studentData', error)
    }

  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const LoadFonts = async () => {
      const fontslibrary = await fontLoad();
      setfontIsLoad(fontslibrary)
    }
    LoadFonts()
  }, []);

  if (!fontIsLoad || IsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4c5dab" />
      </View>
    );
  }



  const applicantsData = ({ item }) => {
    return (
      <View style={styles.viewCard}>
        <View style={styles.imgCard}>
          <Image
            style={styles.imgUser}
            source={{ uri: item.image }}
            resizemode="cover"
          />

        </View>
        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>
              Bio-Data
            </Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
            </Text>
          </View>

          <View style={styles.mainContainer}>
            <Text style={styles.myName}>Name : {item.name}</Text>
            <Text style={styles.myName}>email : {item.email}</Text>
            <Text style={styles.myName}>Mobile : {item.mobile}</Text>
          </View>
        </View>

      </View>

    )
  }

  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.mainHeader}>List of Students</Text>
        <FlatList
          data={realData ? realData.slice(0, 7) : []}
          renderItem={applicantsData}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

    </View>

  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  viewCard: {
    backgroundColor: '#fff',
    width: 250,
    height: 310,
    marginHorizontal: 12,
    display: 'flex',
    justifyContent: 'space-between',
  },
  imgCard: {
    display: 'flex',
    width: '100%',
    padding: 7,
  },
  imgUser: {
    height: undefined,
    aspectRatio: 14 / 9,
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#353535',
    paddingVertical: 10,
  },
  mainContainer: {
    backgroundColor: '#353535',
    paddingHorizontal: 8,
    // borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  idNumber: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'medium'
  },
  bioData: {
    fontFamily: 'medium',
    fontSize: 24,
    color: '#fff',
  },
  mainHeader: {
    fontSize: 26,
    color: '#a18ce5',
    textAlign: 'center',
    fontFamily: 'regular',
    paddingBottom: 20,
  },
  myName: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    fontFamily: 'regular',
  },
})
export default UserData

