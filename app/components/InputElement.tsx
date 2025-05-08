import { View, TextInput, Image, ImageSourcePropType, Text } from 'react-native';
import React from 'react';
import { style } from '@/styles/style';
import { colorsWhiteMode } from '../const/colors';

interface InputElementsData {
    placeholder: string;
    icon: ImageSourcePropType;
    text: string
}
export default function InputElement(params: InputElementsData) {
    const { icon, placeholder, text } = params
    return (
        <View style={style.InputElement}>
            <View style={{width:"80%"}}>
            <Text  style={{ fontSize:12,  color:colorsWhiteMode.text_color, fontWeight:"medium"}}>{text}</Text>
            </View>
            <View style={style.InputElementAuth}>
                <Image source={icon} style={{ width: 24, height: 24, marginBottom: 10 }} />
                <TextInput
                    style={{ marginBottom: 10, width: "100%", marginLeft: 3,  }}
                    placeholder={placeholder}
                />
            </View>
        </View>
    );
}
