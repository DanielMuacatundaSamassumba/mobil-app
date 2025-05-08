import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from "@/styles/style"
import AuthElementTop from '../components/AuthElementTop'
import logo from "./../../assets/Logo (2).png"
import imageInitialLoad from "./../../assets/Logo (1).png"
import InputElement from '../components/InputElement'
import mailIcon from '@/assets/mail-02.png';
import passwordIcon from '@/assets/access.png';
import ButtonComponent from '../components/Button'
import arrowWiteIcon from "@/assets/whiteArrow.png"
import arrowOrange from "@/assets/arrow-right-02.png"
import { colorsWhiteMode } from '../const/colors'
export default function login() {
    return (
        <SafeAreaView style={style.login_container} >
            <View>
                <AuthElementTop
                    title='Acesse sua conta'
                    subtitle='Informe seu e-mail e senha para entrar'
                />
            </View>
            <View style={style.form_login}>
                <View>
                    <InputElement
                        placeholder='mail@exemplo.ao'
                        icon={mailIcon}
                        text='Email'
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <InputElement
                        placeholder='mail@exemplo.ao'
                        icon={passwordIcon}
                        text='Senha'
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <ButtonComponent
                        screen='home'
                        text='Acessar'
                        icon={arrowWiteIcon}
                    />
                </View>
                <View style={{ marginTop: 20, height: "50%" }}>
                    <View style={style.SigUElementBottom}>
                        <View style={{ width: "90%" }}>
                            <Text style={{ marginBottom: 10 , color:colorsWhiteMode.text_color, fontSize:16}}>
                                Ainda não tem uma conta?
                            </Text>
                        </View>
                        <ButtonComponent
                            screen='sigup'
                            text='Cadastrar'
                            icon={arrowOrange}
                        />
                    </View>
                </View>


            </View>
        </SafeAreaView>
    )
}