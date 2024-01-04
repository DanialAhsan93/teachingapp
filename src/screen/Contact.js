import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import CheckBox from 'expo-checkbox';

const Contact = ({ navigation }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const [agree, setagree] = useState(false);

  const submit = () => {
    if (!name && !email && !password && !message) {
      Alert.alert("Please fill the above fields")
    } else {
      Alert.alert(`Thank you ${name}`)
      navigation.navigate("Reactify-Teaching-App");
    }
  }
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}>Level up your knowledge</Text>
        <Text style={styles.description}>
          You can reach us anytime via reactify@teaching.com
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter your Name</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            value={name}
            onChangeText={(UserData) => setname(UserData)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter your Email</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            value={email}
            onChangeText={(userData) => setemail(userData)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter your Mobile number</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="123456789"
            value={password}
            onChangeText={(userData) => setpassword(userData)}
            autoCapitalize="none"
            keyboardType='numeric'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>How can I help you ?</Text>
          <TextInput
            style={[styles.inputStyle, styles.multiLineStyle]}
            placeholder="Tell us about yourself"
            value={message}
            onChangeText={(msg) => setmessage(msg)}
            numberOfLines={5}
            autoCapitalize="none"
            multiline={true}
          />
        </View>

        <View style={styles.wrapper}>
          <CheckBox
            value={agree}
            onValueChange={() => setagree(!agree)}
            color={agree ? "#4630EB" : undefined}
          />
          <Text style={styles.wrapperText}>
            I have read and agreed with this
          </Text>
        </View>

        <TouchableOpacity
          disabled={!agree}
          style={[styles.buttonStyle, { backgroundColor: agree ? "#4630EB" : "grey" }]}
          onPress={submit}
        >
          <Text style={styles.buttontext}>
            Contact Us
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    paddingTop: 20,
    paddingBottom: 15,
    fontFanily: 'regular',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    fontFamily: 'regular',
  },
  inputContainer: {
    marginTop: 20,
  },
  inputStyle: {
    borderWidth: 0.5,
    borderColor: "rgbe(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  labels: {
    fontWeight: "bold",
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "regular",
    lineHeight: 25,
  },
  multiLineStyle: {
    paddingVertical: 4,
    marginBottom: 20,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: 30,
  },
  buttontext: {
    color: '#eee'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    fontFamily: 'regular',

  },
  wrapperText: {
    marginLeft: 10,
    color: '#7d7d7d',
    fontFamily: 'regular',
  },
})

export default Contact

