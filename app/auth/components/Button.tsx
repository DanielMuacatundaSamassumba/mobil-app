import { View, Text, Button, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { style } from '@/styles/style'
import { router } from 'expo-router'
interface ButtonElementsData {
    icon: ImageSourcePropType;
    text: string;
    screen: string,
    Onpress?:()=>{}
}
export default function ButtonComponent(params: ButtonElementsData) {
    const { text, icon, screen, Onpress } = params

    return (
        <View style={style.contentButtonElement}>
            {
                screen == "home" ? (
                    <TouchableOpacity style={style.ContainerButtonCustom} onPress={Onpress}  >
                        <View style={style.ButtonCustumAuth}>
                            <Text style={style.Text_button}>{text}</Text>
                            <Image source={icon} style={{ width: 18, height: 12 }} />
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={style.ContainerButtonCustom}  onPress={()=>router.navigate("/auth/screens/SignUp")} >
                        <View style={style.ButtonCustumAuth_sigUp}>
                            <Text style={style.Text_button_signUp}>{text}</Text>
                            <Image source={icon} style={{ width: 18, height: 12 }} />
                        </View>
                    </TouchableOpacity>
                )
            }

        </View>
    )
}