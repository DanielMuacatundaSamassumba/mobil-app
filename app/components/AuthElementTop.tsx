import {
    View,
    Text,
    Image
} from 'react-native'
import React from 'react'
import { style } from '@/styles/style'
interface authElementDataType {
    title: string,
    subtitle: string
}
import logo from "./../../assets/Logo (2).png"
export default function AuthElementTop(params: authElementDataType) {
    const { title, subtitle } = params
    return (
        <View>
            <View style={style.AuthElementTop_content}>
                <Image
                    source={logo} 
                    style={style.AuthElementTop_logo} 
                />

                <Text style={style.AuthElementTop_title}>{title}</Text>
                <Text style={style.AuthElementTop_subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}