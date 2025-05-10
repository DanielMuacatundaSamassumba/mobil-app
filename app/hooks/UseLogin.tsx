import { View, Text } from 'react-native'
import React from 'react'
import { useForm } from "react-hook-form"
import { router } from 'expo-router'
export interface dataTypes {
    email: string,
    password: string
}
export default function UseLogin() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    function onSubmit(data: dataTypes) {
        router.navigate("/app/mione")
    }
    return {
        control,
        handleSubmit,
        errors,
        onSubmit
    }
}