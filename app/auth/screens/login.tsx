import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { style } from "@/styles/style"
import AuthElementTop from '../components/AuthElementTop'
import logo from "@/assets/Logo (2).png"
import imageInitialLoad from "./../../assets/Logo (1).png"
import InputElement from '../components/InputElement'
import mailIcon from '@/assets/mail-02.png';
import passwordIcon from '@/assets/access.png';
import ButtonComponent from '../components/Button'
import arrowWiteIcon from "@/assets/whiteArrow.png"
import arrowOrange from "@/assets/arrow-right-02.png"
import colorsWhiteMode from '@/app/const/colors'
import UseLogin from '@/app/hooks/UseLogin'
import { Control, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'expo-router'

export default function login() {
    const { control, handleSubmit, errors, onSubmit } = UseLogin()

    return (
        <SafeAreaView style={style.login_container} >
            <View>
                <AuthElementTop
                    title='Acesse sua conta'
                    subtitle='Informe seu e-mail e senha para entrar'
                />
            </View>
            <View style={style.form_login}>

                <Controller
                    control={control}
                    rules={{
                        required: "Compo Obrigatório",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <InputElement
                                placeholder='mail@exemplo.ao'
                                icon={mailIcon}
                                text='Email'
                                type='email-address'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="email"
                />
                <ErrorMessage errors={errors} name="email" render={({ message }) => <Text style={{ fontSize: 8, color: "red", textAlign: "left" }}>{message}</Text>} />

                <Controller
                    control={control}
                    rules={{
                        required: "Compo Obrigatório",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={{ marginTop: 20 }}>
                            <InputElement
                                type='visible-password'
                                placeholder='mail@exemplo.ao'
                                icon={passwordIcon}
                                text='Senha'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="password"
                />
                <ErrorMessage errors={errors} name="password" render={({ message }) => <Text style={{ fontSize: 8, color: "red", textAlign: "center" }}>{message}</Text>} />

                <View style={{ marginTop: 20 }}>
                    <ButtonComponent
                        screen='home'
                        text='Acessar'
                        icon={arrowWiteIcon}
                        Onpress={handleSubmit(onSubmit)}
                    />
                </View>
                <View style={{ marginTop: 20, height: "50%" }}>
                    <View style={style.SigUElementBottom}>
                        <View style={{ width: "90%" }}>
                            <Text style={{ marginBottom: 10, color: colorsWhiteMode.text_color, fontSize: 16 }}>
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