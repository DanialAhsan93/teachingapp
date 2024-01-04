import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import Menu from '../component/Menu';
import * as Font from 'expo-font'

const Home = () => {
    const [fontIsLoad, setfontIsLoad] = useState(false)
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna."
    const fontLoad = async () => {
        try {
            await Font.loadAsync({
                'regular': require('../../assets/fonts/static/NunitoSans_10pt-Regular.ttf'),
                'semibold': require('../../assets/fonts/static/NunitoSans_10pt-SemiBold.ttf'),
                'bold': require('../../assets/fonts/static/NunitoSans_10pt-Bold.ttf'),
            });
            setfontIsLoad(true)

        } catch (error) {
            console.log('font error', error)
        }
    }
    useEffect(() => {
        fontLoad()
    }, [])

    if (!fontIsLoad) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#4c5dab" />
            </View>
        );
    }

    return (
        <View style={styles.mainContaner}>
            <View style={styles.homeTop}>
                <Image
                    source={require('../../assets/images/logo.jpg')}
                    style={styles.headerImage}
                    resizeMode="cover"
                />
                <Text style={styles.mainHeader}>
                    Welcome to
                </Text>
                <Text style={[styles.mainHeader, { fontSize: 20, marginTop: 0, color: '#4c5dab' }]}>
                    Reactify Teaching App
                </Text>
                <Text style={styles.paraStyle}>
                    {description}
                </Text>

            </View>
            <View style={styles.menuStyle}>
                <View style={styles.LineStyle}></View>
                <Menu />
                <View style={[styles.LineStyle, {
                    marginVertical: 10,
                }]}></View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContaner: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        textAlign: 'center',

    },
    homeTop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    headerImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
        display: 'flex',
        alignItems: 'stretch',
        marginTop: 50,
        borderRadius: 10,
        marginBottom: 40,
    },
    mainHeader: {
        fontSize: 18,
        color: '#344055',
        textTransform: 'uppercase',
        fontFamily: 'regular'
    },
    paraStyle: {
        textAlign: 'left',
        color: "#7d7d7d",
        fontSize: 18,
        marginTop: 30,
        paddingBottom: 50,
        lineHeight: 26,
        fontFamily:'regular'
    },
    LineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        opacity: 0.7,
        borderColor: 'grey',

    },
})
export default Home

