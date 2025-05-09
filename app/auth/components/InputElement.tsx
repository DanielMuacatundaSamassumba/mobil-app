import { View, TextInput, Image, ImageSourcePropType, Text, TouchableOpacity, NativeSyntheticEvent, TextInputFocusEventData, KeyboardTypeOptions } from 'react-native';
import React, { useState } from 'react';
import { style } from '@/styles/style';
import colorsWhiteMode from '../../const/colors';
import EyeOpned from "@/assets/Vector.png"
import EyeOff from "@/assets/Hide.png"
interface InputElementsData {
    placeholder: string;
    icon: ImageSourcePropType;
    text: string,
    type?: KeyboardTypeOptions | undefined,
    value?: string,
    onChangeText?: ((text: string) => void) | undefined,
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined
}
export default function InputElement(params: InputElementsData) {
    const [IsShow, setIsShow] = useState(true)
    const { icon, placeholder, text, type, onBlur, onChangeText, value } = params
    return (
        <View style={style.InputElement}>
            <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 12, color: colorsWhiteMode.text_color, fontWeight: "semibold" }}>{text}</Text>
            </View>
            {
                type == "email-address" ? (
                    <View style={style.InputElementAuth}>
                        <Image source={icon} style={{ width: 24, height: 24, marginBottom: 10 }} />
                        <TextInput
                            style={{ marginBottom: 10, width: "100%", marginLeft: 3, }}
                            placeholder={placeholder}
                            keyboardType={type}
                            onBlur={onBlur}
                            onChangeText={onChangeText}
                            value={value}
                        />
                    </View>
                ) : type == "visible-password" ? (
                    <View style={style.InputElementAuth}>
                        <Image source={icon} style={{ width: 24, height: 24, marginBottom: 10 }} />
                        <View style={style.InputContent_password}>
                            <TextInput
                                style={{ marginBottom: 10, width: "100%", marginLeft: 3, }}
                                placeholder={placeholder}
                                secureTextEntry={IsShow}
                                keyboardType="visible-password"
                                onBlur={onBlur}
                                onChangeText={onChangeText}
                                value={value}
                            />
                            <TouchableOpacity onPress={() => setIsShow(!IsShow)}>
                                {
                                    IsShow ? (
                                        <Image
                                            source={EyeOpned}
                                            style={{ width: 21, height: 14 }}
                                        />
                                    ) : (
                                        <Image
                                            source={EyeOff}
                                            style={{ width: 21, height: 14 }}
                                        />
                                    )

                                }
                            </TouchableOpacity>
                        </View>

                    </View>
                ) : (
                    <View style={style.InputElementAuth}>
                        <Image source={icon} style={{ width: 24, height: 24, marginBottom: 10 }} />
                        <TextInput
                            style={{ marginBottom: 10, width: "100%", marginLeft: 3, }}
                            placeholder={placeholder}
                            keyboardType={type}
                            onBlur={onBlur}
                            onChangeText={onChangeText}
                            value={value}
                        />
                    </View>
                )
            }
        </View>
    );
}
