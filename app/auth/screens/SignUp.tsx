import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AuthElementTop from '../components/AuthElementTop'
import InputElement from '../components/InputElement'
import UserIcon from "@/assets/userIcon.png"
import CallIcon from "@/assets/call.png"
import passwordIcon from '@/assets/access.png';
import mailIcon from '@/assets/mail-02.png';
import ButtonComponent from '../components/Button'
import arrowWiteIcon from "@/assets/whiteArrow.png"
import ArrowBackIcon from "@/assets/Arrow back ios new.png"
import colorsWhiteMode from '@/app/const/colors'
import { Image } from 'react-native'
import { router } from 'expo-router'
import UseSignUp from '@/app/hooks/UseSignUp'
import { Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
export default function SignUp() {
    const { control, handleSubmit, onSubmit, errors } = UseSignUp()
    return (
        <SafeAreaView>
            <ScrollView>
    
                <View>
                    <AuthElementTop
                        title='Crie sua conta'
                        subtitle='Informe os seus dados pessoais e de acesso'
                    />
                </View>
                <Controller
                    control={control}
                    rules={{
                        required: "Campo obrigatorio",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={{ marginTop: 50 }}>
                            <InputElement
                                placeholder='Nome'
                                icon={UserIcon}
                                text='NOME'
                                type='default'
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        </View>
                    )}
                    name="name"
                />
                <ErrorMessage errors={errors} name="name" render={({ message }) => <Text style={{ fontSize: 8, color: "red", textAlign: "center" }}>{message}</Text>} />
                <Controller
                    control={control}
                    rules={{
                        required: "Campo obrigatorio",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <View style={{ marginTop: 20 }}>
                            <InputElement
                                placeholder='(00) 00000-0000'
                                icon={CallIcon}
                                text='TELEFONE'
                                type="phone-pad"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        </View>
                    )}
                    name="phone_number"
                />
                <ErrorMessage errors={errors} name="phone_number" render={({ message }) => <Text style={{ fontSize: 8, color: "red", textAlign: "center" }}>{message}</Text>} />

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 40 }}>
                    <View style={{ width: "80%", }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Acesso</Text>
                    </View>
                </View>

                <Controller
                    control={control}
                    rules={{
                        required: "Campo obrigatorio",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (


                        <View style={{ marginTop: 20 }}>
                            <InputElement
                                placeholder='mail@exemplo.ao'
                                icon={mailIcon}
                                text='E-MAIL'
                                type="email-address"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        </View>
                    )}
                    name="email"
                />

                <ErrorMessage errors={errors} name="email" render={({ message }) => <Text style={{ fontSize: 8, color: "red", textAlign: "center" }}>{message}</Text>} />

                <Controller
                    control={control}
                    rules={{
                        required: "Campo obrigatorio",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={{ marginTop: 20 }}>
                            <InputElement
                                placeholder='mail@exemplo.ao'
                                icon={passwordIcon}
                                text='SENHA'
                                type="visible-password"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        </View>
                    )}
                    name="password"
                />
                <ErrorMessage errors={errors} name="password" render={({ message }) => <Text style={{ fontSize: 8, color: "red", textAlign: "center" }}>{message}</Text>} />

                <Controller
                    control={control}
                    rules={{
                        required: "Campo obrigatorio",
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={{ marginTop: 20 }}>
                            <InputElement
                                placeholder='mail@exemplo.ao'
                                icon={passwordIcon}
                                text=' CONFIRMAR SENHA'
                                type="visible-password"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        </View>
                    )}
                    name="confPassword"
                />
                <ErrorMessage errors={errors} name="confPassword" render={({ message }) => <Text style={{ fontSize: 8, color: "red", textAlign: "center" }}>{message}</Text>} />


                <View>
                    <View style={{ marginTop: 20 }}>
                        <ButtonComponent
                            screen='home'
                            text='Cadastrar'
                            icon={arrowWiteIcon}
                            Onpress={handleSubmit(onSubmit)}

                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}