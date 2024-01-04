import * as Font from "expo-font";

export const fontLoad = async () => {
    try {
        await Font.loadAsync({
            'regular': require('../../assets/fonts/static/NunitoSans_10pt-Regular.ttf'),
            'semibold': require('../../assets/fonts/static/NunitoSans_10pt-SemiBold.ttf'),
            'bold': require('../../assets/fonts/static/NunitoSans_10pt-Bold.ttf'),
            'medium': require('../../assets/fonts/static/NunitoSans_10pt-Medium.ttf'),
        });
        return (true)

    } catch (error) {
        console.log('font error', error)
    }
}